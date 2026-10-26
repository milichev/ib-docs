import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { CACHE_DIR, OUT_DIR, MANIFEST_FILE } from "../constants.ts";
import type { GenerateOptions, Manifest, ManifestEntry } from "../types.ts";
import { extractH1Title } from "./headings.ts";
import {
  buildRootIndex,
  buildSectionIndex,
  type IndexPage,
} from "./indexes.ts";
import { isSectionSlug } from "../urls.ts";
import { resolveLangId } from "./lang.ts";
import { transformPage } from "./transform.ts";

export type GenerateResult = {
  ok: boolean;
  message: string;
  stats?: {
    pagesWritten: number;
    sections: number;
    skipped: number;
  };
};

async function loadManifest(cacheDir: string): Promise<Manifest> {
  const full = path.join(cacheDir, MANIFEST_FILE);
  try {
    const raw = await readFile(full, "utf8");
    return JSON.parse(raw) as Manifest;
  } catch (err) {
    throw new Error(
      `Cannot read ${full}: ${err instanceof Error ? err.message : String(err)}. Run scrape first.`,
    );
  }
}

async function ensureDirForFile(filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
}

function titleFromPath(relativePath: string): string {
  const base = path.posix.basename(relativePath, ".md");
  return base
    .split("-")
    .map((w) => (w ? w[0]!.toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function pageEntries(
  manifest: Manifest,
  sectionFilter?: string,
): ManifestEntry[] {
  return manifest.entries.filter((e) => {
    if (e.kind !== "page" || e.status !== "ok") return false;
    if (!sectionFilter) return true;
    return (
      e.section === sectionFilter || e.cachePath.startsWith(`${sectionFilter}/`)
    );
  });
}

/**
 * Stage 2: build docs/ from cache/ (no network).
 */
export async function generate(
  options: Partial<GenerateOptions> = {},
): Promise<GenerateResult> {
  const cacheDir = options.cacheDir ?? CACHE_DIR;
  const outDir = options.outDir ?? OUT_DIR;
  const sectionFilter = options.section;
  const lang = options.lang;

  if (lang && !resolveLangId(lang)) {
    return {
      ok: false,
      message: `Unknown --lang ${JSON.stringify(lang)}`,
    };
  }

  let manifest: Manifest;
  try {
    manifest = await loadManifest(cacheDir);
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : String(err),
    };
  }

  const pages = pageEntries(manifest, sectionFilter);
  if (pages.length === 0) {
    return {
      ok: false,
      message: sectionFilter
        ? `No ok pages in cache for section ${JSON.stringify(sectionFilter)}`
        : "No ok pages in cache manifest; run scrape first",
    };
  }

  const urlToPath = new Map<string, string>();
  for (const e of manifest.entries) {
    if (e.status !== "ok") continue;
    if (e.url) urlToPath.set(e.url, e.cachePath);
    if (e.finalUrl) urlToPath.set(e.finalUrl, e.cachePath);
  }

  // Sections we will index (from filtered pages). Ignore file-like "sections"
  // from older manifests (e.g. openapi.json.md at docs root).
  const sectionSet = new Set<string>();
  for (const e of pages) {
    if (e.section && isSectionSlug(e.section)) sectionSet.add(e.section);
  }
  if (sectionFilter) {
    sectionSet.clear();
    sectionSet.add(sectionFilter);
  }

  const sectionIndexPaths = new Map<string, string>();
  for (const s of sectionSet) {
    sectionIndexPaths.set(s, `${s}/index.md`);
  }

  await mkdir(outDir, { recursive: true });

  let pagesWritten = 0;
  let skipped = 0;
  const pagesBySection = new Map<string, Map<string, IndexPage>>();

  for (const entry of pages) {
    const cacheFull = path.join(cacheDir, entry.cachePath);
    let raw: string;
    try {
      raw = await readFile(cacheFull, "utf8");
    } catch (err) {
      console.warn(
        `skip missing cache file ${entry.cachePath}: ${err instanceof Error ? err.message : err}`,
      );
      skipped++;
      continue;
    }

    const body = transformPage(raw, {
      sourceFinalUrl: entry.finalUrl || entry.url,
      sourceUrl: entry.url,
      lang,
      linkCtx: {
        currentRelativePath: entry.cachePath,
        urlToPath,
        sectionIndexPaths,
      },
    });

    const outFull = path.join(outDir, entry.cachePath);
    await ensureDirForFile(outFull);
    await writeFile(outFull, body, "utf8");
    pagesWritten++;

    const section = entry.section;
    if (section && isSectionSlug(section)) {
      let map = pagesBySection.get(section);
      if (!map) {
        map = new Map();
        pagesBySection.set(section, map);
      }
      const title = extractH1Title(body) ?? titleFromPath(entry.cachePath);
      map.set(entry.url, {
        relativePath: entry.cachePath,
        title,
      });
    }

    if (pagesWritten % 50 === 0) process.stdout.write(".");
  }
  if (pagesWritten >= 50) process.stdout.write("\n");

  // Section indexes in llms order
  for (const section of sectionSet) {
    const order = manifest.sectionPageOrder[section] ?? [];
    const byUrl = pagesBySection.get(section) ?? new Map();
    const ordered: IndexPage[] = [];
    const seen = new Set<string>();

    for (const url of order) {
      const page = byUrl.get(url);
      if (page) {
        ordered.push(page);
        seen.add(page.relativePath);
      }
    }
    // Append any ok pages not listed in sectionPageOrder (stable by path)
    const extras = [...byUrl.values()]
      .filter((p) => !seen.has(p.relativePath))
      .sort((a, b) => a.relativePath.localeCompare(b.relativePath));
    ordered.push(...extras);

    const indexBody = buildSectionIndex(section, ordered);
    const indexPath = path.join(outDir, section, "index.md");
    await ensureDirForFile(indexPath);
    await writeFile(indexPath, indexBody, "utf8");
  }

  const rootBody = buildRootIndex([...sectionSet]);
  await writeFile(path.join(outDir, "index.md"), rootBody, "utf8");

  const message = `generate ok: wrote ${pagesWritten} page(s), ${sectionSet.size} section index(es)${lang ? ` (lang=${lang})` : ""}${skipped ? `, skipped ${skipped}` : ""} → ${outDir}/`;

  return {
    ok: skipped === 0,
    message,
    stats: {
      pagesWritten,
      sections: sectionSet.size,
      skipped,
    },
  };
}
