[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/limit-orders/limit-if-touched)

# Limit If Touched

A Limit if Touched is an order to buy (or sell) a contract at a specified price or better, below (or above) the market. This order is held in the system until the trigger price is touched. An LIT order is similar to a stop limit order, except that an LIT sell order is placed above the current market price, and a stop limit sell order is placed below.

Products: BOND, CASH, CFD, CMDTY, FUT, FOP, OPT, STK, WAR

More on [Limit If Touched Orders](https://www.interactivebrokers.com/en/index.php?f=592)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=lit)

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LIT",
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
order.orderType("LIT");
order.totalQuantity(quantity);
order.lmtPrice(limitPrice);
order.auxPrice(triggerPrice);
```
