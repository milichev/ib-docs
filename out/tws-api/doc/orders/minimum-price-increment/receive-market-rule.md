[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/minimum-price-increment/receive-market-rule)

# Receive Market Rule

#### EWrapper.marketRule (

**marketRuleId:** int. Market Rule ID requested.

**priceIncrements:** PriceIncrement\[]. Returns the available price increments based on the market rule.\
)

Returns minimum price increment structure for a particular market rule ID market rule IDs for an instrument on valid exchanges can be obtained from the [contractDetails](../../contracts-financial-instruments/contract-details/request-contract-details.md) object for that contract

#### Java

```java
@Override
public void marketRule(int marketRuleId, PriceIncrement[] priceIncrements) {
	System.out.println(EWrapperMsgGenerator.marketRule(marketRuleId, priceIncrements));
}
```
