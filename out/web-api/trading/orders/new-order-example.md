[source](https://www.interactivebrokers.com/docs/web-api/trading/orders/new-order-example)

# New Order Example

The following workflow describes the submission of a new order ticket.

##### **Values needed:**

* Contract ID ("conid") for the desired instrument(s)
* Your desired order handling instructions

## Standard Order workflow

A `POST` request to the `/iserver/account/{accountId}/orders` endpoint is used to submit a new order ticket to the account referenced by `{accountId}` in the path. This endpoint takes one required path parameter:

* `accountId`: The account ID of the account to which the order will be placed.

This endpoint also requires a JSON body. The specific keys required to successfully submit a given order ticket will vary depending on a variety of factors, including order type. More information on the construction of order tickets can be found on our Order Types page.

However, at a minimum, any new order ticket submitted via the Web API will require in its body:

* `conid`: The instrument's conid
* `orderType`: The Order Type of the new order ticket
* `side`: The side of the order being placed (e.g., "BUY" or "SELL")
* `tif`: Time in force, the duration for which the order will work.
* `quantity`: A number of units of the instrument

Please consult our Reference Material for a list of all JSON keys available when submitting new order tickets.

Suppose we have trading permissions for account DU123456. We'd like submit a new order to this account to buy 100 shares of AAPL, with a limit price of USD 165, to work for the remainder of today's regular trading hours (an unmodified "day" order).

First we must have obtained IB's conid for AAPL stock, trading in the US in USD, which is 265598. We must also know how to represent our desired handling instructions to the Web API:

* A buy order is `"side":"BUY"`
* A quantity of 100 shares is `"quantity":100`
* A limit order is `"orderType":"LMT"`
* A limit price of USD 165 is `"price":165`
* A day order is `"tif":"DAY"`
* And finally, AAPL's conid is `"conid":265598`

Note that both the keys and values above are case-sensitive.

Care must also be taken to ensure the correct JSON data types are used, as detailed in our Reference Material. We may then construct the following request:

`POST https://api.ibkr.com/v1/api/iserver/account/DU123456/orders`

```json
{[
  {
    "conid": 265598,
    "side": "BUY",
    "orderType": "LMT",
    "price": 165,
    "quantity": 100,
    "tif": "DAY"
  }
]}
```

Note also that the body of this POST request requires a JSON array containing the order ticket object. This array is used to submit order brackets, as detailed below. For now, we will submit only a single order ticket by way of a single object element in this array.

If we are successful in submitting our order, we will receive a response that includes an `order_id` value that can be used to keep track of the status of the order, as well as an indication of its current status at the time of submission:

```json
{
  "order_id": "987654",
  "order_status": "Submitted",
  "encrypt_message": "1"
}
```

## Alternate Response Details

Order submissions may occasionally require additional input from the user. This typically manifests in one of two ways.

#### Order Reply confirmation

In some scenarios, traders may received a response body that contains an `id`, `message`, and `messageId` values, such as the example shown below. For such cases, follow our [Order Reply Messages](order-reply-messages.md) workflow.

```json
{[
  {
    "id": "07a13a5a-4a48-44a5-bb25-5ab37b79186c",
    "message": [
      "The following order \"BUY 100 AAPL NASDAQ.NMS @ 165.0\" price exceeds \nthe Percentage constraint of 3%.\nAre you sure you want to submit this order?"
    ],
    "isSuppressed": false,
    "messageIds": [
      "o163"
    ]
  }
]}
```

#### Order Server Prompts

Another scenario takes place when orders display `'order_status': 'PendingSubmit'` without moving into an active status. Such circumstances require the [Order Server Prompt](order-server-prompt.md) workflow to resolve.

```json
[{"order_id":"1645968998","order_status":"PendingSubmit","encrypt_message":"1"}]
```

## Advisor Order Allocation

The same order endpoint may be used by Financial Advisors structures to allocate orders to multiple accounts simultaneously. This only requires the addition of `jsonPayload` order parameter to define the number of shares to allocate. Using our prior order as an example, we can assume the same base structure while adding in `jsonPayload`.

`POST https://api.ibkr.com/v1/api/iserver/account/DF794613/orders`

```json
  {'orders': [
    {
      'conid': 265598,
      'jsonPayload': {
        'allocation_profile': {
          'alloc_type': 'SHARE',
          'allocations': [
            {'account': 'DUN123456','amount': 1},
            {'account': 'DUN876543','amount': 1}
          ]
        }
      },
      'orderType': 'LMT',
      'price': 340,
      'quantity': 100,
      'side': 'BUY',
      'tif': 'DAY'
    }
  ]}
```

Shares are allocated as a ratio for `amount` against each account tied to the `quantity`. A similar distribution will be used in scenarios where an imbalanced `amount` is set.

* In the example above, both accounts would receive `50` shares, since a ratio of 1:1 would give them an equal split.
* If the accounts are assigned `1` and `3`, the end result would be an assignment of 25 and 75 respectively given the 1:3 ratio.
* This scale is based on the lowest common denominator. Scenarios where `amount` is set to 10 for both accounts will still calculate a 1:1 ratio of share distribution.

```
[
  {
    'encrypt_message': '1',
    'order_id': '1453536095',
    'order_status': 'Submitted'
  }
]
```
