[source](https://www.interactivebrokers.com/docs/tws-api/contracts/market-indicators)

# Market Indicators

## Introduction

Most indicators made available within the Trader Workstation are unavailable in the API. Some indicators are an exception to this rule. such as:

* [NYSE Advance-Decline](#nyse-advance-decline)
* [NYSE Volume](#nyse-volume-index)
* [NYSE TICK Index](#nyse-tick-index)
* [NYSE Trading (TRIN or Arms) Index](#nyse-trading-index-trin)

---

## NYSE Advance-Decline

The Advanced-Decline index must be requested with [EClient.reqMktData()](../doc/md/streaming-data.md#request-watchlist-data) where:

* Advancing values correlate to the "BID" and "BID_SIZE".
* Declining values correlate to the "ASK" and "ASK_SIZE".

```
Symbol = "AD-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

---

## NYSE Volume Index

The Volume index must be requested with [EClient.reqMktData()](../doc/md/streaming-data.md#request-watchlist-data) where:

* Bid Price correlates to "UP Volume"
* Ask Price correlates to "Down Volume"
* Bid Size correlates to "Unchanged Volume"
* Ask Size will always return as 1.

```
Symbol = "VOL-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

---

## NYSE TICK Index

The TICK index must be requested with [EClient.reqMktData()](../doc/md/streaming-data.md#request-watchlist-data) where:

* Last Price correlates to the calculation of rising stocks minus declining stocks.
* Bid, Ask, Close, and all Size data that returns will come as -1 or 0. These values are passed automatically and are non-representative.

```
Symbol = "TICK-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

---

## NYSE Trading Index (TRIN)

The Trade index must be requested with [EClient.reqMktData()](../doc/md/streaming-data.md#request-watchlist-data) where:

* Last Price correlates to calculation of (Advancing Issues / Declining Issues) / (Advancing Volume / Declining Volume)
* Close price correlates to the final calculation of the value from the previous day.
* Bid, Ask, and all Size data that returns will come as -1 or 0. These values are passed automatically and are non-representative.

```
Symbol = "TRIN-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```
