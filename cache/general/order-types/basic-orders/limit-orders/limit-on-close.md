> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Limit On Close

A Limit-on-close (LOC) order will be submitted at the close and will execute if the closing price is at or better than the submitted limit price.

Products: CFD, FUT, STK, WAR

More on [Limit On Close Orders](https://www.interactivebrokers.com/en/index.php?f=591)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=loc)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LOC"
order.totalQuantity = quantity
order.lmtPrice = limitPrice
```

#### Abap

```abap
<pre class="EnlighterJSRAW" data-enlighter-language="abap">curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LOC",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LOC");
order.totalQuantity(quantity);
order.lmtPrice(limitPrice);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LOC";
order.totalQuantity = quantity;
order.lmtPrice = limitPrice;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "LOC";
order.TotalQuantity = quantity;
order.LmtPrice = limitPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "LOC"
order.TotalQuantity = quantity
order.LmtPrice = limitPrice
```