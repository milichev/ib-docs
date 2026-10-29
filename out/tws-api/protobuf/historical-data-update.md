[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/historical-data-update)

## HistoricalDataUpdate

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `historicalDataBar` | `HistoricalDataBar` | Object representing Open, High, Low, Close, Volume, and Weighted Average Price over a given time period. |
