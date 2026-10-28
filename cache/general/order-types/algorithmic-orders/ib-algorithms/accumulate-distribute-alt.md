> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

#### Python

```python
order.algoStrategy = "AccuDistr"
order.algoParams = []
order.algoParams.append(TagValue("componentSize", componentSize))
order.algoParams.append(TagValue("timeBetweenOrders", timeBetweenOrders))
order.algoParams.append(TagValue("randomizeTime20", int(randomizeTime20)))
order.algoParams.append(TagValue("randomizeSize55", int(randomizeSize55)))
order.algoParams.append(TagValue("catchUp", int(catchUp)))
order.algoParams.append(TagValue("waitForFill", int(waitForFill)))
order.algoParams.append(TagValue("activeTimeStart", startTime))
order.algoParams.append(TagValue("activeTimeEnd", endTime))
```

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

#### C++

```cpp
order.algoStrategy = "AccuDistr";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("componentSize", std::to_string(componentSize)));
TagValueSPtr tag2(new TagValue("timeBetweenOrders",std::to_string(timeBetweenOrders)));
TagValueSPtr tag3(new TagValue("randomizeTime20", randomizeTime20 ? "1" : "0"));
TagValueSPtr tag4(new TagValue("randomizeSize55", randomizeSize55 ? "1" : "0"));
TagValueSPtr tag5(new TagValue("giveUp", std::to_string(catchUp)));
TagValueSPtr tag6(new TagValue("waitForFill", waitForFill ? "1" : "0"));
TagValueSPtr tag7(new TagValue("activeTimeStart", startTime));
TagValueSPtr tag8(new TagValue("activeTimeEnd", endTime));

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
order.AlgoStrategy = "AccuDistr";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("componentSize", componentSize.ToString()));
order.AlgoParams.Add(new TagValue("timeBetweenOrders", timeBetweenOrders.ToString()));
order.AlgoParams.Add(new TagValue("randomizeTime20", randomizeTime20 ? "1" : "0"));
order.AlgoParams.Add(new TagValue("randomizeSize55", randomizeSize55 ? "1" : "0"));
order.AlgoParams.Add(new TagValue("catchUp", catchUp ? "1" : "0"));
order.AlgoParams.Add(new TagValue("waitForFill", waitForFill ? "1" : "0"));
order.AlgoParams.Add(new TagValue("activeTimeStart", startTime));
order.AlgoParams.Add(new TagValue("activeTimeEnd", endTime));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "AccuDistr"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("componentSize", componentSize.ToString()))
order.AlgoParams.Add(New TagValue("timeBetweenOrders", timeBetweenOrders.ToString()))
order.AlgoParams.Add(New TagValue("randomizeTime20", BooleantoString(randomizeTime20)))
order.AlgoParams.Add(New TagValue("randomizeSize55", BooleantoString(randomizeSize55)))
order.AlgoParams.Add(New TagValue("catchUp", BooleantoString(catchUp)))
order.AlgoParams.Add(New TagValue("waitForFill", BooleantoString(waitForFill)))
order.AlgoParams.Add(New TagValue("activeTimeStart", startTime))
order.AlgoParams.Add(New TagValue("activeTimeEnd", endTime))
```