[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/cancel-order-request)

## CancelOrderRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order id. |
| `orderCancel` | `OrderCancel` | An OrderCancel object that can receive the manualOrderCancelTime, manualOrderIndicator, and extOperator fields. See OrderCancel Reference for more insight on the OrderCancel class |
