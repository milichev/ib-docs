> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Forex Cash Quantity Order

Forex orders can be placed in denomination of second currency in pair using cashQty field.

Products: CASH

More on [Forex Cash Quantity Orders](https://www.interactivebrokers.com/en/index.php?f=23876#963-02)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.lmtPrice = limitPrice
order.cashQty = cashQty
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
      "orderType": "orderType",
      "price": price,
      "side": "side",
      "tif": "tif",
      "fxQty": fxQty,
      "isCcyConv": true
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.lmtPrice(limitPrice);
order.cashQty(cashQty);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.lmtPrice = limitPrice;
order.cashQty = cashQty;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LMT";
order.LmtPrice = limitPrice;
order.CashQty = cashQty;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LMT"
order.LmtPrice = limitPrice
order.CashQty = cashQty
```