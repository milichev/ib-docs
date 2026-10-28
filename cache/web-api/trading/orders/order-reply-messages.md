> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Order Reply Messages

In some cases the response to an order submission request might not deliver an acknowledgment.

Instead, it might contain an "order reply message" -- essentially a notice -- which must be confirmed via a second request before our order ticket can go to work.

The receipt of such an "order reply message" does not indicate that the order is rejected or otherwise encountered a problem. Rather, IB requires explicit confirmation of some element of the order ticket, or some aspect of our subsequent handling, before we can seek the order's execution.

Very often these messages pertain to precautionary settings that are client-configurable for a given username -- effectively "fat finger" protections that you can adjust or remove if desired:

```
[
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
]
```

Aside from the content of the message, there are two important values delivered in such an "order reply" response.

First, we have an `id`, which uniquely identifies the emitted message. Via the `/iserver/reply/{messageId}` endpoint, we can use this `id` value to dismiss the message and put our order to work:

`POST https://api.ibkr.com/v1/api/iserver/reply/a12b34c5-d678-9e012f-3456-7a890b12cd3e`

```
{
  "confirmed":true
}
```

The above request requires a JSON body containing `{"confirmed":true}`, which is an instruction to IB that the message has been received, and you would like to continue with your order.

Provided the order can be accepted and put to work, the response to your `/iserver/reply/{messageId}` request will be an order acknowledgement response as shown above:

```
{
  "order_id": "1234567890",
  "order_status": "Submitted",
  "encrypt_message": "1"
}
```

Another important value (or set of values) to capture from order message response is `messageIds`, as in `"messageIds": ["o163"]` above.

These `messageIds` strings categorize varieties of order reply messages. You can use these IDs to suppress certain types of order reply messages for the remainder of your username's current Web API brokerage session.

Please see the Suppressing Order Reply Messages section for more detail.