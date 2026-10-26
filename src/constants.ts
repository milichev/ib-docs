export const CANONICAL_ORIGIN = "https://www.interactivebrokers.com";
export const CANONICAL_HOST = "www.interactivebrokers.com";
export const CAMPUS_HOST = "ibkrcampus.com";

/** Known top-level docs sections (path segment under /docs/). */
export const KNOWN_SECTIONS = [
  "tws-api",
  "web-api",
  "excel",
  "fix",
  "third-party-integrations",
  "general",
] as const;

export type KnownSection = (typeof KNOWN_SECTIONS)[number];

export const DEFAULT_CONCURRENCY = 8;

export const CACHE_DIR = "cache";
export const OUT_DIR = "out";
export const MANIFEST_FILE = "manifest.json";

export const ROOT_LLMS_PATH = "/docs/llms.txt";
