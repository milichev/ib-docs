[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/minimum-price-increment/request-market-rule)

# Request Market Rule

#### EClient.reqMarketRule (

**marketRuleId**: int. The id of market rule\
)

Requests details about a given market rule. The market rule for an instrument on a particular exchange provides details about how the minimum price increment changes with price.

A list of market rule ids can be obtained by invoking [EClient.reqContractDetails](../../contracts-financial-instruments/contract-details/request-contract-details.md) on a particular contract. The returned market rule ID list will provide the market rule ID for the instrument in the correspond valid exchange list in contractDetails.

#### Java

```java
client.reqMarketRule(26);
```
