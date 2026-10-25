import { stripBoilerplate } from "./boilerplate.ts";
import { unescapeHeadings } from "./headings.ts";
import { filterByLang } from "./lang.ts";
import { rewriteLinks, type LinkRewriteContext } from "./links.ts";
import { prependSourceLink, toSourceUrl } from "./source.ts";

export type TransformOptions = {
  sourceFinalUrl: string;
  sourceUrl: string;
  lang?: string;
  linkCtx: LinkRewriteContext;
};

/**
 * Full per-page generate pipeline (cache body → docs body).
 */
export function transformPage(raw: string, options: TransformOptions): string {
  let md = stripBoilerplate(raw);
  md = unescapeHeadings(md);
  if (options.lang) {
    md = filterByLang(md, options.lang);
  }
  md = rewriteLinks(md, options.linkCtx);
  const source = toSourceUrl(options.sourceFinalUrl, options.sourceUrl);
  md = prependSourceLink(md, source);
  if (!md.endsWith("\n")) md += "\n";
  return md;
}
