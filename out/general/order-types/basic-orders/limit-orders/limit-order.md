[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/limit-orders/limit-order)

# Limit Order

A Limit order is an order to buy or sell at a specified price or better. The Limit order ensures that if the order fills, it will not fill at a price less favorable than your limit price, but it does not guarantee a fill.

Products: BOND, CASH, CFD, CMDTY, FUT, FOP, OPT, STK, WAR

More on [Limit Orders](https://www.interactivebrokers.com/en/index.php?f=593)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=lmt)

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
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
      "quantity": quantity
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.lmtPrice(limitPrice);
order.tif(TimeInForce.DAY);
```
