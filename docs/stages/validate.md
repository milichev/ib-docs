# validate

Independent audit of `cache/` + `out/`. No network.

```bash
bun run validate
```

1. Manifest integrity — ok entries match files/hashes; cache files listed.
2. llms audit — re-parse cached `llms.txt` (own parser); expected ⊆ ok pages.
3. Link graph — BFS from `out/index.md`; every **relative** target exists. Absolute leftovers for uncached/assets/`[source]` allowed.

Fails closed on any check. Does not prove remote completeness beyond llms indices.
