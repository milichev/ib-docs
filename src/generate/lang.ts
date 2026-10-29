/** Canonical language ids accepted by `--lang`. */
export const LANG_ALIASES: Record<string, string> = {
  py: "python",
  python: "python",
  java: "java",
  js: "javascript",
  javascript: "javascript",
  ts: "javascript",
  typescript: "javascript",
  "c#": "csharp",
  csharp: "csharp",
  cs: "csharp",
  "c++": "cpp",
  cpp: "cpp",
  cxx: "cpp",
  vb: "vbnet",
  vbnet: "vbnet",
  "vb.net": "vbnet",
  visualbasic: "vbnet",
  "visual basic": "vbnet",
};

/** Programming-language tags that participate in `--lang` filtering. */
const FILTERABLE = new Set(Object.values(LANG_ALIASES));

/**
 * When the requested language has no examples on the page, try these next
 * (skipping the request itself). Covers `--lang javascript` on TWS pages that
 * only ship Python / Java / C#.
 */
export const LANG_FALLBACK_ORDER = ["python", "java", "csharp"] as const;

/** Display headings that introduce a language-specific fence. */
const LANG_HEADING_ALIASES: Record<string, string> = {
  python: "python",
  java: "java",
  javascript: "javascript",
  typescript: "javascript",
  "c++": "cpp",
  cpp: "cpp",
  "c#": "csharp",
  csharp: "csharp",
  "vb.net": "vbnet",
  vbnet: "vbnet",
  "visual basic": "vbnet",
  "visual basic .net": "vbnet",
};

export function resolveLangId(raw: string): string | null {
  const key = raw.trim().toLowerCase();
  return LANG_ALIASES[key] ?? null;
}

function langHeadingId(headingText: string): string | null {
  const key = headingText.trim().toLowerCase();
  return LANG_HEADING_ALIASES[key] ?? null;
}

/**
 * Keep untagged fences and non-filterable tags (json, bash, …).
 * Among filterable programming languages, keep only `want`.
 */
function shouldKeepFence(infoString: string, want: string): boolean {
  const token = infoString.trim().split(/\s+/)[0] ?? "";
  if (!token) return true;

  const canonical = resolveLangId(token);
  if (!canonical) return true; // unknown / non-filterable tag
  if (!FILTERABLE.has(canonical)) return true;
  return canonical === want;
}

function isFenceOpen(line: string): boolean {
  return /^```/.test(line);
}

function fenceInfo(line: string): string {
  return line.replace(/^```/, "").replace(/\s+$/, "");
}

function fenceLangId(infoString: string): string | null {
  const token = infoString.trim().split(/\s+/)[0] ?? "";
  if (!token) return null;
  const canonical = resolveLangId(token);
  if (!canonical || !FILTERABLE.has(canonical)) return null;
  return canonical;
}

/** Filterable programming languages that appear as fenced examples in `md`. */
export function detectFilterableLangs(md: string): Set<string> {
  const found = new Set<string>();
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    if (!isFenceOpen(line)) continue;
    const id = fenceLangId(fenceInfo(line));
    if (id) found.add(id);
  }
  return found;
}

/**
 * Prefer `want` when the page has that language; otherwise first hit in
 * {@link LANG_FALLBACK_ORDER}. Returns `want` unchanged when nothing matches
 * (filter then drops all filterable fences).
 */
export function pickLangWithFallback(md: string, want: string): string {
  const present = detectFilterableLangs(md);
  if (present.has(want)) return want;
  for (const fb of LANG_FALLBACK_ORDER) {
    if (fb !== want && present.has(fb)) return fb;
  }
  return want;
}

/**
 * Keep fences whose language aliases to `lang`; drop other filterable-language
 * fences. Drop orphaned `#### Python`-style headings that only introduced a
 * removed fence. Untagged and non-filterable tags (e.g. json) are kept.
 *
 * If `lang` has no examples on the page, falls back to python → java → csharp.
 */
export function filterByLang(md: string, lang: string): string {
  const resolved = resolveLangId(lang);
  if (!resolved) {
    throw new Error(
      `Unknown --lang ${JSON.stringify(lang)}; expected one of: ${[
        ...new Set(Object.values(LANG_ALIASES)),
      ].join(", ")}`,
    );
  }

  const want = pickLangWithFallback(md, resolved);
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i]!;

    // Language heading immediately followed (blank lines ok) by a fence
    const hm = line.match(/^(#{1,6})\s+(.+)$/);
    if (hm) {
      const headingLang = langHeadingId(hm[2]!);
      if (headingLang) {
        let j = i + 1;
        while (j < lines.length && lines[j]!.trim() === "") j++;
        if (j < lines.length && isFenceOpen(lines[j]!)) {
          const info = fenceInfo(lines[j]!);
          const keep = shouldKeepFence(info, want);
          const fenceEnd = findFenceEnd(lines, j);
          if (keep) {
            for (let k = i; k <= fenceEnd; k++) out.push(lines[k]!);
          }
          i = fenceEnd + 1;
          continue;
        }
      }
    }

    if (isFenceOpen(line)) {
      const info = fenceInfo(line);
      const keep = shouldKeepFence(info, want);
      const fenceEnd = findFenceEnd(lines, i);
      if (keep) {
        for (let k = i; k <= fenceEnd; k++) out.push(lines[k]!);
      }
      i = fenceEnd + 1;
      continue;
    }

    out.push(line);
    i++;
  }

  return cleanupBlankRuns(out.join("\n"));
}

function findFenceEnd(lines: string[], openIdx: number): number {
  for (let i = openIdx + 1; i < lines.length; i++) {
    if (/^```\s*$/.test(lines[i]!)) return i;
  }
  return lines.length - 1;
}

function cleanupBlankRuns(md: string): string {
  return md
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "\n");
}
