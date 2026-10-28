> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

#### Java

```java
Order order = OrderSamples.LimitOrder(action, quantity, limitPrice);
order.manualOrderTime(manualOrderTime);

client.placeOrder(nextOrderId++, ContractSamples.USStockAtSmart(), OrderSamples.LimitOrderWithManualOrderTime("BUY", Decimal.get(100), 111.11, "20220314-13:00:00"));

cancelID = nextOrderId - 1;
client.cancelOrder(cancelID, "20220314-19:00:00");
```

#### C++

```cpp
Order order = OrderSamples::LimitOrder(action, quantity, limitPrice);
order.manualOrderTime = manualOrderTime;

m_pClient->placeOrder(m_orderId++, ContractSamples::USStockAtSmart(), OrderSamples::LimitOrderWithManualOrderTime("BUY", stringToDecimal("100"), 111.11, "20220314-13:00:00"));

m_pClient->cancelOrder(m_orderId - 1, "20220314-19:00:00");
```

#### C\#

```csharp
Order order = OrderSamples.LimitOrder(action, quantity, limitPrice);
order.ManualOrderTime = manualOrderTime;

client.placeOrder(nextOrderId++, ContractSamples.USStockAtSmart(), OrderSamples.LimitOrderWithManualOrderTime("BUY", Util.StringToDecimal("100"), 111.11, "20220314-13:00:00"));

client.cancelOrder(nextOrderId - 1, "20220314-19:00:00");
```

#### VB.NET

```vbnet
Dim order As Order = OrderSamples.LimitOrder(action, quantity, limitPrice)
order.ManualOrderTime = manualOrderTime

client.placeOrder(increment(nextOrderId), ContractSamples.USStockAtSmart(), OrderSamples.LimitOrderWithManualOrderTime("BUY", Util.StringToDecimal("100"), 111.11, "20220314-13:00:00"))

client.cancelOrder(nextOrderId - 1, "20220314-19:00:00")
```