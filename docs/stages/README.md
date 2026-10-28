# Stages

| Stage | Reads | Writes | Net |
| ----- | ----- | ------ | --- |
| [scrape](scrape.md) | — | `cache/` | yes |
| [generate](generate.md) | `cache/` | `out/` | no |
| [validate](validate.md) | `cache/`, `out/` | report | no |

Detail: [`.cursor/plans/ib-docs-scrapper.plan.md`](../../.cursor/plans/ib-docs-scrapper.plan.md)
