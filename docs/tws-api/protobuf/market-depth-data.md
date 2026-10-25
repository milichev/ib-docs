[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/market-depth-data)

## MarketDepthData

| Field | Type | Description |
| ----- | ---- | ----------- |
| `position` | `int32` | The number of positions held |
| `operation` | `int32` | Indicates a change in the row's value.: |
| `side` | `int32` | 0 for ask, 1 for bid |
| `price` | `double` | The order's price |
| `size` | `string` | Represents volume of the order data. |
| `marketMaker` | `string` | The exchange holding the order if isSmartDepth is True, otherwise the MPID of the market maker |
| `isSmartDepth` | `bool` | Flag indicates that this is smart depth request |
