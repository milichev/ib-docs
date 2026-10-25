import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { mapPool } from "../concurrency.ts";
import {
  CACHE_DIR,
  CANONICAL_ORIGIN,
  DEFAULT_CONCURRENCY,
  MANIFEST_FILE,
  ROOT_LLMS_PATH,
} from "../constants.ts";
import type { Manifest, ManifestEntry, ScrapeOptions } from "../types.ts";
import {
  canonicalUrlString,
  normalizeDocsUrl,
  sectionOfUrl,
  urlToLocalPath,
} from "../urls.ts";
import { classifyLinks } from "./discover.ts";
import { fetchDocsText } from "./fetch.ts";

export type ScrapeResult = {
  ok: boolean;
  manifest: Manifest;
  stats: {
    llmsOk: number;
    llmsErr: number;
    pagesOk: number;
    pagesErr: number;
    pagesSkipped: number;
  };
};

function sha256(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

async function ensureDirForFile(filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function writeCacheFile(
  cacheDir: string,
  cachePath: string,
  body: string,
): Promise<void> {
  const full = path.join(cacheDir, cachePath);
  await ensureDirForFile(full);
  await writeFile(full, body, "utf8");
}

async function loadExistingManifest(cacheDir: string): Promise<Manifest | null> {
  try {
    const raw = await readFile(path.join(cacheDir, MANIFEST_FILE), "utf8");
    return JSON.parse(raw) as Manifest;
  } catch {
    return null;
  }
}

function entryKey(url: string, kind: ManifestEntry["kind"]): string {
  return `${kind}:${url}`;
}

async function fetchAndStore(
  url: string,
  kind: ManifestEntry["kind"],
  cacheDir: string,
): Promise<ManifestEntry> {
  const fetchedAt = new Date().toISOString();
  const normalized = normalizeDocsUrl(url);
  if (!normalized) {
    return {
      url,
      finalUrl: url,
      kind,
      section: null,
      cachePath: "",
      sha256: "",
      status: "error",
      error: "URL failed normalization",
      fetchedAt,
    };
  }

  const cachePath = urlToLocalPath(normalized);
  const section = sectionOfUrl(normalized);
  const requestUrl = canonicalUrlString(normalized);
  const result = await fetchDocsText(requestUrl);

  if (!result.ok) {
    return {
      url: requestUrl,
      finalUrl: result.finalUrl,
      kind,
      section,
      cachePath,
      sha256: "",
      status: "error",
      error: result.error,
      fetchedAt,
    };
  }

  await writeCacheFile(cacheDir, cachePath, result.body);

  return {
    url: requestUrl,
    finalUrl: result.finalUrl,
    kind,
    section,
    cachePath,
    sha256: sha256(result.body),
    status: "ok",
    fetchedAt,
  };
}

/**
 * Stage 1: discover via llms.txt, fetch raw bodies into cache/, write manifest.json.
 */
export async function scrape(options: Partial<ScrapeOptions> = {}): Promise<ScrapeResult> {
  const opts: ScrapeOptions = {
    section: options.section,
    concurrency: options.concurrency ?? DEFAULT_CONCURRENCY,
    force: options.force ?? false,
    keepGoing: options.keepGoing ?? false,
    cacheDir: options.cacheDir ?? CACHE_DIR,
  };

  await mkdir(opts.cacheDir, { recursive: true });

  const existing = opts.force ? null : await loadExistingManifest(opts.cacheDir);
  const existingOk = new Map<string, ManifestEntry>();
  if (existing) {
    for (const e of existing.entries) {
      if (e.status === "ok") {
        existingOk.set(entryKey(e.url, e.kind), e);
      }
    }
  }

  const entries: ManifestEntry[] = [];
  const sectionPageOrder: Record<string, string[]> = {};
  let pagesSkipped = 0;

  const rootUrl =
    normalizeDocsUrl(ROOT_LLMS_PATH) ??
    new URL(ROOT_LLMS_PATH, CANONICAL_ORIGIN);
  const rootKey = canonicalUrlString(rootUrl);

  console.log(`Fetching root llms.txt: ${rootKey}`);
  const rootEntry = await fetchAndStore(rootKey, "llms", opts.cacheDir);
  entries.push(rootEntry);

  if (rootEntry.status !== "ok") {
    const manifest = buildManifest(entries, sectionPageOrder);
    await flushManifest(opts.cacheDir, manifest);
    return {
      ok: false,
      manifest,
      stats: {
        llmsOk: 0,
        llmsErr: 1,
        pagesOk: 0,
        pagesErr: 0,
        pagesSkipped: 0,
      },
    };
  }

  const rootBody = await readFile(
    path.join(opts.cacheDir, rootEntry.cachePath),
    "utf8",
  );
  const rootLinks = classifyLinks(rootBody, rootUrl, opts.section);

  // Section llms: from root discovery, excluding root itself
  const sectionLlmsUrls = rootLinks.llmsUrls.filter((u) => u !== rootKey);

  // If --section and root didn't list it, still try the conventional path
  if (opts.section) {
    const expected = canonicalUrlString(
      new URL(`/docs/${opts.section}/llms.txt`, CANONICAL_ORIGIN),
    );
    if (!sectionLlmsUrls.includes(expected)) {
      sectionLlmsUrls.push(expected);
    }
  }

  console.log(`Found ${sectionLlmsUrls.length} section llms.txt URL(s)`);

  const allPageUrls: string[] = [];
  const seenPages = new Set<string>();
  const queuedLlms = new Set<string>(sectionLlmsUrls);

  // Also collect any page links that appeared on the root index (rare but possible)
  for (const p of rootLinks.pageUrls) {
    if (!seenPages.has(p)) {
      seenPages.add(p);
      allPageUrls.push(p);
    }
  }

  for (let i = 0; i < sectionLlmsUrls.length; i++) {
    const llmsUrl = sectionLlmsUrls[i]!;
    console.log(`Fetching section llms: ${llmsUrl}`);
    const entry = await fetchAndStore(llmsUrl, "llms", opts.cacheDir);
    entries.push(entry);

    if (entry.status !== "ok") {
      console.warn(`  failed: ${entry.error}`);
      continue;
    }

    const body = await readFile(path.join(opts.cacheDir, entry.cachePath), "utf8");
    const base = normalizeDocsUrl(llmsUrl) ?? new URL(llmsUrl);
    const links = classifyLinks(body, base, opts.section);
    const section = sectionOfUrl(base);

    // Only the section-root llms.txt defines TOC order (not nested e.g. changelog/llms.txt)
    if (section && base.pathname === `/docs/${section}/llms.txt`) {
      sectionPageOrder[section] = links.pageUrls;
    }

    for (const p of links.pageUrls) {
      if (!seenPages.has(p)) {
        seenPages.add(p);
        allPageUrls.push(p);
      }
    }

    // Nested llms (unlikely) — queue if any
    for (const nested of links.llmsUrls) {
      if (nested !== rootKey && !queuedLlms.has(nested)) {
        queuedLlms.add(nested);
        sectionLlmsUrls.push(nested);
      }
    }
  }

  console.log(
    `Fetching ${allPageUrls.length} page(s) with concurrency=${opts.concurrency}`,
  );

  const pageEntries = await mapPool(
    allPageUrls,
    opts.concurrency,
    async (pageUrl) => {
      const skipKey = entryKey(pageUrl, "page");
      if (!opts.force && existingOk.has(skipKey)) {
        const cached = existingOk.get(skipKey)!;
        try {
          await readFile(path.join(opts.cacheDir, cached.cachePath));
          process.stdout.write(".");
          return { entry: cached, skipped: true };
        } catch {
          // fall through to re-fetch
        }
      }

      const entry = await fetchAndStore(pageUrl, "page", opts.cacheDir);
      process.stdout.write(entry.status === "ok" ? "." : "x");
      return { entry, skipped: false };
    },
  );
  process.stdout.write("\n");

  for (const { entry, skipped } of pageEntries) {
    if (skipped) pagesSkipped++;
    entries.push(entry);
  }

  const manifest = buildManifest(entries, sectionPageOrder);
  await flushManifest(opts.cacheDir, manifest);

  const stats = {
    llmsOk: entries.filter((e) => e.kind === "llms" && e.status === "ok").length,
    llmsErr: entries.filter((e) => e.kind === "llms" && e.status === "error")
      .length,
    pagesOk: entries.filter((e) => e.kind === "page" && e.status === "ok").length,
    pagesErr: entries.filter((e) => e.kind === "page" && e.status === "error")
      .length,
    pagesSkipped,
  };

  const hardFail = stats.llmsErr > 0 || stats.pagesErr > 0;
  const ok = opts.keepGoing ? stats.llmsOk + stats.pagesOk > 0 : !hardFail;

  console.log(
    `Scrape done: llms ok=${stats.llmsOk} err=${stats.llmsErr}; pages ok=${stats.pagesOk} err=${stats.pagesErr} skipped=${stats.pagesSkipped}`,
  );
  console.log(`Manifest: ${path.join(opts.cacheDir, MANIFEST_FILE)}`);

  return { ok, manifest, stats };
}

function buildManifest(
  entries: ManifestEntry[],
  sectionPageOrder: Record<string, string[]>,
): Manifest {
  return {
    version: 1,
    scrapedAt: new Date().toISOString(),
    sectionPageOrder,
    entries,
  };
}

async function flushManifest(cacheDir: string, manifest: Manifest): Promise<void> {
  const full = path.join(cacheDir, MANIFEST_FILE);
  await writeFile(full, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}
