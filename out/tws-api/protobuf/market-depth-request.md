[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/market-depth-request)

## MarketDepthRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `numRows` | `int32` | The number of rows on each side of the order book |
| `isSmartDepth` | `bool` | Flag indicates that this is smart depth request |
| `marketDepthOptions` | `MarketDepthOptionsEntry` | Internal use. Unique attributes for market data request. |

## MarketDepthRequest.MarketDepthOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
