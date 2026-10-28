[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/adjustable-stops/adjusted-to-stop-limit)

# Adjusted to Stop Limit

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT"

**AdjustedStopPrice:** The stop order's trigger price after being adjusted.

**AdjustedStopLimitPrice:** The stop order's limit price for execution after being adjusted.

#### Java

```java
Order order = new Order();
order.orderType("TRAIL");
order.trailStopPrice(100);
order.trailingPercent(2);

order.triggerPrice(triggerPrice);
order.adjustedOrderType("STP LMT");
order.adjustedStopPrice(adjustStopPrice);
order.adjustStopLimitPrice(adjustStopLimitPrice);
```
