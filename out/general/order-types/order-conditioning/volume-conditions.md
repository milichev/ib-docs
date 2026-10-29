[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/volume-conditions)

# Volume Conditions

Volume Condition will trigger in the event the contract's volume remains above or below a given threshold.

**Note:** VolumeCondition orders must be SMART routed.

See [VolumeCondition](../../../tws-api/ref/order-conditions/volume-condition.md) for more details on the VolumeCondition class.

#### Python

```python
volCond = order_condition.Create(OrderCondition.Volume)
volCond.conId = conId
volCond.exchange = exchange
volCond.isMore = isMore
volCond.volume = volume
volCond.isConjunctionConnection = isConjunction
```
