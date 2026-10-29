[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/market-orders/market-with-protection)

# Market with Protection

This order type is useful for futures traders using Globex. A Market with Protection order is a market order that will be cancelled and resubmitted as a limit order if the entire order does not immediately execute at the market price. The limit price is set by Globex to be close to the current market price, slightly higher for a sell order and lower for a buy order.

Products: FUT, FOP

More on [Market with Protection](https://www.interactivebrokers.com/en/index.php?f=601) Orders

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=mktprot)

#### Python

```python
order = Order()
order.action = action
order.orderType = "MKT PRT"
order.totalQuantity = quantity
```
