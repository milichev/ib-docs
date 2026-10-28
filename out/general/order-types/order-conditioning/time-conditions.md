[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/time-conditions)

# Time Conditions

The Time Condition will trigger an order for submission or cancellation after a time has been reached.

See [TimeCondition](../../../tws-api/ref/order-conditions/time-condition.md) for more details on the TimeCondition class.

#### Java

```java
TimeCondition timeCondition = (TimeCondition)OrderCondition.create(OrderConditionType.Time);
timeCondition.isMore(isMore);
timeCondition.time(time);
timeCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(timeCondition)
```
