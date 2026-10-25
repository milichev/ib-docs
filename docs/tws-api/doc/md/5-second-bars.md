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

#### Python

```python
self.reqRealTimeBars(3001, contract, 5, "MIDPOINT", 0, [])
```

#### Java

```java
client.reqRealTimeBars(3001, contract, 5, "MIDPOINT", true, null);
```

#### C++

```cpp
m_pClient->reqRealTimeBars(3001, contract, 5, "MIDPOINT", true, TagValueListSPtr());
```

#### C#

```csharp
client.reqRealTimeBars(3001, contract, 5, "MIDPOINT", true, null);
```

#### VB.NET

```vbnet
client.reqRealTimeBars(3001, contract, 5, "MIDPOINT", True, Nothing)
```

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

#### Python

```python
def realtimeBar(self, reqId: TickerId, time:int, open_: float, high: float, low: float, close: float, volume: Decimal, wap: Decimal, count: int):
	print("RealTimeBar. TickerId:", reqId, RealTimeBar(time, -1, open_, high, low, close, volume, wap, count))
```

#### Java

```java
@Override
public void realtimeBar(int reqId, long time, double open, double high, double low, double close, Decimal volume, Decimal wap, int count) {
	System.out.println("RealTimeBar: " + EWrapperMsgGenerator.realtimeBar(reqId, time, open, high, low, close, volume, wap, count));
}
```

#### C++

```cpp
void TestCppClient::realtimeBar(TickerId reqId, long time, double open, double high, double low, double close, Decimal volume, Decimal wap, int count) {
    printf( "RealTimeBars. %ld - Time: %s, Open: %s, High: %s, Low: %s, Close: %s, Volume: %s, Count: %s, WAP: %s\n", reqId, Utils::longMaxString(time).c_str(), Utils::doubleMaxString(open).c_str(), Utils::doubleMaxString(high).c_str(), Utils::doubleMaxString(low).c_str(), Utils::doubleMaxString(close).c_str(), decimalStringToDisplay(volume).c_str(), Utils::intMaxString(count).c_str(), decimalStringToDisplay(wap).c_str());
}
```

#### C#

```csharp
public virtual void realtimeBar(int reqId, long time, double open, double high, double low, double close, decimal volume, decimal WAP, int count)
{
	Console.WriteLine("RealTimeBars. " + reqId + " - Time: " + Util.LongMaxString(time) + ", Open: " + Util.DoubleMaxString(open) + ", High: " + Util.DoubleMaxString(high) +  ", Low: " + Util.DoubleMaxString(low) + ", Close: " + Util.DoubleMaxString(close) + ", Volume: " + Util.DecimalMaxString(volume) + ", Count: " + Util.IntMaxString(count) + ", WAP: " + Util.DecimalMaxString(WAP));
}
```

#### VB.NET

```vbnet
Public Sub realtimeBar(reqId As Integer, time As Long, open As Double, high As Double, low As Double, close As Double, volume As Decimal, WAP As Decimal, count As Integer) Implements IBApi.EWrapper.realtimeBar
	Console.WriteLine("RealTimeBars. " & reqId & " - Time: " & Util.LongMaxString(time) & ", Open: " & Util.DoubleMaxString(open) & ", High: " & Util.DoubleMaxString(high) & ", Low: " & Util.DoubleMaxString(low) & ", Close: " & Util.DoubleMaxString(close) & ", Volume: " & Util.DecimalMaxString(volume) & ", Count: " & Util.IntMaxString(count) & ", WAP: " & Util.DecimalMaxString(WAP))
End Sub
```

---

## Cancel 5 Second Bars

`EClient.cancelRealTimeBars(tickerId)`

Cancels Real Time Bars' subscription.

**`tickerId`** `int`

Request identifier used to track data.

---

#### Python

```python
self.cancelRealTimeBars(3001)
```

#### Java

```java
client.cancelRealTimeBars(3001);
```

#### C++

```cpp
m_pClient->cancelRealTimeBars(3001);
```

#### C#

```csharp
client.cancelRealTimeBars(3001);
```

#### VB.NET

```vbnet
client.cancelRealTimeBars(3001)
```

---
