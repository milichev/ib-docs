> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Currency Pairs

Obtains available currency pairs corresponding to the given target currency.

`GET /iserver/currency/pairs`

#### Request Object

###### Query Params

**currency:** String. Required\
Specify the target currency you would like to receive official pairs of.\
Valid Structure: "USD"

#### Python

```python
request_url = f"{baseUrl}/iserver/currency/pairs?currency=USD"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/currency/pairs?currency=USD \
--request GET
```

#### Response Object

**\{\{currency}}:** List of Objects.\
\[\{\
**symbol:** String.\
The official symbol of the given currency pair.

**conid:** int.\
The official contract identifier of the given currency pair.

**ccyPair:** String.\
Returns the counterpart of\
}]

```
{
  "USD": [
    {
      "symbol": "USD.SGD",
      "conid": 37928772,
      "ccyPair": "SGD"
    },
	{...},
    {
      "symbol": "USD.RUB",
      "conid": 28454968,
      "ccyPair": "RUB"
    }
  ]
}
```