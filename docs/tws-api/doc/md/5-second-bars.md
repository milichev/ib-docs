[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/5-second-bars)

# 5 Second Bars

## Introduction

Real time and historical data functionality is combined through the `EClient.reqRealTimeBars()` request. reqRealTimeBars will create an active subscription that will return a single bar in real time every five seconds that has the OHLC values over that period. reqRealTimeBars can only be used with a bar size of 5 seconds.

> **Note**
>
> RealTimeBars also adheres to [Market Data Lines](../../../general/market-data-subscriptions/market-data-lines/introduction.md) and [Live Data Limitations](introduction.md#live-data-limitations) limitations and requirements.

## Request 5 Second Bars

`EClient.reqRealTimeBars(tickerId, contract, barSize, whatToShow, useRTH, realTimeBarOptions)`

Requests real time bars. Only 5 seconds bars are provided. This request is subject to the same pacing as any historical data request: no more than 60 API queries in more than 600 seconds.

Real time bars subscriptions are also included in the calculation of the number of Level 1 market data subscriptions allowed in an account.

**`tickerId`** `int`

Request identifier used to track data.

---

**`contract`** `object`

The Contract object for which the depth is being requested

---

**`barSize`** `int`

Currently being ignored

---

**`whatToShow`** `string`

The nature of the data being retrieved. Available Values: TRADES, MIDPOINT, BID, ASK

---

**`useRTH`** `int`

Set to 0 to obtain the data which was also generated outside of the Regular Trading Hours, set to 1 to obtain only the RTH data

---

**`realTimeBarOptions`** `object`

Internal use only.

---

---

## Receive 5 Second Bars

`EWrapper.realtimeBar(reqId, time, open, high, low, close, volume, WAP, count)`

Receives the real time 5 second bars.

**`reqId`** `int`

Request identifier used to track data.

---

**`time`** `long`

The bar's start date and time (Epoch/Unix time)

---

**`open`** `double`

The bar's open point

---

**`high`** `double`

The bar's high point

---

**`low`** `double`

The bar's low point

---

**`close`** `double`

The bar's closing point

---

**`volume`** `decimal`

The bar's traded volume (only returned for TRADES data)

---

**`WAP`** `decimal`

The bar's Weighted Average Price rounded to minimum increment (only available for TRADES).

---

**`count`** `int`

The number of trades during the bar's timespan (only available for TRADES).

---

---

## Cancel 5 Second Bars

`EClient.cancelRealTimeBars(tickerId)`

Cancels Real Time Bars' subscription.

**`tickerId`** `int`

Request identifier used to track data.

---

---
