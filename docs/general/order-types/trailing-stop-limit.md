[source](https://www.interactivebrokers.com/docs/general/order-types/trailing-stop-limit)

# Trailing Stop Limit

A trailing stop limit order is designed to allow an investor to specify a limit on the maximum possible loss, without setting a limit on the maximum possible gain. A SELL trailing stop limit moves with the market price, and continually recalculates the stop trigger price at a fixed amount below the market price, based on the user-defined "trailing" amount. The limit order price is also continually recalculated based on the limit offset. As the market price rises, both the stop price and the limit price rise by the trail amount and limit offset respectively, but if the stock price falls, the stop price remains unchanged, and when the stop price is hit a limit order is submitted at the last calculated limit price. A "Buy" trailing stop limit order is the mirror image of a sell trailing stop limit, and is generally used in falling markets.

Trailing Stop Limit orders can be sent with the trailing amount specified as an absolute amount, as in the example below, or as a percentage, specified in the trailingPercent field.

**Important:** the 'limit offset' field is set by default in the TWS/IBG settings. This setting either needs to be changed in the Order Presets, the default value accepted, or the limit price offset sent from the API as in the example below. Not both the 'limit price' and 'limit price offset' fields can be set in TRAIL LIMIT orders.

Products: BOND, CFD, CASH, FUT, FOP, OPT, STK, WAR

More on [Trailing Stop Limit Orders](https://www.interactivebrokers.com/en/index.php?f=606)

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "TRAILLMT",
      "price": price,
      "auxPrice": "auxPrice",
      "side": "side",
      "tif": "tif",
      "trailingAmt": trailingAmt,
      "trailingType": "trailingType",
      "quantity": quantity
    }
  ]
}
```
