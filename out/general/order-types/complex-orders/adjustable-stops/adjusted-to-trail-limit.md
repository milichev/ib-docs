[home](../../../../index.md) | [general](../../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/adjustable-stops/adjusted-to-trail-limit)

# Adjusted to Trail Limit

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT".

**AdjustedStopPrice:** The trail order's trigger price after being adjusted.

**AdjustedStopLimitPrice:** The trailing order's limit price for execution after being adjusted.

**AdjustableTrailingUnit:** Dictate how trail should be adjusted.\
This can be "amt" or "%".

**AdjustedTrailingAmount:** The value to trail by. This will be a set amount or percentage based on the AdjustedTrailingUnit.

#### Python

```python
order = Order()
order.action = action
order.orderType = "STP"
order.auxPrice = stopPrice
order.totalQuantity = quantity

order.triggerPrice = triggerPrice
order.adjustedOrderType = "TRAIL LIMIT"
order.adjustedStopPrice = adjustedStopPrice
order.adjustedStopLimitPrice = adjustedStopLimitPrice
order.adjustableTrailingUnit = trailUnit
order.adjustedTrailingAmount = adjustedTrailAmount
```
