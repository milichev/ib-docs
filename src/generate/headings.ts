const ATX_HEADING = /^(#{1,6}\s+)(.*)$/;

/** Unescape CommonMark punctuation escapes IB over-applies in ATX headings. */
function unescapeHeadingText(text: string): string {
  return text.replace(/\\([_*()#[\]\\`!+\-.])/g, "$1");
}

/**
 * For ATX heading lines only (`#` … `######`), unescape spurious backslash
 * escapes (e.g. `\_` → `_`, `\#` → `#`). Leaves fenced code and body alone.
 */
export function unescapeHeadings(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      const m = line.match(ATX_HEADING);
      if (!m) return line;
      return `${m[1]}${unescapeHeadingText(m[2]!)}`;
    })
    .join("\n");
}

/** First ATX H1 text, or null. */
export function extractH1Title(md: string): string | null {
  for (const line of md.split("\n")) {
    const m = line.match(/^#\s+(.+)$/);
    if (m) return m[1]!.trim();
  }
  return null;
}
