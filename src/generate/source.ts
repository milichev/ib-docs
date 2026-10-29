import { CANONICAL_ORIGIN } from "../constants.ts";
import { isSectionSlug } from "../urls.ts";
import { relativeHref } from "./links.ts";

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

export type PageHeaderOptions = {
  currentRelativePath: string;
  sourceUrl: string;
  /** Section slug → relative path of section index (e.g. tws-api/index.md). */
  sectionIndexPaths?: Map<string, string>;
};

/**
 * Build `[home](...) | [section](...) | [source](...)` for a mirrored page.
 * Home → out/index.md; section → {section}/index.md when known.
 */
export function buildPageHeader(options: PageHeaderOptions): string {
  const { currentRelativePath, sourceUrl, sectionIndexPaths } = options;
  const homeHref = relativeHref(currentRelativePath, "index.md");
  const parts = [`[home](${homeHref})`];

  const section = currentRelativePath.split("/")[0];
  if (section && isSectionSlug(section)) {
    const sectionIndex =
      sectionIndexPaths?.get(section) ?? `${section}/index.md`;
    const sectionHref = relativeHref(currentRelativePath, sectionIndex);
    parts.push(`[${section}](${sectionHref})`);
  }

  parts.push(`[source](${sourceUrl})`);
  return parts.join(" | ");
}

/** Insert page header above the first heading (or at top if none). */
export function prependPageHeader(
  md: string,
  options: PageHeaderOptions,
): string {
  const link = buildPageHeader(options);
  const lines = md.split("\n");
  // Skip leading blanks, insert before first content line
  let i = 0;
  while (i < lines.length && lines[i]!.trim() === "") i++;
  const before = lines.slice(0, i);
  const after = lines.slice(i);
  return [...before, link, "", ...after].join("\n").replace(/\n+$/, "\n");
}
