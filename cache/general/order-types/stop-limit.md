> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Stop Limit

A Stop-Limit order is an instruction to submit a buy or sell limit order when the user-specified stop trigger price is attained or penetrated. The order has two basic components: the stop price and the limit price. When a trade has occurred at or through the stop price, the order becomes executable and enters the market as a limit order, which is an order to buy or sell at a specified price or better.

Products: CFD, CASH, FUT, FOP, OPT, STK, WAR

More on [Stop Limit Orders](https://www.interactivebrokers.com/en/index.php?f=608)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=stplmt)

#### Python

```python
order = Order()
order.action = action
order.orderType = "STP LMT"
order.totalQuantity = quantity
order.lmtPrice = limitPrice
order.auxPrice = stopPrice
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
      "orderType": "STP LMT",
      "price": price,
      "auxPrice": "auxPrice",
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

Price is the Limit price while auxPrice represents the stop price trigger.

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("STP LMT");
order.lmtPrice(limitPrice);
order.auxPrice(stopPrice);
order.totalQuantity(quantity);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "STP LMT";
order.totalQuantity = quantity;
order.lmtPrice = limitPrice;
order.auxPrice = stopPrice;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "STP LMT";
order.TotalQuantity = quantity;
order.LmtPrice = limitPrice;
order.AuxPrice = stopPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "STP LMT"
order.TotalQuantity = quantity
order.LmtPrice = limitPrice
order.AuxPrice = stopPrice
```