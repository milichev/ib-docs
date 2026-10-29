[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/ibkrats-order-types/pegged-to-midpoint)

# Pegged-to-Midpoint

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG MID"
order.lmtPrice = limitPrice
order.totalQuantity = quantity
order.notHeld = True
order.minTradeQty = minTradeQty
order.midOffsetAtWhole = midOffsetAtWhole
order.midOffsetAtHalf = midOffsetAtHalf
```
