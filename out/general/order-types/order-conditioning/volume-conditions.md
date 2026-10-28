[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/volume-conditions)

# Volume Conditions

Volume Condition will trigger in the event the contract's volume remains above or below a given threshold.

**Note:** VolumeCondition orders must be SMART routed.

See [VolumeCondition](../../../tws-api/ref/order-conditions/volume-condition.md) for more details on the VolumeCondition class.

#### Java

```java
VolumeCondition volCon = (VolumeCondition)OrderCondition.create(OrderConditionType.Volume);
volCon.conId(conId);
volCon.exchange(exchange);
volCon.isMore(isMore);
volCon.volume(volume);
volCon.conjunctionConnection(isConjunction);
```
