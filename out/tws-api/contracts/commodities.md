[source](https://www.interactivebrokers.com/docs/tws-api/contracts/commodities)

# Commodities

**Symbol:** String. Specify the symbol of the commodity.

**SecType:** String. Specify CMDTY.

**Exchange:** String. Specify SMART.

**Currency:** String. Specify the base currency the commodity is traded with.

#### Java

```java
Contract contract = new Contract();
contract.symbol("XAUUSD");
contract.secType("CMDTY");
contract.exchange("SMART");
contract.currency("USD");
```
