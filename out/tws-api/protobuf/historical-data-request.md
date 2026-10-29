[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/historical-data-request)

## HistoricalDataRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `endDateTime` | `string` | The request's end date and time. This should be formatted as "YYYYMMDD HH:mm:ss TMZ" or an empty string indicates current present moment. |
| `barSizeSetting` | `string` | The data’s granularity or Valid Bar Sizes |
| `duration` | `string` | Specifies the number of seconds the order should remain active. For GTD orders only. Users that would prefer to specify an exact date should user the "GoodTillDate" parameter instead. Both values cannot be specified at the same time. |
| `useRTH` | `bool` | Declare that the request should only include Regular Trading Hours. Extended trading hours will be excluded. |
| `whatToShow` | `string` | Data source type |
| `formatDate` | `int32` | Using 1 will return UTC time in YYYYMMDD-hh:mm:ss format. Using 2 will return epoch time |
| `keepUpToDate` | `bool` | true indicates that historical data should be continuously delivered to EWrapper.HistoricalDataUpdate |
| `chartOptions` | `ChartOptionsEntry` | This is a field used exclusively for internal use |

## HistoricalDataRequest.ChartOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
