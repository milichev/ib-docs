[source](https://www.interactivebrokers.com/docs/tws-api/ref/historical-session)

## HistoricalSession

| Field | Type | Description |
| ----- | ---- | ----------- |
| `startDateTime` | `string` | The datetime when the request should be submitted. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDateTime` | `string` | The request's end date and time. This should be formatted as "YYYYMMDD HH:mm:ss TMZ" or an empty string indicates current present moment. |
| `refDate` | `string` | Reference date for the bar. |
