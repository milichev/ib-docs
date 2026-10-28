> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Adjusted to Stop Limit

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT"

**AdjustedStopPrice:** The stop order's trigger price after being adjusted.

**AdjustedStopLimitPrice:** The stop order's limit price for execution after being adjusted.

#### Python

```python
order = Order()
order.orderType = "TRAIL"
order.trailStopPrice = 100
order.auxPrice = 3

order.triggerPrice = triggerPrice
order.adjustedOrderType = "STP LMT"
order.adjustedStopPrice = adjustStopPrice
order.adjustedStopLimitPrice = adjustedStopLimitPrice
```

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

#### C++

```cpp
Order order;
order.orderType = "TRAIL";
order.trailStopPrice = 100;
order.trailingPercent = 2;

order.triggerPrice = triggerPrice;
order.adjustedOrderType = "STP LMT";
order.adjustedStopPrice = adjustStopPrice;
order.adjustedStopLimitPrice = adjustedStopLimitPrice;
```

#### C\#

```csharp
Order order = new Order();
order.OrderType = "TRAIL";
order.TrailStopPrice = 100;
order.TrailingPercent = 2;

order.TriggerPrice = triggerPrice;
order.AdjustedOrderType = "STP LMT";
order.AdjustedStopPrice = adjustStopPrice;
order.AdjustedStopLimitPrice = adjustedStopLimitPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.OrderType = "TRAIL"
order.TrailStopPrice = 100
order.TrailingPercent = 2

order.TriggerPrice = triggerPrice
order.AdjustedOrderType = "STP LMT"
order.AdjustedStopPrice = adjustStopPrice
order.AdjustedStopLimitPrice = adjustedStopLimitPrice
```