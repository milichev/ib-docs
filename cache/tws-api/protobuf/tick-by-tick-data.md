> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## TickByTickData

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `tickType` | `int32` | Type of data the tick represents. |
| `historicalTickLast` | `HistoricalTickLast` |  |
| `historicalTickBidAsk` | `HistoricalTickBidAsk` |  |
| `historicalTickMidPoint` | `HistoricalTick` |  |