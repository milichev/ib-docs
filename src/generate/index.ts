import type { GenerateOptions } from "../types.ts";
import { CACHE_DIR, DOCS_DIR } from "../constants.ts";

export type GenerateResult = {
  ok: boolean;
  message: string;
};

/**
 * Stage 2: build docs/ from cache/ (no network).
 * Not implemented yet — CLI is wired; run scrape first.
 */
export async function generate(
  options: Partial<GenerateOptions> = {},
): Promise<GenerateResult> {
  const cacheDir = options.cacheDir ?? CACHE_DIR;
  const docsDir = options.docsDir ?? DOCS_DIR;
  const lang = options.lang ? ` --lang ${options.lang}` : "";
  const section = options.section ? ` --section ${options.section}` : "";

  return {
    ok: false,
    message: `generate is not implemented yet (would read ${cacheDir}/ → write ${docsDir}/${lang}${section})`,
  };
}
