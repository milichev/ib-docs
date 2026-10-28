> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# TWS API: Trailing Stop

**Trail Offset.** Required.\
One of the following class attributes must be supplied with the order ticket.

* **Absolute Offset:** `Order.auxPrice`
* **Relative Offset:** `Order.trailingPercent`\
  Note that the value assigned to `trailingPercent` will be interpreted as a true percent, e.g., `trailingPercent = 0.50` becomes 0.50% = 0.0050.

**Stop Price:** `Order.trailStopPrice`

In the example to the right, we have outlined two Trailing Stop orders with explicit Stop Prices via `order.trailStopPrice`.\
In the first order, we supply a relative offset of 2% using `order.TrailStopPercent`.\
In the second order, we supply an absolute offset of 3 units of currency using `order.auxPrice`.

#### Python

```python
order = Order()
order.orderType = "TRAIL"
order.trailStopPrice = 100
order.trailingPercent = 2
```

#### Python

```python
order = Order()
order.orderType = "TRAIL"
order.trailStopPrice = 100
order.auxPrice = 3
```

#### Java

```java
Order order = new Order();
order.orderType("TRAIL");
order.trailStopPrice(100);
order.trailingPercent(2);
```

#### Java

```java
Order order = new Order();
order.orderType("TRAIL");
order.trailStopPrice(100);
order.auxPrice(3);
```

#### C++

```cpp
Order order;
order.orderType = "TRAIL";
order.trailStopPrice = 100;
order.trailingPercent = 2;
```

#### C++

```cpp
Order order;
order.orderType = "TRAIL";
order.trailStopPrice = 100;
order.auxPrice = 3;
```

#### C\#

```csharp
Order order = new Order();
order.OrderType = "TRAIL";
order.TrailStopPrice = 100;
order.TrailingPercent = 2;
```

#### C\#

```csharp
Order order = new Order();
order.OrderType = "TRAIL";
order.TrailStopPrice = 100;
order.AuxPrice= 3;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.OrderType = "TRAIL"
order.TrailStopPrice = 100
order.TrailingPercent = 2
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.OrderType = "TRAIL"
order.TrailStopPrice = 100
order.AuxPrice= 3
```