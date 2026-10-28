> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Time Variant Percentage

[Time Variant Percentage of Volume Strategy](https://www.interactivebrokers.com/en/index.php?f=14369#collapse01) – This algo allows you to participate in volume at a user-defined rate that varies with time. Define the target percent rate at the start time and at the end time, and the algo calculates the participation rate over time between the two. This allows the order to be more aggressive initially and less aggressive toward the end, or vice versa.

**Algo Strategy Value:** PctVolTm

**startPctVol:** double. Initial Target Percentage\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**endPctVol:** double. Terminal Target Percentage\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**noTakeLiq:** bool. Attempt to never take liquidity\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "PctVolTm"
order.algoParams = []
order.algoParams.append(TagValue("startPctVol", startPctVol))
order.algoParams.append(TagValue("endPctVol", endPctVol))
order.algoParams.append(TagValue("startTime", startTime))
order.algoParams.append(TagValue("endTime", endTime))
order.algoParams.append(TagValue("noTakeLiq", int(noTakeLiq)))
```

#### Abap

```abap
curl {baseUrl}/iserver/account/{accountId}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LMT",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity,
      "strategy": "PctVolTm",
        "strategyParameters": {
          "startPctVol": 0.1,
          "endPctVol": 50.0,
          "noTakeLiq": true,
          "includeBlockTrades": true,
          "conditionalPrice": 123.45,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00"
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("PctVolTm");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("startPctVol", String.valueOf(startPctVol)));
order.algoParams().add(new TagValue("endPctVol", String.valueOf(endPctVol)));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("endTime", endTime));
order.algoParams().add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "PctVolTm";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("startPctVol", std::to_string(startPctVol)));
TagValueSPtr tag2(new TagValue("endPctVol", std::to_string(endPctVol)));
TagValueSPtr tag3(new TagValue("startTime", startTime));
TagValueSPtr tag4(new TagValue("endTime", endTime));
TagValueSPtr tag5(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
order.algoParams->push_back(tag5);
```

#### C\#

```csharp
order.AlgoStrategy = "PctVolTm";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("startPctVol", startPctVol.ToString()));
order.AlgoParams.Add(new TagValue("endPctVol", endPctVol.ToString()));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("endTime", endTime));
order.AlgoParams.Add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "PctVolTm"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("startPctVol", startPctVol.ToString()))
order.AlgoParams.Add(New TagValue("endPctVol", endPctVol.ToString()))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("endTime", endTime))
order.AlgoParams.Add(New TagValue("noTakeLiq", BooleantoString(noTakeLiq)))
```