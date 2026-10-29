# scrape

Fetch IB docs into `cache/`. No transforms. No `out/` writes.

```bash
bun run scrape [--section tws-api] [--concurrency 8] [--force] [--keep-going]
```

- Discover via `/docs/llms.txt` → section `llms.txt` → pages.
- Canonical host `www.interactivebrokers.com`; rewrite `ibkrcampus.com`.
- Site-root `/tws-api/...` → `/docs/tws-api/...` before accept/reject.
- Append `.md` only when the last path segment has no extension.
- Parallel page GETs (default concurrency 8). Wipe `cache/` first if non-empty.
- Record `cache/manifest.json`. Exit non-zero on any failed page/llms unless `--keep-going`.
