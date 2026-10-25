[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/message-config)

## MessageConfig

| Field | Type | Description |
| ----- | ---- | ----------- |
| `id` | `int32` | The order's unique identifier. If a new order is placed with an order ID less than or equal to the order ID of a previous order an error will occur |
| `title` | `string` | Message headline or summary. |
| `message` | `string` | The news bulletin context |
| `defaultAction` | `string` | Default action for handling the message. Supports "Yes", "No", and "Hidden". |
| `enabled` | `bool` | Declare that the message should be enabled to warn based on given actions. |
