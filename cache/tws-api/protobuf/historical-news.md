> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalNews

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `time` | `string` | Trigger time for the request. Formatted as HH:MM:ss (UTC assumed if timezone note set.) |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](/docs/tws-api/doc/news/articles) for more details. |
| `headline` | `string` | Headline of the provided news article |