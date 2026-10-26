[source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/adjustable-stops/adjusted-to-trail)

# Adjusted to Trail

**TriggerPrice:** Price threshold for when the order type should just to the AdjustedOrderType value.

**AdjustedOrderType:** Resulting order type in the event an order passes the triggerPrice threshold.\
This can be "STP", "STP LMT", "TRAIL", "TRAILING LIMIT".

**AdjustedStopPrice:** The trail order's trigger price after being adjusted.

**AdjustableTrailingUnit:** Dictate how trail should be adjusted.\
This can be "amt" or "%".

**AdjustedTrailingAmount:** The value to trail by. This will be a set amount or percentage based on the AdjustedTrailingUnit.
