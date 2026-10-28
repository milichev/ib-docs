> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalTicksRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `startDateTime` | `string` | The datetime when the request should be submitted. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDateTime` | `string` | The request's end date and time. This should be formatted as "YYYYMMDD HH:mm:ss TMZ" or an empty string indicates current present moment. |
| `numberOfTicks` | `int32` | Number of distinct data points. Max is 1000 per request |
| `whatToShow` | `string` | Data source type |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `ignoreSize` | `bool` | Omit updates that reflect only changes in size, and not price. Applicable to Bid\_Ask data requests |
| `miscOptions` | `MiscOptionsEntry` | Should be defined as *null*; reserved for internal use |

## HistoricalTicksRequest.MiscOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |