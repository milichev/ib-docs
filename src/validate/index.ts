import type { ValidateOptions } from "../types.ts";
import { CACHE_DIR, DOCS_DIR } from "../constants.ts";

export type ValidateResult = {
  ok: boolean;
  message: string;
};

/**
 * Stage 3: independent audit of cache/ + docs/.
 * Not implemented yet — CLI is wired.
 */
export async function validate(
  options: Partial<ValidateOptions> = {},
): Promise<ValidateResult> {
  const cacheDir = options.cacheDir ?? CACHE_DIR;
  const docsDir = options.docsDir ?? DOCS_DIR;

  return {
    ok: false,
    message: `validate is not implemented yet (would audit ${cacheDir}/ and ${docsDir}/)`,
  };
}
