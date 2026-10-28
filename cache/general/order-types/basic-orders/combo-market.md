> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Combo Market

Create combination orders that include options, stock and futures legs (stock legs can be included if the order is routed through SmartRouting). Although a combination/spread order is constructed of separate legs, it is executed as a single transaction if it is routed directly to an exchange. For combination orders that are SmartRouted, each leg may be executed separately to ensure best execution.

Products: OPT, STK, FUT

#### Python

```python
order = Order()
order.action = action
order.orderType = "MKT"
order.totalQuantity = quantity
if nonGuaranteed:
	order.smartComboRoutingParams = []
	order.smartComboRoutingParams.append(TagValue("NonGuaranteed", "1"))
```

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conidex": "{spread_conid};;;{leg_conid1}/{ratio},{leg_conid2}/{ratio}",
      "orderType": "orderType",
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

See the \[Client Portal Combo / Spread Orders section]

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("MKT");
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
order.orderType = "MKT";
order.totalQuantity = quantity;
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
order.OrderType = "MKT";
order.TotalQuantity = quantity;
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
order.OrderType = "MKT"
order.TotalQuantity = quantity
If (nonGuaranteed) Then
	order.SmartComboRoutingParams = New List(Of TagValue)
	order.SmartComboRoutingParams.Add(New TagValue("NonGuaranteed", "1"))
End If
```