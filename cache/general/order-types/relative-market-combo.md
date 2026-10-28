> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Relative Market Combo

Create combination orders that include options, stock and futures legs (stock legs can be included if the order is routed through SmartRouting). Although a combination/spread order is constructed of separate legs, it is executed as a single transaction if it is routed directly to an exchange. For combination orders that are SmartRouted, each leg may be executed separately to ensure best execution.

Products: OPT, STK, FUT

#### Python

```python
order = Order()
order.action = action
order.totalQuantity = quantity
order.orderType = "REL + MKT"

if nonGuaranteed:
	order.smartComboRoutingParams = []
	order.smartComboRoutingParams.append(TagValue("NonGuaranteed", "1"))
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("REL + MKT");
order.totalQuantity(quantity);
if (nonGuaranteed)
{
	order.smartComboRoutingParams().add(new TagValue("NonGuaranteed", "1"));
}
```

#### C++

```cpp
Order order;
order.action = action;
order.totalQuantity = quantity;
order.orderType = "Rel + MKT";
if(nonGuaranteed){
	TagValueSPtr tag1(new TagValue("NonGuaranteed", "1"));
	order.smartComboRoutingParams.reset(new TagValueList());
	order.smartComboRoutingParams->push_back(tag1);
}
```

#### C\#

```csharp
Order order = new Order();
order.Action = action;
order.TotalQuantity = quantity;
order.OrderType = "REL + MKT";
if (nonGuaranteed)
{
	order.SmartComboRoutingParams = new List<TagValue>();
	order.SmartComboRoutingParams.Add(new TagValue("NonGuaranteed", "1"));
}
```

#### VB.NET

```vbnet
Dim order As Order = New Order
order.Action = action
order.TotalQuantity = quantity
order.OrderType = "REL + MKT"
If (nonGuaranteed) Then
	order.SmartComboRoutingParams = New List(Of TagValue)
	order.SmartComboRoutingParams.Add(New TagValue("NonGuaranteed", "1"))
End If
```