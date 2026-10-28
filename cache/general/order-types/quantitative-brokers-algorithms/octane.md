> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

#### Python

```python
order.algoStrategy = "Octane"
order.algoParams = []
order.algoParams.append(TagValue("StartTime", StartTime))
order.algoParams.append(TagValue("EndTime", EndTime))
order.algoParams.append(TagValue("Duration", Duration))
order.algoParams.append(TagValue("Urgency", Urgency))
```

#### Java

```java
order.algoStrategy("Octane");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("StartTime", startTime));
order.algoParams().add(new TagValue("EndTime", endTime));
order.algoParams().add(new TagValue("Duration", Duration));
order.algoParams().add(new TagValue("Urgency", Urgency));
```

#### C++

```cpp
order.algoStrategy = "Octane";

order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("StartTime", StartTime));
TagValueSPtr tag2(new TagValue("EndTime", endTime));
TagValueSPtr tag3(new TagValue("Duration", Duration));
TagValueSPtr tag4(new TagValue("Urgency", std::to_string(Urgency)));

order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
```

#### C\#

```csharp
order.AlgoStrategy("Octane");
order.AlgoParams(new ArrayList());
order.AlgoParams.Add(new TagValue("StartTime", startTime));
order.AlgoParams.Add(new TagValue("EndTime", endTime));
order.AlgoParams.Add(new TagValue("Duration", Duration));
order.AlgoParams.Add(new TagValue("Urgency", Urgency));
```

#### VB.NET

```vbnet
order.AlgoStrategy("Octane");
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(new TagValue("StartTime", startTime))
order.AlgoParams.Add(new TagValue("EndTime", endTime))
order.AlgoParams.Add(new TagValue("Duration", Duration))
order.AlgoParams.Add(new TagValue("Urgency", Urgency))
```