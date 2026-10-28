[source](https://www.interactivebrokers.com/docs/tws-api/contracts/cf-ds)

# CFDs

**Symbol:** String. Specify the symbol of the CFD.

**SecType:** String. Specify CFD.

**Exchange:** String. Specify SMART.

**Currency:** String. Specify the base currency the CFD is traded with.

#### Java

```java
Contract contract = new Contract();
contract.symbol("IBDE30");
contract.secType("CFD");
contract.currency("EUR");
contract.exchange("SMART");
```
