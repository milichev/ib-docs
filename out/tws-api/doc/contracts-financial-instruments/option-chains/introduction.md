[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/option-chains/introduction)

# Introduction

The option chain for a given security can be returned using the function [EClient.reqContractDetails](../contract-details/request-contract-details.md). If an option contract is incompletely defined (for instance with the strike undefined) and used as an argument to [EClient.reqContractDetails](../contract-details/request-contract-details.md), a list of all matching option contracts will be returned.

One limitation of this technique is that the return of option chains will be throttled and take a longer time the more ambiguous the contract definition. The function [EClient.reqSecDefOptParams](request-option-chains.md) was introduced that does not have the throttling limitation.

* It is not recommended to use [EClient.reqContractDetails](../contract-details/request-contract-details.md) to receive complete option chains on an underlying, e.g. all combinations of strikes/rights/expiries.
* For very large option chains returned from [EClient.reqContractDetails](../contract-details/request-contract-details.md), unchecking the setting in TWS Global Configuration at API -> Settings -> "Expose entire trading schedule to the API" will decrease the amount of data returned per option and help to return the contract list more quickly.

[EClient.reqSecDefOptParams](request-option-chains.md) returns a list of expiries and a list of strike prices. In some cases, it is possible there are combinations of strike and expiry that would not give a valid option contract.
