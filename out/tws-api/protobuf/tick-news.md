[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/tick-news)

## TickNews

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `timestamp` | `int64` | Epoch timestamp of the request |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](../doc/news/news-articles/request-news-articles.md) for more details. |
| `headline` | `string` | Headline of the provided news article |
| `extraData` | `string` | Returns any additional data available about the article |
