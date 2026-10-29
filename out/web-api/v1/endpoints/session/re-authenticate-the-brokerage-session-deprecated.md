[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/session/re-authenticate-the-brokerage-session-deprecated)

# Re-authenticate the Brokerage Session (Deprecated)

When using the CP Gateway, this endpoint provides a way to reauthenticate to the Brokerage system as long as there is a valid brokerage session.

All interest in reauthenticating the gateway session should be handled using the /iserver/auth/ssodh/init endpoint.

`POST /iserver/reauthenticate`

#### Request Object

No params or body content should be sent.

#### Python

```python
request_url = f"{baseUrl}/iserver/reauthenticate"
json_content = {}
requests.post(url=request_url, json=json_content )
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/reauthenticate \ 
--request POST \ 
--header 'Content-Type:application/json' \ 
--data '{}'
```

#### Response Object

**message:** String.\
Returns "triggered" to indicate the response was sent.

```
{
  "message": "triggered"
}
```
