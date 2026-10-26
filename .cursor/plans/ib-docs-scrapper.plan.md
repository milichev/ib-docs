---
name: IB Docs Scraper
overview: Three-stage CLI (scrape -> generate -> validate) that caches raw IB docs under cache/, builds a sectioned docs/ mirror with relative links, optional language filtering for code examples, and independent completeness checks.
todos:
  - id: cli-stages
    content: "Wire CLI commands: scrape, generate, validate"
    status: completed
  - id: scrape-cache
    content: Scrape into cache/ + manifest.json; parallel page fetches (default concurrency 8, --concurrency override)
    status: completed
  - id: normalize
    content: Implement normalizeDocsUrl (canonical host, ibkrcampus rewrite, /section -> /docs/section)
    status: completed
  - id: generate-docs
    content: "Generate docs/: strip boilerplate, source link, unescape headings, rewrite only mirrored pages (not assets/uncached), indexes, --lang"
    status: completed
  - id: validate
    content: Independent llms.txt audit + output link-graph (relatives must exist; uncached/asset hrefs may stay absolute)
    status: completed
  - id: scope
    content: Optional TWS-only (or section) path filter on scrape
    status: completed
isProject: false
---

# IB Docs Scraper - Implementation Spec

**Status:** CLI + `scrape` + `generate` + **`validate`** are implemented.

Three-stage tool:

1. **`scrape`** — done: fetch sources into `cache/`, record `cache/manifest.json`.
2. **`generate`** — done: build `docs/` only from `cache/` (no network). Clean/transform content, rewrite links, emit indexes, optional language filter.
3. **`validate`** — done: evidence pass over `cache/` + `docs/` (independent audit + link-graph checks).

Also:

- Canonical host `www.interactivebrokers.com`; rewrite `ibkrcampus.com`.
- Sectioned local tree under `docs/`, discoverable from `docs/index.md`.

## CLI

```bash
bun run scrape [--section tws-api] [--concurrency 8] [--force]
bun run generate [--lang python] [--section tws-api]
bun run validate
```

Suggested package scripts map 1:1 to these commands. Each stage exits non-zero on hard failure.

| Stage      | Reads                           | Writes                                                  | Network |
| ---------- | ------------------------------- | ------------------------------------------------------- | ------- |
| `scrape`   | (optional existing cache)       | `cache/**`, `cache/manifest.json`                       | yes     |
| `generate` | `cache/**`, manifest            | `docs/**`                                               | no      |
| `validate` | `cache/**`, `docs/**`, manifest | report (stdout / optional `cache/validate-report.json`) | no      |

## Directory layout

```
cache/
  manifest.json
  llms.txt                              # root index
  tws-api/
    llms.txt
    doc/introduction.md                 # raw fetched bodies
    doc/quick-start/placing-orders.md
    ...
  web-api/
    ...

docs/
  index.md                              # root: section indexes only
  tws-api/
    index.md                            # section TOC (llms.txt order)
    doc/introduction.md                 # rewritten
    ...
```

**Sectioned, not flat.** Remote `/docs/{section}/...` maps to the same relative path under both `cache/` and `docs/` after stripping `/docs/`. Cross-section links stay correct with one relative-path helper.

Example: from `tws-api/doc/introduction.md` to `web-api/introduction.md` -> `../../web-api/introduction.md`.

## Stage 1 — `scrape` (implemented)

Reference only; do not re-litigate unless bugs appear.

### Goals

- Discover pages via `/llms.txt`.
- Fetch raw `llms.txt` and `.md` bodies into `cache/`.
- Append/update `cache/manifest.json`.
- Do **not** rewrite content or write `docs/`.

### Key rules

1. Canonical host: `https://www.interactivebrokers.com`.
2. `https://ibkrcampus.com/...` -> same path on canonical host.
3. Discovery:
   - Root: `/docs/llms.txt`
   - Sections: `/docs/{section}/llms.txt`
   - Pages: strip trailing `/`, append `.md` only when the last segment has no extension (`introduction` -> `introduction.md`). Leave `openapi.json` / `openapi.yaml` unchanged — appending `.md` 404s.
