[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/price-conditions)

# Price Conditions

A Price Condition will trigger if an order should transmit or cancel when a given contract's price goes above or beyond a given threshold.

See [PriceCondition](../../../tws-api/ref/order-conditions/price-condition.md) for more details on the PriceCondition class.

#### Python

```python
priceCondition = PriceCondition()
priceCondition.conId = conId
priceCondition.exchange = exchange
priceCondition.isMore = isMore
priceCondition.triggerMethod = triggerMethod
priceCondition.price = price

base_order.conditions = [priceCondition]
```
