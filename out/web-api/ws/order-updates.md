[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/ws/order-updates)

# Order Updates

## Subscribe to Live Order Updates

Subscribe to a live stream of order status updates for the authenticated user. It is advised to first query all orders for the current day via the `/iserver/account/orders` endpoint before subscribing to live order updates.

Order updates are only returned for the active account. To change the active account, submit a request to [POST /iserver/account/](../api-reference/trading/trading-accounts/set-active-account.md). For multi-account structures such as Financial Advisors or Seprate Trade Limit account structures, users may pass `"All"` as an accountId.

### Request

`sor+{"filters":["Status"]}`

#### Properties

**`sor`** `const`

The leading topic message indicating a request to subscribe to live order updates.

---

`object`

---

**`filters`** `array`

An array containing a single order status string to filter returned orders exclusively to that status. If omitted, all active orders are returned. Additional details for the supported values are availble at [Order Status Values](../v1/endpoints/order-monitoring/order-status-value.md).

#### Supported Values

`"inactive"`, `"pending_submit"`, `"pre_submitted"`, `"submitted"`, `"filled"`, `"pending_cancel"`, `"pre_cancelled"`, `"cancelled"`, `"warn_state"`, `"sort_by_time"`

---

```
sor+{"filters":["Submitted"]}
```

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the request. Returns `"sor"`.

---

**`args`** `array` — required

Array of order objects, each representing one active order update.

---

`object`

---

**`acct`** `string`

Account identifier that placed the order.

---

**`conid`** `integer`

Contract identifier for the order.

---

**`orderId`** `integer`

Order identifier affiliated with the given order.

---

**`cashCcy`** `string`

Base currency used for the transaction.

---

**`sizeAndFills`** `string`

Total quantity filled relative to the order size. Format: `"{filled}/{total}"`.

---

**`orderDesc`** `string`

Description of the order covering side, size, order type, price, and time-in-force.

---

**`description1`** `string`

Ticker symbol of the contract.

---

**`ticker`** `string`

Ticker symbol of the contract.

---

**`secType`** `string`

Security type of the contract.

---

**`listingExchange`** `string`

Primary exchange where the contract is listed.

---

**`remainingQuantity`** `number`

Quantity of the order remaining unfilled.

---

**`filledQuantity`** `number`

Quantity of the order that has been filled.

---

**`companyName`** `string`

Full company name of the contract.

---

**`status`** `string`

Current order status. Values: `"Presubmitted"`, `"Submitted"`, `"Filled"`, `"Cancelled"`.

---

**`origOrderType`** `string`

Original order type of the given order.

---

**`supportsTaxOpt`** `string`

Determines if the order supports Tax Optimizer.

---

**`lastExecutionTime`** `string`

Datetime of the most recent execution. Format: `"YYMMDDHHmmss"`.

---

**`lastExecutionTime_r`** `integer`

Epoch timestamp of the most recent execution.

---

**`order_ref`** `string`

Custom order identifier (cOID) from order placement, if specified.

---

**`orderType`** `string`

Current order type. Values: `"MARKET"`, `"LIMIT"`, `"STOP"`.

---

**`side`** `string`

Side of the trade. Values: `"BUY"`, `"SELL"`.

---

**`timeInForce`** `string`

Time in force for the given order.

---

**`price`** `number`

Limit or stop price for the submitted order.

---

**`bgColor`** `string`

Background color. Used for Client Portal only.

---

**`fgColor`** `string`

Foreground color. Used for Client Portal only.

---

```json wordWrap
{"topic":"sor","args":[{"acct":"DU1234567","conid":265598,"orderId":123456789,"cashCcy":"USD","sizeAndFills":"0/100","orderDesc":"BUY 100 @ 182.50 LMT DAY","description1":"AAPL","ticker":"AAPL","secType":"STK","listingExchange":"NASDAQ","remainingQuantity":100.0,"filledQuantity":0.0,"companyName":"APPLE INC","status":"Submitted","origOrderType":"LIMIT","supportsTaxOpt":"1","lastExecutionTime":"231113143000","lastExecutionTime_r":1699885800000,"orderType":"LIMIT","side":"BUY","timeInForce":"DAY","price":182.50,"bgColor":"#000000","fgColor":"#00F000"}]}
```

---

## Unsubscribe from Live Order Updates

`uor+{}`

Request to cancel the live order updates subscription.

### Request

#### Properties

**`uor`** `const`

Cancels the live order updates subscription.

---

No additional parameters are required.

```
uor+{}
```

### Response Example

Unsubscribing from live order updates does not deliver any acknowledgement. It would be expected for `sor` responses to immediately halt.
