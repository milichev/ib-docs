[home](../../../../index.md) | [general](../../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/twap)

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
