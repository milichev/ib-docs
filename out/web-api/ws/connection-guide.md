[source](https://www.interactivebrokers.com/docs/web-api/ws/connection-guide)

If you require brokerage functionality, you will need to establish a brokerage session prior to opening a websocket, just as is required before making requests to /iserver endpoints. Please see [Authentication](../authentication/introduction.md) for more details.

> **Info**
>
> The examples below are written in Python and utilize the [websocket-client](https://pypi.org/project/websocket-client/) library form [pypi.org](https://pypi.org).

#### Request Session Information

First make request the [/tickle](../api-reference/trading/trading-session/get-session-token.md) endpoint and save the returned session value.

```json
{
    "session": "d21b8cf5ebc8ea01c6ce37c8125ec83f",
    "ssoExpires": ssoExpires,
    "collission": collission,
    "userId": userId,
    "hmds": {
        "error": "no bridge"
    },
    "iserver": {
        "authStatus": {
            "authenticated": true,
            "competing": false,
            "connected": true,
            "message": "",
            "MAC": "MAC",
            "serverInfo": {
                "serverName": "serverName",
                "serverVersion": "serverVersion"
            }
        }
    }
}
```

#### Retrieve the Session Token

We are then specifically interested in the "session" value in the response as we can pass this to our websocket for confirming our sessionId.

```
sessionToken = '{"session":"d21b8cf5ebc8ea01c6ce37c8125ec83f"}'
```

#### Establishing the Websocket

#### Client Portal Gateway

When connecting with the Client Portal Gateway, users must submit the upgrade request to `wss://localhost:5000/v1/api/ws`. The cookie header must include the session token from step 2, like `api={"d21b8cf5ebc8ea01c6ce37c8125ec83f"}`

#### Python

```python
ws = websocket.WebSocketApp(
url="wss://localhost:5000/v1/api/ws",
on_open=on_open,
on_message=on_message,
on_error=on_error,
on_close=on_close,
cookie=f"api={sessionToken}"
)
ws.run_forever()
```

#### Establishing the Websocket with OAuth 1.0a

The process for those authenticating with OAuth 1.0a is similar with a few select changes. Upgrade requests should be directed to `wss://api.ibkr.com/v1/api/ws`. And in addition to the API cookie, you must also include the `"oauth_token"` query param which should be set to the user's access token value.

#### Python

```python
ws = websocket.WebSocketApp(
url="wss://api.ibkr.com/v1/api/ws?oauth_token={accessToken}",
on_open=on_open,
on_message=on_message,
on_error=on_error,
on_close=on_close,
cookie=f"api={sessionToken}"
)
ws.run_forever()
```

#### Establishing the Websocket with OAuth 2.0

OAuth 2.0 follows an identical process while leveraging the bearer token.  Upgrade requests should be directed to `wss://api.ibkr.com/v1/api/ws`. And in addition to the API cookie, you must also include the `"bearer_token"` query param which should be set to the user's bearer token value.

#### Python

```python
ws = websocket.WebSocketApp(
url="wss://api.ibkr.com/v1/api/ws?bearer_token={bearerToken}",
on_open=on_open,
on_message=on_message,
on_error=on_error,
on_close=on_close,
cookie=f"api={sessionToken}"
)
ws.run_forever()
```

#### Send a Websocket Topic

After establishing your session, await the [Authentication Status](auth-status.md) response with topic \`"sts" to indicate the websocket connection has been successfully established.

The Python example below decodes the binary response to UTF-8 before converting the content to a JSON object. This allows the user to decode the message to check for the `"sts"` topic before sending our [Order Updates](order-updates.md) request.

```python
def on_message(ws: websocket.WebSocketApp, message):
    jmsg = json.loads(message.decode('utf-8'))
    print(f"{datetime.now() } -> {jmsg}")
    if jmsg["topic"] == 'sts':
        send_msg(ws, 'sor+{}')
```
