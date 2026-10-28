> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# place\_order\_sync()

The `place_order_sync()` function submits an order to Trader Workstation using the provided contract and order parameters. Upon placing an order, a dictionary containing the order status information will be returned. As the response is static, refer to the [get_open_orders](/docs/tws-api/sync-doc/open-orders) function for more details on the current order status.

## Request Arguments

**`contract`** `object` — required

[Contract Object](/docs/tws-api/doc/contracts/object) for the instrument to trade.

---

**`order`** `object` — required

[Order Object](/docs/tws-api/doc/orders/objects) containing the order parameters to be traded.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Uses the default timeout value passed to `TWSSyncWrapper`. Please be aware the timeout is only relevant for the response details. The order will submit in accordance with the order object's details.

---

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 250

app.place_order_sync(contract, order)
```

## Response Object

Returns a dictionary containing the order status at the time of submission.

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
{'orderId': 347, 'status': 'PreSubmitted', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 979867961, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 8675309, 'whyHeld': '', 'mktCapPrice': 0.0}
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

contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

order = Order()
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 350

aapl_order = app.place_order_sync(contract, order)
AAPL_ORDER_ID = aapl_order["orderId"]
```