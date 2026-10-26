[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/close-price)

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
