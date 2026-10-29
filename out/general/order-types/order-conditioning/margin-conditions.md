[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/margin-conditions)

# Margin Conditions

Margin Conditions permit users to ready an order in case their order starts falling to a given threshold that may lead to liquidation or to submit an order after ample margin cushion has been established.

See [MarginCondition](../../../tws-api/ref/order-conditions/margin-condition.md) for more details on the MarginCondition class.

#### Python

```python
marginCondition = order_condition.Create(OrderCondition.Margin)
marginCondition.isMore = isMore
marginCondition.percent = percent
marginCondition.isConjunctionConnection = isConjunction

base_order.conditions = [marginCondition]
```
