[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/md/earliest-data-point)

# Earliest Data Point

## Introduction

`EClient.reqHeadTimestamp()` is used to find the first available point of data for a given whatToShow value. This data can then be used in tandem with [EClient.reqHistoricalBars()](historical-bars.md) or [EClient.reqHistoricalTicks()](historical-ticks.md)

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

---
