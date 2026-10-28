import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { CACHE_DIR, OUT_DIR, MANIFEST_FILE } from "../constants.ts";
import { isGhostPage, isHtmlContentType } from "../content.ts";
import type { Manifest, ValidateOptions } from "../types.ts";
import { auditClassifyLinks, sectionOfCanonicalUrl } from "./audit-llms.ts";
import { checkLinkGraph } from "./link-graph.ts";
import { checkManifestIntegrity } from "./manifest-check.ts";

export type ValidateResult = {
  ok: boolean;
  message: string;
  report?: ValidateReport;
};

export type ValidateReport = {
  ok: boolean;
  checkedAt: string;
  manifest: {
    ok: boolean;
    missingFiles: string[];
    shaMismatch: string[];
    unlistedCacheFiles: string[];
    errorEntryCount: number;
  };
  discovery: {
    ok: boolean;
    scrapedSections: string[];
    expectedPages: number;
    missingPages: string[];
    extraPages: string[];
  };
  linkGraph: {
    ok: boolean;
    visited: number;
    missingTargets: Array<{ from: string; href: string; resolved: string }>;
    leftoverAbsolute: Array<{ file: string; href: string; reason: string }>;
    unreachableDocs: string[];
    missingGeneratedPages: string[];
  };
  sectionCounts: {
    ok: boolean;
    mismatches: Array<{
      section: string;
      llmsPages: number;
      docsPages: number;
    }>;
  };
};

async function loadManifest(cacheDir: string): Promise<Manifest> {
  const full = path.join(cacheDir, MANIFEST_FILE);
  const raw = await readFile(full, "utf8");
  return JSON.parse(raw) as Manifest;
}

async function listLlmsFiles(cacheDir: string): Promise<string[]> {
  const out: string[] = [];

  async function walk(dir: string, rel: string): Promise<void> {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const ent of entries) {
      const childRel = rel ? `${rel}/${ent.name}` : ent.name;
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        await walk(full, childRel);
      } else if (ent.isFile() && ent.name === "llms.txt") {
        out.push(childRel.split(path.sep).join("/"));
      }
    }
  }

  await walk(cacheDir, "");
  return out;
}

async function countDocsPages(
  docsDir: string,
  section: string,
): Promise<number> {
  const sectionDir = path.join(docsDir, section);
  let count = 0;

  async function walk(dir: string): Promise<void> {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        await walk(full);
      } else if (
        ent.isFile() &&
        ent.name.endsWith(".md") &&
        ent.name !== "index.md"
      ) {
        count++;
      }
    }
  }

  await walk(sectionDir);
  return count;
}

function summarizeFailures(report: ValidateReport): string[] {
  const lines: string[] = [];
  if (!report.manifest.ok) {
    if (report.manifest.missingFiles.length) {
      lines.push(
        `manifest missing files: ${report.manifest.missingFiles.length}`,
      );
    }
    if (report.manifest.shaMismatch.length) {
      lines.push(`sha256 mismatch: ${report.manifest.shaMismatch.length}`);
    }
    if (report.manifest.unlistedCacheFiles.length) {
      lines.push(
        `unlisted cache files: ${report.manifest.unlistedCacheFiles.length}`,
      );
    }
  }
  if (!report.discovery.ok) {
    lines.push(
      `discovery missing pages: ${report.discovery.missingPages.length}`,
    );
  }
  if (!report.linkGraph.ok) {
    if (report.linkGraph.missingTargets.length) {
      lines.push(
        `broken relative links: ${report.linkGraph.missingTargets.length}`,
      );
    }
    if (report.linkGraph.leftoverAbsolute.length) {
      lines.push(
        `leftover absolute docs hrefs: ${report.linkGraph.leftoverAbsolute.length}`,
      );
    }
    if (report.linkGraph.missingGeneratedPages.length) {
      lines.push(
        `missing generated pages: ${report.linkGraph.missingGeneratedPages.length}`,
      );
    }
    if (report.linkGraph.unreachableDocs.length) {
      lines.push(
        `unreachable from index: ${report.linkGraph.unreachableDocs.length}`,
      );
    }
  }
  if (!report.sectionCounts.ok) {
    lines.push(
      `section count mismatches: ${report.sectionCounts.mismatches.length}`,
    );
  }
  return lines;
}

/**
 * Stage 3: independent audit of cache/ + out/ (no network).
 */
