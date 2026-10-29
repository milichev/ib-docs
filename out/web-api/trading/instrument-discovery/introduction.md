[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/trading/instrument-discovery/introduction)

# Instrument Discovery

The Web API requires the use of IB's contract ID ("`conid`") to uniquely specify instruments. Knowledge of a particular instrument's conid is required to retrieve intrument trading rules and market data, and also to submit orders.

The Web API offers several ways to retrieve our `conid` identifier, as well as well as all other attributes of the the instruments we offer for trading.

Note that IB `conids` are persistent for the life of an instrument. Therefore, we recommend retrieving `conids` and storing them locally prior to trading.
