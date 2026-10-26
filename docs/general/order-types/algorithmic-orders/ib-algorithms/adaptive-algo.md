[source](https://www.interactivebrokers.com/docs/general/order-types/algorithmic-orders/ib-algorithms/adaptive-algo)

# Adaptive Algo

The [Adaptive Algo](https://www.interactivebrokers.com/en/index.php?f=19091) combines IB's Smart routing capabilities with user-defined priority settings in an effort to achieve further cost efficiency at the point of execution. Using the Adaptive algo leads to better execution prices on average than for regular limit or market orders.

**Algo Strategy Value:** Adaptive

**adaptivePriority:** String. The 'Priority' selector determines the time taken to scan for better execution prices. The 'Urgent' setting scans only briefly, while the 'Patient' scan works more slowly and has a higher chance of achieving a better overall fill for your order.\
Valid Value/Format: Urgent > Normal > Patient

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
      "strategy": "Adaptive",
        "strategyParameters": {
          "adaptivePriority": "priority"
        }
    }
  ]
}'
```
