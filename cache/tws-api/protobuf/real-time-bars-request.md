> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## RealTimeBarsRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `barSize` | `int32` | Currently being ignored |
| `whatToShow` | `string` | Data source type |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `realTimeBarsOptions` | `RealTimeBarsOptionsEntry` | Internal use. Flag special behavior or properties for real time bar rquests. |

## RealTimeBarsRequest.RealTimeBarsOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |