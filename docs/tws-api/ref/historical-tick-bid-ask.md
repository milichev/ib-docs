[source](https://www.interactivebrokers.com/docs/tws-api/ref/historical-tick-bid-ask)

## HistoricalTickBidAsk

| Field | Type | Description |
| ----- | ---- | ----------- |
| `time` | `int64` | The UNIX timestamp of the historical tick. |
| `tickAttribBidAsk` | `TickAttribBidAsk` | Unique attributes of the tick data. |
| `priceBid` | `double` | Buy side price of the order |
| `priceAsk` | `double` | Sell side price of the order |
| `sizeBid` | `string` | Number of shares in the buy side |
| `sizeAsk` | `string` | Number of shares in the sell side |
