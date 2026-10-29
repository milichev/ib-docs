import {
  canonicalUrlString,
  isLlmsUrl,
  normalizeDocsUrl,
  toPageUrl,
} from "../urls.ts";

/** Extract raw href-like strings from llms.txt / markdown bodies. */
export function extractRawLinks(text: string): string[] {
  const found: string[] = [];
  const seen = new Set<string>();

  const push = (raw: string) => {
    const t = raw.trim();
    if (!t || seen.has(t)) return;
    seen.add(t);
    found.push(t);
  };

  // Markdown links: [text](url)
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    push(m[1]!);
  }

  // Bare absolute URLs
  for (const m of text.matchAll(/https?:\/\/[^\s)<>"']+/gi)) {
    push(m[0]!.replace(/[.,;:]+$/, ""));
  }

  // Bare root-absolute paths (/docs/... or /tws-api/...)
  for (const m of text.matchAll(
    /(?:^|[\s("'])(\/(?:docs\/|[a-z0-9-]+\/)[^\s)<>"']*)/gim,
  )) {
    push(m[1]!);
  }

  return found;
}

export type DiscoveredLinks = {
  llmsUrls: string[];
  pageUrls: string[];
};

/**
 * Classify and normalize links found in an llms.txt body.
 * Preserves first-seen order for pages (llms.txt order).
 */
export function classifyLinks(
  text: string,
  basePageUrl: URL,
  sectionFilter?: string,
): DiscoveredLinks {
  const llmsUrls: string[] = [];
  const pageUrls: string[] = [];
  const seenLlms = new Set<string>();
  const seenPages = new Set<string>();

  for (const raw of extractRawLinks(text)) {
    const normalized = normalizeDocsUrl(raw, basePageUrl);
    if (!normalized) continue;

    if (sectionFilter) {
      const path = normalized.pathname;
      const prefix = `/docs/${sectionFilter}`;
      // Allow root llms; restrict everything else to the section
      if (
        path !== "/docs/llms.txt" &&
        !path.startsWith(`${prefix}/`) &&
        path !== prefix
      ) {
        continue;
      }
    }

    if (isLlmsUrl(normalized)) {
      const key = canonicalUrlString(normalized);
      if (!seenLlms.has(key)) {
        seenLlms.add(key);
        llmsUrls.push(key);
      }
      continue;
    }

    const page = toPageUrl(normalized);
    if (!page) continue;

    if (sectionFilter) {
      const prefix = `/docs/${sectionFilter}/`;
      if (!page.pathname.startsWith(prefix)) continue;
    }

    const key = canonicalUrlString(page);
    if (!seenPages.has(key)) {
      seenPages.add(key);
      pageUrls.push(key);
    }
  }

  return { llmsUrls, pageUrls };
}
