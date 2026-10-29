[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/trading/instrument-discovery/contract-i-ds)

# Contract IDs

Before we can use the Web API to interact with a financial instrument, we must first determine its unique `conid`.

We start by searching IB's instrument database by symbol. Three endpoints exist to facilitate this step. All three endpoints will return all matching records within their scope. Subsequent requests will can further filter this result set.

#### Equities

The following endpoint is designed specifically for resolving stock symbols into `conids`. Note that it accepts a comma-separated list, and returns all matching results accordingly.

`GET /trsrv/stocks?symbols=AAPL`

```json
{
      "AAPL": [
        {
          "name": "APPLE INC",
          "assetClass": "STK",
          "contracts": [
            {
              "conid": 265598,
              "exchange": "NASDAQ",
              "isUS": true
            },
            {
              "conid": 38708077,
              "exchange": "MEXI",
              "isUS": false
            },
            ...
          ],
          ...
        },
        {
          "name": "LS 1X AAPL",
          "assetClass": "STK",
          "contracts": [
            {
              "conid": 493546048,
              "exchange": "LSEETF",
              "isUS": false
            }
          ],
          ...
        },
        ...
      ]
}
```

*Note*: For a single product trading in multiple markets, IB will assign distinct `conids` for each combination of product and currency. For instance, AAPL stock trading in USD in the United States has a different `conid` than the same AAPL stock trading in MXN. A single instrument that is traded in multiple markets will have its records grouped together.

#### Futures

A similar endpoint exists to locate futures products by their symbols or product codes:

`GET /trsrv/futures?symbols=ES`

```json
  {
    "ES": [
      {
        "symbol": "ES",
        "conid": 495512557,
        "underlyingConid": 11004968,
        "expirationDate": 20241220,
        "ltd": 20241219,
        "shortFuturesCutOff": 20241219,
        "longFuturesCutOff": 20241219
      },
      {
        "symbol": "ES",
        "conid": 495512563,
        "underlyingConid": 11004968,
        "expirationDate": 20251219,
        "ltd": 20251218,
        "shortFuturesCutOff": 20251218,
        "longFuturesCutOff": 20251218
      },
      ...
    ]
  }
```
