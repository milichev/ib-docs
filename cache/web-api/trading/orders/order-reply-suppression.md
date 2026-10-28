> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Order Reply Suppression

The following response to an order ticket submission indicates that we must confirm some aspect of our order ticket before it will be accepted:

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

We call these messages "order reply messages".

The `"messageIds"` array contains identifiers that categorize the type of order reply message we've received. In this case, we've received `"messageIds": ["o163"]`.

Certain types of order reply messages may be suppressed for the duration of your username's current Web API brokerage session.

When a category of order reply messages is suppressed, you will no longer be sent order reply message responses requiring confirmation. Instead, a valid order ticket will be accepted and acknowledged immediately. Invalid order tickets will be rejected.

The `/iserver/questions/suppress` endpoint provides this suppression mechanism. You may `POST` an array of `messageIds` to suppress those order message types for the remainder of the Web API brokerage session:

`POST https://api.ibkr.com/v1/api/iserver/questions/suppress`

```json
{
  "messageIds": [
    "o163"
  ]
}
```

The response will confirm their suppression:

```json
{
  "status": "submitted"
}
```

You do not need to have received a given `messageId` value previously in order to suppress it.

## Suppressing Multiple MessageIds

You may submit multiple `messageIds` in a single request to suppress multiple order reply messages.

`POST https://api.ibkr.com/v1/api/iserver/questions/suppress`

```
{
  "messageIds": [
    "o0","p6", "o10164","o10223","o403","o10331","o2137","o10082","o10332","o10333","o10334","o2136","o10335","o10151","o10288","o10152","o10153","o2165","p12","o354","o383","o451","o10138","o163","o382", "o354"
  ]
}
```

We recommend that you submit this list of messages to be suppressed at the beginning of your brokerage session, prior to conducting any trading.

If you would like to suppress a new type of message while trading, please resend the complete array of `messageIds`.

You may also undo all suppression of messages within your current brokerage session:

`POST https://api.ibkr.com/v1/api/iserver/questions/suppress/reset`

And the response will confirm the restoration of delivery of all messages generated during order submission:

```json
{
  "status": "submitted"
}
```