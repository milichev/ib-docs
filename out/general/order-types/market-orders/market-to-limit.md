[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/market-orders/market-to-limit)

# Market to Limit

A Market-to-Limit (MTL) order is submitted as a market order to execute at the current best market price. If the order is only partially filled, the remainder of the order is canceled and re-submitted as a limit order with the limit price equal to the price at which the filled portion of the order executed.

Products: CFD, FUT, FOP, OPT, STK, WAR

More on [Market to Limit Orders](https://www.interactivebrokers.com/en/index.php?f=597)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=mtl)

#### Python

```python
order = Order()
order.action = action
order.orderType = "MTL"
order.totalQuantity = quantity
```
