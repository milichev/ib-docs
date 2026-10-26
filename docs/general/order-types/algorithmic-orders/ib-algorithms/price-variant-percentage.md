[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/price-variant-percentage)

# Price Variant Percentage

[Price Variant Percentage of Volume Strategy](https://www.interactivebrokers.com/en/index.php?f=14369#collapse03) – This algo allows you to participate in volume at a user-defined rate that varies over time depending on the market price of the security. This algo allows you to buy more aggressively when the price is low and be more passive as the price increases, and just the opposite for sell orders. The order quantity and volume distribution over the time during which the order is active is determined using the target percent of volume you entered along with continuously updated volume forecasts calculated from TWS market data.

**Algo Strategy Value:** PctVolPx

**pctVol:** double. Total percentage\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**deltaPctVol:** double. Target Percentage Change Rate\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**minPctVol4Px:** double. Minimum Target Percentage\
Valid Value/Format: 0.1 (10%) – 0.5 (50%)

**maxPctVol4Px:** double. Maximum Target Percentage\
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
      "strategy": "PctVolPx",
        "strategyParameters": {
          "minPctVol4Px": 0.1,
          "maxPctVol4Px": 0.5,
          "noTakeLiq": true,
          "includeBlockTrades": true,
          "pctVol": 15.0,
          "deltaPctVol": 1.00,
          "conditionalPrice": 123.45,
          "startTime": "20250415-12:34:56",
          "endTime": "20250415-15:00:00"
        }
    }
  ]
}'
```
