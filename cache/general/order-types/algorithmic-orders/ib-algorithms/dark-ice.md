> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# DarkIce

The [Dark Ice](https://www.interactivebrokers.com/en/index.php?f=3123) order type develops the concept of privacy adopted by orders such as Iceberg or Reserve, using a proprietary algorithm to further hide the volume displayed to the market by the order. Clients can determine the timeframe an order remains live and have the option to allow trading past end time in the event it is unfilled by the stated end time. In order to minimize market impact in the event of large orders, users can specify a display size to be shown to the market different from the actual order size. Additionally, the Dark Ice algo randomizes the display size +/- 50% based upon the probability of the price moving favorably. Further, using calculated probabilities, the algo decides whether to place the order at the limit price or one tick lower than the current offer for buy orders and one tick higher than the current bid for sell orders.

**Algo Strategy Value:** DarkIce

**displaySize:** double. Order size to be displayed\
Valid Value/Format: 100

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**allowPastEndTime:** bool. Allow trading past end time\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "DarkIce"
order.algoParams = []
order.algoParams.append(TagValue("displaySize", displaySize))
order.algoParams.append(TagValue("startTime", startTime))
order.algoParams.append(TagValue("endTime", endTime))
order.algoParams.append(TagValue("allowPastEndTime", int(allowPastEndTime)))
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
      "strategy": "DarkIce",
        "strategyParameters": {
          "allowPastEndTime": true,
          "displaySize": 100,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00"
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("DarkIce");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("displaySize", String.valueOf(displaySize)));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("endTime", endTime));
order.algoParams().add(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "DarkIce";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("displaySize", std::to_string(displaySize)));
TagValueSPtr tag2(new TagValue("startTime", startTime));
TagValueSPtr tag3(new TagValue("endTime", endTime));
TagValueSPtr tag4(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
```

#### C\#

```csharp
order.AlgoStrategy = "DarkIce";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("displaySize", displaySize.ToString()));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("endTime", endTime));
order.AlgoParams.Add(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "DarkIce"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("displaySize", displaySize.ToString()))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("endTime", endTime))
order.AlgoParams.Add(New TagValue("allowPastEndTime", BooleantoString(allowPastEndTime)))
```