[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/attached-orders)

## AttachedOrders

| Field | Type | Description |
| ----- | ---- | ----------- |
| `slOrderId` | `int32` | Order identifier of the attached stop loss from presets. |
| `slOrderType` | `string` | Order type for the attach stop loss from presets. Must be "PRESET". |
| `ptOrderId` | `int32` | Order ID for a preset profit taker order. |
| `ptOrderType` | `string` | Order type for the profit take. Must be "PRESET". |
