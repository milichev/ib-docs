> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Pegged To Stock

A Pegged to Stock order continually adjusts the option order price by the product of a signed user-define delta and the change of the option's underlying stock price. The delta is entered as an absolute and assumed to be positive for calls and negative for puts. A buy or sell call order price is determined by adding the delta times a change in an underlying stock price to a specified starting price for the call. To determine the change in price, the stock reference price is subtracted from the current NBBO midpoint. The Stock Reference Price can be defined by the user, or defaults to the NBBO midpoint at the time of the order if no reference price is entered. You may also enter a high/low stock price range which cancels the order when reached. The delta times the change in stock price will be rounded to the nearest penny in favor of the order.

Products: OPT

More on [Pegged To Stock Orders](https://www.interactivebrokers.com/en/index.php?f=615)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=relstk)

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG STK"
order.totalQuantity = quantity
order.delta = delta
order.stockRefPrice = stockReferencePrice
order.startingPrice = startingPrice
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("PEG STK");
order.totalQuantity(quantity);
order.delta(delta);
order.stockRefPrice(stockReferencePrice);
order.startingPrice(startingPrice);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "PEG STK";
order.totalQuantity = quantity;
order.delta = delta;
order.stockRefPrice = stockReferencePrice;
order.startingPrice = startingPrice;
```

#### Generic

```generic
Order order = new Order();
order.Action = action;
order.OrderType = "PEG STK";
order.TotalQuantity = quantity;
order.Delta = delta;
order.StockRefPrice = stockReferencePrice;
order.StartingPrice = startingPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "PEG STK"
order.TotalQuantity = quantity
order.Delta = delta
order.StockRefPrice = stockReferencePrice
order.StartingPrice = startingPrice
```