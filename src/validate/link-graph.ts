import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import { CAMPUS_HOST, CANONICAL_HOST } from "../constants.ts";

export type LinkGraphResult = {
  ok: boolean;
  missingTargets: Array<{ from: string; href: string; resolved: string }>;
  leftoverAbsolute: Array<{ file: string; href: string; reason: string }>;
  unreachableDocs: string[];
  missingGeneratedPages: string[];
  visited: number;
};

const MD_LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;

function isHttpHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function hostnameOf(href: string): string | null {
  try {
    return new URL(href).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isCampusHref(href: string): boolean {
  const h = hostnameOf(href);
  if (!h) return false;
  return h === CAMPUS_HOST || h === `www.${CAMPUS_HOST}`;
}

function isIbDocsHref(href: string): boolean {
  const h = hostnameOf(href);
  if (!h) return false;
  const hostOk =
    h === CANONICAL_HOST ||
    h === "interactivebrokers.com" ||
    h === CAMPUS_HOST ||
    h === `www.${CAMPUS_HOST}`;
  if (!hostOk) return false;
  try {
    const u = new URL(href);
    return u.pathname.startsWith("/docs/") || u.pathname === "/docs";
  } catch {
    return false;
  }
}

/**
 * Allowlist: intentional `[source](https://www.../docs/...)` human HTML URLs
 * (no trailing .md). True externals outside /docs are not leftover violations.
 */
export function isAllowedAbsoluteDocsHref(text: string, href: string): boolean {
  if (!isIbDocsHref(href)) return true; // not a docs absolute — handled elsewhere
  if (text !== "source") return false;
  try {
    const u = new URL(href);
    const host = u.hostname.toLowerCase();
    if (host !== CANONICAL_HOST && host !== "interactivebrokers.com") {
      return false;
    }
    if (u.pathname.endsWith(".md")) return false;
    return u.pathname.startsWith("/docs/");
  } catch {
    return false;
  }
}

function extractMdLinks(md: string): Array<{ text: string; href: string }> {
  const out: Array<{ text: string; href: string }> = [];
  for (const m of md.matchAll(MD_LINK_RE)) {
    out.push({ text: m[1] ?? "", href: m[2] ?? "" });
  }
  return out;
}

async function fileExists(full: string): Promise<boolean> {
  try {
    await access(full);
    return true;
  } catch {
    return false;
  }
}

async function listDocsMarkdown(docsDir: string): Promise<string[]> {
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
      } else if (ent.isFile() && ent.name.endsWith(".md")) {
        out.push(childRel.split(path.sep).join("/"));
      }
    }
  }

  await walk(docsDir, "");
  return out;
}

/**
 * BFS from docs/index.md over relative markdown links; check leftovers + coverage.
 */
