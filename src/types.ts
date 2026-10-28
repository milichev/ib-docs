export type ManifestKind = "llms" | "page";

export type ManifestStatus = "ok" | "error";

export type ManifestEntry = {
  url: string;
  finalUrl: string;
  kind: ManifestKind;
  section: string | null;
  cachePath: string;
  sha256: string;
  status: ManifestStatus;
  error?: string;
  /** Response Content-Type when fetched (optional on older manifests). */
  contentType?: string;
  fetchedAt: string;
};

export type Manifest = {
  version: 1;
  scrapedAt: string;
  /** Ordered page URLs per section, as discovered from section llms.txt. */
  sectionPageOrder: Record<string, string[]>;
  entries: ManifestEntry[];
};

export type ScrapeOptions = {
  section?: string;
  concurrency: number;
  force: boolean;
  keepGoing: boolean;
  cacheDir: string;
};

export type GenerateOptions = {
  lang?: string;
  section?: string;
  cacheDir: string;
  outDir: string;
};

export type ValidateOptions = {
  cacheDir: string;
  outDir: string;
};
