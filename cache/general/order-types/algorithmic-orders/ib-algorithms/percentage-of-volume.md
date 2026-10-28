> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Percentage of Volume

The [Percent of Volume](https://www.interactivebrokers.com/en/index.php?f=1123)algo can limit the contribution of orders to overall average daily volume in order to minimize impact. Clients can set a value between 1-50% to control their participation between stated start and end times. Order quantity and volume distribution over the day is determined using the target percent of volume you entered along with continuously updated volume forecasts calculated from TWS market data. In addition, the algo can be set to avoid taking liquidity, which may help avoid liquidity-taker fees and could result in liquidity-adding rebates. By checking the Attempt to never take liquidity box, the algo is discouraged from hitting the bid or lifting the offer if possible. However, this may also result in greater deviations from the benchmark, and in partial fills, since the posted bid/offer may not always get hit as the price moves up/down. IB will use best efforts not to take liquidity when this box is checked, however, there will be times that it cannot be avoided.

**Algo Strategy Value:** PctVol

**pctVol:** double. Total percentage\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**noTakeLiq:** bool. Attempt to never take liquidity\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "PctVol"
order.algoParams = []
order.algoParams.append(TagValue("pctVol", pctVol))
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
      "strategy": "PctVol",
        "strategyParameters": {
          "noTakeLiq": true,
          "includeBlockTrades": true,
          "pctVol": 15.0,
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
order.algoStrategy("PctVol");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("pctVol", String.valueOf(pctVol)));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("endTime", endTime));
order.algoParams().add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "PctVol";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("pctVol", std::to_string(pctVol)));
TagValueSPtr tag2(new TagValue("startTime", startTime));
TagValueSPtr tag3(new TagValue("endTime", endTime));
TagValueSPtr tag4(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
```

#### C\#

```csharp
order.AlgoStrategy = "PctVol";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("pctVol", pctVol.ToString()));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("endTime", endTime));
order.AlgoParams.Add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "PctVol"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("pctVol", pctVol.ToString()))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("endTime", endTime))
order.AlgoParams.Add(New TagValue("noTakeLiq", BooleantoString(noTakeLiq)))
```