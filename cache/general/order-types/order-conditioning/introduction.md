> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

Order Conditions are a set of parameters attached to an order that allow the order to either be placed or cancel upon achieving the condition criteria. There are 6 unique Order Conditions that can be applied to a given order: Price, Time, Margin, Execution, Volume, and PercentChange.

Order Conditions can be applied to nearly any order and more than one condition can be attached to an individual order using to be Inclusive, "AND", or Exclusive, "OR".

More information on Order Conditions can be found [here](https://www.ibkrguides.com/riskprofile/usersguidebook/ordertypes/conditionaltest.htm).

For the sake of simplicity, all Condition Orders below will be based on an example order, shown here. The additional content will be included in each order's content.

#### Python

```python
base_order = Order()
base_order.action = action
base_order.orderType = "MKT"
base_order.totalQuantity = quantity
base_order.conditionsCancelOrder = False
```

#### Java

```java
Order base_order= new Order();
base_order.action(action);
base_order.orderType("MKT");
base_order.totalQuantity(quantity);
base_order.conditionsCancelOrder(false);
```

#### C++

```cpp
Order base_order;
base_order.action = action;
base_order.orderType = "MKT";
base_order.totalQuantity = quantity;
base_order.conditionsCancelOrder = false;
```

#### C\#

```csharp
Order base_order= new Order();
base_order.Action = action;
base_order.OrderType = "MKT";
base_order.TotalQuantity = quantity;
base_order.ConditionsCancelOrder = false;
```

#### VB.NET

```vbnet
Dim base_order As Order = New Order
base_order.Action = action
base_order.OrderType = "MKT"
base_order.TotalQuantity = quantity
base_order.ConditionsCancelOrder = false
```