[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/quantitative-brokers-algorithms/strobe)

# Strobe

**Algo Strategy Value:** Strobe

**StartTime:** String. Start Time.\
Valid Value/Format: hh:mm:ss tmz

**EndTime:** String.Must be on the same date as Start Time. Takes precedence over Duration.\
Valid Value/Format: hh:mm:ss tmz

**Duration:** double. Alternative order end time specifier. This value is a number of minutes that the order should be worked.\
Valid Value/Format: 10. A value of -99 will specify that the end time should be the exchange close time.

**Benchmark:** String. Benchmark\
Valid Value/Format: TWAP, VWAP

**PercentVolume:** double. Volume %\
Valid Value/Format: 0 \<= PercentVolume \<= 1

**NoCleanup:** bool. No Cleanup\
Valid Value/Format: "0" (false) or "1" (true)

#### Python

```python
order.algoStrategy = "Strobe"
order.algoParams = []
order.algoParams.append(TagValue("StartTime", StartTime))
order.algoParams.append(TagValue("EndTime", EndTime))
order.algoParams.append(TagValue("Duration", Duration))
order.algoParams.append(TagValue("Benchmark", Benchmark))
order.algoParams.append(TagValue("PercentVolume", PercentVolume))
order.algoParams.append(TagValue("NoCleanup", NoCleanup))
```
