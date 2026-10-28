> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# BookTrader Price Ladder

## Subscribe to BookTrader Price Ladder

Subscribe to BookTrader price ladder (depth of book) data for a contract. Streaming BookTrader data requires an active Level 2 / Depth of Book market data subscription. See the [Market Data Subscriptions](/docs/general/market-data-subscriptions) page for details.

### Request

`sbd+{{acctId}}+{{conid}}+{{exchange}}`

#### Properties

**`sbd`** `const`

The leading topic message indicating a request to subscribe to BookTrader price ladder data.

---

**`acctId`** `string` — required

The account identifier making the request.

---

**`conid`** `string` — required

A single contract identifier.

---

**`exchange`** `string`

A routing exchange identifier. If no exchange is specified, all available deep book exchanges are assumed.

---

```
sbd+U1234567+265598+NASDAQ
```

### Response

#### Properties

**`topic`** `string` — required

Returns the request's topic string. Format: `"sbd+{acctId}+{conid}"`.

---

**`data`** `array` — required

Array of price ladder row objects representing the depth of book.

---

`object`

---

**`row`** `integer` — required

Row identifier of the ladder entry.

---

**`focus`** `integer`

Indicates if this row is marked as the last trade price for the contract. Returns `1` for the focused row.

---

**`price`** `string`

Last trade price for this row. In some instances returned as `"size @ price"`.

---

**`ask`** `string`

Ask size at this price level.

---

**`bid`** `string`

Bid size at this price level.

---

```json wordWrap
{"topic":"sbd+U1234567+265598","data":[{"row":0,"focus":0,"price":"182.45"},{"row":1,"focus":1,"price":"5 @ 182.50"},{"row":2,"focus":0,"price":"182.50","bid":"200"},{"row":3,"focus":0,"price":"182.55","ask":"150"},{"row":4,"focus":0,"price":"10 @ 182.60","ask":"300"}]}
```

---

## Unsubscribe from BookTrader Price Ladder

`ubd+{{acctId}}`

Request to cancel a BookTrader price ladder subscription.

### Request

#### Properties

**`ubd`** `const`

Unsubscribes the user from BookTrader price ladder data for the specified account.

---

**`acctId`** `string` — required

The account identifier used in the original `sbd` request.

---

```
ubd+U1234567
```

### Response Example

Unsubscribing from the price ladder does not deliver any acknowledgement. It would be expected for `sbd` responses to immediately halt, and a new price ladder subscription may then be opened.