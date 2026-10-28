> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Histogram Data

## Introduction

Instead of returned data points as a function of time as with the function `EClient.reqHistoricalData()`, histograms return data as a function of price level with function `EClient.reqHistogramData()`.

## Request Histogram Data

`EClient.reqHistogramData(requestId, contract, useRth, period)`

Returns data histogram of specified contract.

**`requestId`** `int`

id of the request

---

**`contract`** `object`

Contract object that is subject of query.

---

**`useRth`** `bool`

Data from regular trading hours (1), or all available hours (0).

---

**`period`** `string`

String value of requested date range. This will be tied to the same bar size strings as the [historical bar sizes](/docs/tws-api/doc/md/earliest-data-point#historical-bar-sizes)

---

\


#### Python

```python
self.reqHistogramData(4004, contract, false, "3 days")
```

#### Java

```java
client.reqHistogramData(4004, contract, false, "3 days");
```

#### C++

```cpp
m_pClient->reqHistogramData(15001, contract, false, "1 weeks");
```

#### C\#

```csharp
client.reqHistogramData(15001, contract, false, "1 week");
```

#### VB.NET

```vbnet
client.reqHistogramData(15001, contract, False, "1 week")
```

---

## Receive Histogram Data

`EWrapper.histogramData(requestId, data)`

Returns relevant histogram data.

**`requestId`** `int`

Request identifier used to track data.

---

**`data`** `object`

Returned Tuple of histogram data, number of trades at specified price level.

---

\


#### Python

```python
def histogramData(self, reqId:int, items:HistogramDataList):
	print("HistogramData. reqid, items)
```

#### Java

```java
@Override
public void histogramData(int reqId, List items) {
	System.out.println(EWrapperMsgGenerator.histogramData(reqId, items));
}
```

#### C++

```cpp
void TestCppClient::histogramData(int reqId, const HistogramDataVector& data) {
    printf("Histogram. ReqId: %d, data length: %lu\n", reqId, data.size());
    for (const HistogramEntry& entry : data) {
        printf("\t price: %s, size: %s\n", Utils::doubleMaxString(entry.price).c_str(), decimalStringToDisplay(entry.size).c_str());
    }
}
```

#### C\#

```csharp
public void histogramData(int reqId, HistogramEntry[] data)
{
	Console.WriteLine("Histogram data. Request Id: {0}, data size: {1}", reqId, data.Length);
	data.ToList().ForEach(i => Console.WriteLine("\tPrice: {0}, Size: {1}", Util.DoubleMaxString(i.Price), Util.DecimalMaxString(i.Size)));
}
```

#### VB.NET

```vbnet
Public Sub histogramData(reqId As Integer, data As HistogramEntry()) Implements EWrapper.histogramData
	Console.WriteLine("Histogram data. Request Id: {0}, data size: {1}", reqId, data.Length) 
	data.ToList().ForEach(Sub(i) Console.WriteLine(vbTab & "Price: {0}, Size: {1}", Util.DoubleMaxString(i.Price), Util.DecimalMaxString(i.Size)))
End Sub
```

---

## Cancel Histogram Data

`EClient.cancelHistogramData()`

An active histogram request which has not returned data can be cancelled with EClient.cancelHistogramData

**`tickerId`** `int`

Request identifier used to track data.

---

\


#### Python

```python
self.reqHistogramData(4004)
```

#### Java

```java
client.cancelHistogramData(4004);
```

#### C++

```cpp
m_pClient->cancelHistogramData(15001);
```

#### C\#

```csharp
client.cancelHistogramData(15001);
```

#### VB.NET

```vbnet
client.cancelHistogramData(15001)
```

---