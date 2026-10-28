> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bolt

**Algo Strategy Value:** Bolt

**StartTime:** String. Start Time.\
Valid Value/Format: hh:mm:ss tmz

**EndTime:** String.Must be on the same date as Start Time. Takes precedence over Duration.\
Valid Value/Format: hh:mm:ss tmz

**Duration:** double. Alternative order end time specifier. This value is a number of minutes that the order should be worked.\
Valid Value/Format: 10. A value of -99 will specify that the end time should be the exchange close time.

**Mode:** String. Mode\
Valid Value/Format: Passive, Normal, Aggressive

**PercentVolume:** double. Volume %\
Valid Value/Format: 0 \<= PercentVolume \<= 1

**EventPause:** String. Event Pause\
Valid Value/Format: Attempt_To_Complete, Pause_Trading, Trade_Through

**NoCleanup:** bool. No Cleanup\
Valid Value/Format: "0" (false) or "1" (true)

**LiquidityAggressThreshold:** double. Liquidity Aggressiveness Threshold\
Valid Value/Format: 0 \<= LiquidityAggressThreshold \<= 1

#### Python

```python
order.algoStrategy = "Bolt"
order.algoParams = []
order.algoParams.append(TagValue("StartTime", StartTime))
order.algoParams.append(TagValue("EndTime", EndTime))
order.algoParams.append(TagValue("Duration", Duration))
order.algoParams.append(TagValue("Mode", Mode))
order.algoParams.append(TagValue("PercentVolume", PercentVolume))
order.algoParams.append(TagValue("EventPause", EventPause))
order.algoParams.append(TagValue("NoCleanup", NoCleanup))
order.algoParams.append(TagValue("LiquidityAggressThreshold", liqAggThreshold))
```

#### Java

```java
order.algoStrategy("Bolt");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("StartTime", startTime));
order.algoParams().add(new TagValue("EndTime", endTime));
order.algoParams().add(new TagValue("Duration", Duration));
order.algoParams().add(new TagValue("Mode", Mode));
order.algoParams().add(new TagValue("PercentVolume", PercentVolume));
order.algoParams().add(new TagValue("EventPause", EventPause));
order.algoParams().add(new TagValue("NoCleanup", NoCleanup));
order.algoParams().add(new TagValue("LiquidityAggressThreshold", liqAggThreshold));
```

#### C++

```cpp
order.algoStrategy = "Bolt";

order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("StartTime", StartTime));
TagValueSPtr tag2(new TagValue("EndTime", endTime));
TagValueSPtr tag3(new TagValue("Duration", Duration));
TagValueSPtr tag4(new TagValue("Mode", std::to_string(Mode)));
TagValueSPtr tag5(new TagValue("PercentVolume", std::to_string(PercentVolume)));
TagValueSPtr tag6(new TagValue("EventPause", std::to_string(EventPause)));
TagValueSPtr tag7(new TagValue("NoCleanup", std::to_string(NoCleanup)));
TagValueSPtr tag8(new TagValue("LiquidityAggressThreshold", std::to_string(LiquidityAggressThreshold)));

order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
order.algoParams->push_back(tag5);
order.algoParams->push_back(tag6);
order.algoParams->push_back(tag7);
order.algoParams->push_back(tag8);
```

#### C\#

```csharp
order.AlgoStrategy("Bolt");
order.AlgoParams(new ArrayList());
order.AlgoParams.Add(new TagValue("StartTime", startTime));
order.AlgoParams.Add(new TagValue("EndTime", endTime));
order.AlgoParams.Add(new TagValue("Duration", Duration));
order.AlgoParams.Add(new TagValue("Mode", Mode));
order.AlgoParams.Add(new TagValue("PercentVolume", PercentVolume));
order.AlgoParams.Add(new TagValue("EventPause", EventPause));
order.AlgoParams.Add(new TagValue("NoCleanup", NoCleanup));
order.AlgoParams.Add(new TagValue("LiquidityAggressThreshold", liqAggThreshold));
```

#### VB.NET

```vbnet
order.AlgoStrategy("Bolt");
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(new TagValue("StartTime", startTime))
order.AlgoParams.Add(new TagValue("EndTime", endTime))
order.AlgoParams.Add(new TagValue("Duration", Duration))
order.AlgoParams.Add(new TagValue("Mode", Mode))
order.AlgoParams.Add(new TagValue("PercentVolume", PercentVolume))
order.AlgoParams.Add(new TagValue("EventPause", EventPause))
order.AlgoParams.Add(new TagValue("NoCleanup", NoCleanup))
order.AlgoParams.Add(new TagValue("LiquidityAggressThreshold", liqAggThreshold))
```