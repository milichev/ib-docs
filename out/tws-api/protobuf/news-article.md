[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/news-article)

## NewsArticle

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `articleType` | `int32` | The type of news article (0 – plain text or html, 1 – binary data / pdf). |
| `articleText` | `string` | The body of article. If articleType == 1, the binary data is encoded using the Base64 scheme. |
