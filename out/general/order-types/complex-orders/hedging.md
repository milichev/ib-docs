[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/complex-orders/hedging)

# Hedging

Hedging orders are similar to Bracket Orders. With hedging order, a child order is submitted only on execution of the parent. Orders can be hedged by an attached forex trade, Beta hedge, or Pair Trade, just as in TWS.

For an example of a forex hedge, when buying a contract on a currency other than your base, you can attach an FX order to convert base currency to the currency of the contract to cover the cost of the trade thanks to the TWS API's Attaching Orders mechanism.

More on [Hedging Orders in TWS](https://www.interactivebrokers.com/en/software/tws/attachedordertop.htm)

Note that in some cases it will be necessary to include a small delay of 50 ms or less after placing the parent order for processing, before placing the child order. Otherwise the error "10006: Missing parent order" will be triggered.

#### Python

```python
 @staticmethod
def MarketFHedge(parentOrderId:int, action:str):
    #FX Hedge orders can only have a quantity of 0
    order = OrderSamples.MarketOrder(action, 0)
    order.parentId = parentOrderId
    order.hedgeType = "F"
    return order

# Parent order on a contract which currency differs from your base currency
parent = OrderSamples.LimitOrder("BUY", 100, 10)
parent.orderId = self.nextOrderId()
parent.transmit = False

# Hedge on the currency conversion
hedge = OrderSamples.MarketFHedge(parent.orderId, "BUY")

# Place the parent first...
self.placeOrder(parent.orderId, ContractSamples.EuropeanStock(), parent)

# Then the hedge order
self.placeOrder(self.nextOrderId(), ContractSamples.EurGbpFx(), hedge)
```
