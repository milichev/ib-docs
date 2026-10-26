[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/arrival-price)

# ArrivalPrice

The [Arrival Price](https://www.interactivebrokers.com/en/index.php?f=1122) algorithmic order type will attempt to achieve, over the course of the order, the bid/ask midpoint at the time the order is submitted. The Arrival Price algo is designed to keep hidden orders that will impact a high percentage of the average daily volume (ADV). The pace of execution is determined by the user-assigned level of risk aversion and the user-defined target percent of average daily volume. How quickly the order is submitted during the day is determined by the level of urgency: the higher the urgency the faster it will execute but will expose it to a greater market impact. Market impact can be lessened by assigning lesser urgency, which is likely to lengthen the duration of the order. The user can set the max percent of ADV from 1 to 50%. The order entry screen allows the user to determine when the order will start and end regardless of whether or not the full amount of the order has been filled. By checking the box marked Allow trading past end time the algo will continue to work past the specified end time in an effort to fill the remaining portion of the order.

**Algo Strategy Value:** ArrivalPx

**maxPctVol:** double. Maximum percentage of ADV\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**riskAversion:** String. Urgency/risk aversion\
Valid Value/Format: Get Done, Aggressive, Neutral, Passive

**startTime:** String. Algorithm starting time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**endTime:** String. Algorithm ending time\
Valid Value/Format: hh:mm:ss TMZ or YYYYMMDD-hh:mm:ss TMZ

**allowPastEndTime:** bool. Allow trading past end time\
Valid Value/Format: 1 (true) or 0 (false)

**forceCompletion:** bool. Attempt completion by the end of the day\
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
      "strategy": "ArrivalPx",
        "strategyParameters": {
          "maxPctVol": 0.1,
          "riskAversion": true,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00",
          "allowPastEndTime": true,
          "forceCompletion": true
        }
    }
  ]
}'
```