export async function checkLinkGraph(
  docsDir: string,
  okPageCachePaths: string[],
): Promise<LinkGraphResult> {
  const missingTargets: LinkGraphResult["missingTargets"] = [];
  const leftoverAbsolute: LinkGraphResult["leftoverAbsolute"] = [];
  const rootRel = "index.md";
  const rootFull = path.join(docsDir, rootRel);

  if (!(await fileExists(rootFull))) {
    return {
      ok: false,
      missingTargets: [
        { from: "(start)", href: "index.md", resolved: rootRel },
      ],
      leftoverAbsolute: [],
      unreachableDocs: [],
      missingGeneratedPages: okPageCachePaths.map((p) => p),
      visited: 0,
    };
  }

  const visited = new Set<string>();
  const queue = [rootRel];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);

    const full = path.join(docsDir, current);
    let body: string;
    try {
      body = await readFile(full, "utf8");
    } catch {
      missingTargets.push({
        from: "(read)",
        href: current,
        resolved: current,
      });
      continue;
    }

    for (const { text, href } of extractMdLinks(body)) {
      const hashIdx = href.indexOf("#");
      const withoutHash = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
      if (!withoutHash) continue; // pure fragment

      if (
        withoutHash.startsWith("mailto:") ||
        withoutHash.startsWith("javascript:")
      ) {
        continue;
      }

      if (isHttpHref(withoutHash)) {
        if (isCampusHref(withoutHash)) {
          leftoverAbsolute.push({
            file: current,
            href: withoutHash,
            reason: "ibkrcampus.com href",
          });
          continue;
        }
        if (
          isIbDocsHref(withoutHash) &&
          !isAllowedAbsoluteDocsHref(text, withoutHash)
        ) {
          leftoverAbsolute.push({
            file: current,
            href: withoutHash,
            reason:
              "leftover interactivebrokers.com/docs href (not allowlisted source)",
          });
        }
        continue;
      }

      // Root-absolute site paths (e.g. /docs/... left for uncached pages/assets)
      // are outside the local relative graph.
      if (withoutHash.startsWith("/")) {
        continue;
      }

      // Relative target (posix, from current file dirname)
      const currentDir = path.posix.dirname(current);
      const resolved = path.posix.normalize(
        currentDir === "."
          ? withoutHash
          : path.posix.join(currentDir, withoutHash),
      );
      const target = resolved.replace(/^\.\//, "");

      // Only enforce existence for markdown page links in the mirror.
      if (!target.endsWith(".md")) {
        continue;
      }

      const targetFull = path.join(docsDir, target);
      const docsResolved = path.resolve(docsDir);
      const targetResolved = path.resolve(targetFull);
      if (
        targetResolved !== docsResolved &&
        !targetResolved.startsWith(docsResolved + path.sep)
      ) {
        missingTargets.push({
          from: current,
          href: withoutHash,
          resolved: target,
        });
        continue;
      }

      if (!(await fileExists(targetFull))) {
        missingTargets.push({
          from: current,
          href: withoutHash,
          resolved: target,
        });
        continue;
      }

      if (!visited.has(target)) {
        queue.push(target);
      }
    }
  }

  // Also scan all docs for leftover absolute hrefs (even unreachable files)
  const allDocs = await listDocsMarkdown(docsDir);
  for (const rel of allDocs) {
    if (visited.has(rel)) {
      // already scanned during BFS
      continue;
    }
    const body = await readFile(path.join(docsDir, rel), "utf8");
    for (const { text, href } of extractMdLinks(body)) {
      const withoutHash = href.split("#", 1)[0] ?? href;
      if (!isHttpHref(withoutHash)) continue;
      if (isCampusHref(withoutHash)) {
        leftoverAbsolute.push({
          file: rel,
          href: withoutHash,
          reason: "ibkrcampus.com href",
        });
      } else if (
        isIbDocsHref(withoutHash) &&
        !isAllowedAbsoluteDocsHref(text, withoutHash)
      ) {
        leftoverAbsolute.push({
          file: rel,
          href: withoutHash,
          reason:
            "leftover interactivebrokers.com/docs href (not allowlisted source)",
        });
      }
    }
  }

  const missingGeneratedPages = okPageCachePaths.filter(
    (p) => !allDocs.includes(p),
  );

  const expectedReachable = new Set<string>([
    "index.md",
    ...okPageCachePaths,
    // section indexes: {section}/index.md
    ...okPageCachePaths
      .map((p) => p.split("/")[0])
      .filter(Boolean)
      .map((s) => `${s}/index.md`),
  ]);

  // Pages/indexes that exist and should be reachable from docs/index.md
  const unreachableDocs = [...expectedReachable].filter(
    (p) => allDocs.includes(p) && !visited.has(p),
  );

  return {
    ok:
      missingTargets.length === 0 &&
      leftoverAbsolute.length === 0 &&
      missingGeneratedPages.length === 0 &&
      unreachableDocs.length === 0,
    missingTargets,
    leftoverAbsolute,
    unreachableDocs,
    missingGeneratedPages,
    visited: visited.size,
  };
}
