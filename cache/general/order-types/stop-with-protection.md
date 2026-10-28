> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Stop with Protection

A Stop with Protection order combines the functionality of a stop limit order with a market with protection order. The order is set to trigger at a specified stop price. When the stop price is penetrated, the order is triggered as a market with protection order, which means that it will fill within a specified protected price range equal to the trigger price +/- the exchange-defined protection point range. Any portion of the order that does not fill within this protected range is submitted as a limit order at the exchange-defined trigger price +/- the protection points.

Products: FUT

More on [Stop with Protection](https://www.interactivebrokers.com/en/index.php?f=3077) Orders

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=stpprot)

#### Python

```python
order = Order()
order.totalQuantity = quantity
order.action = action
order.orderType = "STP PRT"
order.auxPrice = stopPrice
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("STP PRT");
order.auxPrice(stopPrice);
order.totalQuantity(quantity);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "STP PRT";
order.totalQuantity = quantity;
order.auxPrice = stopPrice;
```

#### C\#

```csharp
Order order = new Order();
order.TotalQuantity = quantity;
order.Action = action;
order.OrderType = "STP PRT";
order.AuxPrice = stopPrice;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.TotalQuantity = quantity
order.Action = action
order.OrderType = "STP PRT"
order.AuxPrice = stopPrice
```