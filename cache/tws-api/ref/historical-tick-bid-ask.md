> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalTickBidAsk

| Field | Type | Description |
| ----- | ---- | ----------- |
| `time` | `int64` | The UNIX timestamp of the historical tick. |
| `tickAttribBidAsk` | `TickAttribBidAsk` | Unique attributes of the tick data. |
| `priceBid` | `double` | Buy side price of the order |
| `priceAsk` | `double` | Sell side price of the order |
| `sizeBid` | `string` | Number of shares in the buy side |
| `sizeAsk` | `string` | Number of shares in the sell side |