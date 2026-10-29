[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/time-conditions)

# Time Conditions

The Time Condition will trigger an order for submission or cancellation after a time has been reached.

See [TimeCondition](../../../tws-api/ref/order-conditions/time-condition.md) for more details on the TimeCondition class.

#### Python

```python
timeCondition = order_condition.Create(OrderCondition.Time)
timeCondition.isMore = isMore
timeCondition.time = time   
timeCondition.isConjunctionConnection = isConjunction

base_order.conditions = [timeCondition]
```
