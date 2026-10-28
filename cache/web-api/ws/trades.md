> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Trades

## Subscribe to Trades

Subscribe to a stream of executions data for the authenticated user. Returns historical executions as well as real-time updates as new trades occur.

### Request

`str+{"realtimeUpdatesOnly": bool, "days": int}`

#### Properties

**`str`** `const`

The leading topic message indicating a request to subscribe to trades data.

---

`object`

---

**`realtimeUpdatesOnly`** `boolean`

Determines whether to include historical executions or only real-time executions. Defaults to `false`, which includes historical executions.

---

**`days`** `integer`

The number of days of execution history to return. Defaults to `1`.

---

```
str+{"realtimeUpdatesOnly": false, "days": 1}
```

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the request. Returns `"str"`.

---

**`args`** `array` — required

Array of execution objects, each representing one trade.

---

`object`

---

**`execution_id`** `string` — required

Execution identifier of the specific trade.

---

**`symbol`** `string`

Ticker symbol of the traded contract.

---

**`supports_tax_opt`** `string`

Determines if the contract supports the tax optimizer. Client Portal only.

---

**`side`** `string`

Indicates if the order was a buy or sell.

---

**`order_description`** `string`

Full description of the order. Format: `"{SIDE} {SIZE} @ {PRICE} on {EXCHANGE}"`.

---

**`trade_time`** `string`

Traded date and time in UTC. Format: `"YYYYMMDD-HH:mm:ss"`.

---

**`trade_time_r`** `integer`

Traded datetime of the execution in epoch time.

---

**`size`** `number`

Quantity of shares or contracts traded.

---

**`order_ref`** `string`

Custom order identifier (cOID) from order placement, if specified.

---

**`price`** `string`

Price at which the trade executed.

---

**`exchange`** `string`

Exchange on which the order executed.

---

**`net_amount`** `number`

Total amount traded after applying the contract multiplier.

---

**`account`** `string`

Account on which the order was traded.

---

**`accountCode`** `string`

Account on which the order was traded.

---

**`company_name`** `string`

Full company name for the contract.

---

**`contract_description_1`** `string`

Underlying symbol of the contract.

---

**`contract_description_2`** `string`

Full description of the derivative contract, if applicable.

---

**`sec_type`** `string`

Security type of the traded contract.

---

**`conid`** `integer`

Contract identifier for the traded contract.

---

**`conidEx`** `string`

Returns the conidEx of the order if specified; otherwise returns the conid.

---

**`open_close`** `string`

Indicates if the execution was a closing trade. Returns `"???"` if the position was already open but not a closing order.

---

**`liquidation_trade`** `string`

Indicates if the trade was the result of a liquidation.

---

**`is_event_trading`** `string`

Determines if the order can be used with EventTrader.

---

```json wordWrap
{"topic":"str","args":[{"execution_id":"0000e0d5.65524eba.01.01","symbol":"AAPL","supports_tax_opt":"1","side":"B","order_description":"BOT 10 @ 182.50 on NASDAQ","trade_time":"20231113-14:30:00","trade_time_r":1699885800000,"size":10.0,"price":"182.50","exchange":"NASDAQ","net_amount":1825.0,"account":"DU1234567","accountCode":"DU1234567","company_name":"APPLE INC","contract_description_1":"AAPL","sec_type":"STK","conid":265598,"conidEx":"265598","open_close":"???","liquidation_trade":"0","is_event_trading":"0"}]}
```

---

## Unsubscribe from Trades

`utr`

Request to cancel the trades data subscription.

### Request

#### Properties

**`utr`** `const`

Cancels the trades data subscription.

---

No additional parameters are required.

```
utr
```

### Response Example

Unsubscribing from trades updates does not deliver any acknowledgement. It would be expected for `str` responses to immediately halt.