4. Only URLs under `/docs/` (optional `--section` narrows to `/docs/{section}/`).
5. Site-root paths like `/tws-api/...` (no `/docs/`) **must** become `/docs/tws-api/...` before accept/reject. Bare `/tws-api/` 404s; `/docs/tws-api/` works.
6. Skip mirroring remote `llms.txt` as pages; still store them in `cache/{section}/llms.txt` / `cache/llms.txt`.
7. Section roots like `/docs/tws-api/` are not pages (never produce `.../tws-api/.md`).

### URL normalization (shared helper)

```ts
function normalizeDocsUrl(raw: string, basePageUrl?: URL): URL | null
```

1. Trim; split `#fragment` (callers may reattach later).
2. Relative (`./`, `../`, bare file): resolve against `basePageUrl` when provided.
3. `ibkrcampus.com` -> `www.interactivebrokers.com`.
4. Canonical host: keep.
5. Root-absolute `/...`: if not under `/docs/` but matches a known section (`/tws-api`, `/web-api`, `/excel`, `/fix`, `/third-party-integrations`, `/general`), prepend `/docs`; then prepend origin.
6. Other hosts -> `null`.
7. Strip trailing `/` on pathname; require path starts with `/docs/` else `null`.

### Discovery

1. GET root `llms.txt` -> write `cache/llms.txt`.
2. Extract URLs/paths (URL regex + bare `/docs/...` and section-root forms).
3. For each section `llms.txt`: GET, write `cache/{section}/llms.txt`, **preserve link order**.
4. Build `pageUrls` and `sectionPageOrder` (ordered page URLs per section).

### Fetch pages

If `cache/` already has entries, warn and delete them before fetching so the run starts empty.

Discovery stays **serial** (root `llms.txt` -> section `llms.txt` -> page URL set). Page GETs are **parallel** with a concurrency cap.

**Concurrency policy (I/O-bound, not CPU-bound):**

- Default: **static `8`** in-flight page requests. Do **not** scale from CPU core count — that only encourages hammering a single docs host and does not speed up waiting on network.
- Override: `--concurrency <n>` (positive integer). Use a lower value if the host rate-limits; higher only if scrape is clearly network-idle and polite.
- Section `llms.txt` fetches may use the same pool or stay serial after root (few URLs; serial is fine).
- Implementation: a simple worker pool / semaphore around `fetch`. Write each file as it completes; build manifest entries in memory and flush `manifest.json` once at the end (avoids concurrent JSON corruption). Optional: retry transient 5xx/network errors with backoff, still counting against the same concurrency slot.

For each page URL:

- GET `.md`; follow redirects only while host stays canonical and path stays under `/docs/`.
- A body that is `# Page Not Found` / `This page does not exist.` is a failure even when HTTP status is 200. Do not write that body.
- **Slug recovery** (one hop): walk ancestor HTML pages (`{dir}/introduction`, then `{dir}`, up to the section). If that page links the same slug exactly once — or one candidate shares the longest path prefix — GET that href with `.md` appended when it has no extension. On success, store the recovered body. Manifest `url` stays the index URL; `finalUrl` and `cachePath` are the recovered page. Ambiguous slugs (several `introduction` links) stay `status: "error"`.
- Otherwise write the raw body to `cache/${relativePath}` and record the manifest entry.

### `cache/manifest.json`

Array (or map) of records, one per fetched artifact:

```ts
type ManifestEntry = {
  url: string          // request URL (canonical, no hash)
  finalUrl: string     // after redirects
  kind: "llms" | "page"
  section: string | null
  cachePath: string    // e.g. "tws-api/doc/introduction.md"
  sha256: string
  status: "ok" | "error"
  error?: string
  fetchedAt: string    // ISO
}
```

Also store (in manifest or sidecar) `sectionPageOrder` derived during scrape so `generate` does not re-parse order ad hoc—or re-parse cached `llms.txt` in generate; either is fine if documented. Prefer recording order in manifest metadata for stability.

Scrape success = all intended fetches attempted and manifest flushed. Partial errors can be `status: "error"` rows; exit non-zero if any page/llms failed (policy: fail closed unless `--keep-going`).

## Stage 2 — `generate` (implemented)

Reads only `cache/` + manifest. Writes `docs/`. No network.

### Mapping

```ts
function urlToLocalPath(u: URL): string
// /docs/tws-api/doc/x.md -> tws-api/doc/x.md
```

Disk: `docs/${relativePath}`. Manifest `cachePath` should match that relative path.

