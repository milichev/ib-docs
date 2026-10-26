[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/auction-orders/auction)

# Auction

An Auction order is entered into the electronic trading system during the pre-market opening period for execution at the Calculated Opening Price (COP). If your order is not filled on the open, the order is re-submitted as a limit order with the limit price set to the COP or the best bid/ask after the market opens.

Products: FUT, STK

More on [Auction Orders](https://www.interactivebrokers.com/en/index.php?f=578)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=auc)

#### Generic

```generic
Order order = new Order();
order.Action = action;
order.Tif = "AUC";
order.OrderType = "MTL";
order.TotalQuantity = quantity;
order.LmtPrice = price;
```
