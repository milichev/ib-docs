> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Limit On Open

A Limit-on-Open (LOO) order combines a limit order with the OPG time in force to create an order that is submitted at the market's open, and that will only execute at the specified limit price or better. Orders are filled in accordance with specific exchange rules.

Products: CFD, STK, OPT, WAR

More on [Limit on Open Orders](https://www.interactivebrokers.com/en/index.php?f=590)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=moo)

#### Python

```python
order = Order()
order.action = action
order.tif = "OPG"
order.orderType = "LMT"
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
      "orderType": "LMT",
      "price": price,
      "side": "side",
      "tif": "OPG",
      "quantity": quantity
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.tif("OPG");
order.orderType("LOC");
order.totalQuantity(quantity);
order.lmtPrice(limitPrice);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.tif = "OPG";
order.totalQuantity = quantity;
order.lmtPrice = limitPrice;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.Tif = "OPG";
order.OrderType = "LMT";
order.TotalQuantity = quantity;
order.LmtPrice = limitPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.Tif = "OPG"
order.OrderType = "LMT"
order.TotalQuantity = quantity
order.LmtPrice = limitPrice
```