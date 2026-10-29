[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/place-order-request)

## PlaceOrderRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order id. |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `order` | `Order` | The currently active Order |
| `attachedOrders` | `AttachedOrders` | Attached Take Profit and Stop Loss order identifiers. |
