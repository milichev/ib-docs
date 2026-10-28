> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Volatility

Specific to US options, investors are able to create and enter Volatility-type orders for options and combinations rather than price orders. Option traders may wish to trade and position for movements in the price of the option determined by its implied volatility. Because implied volatility is a key determinant of the premium on an option, traders position in specific contract months in an effort to take advantage of perceived changes in implied volatility arising before, during or after earnings or when company specific or broad market volatility is predicted to change. In order to create a Volatility order, clients must first create a Volatility Trader page from the Trading Tools menu and as they enter option contracts, premiums will display in percentage terms rather than premium. The buy/sell process is the same as for regular orders priced in premium terms except that the client can limit the volatility level they are willing to pay or receive.

Products: FOP, OPT

More on [Volatility Type Orders](https://www.interactivebrokers.com/en/index.php?f=604)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=volat)

#### Python

```python
order = Order()
order.action = action
order.orderType = "VOL"
order.totalQuantity = quantity
order.volatility = volatilityPercent#Expressed in percentage (40%)
order.volatilityType = volatilityType# 1=daily, 2=annual
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("VOL");
order.volatility(volatilityPercent);//Expressed in percentage (40%)
order.volatilityType(volatilityType);// 1=daily, 2=annual
order.totalQuantity(quantity);
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "VOL";
order.totalQuantity = quantity;
order.volatility = volatilityPercent; //Expressed in percentage (40%)
order.volatilityType = volatilityType; // 1=daily, 2=annual
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "VOL";
order.TotalQuantity = quantity;
order.Volatility = volatilityPercent;//Expressed in percentage (40%)
order.VolatilityType = volatilityType;// 1=daily, 2=annual
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "VOL"
order.TotalQuantity = quantity
order.Volatility = volatilityPercent  'Expressed in percentage (40%)
order.VolatilityType = volatilityType  ' 1=daily, 2=annual
```