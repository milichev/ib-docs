> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# TWAP

The [TWAP](https://www.interactivebrokers.com/en/index.php?f=1125) algo aims to achieve the time-weighted average price calculated from the time you submit the order to the time it completes. Incomplete orders at the end of the stated completion time will continue to fill if the box 'allow trading past end time' is checked. Users can set the order to trade only when specified conditions are met. Those user-defined inputs include when the order is marketable, when the midpoint matches the required price, when the same side (buy or sell) matches to make the order marketable or when the last traded price would make the order marketable. For the TWAP algo, the average price calculation is calculated from the order entry time through the close of the market and will only attempt to execute when the criterion is met. The order may not fill throughout its stated duration and so the order is not guaranteed. TWAP is available for all US equities.

**Algo Strategy Value:** Twap

**catchUp:** bool. Catch up in time.\
Valid Value/Format: 1 (true) or 0 (false)

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**allowPastEndTime:** bool. Allow trading past end time\
Valid Value/Format: 1 (true) or 0 (false)

**conditionalPrice:** double. Enter the trade when a price is more aggressive than the listed value.\
Valid Value/Format: 120.0

#### Python

```python
order.algoStrategy = "Twap"
order.algoParams = []
order.algoParams.append(TagValue("catchUp", catchUp))
order.algoParams.append(TagValue("startTime", startTime))
order.algoParams.append(TagValue("endTime", endTime))
order.algoParams.append(TagValue("allowPastEndTime", int(allowPastEndTime)))
order.algoParams.append(TagValue("conditionalPrice", conditionalPrice))
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
      "strategy": "Twap",
        "strategyParameters": {
          "allowPastEndTime": true,
          "conditionalPrice": 123.45,
          "catchUp": true,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00"
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("Twap");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("catchUp", catchUp));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("endTime", endTime));
order.algoParams().add(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
order.algoParams().add(new TagValue("conditionalPrice", conditionalPrice);
```

#### C++

```cpp
order.algoStrategy = "Twap";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("catchUp", catchUp));
TagValueSPtr tag2(new TagValue("startTime", startTime));
TagValueSPtr tag3(new TagValue("endTime", endTime));
TagValueSPtr tag4(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
TagValueSPtr tag5(new TagValue("conditionalPrice", std::to_string(conditionalPrice)));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
order.algoParams->push_back(tag5);
```

#### C\#

```csharp
order.AlgoStrategy = "Twap";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("catchUp", catchUp));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("endTime", endTime));
order.AlgoParams.Add(new TagValue("allowPastEndTime", allowPastEndTime));
order.AlgoParams.Add(new TagValue("conditionalPrice", conditionalPrice));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "Twap"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("catchUp", catchUp))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("endTime", endTime))
order.AlgoParams.Add(New TagValue("allowPastEndTime", BooleantoString(allowPastEndTime)))
order.AlgoParams.Add(new TagValue("conditionalPrice", conditionalPrice))
```