[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/trading/instrument-discovery/finding-derivative-products)

# Finding Derivative Products

Both examples above yielded instruments that are referenced by derivative products, though these endpoints intentionally omit those results for simplicity.

However, if we want to find those derivatives, we start with a more general-purpose endpoint that identifies the relationships between underliers and their derivatives:

`GET /iserver/secdef/search`

Consider the following example workflow to locate ES futures options.

#### Step 1, Obtaining Index Conid and Contract Months

First, we'll want to capture the `conid` of the underlying ES index. This index `conid` can be stored and reused in the future to fetch derivative products as needed.

`GET https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=ES&secType=FUT`

```json
{[
  {
    "conid": "11004968",
    "companyHeader": "E-mini S&P 500 - CME",
    "companyName": "E-mini S&P 500",
    "symbol": "ES",
    "description": "CME",
    "restricted": null,
    "sections": [
      { "secType": "IND", "exchange": "CME;" },
      {
        "secType": "FUT",
        "months": "DEC24;MA...29;DEC29",
        "exchange": "CME",
        "showPrips": true
      },
      {
        "secType": "FOP",
        "months": "OCT24;NO...27;DEC28",
        "exchange": "CME",
        "showPrips": true
      },
      ...
    ]
  },
  ...
]}
```

From this response we should capture these values:

1. The index's conid ("conid":"11004958")
2. From the "FOP" object, the semicolon-separated list of futures options Contract Months ("months":"DEC24;MAR25;JUN25;DEC25;DEC26;DEC27;DEC28")
3. The index's exchange, "CME"

#### Step 2, Obtaining Futures Options Conids

Next we collect the following parameters.

1. `Conid` of underlying index (`conid=11004968` for ES)
2. Name of the exchange (`exchange=CME`)
3. Security Type of the instruments we're seeking (`sectype=FOP`, recalling that CME Event Contracts are modeled as futures options)
4. Contract Month of interest, which restricts the scope of the query

And make the following request to obtain records instrument records, including `conids`, for ES futures options in the DEC24 contract month:

`GET /iserver/secdef/info?conid=11004968&exchange=CME&sectype=FOP&month=DEC24`

```json
{[
  {
    "conid": 732160324,
    "symbol": "ES",
    "secType": "FOP",
    "exchange": "CME",
    "listingExchange": null,
    "right": "C",
    "strike": 4975.0,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "ES",
    "desc2": "(EW) Dec31'24 4975 Call Fut.Option(50) @CME",
    "maturityDate": "20241231",
    "multiplier": "50",
    "tradingClass": "EW",
    "validExchanges": "CME",
    "showPrips": true
  },
  {
    "conid": 732160331,
    "symbol": "ES",
    "secType": "FOP",
    "exchange": "CME",
    "listingExchange": null,
    "right": "P",
    "strike": 5875.0,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "ES",
    "desc2": "(EW) Dec31'24 5875 Put Fut.Option(50) @CME",
    "maturityDate": "20241231",
    "multiplier": "50",
    "tradingClass": "EW",
    "validExchanges": "CME",
    "showPrips": true
  },
  ...
]}
```
