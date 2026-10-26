[source](https://www.interactivebrokers.com/docs/web-api/trading/orders/modifying-orders)

# Modifying Orders

The following example describes the submission of a request to modify an existing, unfilled order ticket.

##### **Values needed:**

* All previously submitted order handling instructions, including the instrument's conid
* The orderId of the order ticket to be modified

A `POST` request to the `/iserver/account/{accountId}/order/{orderId}` endpoint is used to submit a request to modify the order ticket referenced by `{orderId}` in the account `{accountId}`. This endpoint takes two required path parameters:

* `accountId`: The account ID to which the unfilled order belongs.
* `orderId`: The orderId of the order ticket to be modified.

This endpoint also requires a JSON body. This JSON body must be a single JSON object (note: not an array) containing all of the attributes and handling instructions of the original order ticket.

All JSON keys from the initial order submission must be present, and all JSON values must also be the same, except for the value(s) you seek to modify.

Note that order modification can be subject to different sets of market rules compared to new order submission. Our /iserver/secdef/rules endpoint can be used to inspect the ruleset enforced on a modification.

Suppose we have an active, unfilled order with orderId 987654 belonging to account DU123456, originally submitted with the following handling instructions:

```json
[
  {
    "conid": 265598,
    "side": "BUY",
    "orderType": "LMT",
    "price": 165,
    "quantity": 100,
    "tif": "DAY"
  }
]
```

We'd like to change the limit price of this order from 165 to 170. To do so, we send the following request:

`POST https://api.ibkr.com/v1/api/iserver/account/DU123456/order/987654`

```json
{
  "conid": 265598,
  "side": "BUY",
  "orderType": "LMT",
  "price": 170,
  "quantity": 100,
  "tif": "DAY"
}
```

Note first that order modification addresses only a single order per request. Therefore, this request does not use a JSON array as a container for the modified order ticket object. Instead, the modified order ticket object is the entirety of the request body.

Additionally, we must ensure that all other attributes of the order ticket, aside from the value being altered, are identical to the current, pre-modification attributes of the existing order ticket.

While it should be sufficient to store the contents of a successfully submitted new order ticket client-side, we may also inspect the contents of an existing order ticket with the Order Status endpoint, `/iserver/account/{accountId}/order/status/{orderId}`.

A successful order modification will return a response similar to a successful new order submission:

```json
{
  "order_id": "987654",
  "order_status": "Submitted",
  "encrypt_message": "1"
}
```

Alternatively, we may also receive an order reply message, as described above.
