# ib-docs

Ad-hoc scraper that mirrors [Interactive Brokers docs](https://www.interactivebrokers.com/docs) into a local `docs/` tree for Docs-MCP ingestion.

## Stages

1. **`scrape`** — fetch sources into `cache/`, write `cache/manifest.json`
2. **`generate`** — build `docs/` from `cache/` only (no network)
3. **`validate`** — audit cache + docs — *not yet implemented*

## Setup

```bash
bun install
```

## Commands

```bash
bun run scrape [--section tws-api] [--concurrency 8] [--force] [--keep-going]
bun run generate [--lang python] [--section tws-api]
bun run validate

bun run typecheck
bun test
```

Example (TWS API only):

```bash
bun run scrape --section tws-api
```

## Layout

```
cache/
  manifest.json
  llms.txt
  tws-api/
    llms.txt
    doc/introduction.md
    ...
docs/          # produced by generate
  index.md
  tws-api/
    index.md
    ...
```
