[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/percentage-conditions)

# Percentage Conditions

The Percent Change Condition will trigger if there is a price percent change measured against last close price.

See [PercentChangeCondition](../../../tws-api/ref/order-conditions/percentage-condition.md) for more details on the PercentChangeCondition class.

#### Python

```python
 pctChangeCondition = order_condition.Create(OrderCondition.PercentChange)
pctChangeCondition.isMore = isMore
pctChangeCondition.changePercent = pctChange
pctChangeCondition.conId = conId
pctChangeCondition.exchange = exchange
pctChangeCondition.isConjunctionConnection = isConjunction

base_order.conditions = [pctChangeCondition]
```
