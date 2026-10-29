[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/historical-data-bar)

## HistoricalDataBar

| Field | Type | Description |
| ----- | ---- | ----------- |
| `date` | `string` | The start date of the bar's covered data. |
| `open` | `double` | The bar's open price. |
| `high` | `double` | The bar's high price. |
| `low` | `double` | The bar's low price. |
| `close` | `double` | The bar's close price. |
| `volume` | `string` | The bar's traded volume if available (only available for TRADES) |
| `WAP` | `string` | The bar's Weighted Average Price (only available for TRADES) |
| `barCount` | `int32` | The number of trades that took place through the course of trading. |
