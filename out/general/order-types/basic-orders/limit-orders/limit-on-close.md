[home](../../../../index.md) | [general](../../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/limit-orders/limit-on-close)

# Limit On Close

A Limit-on-close (LOC) order will be submitted at the close and will execute if the closing price is at or better than the submitted limit price.

Products: CFD, FUT, STK, WAR

More on [Limit On Close Orders](https://www.interactivebrokers.com/en/index.php?f=591)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=loc)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LOC"
order.totalQuantity = quantity
order.lmtPrice = limitPrice
```

#### Abap

```abap
<pre class="EnlighterJSRAW" data-enlighter-language="abap">curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LOC",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```
