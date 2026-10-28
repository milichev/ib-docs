[source](https://www.interactivebrokers.com/docs/general/order-types/quantitative-brokers-algorithms/octane)

# Octane

**Algo Strategy Value:** Octane

**StartTime:** String. Start Time.\
Valid Value/Format: hh:mm:ss tmz

**EndTime:** String.Must be on the same date as Start Time. Takes precedence over Duration.\
Valid Value/Format: hh:mm:ss tmz

**Duration:** double. Alternative order end time specifier. This value is a number of minutes that the order should be worked.\
Valid Value/Format: 10. A value of -99 will specify that the end time should be the exchange close time.

**Urgency:** String. Fill urgency\
Valid Value/Format: High, Ultra_High

#### Java

```java
order.algoStrategy("Octane");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("StartTime", startTime));
order.algoParams().add(new TagValue("EndTime", endTime));
order.algoParams().add(new TagValue("Duration", Duration));
order.algoParams().add(new TagValue("Urgency", Urgency));
```
