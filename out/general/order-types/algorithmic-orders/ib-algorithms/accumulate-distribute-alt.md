[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/accumulate-distribute-alt)

# Accumulate/Distribute (Alt.)

The "AccuDistr" variant of the Accumulate/Distribute Algo is conceptually the same as the pre-existing "AD". However, "AccuDistr" introduces the ability to close existing Trader Workstation sessions while still allowing the algo to continue working. In addition to the underlying behavior change, "AccuDistr" appears visually different while viewed from Trader Workstation, offering a new menu under the "IB ALGO" tab.

It is important to note that "AccuDistr" has removed the ability to use the "giveUp" field. As such, users who require "giveUp" for their strategy MUST continue utilizing the "AD" variant for the Accumulate/Distribute algo.

**Algo Strategy Value:** AccuDistr

**componentSize:** int. Quantity of increment.\
Valid Value/Format: Cannot exceed initial size

**timeBetweenOrders:** int. Time interval in seconds between each order.\
Valid Value/Format: 30

**randomizeTime20:** bool. Randomize time period by +/- 20%.\
Valid Value/Format: 1 (true) or 0 (false)

**randomizeSize55:** bool. Randomize size by +/- 55%.\
Valid Value/Format: 1 (true) or 0 (false)

**catchUp:** bool. Catch up in time.\
Valid Value/Format: 1 (true) or 0 (false)

**waitForFill:** bool. Wait for current order to fill before submitting next order.\
Valid Value/Format: 1 (true) or 0 (false)

**activeTimeStart:** String. Algorithm starting time.\
Valid Value/Format: YYYYMMDD-hh:mm:ss TMZ

**activeTimeEnd:** String. Algorithm ending time.\
Valid Value/Format: YYYYMMDD-hh:mm:ss TMZ

#### Java

```java
order.algoStrategy("AccuDistr");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("componentSize", String.valueOf(componentSize)));
order.algoParams().add(new TagValue("timeBetweenOrders", String.valueOf(timeBetweenOrders)));
order.algoParams().add(new TagValue("randomizeTime20", randomizeTime20 ? "1" : "0"));
order.algoParams().add(new TagValue("randomizeSize55", randomizeSize55 ? "1" : "0"));
order.algoParams().add(new TagValue("catchUp", catchUp ? "1" : "0"));
order.algoParams().add(new TagValue("waitForFill", waitForFill ? "1" : "0"));
order.algoParams().add(new TagValue("activeTimeStart", startTime));
order.algoParams().add(new TagValue("activeTimeEnd", endTime));
```
