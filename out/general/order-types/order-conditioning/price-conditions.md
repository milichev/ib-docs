[source](https://www.interactivebrokers.com/docs/general/order-types/order-conditioning/price-conditions)

# Price Conditions

A Price Condition will trigger if an order should transmit or cancel when a given contract's price goes above or beyond a given threshold.

See [PriceCondition](../../../tws-api/ref/order-conditions/price-condition.md) for more details on the PriceCondition class.

#### Java

```java
PriceCondition priceCondition = (PriceCondition)OrderCondition.create(OrderConditionType.Price);
priceCondition.conId(conId);
priceCondition.exchange(exchange);
priceCondition.isMore(isMore);
priceCondition.price(price);
priceCondition.conjunctionConnection(isConjunction);

base_order.conditions().add(priceCondition)
```
