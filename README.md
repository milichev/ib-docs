# ib-docs

Ad-hoc scraper that mirrors [Interactive Brokers docs](https://www.interactivebrokers.com/docs) into a local `out/` tree for Docs-MCP ingestion.

## Stages

See [`docs/stages/`](docs/stages/).

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
cache/         # raw fetches + manifest (gitignored)
  manifest.json
  llms.txt
  tws-api/
    llms.txt
    doc/introduction.md
    ...
out/           # produced by generate (gitignored)
  index.md
  tws-api/
    index.md
    ...
```
