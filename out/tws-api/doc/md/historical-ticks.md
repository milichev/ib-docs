[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/historical-ticks)

# Historical Time & Sales

## Introduction

The highest granularity of historical data from Interactive Brokers can be retrieved using the API function [EClient.reqHistoricalTicks](#requesting-ticks) for historical time and sales values. Historical Time & Sales will return the same data as what is available in Trader Workstation under the Time and Sales window. This is a series of ticks indicating each trade based on the requested values.

* Historical Tick-By-Tick data is not available for combos.
* Historical tick data is only available for the last 3 years.
* Data will not be returned from multiple trading sessions in a single request; Multiple requests must be used.
* To complete a full second, more ticks may be returned than requested.
* Time & Sales data requires a Level 1, Top Of Book market data subscription.

## Halted and Unhalted Ticks

* If tick has zero price, zero size and pastLimit flag is set – this is "Halted" tick.
* If tick has zero price, zero size and followed immediately after "Halted" tick – this is "Unhalted" tick.

## Request Historical Ticks

`EClient.reqHistoricalTicks(requestId, contract, startDateTime, endDateTime, numberOfTicks, whatToShow, useRth, ignoreSize, miscOptions)`

Requests historical Time & Sales data for an instrument.

**`requestId`** `int`

id of the request

---

**`contract`** `object`

Contract object that is subject of query.

---

**`startDateTime`** `string`

i.e. "20170701 12:01:00". Uses TWS timezone specified at login.

---

**`endDateTime`** `string`

i.e. "20170701 13:01:00". In TWS timezone. Exactly one of startDateTime or endDateTime must be defined.

---

**`numberOfTicks`** `int`

Number of distinct data points. Max is 1000 per request.

---

**`whatToShow`** `string`

(`"Bid_Ask"`, `"Midpoint"`, or `"Trades"`) Type of data requested.

---

**`useRth`** `bool`

Data from regular trading hours (1), or all available hours (0).

---

**`ignoreSize`** `bool`

Omit updates that reflect only changes in size, and not price. Applicable to `Bid_Ask` data requests. Note: Options and Future Options will only display a value of 1, unless to indicate a removed bid/ask, which will instead return a price and size value of 0.

---

**`miscOptions`** `list`

Should be defined as null; reserved for internal use.

---

#### Java

```java
client.reqHistoricalTicks(18001, contract, "20220808 10:00:00 US/Eastern", null, 10, "TRADES", 1, true, null);
```

---

## Receive Historical Ticks

Data is returned to unique functions based on what is requested in the whatToShow field.

* [EWrapper.historicalTicks()](#ewrapperhistoricalticks) for `whatToShow=MIDPOINT`
* [EWrapper.historicalTicksBidAsk()](#ewrapperhistoricalticksbidask) for `whatToShow=BID_ASK`
* [EWrapper.historicalTicksLast()](#ewrapperhistoricaltickslast) for for `whatToShow=TRADES`

### EWrapper.HistoricalTicks

`EWrapper.historicalTicks(reqId, ticks, done)`

For whatToShow=MIDPOINT

**`reqId`** `int`

id of the request

---

**`ticks`** `object`

object containing a list of tick values for the requested timeframe.

---

**`done`** `bool`

return whether or not this is the end of the historical ticks requested.

---

#### Java

```java
@Override
public void historicalTicks(int reqId, List ticks, boolean done) {
	for (HistoricalTick tick : ticks) {
		System.out.println(EWrapperMsgGenerator.historicalTick(reqId, tick.time(), tick.price(), tick.size()));
	}
}
```

---

### EWrapper.HistoricalTicksBidAsk

`EWrapper.historicalTicksBidAsk(reqId, ticks, done)`

For whatToShow=BidAsk

**`reqId`** `int`

id of the request

---

**`ticks`** `object`

object containing a list of tick values for the requested timeframe.

---

**`done`** `bool`

return whether or not this is the end of the historical ticks requested.

---

#### Java

```java
@Override
public void historicalTicksBidAsk(int reqId, List ticks, boolean done) {
	for (HistoricalTickBidAsk tick : ticks) {
		System.out.println(EWrapperMsgGenerator.historicalTickBidAsk(reqId, tick.time(), tick.tickAttribBidAsk(), tick.priceBid(), tick.priceAsk(), tick.sizeBid(),
				tick.sizeAsk()));
	}
}   
```

---

### EWrapper.HistoricalTicksLast

`EWrapper.historicalTicksLast(reqId, ticks, done)`

For whatToShow=Last & AllLast

**`reqId`** `int`

id of the request

---

**`ticks`** `object`

object containing a list of tick values for the requested timeframe.

---

**`done`** `bool`

return whether or not this is the end of the historical ticks requested.

---

#### Java

```java
public void historicalTicksLast(int reqId, List ticks, boolean done) {
	for (HistoricalTickLast tick : ticks) {
		System.out.println(EWrapperMsgGenerator.historicalTickLast(reqId, tick.time(), tick.tickAttribLast(), tick.price(), tick.size(), tick.exchange(), 
			tick.specialConditions()));
	}
}
```

---
