[source](https://www.interactivebrokers.com/docs/web-api/trading/instrument-discovery/finding-options-chains)

# Finding Options Chains

We will locate `conids` for equity options as an example.

##### Step 1, Obtaining Underlier Conid and Contract Months

First, we'll want to capture the conid of the underlying equity.

GET [https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=AAPL\&secType=STK](https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=AAPL\&secType=STK)
200 OK

```json
{[
  {
    "conid": "265598",
    "companyHeader": "APPLE INC - NASDAQ",
    "companyName": "APPLE INC",
    "symbol": "AAPL",
    "description": "NASDAQ",
    "restricted": null,
    "sections": [
      { "secType": "STK" },
      {
        "secType": "OPT",
        "months": "OCT24;NOV24;...;JAN27",
        "exchange": "SMART;AM...SAPPHIRE"
      },
      ...
    ]
  },
  ...
]}
```

We've received more than one matching result, and we will need to filter for the desired AAPL (trading in USD in the United States) stock record.

From this response we should capture two values:

1. The AAPL's `conid` (`"conid": "265598"`)
2. In the `"secType": "OPT"` section, the semicolon-separated list of options contract months (`"months": "OCT24;NOV24;...;JAN27"`)

##### Step 2, Obtaining Valid Strike Values

Next, we need to query for valid strike values.

GET [https://api.ibkr.com/v1/api/iserver/secdef/strikes?conid=265598\&exchange=SMART\&sectype=OPT\&month=OCT24](https://api.ibkr.com/v1/api/iserver/secdef/strikes?conid=265598\&exchange=SMART\&sectype=OPT\&month=OCT24)
200 OK

```json
{
  "call": [ ..., 212.5, 215.0, 217.5, 220.0, 222.5, 225.0, 227.5, ... ],
  "put": [ ..., 212.5, 215.0, 217.5, 220.0, 222.5, 225.0, 227.5, ... ]
}
```

Separate lists are always returned for Calls and Puts, in case strike values differ according to right.

##### Step 3, Obtaining Option Contract Conids

Finally, we'll make a series of queries for records for tradable option contract instruments.

To obtain all possible `conids`, we must make one request for each combination of Contract Month and Strike value. Note that it is possible that a given Strike value has no tradable options in a given Contract Month, in which case the response will be empty.

Note that below we've received four options contract records, because there are two expirations with the month of October.

GET [https://api.ibkr.com/v1/api/iserver/secdef/info?conid=265598\&exchange=SMART\&sectype=OPT\&month=OCT24\&strike=217.5](https://api.ibkr.com/v1/api/iserver/secdef/info?conid=265598\&exchange=SMART\&sectype=OPT\&month=OCT24\&strike=217.5)
200 OK

```json
{[
  {
    "conid": 730679583,
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "listingExchange": null,
    "right": "C",
    "strike": 217.5,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "AAPL",
    "desc2": "OCT 18 '24 217.5 Call",
    "maturityDate": "20241018",
    "multiplier": "100",
    "tradingClass": "AAPL",
    "validExchanges": "SMART,AM...SAPPHIRE",
    "showPrips": true
  },
  {
    "conid": 730679981,
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "listingExchange": null,
    "right": "P",
    "strike": 217.5,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "AAPL",
    "desc2": "OCT 18 '24 217.5 Put",
    "maturityDate": "20241018",
    "multiplier": "100",
    "tradingClass": "AAPL",
    "validExchanges": "SMART,AM...SAPPHIRE",
    "showPrips": true
  },
  {
    "conid": 733773440,
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "listingExchange": null,
    "right": "C",
    "strike": 217.5,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "AAPL",
    "desc2": "OCT 25 '24 217.5 Call",
    "maturityDate": "20241025",
    "multiplier": "100",
    "tradingClass": "AAPL",
    "validExchanges": "SMART,AM...SAPPHIRE",
    "showPrips": true
  },
  {
    "conid": 733773853,
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "listingExchange": null,
    "right": "P",
    "strike": 217.5,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "AAPL",
    "desc2": "OCT 25 '24 217.5 Put",
    "maturityDate": "20241025",
    "multiplier": "100",
    "tradingClass": "AAPL",
    "validExchanges": "SMART,AM...SAPPHIRE",
    "showPrips": true
  }
]}
```
