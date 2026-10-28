[source](https://www.interactivebrokers.com/docs/general/order-types/ibkrats-order-types/pegged-to-best-offset-difference)

# Pegged-to-Best offset difference

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("PEG BEST");
order.lmtPrice(limitPrice);
order.totalQuantity(quantity);
order.notHeld(true);
order.minCompeteSize(minCompeteSize);
order.competeAgainstBestOffset(Order.COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID);
order.midOffsetAtWhole(midOffsetAtWhole);
order.midOffsetAtHalf(midOffsetAtHalf);
```
