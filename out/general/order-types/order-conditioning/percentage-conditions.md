[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/percentage-conditions)

# Percentage Conditions

The Percent Change Condition will trigger if there is a price percent change measured against last close price.

See [PercentChangeCondition](../../../tws-api/ref/order-conditions/percentage-condition.md) for more details on the PercentChangeCondition class.

#### Java

```java
PercentChangeCondition pctChangeCondition = (PercentChangeCondition)OrderCondition.create(OrderConditionType.PercentChange);
pctChangeCondition.isMore(isMore);
pctChangeCondition.changePercent(pctChange);
pctChangeCondition.conId(conId);
pctChangeCondition.exchange(exchange);
pctChangeCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(pctChangeCondition)
```
