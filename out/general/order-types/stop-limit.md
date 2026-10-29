[home](../../index.md) | [general](../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/stop-limit)

# Stop Limit

A Stop-Limit order is an instruction to submit a buy or sell limit order when the user-specified stop trigger price is attained or penetrated. The order has two basic components: the stop price and the limit price. When a trade has occurred at or through the stop price, the order becomes executable and enters the market as a limit order, which is an order to buy or sell at a specified price or better.

Products: CFD, CASH, FUT, FOP, OPT, STK, WAR

More on [Stop Limit Orders](https://www.interactivebrokers.com/en/index.php?f=608)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=stplmt)

#### Python

```python
order = Order()
order.action = action
order.orderType = "STP LMT"
order.totalQuantity = quantity
order.lmtPrice = limitPrice
order.auxPrice = stopPrice
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
      "orderType": "STP LMT",
      "price": price,
      "auxPrice": "auxPrice",
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

Price is the Limit price while auxPrice represents the stop price trigger.
