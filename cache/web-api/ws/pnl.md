> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Profit & Loss

## Subscribe to Profit & Loss

Subscribe to live profit and loss information for all accounts accessible by the authenticated user.

### Request

`spl+{}`

#### Properties

**`spl`** `const`

The leading topic message indicating a request to subscribe to live profit and loss data.

---

No additional parameters are required.

```
spl+{}
```

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the request. Returns `"spl"`.

---

**`args`** `object` — required

Object containing profit and loss data, keyed by account identifier.

---

**`{{accountId}}.Core`** `object`

Contains the profit and loss values for the specified account.

---

**`rowType`** `integer`

The row value of the request. Increments with additional accounts.

---

**`dpl`** `number`

Daily profit and loss value.

---

**`nl`** `number`

Net liquidation value of the account.

---

**`upl`** `number`

Unrealized profit and loss for the day.

---

**`uel`** `number`

Unrounded excess liquidity in the account.

---

**`mv`** `number`

Market value of held positions in the account.

---

```json wordWrap
{"topic":"spl","args":{"DU1234567.Core":{"rowType":1,"dpl":-12345.67,"nl":202801516.34,"upl":249013.54,"uel":180500000.00,"mv":391710.74}}}
```

---

## Unsubscribe from Profit & Loss

`upl+{}`

Request to cancel the Profit & Loss subscription.

### Request

#### Properties

**`upl`** `const`

Cancels the subscription to profit and loss information.

---

No additional parameters are required.

```
upl+{}
```

### Response Example

Unsubscribing from profit and loss updates does not deliver any acknowledgement. It would be expected for `spl` responses to immediately halt.