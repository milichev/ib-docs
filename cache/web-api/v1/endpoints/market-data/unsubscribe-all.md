> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Unsubscribe (All)

Cancel all market data request(s). To cancel market data for a specific conid, see /iserver/marketdata/\{conid}/unsubscribe.

#### Abap

```abap
GET /iserver/marketdata/unsubscribeall
```

#### Python

```python
request_url = f"{baseUrl}/iserver/marketdata/unsubscribeall"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/marketdata/unsubscribeall \ 
--request GET
```

#### Response Object

**confirmed:** String.\
Returns a confirmation status of your unsubscribe request.

```
{
  "unsubscribed": true
}
```