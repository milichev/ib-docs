[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/receiving-error-messages)

# Receiving Error Messages

#### EWrapper.error(

**reqId:** int. The request identifier corresponding to the most recent reqId that maintained the error stream.\
This does not pertain to the orderId from placeOrder, but whatever the most recent requestId is.

**errorTime:** int. The Unix timestamp of when the error took place.\
Note: This is only implemented for TWS API 10.33+

**errorCode:** int. The code identifying the error.

**errorMsg:** String. The error's description.

**advancedOrderRejectJson:** String. Advanced order reject description in json format.\
)
