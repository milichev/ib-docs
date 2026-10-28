> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

#### Java

```java
order.algoStrategy("Strobe");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("StartTime", startTime));
order.algoParams().add(new TagValue("EndTime", endTime));
order.algoParams().add(new TagValue("Duration", Duration));
order.algoParams().add(new TagValue("Benchmark", Benchmark));
order.algoParams().add(new TagValue("PercentVolume", PercentVolume));
order.algoParams().add(new TagValue("NoCleanup", NoCleanup));
```

#### C++

```cpp
order.algoStrategy = "Strobe";

order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("StartTime", StartTime));
TagValueSPtr tag2(new TagValue("EndTime", endTime));
TagValueSPtr tag3(new TagValue("Duration", Duration));
TagValueSPtr tag4(new TagValue("Benchmark", std::to_string(Benchmark)));
TagValueSPtr tag5(new TagValue("PercentVolume", std::to_string(PercentVolume)));
TagValueSPtr tag6(new TagValue("NoCleanup", std::to_string(NoCleanup)));

order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
order.algoParams->push_back(tag5);
order.algoParams->push_back(tag6);
```

#### C\#

```csharp
order.AlgoStrategy("Strobe");
order.AlgoParams(new ArrayList());
order.AlgoParams.Add(new TagValue("StartTime", startTime));
order.AlgoParams.Add(new TagValue("EndTime", endTime));
order.AlgoParams.Add(new TagValue("Duration", Duration));
order.AlgoParams.Add(new TagValue("Benchmark", Benchmark));
order.AlgoParams.Add(new TagValue("PercentVolume", PercentVolume));
order.AlgoParams.Add(new TagValue("NoCleanup", NoCleanup));
```

#### VB.NET

```vbnet
order.AlgoStrategy("Strobe");
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(new TagValue("StartTime", startTime))
order.AlgoParams.Add(new TagValue("EndTime", endTime))
order.AlgoParams.Add(new TagValue("Duration", Duration))
order.AlgoParams.Add(new TagValue("Benchmark", Benchmark))
order.AlgoParams.Add(new TagValue("PercentVolume", PercentVolume))
order.AlgoParams.Add(new TagValue("NoCleanup", NoCleanup))
```