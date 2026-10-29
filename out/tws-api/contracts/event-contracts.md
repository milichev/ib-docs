[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/event-contracts)

# Event Contract

Event contracts utilize the same contract structure as Options with a few exceptions.

* Exchange may be set to `FORECASTX`, `KALSHI`, and `CME`.
* SecType should be set to "OPT"
* "Yes" or "No" contracts are "Call" and "Put" respectively.

## ForecastEx Contract Example

#### Python

```python
# Event Contract for 2025 Global Carbon Dioxide Emissions reaching 40,5000.
contract = Contract()
contract.symbol = "GCE"
contract.secType = "OPT"
contract.currency = "USD"
contract.exchange = "FORECASTX"
contract.lastTradeDateOrContractMonth = "20251231"
contract.right = "C"
contract.strike = 40500
```

## CME Contract Example

#### Python

```python
# Event Contract for Ether close above 2,670 on September 24, 2026
contract = Contract()
contract.symbol = "CCE16"
contract.secType = "OPT"
contract.currency = "USD"
contract.exchange = "CME"
contract.lastTradeDateOrContractMonth = "20260924"
contract.right = "C"
contract.strike = 2670
```

## Kalshi Contract Example

#### Python

```python
# Event Contract for the September 24th, 2026 LA Temperature staying below 78 degrees.
contract = Contract()
contract.symbol = "KXHIGHLAX"
contract.secType = "OPT"
contract.currency = "USD"
contract.exchange = "KALSHI"
contract.lastTradeDateOrContractMonth = "20260925"
contract.right = "P"
contract.strike = 78
```
