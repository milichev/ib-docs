[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/cancel-order)

# cancel_order_sync()

The `cancel_order_sync()` function submits a cancellation request for an existing open order. Upon cancelling an order, a dictionary containing the order status information will be returned. As the response is static, refer to the [get_open_orders](open-orders.md) function for more details on the current order status.

## Request Arguments

**`order_id`** `int32` — required

Identifier for the order to cancel. Retrieved from the original [Order Placement](place-order.md) or [get_open_orders()](open-orders.md).

---

**`order`** `object` — required

[OrderCancel Object](../ref/order-cancel.md) containing the order cancellation parameters.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 3 seconds.

---

```python
app.cancel_order_sync(347, OrderCancel())
```

## Response Object

Returns a dictionary containing the order status at the time of cancellation.

#### Properties

**`orderId`** `int32`

The identifier for the order. Relevant for order tracking, modification, and cancellation.

---

**`status`** `string`

The current status of the order. See [Order Status](/docs/tws-api/doc/order-management/order-status) for more details.

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

The identifier for which client ID the order was placed through. Orders can only be cancelled or modified on the [clientId they are bound to](/docs/tws-api/doc/orders/modify-order).

---

**`whyHeld`** `string`

In the event an order is held instead of being transmitted, the reason will be documented here.

---

**`mktCapPrice`** `float`

If an order is capped due to it exceeding the market price and the price is automatically modified, the modified price will be returned. Otherwise `0.0` is displayed.

---

```json wordWrap
{'orderId': 347, 'status': 'PendingCancel', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 1395073938, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
```

## Example Implementation

```python
from ibapi.sync_wrapper import TWSSyncWrapper
app = TWSSyncWrapper(timeout=30)

# Connect to TWS
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=0):
    # If the connection fails and False is returned, notify the user and gracefully exit the application.
    print("Failed to connect to TWS")
    exit(1)
else:
    # If the connection succeeded, notify the user.
    print("Connected to TWS")

app.cancel_order_sync(
    order_id=AAPL_ORDER_ID, # See our *Place Order* example for how the order_id was found.
)
```
