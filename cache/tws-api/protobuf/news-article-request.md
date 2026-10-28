> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## NewsArticleRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](/docs/tws-api/doc/news/articles) for more details. |
| `newsArticleOptions` | `NewsArticleOptionsEntry` | Reserved for internal use. Should be defined as null |

## NewsArticleRequest.NewsArticleOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |