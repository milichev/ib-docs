> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Balance Impact Risk

The [Balance Impact Risk](https://www.interactivebrokers.com/en/index.php?f=1120) balances the market impact of trading the option with the risk of price change over the time horizon of the order. This strategy considers the user-assigned level of risk aversion to define the pace of the execution, along with the user-defined target percent of volume.

**Algo Strategy Value:** BalanceImpactRisk

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**riskAversion:** String. Urgency/risk aversion\
Valid Value/Format: Get Done, Aggressive, Neutral, Passive

**forceCompletion:** bool. Attempt completion by the end of the day\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "BalanceImpactRisk"
order.algoParams = []
order.algoParams.append(TagValue("maxPctVol", maxPctVol))
order.algoParams.append(TagValue("riskAversion", riskAversion))
order.algoParams.append(TagValue("forceCompletion", int(forceCompletion)))
```

#### Java

```java
order.algoStrategy("BalanceImpactRisk");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("maxPctVol", String.valueOf(maxPctVol)));
order.algoParams().add(new TagValue("riskAversion", riskAversion));
order.algoParams().add(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "BalanceImpactRisk";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("maxPctVol", std::to_string(maxPctVol)));
TagValueSPtr tag2(new TagValue("riskAversion", riskAversion));
TagValueSPtr tag3(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
```

#### C\#

```csharp
order.AlgoStrategy = "BalanceImpactRisk";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("maxPctVol", maxPctVol.ToString()));
order.AlgoParams.Add(new TagValue("riskAversion", riskAversion));
order.AlgoParams.Add(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "BalanceImpactRisk"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("maxPctVol", maxPctVol.ToString()))
order.AlgoParams.Add(New TagValue("riskAversion", riskAversion))
order.AlgoParams.Add(New TagValue("forceCompletion", BooleantoString(forceCompletion)))
```