[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/ibkrats-order-types/pegged-to-best-offset-difference)

# Pegged-to-Best offset difference

#### Python

```python
order = Order()
order.action = action
order.orderType = "PEG BEST"
order.lmtPrice = limitPrice
order.totalQuantity = quantity
order.notHeld = True
order.minCompeteSize = minCompeteSize
order.competeAgainstBestOffset = COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID
order.midOffsetAtWhole = midOffsetAtWhole
order.midOffsetAtHalf = midOffsetAtHalf
```
