[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/session/logout-of-the-current-session)

# Logout of the current session

Logs the user out of the gateway session. Any further activity requires re-authentication.

`POST /logout`

#### Request Object

No params or body content should be sent.

#### Abap

```abap
curl \
--url {{baseUrl}}/logout \
--request POST \
--header 'Content-Type:application/json' \
--data '{}'
```

#### Response Object

**status:** bool.\
Returns true if the session was ended.

```
{
  "status":true
}
```
