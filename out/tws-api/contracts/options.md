[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/options)

# Options

**Symbol:** String. Specify the underlying symbol of the option.

**SecType:** String. Specify OPT.

**Exchange:** String. SMART routing may be specified. May use direct routing such as BOX.

**Currency:** String. Specify the base currency of the option.

**LastTradeDateOrContractMonth:** String. Enter the month the contract expires. In the event there are multiple expiries in the same month, exact date must be specified.

**Strike:** float. Enter the strike price of the derivative.

**Right:** String. Enter the right, "C" for Calls and "P" for Puts.

**Multiplier:** String. Enter the multiplier of the derivative.

#### Python

```python
contract = Contract()
contract.symbol = "GOOG"
contract.secType = "OPT"
contract.exchange = "BOX"
contract.currency = "USD"
contract.lastTradeDateOrContractMonth = "20190315"
contract.strike = 1180
contract.right = "C"
contract.multiplier = "100"
```