### Pipeline per cached page

1. Load raw markdown from `cache/`.
2. **Strip IB fetch boilerplate** (leading blockquotes), see below.
3. **Unescape spurious heading escapes** (e.g. `\_` in H1), see below.
4. Optional **language filter**.
5. Rewrite internal links to posix relatives.
6. **Prepend source link** to the canonical Interactive Brokers page.
7. Write `docs/${relativePath}`.

### Strip IB boilerplate header

Raw cache pages start with a fixed blockquote preamble, e.g.:

```md
> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.
```

On generate, remove this leading preamble before any other transform:

- Match from start of file: one or more consecutive blockquote blocks that look like the Mintlify/IB agent banner (section label line and/or the “append `.md`” / `llms.txt` lines), including blank lines between them.
- Stop at the first non-matching content (usually the real `#` title).
- Do not strip similar-looking blockquotes mid-document.
- Leave `cache/` untouched; stripping is generate-only.

### Source link

After cleanup, insert near the top of each generated page (above or immediately below the H1 — pick one and stay consistent; prefer **above H1** so the title stays the first heading):

```md
[source](https://www.interactivebrokers.com/docs/...)
```

- URL from manifest `finalUrl` (fallback `url`), on the canonical host.
- Prefer the **human HTML docs URL**: strip a trailing `.md` from the path (browsers serve the page without `.md`; keep hash if any — pages usually have none).
- Example: cache `tws-api/contracts/bonds.md` -> `[source](https://www.interactivebrokers.com/docs/tws-api/contracts/bonds)`.

### Heading escape cleanup (not backtick stripping)

Observed in cache (esp. `tws-api/sync-doc/*`): H1 titles use escaped underscores **outside** code spans:

```md
# get\_account\_summary()
```

Body already uses correct inline code: `` `get_account_summary()` ``. Renderers then show broken titles (underscores lost / mashed), e.g. `getaccountsummary()`.

**Do not** globally strip backslashes inside single-backticked spans — that is the wrong locus (problem is headings, not `` `...` ``), and it can corrupt legitimate escapes later.

**Do** on generate, for ATX heading lines (`#` … `######`):

- Unescape CommonMark-style punctuation escapes that IB over-applies in titles, at least `\_` -> `_`.
- Optionally also `\*` -> `*`, `\(` -> `(`, `\)` -> `)` if seen; start with `\_` only if that covers the corpus.
- Scope: heading lines only (confirmed pattern in H1; applying to all ATX levels is fine and cheap).
- Do not rewrite fenced code bodies.

### Link rewrite

Rewrite to a relative path **only when the target is in the mirrored set** (ok manifest map). Uncached docs pages and static assets keep their original hrefs so `docs/` does not contain broken relatives.

Rules:

- Preserve `#fragment`.
- Relative hrefs: resolve against current page URL, then normalize.
- External / out-of-scope (`normalizeDocsUrl` -> `null`): leave as-is.
- **Static assets** under `/docs/` (e.g. `/docs/_fern-img/….webp`): detect via `isDocsAssetPath`; **leave original href**. Do not invent fake `.md` paths.
- **`/llms.txt`**: point at local `{section}/index.md` (or root `index.md`) when known; otherwise drop or leave per implementation.
- **Mirrored pages**: `lookupPath(normalized, urlToPath)` returns a path **only** if the URL is in the ok manifest map. Then emit a posix relative. Including cross-section.
- **Uncached docs URLs** (normalize succeeds, not an asset, not in manifest): **leave original href** (often root-absolute `/docs/...`). Never call `urlToLocalPath` to invent a local relative for pages that were never scraped — that produced broken links like `../tws-settings.md`.

```ts
// Conceptual (see src/generate/links.ts)
if (isDocsAssetPath(normalized.pathname)) return full;
const targetPath = lookupPath(normalized, ctx.urlToPath);
if (!targetPath) return full; // uncached — keep original
// else relativeHref(...)
```

**Critical relative-path rule** (when rewriting):

```ts
path.posix.relative(path.posix.dirname(currentRelativePath), targetRelativePath)
```

Never `path.relative(currentFile, targetFile)` (extra `../`). Always posix `/` in emitted links.

Build lookup from manifest `ok` pages only: `url -> cachePath` (same as docs relative path).

