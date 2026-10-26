[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/auction-orders/auction-relative)

# Auction Relative

Stock-Option contracts directly routed to BOX will support a Price Improvement Auction Orders compared to standard SMART routing. This order will necessitate a standard [Relative / Pegged-To-Primary order](../../peg-orders/pegged-to-primary-relative.md) with the contract being directly routed to "BOX" rather than "SMART" or another exchange.

Products: OPT (BOX only)

More on [price improvement orders](https://www.interactivebrokers.com/en/index.php?f=614)

#### Generic

```generic
Dim order As Order = New Order
order.Action = action
order.OrderType = "REL"
order.TotalQuantity = quantity
order.AuxPrice = offset
```
