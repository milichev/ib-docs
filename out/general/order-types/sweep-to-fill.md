[home](../../index.md) | [general](../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/sweep-to-fill)

# Sweep to Fill

Sweep-to-fill orders are useful when a trader values speed of execution over price. A sweep-to-fill order identifies the best price and the exact quantity offered/available at that price, and transmits the corresponding portion of your order for immediate execution. Simultaneously it identifies the next best price and quantity offered/available, and submits the matching quantity of your order for immediate execution.

Products: CFD, STK, WAR (SMART only)

More on [Sweep to Fill Orders](https://www.interactivebrokers.com/en/index.php?f=607)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity
order.lmtPrice = price
order.sweepToFill = True
```
