# generate

Build `out/` from `cache/` only. No network.

```bash
bun run generate [--lang python] [--section tws-api]
```

Per page: strip IB boilerplate → unescape heading `\_` → optional `--lang` → repair IB `\[text]/(path)` glitches → rewrite mirrored links → prepend `[source](...)` → write `out/{cachePath}`.

- **Ghost pages**: skip cache entries whose `Content-Type` is HTML (or whose body looks like HTML) — e.g. `/docs/openapi.json` served as `text/html`. They stay in `cache/` but are not written to `out/`, and links to them are left absolute (not rewritten into the mirror).
- Relative links only for mirrored pages; assets and uncached `/docs/...` stay absolute.
- **IB link glitches**: `\[label]/(section/...)` (escaped `[`, slash before `(`) is repaired into a normal markdown link and then rewritten when the target is mirrored. Bare `\[Label]` with no path (e.g. `\[OrderAllocation]`) is left as-is — no reliable target to resolve.
- Indexes: `out/index.md` → `{section}/index.md` (llms order). Nested `##` / `###` … headings from path segments (`doc/notes-limitations/…` → Docs → Notes Limitations); pages with no nesting stay flat.
- Index link text: changelog pages use ISO date (`2023-10-26`); section-root `doc.md` / `ref.md` use `Docs` / `Reference` (H1 is often a generic “Introduction”); otherwise H1 (or path slug).
- `--lang`: keep that language’s examples. If the page has none, fall back to python → java → csharp (so `--lang javascript` still gets examples on TWS pages).
- Remote `/docs/{section}/...` ↔ same relative path under `cache/` and `out/`.
