[source](https://www.interactivebrokers.com/docs/general/order-types/ibkrats-order-types/pegged-to-midpoint)

# Pegged-to-Midpoint

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("PEG MID");
order.lmtPrice(limitPrice);
order.totalQuantity(quantity);
order.notHeld(true);
order.minTradeQty(minTradeQty);
order.midOffsetAtWhole(midOffsetAtWhole);
order.midOffsetAtHalf(midOffsetAtHalf);
```
