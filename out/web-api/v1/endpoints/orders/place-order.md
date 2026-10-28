[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/orders/place-order)

# Place Order

When connected to an IServer Brokerage Session, this endpoint will allow you to submit orders.

CP WEB API supports various advanced orderTypes, for additional details and examples refer to the [Order Types](/docs/general/order-types) page.

**Cash Quantity:** Send orders using monetary value by specifying cashQty instead of quantity, e.g. cashQty: 200. The endpoint /iserver/contract/rules returns list of valid orderTypes in cqtTypes.\
Note: See [Cash Quantity Orders in the Web API](cash-quantity-orders-in-the-web-api.md) for more details.

**Currency Conversion:** Convert cash from one currency to another by including isCcyConv = true. To specify the cash quantity use fxQTY instead of quantity, e.g. fxQTY: 100.

**IB Algos:** Attached user-defined settings to your trades by using any of IBKR's Algo Orders. Use the endpoint /iserver/contract/\{conid}/algos to identify the available strategies for a contract.

**Notes:**

* With the exception of OCA groups and bracket orders, the orders endpoint does not currently support the placement of unrelated orders in bulk.
* Developers should not attempt to place another order until the previous order has been fully acknowledged, that is, when no further warnings are received deferring the client to the reply endpoint.

#### Abap

```abap
POST /iserver/account/{accountID}/orders
```

#### Python

```python
request_url = f"{baseUrl}/iserver/account/U1234567/orders"
json_content = {
  "orders": [
    {
      "acctId": "U1234567",
      "conid": 265598,
      "conidex": "265598@SMART",
      "manualIndicator": True,
      "extOperator":"person1234",
      "secType": "265598@STK",
      "cOID": "AAPL-BUY-100",
      "parentId": None,
      "orderType": "TRAILLMT",
      "listingExchange": "NASDAQ",
      "isSingleGroup": false,
      "outsideRTH": true,
      "price": 185.50,
      "auxPrice": 183,
      "side": "BUY",
      "ticker": "AAPL",
      "tif": "GTC",
      "trailingAmt": 1.00,
      "trailingType": "amt",
      "referrer": "QuickTrade",
      "quantity": 100,
      # Can not be used in tandem with quantity value.
      # "cashQty": {{ cashQty }},
      # "fxQty": {{ fxQty }},
      "useAdaptive": false,
      "isCcyConv": false,
      # May specify an allocation method such as Equal or NetLiq for Financial Advisors.
      # "allocationMethod": {{ allocationMethod }},
      "strategy": "Vwap",
        "strategyParameters": {
          "MaxPctVol":"0.1",
          "StartTime":"14:00:00 EST",
          "EndTime":"15:00:00 EST",
          "AllowPastEndTime":true
        }
    }
  ]
}
requests.post(url=request_url, json=json_content)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/account/U1234567/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "acctId": "U1234567",
      "conid": 265598,
      "conidex": "265598@SMART",
      "manualIndicator": true,
      "extOperator":"person1234",
      "secType": "265598:STK",
      "cOID": "AAPL-BUY-100",
      "parentId": null,
      "orderType": "TRAILLMT",
      "listingExchange": "ISLAND",
      "isSingleGroup": false,
      "outsideRth": true,
      "price": 185.50,
      "auxPrice": 183,
      "side": "BUY",
      "ticker": "AAPL",
      "tif": "GTC",
      "trailingAmt": 1.00,
      "trailingType": "amt",
      "referrer": "QuickTrade",
      "quantity": 100,
      # Can not be used in tandem with quantity value.
      # "cashQty": {{ cashQty }}, 
      # "fxQty": {{ fxQty }},
      "useAdaptive": false,
      "isCcyConv": false,
      # May specify an allocation method such as Equal or NetLiq for Financial Advisors.
      # "allocationMethod": {{ allocationMethod }},
      "strategy": "Vwap",
        "strategyParameters": {
          "MaxPctVol":"0.1",
          "StartTime":"14:00:00 EST",
          "EndTime":"15:00:00 EST",
          "AllowPastEndTime":true
        }
    }
  ]
}'
```

#### Response Object

**orderId:** String.\
Returns the orders identifier which can be used for order tracking, modification, and cancellation.

**order_status:** String.\
Returns the order status of the current market order.\
See [Order Status Value](../order-monitoring/order-status-value.md) for more information.

**encrypt_message:** String.\
Returns a "1" to display that the message sent was encrypted.

```
[
  {
    "order_id": "1234567890",
    "order_status": "Submitted",
    "encrypt_message": "1"
  }
]
```

#### Alternate Response Object

In some instances, you will receive an ID along with a message about your order.

See the [Place Order Reply](place-order-reply-confirmation.md) section for more details on resolving the confirmation.

Users that wish to avoid receiving /reply message should consider using the [Suppression](suppress-messages.md) endpoint to automatically accept them.

**Important:** The reply must be confirmed before sending any further orders. Otherwise, the order will be invalidated and attempts to confirm invalid replies will result in a timeout (503).

**id:** String.\
Returns a message ID relating to the particular order's warning confirmation.

**message:** Array of Strings.\
Returns the message warning about why the order wasn't initially transmitted.

**isSuppressed:** bool.\
Returns if a particular warning was suppressed before sending.\
Always returns false.

**messageIds:** Array of Strings.\
Returns an internal message identifier (Internal use only).

```
[
  {
    "id": "07a13a5a-4a48-44a5-bb25-5ab37b79186c",
    "message": [
      "The following order \"BUY 5 AAPL NASDAQ.NMS @ 150.0\" price exceeds \nthe Percentage constraint of 3%.\nAre you sure you want to submit this order?"
    ],
    "isSuppressed": false,
    "messageIds": [
      "o163"
    ]
  }
]
```

#### Order Reject Object

In the event an order is placed that can not be completed based on account details such as trading permissions or funds, customers will receive a 200 OK response along with an error message explaining the issue.

This is unique from the 200 response used in the Alternate Response Object, or a potential 500 error resulting from invalid request content.

```
{
  "error":"We cannot accept an order at the limit price you selected. Please submit your order using a limit price that is closer to the current market price of 197.79.  Alternatively, you can convert your order to an Algorithmic Order (IBALGO)."
}
```
