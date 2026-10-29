[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/tick-by-tick-request)

## TickByTickRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `tickType` | `string` | Type of data the tick represents. |
| `numberOfTicks` | `int32` | Number of distinct data points. Max is 1000 per request |
| `ignoreSize` | `bool` | Omit updates that reflect only changes in size, and not price. Applicable to Bid\_Ask data requests |
