> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## PlaceOrderRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order id. |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `order` | `Order` | The currently active Order |
| `attachedOrders` | `AttachedOrders` | Attached Take Profit and Stop Loss order identifiers. |