[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/order-status)

## OrderStatus

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order id. |
| `status` | `string` | Current status of the order. |
| `filled` | `string` | Number of filled positions |
| `remaining` | `string` | The remnant positions |
| `avgFillPrice` | `double` | Average execution price of shares in the order |
| `permId` | `int64` | The Host order identifier. |
| `parentId` | `int32` | The order ID of the parent order, used for bracket and auto trailing stop orders. |
| `lastFillPrice` | `double` | Price at which the last positions were filled |
| `clientId` | `int32` | The API client id which placed the order. |
| `whyHeld` | `string` | Indication of why an order was held. |
| `mktCapPrice` | `double` | If an order has been capped, this indicates the current capped price |
