/**
 * Independent llms.txt discovery oracle for validate.
 * Intentionally does not import scrape/discover — evidence stays separate.
 */
import {
  CAMPUS_HOST,
  CANONICAL_HOST,
  CANONICAL_ORIGIN,
  KNOWN_SECTIONS,
} from "../constants.ts";

const KNOWN_SECTION_SET = new Set<string>(KNOWN_SECTIONS);

/** Dumb link scrape: markdown hrefs, bare absolute URLs, bare root paths. */
export function extractRawLinksIndependent(text: string): string[] {
  const found: string[] = [];
  const seen = new Set<string>();

  const push = (raw: string) => {
    const t = raw.trim().replace(/[.,;:]+$/, "");
    if (!t || seen.has(t)) return;
    seen.add(t);
    found.push(t);
  };

  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    push(m[1]!);
  }
  for (const m of text.matchAll(/https?:\/\/[^\s)<>"']+/gi)) {
    push(m[0]!);
  }
  for (const m of text.matchAll(
    /(?:^|[\s("'])(\/(?:docs\/|[a-z0-9-]+\/)[^\s)<>"']*)/gim,
  )) {
    push(m[1]!);
  }

  return found;
}

function isCampusHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h === CAMPUS_HOST || h === `www.${CAMPUS_HOST}`;
}

function isCanonicalHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h === CANONICAL_HOST || h === "interactivebrokers.com";
}

/**
 * Minimal normalize for the validate oracle:
 * campus → canonical host, `/section` → `/docs/section`, strip hash/trailing slash.
 * Returns canonical absolute URL string, or null if out of scope.
 */
export function minimalNormalizeDocsUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith("mailto:") || trimmed.startsWith("javascript:")) {
    return null;
  }

  const withoutHash = trimmed.split("#", 1)[0] ?? trimmed;
  if (!withoutHash) return null;

  let absolute = withoutHash;
  if (withoutHash.startsWith("/")) {
    absolute = `${CANONICAL_ORIGIN}${withoutHash}`;
  } else if (!/^https?:\/\//i.test(withoutHash)) {
    return null; // relative file refs need a base; llms indexes use absolute/root paths
  }

  let url: URL;
  try {
    url = new URL(absolute);
  } catch {
    return null;
  }

  if (!isCampusHost(url.hostname) && !isCanonicalHost(url.hostname)) {
    return null;
  }

  let pathname = url.pathname;

  if (!pathname.startsWith("/docs/") && pathname !== "/docs") {
    const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
    if (match) {
      const segment = match[1]!;
      if (KNOWN_SECTION_SET.has(segment) || segment === "llms.txt") {
        pathname = `/docs${pathname}`;
      }
    }
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  if (!pathname.startsWith("/docs/") || pathname === "/docs") {
    return null;
  }

  return `${CANONICAL_ORIGIN}${pathname}`;
}

export type AuditedLinks = {
  llmsUrls: string[];
  pageUrls: string[];
};

function isLlmsPath(pathname: string): boolean {
  return pathname.endsWith("/llms.txt") || pathname === "/docs/llms.txt";
}

function isSectionRootPath(pathname: string): boolean {
  const parts = pathname.replace(/^\/docs\/?/, "").split("/").filter(Boolean);
  return parts.length === 1 && KNOWN_SECTION_SET.has(parts[0]!);
}

/** Classify links from an llms.txt body into llms vs page URLs (canonical). */
export function auditClassifyLinks(text: string): AuditedLinks {
  const llmsUrls: string[] = [];
  const pageUrls: string[] = [];
  const seenLlms = new Set<string>();
  const seenPages = new Set<string>();

  for (const raw of extractRawLinksIndependent(text)) {
    const normalized = minimalNormalizeDocsUrl(raw);
    if (!normalized) continue;

    let pathname: string;
    try {
      pathname = new URL(normalized).pathname;
    } catch {
      continue;
    }

    if (isLlmsPath(pathname)) {
      if (!seenLlms.has(normalized)) {
        seenLlms.add(normalized);
        llmsUrls.push(normalized);
      }
      continue;
    }

    if (isSectionRootPath(pathname)) continue;

    let pagePath = pathname;
    if (!pagePath.endsWith(".md")) {
      pagePath = `${pagePath}.md`;
    }
    if (pagePath.includes("/.md")) continue;

    const pageUrl = `${CANONICAL_ORIGIN}${pagePath}`;
    if (!seenPages.has(pageUrl)) {
      seenPages.add(pageUrl);
      pageUrls.push(pageUrl);
    }
  }

  return { llmsUrls, pageUrls };
}

/** Section slug from a canonical docs URL, or null for root llms. */
export function sectionOfCanonicalUrl(url: string): string | null {
  let pathname: string;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return null;
  }
  const rest = pathname.replace(/^\/docs\/?/, "");
  if (!rest || rest === "llms.txt") return null;
  return rest.split("/")[0] ?? null;
}
