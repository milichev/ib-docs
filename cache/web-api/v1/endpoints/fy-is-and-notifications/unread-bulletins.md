> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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