> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Pegged-to-Best offset difference

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG BEST"
order.lmtPrice = limitPrice
order.totalQuantity = quantity
order.notHeld = True
order.minCompeteSize = minCompeteSize
order.competeAgainstBestOffset = COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID
order.midOffsetAtWhole = midOffsetAtWhole
order.midOffsetAtHalf = midOffsetAtHalf
```

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

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "PEG BEST";
order.lmtPrice = limitPrice;
order.totalQuantity = quantity;
order.notHeld = true;
order.minCompeteSize = minCompeteSize;
order.competeAgainstBestOffset = COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID;
order.midOffsetAtWhole = midOffsetAtWhole;
order.midOffsetAtHalf = midOffsetAtHalf;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "PEG BEST";
order.LmtPrice = limitPrice;
order.TotalQuantity = quantity;
order.NotHeld = true;
order.MinCompeteSize = minCompeteSize;
order.CompeteAgainstBestOffset = Order.COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID;
order.MidOffsetAtWhole = midOffsetAtWhole;
order.MidOffsetAtHalf = midOffsetAtHalf;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "PEG BEST"
order.LmtPrice = limitPrice
order.TotalQuantity = quantity
order.NotHeld = True
order.MinCompeteSize = minCompeteSize
order.CompeteAgainstBestOffset = Order.COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID
order.MidOffsetAtWhole = midOffsetAtWhole
order.MidOffsetAtHalf = midOffsetAtHalf
```