[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/peg-orders/pegged-to-market)

# Pegged To Market

A pegged-to-market order is designed to maintain a purchase price relative to the national best offer (NBO) or a sale price relative to the national best bid (NBB). Depending on the width of the quote, this order may be passive or aggressive. The trader creates the order by entering a limit price which defines the worst limit price that they are willing to accept. Next, the trader enters an offset amount which computes the active limit price as follows: Sell order price = Bid price + offset amount Buy order price = Ask price – offset amount

Products: STK

More on [Pegged To Market Orders](https://www.interactivebrokers.com/en/index.php?f=616)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=pegmkt)

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG MKT"
order.totalQuantity = quantity
order.auxPrice = marketOffset#Offset price
```
