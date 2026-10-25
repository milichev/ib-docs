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

/**
 * Section TOC in llms.txt order. Links are relative to `{section}/index.md`.
 */
export function buildSectionIndex(section: string, pages: IndexPage[]): string {
  const lines = [`# ${sectionTitle(section)}`, ""];

  for (const page of pages) {
    const href = relativeHref(`${section}/index.md`, page.relativePath);
    lines.push(`- [${page.title}](${href})`);
  }

  lines.push("");
  return lines.join("\n");
}
