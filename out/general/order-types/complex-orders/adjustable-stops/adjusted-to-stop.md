[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/adjustable-stops/adjusted-to-stop)

# Adjusted to Stop

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT"

**AdjustedStopPrice:** The stop order's trigger price after being adjusted.

#### Java

```java
Order order = new Order();
order.orderType("TRAIL");
order.trailStopPrice(100);
order.trailingPercent(2);

order.triggerPrice(triggerPrice);
order.adjustedOrderType(OrderType.STP);
order.adjustedStopPrice(adjustStopPrice);
```
