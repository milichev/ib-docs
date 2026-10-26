[source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/requesting-market-data)

# Requesting Market Data

Requesting market data first requires the definition of a contract object for which to return market data for.

The [`reqMarketDataType()`](../md/delayed-data.md#request-market-data-type) function sets the market data type. The type can either be live, frozen, delayed, or delayed frozen. The differences between these types are described [here](../md/delayed-data.md).

The `reqMktData()` function returns data through the [`tickPrice()`](../md/streaming-data.md#ewrappertickprice) and [`tickSize()`](../md/streaming-data.md#ewrapperticksize) callback functions.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python and Visual Basic can be found in the /samples directory of the downloaded TWS API file.
