[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/fy-is-and-notifications/unread-bulletins)

# Unread Bulletins

Returns the total number of unread fyis

`GET /fyi/unreadnumber`

#### Request Object

No params or body content should be sent.

#### Python

```python
request_url = f"{baseUrl}/fyi/unreadnumber"
requests.get(url=request_url)
```

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
