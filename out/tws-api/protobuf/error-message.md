[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/error-message)

## ErrorMessage

| Field | Type | Description |
| ----- | ---- | ----------- |
| `id` | `int32` | The order's unique identifier. If a new order is placed with an order ID less than or equal to the order ID of a previous order an error will occur |
| `errorTime` | `int64` | The Unix timestamp of when the error took place |
| `errorCode` | `int32` | The code identifying the error |
| `errorMsg` | `string` | The error's description |
| `advancedOrderRejectJson` | `string` | Advanced order rejection message providing additional depth for error. |
