# ib-docs

Mirror [IB docs](https://www.interactivebrokers.com/docs) into `out/` for Docs-MCP. Pipeline: scrape → generate → validate.

## Map

| Path                              | Role                                           |
| --------------------------------- | ---------------------------------------------- |
| [docs/](docs/)                    | contracts                                      |
| `src/{scrape,generate,validate}/` | stage code                                     |
| `cache/`                          | raw fetches + `manifest.json` (gitignored)     |
| `out/`                            | mirror; crawl from `out/index.md` (gitignored) |

## Commands

```bash
bun install
bun run scrape [--section tws-api] [--concurrency 8] [--force] [--keep-going]
bun run generate [--lang python] [--section tws-api]
bun run validate
bun run typecheck && bun test
bun run serve
```
