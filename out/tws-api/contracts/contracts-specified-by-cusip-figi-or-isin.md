[source](https://www.interactivebrokers.com/docs/tws-api/contracts/contracts-specified-by-cusip-figi-or-isin)

# Contracts specified by CUSIP, FIGI, or ISIN

**SecId:** String. Specify the CUSIP, FIGI, or ISIN code of the instrument

**SecIdType:** String. Supports "CUSIP", "FIGI", or "ISIN".

**Exchange:** String. Specify SMART.

#### Java

```java
Contract contract = new Contract();
contract.secIdType("FIGI");
contract.secId("BBG000B9XRY4");
contract.exchange("SMART");
```
