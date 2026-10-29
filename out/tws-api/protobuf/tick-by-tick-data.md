[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/tick-by-tick-data)

## TickByTickData

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `tickType` | `int32` | Type of data the tick represents. |
| `historicalTickLast` | `HistoricalTickLast` |  |
| `historicalTickBidAsk` | `HistoricalTickBidAsk` |  |
| `historicalTickMidPoint` | `HistoricalTick` |  |
