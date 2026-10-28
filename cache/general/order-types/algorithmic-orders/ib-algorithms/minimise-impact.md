> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

#### Java

```java
order.algoStrategy("BalanceImpactRisk");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("maxPctVol", String.valueOf(maxPctVol)));
```

#### C++

```cpp
order.algoStrategy = "MinImpact";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("maxPctVol", std::to_string(maxPctVol)));
order.algoParams->push_back(tag1);
```

#### C\#

```csharp
order.AlgoStrategy = "MinImpact";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("maxPctVol", maxPctVol.ToString()));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "MinImpact"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("maxPctVol", maxPctVol.ToString()))
```