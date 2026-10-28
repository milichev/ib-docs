> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Box Top

A Box Top order executes as a market order at the current best price. If the order is only partially filled, the remainder is submitted as a limit order with the limit price equal to the price at which the filled portion of the order executed.

Products: OPT (BOX only)

More on [Box Top Orders](https://www.interactivebrokers.com/en/index.php?f=582)

#### Python

```python
order = Order()
order.action = action
order.orderType = "BOX TOP"
order.totalQuantity = quantity
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("BOX TOP");
order.totalQuantity(quantity);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "BOX TOP";
order.totalQuantity = quantity;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "BOX TOP";
order.TotalQuantity = quantity;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "BOX TOP"
order.TotalQuantity = quantity
```