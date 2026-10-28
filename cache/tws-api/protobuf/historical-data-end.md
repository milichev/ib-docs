> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalDataEnd

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `startDateStr` | `string` | The start of the returned historical data. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDateStr` | `string` | Indicates the final bar returned in the format "YYYYMMDD" |