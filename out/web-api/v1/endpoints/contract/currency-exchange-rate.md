[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/contract/currency-exchange-rate)

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
