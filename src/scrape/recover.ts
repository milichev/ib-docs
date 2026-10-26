import { CANONICAL_ORIGIN } from "../constants.ts";
import { fetchDocsText, isNotFoundPage, type FetchResult } from "./fetch.ts";

const MAX_ANCESTOR_FETCHES = 4;

/** HTML (or markdown) hrefs whose slug matches the missing page, excluding that page. */
export function findReplacementPath(
  body: string,
  missingPathname: string,
): string | null {
  const missingNorm = missingPathname.replace(/\.md$/, "").replace(/\/$/, "");
  const missingSlug = missingNorm.split("/").pop() ?? "";
  if (!missingSlug) return null;

  const candidates: string[] = [];
  for (const raw of extractHrefs(body)) {
    let pathname: string;
    try {
      pathname = new URL(raw, CANONICAL_ORIGIN).pathname;
    } catch {
      continue;
    }
    pathname = pathname.replace(/\/$/, "");
    if (!pathname.startsWith("/docs/")) continue;
    const norm = pathname.replace(/\.md$/, "");
    if (norm === missingNorm) continue;
    const slug = norm.split("/").pop() ?? "";
    if (slug !== missingSlug) continue;
    candidates.push(norm);
  }

  const unique = [...new Set(candidates)];
  if (unique.length === 1) return unique[0]!;
  if (unique.length === 0) return null;

  let best = unique[0]!;
  let bestScore = sharedDirScore(missingNorm, best);
  let tied = false;
  for (const candidate of unique.slice(1)) {
    const score = sharedDirScore(missingNorm, candidate);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
      tied = false;
    } else if (score === bestScore) {
      tied = true;
    }
  }
  return tied ? null : best;
}

/** How many leading path segments two docs paths share. */
function sharedDirScore(a: string, b: string): number {
  const aa = a.split("/");
  const bb = b.split("/");
  let i = 0;
  while (i < aa.length && i < bb.length && aa[i] === bb[i]) i++;
  return i;
}

/**
 * Pages to try, nearest ancestor first: `{dir}/introduction`, then `{dir}`.
 * Stops at `/docs/{section}`.
 */
export function ancestorHtmlUrls(missingPathname: string): string[] {
  const noMd = missingPathname.replace(/\.md$/, "").replace(/\/$/, "");
  const parts = noMd.split("/").filter(Boolean);
  const urls: string[] = [];
  for (let len = parts.length - 1; len >= 2 && urls.length < MAX_ANCESTOR_FETCHES; len--) {
    const dir = `/${parts.slice(0, len).join("/")}`;
    const intro = `${CANONICAL_ORIGIN}${dir}/introduction`;
    if (urls.length < MAX_ANCESTOR_FETCHES) urls.push(intro);
    if (urls.length < MAX_ANCESTOR_FETCHES && !dir.endsWith("/introduction")) {
      urls.push(`${CANONICAL_ORIGIN}${dir}`);
    }
  }
  return urls;
}

/**
 * On a markdown 404, fetch a real ancestor page, and if it links the same
 * slug somewhere else, fetch that target with `.md`.
 */
export async function recoverNotFoundPage(
  missingUrl: string,
): Promise<FetchResult | null> {
  let missing: URL;
  try {
    missing = new URL(missingUrl);
  } catch {
    return null;
  }

  for (const pageUrl of ancestorHtmlUrls(missing.pathname)) {
    const html = await fetchHtml(pageUrl);
    if (!html) continue;
    const replacement = findReplacementPath(html, missing.pathname);
    if (!replacement) continue;
    const mdPath = withMd(replacement);
    const mdUrl = `${CANONICAL_ORIGIN}${mdPath}`;
    if (mdUrl === missingUrl) continue;
    const result = await fetchDocsText(mdUrl);
    if (result.ok) return result;
  }

  return null;
}

function withMd(pathname: string): string {
  const base = pathname.split("/").pop() ?? "";
  if (base.includes(".")) return pathname;
  return `${pathname}.md`;
}

function extractHrefs(text: string): string[] {
  const hrefs: string[] = [];
  for (const m of text.matchAll(/href="([^"]+)"/g)) hrefs.push(decode(m[1]!));
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) hrefs.push(m[1]!);
  return hrefs;
}

function decode(value: string): string {
  return value.replaceAll("&amp;", "&");
}

async function fetchHtml(url: string): Promise<string | null> {
  const res = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      Accept: "text/html",
      "User-Agent": "ib-docs-scraper/0.1 (+local mirror)",
    },
  });
  if (!res.ok) return null;
  const body = await res.text();
  if (isNotFoundPage(body)) return null;
  return body;
}
