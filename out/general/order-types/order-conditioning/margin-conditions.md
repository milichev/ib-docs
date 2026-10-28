[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/margin-conditions)

# Margin Conditions

Margin Conditions permit users to ready an order in case their order starts falling to a given threshold that may lead to liquidation or to submit an order after ample margin cushion has been established.

See [MarginCondition](../../../tws-api/ref/order-conditions/margin-condition.md) for more details on the MarginCondition class.

#### Java

```java
MarginCondition marginCondition = (MarginCondition)OrderCondition.create(OrderConditionType.Margin);
marginCondition.isMore(isMore);
marginCondition.percent(percent);
marginCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(marginCondition)
```
