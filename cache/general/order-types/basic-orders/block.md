> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Block

The Block attribute is used for large volume option orders on ISE that consist of at least 50 contracts.

Products: OPT

More on [Block Orders](https://www.interactivebrokers.com/en/index.php?f=580)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=block)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity#Large volumes!
order.lmtPrice = price
order.blockOrder = True
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);//Large volumes!
order.lmtPrice(price);
order.blockOrder(true);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.totalQuantity = quantity;
order.lmtPrice = price;
order.blockOrder = true;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LMT";
order.TotalQuantity = quantity;//Large volumes!
order.LmtPrice = price;
order.BlockOrder = true;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LMT"
order.TotalQuantity = quantity ' Large volumes!
order.LmtPrice = price
order.BlockOrder = True
```