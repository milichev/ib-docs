[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/histogram-data-request)

## HistogramDataRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `timePeriod` | `string` | Range of time covered by historgram. |
