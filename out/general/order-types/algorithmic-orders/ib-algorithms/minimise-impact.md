[home](../../../../index.md) | [general](../../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/minimise-impact)

# Minimise Impact

The [Minimise Impact](https://www.interactivebrokers.com/en/index.php?f=1121) algo minimises market impact by slicing the order over time to achieve a market average without going over the given maximum percentage value.

**Algo Strategy Value:** MinImpact

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

#### Python

```python
order.algoStrategy = "MinImpact"
order.algoParams = []
order.algoParams.append(TagValue("maxPctVol", maxPctVol))
```
