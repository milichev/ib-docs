[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/trading/instrument-discovery/finding-event-contracts)

# Finding Event Contracts

Interactive Brokers models Event Contract instruments on options (for ForecastEx products) and futures options (for CME Group products). Therefore, Event Contracts can generally be treated as options products in the Web API, and most existing features and workflows will serve these instruments unaltered. This guide will frequently make analogies to conventional index options for both ForecastEx and CME Group products.

IB's Event Contract instrument records use the following fields inherited from the options model:

* An underlying reference index, which may or may not be artificial:
  * For CME products, a tradable Event Contract will have the relevant CME index as its underlier.
  * For ForecastEx products, IB has generated an artificial underlying index which serves as a container for related Event Contracts in the same product class. These artificial indices do not have any associated reference values and are purely an artifact of the option instrument model used to represent these Event Contracts. However, these artificial underlying indices can be used to search for groups of related Event Contracts, just as with index options.
* A Symbol value which matches the symbol of the underlying index and which reflects the issuer's product code for the instrument and points to the underlying index that
* A Trading Class which reflects the issuer's product code for the instrument and serves as human-readable identifier for a group of related Event Contracts.
  * Note that many CME Group Event Contracts, which resolve against CME Group indices, have product codes prefixed with "EC" and followed by the symbol of the relevant exchange, to avoid naming collisions with other derivatives on the same index.
* A Put or Call "Right" value, where Call = Yes and Put = No.
  * Note that Event Contracts do not permit Sell orders. Instead, positions are flattened or reduced by buying the opposing contract.
* An artificial "Contract Month" value, again used primarily for searching and filtering available instruments. Most Event Contract products do not follow monthly series as is common with index or equity options, so these Contract Month values are typically not a meaningful attribute of the instrument. Rather, they permit filtering of instruments by calendar month.
* A Last Trade Date, Time, and Millisecond values, which together indicate precisely when trading in an Event Contract will cease, just as with index options.
* A Strike value, which is the numerical value on which the event resolution hinges. Though numerical, this value need not represent a price.
* An instrument symbol in the form "\[PRODUCT CODE] \[EXPIRATION DATE] \[STRIKE] \[RIGHT]", where:
  * PRODUCT CODE is the issuer's product identifier
  * EXPIRATION DATE is the date of the instrument's resolution in the form MmmDD'YY, e.g., "Sep26'24"
  * STRIKE is the numerical value that determines the contract's moneyness at expiration
  * RIGHT is a value YES or NO

Similarly, Event Contracts' underlying indices possess their own conids which persist indefinitely. Once these underlier conids are captured, they can be used to retrieve a current set of tradable Event Contracts in that product class.

The Web API's existing derivative discovery workflow can be used to find Event Contracts offered by both CME Group and ForecastEx, though the workflow differs slightly for each issuer, owing to the modeling of their products as futures options and (index) options, respectively.

In both cases, instrument discovery begins by selecting a product code of interest.

Event Contract product codes can be obtained from IB's ForecastTrader, or directly from the exchange websites:

