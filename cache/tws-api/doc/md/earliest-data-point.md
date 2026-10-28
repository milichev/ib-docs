> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Earliest Data Point

## Introduction

`EClient.reqHeadTimestamp()` is used to find the first available point of data for a given whatToShow value. This data can then be used in tandem with [EClient.reqHistoricalBars()](/docs/tws-api/doc/md/historical-bars) or [EClient.reqHistoricalTicks()](/docs/tws-api/doc/md/historical-ticks)

ReqHeadTimeStamp counts as an ongoing historical data request. As a result, users should always:

* Cancel timestamp requests using [EClient.cancelHeadTimeStamp()](#cancel-head-time-stamp).
* All `EClient.reqHeadTimestamp()` requests follow the [30 second bar limitations](/docs/tws-api/doc/md/market-data-limitations#pacing-violations-for-small-bars), regardless of which bar size value has been requested.

## Request HeadTimeStamp

`EClient.reqHeadTimestamp (tickerId, contract, whatToShow, useRTH, formatDate)`

Returns the timestamp of earliest available historical data for a contract and data type.

**`tickerId`** `int`

A unique identifier which will serve to identify the incoming data.

---

**`contract`** `object`

The IBApi.Contract you are interested in.

---

**`whatToShow`** `string`

The type of data to retrieve. See Historical Data Types

---

**`useRTH`** `int`

Whether (1) or not (0) to retrieve data generated only within Regular Trading Hours (RTH)

---

**`formatDate`** `int`

Using 1 will return UTC time in YYYYMMDD-hh:mm:ss format. Using 2 will return epoch time.

---

\


#### Python

```python
self.reqHeadTimeStamp(1, ContractSamples.USStockAtSmart(), "TRADES", 1, 1)
```

#### Java

```java
client.reqHeadTimestamp(4003, contract, "TRADES", 1, 1);
```

#### C++

```cpp
m_pClient->reqHeadTimestamp(14001, contract, "MIDPOINT", 1, 1);
```

#### C\#

```csharp
client.reqHeadTimestamp(14001, contract, "TRADES", 1, 1);
```

#### VB.NET

```vbnet
client.reqHeadTimestamp(14001, ContractSamples.USStock(), "TRADES", 1, 1)
```

---

## Receive HeadTimeStamp

`EWrapper.headTimestamp(requestId, headTimestamp)`

The data requested will be returned to EWrapper.headTimeStamp.

**`requestId`** `int`

Request identifier used to track data.

---

**`headTimestamp`** `string`

Value identifying earliest data date

---

\


#### Python

```python
def headTimestamp(self, reqId, headTimestamp):
        print(reqId, headTimestamp)
```

#### Java

```java
@Override
public void headTimestamp(int reqId, String headTimestamp) {
	System.out.println(EWrapperMsgGenerator.headTimestamp(reqId, headTimestamp));
}
```

#### C++

```cpp
void TestCppClient::headTimestamp(int reqId, const std::string& headTimestamp) {
    printf( "Head time stamp. ReqId: %d - Head time stamp: %s,\n", reqId, headTimestamp.c_str());
}
```

#### C\#

```csharp
public void headTimestamp(int reqId, string headTimestamp)
{
	Console.WriteLine("Head time stamp. Request Id: {0}, Head time stamp: {1}", reqId, headTimestamp);
}
```

#### VB.NET

```vbnet
Public Sub headTimestamp(requestId As Integer, timeStamp As String) Implements IBApi.EWrapper.headTimestamp
	Console.WriteLine("Head time stamp. Request Id: {0}, Head time stamp: {1}", requestId, timeStamp)
End Sub
```

---

## Cancel HeadTimeStamp

`EWrapper.cancelHeadTimeStamp(tickerId)`

A reqHeadTimeStamp request can be cancelled with EClient.cancelHeadTimestamp

**`tickerId`** `int`

Request identifier used to track data.

---

\


#### Python

```python
self.cancelHeadTimeStamp(14001)
```

#### Java

```java
client.cancelHeadTimestamp(4003);
```

#### C++

```cpp
m_pClient->cancelHeadTimestamp(14001);
```

#### C\#

```csharp
client.cancelHeadTimestamp(14001);
```

#### VB.NET

```vbnet
client.cancelHeadTimestamp(14001)
```

---