[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/historical-data-end)

## HistoricalDataEnd

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `startDateStr` | `string` | The start of the returned historical data. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDateStr` | `string` | Indicates the final bar returned in the format "YYYYMMDD" |
