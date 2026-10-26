[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/unread-bulletins)

# Unread Bulletins

Returns the total number of unread fyis

`GET /fyi/unreadnumber`

#### Request Object

No params or body content should be sent.

#### Abap

```abap
curl \
--url {{baseUrl}}/fyi/unreadnumber \
--request GET
```

#### Response Object

**BN:** int.\
Returns the number of unread bulletins.

```
{
  "BN": 4
}
```
