[source](https://www.interactivebrokers.com/docs/tws-api/contracts/bonds)

# Bonds

**Symbol:** String. The CUSIP of the bond.

**SecType:** String. Always specify as BOND.

**Exchange:** String. Smart may be specified. May direct route if interested.

**Currency:** String. Specify the base currency the BOND is traded with.

#### Java

```java
Contract contract = new Contract();
contract.symbol("912828C57");
contract.secType("BOND");
contract.exchange("SMART");
contract.currency("USD");
```
