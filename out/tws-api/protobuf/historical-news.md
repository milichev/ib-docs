[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/historical-news)

## HistoricalNews

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `time` | `string` | Trigger time for the request. Formatted as HH:MM:ss (UTC assumed if timezone note set.) |
| `providerCode` | `string` | News provider code based on requested data |
| `articleId` | `string` | Identifier used to track the news article. See [EClient.reqNewsArticle](../doc/news/news-articles/request-news-articles.md) for more details. |
| `headline` | `string` | Headline of the provided news article |
