import path from "node:path";
import { CANONICAL_ORIGIN } from "../constants.ts";
import {
  canonicalUrlString,
  isLlmsUrl,
  normalizeDocsUrl,
  sectionOfUrl,
  toPageUrl,
  urlToLocalPath,
} from "../urls.ts";

export type LinkRewriteContext = {
  /** Relative path of the page being rewritten (e.g. tws-api/doc/x.md). */
  currentRelativePath: string;
  /** Canonical page/llms URL → relative cache/docs path for ok artifacts. */
  urlToPath: Map<string, string>;
  /** Section slug → relative path of section index (e.g. tws-api/index.md). */
  sectionIndexPaths: Map<string, string>;
};

function basePageUrlFor(currentRelativePath: string): URL {
  return new URL(`${CANONICAL_ORIGIN}/docs/${currentRelativePath}`);
}

/**
 * Relative href from current file to target, posix, never using file-to-file relative.
 */
export function relativeHref(
  currentRelativePath: string,
  targetRelativePath: string,
): string {
  const rel = path.posix.relative(
    path.posix.dirname(currentRelativePath),
    targetRelativePath,
  );
  if (!rel) return path.posix.basename(targetRelativePath);
  // Ensure bare same-dir / nested paths are valid markdown hrefs
  if (!rel.startsWith(".") && !rel.startsWith("/")) {
    return rel;
  }
  return rel;
}

function lookupPath(
  url: URL,
  urlToPath: Map<string, string>,
): string | null {
  const key = canonicalUrlString(url);
  const hit = urlToPath.get(key);
  if (hit) return hit;

  const page = toPageUrl(url);
  if (page) {
    const pageKey = canonicalUrlString(page);
    const pageHit = urlToPath.get(pageKey);
    if (pageHit) return pageHit;
    try {
      return urlToLocalPath(page);
    } catch {
      return null;
    }
  }

  if (isLlmsUrl(url)) {
    return null;
  }

  try {
    return urlToLocalPath(url);
  } catch {
    return null;
  }
}

/**
 * Rewrite markdown links whose targets normalize to in-scope docs URLs
 * into posix relative `.md` (or section index) hrefs. Preserve `#fragment`.
 * External links are left absolute. Unknown llms targets are dropped (text kept).
 */
export function rewriteLinks(md: string, ctx: LinkRewriteContext): string {
  const base = basePageUrlFor(ctx.currentRelativePath);

  return md.replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (full, text: string, href: string) => {
    const hashIdx = href.indexOf("#");
    const fragment = hashIdx >= 0 ? href.slice(hashIdx) : "";
    const withoutHash = hashIdx >= 0 ? href.slice(0, hashIdx) : href;

    if (!withoutHash) {
      return full; // pure fragment
    }

    // Skip the source link we insert (already canonical HTML URL without .md)
    // Still rewrite if it points at a mirrored page — but source uses HTML URL
    // intentionally; leave those alone when they are our source links.
    // Actually source links are https://www.../docs/... without .md — normalize
    // would make them in-scope. We want source links to stay absolute.
    // Detect: already absolute canonical HTML docs URL (no .md) used as source.
    // Simpler: if href is absolute canonical and path has no .md and looks like
    // human URL, and link text is "source", leave it.
    if (text === "source" && /^https?:\/\//i.test(withoutHash)) {
      return full;
    }

    const normalized = normalizeDocsUrl(withoutHash, base);
    if (!normalized) {
      return full; // external or out of scope
    }

    if (isLlmsUrl(normalized)) {
      const section = sectionOfUrl(normalized);
      if (section && ctx.sectionIndexPaths.has(section)) {
        const target = ctx.sectionIndexPaths.get(section)!;
        const rel = relativeHref(ctx.currentRelativePath, target);
        return `[${text}](${rel}${fragment})`;
      }
      // Root llms → docs/index.md
      if (normalized.pathname === "/docs/llms.txt") {
        const rel = relativeHref(ctx.currentRelativePath, "index.md");
        return `[${text}](${rel}${fragment})`;
      }
      return text;
    }

    const targetPath = lookupPath(normalized, ctx.urlToPath);
    if (!targetPath) {
      return full;
    }

    const rel = relativeHref(ctx.currentRelativePath, targetPath);
    return `[${text}](${rel}${fragment})`;
  });
}
