[source](https://www.interactivebrokers.com/docs/tws-api/contracts/futures-options)

# Futures Options

**Symbol:** String. Specify the underlying symbol of the futures option.

**SecType:** String. Specify FOP.

**Exchange:** String. Specify the exchange where the underlying is traded.

**Currency:** String. Specify the base currency of the futures option.

**LastTradeDateOrContractMonth:** String. Enter the month the contract expires. In the event there are multiple expiries in the same month, exact date must be specified.

**Strike:** float. Enter the strike price of the derivative.

**Right:** String. Enter the right, "C" for Calls and "P" for Puts.

**Multiplier:** String. Enter the multiplier of the derivative.

#### Java

```java
Contract contract = new Contract();
contract.symbol("GBL");
contract.secType("FOP");
contract.exchange("EUREX");
contract.currency("EUR");
contract.lastTradeDateOrContractMonth("20230224");
contract.strike(138);
contract.right("C");
contract.multiplier("1000");
```
