[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/ibkrats-order-types/pegged-to-best)

# Pegged-to-Best

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG BEST"
order.lmtPrice = limitPrice
order.totalQuantity = quantity
order.notHeld = True
order.minCompeteSize = minCompeteSize
order.competeAgainstBestOffset = competeAgainstBestOffset
```
