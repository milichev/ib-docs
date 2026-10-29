[home](../../../../index.md) | [general](../../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/limit-orders/limit-order-with-manual-order-time)

# Limit Order With Manual Order Time

The Limit Order With Manual Order Time is a Limit Order with ManualOrderTime property.

**Placing a Limit Order With Manual Order Time**\
The *Manual Order Time* field is required for, and becomes editable for, "manual" orders, which are orders that originate from a client (whether by phone, email, chat, verbally from the floor, from another desk, etc.) and are then entered into the system.\
The *Manual Order Time* field is not used for client orders received electronically, nor for orders that originate from the account manager (with discretion) in the client's accounts, or when an order is allocated to ALL accounts or among multiple accounts using an account group or model portfolio.

**Canceling a Limit Order With Manual Order Time**\
The *Manual Order Cancel Time* field is required for, and becomes editable for, "manual" order cancelations, which are order cancelations that originate from a client (whether by phone, email, chat, verbally from the floor, from another desk, etc.) and are then entered into the system.\
The *Manual Order Cancel Time* field is not used for client orders cancelations received electronically, nor for orders that originate from the account manager (with discretion) in the client's accounts, or when an order is allocated to ALL accounts or among multiple accounts using an account group or model portfolio.

#### Python

```python
order = OrderSamples.LimitOrder(action, quantity, limitPrice)
order.manualOrderTime = manualOrderTime

self.placeOrder(self.nextOrderId(), ContractSamples.USStockAtSmart(), OrderSamples.LimitOrderWithManualOrderTime("BUY", Decimal("100"), 111.11, "20220314-13:00:00"))

self.cancelOrder(self.simplePlaceOid, "20220303-13:00:00")
```
