/**
 * Ghost pages: docs URLs that return HTML (or look like it) instead of
 * markdown — e.g. /docs/openapi.json with Content-Type: text/html.
 * They stay in cache/ for scrape fidelity but must not enter out/.
 */

export function isHtmlContentType(
  contentType: string | null | undefined,
): boolean {
  if (!contentType) return false;
  const mime = contentType.split(";", 1)[0]!.trim().toLowerCase();
  return mime === "text/html" || mime === "application/xhtml+xml";
}

/** Heuristic for older manifests that lack contentType. */
export function looksLikeHtml(body: string): boolean {
  const start = body
    .replace(/^\uFEFF/, "")
    .trimStart()
    .slice(0, 512);
  if (/^<!DOCTYPE\s+html\b/i.test(start)) return true;
  if (/^<html\b/i.test(start)) return true;
  // Leading HTML comments before doctype/html
  if (/^<!--[\s\S]*?-->\s*<(!DOCTYPE\s+html\b|html\b)/i.test(start)) {
    return true;
  }
  return false;
}

export function isGhostPage(opts: {
  body: string;
  contentType?: string | null;
}): boolean {
  if (isHtmlContentType(opts.contentType)) return true;
  return looksLikeHtml(opts.body);
}
