> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Currency Exchange Rate

Obtains the exchange rates of the currency pair.

`GET /iserver/exchangerate`

#### Request Object

###### Query Params

**Source:** String. Required\
Specify the base currency to request data for.\
Valid Structure: "AUD"

**Target:** String. Required\
Specify the quote currency to request data for.\
Valid Structure: "USD"

#### Python

```python
request_url = f"{baseUrl}/iserver/exchangerate?target=AUD&source=USD"
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/exchangerate?target=AUD&source=USD \
--request GET
```

#### Response Object

**rate:** float.\
Returns the exchange rate for the currency pair.

```
{
    "rate": 0.67005002
}
```