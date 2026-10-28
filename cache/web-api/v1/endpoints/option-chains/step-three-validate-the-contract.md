> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Step Three: Validate The Contract

After calling the /search and /strikes endpoints, users can use the [/iserver/secdef/info endpoint](/docs/web-api/v1/endpoints/contract/search-sec-def-information-by-conid) to validate the derivative conId. This endpoint should be called for each strike and right combination of interest.

Note: For Futures Options, the conId of the Index should be specified, along with the explicit exchange being listed. As an example, CL futures options should specify "exchange=NYMEX" as an additional query parameter.

#### Python

```python
request_url = f"{baseUrl}/iserver/secdef/info?conid=416904&secType=OPT&month=JAN25&strike=3975&right=P
requests.get(url=request_url)
```

#### Abap

```abap
curl \
--url {{baseUrl}}/iserver/secdef/info?conid=416904&secType=OPT&month=JAN25&strike=3975&right=P \
--request GET
```

While all of the information is relevant, it is most important to save the conId in order to track the contract itself. For the lifespan of the Option, this conId will remain constant. This will also be used for all subsequent requests for market data or order placement.

```
[
  {
    "conid": 654371995,
    "symbol": "SPX",
    "secType": "OPT",
    "exchange": "SMART",
    "listingExchange": null,
    "right": "P",
    "strike": 3975.0,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "SPX",
    "desc2": "JAN 16 '25 3975 Put (AM)",
    "maturityDate": "20250116",
    "multiplier": "100",
    "tradingClass": "SPX",
    "validExchanges": "SMART,CBOE,IBUSOPT"
  }
]
```