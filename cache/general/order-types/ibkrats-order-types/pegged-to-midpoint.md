> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Pegged-to-Midpoint

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG MID"
order.lmtPrice = limitPrice
order.totalQuantity = quantity
order.notHeld = True
order.minTradeQty = minTradeQty
order.midOffsetAtWhole = midOffsetAtWhole
order.midOffsetAtHalf = midOffsetAtHalf
```

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

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "PEG MID";
order.lmtPrice = limitPrice;
order.totalQuantity = quantity;
order.notHeld = true;
order.minTradeQty = minTradeQty;
order.midOffsetAtWhole = midOffsetAtWhole;
order.midOffsetAtHalf = midOffsetAtHalf;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "PEG MID";
order.LmtPrice = limitPrice;
order.TotalQuantity = quantity;
order.NotHeld = true;
order.MinTradeQty = minTradeQty;
order.MidOffsetAtWhole = midOffsetAtWhole;
order.MidOffsetAtHalf = midOffsetAtHalf;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "PEG MID"
order.LmtPrice = limitPrice
order.TotalQuantity = quantity
order.NotHeld = True
order.MinTradeQty = minTradeQty
order.MidOffsetAtWhole = midOffsetAtWhole
order.MidOffsetAtHalf = midOffsetAtHalf
```