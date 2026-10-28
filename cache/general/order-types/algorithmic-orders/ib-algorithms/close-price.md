> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Close Price

Investors submitting market or limit orders into the closing auction may adversely affect the closing price, especially when the size of the order is large relative to the average close auction volume. In order to help investors attempting to execute towards the end of the trading session we have developed the [Close Price](https://www.interactivebrokers.com/en/index.php?f=19749) algo Strategy. This algo breaks down large order amounts and determines the timing of order entry so that it will continuously execute in order to minimize slippage. The start and pace of execution are determined by the user who assigns a level of market risk and specifies the target percentage of volume, while the algo considers the prior volatility of the stock.

**Algo Strategy Value:** ClosePx

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**riskAversion:** String. Urgency/risk aversion\
Valid Value/Format: Get Done, Aggressive, Neutral, Passive

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**forceCompletion:** bool. Attempt completion by the end of the day\
Valid Value/Format: 1 (true) or 0 (false)

#### Python

```python
order.algoStrategy = "ClosePx"
order.algoParams = []
order.algoParams.append(TagValue("maxPctVol", maxPctVol))
order.algoParams.append(TagValue("riskAversion", riskAversion))
order.algoParams.append(TagValue("startTime", startTime))
order.algoParams.append(TagValue("forceCompletion", int(forceCompletion)))
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
      "strategy": "ClosePx",
        "strategyParameters": {
          "riskAversion": "Aggressive",
          "forceCompletion": true,
          "startTime": "20250415-12:34:56",
          "maxPctVol": 0.1
        }
    }
  ]
}'
```

#### Java

```java
order.algoStrategy("ClosePx");
order.algoParams(new ArrayList());
order.algoParams().add(new TagValue("maxPctVol", String.valueOf(maxPctVol)));
order.algoParams().add(new TagValue("riskAversion", riskAversion));
order.algoParams().add(new TagValue("startTime", startTime));
order.algoParams().add(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
```

#### C++

```cpp
order.algoStrategy = "ClosePx";
order.algoParams.reset(new TagValueList());
TagValueSPtr tag1(new TagValue("maxPctVol", std::to_string(maxPctVol)));
TagValueSPtr tag2(new TagValue("riskAversion",riskAversion));
TagValueSPtr tag3(new TagValue("startTime", startTime));
TagValueSPtr tag4(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
order.algoParams->push_back(tag1);
order.algoParams->push_back(tag2);
order.algoParams->push_back(tag3);
order.algoParams->push_back(tag4);
```

#### C\#

```csharp
order.AlgoStrategy = "ClosePx";
order.AlgoParams = new List();
order.AlgoParams.Add(new TagValue("maxPctVol", maxPctVol.ToString()));
order.AlgoParams.Add(new TagValue("riskAversion", riskAversion));
order.AlgoParams.Add(new TagValue("startTime", startTime));
order.AlgoParams.Add(new TagValue("forceCompletion", forceCompletion ? "1" : "0"));
```

#### VB.NET

```vbnet
order.AlgoStrategy = "ClosePx"
order.AlgoParams = New List(Of TagValue)
order.AlgoParams.Add(New TagValue("maxPctVol", maxPctVol.ToString()))
order.AlgoParams.Add(New TagValue("riskAversion", riskAversion))
order.AlgoParams.Add(New TagValue("startTime", startTime))
order.AlgoParams.Add(New TagValue("forceCompletion", BooleantoString(forceCompletion)))
```