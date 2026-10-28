[source](https://www.interactivebrokers.com/docs/tws-api/doc/md/histogram-data)

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

String value of requested date range. This will be tied to the same bar size strings as the [historical bar sizes](earliest-data-point.md#historical-bar-sizes)

---

#### Java

```java
client.reqHistogramData(4004, contract, false, "3 days");
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

#### Java

```java
@Override
public void histogramData(int reqId, List items) {
	System.out.println(EWrapperMsgGenerator.histogramData(reqId, items));
}
```

---

## Cancel Histogram Data

`EClient.cancelHistogramData()`

An active histogram request which has not returned data can be cancelled with EClient.cancelHistogramData

**`tickerId`** `int`

Request identifier used to track data.

---

#### Java

```java
client.cancelHistogramData(4004);
```

---
