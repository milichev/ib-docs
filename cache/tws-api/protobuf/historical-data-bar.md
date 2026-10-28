> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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