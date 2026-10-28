[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/scale-orders)

# Scale Orders

A scale order automatically creates a series of buy (sell) limit orders with incrementally lower (higher) prices, based on your original limit order. You create Scale orders in the TWS ScaleTrader tool. For more information about Scale Orders, see the [TWS Users' Guide](https://www.ibkrguides.com/traderworkstation/basic-scale-orders.htm).

NOTE: Scale orders are only available via TWS and the TWSAPI.

#### Base Order

A scale order still requires the base parameters of a standard.

This requires a base of Action, OrderType, TotalQuantity, LmtPrice, and Tif.

Please be aware that the TotalQuantity of the order is reflective of the "Maxmimum Position" field for Scale Orders.

```
order = Order()
order.action = "BUY"
order.orderType = "LMT"        
order.totalQuantity = 1000
order.lmtPrice = 273
order.tif = 'DAY'
```

#### Scale Order Parameters

**sclaeInitLevelSize:** Initial Component Size\
**scaleSubsLevelSize:** Subsequent Comp. Size\
**scalePriceIncrement:** Price Increment\
**scaleRandomPercent:** Randomize size by +/- 55%

```
order.scaleInitLevelSize  = 200
order.scaleSubsLevelSize  = 33
order.scalePriceIncrement = 10
order.scaleRandomPercent = False
```

#### Auto Price Adjustment

**scalePriceAdjustValue:** Amount to increase starting price by.\
**scalePriceAdjustInterval:** How many seconds between price increases.

```
order.scalePriceAdjustValue = 400
order.scalePriceAdjustInterval = 100
```

#### Profit Taker

**scaleProfitOffset:** Profit Offset of the profit taker.\
**scaleAutoReset:** Determine if the size should be reset after retrieving profit.\
**scaleInitPosition:** Initial position to take for the profit taker.\
**scaleInitFillQty:** Filled initial component size.

```
order.scaleProfitOffset = 6
order.scaleAutoReset = False
order.scaleInitPosition = 7
order.scaleInitFillQty = 8
```
