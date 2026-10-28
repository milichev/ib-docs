> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Midprice

A [Midprice](https://www.interactivebrokers.com/en/index.php?f=36735) order is designed to split the difference between the bid and ask prices, and fill at the current midpoint of the NBBO or better. Set an optional price cap to define the highest price (for a buy order) or the lowest price (for a sell order) you are willing to accept. Smart-routing to US stocks only.

* Products: US STK
* Exchanges: Smart-routing only

**Set OrderType to** "MIDPRICE".

No algo params or strategy required.

#### Python

```python
order = Order()
order.action = action
order.orderType = "MIDPRICE"
order.totalQuantity = quantity
order.lmtPrice = priceCap
```

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
    "orders":[
        {
            "conid": {{ conid }},
            "orderType": "MIDPRICE",
            "price": {{ price }},
            "quantity": {{ quantity }},
            "side": {{ side }},
            "tif": {{ tif }}
        }
    ]
}'
```

For the Web API, a price must be included. If no price cap is desired, '"price": 0' should be included.

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("MIDPRICE");
order.totalQuantity(quantity);
order.lmtPrice(priceCap); 
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "MIDPRICE";
order.totalQuantity = quantity;
order.lmtPrice = priceCap; 
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.OrderType = "MIDPRICE";
order.TotalQuantity = quantity;
order.LmtPrice = priceCap;
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.OrderType = "MIDPRICE"
order.TotalQuantity = quantity
order.LmtPrice = priceCap  ' optional
```