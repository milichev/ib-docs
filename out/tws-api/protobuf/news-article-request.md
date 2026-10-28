[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/news-article-request)

## NewsArticleRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](../doc/news/news-articles/request-news-articles.md) for more details. |
| `newsArticleOptions` | `NewsArticleOptionsEntry` | Reserved for internal use. Should be defined as null |

## NewsArticleRequest.NewsArticleOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
