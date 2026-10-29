[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/block)

# Block

The Block attribute is used for large volume option orders on ISE that consist of at least 50 contracts.

Products: OPT

More on [Block Orders](https://www.interactivebrokers.com/en/index.php?f=580)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=block)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity#Large volumes!
order.lmtPrice = price
order.blockOrder = True
```
