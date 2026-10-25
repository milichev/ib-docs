[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/tick-price)

## TickPrice

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `tickType` | `int32` | Type of data the tick represents. |
| `price` | `double` | The order's price |
| `size` | `string` | Represents volume of the order data. |
| `attrMask` | `int32` | Defines TickAttrib.canAutoExecute. |
