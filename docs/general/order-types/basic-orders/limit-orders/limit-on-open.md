[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/limit-orders/limit-on-open)

# Limit On Open

A Limit-on-Open (LOO) order combines a limit order with the OPG time in force to create an order that is submitted at the market's open, and that will only execute at the specified limit price or better. Orders are filled in accordance with specific exchange rules.

Products: CFD, STK, OPT, WAR

More on [Limit on Open Orders](https://www.interactivebrokers.com/en/index.php?f=590)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=moo)

#### Abap

```abap
<pre class="EnlighterJSRAW" data-enlighter-language="abap">curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LMT",
      "price": price,
      "side": "side",
      "tif": "OPG",
      "quantity": quantity
    }
  ]
}
```
