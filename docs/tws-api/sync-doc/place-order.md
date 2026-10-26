[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/place-order)

# place_order_sync()

The `place_order_sync()` function submits an order to Trader Workstation using the provided contract and order parameters. Upon placing an order, a dictionary containing the order status information will be returned. As the response is static, refer to the [get_open_orders](open-orders.md) function for more details on the current order status.

## Request Arguments

**`contract`** `object` — required

[Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) for the instrument to trade.

---

**`order`** `object` — required

[Order Object](../doc/orders/the-order-and-contract-objects.md) containing the order parameters to be traded.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Uses the default timeout value passed to `TWSSyncWrapper`. Please be aware the timeout is only relevant for the response details. The order will submit in accordance with the order object's details.

---

## Response Object

Returns a dictionary containing the order status at the time of submission.

#### Properties

**`orderId`** `int32`

The identifier for the order. Relevant for order tracking, modification, and cancellation.

---

**`status`** `string`

The current status of the order. See [Order Status](../doc/order-management/order-status/introduction.md) for more details.

---

**`filled`** `decimal`

The total quantity of executed shares for the order.

---

**`remaining`** `decimal`

The total quantity of shares that have yet to execute for the order.

---

**`avgFillPrice`** `float`

The average execution price across fills.

---

**`permId`** `int32`

The permanent identifier for the order. This is calculated based on `orderId` and client ID for internal order tracking.

---

**`parentId`** `int32`

The `orderId` for the parent of this order. Will return `0` unless trading a bracket or OCA order.

---

**`lastFillPrice`** `float`

The price of the most recent execution for the order.

---

**`clientId`** `int32`

The identifier for which client ID the order was placed through. Orders can only be cancelled or modified on the [clientId they are bound to](../doc/orders/modifying-orders.md).

---

**`whyHeld`** `string`

In the event an order is held instead of being transmitted, the reason will be documented here.

---

**`mktCapPrice`** `float`

If an order is capped due to it exceeding the market price and the price is automatically modified, the modified price will be returned. Otherwise `0.0` is displayed.

---

```json wordWrap
{'orderId': 347, 'status': 'PreSubmitted', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 979867961, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
```

## Example Implementation
