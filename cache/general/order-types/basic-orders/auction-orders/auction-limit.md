> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Auction Limit

For option orders routed to the Boston Options Exchange (BOX) you may elect to participate in the BOX's price improvement auction in pennies. All BOX-directed price improvement orders are immediately sent from Interactive Brokers to the BOX order book, and when the terms allow, IB will evaluate it for inclusion in a price improvement auction based on price and volume priority. In the auction, your order will have priority over broker-dealer price improvement orders at the same price. An Auction Limit order at a specified price. Use of a limit order ensures that you will not receive an execution at a price less favorable than the limit price. Enter limit orders in penny increments with your auction improvement amount computed as the difference between your limit order price and the nearest listed increment.

Products: OPT (BOX only)

More on [price improvement orders](https://www.interactivebrokers.com/en/index.php?f=614)

#### Generic

```generic
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity
order.lmtPrice = price
order.auctionStrategy = auctionStrategy
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(price);
order.auctionStrategy(auctionStrategy);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.totalQuantity = quantity;
order.lmtPrice = price;
order.auctionStrategy = auctionStrategy;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LMT";
order.TotalQuantity = quantity;
order.LmtPrice = price;
order.AuctionStrategy = auctionStrategy;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LMT"
order.TotalQuantity = quantity
order.LmtPrice = price
order.AuctionStrategy = auctionStrategy
```