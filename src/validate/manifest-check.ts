import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Manifest, ManifestEntry } from "../types.ts";

export type ManifestCheckResult = {
  ok: boolean;
  missingFiles: string[];
  shaMismatch: string[];
  unlistedCacheFiles: string[];
  errorEntries: ManifestEntry[];
};

function sha256(buf: Buffer | string): string {
  return createHash("sha256").update(buf).digest("hex");
}

async function listCacheArtifacts(cacheDir: string): Promise<string[]> {
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
      if (ent.name === "manifest.json" || ent.name === "validate-report.json") {
        continue;
      }
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        await walk(full, childRel);
      } else if (ent.isFile()) {
        if (childRel.endsWith(".md") || childRel.endsWith("llms.txt")) {
          out.push(childRel.split(path.sep).join("/"));
        }
      }
    }
  }

  await walk(cacheDir, "");
  return out;
}

/**
 * Check manifest ok rows against cache files (presence + sha256),
 * and that every cache .md / llms.txt is listed.
 */
export async function checkManifestIntegrity(
  cacheDir: string,
  manifest: Manifest,
): Promise<ManifestCheckResult> {
  const missingFiles: string[] = [];
  const shaMismatch: string[] = [];
  const listed = new Set<string>();

  for (const e of manifest.entries) {
    if (e.status !== "ok") continue;
    if (!e.cachePath) {
      missingFiles.push(`(empty cachePath for ${e.url})`);
      continue;
    }
    listed.add(e.cachePath);
    const full = path.join(cacheDir, e.cachePath);
    let body: Buffer;
    try {
      body = await readFile(full);
    } catch {
      missingFiles.push(e.cachePath);
      continue;
    }
    if (e.sha256) {
      const actual = sha256(body);
      if (actual !== e.sha256) {
        shaMismatch.push(e.cachePath);
      }
    }
  }

  const onDisk = await listCacheArtifacts(cacheDir);
  const unlistedCacheFiles = onDisk.filter((p) => !listed.has(p));

  const errorEntries = manifest.entries.filter((e) => e.status === "error");

  return {
    ok:
      missingFiles.length === 0 &&
      shaMismatch.length === 0 &&
      unlistedCacheFiles.length === 0,
    missingFiles,
    shaMismatch,
    unlistedCacheFiles,
    errorEntries,
  };
}
