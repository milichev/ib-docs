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

#### Python

```python
self.reqTickByTickData(19001, contract, "Last", 0, True)
```

#### Java

```java
client.reqTickByTickData(19001, contract, "Last", 0, false);
```

#### C++

```cpp
m_pClient->reqTickByTickData(20005, contract, "Last", 10, false);
```

#### C#

```csharp
client.reqTickByTickData(19001, contract, "Last", 0, false);
```

#### VB.NET

```vbnet
client.reqTickByTickData(19001, contract, "Last", 0, False)
```

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

#### Python

```python
def tickByTickAllLast(self, reqId: int, tickType: int, time: int, price: float, size: Decimal, tickAtrribLast: TickAttribLast, exchange: str,specialConditions: str):
	print(" ReqId:", reqId, "Time:", time, "Price:", floatMaxString(price), "Size:", size, "Exch:" , exchange, "Spec Cond:", specialConditions, "PastLimit:", tickAtrribLast.pastLimit, "Unreported:", tickAtrribLast.unreported)
```

#### Java

```java
@Override
public void tickByTickAllLast(int reqId, int tickType, long time, double price, Decimal size, TickAttribLast tickAttribLast, String exchange, String specialConditions) {
	System.out.println(EWrapperMsgGenerator.tickByTickAllLast(reqId, tickType, time, price, size, tickAttribLast, exchange, specialConditions));
}
```

#### C++

```cpp
void TestCppClient::tickByTickAllLast(int reqId, int tickType, time_t time, double price, Decimal size, const TickAttribLast& tickAttribLast, const std::string& exchange, const std::string& specialConditions) {
    printf("Tick-By-Tick. ReqId: %d, TickType: %s, Time: %s, Price: %s, Size: %s, PastLimit: %d, Unreported: %d, Exchange: %s, SpecialConditions:%s\n", reqId, (tickType == 1 ? "Last" : "AllLast"), ctime(&time), Utils::doubleMaxString(price).c_str(), decimalStringToDisplay(size).c_str(), tickAttribLast.pastLimit, tickAttribLast.unreported, exchange.c_str(), specialConditions.c_str());
}
```

#### C#

```csharp
public void tickByTickAllLast(int reqId, int tickType, long time, double price, decimal size, TickAttribLast tickAttribLast, string exchange, string specialConditions)
        {
            Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: {1}, Time: {2}, Price: {3}, Size: {4}, Exchange: {5}, Special Conditions: {6}, PastLimit: {7}, Unreported: {8}",
                reqId, tickType == 1 ? "Last" : "AllLast", Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(price), Util.DecimalMaxString(size), exchange, specialConditions, tickAttribLast.PastLimit, tickAttribLast.Unreported);
        }
```

#### VB.NET

```vbnet
Public Sub tickByTickAllLast(reqId As Integer, tickType As Integer, time As Long, price As Double, size As Decimal, tickAttribLast As TickAttribLast, exchange As String, specialConditions As String) Implements EWrapper.tickByTickAllLast
	Dim tickTypeStr As String
	If tickType = 1 Then
		tickTypeStr = "Last"
	Else
		tickTypeStr = "AllLast"
	End If
	Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: {1}, Time: {2}, Price: {3}, Size: {4}, Exchange: {5}, Special Conditions: {6}, PastLimit: {7}, Unreported: {8}",
		reqId, tickTypeStr, Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(price), Util.DecimalMaxString(size), exchange, specialConditions,
		tickAttribLast.PastLimit, tickAttribLast.Unreported)
End Sub
```

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

#### Python

```python
 def tickByTickBidAsk(self, reqId: int, time: int, bidPrice: float, askPrice: float, bidSize: Decimal, askSize: Decimal, tickAttribBidAsk: TickAttribBidAsk):
	print("BidAsk. ReqId:", reqId, "Time:", time, "BidPrice:", floatMaxString(bidPrice), "AskPrice:", floatMaxString(askPrice), "BidSize:", decimalMaxString(bidSize), "AskSize:", decimalMaxString(askSize), "BidPastLow:", tickAttribBidAsk.bidPastLow, "AskPastHigh:", tickAttribBidAsk.askPastHigh)
```

#### Java

```java
@Override
public void tickByTickBidAsk(int reqId, long time, double bidPrice, double askPrice, Decimal bidSize, Decimal askSize, TickAttribBidAsk tickAttribBidAsk) {
	System.out.println(EWrapperMsgGenerator.tickByTickBidAsk(reqId, time, bidPrice, askPrice, bidSize, askSize, tickAttribBidAsk));
}
```

