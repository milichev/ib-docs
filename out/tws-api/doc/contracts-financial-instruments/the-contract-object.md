[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/the-contract-object)

# The Contract Object

The Contract object is an object used throughout the TWS API to define the target of your requests. Contract objects will be used for market data, portfolios, orders, executions, and even some news request. This is the staple structure used for all of the TWS API.

In all contracts, the minimum viable structure requires at least a conId and exchange; or a symbol, secType, exchange, primaryExchange, and currency. Derivatives will require additional fields, such as lastTradeDateOrExpiration, tradingClass, multiplier, strikes, and so on.

The values below represent the most common Contract values to pass for complete contracts. For a more comprehensive list of contract structures, please see [the Contracts page](../../contracts/introduction.md).

#### Contract()

**ConId:** int. Identifier to specify an exact contract.

**Symbol:** String. Ticker symbol of the underlying instrument.

**SecType:** String. Security type of the traded instrument.

**Exchange:** String. Exchange for which data or trades should be routed.

**PrimaryExchange:** String. Primary listing exchange of the instrument.

**Currency:** String. Base currency the instrument is traded on.

**LastTradeDateOrContractMonth:** String. For derivatives, the expiration date of the contract.

**Strike:** double. For derivatives, the strike price of the instrument.

**Right:** String. For derivatives, the right (P/C) of the instrument.

**TradingClass:** String. For derivatives, the trading class of the instrument.\
May be used to indicate between a monthly or a weekly contract.

Given additional structures for contracts are ever evolving, it is recommended to review the relevant Contract class in your programming language for a comprehensive review of what fields are available.

Contract Class Reference
