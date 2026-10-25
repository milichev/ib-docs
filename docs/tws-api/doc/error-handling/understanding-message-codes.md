[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/understanding-message-codes)

# Understanding Message Codes

The TWS uses the [EWrapper.error](receiving-error-messages.md) method not only to deliver errors but also warnings or informative messages. This is done mostly for simplicity's sake. Below is a table with all the messages which can be sent by the TWS/IB Gateway. All messages delivered by the TWS are usually accompanied by a brief but meaningful description pointing in the direction of the problem.

Remember that the TWS API simply connects to a running TWS/IB Gateway which most of times will be running on your local network if not in the same host as the client application. It is your responsibility to provide reliable connectivity between the TWS and your client application.
