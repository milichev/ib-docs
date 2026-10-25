import { CANONICAL_ORIGIN } from "../constants.ts";

/**
 * Human-facing HTML docs URL: strip trailing `.md` from the path.
 * Prefer `finalUrl`, fall back to `url`.
 */
export function toSourceUrl(finalUrl: string, url?: string): string {
  const raw = finalUrl || url || "";
  let pathname: string;
  let hash = "";
  try {
    const u = new URL(raw);
    pathname = u.pathname;
    hash = u.hash;
  } catch {
    pathname = raw;
  }

  if (pathname.endsWith(".md")) {
    pathname = pathname.slice(0, -3);
  }

  // Ensure canonical host
  if (!pathname.startsWith("/")) {
    pathname = `/${pathname}`;
  }
  if (!pathname.startsWith("/docs/")) {
    // finalUrl should already be under /docs/; if not, leave as constructed
  }

  return `${CANONICAL_ORIGIN}${pathname}${hash}`;
}

/** Insert `[source](...)` above the first heading (or at top if none). */
export function prependSourceLink(md: string, sourceUrl: string): string {
  const link = `[source](${sourceUrl})`;
  const lines = md.split("\n");
  // Skip leading blanks, insert before first content line
  let i = 0;
  while (i < lines.length && lines[i]!.trim() === "") i++;
  const before = lines.slice(0, i);
  const after = lines.slice(i);
  return [...before, link, "", ...after].join("\n").replace(/\n+$/, "\n");
}
