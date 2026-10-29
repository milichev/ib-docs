# Stages

Workflow: scrape → generate → validate

| Stage                     | Reads            | Writes   | Net |
| ------------------------- | ---------------- | -------- | --- |
| [scrape](1-scrape.md)     | —                | `cache/` | yes |
| [generate](2-generate.md) | `cache/`         | `out/`   | no  |
| [validate](3-validate.md) | `cache/`, `out/` | report   | no  |

Spec: [ib-docs-scrapper.plan.md](../.cursor/plans/ib-docs-scrapper.plan.md)
