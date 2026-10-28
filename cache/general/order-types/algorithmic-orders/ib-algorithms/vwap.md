> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# VWAP

IB's best-efforts [VWAP](https://www.interactivebrokers.com/en/index.php?f=1124) algo seeks to achieve the Volume-Weighted Average price (VWAP), calculated from the time you submit the order to the close of the market.

Best-efforts VWAP algo is a lower-cost alternative to the Guaranteed VWAP (no longer supported) that enables the user to attempt never to take liquidity while also trading past the end time. Because the order may not be filled on the bid or at the ask prices, there is a trade-off with this algo. The order may not fully fill if the user is attempting to avoid liquidity-taking fees and/or maximize liquidity-adding rebates, and may miss the benchmark by asking to stay on the bid or ask. The user can determine the maximum percentage of average daily volume (up to 50%) his order will comprise. The system will generate the VWAP from the time the order is entered through the close of trading, and the order can be limited to trading over a pre-determined period. The user can request the order to continue beyond its stated end time if unfilled at the end of the stated period. The best-efforts VWAP algo is available for all US equities.

**Algo Strategy Value:** Vwap

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**allowPastEndTime:** bool. Allow trading past end time\
Valid Value/Format: 1 (true) or 0 (false)

**noTakeLiq:** bool. Attempt to never take liquidity\
Valid Value/Format: 1 (true) or 0 (false)

**speedUp:** bool. Compensate for the decreased fill rate due to presence of limit price.\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "Vwap"
order.algoParams = []
order.algoParams.append(TagValue("maxPctVol", maxPctVol))
order.algoParams.append(TagValue("startTime", startTime))
order.algoParams.append(TagValue("endTime", endTime))
order.algoParams.append(TagValue("allowPastEndTime", int(allowPastEndTime)))
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
      "strategy": "VWAP",
        "strategyParameters": {
          "noTakeLiq": true,
          "optoutClosingAuction": true,
          "allowPastEndTime": true,
          "speedUp": true,
          "conditionalPrice": 123.45,
          "maxPctVol": 0.1,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00"
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("Vwap");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("maxPctVol", String.valueOf(maxPctVol)));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("endTime", endTime));
order.algoParams().add(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
order.algoParams().add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
order.algoParams().add(new TagValue("speedUp", speedUp ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "Vwap";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("maxPctVol", std::to_string(maxPctVol)));
TagValueSPtr tag2(new TagValue("startTime", startTime));
TagValueSPtr tag3(new TagValue("endTime", endTime));
TagValueSPtr tag4(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
TagValueSPtr tag5(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
TagValueSPtr tag6(new TagValue("speedUp", speedUp ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
order.algoParams->push_back(tag5);
order.algoParams->push_back(tag6);
```

#### C\#

```csharp
order.AlgoStrategy = "Vwap";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("maxPctVol", maxPctVol.ToString()));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("endTime", endTime));
order.AlgoParams.Add(new TagValue("allowPastEndTime", allowPastEndTime ? "1" : "0"));
order.AlgoParams.Add(new TagValue("noTakeLiq", noTakeLiq ? "1" : "0"));
order.AlgoParams.Add(new TagValue("speedUp", speedUp ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "Vwap"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("maxPctVol", maxPctVol.ToString()))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("endTime", endTime))
order.AlgoParams.Add(New TagValue("allowPastEndTime", BooleantoString(allowPastEndTime)))
order.AlgoParams.Add(New TagValue("noTakeLiq", BooleantoString(noTakeLiq)))
order.AlgoParams.Add(New TagValue("speedUp", BooleantoString(speedUp)))
```