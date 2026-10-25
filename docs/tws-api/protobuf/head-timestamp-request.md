[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/head-timestamp-request)

## HeadTimestampRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `whatToShow` | `string` | Data source type |
| `formatDate` | `int32` | Using 1 will return UTC time in YYYYMMDD-hh:mm:ss format. Using 2 will return epoch time |
