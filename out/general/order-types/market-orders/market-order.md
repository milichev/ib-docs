[source](https://www.interactivebrokers.com/docs/general/order-types/market-orders/market-order)

# Market Order

A Market order is an order to buy or sell at the market bid or offer price. A market order may increase the likelihood of a fill and the speed of execution, but unlike the Limit order a Market order provides no price protection and may fill at a price far lower/higher than the current displayed bid/ask.

Products: BOND, CFD, EFP, CASH, FUND, FUT, FOP, OPT, STK, WAR

More on [Market Orders](https://www.interactivebrokers.com/en/index.php?f=602)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=mkt)

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "MKT",
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("MKT");
order.totalQuantity(quantity);
```
