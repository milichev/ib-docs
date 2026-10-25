/** Lines that belong to the Mintlify/IB agent banner at the top of cached pages. */
function isBannerBlockquoteLine(line: string): boolean {
  if (!line.startsWith(">")) return false;
  const content = line.replace(/^>\s?/, "").trim();
  if (!content) return true;
  return (
    /^This page is for\b/i.test(content) ||
    /append\s+`?\.md`?\s+to the page URL/i.test(content) ||
    /clean Markdown of any page/i.test(content) ||
    /complete documentation index/i.test(content) ||
    /llms\.txt/i.test(content)
  );
}

/**
 * Remove the leading IB/Mintlify blockquote preamble from a cached page body.
 * Stops at the first non-matching content (usually the real `#` title).
 */
export function stripBoilerplate(md: string): string {
  const lines = md.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i]!;

    if (line.trim() === "") {
      let j = i + 1;
      while (j < lines.length && lines[j]!.trim() === "") j++;
      if (j < lines.length && isBannerBlockquoteLine(lines[j]!)) {
        i = j;
        continue;
      }
      break;
    }

    if (isBannerBlockquoteLine(line)) {
      i++;
      continue;
    }

    break;
  }

  while (i < lines.length && lines[i]!.trim() === "") i++;
  return lines.slice(i).join("\n");
}
