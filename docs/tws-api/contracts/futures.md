[source](https://www.interactivebrokers.com/docs/tws-api/contracts/futures)

# Futures

## Index Futures

Index futures are typical futures contracts derived from an Index, such as "ES" or "DAX". Futures contracts may be generally defined with `Symbol`, `SecType`, `Exchange`, `Currency`, `LastTradeDateOrContractMonth`, `Multiplier`, and `TradingClass`.

## Continuous Futures

Users may choose to use Continuous Futures as well, which automatically presents the front future contract for customers to request historical data.

This security type can only be used in the TWS API to request historical data.

Continuous Futures can **not** be used:

* For placing orders
* For live market data
* For **specific** historical data. Please be aware that endDateTime must be left as an empty string when requesting historical data for continuous futures contracts.
* In the Web API

## Expired Futures

While they can not be traded, TWS API users can refer to expired Futures contracts by including the ["IncludeExpired"](../ref/contract.md) field. This will permit users to review historical market data for contracts that have expired within the last 2 years.
This functionality is not supported in the web api.
