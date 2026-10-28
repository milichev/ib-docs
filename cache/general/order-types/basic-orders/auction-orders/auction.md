> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Auction

An Auction order is entered into the electronic trading system during the pre-market opening period for execution at the Calculated Opening Price (COP). If your order is not filled on the open, the order is re-submitted as a limit order with the limit price set to the COP or the best bid/ask after the market opens.

Products: FUT, STK

More on [Auction Orders](https://www.interactivebrokers.com/en/index.php?f=578)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=auc)

#### Python

```python
order = Order()
order.action = action
order.tif = "AUC"
order.orderType = "MTL"
order.totalQuantity = quantity
order.lmtPrice = price
```

#### Java

```java
Order order = new Order();
order.action(action);
order.tif("AUC");
order.orderType("MTL");
order.totalQuantity(quantity);
order.lmtPrice(price);
```

#### C++

```cpp
Order order;
order.action = action;
order.tif = "AUC";
order.orderType = "MTL";
order.totalQuantity = quantity;
order.lmtPrice = price;
```

#### Generic

```generic
Order order = new Order();
order.Action = action;
order.Tif = "AUC";
order.OrderType = "MTL";
order.TotalQuantity = quantity;
order.LmtPrice = price;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.Tif = "AUC"
order.OrderType = "MTL"
order.TotalQuantity = quantity
order.LmtPrice = price
```