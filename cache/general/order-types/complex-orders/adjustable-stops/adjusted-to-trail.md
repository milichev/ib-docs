> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Adjusted to Trail

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT".

**AdjustedStopPrice:** The trail order's trigger price after being adjusted.

**AdjustableTrailingUnit:** Dictate how trail should be adjusted.\
This can be "amt" or "%".

**AdjustedTrailingAmount:** The value to trail by. This will be a set amount or percentage based on the AdjustedTrailingUnit.

#### Python

```python
order = Order()
order.action = action
order.orderType = "STP"
order.auxPrice = stopPrice
order.totalQuantity = quantity

order.triggerPrice = triggerPrice
order.adjustedOrderType = "TRAIL"
order.adjustedStopPrice = adjustedStopPrice
order.adjustableTrailingUnit = trailUnit
order.adjustedTrailingAmount = adjustedTrailAmount
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("STP");
order.auxPrice(stopPrice);
order.totalQuantity(quantity);

order.triggerPrice(triggerPrice);
order.adjustedOrderType("TRAIL");
order.adjustedStopPrice(adjustStopPrice);
order.adjustableTrailingUnit(trailUnit);
order.adjustedTrailingAmount(adjustedTrailAmount);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "STP";
order.totalQuantity = quantity;
order.auxPrice = stopPrice;

order.triggerPrice = triggerPrice;
order.adjustedOrderType = "TRAIL";
order.adjustedStopPrice = adjustStopPrice;
order.adjustableTrailingUnit = trailUnit;
order.adjustedTrailingAmount = adjustedTrailAmount;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "STP";
order.AuxPrice = stopPrice;
order.TotalQuantity = quantity;

order.TriggerPrice = triggerPrice;
order.AdjustedOrderType = "TRAIL";
order.AdjustedStopPrice = adjustedStopPrice;
order.AdjustableTrailingUnit = trailUnit;
order.AdjustedTrailingAmount = adjustedTrailAmount;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "STP"
order.AuxPrice = stopPrice
order.TotalQuantity = quantity

'Adjusted Stop Component
order.TriggerPrice = triggerPrice
order.AdjustedOrderType = "TRAIL"
order.AdjustedStopPrice = adjustedStopPrice
order.AdjustableTrailingUnit = trailUnit
order.AdjustedTrailingAmount = adjustedTrailAmount
```