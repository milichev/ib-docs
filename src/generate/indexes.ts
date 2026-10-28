import { KNOWN_SECTIONS } from "../constants.ts";
import { relativeHref } from "./links.ts";

const SECTION_TITLES: Record<string, string> = {
  "tws-api": "TWS API",
  "web-api": "Web API",
  excel: "Excel",
  fix: "FIX",
  "third-party-integrations": "Third-Party Integrations",
  general: "General Information",
};

/** Short path segments with better display names than title-case. */
const SLUG_TITLES: Record<string, string> = {
  doc: "Docs",
  ref: "Reference",
};

/** `{section}/changelog/YYYY/M/D.md` → `YYYY-MM-DD`, else null. */
export function changelogIsoDate(relativePath: string): string | null {
  const m = relativePath.match(
    /(?:^|\/)changelog\/(\d{4})\/(\d{1,2})\/(\d{1,2})\.md$/,
  );
  if (!m) return null;
  const pad = (s: string) => s.padStart(2, "0");
  return `${m[1]}-${pad(m[2]!)}-${pad(m[3]!)}`;
}

/**
 * Index link text: changelog ISO date; section-root `doc`/`ref` slug titles
 * (H1 is often a generic "Introduction"); otherwise H1 or path slug.
 */
export function indexLinkTitle(
  relativePath: string,
  h1Title: string | null,
): string {
  const iso = changelogIsoDate(relativePath);
  if (iso) return iso;

  const base = relativePath.split("/").pop()?.replace(/\.md$/, "") ?? "";
  if (base === "doc" || base === "ref") return titleFromSlug(base);

  return h1Title ?? titleFromSlug(base || "untitled");
}

export function sectionTitle(section: string): string {
  return SECTION_TITLES[section] ?? section;
}

/** Prefer known-section order, then any extras alphabetically. */
export function sortSections(sections: string[]): string[] {
  const known = KNOWN_SECTIONS.filter((s) => sections.includes(s));
  const rest = sections.filter((s) => !KNOWN_SECTIONS.includes(s as never)).sort();
  return [...known, ...rest];
}

export type IndexPage = {
  /** Relative path under docs/ (e.g. tws-api/doc/introduction.md). */
  relativePath: string;
  title: string;
};

export function buildRootIndex(sections: string[]): string {
  const sorted = sortSections(sections);
  const lines = [
    "# Interactive Brokers Docs Mirror",
    "",
    "Local snapshot of selected pages from `https://www.interactivebrokers.com/docs`.",
    "",
    "## Sections",
    "",
  ];
  for (const s of sorted) {
    lines.push(`- [${sectionTitle(s)}](${s}/index.md)`);
  }
  lines.push("");
  return lines.join("\n");
}

/** Title-case a path slug (`notes-limitations` → `Notes Limitations`). */
export function titleFromSlug(slug: string): string {
  if (SLUG_TITLES[slug]) return SLUG_TITLES[slug]!;
  return slug
    .split("-")
    .map((w) => (w ? w[0]!.toUpperCase() + w.slice(1) : w))
    .join(" ");
}

/**
 * Directory segments under `{section}/`, excluding the filename.
 * `tws-api/doc/notes-limitations/x.md` → `["doc", "notes-limitations"]`.
 * Empty when the page sits at the section root (no subsection).
 */
export function subsectionSegments(
  section: string,
  relativePath: string,
): string[] {
  const prefix = `${section}/`;
  const rest = relativePath.startsWith(prefix)
    ? relativePath.slice(prefix.length)
    : relativePath;
  const parts = rest.split("/").filter(Boolean);
  if (parts.length <= 1) return [];
  parts.pop();
  return parts;
}

/**
 * Section TOC in llms.txt order. Nested `##` / `###` … headings from path
 * segments; pages with no directory nesting stay flat (no subsection heading).
 */
export function buildSectionIndex(section: string, pages: IndexPage[]): string {
  const lines = [`# ${sectionTitle(section)}`, ""];
  let stack: string[] = [];

  for (const page of pages) {
    const segs = subsectionSegments(section, page.relativePath);
    let common = 0;
    while (
      common < stack.length &&
      common < segs.length &&
      stack[common] === segs[common]
    ) {
      common++;
    }

    const emitHeading = (level: number, slug: string) => {
      if (lines.length > 0 && lines[lines.length - 1] !== "") lines.push("");
      lines.push(`${"#".repeat(level)} ${titleFromSlug(slug)}`, "");
    };

    if (segs.length < stack.length && segs.length > 0 && common === segs.length) {
      // Left a nested folder: re-emit the current leaf so following links are
      // not stuck under the deeper heading in Markdown.
      emitHeading(segs.length + 1, segs[segs.length - 1]!);
    } else {
      for (let j = common; j < segs.length; j++) {
        emitHeading(j + 2, segs[j]!); // first dir segment → ##
      }
    }

    stack = segs;

    const href = relativeHref(`${section}/index.md`, page.relativePath);
    lines.push(`- [${page.title}](${href})`);
  }

  lines.push("");
  return lines.join("\n");
}
