import path from "node:path";
import { CANONICAL_ORIGIN } from "../constants.ts";
import {
  canonicalUrlString,
  isLlmsUrl,
  normalizeDocsUrl,
  sectionOfUrl,
  toPageUrl,
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

/** Static assets under /docs/ must not be rewritten into fake `.md` pages. */
export function isDocsAssetPath(pathname: string): boolean {
  return /\.(webp|png|jpe?g|gif|svg|pdf|mp4|zip|css|js|ico|woff2?|ttf|eot)$/i.test(
    pathname,
  );
}

/**
 * Resolve an in-scope docs URL to a mirrored relative path only when present
 * in the ok manifest map. Do not invent paths for uncached pages/assets —
 * that would create a broken relative link-graph.
 */
function lookupPath(url: URL, urlToPath: Map<string, string>): string | null {
  const key = canonicalUrlString(url);
  const hit = urlToPath.get(key);
  if (hit) return hit;

  const page = toPageUrl(url);
  if (page) {
    const pageKey = canonicalUrlString(page);
    const pageHit = urlToPath.get(pageKey);
    if (pageHit) return pageHit;
  }

  return null;
}

/**
 * IB changelog/prose sometimes emits `\[label]/(section/...)` instead of a
 * real markdown link (`[label](/section/...)`). Repair before rewrite.
 * Bare `\[Label]` with no path is left alone (no reliable target).
 */
export function repairBrokenIbLinks(md: string): string {
  return md.replace(
    /\\\[([^\]]+)\]\/\(([^)\s]+)\)/g,
    (_full, text: string, href: string) => {
      const path = href.startsWith("/") ? href : `/${href}`;
      return `[${text}](${path})`;
    },
  );
}

/**
 * Rewrite markdown links whose targets normalize to in-scope docs URLs
 * into posix relative `.md` (or section index) hrefs. Preserve `#fragment`.
 * External links are left absolute. Unknown llms targets are dropped (text kept).
 */
export function rewriteLinks(md: string, ctx: LinkRewriteContext): string {
  const base = basePageUrlFor(ctx.currentRelativePath);
  md = repairBrokenIbLinks(md);

  return md.replace(
    /\[([^\]]*)\]\(([^)\s]+)\)/g,
    (full, text: string, href: string) => {
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

      if (isDocsAssetPath(normalized.pathname)) {
        return full; // images / static assets — leave as-is
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
        // Not in the mirrored set: leave original href (often root-absolute /docs/...).
        return full;
      }

      const rel = relativeHref(ctx.currentRelativePath, targetPath);
      return `[${text}](${rel}${fragment})`;
    },
  );
}
