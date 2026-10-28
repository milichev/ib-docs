> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalSchedule

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `startDateTime` | `string` | The datetime when the request should be submitted. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDateTime` | `string` | The request's end date and time. This should be formatted as "YYYYMMDD HH:mm:ss TMZ" or an empty string indicates current present moment. |
| `timeZone` | `string` | Timezone of the schedule request. |
| `historicalSessions` | `HistoricalSession` | An array of objects containing Start, End, and Ref Date. |