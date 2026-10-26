[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/open-orders)

# get_open_orders()

The `get_open_orders()` function retrieves all open orders from the current day's trading session. Orders are returned in a dictionary keyed by `orderId`.

## Request Arguments

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 3 seconds.

---

## Response Object

Returns a dictionary keyed by `orderId`, where each entry contains the associated contract, order, and order state objects.

#### Properties

**`{orderId}`** `object`

A map keyed by order identifier. Each key corresponds to a unique open order.

---

**`orderId`** `int32`

The identifier for the order. Relevant for order tracking, modification, and cancellation.

---

**`contract`** `object`

[Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) for the instrument being traded.

---

**`order`** `object`

[Order Object](../doc/orders/the-order-and-contract-objects.md) containing the parameters for the given order.

---

**`orderState`** `object`

OrderState object reflecting the current state of the order. Contains margin impact and status details.

---

```json wordWrap
{351: {'orderId': 351, 'contract': 2172957720272: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'order': 2172957719120: 351,8675309,979867965: LMT BUY 100@800 GTC, 'orderState': }}
```

## Example Implementation
