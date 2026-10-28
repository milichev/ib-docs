[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/balance-impact-risk)

# Balance Impact Risk

The [Balance Impact Risk](https://www.interactivebrokers.com/en/index.php?f=1120) balances the market impact of trading the option with the risk of price change over the time horizon of the order. This strategy considers the user-assigned level of risk aversion to define the pace of the execution, along with the user-defined target percent of volume.

**Algo Strategy Value:** BalanceImpactRisk

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**riskAversion:** String. Urgency/risk aversion\
Valid Value/Format: Get Done, Aggressive, Neutral, Passive

**forceCompletion:** bool. Attempt completion by the end of the day\
Valid Value/Format: 1 (true) or 0 (false)

#### Java

```java
order.algoStrategy("BalanceImpactRisk");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("maxPctVol", String.valueOf(maxPctVol)));
order.algoParams().add(new TagValue("riskAversion", riskAversion));
order.algoParams().add(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
```
