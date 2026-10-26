[source](https://www.interactivebrokers.com/docs/general/order-types/stop)

# Stop

A Stop order is an instruction to submit a buy or sell market order if and when the user-specified stop trigger price is attained or penetrated. A Stop order is not guaranteed a specific execution price and may execute significantly away from its stop price. A Sell Stop order is always placed below the current market price and is typically used to limit a loss or protect a profit on a long stock position. A Buy Stop order is always placed above the current market price. It is typically used to limit a loss or help protect a profit on a short sale.

Products: CFD, BAG, CASH, FUT, FOP, OPT, STK, WAR

More on [Stop Orders](https://www.interactivebrokers.com/en/index.php?f=609)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=stp)

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "STP",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```
