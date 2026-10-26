import { CANONICAL_HOST } from "../constants.ts";

export type FetchResult =
  | { ok: true; body: string; finalUrl: string; status: number }
  | { ok: false; error: string; finalUrl: string; status?: number };

const MAX_REDIRECTS = 8;
const MAX_RETRIES = 3;

/**
 * Fern serves missing docs as HTTP 200 text/plain with this body,
 * while real markdown pages are text/markdown.
 */
export function isNotFoundPage(body: string): boolean {
  const lines = body.replace(/^\uFEFF/, "").split(/\r?\n/);
  let i = 0;
  while (i < lines.length && lines[i]!.trim() === "") i++;
  if (lines[i]?.trim() !== "# Page Not Found") return false;
  i++;
  while (i < lines.length && lines[i]!.trim() === "") i++;
  return lines[i]?.trim() === "This page does not exist.";
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function isDocsPath(pathname: string): boolean {
  return pathname === "/docs" || pathname.startsWith("/docs/");
}

function acceptRedirect(url: URL): boolean {
  return url.hostname === CANONICAL_HOST && isDocsPath(url.pathname);
}

/**
 * GET text body. Follows redirects only while host stays canonical and path under /docs/.
 * Retries transient 5xx / network errors with exponential backoff.
 */
export async function fetchDocsText(requestUrl: string): Promise<FetchResult> {
  let lastError = "unknown error";

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const result = await fetchOnce(requestUrl);
      if (result.ok) return result;

      const retryable =
        result.status !== undefined &&
        (result.status >= 500 || result.status === 429);

      if (!retryable || attempt === MAX_RETRIES - 1) {
        return result;
      }
      lastError = result.error;
      await sleep(250 * 2 ** attempt);
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      if (attempt === MAX_RETRIES - 1) {
        return { ok: false, error: lastError, finalUrl: requestUrl };
      }
      await sleep(250 * 2 ** attempt);
    }
  }

  return { ok: false, error: lastError, finalUrl: requestUrl };
}

async function fetchOnce(requestUrl: string): Promise<FetchResult> {
  let current = requestUrl;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const res = await fetch(current, {
      method: "GET",
      redirect: "manual",
      headers: {
        Accept: "text/markdown, text/plain, */*",
        "User-Agent": "ib-docs-scraper/0.1 (+local mirror)",
      },
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) {
        return {
          ok: false,
          error: `redirect ${res.status} without Location`,
          finalUrl: current,
          status: res.status,
        };
      }
      let next: URL;
      try {
        next = new URL(location, current);
      } catch {
        return {
          ok: false,
          error: `invalid redirect Location: ${location}`,
          finalUrl: current,
          status: res.status,
        };
      }
      if (!acceptRedirect(next)) {
        return {
          ok: false,
          error: `redirect left docs scope: ${next.href}`,
          finalUrl: current,
          status: res.status,
        };
      }
      current = next.href;
      continue;
    }

    if (!res.ok) {
      return {
        ok: false,
        error: `HTTP ${res.status} ${res.statusText}`,
        finalUrl: current,
        status: res.status,
      };
    }

    const body = await res.text();
    if (isNotFoundPage(body)) {
      return {
        ok: false,
        error: "Page Not Found",
        finalUrl: current,
        status: 404,
      };
    }
    return { ok: true, body, finalUrl: current, status: res.status };
  }

  return {
    ok: false,
    error: `too many redirects (>${MAX_REDIRECTS})`,
    finalUrl: current,
  };
}
