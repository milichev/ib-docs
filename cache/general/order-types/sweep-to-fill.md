> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Sweep to Fill

Sweep-to-fill orders are useful when a trader values speed of execution over price. A sweep-to-fill order identifies the best price and the exact quantity offered/available at that price, and transmits the corresponding portion of your order for immediate execution. Simultaneously it identifies the next best price and quantity offered/available, and submits the matching quantity of your order for immediate execution.

Products: CFD, STK, WAR (SMART only)

More on [Sweep to Fill Orders](https://www.interactivebrokers.com/en/index.php?f=607)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity
order.lmtPrice = price
order.sweepToFill = True
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(price);
order.sweepToFill(true);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.totalQuantity = quantity;
order.lmtPrice = price;
order.sweepToFill = true;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LMT";
order.TotalQuantity = quantity;
order.LmtPrice = price;
order.SweepToFill = true;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LMT"
order.TotalQuantity = quantity
order.LmtPrice = price
order.SweepToFill = True
```