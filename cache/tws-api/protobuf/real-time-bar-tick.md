> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## RealTimeBarTick

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `time` | `int64` | Trigger time for the request. Formatted as HH:MM:ss (UTC assumed if timezone note set.) |
| `open` | `double` | The bar's open point |
| `high` | `double` | The bar's high point |
| `low` | `double` | The bar's low point |
| `close` | `double` | The last execution price of the bar. |
| `volume` | `string` | The bar's traded volume (only returned for TRADES data). |
| `WAP` | `string` | Weighted Average Price of the returning bar. |
| `count` | `int32` | Total trades within the bar. |