[source](https://www.interactivebrokers.com/docs/general/order-types/market-orders/market-on-close)

# Market On Close

A Market On Close (MOC) order is a market order that is submitted to execute as close to the closing price as possible.

Products: CFD, FUT, STK, WAR

More on [Market On Close Orders](https://www.interactivebrokers.com/en/index.php?f=599)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=moc)

#### Python

```python
order = Order()
order.action = action
order.orderType = "MOC"
order.totalQuantity = quantity
```

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "MOC",
      "side": "side",
      "tif": "DAY",
      "quantity": quantity
    }
  ]
}
```

#### Python

```python
order = Order()
order.action = action
order.orderType = "MOC"
order.totalQuantity = quantity
```
