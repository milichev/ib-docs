[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/warrants)

# Warrants

## Standard Warrants

Warrants, like options, require an expiration date, a right, a strike and a multiplier. For some warrants it will be necessary to define a localSymbol or conId to uniquely identify the contract.

#### Python

```python
contract = Contract()
contract.symbol = "GOOG"
contract.secType = "WAR"
contract.exchange = "FWB"
contract.currency = "EUR"
contract.lastTradeDateOrMonth = "20201117"
contract.strike = 15000
contract.right = "C"
contract.multiplier = "001"
```

## Dutch Warrants

To unambiguously define a Dutch Warrant or Structured Product (IOPTs) the conId or localSymbol field must be used.

* It is important to note that if reqContractDetails is used with an incompletely-defined IOPT contract definition, that thousands of results can be returned and the API connection broken.
* IOPT contract definitions will often change and it will be necessary to restart TWS or IB Gateway to download the new contract definition.

#### Python

```python
contract = Contract()
contract.localSymbol = "B881G"
contract.secType = "IOPT"
contract.exchange = "SBF"
contract.currency = "EUR"
```
