[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/market-data-request)

## MarketDataRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `genericTickList` | `string` | Comma separated ids of the available generic ticks |
| `snapshot` | `bool` | Indicate that a snapshot should be requested rather than a data stream. |
| `regulatorySnapshot` | `bool` | Set to True for a paid, regulatory snapshot or False for live data |
| `marketDataOptions` | `MarketDataOptionsEntry` | Internal use. Unique attributes for market data request. |

## MarketDataRequest.MarketDataOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
