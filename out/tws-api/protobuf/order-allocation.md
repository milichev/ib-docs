[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/order-allocation)

## OrderAllocation

| Field | Type | Description |
| ----- | ---- | ----------- |
| `account` | `string` | References the Account ID, i.e. U1234567, being allocated to. |
| `position` | `string` | References the current position of the account being allocated to. |
| `positionDesired` | `string` | States the full position increase intended by the current trade. |
| `positionAfter` | `string` | Size of the position once the order has been allocated. |
| `desiredAllocQty` | `string` | Reference the quantity to increase by based on allocation. |
| `allowedAllocQty` | `string` | References the maximum allowed quantity increase. |
| `isMonetary` | `bool` | Denotes whether the order is a monetary allocation (true) or whole share allocation (false). |
