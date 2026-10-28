> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

\


#### Python

```python
self.reqHistoricalTicks(18001, contract, "20170712 21:39:33 US/Eastern", "", 10, "TRADES", 1, True, [])
```

#### Java

```java
client.reqHistoricalTicks(18001, contract, "20220808 10:00:00 US/Eastern", null, 10, "TRADES", 1, true, null);
```

#### C++

```cpp
m_pClient->reqHistoricalTicks(19001, contract, "20170621 09:38:33 US/Eastern", "", 10, "BID_ASK", 1, true, TagValueListSPtr());
```

#### C\#

```csharp
client.reqHistoricalTicks(18001, contract, "20170712 21:39:33 US/Eastern", null, 10, "TRADES", 1, true, null);
```

#### VB.NET

```vbnet
client.reqHistoricalTicks(18001, contact, "20170712 21:39:33 US/Eastern", Nothing, 10, "TRADES", 1, True, Nothing)
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

\


#### Python

```python
def historicalTicks(self, reqId: int, ticks: ListOfHistoricalTickLast, done: bool):
	for tick in ticks:
		print("historicalTicks. ReqId:", reqId, tick)
```

#### Java

```java
@Override
public void historicalTicks(int reqId, List ticks, boolean done) {
	for (HistoricalTick tick : ticks) {
		System.out.println(EWrapperMsgGenerator.historicalTick(reqId, tick.time(), tick.price(), tick.size()));
	}
}
```

#### C++

```cpp
void TestCppClient::historicalTicks(int reqId, const std::vector& ticks, bool done) {
    for (const HistoricalTick& tick : ticks) {
    std::time_t t = tick.time;
        std::cout << "Historical tick. ReqId: " << reqId << ", time: " << ctime(&t) << ", price: "<< Utils::doubleMaxString(tick.price).c_str() << ", size: " << decimalStringToDisplay(tick.size).c_str() << std::endl;
    }
}
```

#### C\#

```csharp
public void historicalTicks(int reqId, HistoricalTick[] ticks, bool done)
{
	foreach (var tick in ticks)
	{
		Console.WriteLine("Historical Tick. Request Id: {0}, Time: {1}, Price: {2}, Size: {3}", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.Price), Util.DecimalMaxString(tick.Size));
	}
}
```

#### VB.NET

```vbnet
Public Sub historicalTick(reqId As Integer, ticks As HistoricalTick(), done As Boolean) Implements EWrapper.historicalTicks
	For Each tick In ticks
		Console.WriteLine("Historical Tick. Request Id: {0}, Time: {1}, Price: {2}, Size: {3}", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.Price), Util.DecimalMaxString(tick.Size))
	Next
End Sub
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

\


#### Python

```python
def historicalTicksBidAsk(self, reqId: int, ticks: ListOfHistoricalTickLast, done: bool):
	for tick in ticks:
		print("historicalTicksBidAsk. ReqId:", reqId, tick)
```

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

#### C++

```cpp
void TestCppClient::historicalTicksBidAsk(int reqId, const std::vector& ticks, bool done) {
    for (const HistoricalTickBidAsk& tick : ticks) {
		std::time_t t = tick.time;
        std::cout << "Historical tick bid/ask. ReqId: " << reqId << ", time: " << ctime(&t) << ", price bid: "<< Utils::doubleMaxString(tick.priceBid).c_str()  << ", price ask: "<< Utils::doubleMaxString(tick.priceAsk).c_str() << ", size bid: " << decimalStringToDisplay(tick.sizeBid).c_str() << ", size ask: " << decimalStringToDisplay(tick.sizeAsk).c_str() << ", bidPastLow: " << tick.tickAttribBidAsk.bidPastLow << ", askPastHigh: " << tick.tickAttribBidAsk.askPastHigh << std::endl;
    }
}
```

#### C\#

```csharp
public void historicalTicksBidAsk(int reqId, HistoricalTickBidAsk[] ticks, bool done)
{
	foreach (var tick in ticks)
	{
		Console.WriteLine("Historical Tick Bid/Ask. Request Id: {0}, Time: {1}, Price Bid: {2}, Price Ask: {3}, Size Bid: {4}, Size Ask: {5}, Bid/Ask Tick Attribs: {6} ", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.PriceBid), Util.DoubleMaxString(tick.PriceAsk), Util.DecimalMaxString(tick.SizeBid), Util.DecimalMaxString(tick.SizeAsk), tick.TickAttribBidAsk);
	}
}
```

#### VB.NET

```vbnet
Public Sub historicalTickBidAsk(reqId As Integer, ticks As HistoricalTickBidAsk(), done As Boolean) Implements EWrapper.historicalTicksBidAsk
	For Each tick In ticks
		Console.WriteLine("Historical Tick Bid/Ask. Request Id: {0}, Time: {1}, Price Bid: {2}, Price Ask: {3}, Size Bid: {4}, Size Ask: {5}, Bid/Ask Tick Attribs: {6}", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.PriceBid), Util.DoubleMaxString(tick.PriceAsk), Util.DecimalMaxString(tick.SizeBid), Util.DecimalMaxString(tick.SizeAsk), tick.TickAttribBidAsk.ToString())
	Next
End Sub
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

\


#### Python

```python
def historicalTicksLast(self, reqId: int, ticks: ListOfHistoricalTickLast, done: bool):
	for tick in ticks:
		print("HistoricalTickLast. ReqId:", reqId, tick)
```

#### Java

```java
public void historicalTicksLast(int reqId, List ticks, boolean done) {
	for (HistoricalTickLast tick : ticks) {
		System.out.println(EWrapperMsgGenerator.historicalTickLast(reqId, tick.time(), tick.tickAttribLast(), tick.price(), tick.size(), tick.exchange(), 
			tick.specialConditions()));
	}
}
```

#### C++

```cpp
void TestCppClient::historicalTicksLast(int reqId, const std::vector& ticks, bool done) {
    for (HistoricalTickLast tick : ticks) {
		std::time_t t = tick.time;
        std::cout << "Historical tick last. ReqId: " << reqId << ", time: " << ctime(&t) << ", price: "<< Utils::doubleMaxString(tick.price).c_str() << ", size: " << decimalStringToDisplay(tick.size).c_str() << ", exchange: " << tick.exchange << ", special conditions: " << tick.specialConditions << ", unreported: " << tick.tickAttribLast.unreported << ", pastLimit: " << tick.tickAttribLast.pastLimit << std::endl;
    }
}
```

#### C\#

```csharp
public void historicalTicksLast(int reqId, HistoricalTickLast[] ticks, bool done)
{
	foreach (var tick in ticks)
	{
		Console.WriteLine("Historical Tick Last. Request Id: {0}, Time: {1}, Price: {2}, Size: {3}, Exchange: {4}, Special Conditions: {5}, Last Tick Attribs: {6} ", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.Price), Util.DecimalMaxString(tick.Size), tick.Exchange, tick.SpecialConditions, tick.TickAttribLast);
	}
}
```

#### VB.NET

```vbnet
Public Sub historicalTickLast(reqId As Integer, ticks As HistoricalTickLast(), done As Boolean) Implements EWrapper.historicalTicksLast
	For Each tick In ticks
		Console.WriteLine("Historical Tick Last. Request Id: {0}, Time: {1}, Price: {2}, Size: {3}, Exchange: {4}, Special Conditions: {5}, Last Tick Attribs: {6}", reqId, Util.UnixSecondsToString(tick.Time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(tick.Price), Util.DecimalMaxString(tick.Size), tick.Exchange, tick.SpecialConditions, tick.TickAttribLast.ToString())
	Next
End Sub
```

---