#### C++

```cpp
void TestCppClient::tickByTickBidAsk(int reqId, time_t time, double bidPrice, double askPrice, Decimal bidSize, Decimal askSize, const TickAttribBidAsk& tickAttribBidAsk) {
    printf("Tick-By-Tick. ReqId: %d, TickType: BidAsk, Time: %s, BidPrice: %s, AskPrice: %s, BidSize: %s, AskSize: %s, BidPastLow: %d, AskPastHigh: %d\n", reqId, ctime(&time), Utils::doubleMaxString(bidPrice).c_str(), Utils::doubleMaxString(askPrice).c_str(), decimalStringToDisplay(bidSize).c_str(), decimalStringToDisplay(askSize).c_str(), tickAttribBidAsk.bidPastLow, tickAttribBidAsk.askPastHigh);
}
```

#### C#

```csharp
public void tickByTickBidAsk(int reqId, long time, double bidPrice, double askPrice, decimal bidSize, decimal askSize, TickAttribBidAsk tickAttribBidAsk)
{
	Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: BidAsk, Time: {1}, BidPrice: {2}, AskPrice: {3}, BidSize: {4}, AskSize: {5}, BidPastLow: {6}, AskPastHigh: {7}", reqId, Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(bidPrice), Util.DoubleMaxString(askPrice), Util.DecimalMaxString(bidSize), Util.DecimalMaxString(askSize), tickAttribBidAsk.BidPastLow, tickAttribBidAsk.AskPastHigh);
}
```

#### VB.NET

```vbnet
Public Sub tickByTickBidAsk(reqId As Integer, time As Long, bidPrice As Double, askPrice As Double, bidSize As Decimal, askSize As Decimal, tickAttribBidAsk As TickAttribBidAsk) Implements EWrapper.tickByTickBidAsk
            Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: BidAsk, Time: {1}, BidPrice: {2}, AskPrice: {3}, BidSize: {4}, AskSize: {5}, BidPastLow: {6}, AskPastHigh: {7}",
                reqId, Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(bidPrice), Util.DoubleMaxString(askPrice), Util.DecimalMaxString(bidSize), Util.DecimalMaxString(askSize),
                tickAttribBidAsk.BidPastLow, tickAttribBidAsk.AskPastHigh)
        End Sub
```

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

#### Python

```python
def tickByTickMidPoint(self, reqId: int, time: int, midPoint: float):
	print("Midpoint. ReqId:", reqId, "Time:", time, "MidPoint:", floatMaxString(midPoint))
```

#### Java

```java
@Override
public void tickByTickMidPoint(int reqId, long time, double midPoint) {
	System.out.println(EWrapperMsgGenerator.tickByTickMidPoint(reqId, time, midPoint));
}
```

#### C++

```cpp
void TestCppClient::tickByTickMidPoint(int reqId, time_t time, double midPoint) {
    printf("Tick-By-Tick. ReqId: %d, TickType: MidPoint, Time: %s, MidPoint: %s\n", reqId, ctime(&time), Utils::doubleMaxString(midPoint).c_str());
}
```

#### C#

```csharp
public void tickByTickMidPoint(int reqId, long time, double midPoint)
{
	Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: MidPoint, Time: {1}, MidPoint: {2}", reqId, Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(midPoint));
}
```

#### VB.NET

```vbnet
Public Sub tickByTickMidPoint(reqId As Integer, time As Long, midPoint As Double) Implements EWrapper.tickByTickMidPoint
	Console.WriteLine("Tick-By-Tick. Request Id: {0}, TickType: MidPoint, Time: {1}, MidPoint: {2}", reqId, Util.UnixSecondsToString(time, "yyyyMMdd-HH:mm:ss"), Util.DoubleMaxString(midPoint))
End Sub
```

---

## Cancel Tick Data

`EClient.cancelTickByTickData(requestId)`

Cancels specified tick-by-tick data.

**`requestId`** `int`

Request identifier used to track data.

---

#### Python

```python
self.cancelTickByTickData(19001)
```

#### Java

```java
client.cancelTickByTickData(19001);
```

#### C++

```cpp
m_pClient->cancelTickByTickData(20001);
```

#### C#

```csharp
client.cancelTickByTickData(19001);
```

#### VB.NET

```vbnet
client.cancelTickByTickData(19001)
```

---
