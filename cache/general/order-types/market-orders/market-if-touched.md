> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Market If Touched

A Market If Touched (MIT) is an order to buy (or sell) a contract below (or above) the market. Its purpose is to take advantage of sudden or unexpected changes in share or other prices and provides investors with a trigger price to set an order in motion. Investors may be waiting for excessive strength (or weakness) to cease, which might be represented by a specific price point. MIT orders can be used to determine whether or not to enter the market once a specific price level has been achieved. This order is held in the system until the trigger price is touched, and is then submitted as a market order. An MIT order is similar to a stop order, except that an MIT sell order is placed above the current market price, and a stop sell order is placed below

Products: BOND, CFD, CASH, FUT, FOP, OPT, STK, WAR

More on [Market If Touched Orders](https://www.interactivebrokers.com/en/index.php?f=600)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=mit)

#### Python

```python
order = Order()
order.action = action
order.orderType = "MIT"
order.totalQuantity = quantity
order.auxPrice = price
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
      "orderType": "MIT",
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
order.orderType("MIT");
order.totalQuantity(quantity);
order.auxPrice(price);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "MIT";
order.totalQuantity = quantity;
order.auxPrice = price;
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "MIT";
order.TotalQuantity = quantity;
order.AuxPrice = price;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "MIT"
order.TotalQuantity = quantity
order.AuxPrice = price
```