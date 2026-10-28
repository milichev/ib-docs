[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/adding-a-profit-taker-and-stop-loss)

# Adding a Profit Taker and Stop Loss

Users are able to bracket their order in two distinct ways:

* Manually construct each child of the parent. See Bracket Orders for more details.
* Adding child orders based on TWS Presets.

Adding a profit taker and stop loss from the same order object automated the order bracket process so that only order ID needs to be provided. This is best for users looking to trade with identical bracket parameters across orders.

#### Profit Taker

A profit taker can be added to an order using the `ptOrderId` and `ptOrderType` Order attributes.

**PtOrderId** must be a unique order identifier.\
Consider using [EWrapper.NextValidId](../../next-valid-id/introduction.md)

**PtOrderType** must always be set to "PRESET".\
Be sure to review your [Presets in Trader Workstation](https://www.ibkrguides.com/traderworkstation/configure-presets.htm) prior to submitting orders as the Profit taker details will mirror these details as set.

```
order = Order()
order.orderId = 10000
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 256
order.tif = "DAY"

order.ptOrderType = "PRESET"
order.ptOrderId = 10001
```

#### Stop Loss

A stop loss can be added to an order using the `slOrderId` and `slOrderType` Order attributes.

**SlOrderId** must be a unique order identifier.\
Consider using [EWrapper.NextValidId](../../next-valid-id/introduction.md)

**SlOrderType** must always be set to "PRESET".\
Be sure to review your [Presets in Trader Workstation](https://www.ibkrguides.com/traderworkstation/configure-presets.htm) prior to submitting orders as the Stop loss details will mirror these details as set.

```
order = Order()
order.orderId = 10000
order.action = "BUY"
order.orderType = "LMT"
order.totalQuantity = 100
order.lmtPrice = 256
order.tif = "DAY"

order.slOrderType = "PRESET"
order.slOrderId = 10002
```
