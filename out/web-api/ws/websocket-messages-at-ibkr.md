[source](https://www.interactivebrokers.com/docs/web-api/ws/websocket-messages-at-ibkr)

# Solicited and Unsolicited Messages

There are two types of messages sent to clients via the websocket:

* **Solicited messages:** Messages delivered to the client in response to an explicit, client-initiated subscription to a topic.
* **Unsolicited messages:** Messages delivered automatically to the client by the server. These messages are not associated with a topic subscription that can be canceled, and they typically contain session or other administrative information.
