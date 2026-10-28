> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalTicks

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `historicalTicks` | `HistoricalTick` | A list of HistoricalTick objects. |
| `isDone` | `bool` | Flag the end of historical data. |