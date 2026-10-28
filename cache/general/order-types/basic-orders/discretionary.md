> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Discretionary

An Discretionary order is a limit order submitted with a hidden, specified 'discretionary' amount off the limit price which may be used to increase the price range over which the limit order is eligible to execute. The market sees only the limit price.

Products: STK

More on [Discretionary Orders](https://www.interactivebrokers.com/en/index.php?f=585)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=dis)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity
order.lmtPrice = price
order.discretionaryAmt = discretionaryAmount
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(price);
order.discretionaryAmt(discretionaryAmt);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.totalQuantity = quantity;
order.lmtPrice = price;
order.discretionaryAmt = discretionaryAmount;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LMT";
order.TotalQuantity = quantity;
order.LmtPrice = price;
order.DiscretionaryAmt = discretionaryAmount;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LMT"
order.TotalQuantity = quantity
order.LmtPrice = price
order.DiscretionaryAmt = discretionaryAmount
```