[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/md/historical-bars)

# Historical Bars (OHLC)

## Introduction

Historical Bar data returns a candlestick value based on the requested duration and bar size. This will always return an open, high, low, and close values. Based on which whatToShow value is used, you may also receive volume data. See the [whatToShow section](#historical-whattoshow) for more details.

## Request Historical Bars

`EClient.reqHistoricalData(reqId, contract, endDateTime, durationStr, barSizeSetting, whatToShow, useRTH, formatDate, keepUpToDate, chartOptions)`

**`reqId`** `int`

A unique identifier which will serve to identify the incoming data.

---

**`contract`** `object`

The IBApi.Contract object you are working with.

---

**`endDateTime`** `string`

The request's end date and time. This should be formatted as "YYYYMMDD HH:mm:ss TMZ" or an empty string indicates current present moment. Please be aware that endDateTime must be left as an empty string when requesting continuous futures contracts.

---

**`durationStr`** `string`

The amount of time (or Valid Duration String units) to go back from the request's given end date and time. See [Duration](historical-bars.md#historical-duration) for details.

---

**`barSizeSetting`** `string`

The data's granularity or Valid Bar Sizes. See [Bar Sizes](earliest-data-point.md#historical-bar-sizes) for details.

---

**`whatToShow`** `string`

The type of data to retrieve. See [Historical Data Types](earliest-data-point.md#whattoshow-values) for details.

---

**`useRTH`** `bool`

Whether (1) or not (0) to retrieve data generated only within Regular Trading Hours (RTH)

---

**`formatDate`** `bool`

The format in which the incoming bars' date should be presented. Note that for day bars, only yyyyMMdd format is available. See [Format Date](../tws-settings/historical-date-format.md) for details.

---

**`keepUpToDate`** `bool`

Whether a subscription is made to return updates of unfinished real time bars as they are available (True), or all data is returned on a one-time basis (False). If *True*, endDateTime cannot be specified. Supported whatToShow values: Trades, Midpoint, Bid, Ask. See [Keep Up To Date](earliest-data-point.md#updating-historical-bars) for details.

---

**`chartOptions`** `object`

This is a field used exclusively for internal use.

---

\

#### Python

```python
self.reqHistoricalData(4102, contract, queryTime, "1 M", "1 day", "MIDPOINT", 1, 1, False, [])
```

---

## Receive Historical Bars

`EWrapper.historicalData(reqId, bar)`

The historical data will be delivered via the `EWrapper.historicalData()` method in a series of candlesticks. The time zone of returned bars is based on the [Historical Date Format](../tws-settings/historical-date-format.md).

**`reqId`** `int`

Request identifier used to track data.

---

**`bar`** `object`

The OHLC historical data Bar. The time zone of the bar is the time zone chosen on the TWS login screen. Smallest bar size is 1 second.

---

\

#### Python

```python
def historicalData(self, reqId:int, bar: BarData):
	print("HistoricalData. ReqId:", reqId, "BarData.", bar)
```

---

## Updating Historical Bars

`EWrapper.historicalDataUpdate(reqId, bar)`

Receives bars in real time if keepUpToDate is set as `True` in `EClient.reqHistoricalData()`. Similar to `EClient.reqRealTimeBars()` function, except returned data is a composite of historical data and real time data that is equivalent to TWS chart functionality to keep charts up to date. Returned bars are successfully updated using real time data.

**`reqId`** `int`

Request identifier used to track data.

---

**`bar`** `object`

The OHLC historical data Bar. The time zone of the bar is the time zone chosen on the TWS login screen.

---

\

#### Python

```python
def historicalDataUpdate(self, reqId: int, bar: BarData):
	print("HistoricalDataUpdate. ReqId:", reqId, "BarData.", bar)
```

---

### Understanding Historical Updates

When using `keepUpToDate=True`, you will see several bars returned with the same timestamp. This is because data is updated approximately every 4-6 seconds. These updates compound until the end of the specified bar size.

In our example to the below, 15 second bars are requested, and we can see the 30 second bar built out incrementally until 20231204 13:30:30 is completed. At which point, we move on to the 45th second bars. This same logic extends into minute, hourly, or daily bars.

keepUpToDate is only available for whatToShow: Trades, Midpoint, Bid, Ask

```
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.55
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.55
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.55
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.55
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.55
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.56
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.56, Low: 188.54, Close: 188.56
Date: 20231204 13:30:30 US/Eastern, Open: 188.56, High: 188.57, Low: 188.54, Close: 188.55
Date: 20231204 13:30:45 US/Eastern, Open: 188.54, High: 188.54, Low: 188.54, Close: 188.54
```

## End of Historical Bars

`EWrapper.historicalDataEnd(reqId, start, end)`

Marks the ending of the historical bars reception.

**`reqId`** `int`

Request identifier used to track data.

---

**`start`** `string`

Returns the starting time of the first historical data bar.

---

**`end`** `string`

Returns the end time of the last historical data bar.

---

\

#### Python

```python
def historicalDataEnd(self, reqId: int, start: str, end: str):
	print("HistoricalDataEnd. ReqId:", reqId, "from", start, "to", end)
```

---

## Historical Bar Sizes

Bar sizes dictate the data returned by historical bar requests. The bar size will dictate the scale over which the OHLC/V is returned to the API.

| Bar Unit | Bar Sizes                  |
| -------- | -------------------------- |
| secs     | 1, 5, 10, 15, 30           |
| mins     | 1, 2, 3, 5, 10, 15, 20, 30 |
| hours    | 1, 2, 3, 4, 8              |
| day      | 1                          |
| weeks    | 1                          |
| months   | 1                          |

## Historical Duration

The Interactive Brokers Historical Market Data maintains a duration parameter which specifies the overall length of time that data can be collected. The duration specified will derive the bars of data that can then be collected.

#### Valid Duration String Units:

| Unit | Description |
| ---- | ----------- |
| S    | Seconds     |
| D    | Day         |
| W    | Week        |
| M    | Month       |
| Y    | Year        |

### Max Duration Per Bar Size.

The table below displays the maximum duration values allowed for a given bar.

As an example, the maximum allowed duration in `Seconds` for 5 second bars is `86400 S`. This means that if I want to retrieve more than 1 day's worth of 5 second bars, I will then need to request data in increments of D (days).

| Bar Size | Max Second Duration | Max Day Duration | Max Week Duration | Max Month Duration | Max Year Duration |
| -------- | ------------------- | ---------------- | ----------------- | ------------------ | ----------------- |
| 1 secs   | 2000 S              | \{Not Supported} | \{Not Supported}  | \{Not Supported}   | \{Not Supported}  |
| 5 secs   | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 10 secs  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 15 secs  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 30 secs  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 1 min    | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 2 mins   | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 3 mins   | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 5 mins   | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 10 mins  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 15 mins  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 20 mins  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 30 mins  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 1 hour   | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 2 hours  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 3 hours  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 4 hours  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 8 hours  | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 1 day    | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 1M       | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |
| 1W       | 86400 S             | 365 D            | 52 W              | 12 M               | 68 Y              |

## WhatToShow Values

### Introduction

The historical bar types listed below can be used as the whatToShow value for historical bars. These values are used to request different data such as `Trades`, `Midpoint`, `Bid_Ask` data and more. While the bar fields continue to retain values, such as `bar.open`, the contained value may not be the market open within that bar's timespan.

Some bar types support more products than others. Please note the **Supported Products** section for each bar type below.

### AGGTRADES

**Bar Values:**

| Open               | High                 | Low                 | Close             | Volume              |
| ------------------ | -------------------- | ------------------- | ----------------- | ------------------- |
| First traded price | Highest traded price | Lowest traded price | Last traded price | Total traded volume |

**Supported Products:** Cryptocurrency

### ADJUSTED_LAST

**Bar Values:**

| Open               | High                 | Low                 | Close             | Volume              |
| ------------------ | -------------------- | ------------------- | ----------------- | ------------------- |
| First traded price | Highest traded price | Lowest traded price | Last traded price | Total traded volume |

**Supported Products:** ETFs, Options, Stocks

> **Note**
>
> ADJUSTED_LAST data is adjusted for splits and dividends.

### ASK

**Bar Values:**

| Open               | High              | Low              | Close          | Volume |
| ------------------ | ----------------- | ---------------- | -------------- | ------ |
| Starting ask price | Highest ask price | Lowest ask price | Last ask price | N/A    |

**Supported Products:** Bonds, CFDs, Commodities, Cryptocurrencies, ETFs, FOPs, Forex, Funds, Futures,  Metals, Options, SSFs, Stocks, Structured Products, Warrants

### BID

**Bar Values:**

| Open               | High              | Low              | Close          | Volume |
| ------------------ | ----------------- | ---------------- | -------------- | ------ |
| Starting bid price | Highest bid price | Lowest bid price | Last bid price | N/A    |

**Supported Products:** Bonds, CFDs, Commodities, Cryptocurrencies, ETFs, FOPs, Forex, Funds, Futures,  Metals, Options, SSFs, Stocks, Structured Products, Warrants

### BID_ASK

**Bar Values:**

| Open             | High    | Low     | Close            | Volume |
| ---------------- | ------- | ------- | ---------------- | ------ |
| Time average bid | Max Ask | Min Bid | Time average ask | N/A    |

**Supported Products:** Bonds, CFDs, Commodities, Cryptocurrencies, ETFs, FOPs, Forex, Funds, Futures, Metals, Options, SSFs, Stocks, Structured Products, Warrants

### FEE_RATE

**Bar Values:**

| Open              | High             | Low             | Close         | Volume |
| ----------------- | ---------------- | --------------- | ------------- | ------ |
| Starting Fee Rate | Highest fee rate | Lowest fee rate | Last fee rate | N/A    |

**Supported Products:** Stocks, ETFs

### HISTORICAL_VOLATILITY

**Bar Values:**

| Open                | High               | Low               | Close           | Volume |
| ------------------- | ------------------ | ----------------- | --------------- | ------ |
| Starting volatility | Highest volatility | Lowest volatility | Last volatility | N/A    |

**Supported Products:** ETFs, Indices, Stocks

### MIDPOINT

**Bar Values:**

| Open                    | High                   | Low                   | Close               | Volume |
| ----------------------- | ---------------------- | --------------------- | ------------------- | ------ |
| Starting midpoint price | Highest midpoint price | Lowest midpoint price | Last midpoint price | N/A    |

**Supported Products:** Bonds, CFDs, Commodities, Cryptocurrencies, ETFs, FOPs, Forex, Funds, Futures,  Metals, Options, SSFs, Stocks, Structured Products, Warrants

### OPTION_IMPLIED_VOLATILITY

**Bar Values:**

| Open                        | High                       | Low                       | Close                   | Volume |
| --------------------------- | -------------------------- | ------------------------- | ----------------------- | ------ |
| Starting implied volatility | Highest implied volatility | Lowest implied volatility | Last implied volatility | N/A    |

**Supported Products:** ETFs, Indices, Stocks

### SCHEDULE

**Bar Values:**

| Open               | High              | Low              | Close          | Volume |
| ------------------ | ----------------- | ---------------- | -------------- | ------ |
| Starting ask price | Highest ask price | Lowest ask price | Last ask price | N/A    |

**Supported Products:** Bonds, CFDs, Commodities, Cryptocurrencies, ETFs, Forex, Funds, Futures, Indices, Metals,  SSFs, Stocks, Structured Products, Warrants

> **Note**
>
> SCHEDULE data returns only on 1 day bars but returns historical trading schedule only with no information about OHLCV.

### TRADES

**Bar Values:**

| Open               | High                 | Low                 | Close             | Volume              |
| ------------------ | -------------------- | ------------------- | ----------------- | ------------------- |
| First traded price | Highest traded price | Lowest traded price | Last traded price | Total traded volume |

**Supported Products:** Bonds, ETFs, FOPs, Futures, Indices, Metals, Options, SSFs, Stocks, Structured Products, Warrants

> **Note**
>
> TRADES data is adjusted for splits, but not dividends.

### YIELD_ASK

**Bar Values:**

| Open               | High              | Low              | Close          | Volume |
| ------------------ | ----------------- | ---------------- | -------------- | ------ |
| Starting ask yield | Highest ask yield | Lowest ask yield | Last ask yield | N/A    |

**Supported Products:** Indices

> **Note**
>
> Yield historical data only available for corporate bonds.

### YIELD_BID

**Bar Values:**

| Open               | High              | Low              | Close          | Volume |
| ------------------ | ----------------- | ---------------- | -------------- | ------ |
| Starting bid yield | Highest bid yield | Lowest bid yield | Last bid yield | N/A    |

**Supported Products:** Indices

> **Note**
>
> Yield historical data only available for corporate bonds.

### YIELD_BID_ASK

**Bar Values:**

| Open                   | High              | Low              | Close                  | Volume |
| ---------------------- | ----------------- | ---------------- | ---------------------- | ------ |
| Time average bid yield | Highest ask yield | Lowest bid yield | Time average ask yield | N/A    |

**Supported Products:** Indices

> **Note**
>
> Yield historical data only available for corporate bonds.

### YIELD_LAST

**Bar Values:**

| Open                | High               | Low               | Close           | Volume |
| ------------------- | ------------------ | ----------------- | --------------- | ------ |
| Starting last yield | Highest last yield | Lowest last yield | Last last yield | N/A    |

**Supported Products:** Indices

> **Note**
>
> Yield historical data only available for corporate bonds.
