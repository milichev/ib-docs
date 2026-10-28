> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Order Placement

For advisors to place orders to their [allocation groups](/docs/tws-api/doc/financial-advisors/groups-and-profiles#replace-fa-allocations) users would simply declare their allocation group name in the order object. This would be done with the Order's faGroup field. The example to the right references a standard market order placed to our allocation group, MyTestProfile.

#### Python

```python
order = Order()
order.action = "BUY"
order.orderType = "MKT"
order.totalQuantity = 50
order.faGroup = "MyTestProfile"
```

#### Java

```java
Order order = new Order();
order.action("BUY");
order.orderType("MKT");
order.totalQuantity(50);
order.faGroup("MyTestProfile");
```

#### C++

```cpp
Order order;
order.action = "BUY";
order.orderType = "MKT";
order.totalQuantity = 50;
order.faGroup = "MyTestProfile";
```

#### C\#

```csharp
Order order = new Order();
order.Action = "BUY";
order.OrderType = "MKT";
order.TotalQuantity = 50;
order.FaGroup = "MyTestProfile";
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = "BUY"
order.OrderType = "MKT"
order.TotalQuantity = 50
order.FaGroup = "MyTestProfile"
```