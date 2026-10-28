> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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