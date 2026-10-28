[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/one-cancels-all)

# One Cancels All

The One-Cancels All (OCA) order type allows an investor to place multiple and possibly unrelated orders assigned to a group. The aim is to complete just one of the orders, which in turn will cause TWS to cancel the remaining orders.

The investor may submit several orders aimed at taking advantage of the most desirable price within the group. Completion of one piece of the group order causes cancellation of the remaining group orders while partial completion causes the group to re-balance.

An investor might desire to sell 1000 shares of only ONE of three positions held above prevailing market prices. The OCA order group allows the investor to enter prices at specified target levels and if one is completed, the other two will automatically cancel. Alternatively, an investor may wish to take a LONG position in eMini S\&P stock index futures in a falling market or else SELL US treasury futures at a more favorable price.

Grouping the two orders using an OCA order type offers the investor two chances to enter a similar position, while only running the risk of taking on a single position.

**Multiple OCA types cannot be used in a single OCA Group.**

More on [One-Cancels All](https://www.interactivebrokers.com/en/index.php?f=617) orders

#### Java

```java
public static List<Order> OneCancelsAll(String ocaGroup, List<Order> ocaOrders, int ocaType) {
    for (Order o : ocaOrders) {
        o.ocaGroup(ocaGroup);
        o.ocaType(ocaType);
    }
    return ocaOrders;
}
```

#### Java

```java
List<Order> OcaOrders = new ArrayList<>();
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 10));
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 11));
OcaOrders.add(OrderSamples.LimitOrder("BUY", Decimal.ONE, 12));
OcaOrders = OrderSamples.OneCancelsAll("TestOCA_" + nextOrderId, OcaOrders, 2);
for (Order o : OcaOrders) {
    client.placeOrder(nextOrderId++, ContractSamples.USStock(), o);
}
```
