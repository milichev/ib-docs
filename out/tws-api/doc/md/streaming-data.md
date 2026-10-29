[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/md/streaming-data)

# Streaming Data

> **Warning**
>
> Market Data typically requires a paid subscription to receive real-time data. See [Market Data](../../../general/market-data-subscriptions/market-data-requirements.md) for more information.

## Introduction

Streaming market data values correspond to data shown in Trader Workstation watchlists and is available throuh `EClient.reqMktData()`.

This data is not tick-by-tick but consists of aggregate snapshots taken several times per second.

A set of standard tick types are returned by default with additional values available with the `genericTickList` field in the market data request. Most columns available through the Trader Workstation watchlist are available as a [generic tick type](streaming-data.md#available-tick-types).

Real-time data will only be delivered if an affiliated [market data subscription](../../../general/market-data-subscriptions/popular-market-data-subscriptions/introduction.md) is available to the user requesting data.

> **Info**
>
> See our [Delayed Data page](delayed-data.md) for more information on requesting delayed market data.

---

## Market Data Update Frequency

Watchlist market data at Interactive Brokers is derived from time-based snapshot intervals which vary by product and region. This means that a given tick will only update as frequently as its interval allows. See the table for more details on product specifics.

| Product                                       | Update Frequency |
| --------------------------------------------- | ---------------- |
| United States Stocks, Futures, Bonds, Indices | 250ms            |
| United States Options                         | 100ms            |
| Forex                                         | 5ms              |
| All Other Products                            | 250ms            |

---

## Request Watchlist Data

`EClient.reqMktData(reqId, contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions)`

Requests real time market data. Returns market data for an instrument either in real time or [10-15 minutes delayed data.](delayed-data.md)

**`reqId`** `int`

Request identifier for tracking data.

---

**`contract`** `object`

[Contract object](../../ref/contract.md) used for specifying an instrument.

---

**`genericTickList`** `string`

Comma separated ids for unique data to retrieve. See [Available Tick Types](streaming-data.md#available-tick-types) for all possible generic ticks.

---

**`snapshot`** `bool`

Used to retrieve a single snapshot of data for those with an existing market data subscirption. Snapshots return the most recent available data from the past 11 seconds; not all tick types may be returned. May not be submitted with a genericTickList.

---

**`regulatorySnapshot`** `bool`

Used to retrieve a single snapshot of paid data. Each snapshot costs \$0.01. See [Regulatory Snapshots](#regulatory-snapshots) for more information.

---

**`mktDataOptions`** `object`

Internal use only.

---

\

#### Python

```python
self.reqMktData(reqId, contract, "", False, False, [])
```

---

### Available Tick Types

The table below references which tick ID will be returned upon requesting a given generic tick.

#### Table Key

* **Delivery Method**: The *Delivery Method* column indicates the [EWrapper](streaming-data.md#receive-data) function that will receive the affiliated tick.
* **\*RDD**: These tick types are provided only when the user makes a request to [EClient.reqMarketDataType(3)](delayed-data.md) prior to their market data request.
* **–** : These ticks are returned by default and do not have any generic tick requirements.

#### Table of Tick Types

| Tick Name                    | Description                                                                                                                                                                                                                                                                     | Generic tick required | Delivery Method                      | Tick Id |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------ | ------- |
| Disable Default Market Data  | Disables standard market data stream and allows the TWS & API feed to prioritize other listed generic tick types.                                                                                                                                                               | mdoff                 | –                                    | –       |
| Bid Size                     | Number of contracts or lots offered at the bid price.                                                                                                                                                                                                                           | –                     | IBApi.EWrapper.tickSize              | 0       |
| Bid Price                    | Highest priced bid for the contract.                                                                                                                                                                                                                                            | –                     | IBApi.EWrapper.tickPrice             | 1       |
| Ask Price                    | Lowest price offer on the contract.                                                                                                                                                                                                                                             | –                     | IBApi.EWrapper.tickPrice             | 2       |
| Ask Size                     | Number of contracts or lots offered at the ask price.                                                                                                                                                                                                                           | –                     | IBApi.EWrapper.tickSize              | 3       |
| Last Price                   | Last price at which the contract traded (does not include some trades in RTVolume).                                                                                                                                                                                             | –                     | IBApi.EWrapper.tickPrice             | 4       |
| Last Size                    | Number of contracts or lots traded at the last price.                                                                                                                                                                                                                           | –                     | IBApi.EWrapper.tickSize              | 5       |
| High                         | High price for the day.                                                                                                                                                                                                                                                         | –                     | IBApi.EWrapper.tickPrice             | 6       |
| Low                          | Low price for the day.                                                                                                                                                                                                                                                          | –                     | IBApi.EWrapper.tickPrice             | 7       |
| Volume                       | Trading volume for the day for the selected contract.                                                                                                                                                                                                                           | –                     | IBApi.EWrapper.tickSize              | 8       |
| Close Price                  | "The last available closing price for the previous day. For US Equities we use corporate action processing to get the closing price so the close price is adjusted to reflect forward and reverse splits and cash and stock dividends."                                         | –                     | IBApi.EWrapper.tickPrice             | 9       |
| Bid Option Computation       | Computed Greeks and implied volatility based on the underlying stock price and the option bid price. See Option Greeks                                                                                                                                                          | –                     | IBApi.EWrapper.tickOptionComputation | 10      |
| Ask Option Computation       | Computed Greeks and implied volatility based on the underlying stock price and the option ask price. See Option Greeks                                                                                                                                                          | –                     | IBApi.EWrapper.tickOptionComputation | 11      |
| Last Option Computation      | Computed Greeks and implied volatility based on the underlying stock price and the option last traded price. See Option Greeks                                                                                                                                                  | –                     | IBApi.EWrapper.tickOptionComputation | 12      |
| Model Option Computation     | Computed Greeks and implied volatility based on the underlying stock price and the option model price. Correspond to greeks shown in TWS. See Option Greeks                                                                                                                     | –                     | IBApi.EWrapper.tickOptionComputation | 13      |
| Open Tick                    | Current session's opening price. Before open will refer to previous day. The official opening price requires a market data subscription to the native exchange of the instrument.                                                                                               | –                     | IBApi.EWrapper.tickPrice             | 14      |
| Low 13 Weeks                 | Lowest price for the last 13 weeks. For stocks only.                                                                                                                                                                                                                            | 165                   | IBApi.EWrapper.tickPrice             | 15      |
| High 13 Weeks                | Highest price for the last 13 weeks. For stocks only.                                                                                                                                                                                                                           | 165                   | IBApi.EWrapper.tickPrice             | 16      |
| Low 26 Weeks                 | Lowest price for the last 26 weeks. For stocks only.                                                                                                                                                                                                                            | 165                   | IBApi.EWrapper.tickPrice             | 17      |
| High 26 Weeks                | Highest price for the last 26 weeks. For stocks only.                                                                                                                                                                                                                           | 165                   | IBApi.EWrapper.tickPrice             | 18      |
| Low 52 Weeks                 | Lowest price for the last 52 weeks. For stocks only.                                                                                                                                                                                                                            | 165                   | IBApi.EWrapper.tickPrice             | 19      |
| High 52 Weeks                | Highest price for the last 52 weeks. For stocks only.                                                                                                                                                                                                                           | 165                   | IBApi.EWrapper.tickPrice             | 20      |
| Average Volume               | The average daily trading volume over 90 days. Multiplier of 100. For stocks only.                                                                                                                                                                                              | 165                   | IBApi.EWrapper.tickSize              | 21      |
| Open Interest                | "(Deprecated not currently in use) Total number of options that are not closed."                                                                                                                                                                                                | –                     | IBApi.EWrapper.tickSize              | 22      |
| Option Historical Volatility | The 30-day historical volatility (currently for stocks).                                                                                                                                                                                                                        | 104                   | IBApi.EWrapper.tickGeneric           | 23      |
| Option Implied Volatility    | "A prediction of how volatile an underlying will be in the future. The IB 30-day volatility is the at-market volatility estimated for a maturity thirty calendar days forward of the current trading day and is based on option prices from two consecutive expiration months." | 106                   | IBApi.EWrapper.tickGeneric           | 24      |
| Option Bid Exchange          | Not Used.                                                                                                                                                                                                                                                                       | –                     | IBApi.EWrapper.tickString            | 25      |
| Option Ask Exchange          | Not Used.                                                                                                                                                                                                                                                                       | –                     | IBApi.EWrapper.tickString            | 26      |
| Option Call Open Interest    | Call option open interest.                                                                                                                                                                                                                                                      | 101                   | IBApi.EWrapper.tickSize              | 27      |
| Option Put Open Interest     | Put option open interest.                                                                                                                                                                                                                                                       | 101                   | IBApi.EWrapper.tickSize              | 28      |
| Option Call Volume           | Call option volume for the trading day.                                                                                                                                                                                                                                         | 100                   | IBApi.EWrapper.tickSize              | 29      |
| Option Put Volume            | Put option volume for the trading day.                                                                                                                                                                                                                                          | 100                   | IBApi.EWrapper.tickSize              | 30      |
| Index Future Premium         | The number of points that the index is over the cash index.                                                                                                                                                                                                                     | 162                   | IBApi.EWrapper.tickGeneric           | 31      |
| Bid Exchange                 | "For stock and options identifies the exchange(s) posting the bid price. See Component Exchanges"                                                                                                                                                                               | –                     | IBApi.EWrapper.tickString            | 32      |
| Ask Exchange                 | "For stock and options identifies the exchange(s) posting the ask price. See Component Exchanges"                                                                                                                                                                               | –                     | IBApi.EWrapper.tickString            | 33      |
| Auction Volume               | The number of shares that would trade if no new orders were received and the auction were held now.                                                                                                                                                                             | 225                   | IBApi.EWrapper.tickSize              | 34      |
| Auction Price                | The price at which the auction would occur if no new orders were received and the auction were held now- the indicative price for the auction. Typically received after Auction imbalance (tick type 36)                                                                        | 225                   | IBApi.EWrapper.tickPrice             | 35      |
| Auction Imbalance            | The number of unmatched shares for the next auction; returns how many more shares are on one side of the auction than the other. Typically received after Auction Volume (tick type 34)                                                                                         | 225                   | IBApi.EWrapper.tickSize              | 36      |
| Mark Price                   | "The mark price is the current theoretical calculated value of an instrument. Since it is a calculated value it will typically have many digits of precision."                                                                                                                  | 232                   | IBApi.EWrapper.tickPrice             | 37      |
| Bid EFP Computation          | Computed EFP bid price                                                                                                                                                                                                                                                          | –                     | IBApi.EWrapper.tickEFP               | 38      |
| Ask EFP Computation          | Computed EFP ask price                                                                                                                                                                                                                                                          | –                     | IBApi.EWrapper.tickEFP               | 39      |
| Last EFP Computation         | Computed EFP last price                                                                                                                                                                                                                                                         | –                     | IBApi.EWrapper.tickEFP               | 40      |
| Open EFP Computation         | Computed EFP open price                                                                                                                                                                                                                                                         | –                     | IBApi.EWrapper.tickEFP               | 41      |
| High EFP Computation         | Computed high EFP traded price for the day                                                                                                                                                                                                                                      | –                     | IBApi.EWrapper.tickEFP               | 42      |
| Low EFP Computation          | Computed low EFP traded price for the day                                                                                                                                                                                                                                       | –                     | IBApi.EWrapper.tickEFP               | 43      |
| Close EFP Computation        | Computed closing EFP price for previous day                                                                                                                                                                                                                                     | –                     | IBApi.EWrapper.tickEFP               | 44      |
| Last Timestamp               | Time of the last trade (in UNIX time).                                                                                                                                                                                                                                          | –                     | IBApi.EWrapper.tickString            | 45      |
| Shortable                    | Describes the level of difficulty with which the contract can be sold short. See Shortable                                                                                                                                                                                      | 236                   | IBApi.EWrapper.tickGeneric           | 46      |
| RT Volume (Time & Sales)     | "Last trade details (Including both ""Last"" and ""Unreportable Last"" trades). See RT Volume"                                                                                                                                                                                  | 233                   | IBApi.EWrapper.tickString            | 48      |
| Halted                       | Indicates if a contract is halted. See Halted                                                                                                                                                                                                                                   | –                     | IBApi.EWrapper.tickGeneric           | 49      |
| Bid Yield                    | Implied yield of the bond if it is purchased at the current bid.                                                                                                                                                                                                                | –                     | IBApi.EWrapper.tickPrice             | 50      |
| Ask Yield                    | Implied yield of the bond if it is purchased at the current ask.                                                                                                                                                                                                                | –                     | IBApi.EWrapper.tickPrice             | 51      |
| Last Yield                   | Implied yield of the bond if it is purchased at the last price.                                                                                                                                                                                                                 | –                     | IBApi.EWrapper.tickPrice             | 52      |
| Custom Option Computation    | Greek values are based off a user customized price.                                                                                                                                                                                                                             | –                     | IBApi.EWrapper.tickOptionComputation | 53      |
| Trade Count                  | Trade count for the day.                                                                                                                                                                                                                                                        | 293                   | IBApi.EWrapper.tickGeneric           | 54      |
| Trade Rate                   | Trade count per minute.                                                                                                                                                                                                                                                         | 294                   | IBApi.EWrapper.tickGeneric           | 55      |
| Volume Rate                  | Volume per minute.                                                                                                                                                                                                                                                              | 295                   | IBApi.EWrapper.tickGeneric           | 56      |
| Last RTH Trade               | Last Regular Trading Hours traded price.                                                                                                                                                                                                                                        | 318                   | IBApi.EWrapper.tickPrice             | 57      |
| RT Historical Volatility     | 30-day real time historical volatility.                                                                                                                                                                                                                                         | 411                   | IBApi.EWrapper.tickGeneric           | 58      |
| IB Dividends                 | Contract's dividends. See IB Dividends.                                                                                                                                                                                                                                         | 456                   | IBApi.EWrapper.tickString            | 59      |
| Bond Factor Multiplier       | The bond factor is a number that indicates the ratio of the current bond principal to the original principal                                                                                                                                                                    | 460                   | IBApi.EWrapper.tickGeneric           | 60      |
| Regulatory Imbalance         | The imbalance that is used to determine which at-the-open or at-the-close orders can be entered following the publishing of the regulatory imbalance.                                                                                                                           | 225                   | IBApi.EWrapper.tickSize              | 61      |
| News                         | Contract's news feed.                                                                                                                                                                                                                                                           | 292                   | IBApi.EWrapper.tickString            | 62      |
| Short-Term Volume 3 Minutes  | The past three minutes volume. Interpolation may be applied. For stocks only.                                                                                                                                                                                                   | 595                   | IBApi.EWrapper.tickSize              | 63      |
| Short-Term Volume 5 Minutes  | The past five minutes volume. Interpolation may be applied. For stocks only.                                                                                                                                                                                                    | 595                   | IBApi.EWrapper.tickSize              | 64      |
| Short-Term Volume 10 Minutes | The past ten minutes volume. Interpolation may be applied. For stocks only.                                                                                                                                                                                                     | 595                   | IBApi.EWrapper.tickSize              | 65      |
| Delayed Bid                  | Delayed bid price. See Market Data Types.                                                                                                                                                                                                                                       | \*RDD                 | IBApi.EWrapper.tickPrice             | 66      |
| Delayed Ask                  | Delayed ask price. See Market Data Types.                                                                                                                                                                                                                                       | \*RDD                 | IBApi.EWrapper.tickPrice             | 67      |
| Delayed Last                 | Delayed last traded price. See Market Data Types.                                                                                                                                                                                                                               | \*RDD                 | IBApi.EWrapper.tickPrice             | 68      |
| Delayed Bid Size             | Delayed bid size. See Market Data Types.                                                                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickSize              | 69      |
| Delayed Ask Size             | Delayed ask size. See Market Data Types.                                                                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickSize              | 70      |
| Delayed Last Size            | Delayed last size. See Market Data Types.                                                                                                                                                                                                                                       | \*RDD                 | IBApi.EWrapper.tickSize              | 71      |
| Delayed High Price           | Delayed highest price of the day. See Market Data Types.                                                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickPrice             | 72      |
| Delayed Low Price            | Delayed lowest price of the day. See Market Data Types                                                                                                                                                                                                                          | \*RDD                 | IBApi.EWrapper.tickPrice             | 73      |
| Delayed Volume               | Delayed traded volume of the day. See Market Data Types                                                                                                                                                                                                                         | \*RDD                 | IBApi.EWrapper.tickSize              | 74      |
| Delayed Close                | The prior day's closing price.                                                                                                                                                                                                                                                  | \*RDD                 | IBApi.EWrapper.tickPrice             | 75      |
| Delayed Open                 | Displays the current day's Open price. The price will return 15 minutes after the Open price is made available.                                                                                                                                                                 | \*RDD                 | IBApi.EWrapper.tickPrice             | 76      |
| RT Trade Volume              | "Last trade details that excludes ""Unreportable Trades"". See RT Trade Volume"                                                                                                                                                                                                 | 375                   | IBApi.EWrapper.tickString            | 77      |
| Creditman mark price         | Not currently available                                                                                                                                                                                                                                                         | –                     | IBApi.EWrapper.tickPrice             | 78      |
| Creditman slow mark price    | Slower mark price update used in system calculations                                                                                                                                                                                                                            | 619                   | IBApi.EWrapper.tickPrice             | 79      |
| Delayed Bid Option           | Computed greeks based on delayed bid price. See Market Data Types and Option Greeks.                                                                                                                                                                                            | \*RDD                 | IBApi.EWrapper.tickOptionComputation | 80      |
| Delayed Ask Option           | Computed greeks based on delayed ask price. See Market Data Types and Option Greeks.                                                                                                                                                                                            | \*RDD                 | IBApi.EWrapper.tickOptionComputation | 81      |
| Delayed Last Option          | Computed greeks based on delayed last price. See Market Data Types and Option Greeks.                                                                                                                                                                                           | \*RDD                 | IBApi.EWrapper.tickOptionComputation | 82      |
| Delayed Model Option         | Computed Greeks and model's implied volatility based on delayed stock and option prices.                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickOptionComputation | 83      |
| Last Exchange                | Exchange of last traded price                                                                                                                                                                                                                                                   | –                     | IBApi.EWrapper.tickString            | 84      |
| Last Regulatory Time         | Timestamp (in Unix ms time) of last trade returned with regulatory snapshot                                                                                                                                                                                                     | –                     | IBApi.EWrapper.tickString            | 85      |
| Futures Open Interest        | Total number of outstanding futures contracts. \*HSI open interest requested with generic tick 101                                                                                                                                                                              | 588                   | IBApi.EWrapper.tickSize              | 86      |
| Average Option Volume        | Average volume of the corresponding option contracts(TWS Build 970+ is required)                                                                                                                                                                                                | 105                   | IBApi.EWrapper.tickSize              | 87      |
| Delayed Last Timestamp       | Delayed time of the last trade (in UNIX time) (TWS Build 970+ is required)                                                                                                                                                                                                      | \*RDD                 | IBApi.EWrapper.tickString            | 88      |
| Shortable Shares             | Number of shares available to short (TWS Build 974+ is required)                                                                                                                                                                                                                | 236                   | IBApi.EWrapper.tickSize              | 89      |
| ETF Nav Last                 | The last price of Net Asset Value (NAV). For ETFs: Calculation is based on prices of ETF's underlying securities. For NextShares: Value is provided by NASDAQ                                                                                                                   | 577                   | IBApi.EWrapper.tickPrice             | 96      |
| ETF Nav Frozen Last          | Frozen Nav Last for NASDAQ-listed ETFs                                                                                                                                                                                                                                          | 623                   | IBApi.EWrapper.tickPrice             | 97      |
| Estimated IPO – Midpoint     | Midpoint is calculated based on IPO price range                                                                                                                                                                                                                                 | 586                   | IBApi.EWrapper.tickGeneric           | 101     |
| Final IPO Price              | Final price for IPO                                                                                                                                                                                                                                                             | 586                   | IBApi.EWrapper.tickGeneric           | 102     |
| Delayed Yield Bid            | Delayed implied yield of the bond if it is purchased at the current bid.                                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickPrice             | 103     |
| Delayed Yield Ask            | Delayed implied yield of the bond if it is purchased at the current ask.                                                                                                                                                                                                        | \*RDD                 | IBApi.EWrapper.tickPrice             | 104     |
| Odd Lot Bid Price            | Returns bid price of odd lots. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                                      | 787                   | IBApi.EWrapper.tickPrice             | 105     |
| Odd Lot Ask Price            | Returns ask price of odd lots. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                                      | 787                   | IBApi.EWrapper.tickPrice             | 106     |
| Odd Lot Bid Size             | Returns bid size of odd lots. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                                       | 787                   | IBApi.EWrapper.tickSize              | 107     |
| Odd Lot Ask Size             | Returns ask size of odd lots. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                                       | 787                   | IBApi.EWrapper.tickSize              | 108     |
| Odd Lot Bid Exchange         | Returns exchange of lastest odd lots bid order. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                     | 787                   | IBApi.EWrapper.tickString            | 109     |
| Odd Lot Ask Exchange         | Returns exchange of lastest odd lots ask order. Requires TWS & API version 10.46 or higher.                                                                                                                                                                                     | 787                   | IBApi.EWrapper.tickString            | 110     |

### IB Dividends

This tick type provides four different comma-separated elements:

* The sum of dividends for the past 12 months (0.83 in the example below).
* The sum of dividends for the next 12 months (0.92 from the example below).
* The next dividend date (20130219 in the example below).
* The next single dividend amount (0.23 from the example below).

\*\*Example:\*\*0.83,0.92,20130219,0.23

To receive dividend information it is sometimes necessary to direct-route rather than smart-route market data requests.

### Halted

The Halted tick type indicates if a contract has been halted for trading. It can have the following values:

| Value | Description                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------- |
| -1    | Halted status not available. Usually returned with frozen data.                                   |
| 0     | Not halted. This value will **only** be returned if the contract is in a TWS watchlist.           |
| 1     | General halt. Trading halt is imposed for purely regulatory reasons with/without volatility halt. |
| 2     | Volatility halt. Trading halt is imposed by the exchange to protect against extreme volatility.   |

### RT Volume

The RT Volume tick type corresponds to the TWS' Time & Sales window and contains the last trade's price, size and time along with current day's total traded volume, Volume Weighted Average Price (VWAP) and whether or not the trade was filled by a single market maker.

There is a setting in TWS which displays tick-by-tick data in the TWS Time & Sales Window. If this setting is checked, it will provide a higher granularity of data than RTVolume.

Example: 701.28;1;1348075471534;67854;701.46918464;true

As volume for US stocks is reported in lots, a volume of 0 reported in RTVolume will typically indicate an odd lot data point (less than 100 shares).

It is important to note that while the TWS Time & Sales Window also has information about trade conditions available with data points, this data is not available through the API. So for instance, the 'unreportable' trade status displayed with points in the Time & Sales Window is not available through the API, and that trade data will appear in the API just as any other data point. As always, an API application needs to exercise caution in responding to single data points.

> **Note**
>
> Please be aware that RT Volume is not supported with Cryptocurrencies.

### RT Trade Volume

The RT Trade Volume is similar to RT Volume, but designed to avoid relaying back "Unreportable Trades" shown in TWS Time\&Sales via the API. RT Trade Volume will not contain average price or derivative trades which are included in RTVolume.

### Shortable

The shortable tick is an indicative on the amount of shares which can be sold short for the contract:

For detailed information about shortability data (shortable shares, fee rate) available outside of TWS, see [Short Securities Availability](https://www.interactivebrokers.com/en/trading/short-securities-availability.php)

| Range                 | Description                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| Value higher than 2.5 | There are at least 1000 shares available for short selling.                 |
| Value higher than 1.5 | This contract will be available for short selling if shares can be located. |
| 1.5 or less           | Contract is not available for short selling.                                |

### Volume Data

The API reports the current day's volume in several ways. They are summarized as follows:

* Volume tick type 8: The 'native volume'. This includes delayed transactions, busted trades, and combos, but will not update with every tick.
* RTVolume: highest number, includes non-reportable trades such as odd lots, average price and derivative trades.
* RTTradeVolume: only includes 'last' ticks, similar to number also used in charts/historical data.

---

### Regulatory Snapshots

The fifth argument to reqMktData specifies a regulatory snapshot request to US stocks and options.

> **Info**
>
> Regulatory snapshots are not available for use with Paper accounts.

For stocks, there are individual exchange-specific market data subscriptions necessary to receive streaming quotes. For instance, for NYSE stocks this subscription is known as "Network A", for ARCA/AMEX stocks it is called "Network B" and for NASDAQ stocks it is "Network C". Each subscription is added a la carte and has a separate market data fee.

Alternatively, there is also a "US Securities Snapshot Bundle" subscription which does not provide streaming data but which allows for real time calculated snapshots of US market NBBO prices. By setting the 5th parameter in the function EClient.reqMktData to **True**, a regulatory snapshot request can be made from the API. The returned value is a calculation of the current market state based on data from all available exchanges.

> **Warning**
>
> Each regulatory snapshot made will incur a fee of 0.01 USD to the account.

If the monthly fee for regulatory snapshots reaches the price of a particular 'Network' subscription, the user will automatically be subscribed to that Network subscription for continuous streaming quotes and charged the associated fee for that month. At the end of the month the subscription will be terminated. Each listing exchange will be capped independently and will not be combined across listing exchanges.

> **Info**
>
> Regulatory snapshots are paced at a limit of 1 request per minute

The following table lists the cost and maximum allocation for regulatory snapshot quotes:

| Listed Network Feed    | Price per reqSnapshot request | Pro or non-Pro | Max reqSnapshot request |
| ---------------------- | ----------------------------- | -------------- | ----------------------- |
| NYSE (Network A/CTA)   | 0.01 USD                      | Pro            | 4500                    |
| NYSE (Network A/CTA)   | 0.01 USD                      | Non-Pro        | 150                     |
| AMEX (Network B/CTA)   | 0.01 USD                      | Pro            | 2300                    |
| AMEX (Network B/CTA)   | 0.01 USD                      | Non-Pro        | 150                     |
| NASDAQ (Network C/UTP) | 0.01 USD                      | Pro            | 2300                    |
| NASDAQ (Network C/UTP) | 0.01 USD                      | Non-Pro        | 150                     |

---

## Receive Data

> **Note**
>
> In the event subsequent orders are received with the same price value, but different size values, no new tickPrice value should be returned. Only an updated tickSize will denote that a new order was retrieved with the assumption the last tickPrice value will also correlate with the new size.

### EWrapper.TickGeneric

`EWrapper.tickGeneric(tickerId, field, value)`

Returns generic data back to requester. Used for an array of tick types and is used to represent general evaluations.

**`tickerId`** `int`

Request identifier used to track data.

---

**`field`** `int`

The type of tick being received.

---

**`value`** `double`

Return value corresponding to value. See Available Tick Types for more details.

---

\

#### Python

```python
def tickGeneric(self, reqId: TickerId, tickType: TickType, value: float):
	print("TickGeneric. TickerId:", reqId, "TickType:", tickType, "Value:", floatMaxString(value))
```

---

### EWrapper.TickPrice

`EWrapper.tickPrice(tickerId, tickType, price, attribs)`

Market data tick price callback. Handles all price related ticks. Every tickPrice callback is followed by a tickSize. A tickPrice value of -1 or 0 followed by a tickSize of 0 indicates there is no data for this field currently available, whereas a tickPrice with a positive tickSize indicates an active quote of 0 (typically for a combo contract).

**`tickerId`** `int`

Request identifier used to track data.

---

**`tickType`** `int`

The type of the price being received (See Tick ID field in [Available Tick Types](streaming-data.md#available-tick-types)).

---

**`price`** `double`

The monetary value for the given tick type.

---

**`attribs`** `object`

A TickAttrib object that contains price attributes such as TickAttrib::CanAutoExecute, TickAttrib::PastLimit and TickAttrib::PreOpen.

---

\

#### Python

```python
def tickPrice(self, reqId: TickerId, tickType: TickType, price: float, attrib: TickAttrib):
	print(reqId, tickType, price, attrib)
```

---

### EWrapper.TickSize

`EWrapper.tickSize(tickerId, field, size)`

Market data tick size callback. Handles all size-related ticks.

**`tickerId`** `int`

Request identifier used to track data.

---

**`field`** `int`

the type of size being received (i.e. bid size)

---

**`size`** `decimal`

the actual size. US stocks have a multiplier of 100.

---

\

#### Python

```python
def tickSize(self, reqId: TickerId, tickType: TickType, size: Decimal):
	print("TickSize. TickerId:", reqId, "TickType:", tickType, "Size: ", decimalMaxString(size))
```

---

### EWrapper.TickString

`EWrapper.tickString(tickerId, field, value)`

Market data callback.

> **Info**
>
> Every tickPrice is followed by a tickSize. There are also independent tickSize callbacks anytime the tickSize changes, and so there will be duplicate tickSize messages following a tickPrice.

**`tickerId`** `int`

Request identifier used to track data.

---

**`field`** `int`

The type of the tick being received

---

**`value`** `string`

Variable containining message response.

---

\

#### Python

```python
def tickString(self, reqId: TickerId, tickType: TickType, value: str):
	print("TickString. TickerId:", reqId, "Type:", tickType, "Value:", value)
```

---

### EWrapper.TickReqParams

`EWrapper.tickReqParams(tickerId, minTick, bboExchange, snapshotPermissions)`

A market data request is able to return data from multiple exchanges. After a market data request is made for an instrument covered by market data subscriptions, a message will be sent to function `EWrapper.tickReqParams()` with information about 'minTick', BBO exchange mapping, and available snapshot permissions.

The exchange mapping identifier bboExchange will be a symbol such as "a6" which can be used to decode the single letter exchange abbreviations returned to the bidExch, askExch, and lastExch fields by invoking the function [EClient.reqSmartComponents()](component-exchanges.md).

The `minTick` returned to `EWrapper.tickReqParams` indicates the minimum increment in market data values returned to the API. It can differ from the minTick value in the ContractDetails class. For instance, combos will often have a minimum increment of 0.01 for market data and a minTick of 0.05 for order placement.

**`tickerId`** `int`

Request identifier used to track data.

---

**`minTick`**

Minimum tick for the contract on the exchange.

---

**`bboExchange`** `string`

Exchange offering the best bid offer.

---

**`snapshotPermissions`**

Based on the snapshot parameter in EClient.reqMktData.

---

\

#### Python

```python
def tickReqParams(self, tickerId:int, minTick:float, bboExchange:str, snapshotPermissions:int):
	print("TickReqParams. TickerId:", tickerId, "MinTick:", floatMaxString(minTick), "BboExchange:", bboExchange, "SnapshotPermissions:", intMaxString(snapshotPermissions))
```

---

### EWrapper.rerouteMktDataReq

Returns conid and exchange for CFD market data request re-route. IB does not provide market data for stock and forex CFDs. When market data is requested for a CFD, a callback is made to the `EWrapper.rerouteMktDataReq` with details about the underlying instrument in IB's database which does have market data.

**`reqId`** `int`

Request identifier used to track data.

---

**`conId`** `int`

Contract identifier of the underlying instrument which has market data.

---

**`exchange`** `int`

Primary exchange of the underlying.

---

\

#### Python

```python
def rerouteMktDataReq(self, reqId: int, conId: int, exchange: str):
	print("Re-route market data request. ReqId:", reqId, "ConId:", conId, "Exchange:", exchange)
```

---

## Cancel Streaming Data

`EClient.cancelMktData(tickerId)`

Cancels a watchlist market data request.

**`tickerId`** `int`

Request identifier used to track data.

---

\

#### Python

```python
self.cancelMktData(2001)
```
