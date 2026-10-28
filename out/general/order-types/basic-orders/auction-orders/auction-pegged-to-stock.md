[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/auction-orders/auction-pegged-to-stock)

# Auction Pegged to Stock

For option orders routed to the Boston Options Exchange (BOX) you may elect to participate in the BOX's price improvement auction in pennies. All BOX-directed price improvement orders are immediately sent from Interactive Brokers to the BOX order book, and when the terms allow, IB will evaluate it for inclusion in a price improvement auction based on price and volume priority. In the auction, your order will have priority over broker-dealer price improvement orders at the same price. An Auction Pegged to Stock order adjusts the order price by the product of a signed delta (which is entered as an absolute and assumed to be positive for calls, negative for puts) and the change of the option's underlying stock price. A buy or sell call order price is determined by adding the delta times a change in an underlying stock price change to a specified starting price for the call. To determine the change in price, a stock reference price (NBBO midpoint at the time of the order is assumed if no reference price is entered) is subtracted from the current NBBO midpoint. A stock range may also be entered that cancels an order when reached. The delta times the change in stock price will be rounded to the nearest penny in favor of the order and will be used as your auction improvement amount.

Products: OPT (BOX only)

More on [price improvement orders](https://www.interactivebrokers.com/en/index.php?f=614)

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("PEG STK");
order.totalQuantity(quantity);
order.delta(delta);
order.startingPrice(startingPrice);
```