IB ForecastTrader: [https://forecasttrader.interactivebrokers.com/eventtrader/#/markets](https://forecasttrader.interactivebrokers.com/eventtrader/#/markets)

CME Group: [https://www.cmegroup.com/activetrader/event-contracts.html](https://www.cmegroup.com/activetrader/event-contracts.html)

ForecastEx: [https://forecastex.com/markets/](https://forecastex.com/markets/)

#### CME Group Discovery Workflow

Note that CME Group's Event Contract products are listed on the CME venues where their underlying indices reside. For example, Event Contracts related to the closing price of Gold are listed on COMEX, while NQ-related Event Contracts are listed on CME.

Suppose we'd like to find CME's NQ Event Contracts.

##### CME Request 1, Obtaining Index Conid and Contract Months

First, we'll want to capture the conid of the underlying NQ index. This index conid can be stored, and this query does not need to be made more than once for a particular Event Contract product code. The retrieved conid can be reused in the future to fetch tradable Event Contracts as needed.

GET [https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=NQ\&secType=IND](https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=NQ\&secType=IND)
200 OK

```
[
  {
    "conid": "11004958",
    "companyName": "E-mini NASDAQ 100 ",
    "symbol": "NQ",
    "description": "CME",
    ...,
    "sections": [
      { "secType": "IND", "exchange": "CME;" },
      ...,
      {
        "secType": "FOP",
        "months": "AUG24;SEP24;OCT24;NOV24;DEC24;MAR25;JUN25;DEC25;DEC26;DEC27;DEC28",
        "exchange": "CME"
      },
      ...,
      { "secType": "EC" }
    ]
  }
]
```

The response will deliver instrument records matching the provided symbol and instrument type, and results may not be unique. You'll want to filter the returned list for the index record of interest. This can be done by looking at the array of JSON objects in the "sections" field, which should contain (among others) three objects: one reflecting an index on the correct exchange, ("secType":"IND" & "exchange":"CME"), another reflecting futures options on that index ("secType":"FOP"), and a final object indicating the existence of Event Contract products on that index ("secType":"EC"). This confirms we've found the necessary NQ index record.

From this response we should capture two new values:

1. The index's conid ("conid":"11004958")
2. From the "FOP" object, the semicolon-separated list of futures options Contract Months ("months":"AUG24;SEP24;OCT24;NOV24;DEC24;MAR25;JUN25;DEC25;DEC26;DEC27;DEC28")

Note that this response will deliver values related to derivative products which have been omitted above and can be ignored for the purposes of this workflow.

##### CME Request 2, Obtaining Event Contract Conids

Next, we'll want to search for records for tradable Event Contract instruments, using the newly obtained values from the first request.

This step will consist of a series of requests, stepping through the Contract Month values obtained via the first request.

Importantly, this query will return records for both futures options proper and Event Contracts, so we'll filter the response.

The following query take four parameters:

1. Conid of underlying index (conid=11004958 for NQ)
2. Name of the exchange (exchange=CME)
3. Security Type of the instruments we're seeking (sectype=FOP, recalling that CME Event Contracts are modeled as futures options)
4. Contract Month of interest, which restricts the scope of the query

The final parameter, Contract Month, is inherited from the futures options model, and valid values are obtained in the first request. Note however that this list of Contract Months is also shared by both futures options proper and Event Contracts, so some of the more distant Contract Month values may not return any tradable Event Contract instruments, and instead will fetch only true futures options.

GET [https://api.ibkr.com/v1/api/iserver/secdef/info?conid=11004958\&exchange=CME\&sectype=FOP\&month=AUG24](https://api.ibkr.com/v1/api/iserver/secdef/info?conid=11004958\&exchange=CME\&sectype=FOP\&month=AUG24)
200 OK

```
[
  {
    "conid": 722021819,
    "symbol": "NQ",
    "secType": "FOP",
    "exchange": "CME",
    "listingExchange": null,
    "right": "P",
    "strike": 18200.0,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "NQ",
    "desc2": "(Q4A) Aug26'24 18200 Put Fut.Option(20) @CME",
    "maturityDate": "20240826",
    "multiplier": "20",
    "tradingClass": "Q4A",
    "validExchanges": "CME"
  },
  ...,
  {
    "conid": 724307144,
    "symbol": "NQ",
    "secType": "FOP",
    "exchange": "CME",
    "listingExchange": null,
    "right": "P",
    "strike": 19800.0,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "NQ",
    "desc2": "(ECNQ) Aug20'24 19800 Put Fut.Option @CME",
    "maturityDate": "20240820",
    "multiplier": "1",
    "tradingClass": "ECNQ",
    "validExchanges": "CME"
  },
  ...
]
```

The response will likely be quite large, including both futures options and Event Contracts. The above example is abridged to show only one example of a futures option and one Event Contract.

For CME Event Contract products, we can use the "EC" prefix discussed above to identify Event Contract instruments by their Trading Class and filter out futures options from this response.

As we are looking for NQ Event Contracts, we will filter for records with "tradingClass":"ECNQ" and obtain a set of NQ Event Contract records for the month of August 2024. We can now capture their conids and other associated attributes, and then proceed to make a request for the next Contract Month, SEP24, repeating the process for as many months as desired.

#### ForecastEx Discovery Workflow

Suppose we'd like to find ForecastEx's "US Fed Funds Target Rate" (FF) Event Contracts.

##### ForecastEx Request 1, Obtaining Index Conid and Contract Months

First, we'll want to capture the conid of the underlying artificial FF index.

GET [https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=FF](https://api.ibkr.com/v1/api/iserver/secdef/search?symbol=FF)
200 OK

```
[
  {
    "conid": "658663572",
    "companyHeader": "US Fed Funds Target Rate - FORECASTX",
    "companyName": "US Fed Funds Target Rate",
    "symbol": "FF",
    "description": "FORECASTX",
    "restricted": null,
    "sections": [
      { "secType": "IND", "exchange": "FORECASTX;" },
      { "secType": "EC" }
    ]
  },
  ...
]
```

Note that we've received more than one matching result, and will need to filter for the desired ForecastEx FF index record.

From this response we should capture two new values:

1. The FF index's conid ("conid":"658663572")
2. The semicolon-separated list of options expiries ("opt": "20240917;20241106;...")

Before proceeding, we must convert the expiration dates to MMMYY format, as this presentation is used for future requests. For example, "20240917" becomes "SEP24".

##### ForecastEx Request 2, Obtaining Valid Strike Values

Next, we need to query for valid strike values.

GET [https://api.ibkr.com/v1/api/iserver/secdef/strikes?conid=658663572\&exchange=FORECASTX\&sectype=OPT\&month=SEP24](https://api.ibkr.com/v1/api/iserver/secdef/strikes?conid=658663572\&exchange=FORECASTX\&sectype=OPT\&month=SEP24)
200 OK

```
{
  "call": [ 3.125, 4.875, 5.125, 5.375 ],
  "put": [ 3.125, 4.875, 5.125, 5.375 ]
}
```

Though separate lists are always returned for Calls (Yes contracts) and Puts (No contracts), we do not need treat them as distinct. All events have matching Yes and No contracts at all strikes. Therefore, we obtain a list of valid strikesvalues : 3.125, 4.875, 5.125, 5.375

##### ForecastEx Request 3, Obtaining Event Contract Conids

Finally, we'll make a series of queries for records for tradable Event Contract instruments.

To obtain all possible conids, we must make one request for each combination of Contract Month and Strike value. Note that it is possible that a given Strike value has no tradable Event Contracts in a given Contract Month, in which case the response will be empty.

Each request returns a pair of instrument records: a Call (Yes) contract record, and a Put (No) contract record.

GET [https://api.ibkr.com/v1/api/iserver/secdef/info?conid=658663572\&exchange=FORECASTX\&sectype=OPT\&month=SEP24\&strike=3.125](https://api.ibkr.com/v1/api/iserver/secdef/info?conid=658663572\&exchange=FORECASTX\&sectype=OPT\&month=SEP24\&strike=3.125)
200 OK

```
[
  {
    "conid": 713921696,
    "symbol": "FF",
    "secType": "OPT",
    "exchange": "FORECASTX",
    "listingExchange": null,
    "right": "C",
    "strike": 3.125,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "FF",
    "desc2": "SEP 17 '24 3.13 Call @FORECASTX (AM)",
    "maturityDate": "20240917",
    "multiplier": "1",
    "tradingClass": "FF",
    "validExchanges": "FORECASTX"
  },
  {
    "conid": 713921701,
    "symbol": "FF",
    "secType": "OPT",
    "exchange": "FORECASTX",
    "listingExchange": null,
    "right": "P",
    "strike": 3.125,
    "currency": "USD",
    "cusip": null,
    "coupon": "No Coupon",
    "desc1": "FF",
    "desc2": "SEP 17 '24 3.13 Put @FORECASTX (AM)",
    "maturityDate": "20240917",
    "multiplier": "1",
    "tradingClass": "FF",
    "validExchanges": "FORECASTX"
  }
]
```