export async function validate(
  options: Partial<ValidateOptions> = {},
): Promise<ValidateResult> {
  const cacheDir = options.cacheDir ?? CACHE_DIR;
  const outDir = options.outDir ?? OUT_DIR;

  let manifest: Manifest;
  try {
    manifest = await loadManifest(cacheDir);
  } catch (err) {
    return {
      ok: false,
      message: `Cannot read manifest: ${err instanceof Error ? err.message : String(err)}. Run scrape first.`,
    };
  }

  const manifestCheck = await checkManifestIntegrity(cacheDir, manifest);

  // Independent discovery: re-parse every cached llms.txt
  const scrapedSections = new Set<string>();
  for (const e of manifest.entries) {
    if (e.kind === "llms" && e.status === "ok" && e.section) {
      scrapedSections.add(e.section);
    }
  }
  for (const s of Object.keys(manifest.sectionPageOrder ?? {})) {
    scrapedSections.add(s);
  }

  const okPageUrls = new Set<string>();
  const okPagePaths: string[] = [];
  for (const e of manifest.entries) {
    if (e.kind !== "page" || e.status !== "ok") continue;
    okPageUrls.add(e.url);
    if (e.finalUrl) okPageUrls.add(e.finalUrl);

    // Ghost HTML pages are cache-only; generate skips them — don't require out/.
    if (isHtmlContentType(e.contentType)) continue;
    try {
      const body = await readFile(path.join(cacheDir, e.cachePath), "utf8");
      if (isGhostPage({ body, contentType: e.contentType })) continue;
    } catch {
      // Missing file handled by manifest integrity.
    }
    okPagePaths.push(e.cachePath);
  }

  const expectedPages = new Set<string>();
  const llmsFiles = await listLlmsFiles(cacheDir);
  for (const rel of llmsFiles) {
    const body = await readFile(path.join(cacheDir, rel), "utf8");
    const { pageUrls } = auditClassifyLinks(body);
    for (const url of pageUrls) {
      const section = sectionOfCanonicalUrl(url);
      if (section && scrapedSections.has(section)) {
        expectedPages.add(url);
      }
    }
  }

  const missingPages = [...expectedPages]
    .filter((u) => !okPageUrls.has(u))
    .sort();
  const extraPages = [
    ...new Set(
      manifest.entries
        .filter((e) => e.kind === "page" && e.status === "ok")
        .map((e) => e.url),
    ),
  ]
    .filter((u) => !expectedPages.has(u))
    .sort();

  const discoveryOk = missingPages.length === 0;

  const linkGraph = await checkLinkGraph(outDir, okPagePaths);

  // Optional: expected pages per section (all cached llms) vs docs page files
  const mismatches: ValidateReport["sectionCounts"]["mismatches"] = [];
  for (const section of [...scrapedSections].sort()) {
    const sectionLlmsPath = path.join(cacheDir, section, "llms.txt");
    try {
      await readFile(sectionLlmsPath, "utf8");
    } catch {
      // no section-root llms — skip count for this section
      continue;
    }
    const docsPages = await countDocsPages(outDir, section);
    const expectedForSection = [...expectedPages].filter(
      (u) => sectionOfCanonicalUrl(u) === section,
    ).length;
    if (docsPages !== expectedForSection) {
      mismatches.push({
        section,
        llmsPages: expectedForSection,
        docsPages,
      });
    }
  }

  const report: ValidateReport = {
    ok:
      manifestCheck.ok &&
      discoveryOk &&
      linkGraph.ok &&
      mismatches.length === 0,
    checkedAt: new Date().toISOString(),
    manifest: {
      ok: manifestCheck.ok,
      missingFiles: manifestCheck.missingFiles,
      shaMismatch: manifestCheck.shaMismatch,
      unlistedCacheFiles: manifestCheck.unlistedCacheFiles,
      errorEntryCount: manifestCheck.errorEntries.length,
    },
    discovery: {
      ok: discoveryOk,
      scrapedSections: [...scrapedSections].sort(),
      expectedPages: expectedPages.size,
      missingPages,
      extraPages,
    },
    linkGraph: {
      ok: linkGraph.ok,
      visited: linkGraph.visited,
      missingTargets: linkGraph.missingTargets,
      leftoverAbsolute: linkGraph.leftoverAbsolute,
      unreachableDocs: linkGraph.unreachableDocs,
      missingGeneratedPages: linkGraph.missingGeneratedPages,
    },
    sectionCounts: {
      ok: mismatches.length === 0,
      mismatches,
    },
  };

  const reportPath = path.join(cacheDir, "validate-report.json");
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  const failures = summarizeFailures(report);
  if (report.ok) {
    const extrasNote =
      extraPages.length > 0
        ? `, ${extraPages.length} extra page(s) in manifest`
        : "";
    return {
      ok: true,
      message: `validate ok: ${expectedPages.size} expected page(s), link-graph visited ${linkGraph.visited}${extrasNote}; report → ${reportPath}`,
      report,
    };
  }

  // Concise stdout detail for first few failures
  const details: string[] = [];
  for (const u of missingPages.slice(0, 5)) {
    details.push(`  missing page: ${u}`);
  }
  for (const t of linkGraph.missingTargets.slice(0, 5)) {
    details.push(`  broken link: ${t.from} → ${t.href} (${t.resolved})`);
  }
  for (const a of linkGraph.leftoverAbsolute.slice(0, 5)) {
    details.push(`  leftover: ${a.file}: ${a.href} (${a.reason})`);
  }
  for (const p of linkGraph.missingGeneratedPages.slice(0, 5)) {
    details.push(`  missing docs file: ${p}`);
  }
  for (const p of linkGraph.unreachableDocs.slice(0, 5)) {
    details.push(`  unreachable: ${p}`);
  }
  for (const m of mismatches.slice(0, 5)) {
    details.push(
      `  section ${m.section}: expected ${m.llmsPages} docs pages, found ${m.docsPages}`,
    );
  }

  const message = [
    `validate failed: ${failures.join("; ")}`,
    ...details,
    `report → ${reportPath}`,
  ].join("\n");

  return { ok: false, message, report };
}
