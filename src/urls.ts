import {
  CAMPUS_HOST,
  CANONICAL_HOST,
  CANONICAL_ORIGIN,
  KNOWN_SECTIONS,
} from "./constants.ts";

const KNOWN_SECTION_SET = new Set<string>(KNOWN_SECTIONS);

function isCampusHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h === CAMPUS_HOST || h === `www.${CAMPUS_HOST}`;
}

function isCanonicalHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h === CANONICAL_HOST || h === "interactivebrokers.com";
}

/**
 * Normalize a raw href/path into a canonical docs URL, or null if out of scope.
 * Fragments are stripped; callers may reattach later.
 */
export function normalizeDocsUrl(
  raw: string,
  basePageUrl?: URL,
): URL | null {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith("mailto:") || trimmed.startsWith("javascript:")) {
    return null;
  }

  const withoutHash = trimmed.split("#", 1)[0] ?? trimmed;
  if (!withoutHash) return null;

  let url: URL;
  try {
    if (
      withoutHash.startsWith("./") ||
      withoutHash.startsWith("../") ||
      (!withoutHash.startsWith("/") &&
        !withoutHash.includes("://") &&
        !withoutHash.startsWith("//"))
    ) {
      if (!basePageUrl) return null;
      url = new URL(withoutHash, basePageUrl);
    } else if (withoutHash.startsWith("//")) {
      url = new URL(`https:${withoutHash}`);
    } else if (withoutHash.startsWith("/")) {
      url = new URL(withoutHash, CANONICAL_ORIGIN);
    } else {
      url = new URL(withoutHash);
    }
  } catch {
    return null;
  }

  if (isCampusHost(url.hostname) || isCanonicalHost(url.hostname)) {
    url = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
  } else {
    return null;
  }

  let pathname = url.pathname;

  // Site-root section paths like /tws-api/... -> /docs/tws-api/...
  if (!pathname.startsWith("/docs/") && pathname !== "/docs") {
    const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
    if (match) {
      const segment = match[1]!;
      if (KNOWN_SECTION_SET.has(segment) || segment === "llms.txt") {
        pathname = `/docs${pathname}`;
      }
    }
  }

  // Strip trailing slash (except bare "/")
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  if (!pathname.startsWith("/docs/") && pathname !== "/docs") {
    return null;
  }

  if (pathname === "/docs") {
    return null;
  }

  return new URL(pathname + url.search, CANONICAL_ORIGIN);
}

/** True if the URL points at an llms.txt index (root or section). */
export function isLlmsUrl(u: URL): boolean {
  return u.pathname.endsWith("/llms.txt") || u.pathname === "/docs/llms.txt";
}

/**
 * Section roots like /docs/tws-api are indexes, not markdown pages.
 * Never produce .../tws-api/.md.
 */
export function isSectionRoot(u: URL): boolean {
  const parts = u.pathname.replace(/^\/docs\/?/, "").split("/").filter(Boolean);
  return parts.length === 1 && KNOWN_SECTION_SET.has(parts[0]!);
}

/** Section slug from a docs URL, or null for root llms. */
export function sectionOfUrl(u: URL): string | null {
  const rest = u.pathname.replace(/^\/docs\/?/, "");
  if (!rest || rest === "llms.txt") return null;
  const first = rest.split("/")[0];
  return first ?? null;
}

/**
 * Ensure page URLs end with .md when appropriate.
 * Leaves llms.txt and already-.md paths alone.
 * Returns null for non-page targets (llms, section roots).
 */
export function toPageUrl(u: URL): URL | null {
  if (isLlmsUrl(u) || isSectionRoot(u)) return null;

  let pathname = u.pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  if (!pathname.endsWith(".md")) {
    pathname = `${pathname}.md`;
  }

  if (pathname.includes("/.md") || pathname.endsWith("/.md")) {
    return null;
  }

  return new URL(pathname + u.search, CANONICAL_ORIGIN);
}

/**
 * Map canonical docs URL to relative cache/docs path.
 * /docs/tws-api/doc/x.md -> tws-api/doc/x.md
 * /docs/llms.txt -> llms.txt
 */
export function urlToLocalPath(u: URL): string {
  const pathname = u.pathname;
  if (!pathname.startsWith("/docs/")) {
    throw new Error(`urlToLocalPath: not under /docs/: ${pathname}`);
  }
  return pathname.slice("/docs/".length);
}

/** Stable request URL string (canonical, no hash). */
export function canonicalUrlString(u: URL): string {
  return `${CANONICAL_ORIGIN}${u.pathname}${u.search}`;
}
