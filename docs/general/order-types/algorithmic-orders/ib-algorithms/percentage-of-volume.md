[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/percentage-of-volume)

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
