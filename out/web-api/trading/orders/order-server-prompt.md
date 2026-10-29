[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/trading/orders/order-server-prompt)

# Order Server Prompt

An *Order Server Prompt* is a client acknowledgement produced on the submission of an order that requires client interaction to proceed. Certain scenarios require that users acknowledge Server Prompts for orders  where a client is offered more than a binary choice rather than the binary options from [Order Reply Messages](order-reply-messages.md).

There are several steps that a user must implement to receive and acknowledge a server prompt. The scenario below demonstrates order submission while away from the market.

#### Initialize a websocket

For clients to interact with a Server Prompt messages, a **websocket must be running prior to order submissions**. The request identifier, `reqId`, required for the prompt acknowledgement is an unsolicited message delivered solely through the websocket.

It is recommended to include a request for `sor+{}` to receive [Live Order Updates](../../ws/order-updates.md). This is not required; however, it does help with order status validation.

#### Submit an order

Submit an order as normal. In this scenario, submitting an order over the market price will result in the client being prompted about the Price Management Algo.

```json
{"orders": [{"conid": 265598, "orderType": "LMT", "price": 350, "side": "BUY", "tif": "DAY", "quantity": 10, "outsideRth": true}]}'
```

The order above triggered the following message. The [Order Status](../../v1/endpoints/order-monitoring/order-status-value.md) of `PendingSubmit` is a potential indicator that acknowledgement of the Server Prompt is necessary.

```json
[{"order_id":"1645968998","order_status":"PendingSubmit","encrypt_message":"1"}]
```

Given the details shown, review websocket messages for content with `'topic': 'ntf'`.

#### Capture Order Response Details

The Websocket receives the following binary json payloads for our order. In this scenario, both messages reference `'topic': 'ntf'`. Notice that the first message is simply a warning, while the latter is relevant to our server prompt workflow. The most telling distinction of these values is the inclusion of `'reqId'` within the `'args'` list object.

```json
{'topic': 'ntf', 'args': [{'action': 'outside_rth', 'cqe': {'query': {'account_id': 'U1234567', 'sec_type': 'STK', 'order_currency': 'USD', 'exchange': 'SMART', 'conid': '265598', 'order_total': '3500.0'}, 'request_method': 'GET'}, 'id': '399', 'text': '<html>Order Message:<br />BUY 10 AAPL NASDAQ.NMS<br />Warning: Your order will not be placed at the exchange until 2026-10-07 09:30:00 US/Eastern.</html>', 'title': '{"query":{"account_id":"U1234567","sec_type":"STK","order_currency":"USD","exchange":"SMART","conid":"265598","order_total":"3500.0"},"request_method":"GET"}', 'url': None}]}

{'topic': 'ntf', 'args': [{'orderId': 1645968998, 'reqId': '15138', 'dismissable': [], 'text': 'If your order is not immediately executable, our systems may, depending on market conditions, reject your order if its limit price is more than the allowed amount away from the reference price at that time. If this happens, you will not receive a fill. This is a control designed to ensure that we comply with our regulatory obligations to avoid submitting disruptive orders to the marketplace.\nUse the Price Management Algo?', 'options': ['Use on this order', 'Always use', 'Do not use'], 'type': 'M', 'messageId': 'p12', 'prompt': True}]}
```

From the latter message, the following attributes within the `args` list object must be retrieved:

* `'orderId'` - This is used to distinguish our order and a required field in our next step.
* `'reqId'` - The `reqId` is used to identify the specific request, as multiple modification attempts may reference the same order object with Server Prompts only being relevant to select requests.
* `'options'` - The list of response details are passed within the `options` list and define how the prompt should be acknowledged. In this scenario, we have the choices of 'Use on this order', 'Always use', 'Do not use'. This example will approve the Price Management Algo only this time, so `'Use on this order'` should be stored for later use.

#### Pass details to Notification

With the details from the `ntf` message, the Server Prompt may be acknowledged through the [/v1/api/iserver/notification endpoint](/docs/v1/endpoints/orders/respond-to-a-server-prompt). This is a `POST` request to `/v1/api/iserver/notification` with a json body containing the `orderId, `reqId`, and `text\` values from our prior step.

A few important notes regarding these values:

* As with the original response from `ntf`, note that `reqId` is a string of numbers rather than a direct integer value.
* `text` is equivalent to a single string entry from `options`.

`POST https://api.ibkr.com/v1/api/iserver/notification`

```json
{
    "orderId": 1645968998,
    "reqId": '15138',
    "text": 'Use on this order'
}
```

Responding through the Server Prompt endpoint will return a status message to determine the transmission of the order. The plain-text response will appear as below.

```text
Success
```

#### Order placement

Unless otherwise restricted, the websocket will updated order status for the `orderId` and the order will transmit as intended.

```json
{'topic': 'sor', 'args': [{'acct': 'U1234567', 'orderId': 1645968998, 'status': 'Submitted', 'order_ccp_status': 'Submitted', 'bgColor': '#000000', 'fgColor': '#00F000'}]}
```