### Language filter (`--lang`)

**Feasible** on generate (after-fetch). Raw IB markdown is already tagged:

1. Fenced blocks: `` ```python title={"Python"} ``, `` ```java ``, `` ```csharp ``, `` ```cpp ``, `` ```vbnet ``, etc.
2. Heading + fence groups: `#### Python` / `#### Java` / `#### C++` / `#### C#` / `#### VB.NET` immediately followed by a fence.

When `--lang <id>` is set (e.g. `python`, `java`, `javascript`, `csharp`, `cpp`, `vbnet`):

- Keep code fences whose language tag aliases to `<id>`.
- Drop other language fences.
- Drop orphaned language headings that only introduced a removed fence (e.g. remove `#### Java` when filtering to python).
- Leave non-code prose untouched.
- Untagged fences: keep (unknown) or drop via explicit policy; default **keep**.

Without `--lang`, emit all languages (noisy reference pages unchanged).

Alias table (illustrative): `py`/`python`, `js`/`javascript`/`typescript` if present, `c#`/`csharp`/`cs`, `c++`/`cpp`, `vb`/`vbnet`/`visualbasic`.

Language filter does not affect scrape/cache; re-run `generate --lang ...` anytime.

### Indexes

**`docs/index.md`** — only section indexes for sections present in cache:

```md
# Interactive Brokers Docs Mirror

Local snapshot of selected pages from `https://www.interactivebrokers.com/docs`.

## Sections

- [TWS API](tws-api/index.md)
- [Web API](web-api/index.md)
...
```

**`docs/{section}/index.md`** — pages in original section `llms.txt` order; links relative to the section index (`doc/introduction.md`, …). Optional nested headings by path segments; order must follow llms, not alphabetical.

Discoverability:

```
docs/index.md -> {section}/index.md -> pages
```

## Stage 3 — `validate` (implemented)

Evidence pass; does not trust the scraper's in-memory discovery alone.

### Checks

1. **Manifest integrity**
   - Every `status: "ok"` entry has a readable `cache/{cachePath}` whose sha256 matches (if stored).
   - Every `cache/**/*.md` and `cache/**/llms.txt` (except extras policy) is listed in the manifest.

2. **Independent discovery audit** (completeness of cache vs indices)
   - Re-parse **cached** `llms.txt` files with a small dumb link regex (separate module from scrape discovery).
   - Minimal normalize (string host rewrite + `/section` -> `/docs/section`). Append `.md` only when the path has no extension, same as scrape.
   - Expected page URL set must be ⊆ manifest `ok` page URLs.
   - Report missing and extras; missing => fail.

3. **Output link-graph** (render / relative-path guarantee)
   - From `docs/index.md`, BFS markdown links.
   - Every **relative** target exists on disk (strip `#fragment`). This is the hard guarantee after the generate fix above.
   - Absolute `/docs/...` or canonical docs hrefs may remain for **uncached pages**, **static assets**, and intentional `[source](...)` links — allowlist those; do not require every docs-looking href to become relative.
   - Fail on `ibkrcampus.com` leftovers if policy still rewrites campus -> canonical everywhere generate touches (or allowlist if left raw).
   - Every manifest `ok` page has a corresponding `docs/{cachePath}` (generated indexes exempt from remote URL requirement).

4. Optional: section count `llms.md links == docs/{section} page files` (excluding `index.md`).

Validate exits non-zero on any failed check; print a concise report.

Note: validate does **not** prove the remote site has no other pages outside llms indices; it proves the cache matches those indices and every **relative** link in `docs/` resolves. Absolute leftovers for non-mirrored targets are expected.

## Optional scope (`--section`)

On `scrape` (and optionally filter `generate`/`validate`):

- Keep only paths under `/docs/{section}/` (e.g. `tws-api`).
- Root `docs/index.md` then links only that section.

## Implementation notes

- Shared (already present from scrape): `normalizeDocsUrl`, path mapping, manifest types.
- `scrape` owns network + cache writes — **done**.
- `generate` owns transform: boilerplate strip, heading unescape, source link, link rewrite (mirrored pages only; assets/uncached left absolute), lang filter, indexes.
- `validate` owns oracles; its llms parser must not import scrape's discovery implementation (copy a minimal regex or live in `validate/` only) so evidence stays independent.
