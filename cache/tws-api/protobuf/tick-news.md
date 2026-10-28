> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## TickNews

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `timestamp` | `int64` | Epoch timestamp of the request |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](/docs/tws-api/doc/news/articles) for more details. |
| `headline` | `string` | Headline of the provided news article |
| `extraData` | `string` | Returns any additional data available about the article |