[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/live-ticks)

# Tick-By-Tick Data

## Introduction

In TWS, tick-by-tick data is available in the Time & Sales Window.

* Real time tick-by-tick data is not available for options.
* The tick type field is case sensitive – it must be `BidAsk`, `Last`, `AllLast`, `MidPoint`. `AllLast` has additional trade types such as combos, derivatives, and average price trades which are not included in `Last`.
* Tick-by-tick data not available for options.
* Tick-by-tick data for indices is only provided for CME indexes.
* Tick-by-tick data is not available for combos.
* No more than 1 tick-by-tick request can be made for the same instrument within 15 seconds.
* Time & Sales data requires a Level 1, Top Of Book market data subscription.

> **Info**
>
> The maximum number of simultaneous tick-by-tick subscriptions allowed for a user is 5% of the user's total market data lines. See \[Specialized Market Data Lines] for more information.

### Halted and Unhalted ticks

* If tick has zero price, zero size and pastLimit flag is set – this is "Halted" tick.
* If tick has zero price, zero size and followed immediately after "Halted" tick – this is "Unhalted" tick.

## Request Tick Data

`EClient.reqTickByTickData(reqId, contract, tickType, numberOfTicks, ignoreSize)`

Requests tick by tick or Time & Sales data.

**`reqId`** `int`

unique identifier of the request.

---

**`contract`** `object`

the contract for which tick-by-tick data is requested.

---

**`tickType`** `string`

tick-by-tick data type: "Last", "AllLast", "BidAsk" or "MidPoint".

---

**`numberOfTicks`** `int`

If a non-zero value is entered, then historical tick data is first returned via one of the [Historical Time and Sales Ewrapper Methods](live-ticks.md#receive-tick-data) respectively. (Max number of historical Ticks is 1000)

---

**`ignoreSize`** `bool`

Omit updates that reflect only changes in size, and not price. *Applicable to Bid_Ask data requests*.

---

---

## Receive Tick Data

Data is returned to unique functions based on what is requested in the whatToShow field.

* [EWrapper.cancelTickByTickData()](#ewrappertickbytickmidpoint) for `whatToShow=MIDPOINT`
* [EWrapper.tickByTickBidAsk()](#ewrappertickbytickbidask) for `whatToShow=BID_ASK`
* [EWrapper.tickByTickAllLast()](#ewrappertickbytickalllast) for for `whatToShow=Last`

### EWrapper.tickByTickAllLast

`EWrapper.tickByTickAllLast(reqId, tickType, time, price, size, tickAtrribLast, exchange, specialConditions)`

Returns "Last" or "AllLast" tick-by-tick real-time tick.

**`reqId`** `int`

unique identifier of the request.

---

**`tickType`** `int`

1: "Last" or 2: "AllLast".

---

**`time`** `long`

tick-by-tick real-time tick timestamp.

---

**`price`** `double`

tick-by-tick real-time tick last price.

---

**`size`** `decimal`

tick-by-tick real-time tick last size.

---

**`tickAttribLast`** `object`

tick-by-tick real-time last tick attribs (bit 0 – past limit, bit 1 – unreported).

---

**`exchange`** `string`

tick-by-tick real-time tick exchange.

---

**`specialConditions`** `string`

tick-by-tick real-time tick special conditions. Conditions under which the operation took place.

---

---

### EWrapper.tickByTickBidAsk

`EWrapper.tickByTickBidAsk(reqId, time, bidPrice, askPrice, bidSize, askSize, tickAttribBidAsk)`

Returns "BidAsk" tick-by-tick real-time tick.

**`reqId`** `int`

unique identifier of the request.

---

**`time`** `long`

timestamp of the tick.

---

**`bidPrice`** `double`

bid price of the tick.

---

**`askPrice`** `double`

ask price of the tick.

---

**`bidSize`** `decimal`

bid size of the tick.

---

**`askSize`** `decimal`

ask size of the tick.

---

**`tickAttribBidAsk`** `object`

tick-by-tick real-time bid/ask tick attribs (bit 0 – bid past low, bit 1 – ask past high).

---

---

### EWrapper.tickByTickMidPoint

`EWrapper.tickByTickMidPoint(reqId, time, midPoint)`

Returns "MidPoint" tick-by-tick real-time tick.

**`reqId`** `int`

Request identifier used to track data.

---

**`time`** `long`

Timestamp of the tick.

---

**`midPoint`** `double`

Mid point value of the tick.

---

---

## Cancel Tick Data

`EClient.cancelTickByTickData(requestId)`

Cancels specified tick-by-tick data.

**`requestId`** `int`

Request identifier used to track data.

---

---
