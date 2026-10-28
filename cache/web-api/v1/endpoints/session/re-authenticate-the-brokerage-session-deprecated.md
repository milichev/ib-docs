> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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