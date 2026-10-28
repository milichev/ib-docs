> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistogramDataRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `timePeriod` | `string` | Range of time covered by historgram. |