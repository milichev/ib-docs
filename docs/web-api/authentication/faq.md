[source](https://www.interactivebrokers.com/docs/web-api/authentication/faq)

# Authentication Frequently Asked Questions

## How can I tell if my brokerage session is authenticated?

The endpoint **iserver/auth/status** can be used to determine the current authentication status of the session. Once you have logged in using the Web API Gateway, you can make a request to this endpoint to determine if your session is fully authenticated. If the session is fully authenticated, the response from this endpoint will display  `"authenticated": true` .

## How long does a session remain authenticated?

A session can remain authenticated for up to 24 hours, resetting at midnight for New York, U.S.; Zug, Switzerland; or Hong Kong time depending on your nearest connection.

Sessions will time out after approximately 6 minutes without sending new requests or maintaining the [/tickle endpoint](../v1/endpoints/session/ping-the-server.md) at least every 5 minutes.

Daily maintenance of IBKR's servers could result in a disconnect earlier than the 24 hour period mentioned above. We advise disconnecting your session from your gateway and restarting it after the maintenance time to minimize any potential problems that may arise. Information on server reset times and system status updates can be found on the [System Status](https://www.interactivebrokers.com/en/software/systemStatus.php) page.

## How can I prevent the session from timing out?

A Web API brokerage session will timeout if no requests are received within a period of 5 minutes. In order to prevent the session from timing out, the endpoint **/tickle** should be called on a regular basis. It is recommended to call this endpoint approximately every minute.

If the brokerage session has timed out but the session is still connected to the IBKR backend, the response to **/auth/status** returns 'connected':true and 'authenticated':false. Calling the [/iserver/auth/ssodh/init](../v1/endpoints/session/initialize-brokerage-session.md) endpoint will initialize a new brokerage session.
