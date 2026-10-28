[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/time-variant-percentage)

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
