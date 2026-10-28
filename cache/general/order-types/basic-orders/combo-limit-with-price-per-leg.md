> This page is for General.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Combo Limit with Price per Leg

Create combination orders that include options, stock and futures legs (stock legs can be included if the order is routed through SmartRouting). Although a combination/spread order is constructed of separate legs, it is executed as a single transaction if it is routed directly to an exchange. For combination orders that are SmartRouted, each leg may be executed separately to ensure best execution.

Products: OPT, STK, FUT

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.totalQuantity = quantity
order.orderComboLegs = []

for price in legPrices:
	comboLeg = OrderComboLeg()
	comboLeg.price = price
	order.orderComboLegs.append(comboLeg)

if nonGuaranteed:
	order.smartComboRoutingParams = []
	order.smartComboRoutingParams.append(TagValue("NonGuaranteed", "1"))
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.totalQuantity(quantity);
order.orderComboLegs(new ArrayList<>());

for(double price : legPrices) {
	OrderComboLeg comboLeg = new OrderComboLeg();
	comboLeg.price(5.0);
	order.orderComboLegs().add(comboLeg);
}

if (nonGuaranteed)
{
	order.smartComboRoutingParams().add(new TagValue("NonGuaranteed", "1"));
}
```

#### C++

```cpp
Order order;
order.action = action;
order.orderType = "LMT";
order.totalQuantity = quantity;
order.orderComboLegs.reset(new Order::OrderComboLegList());
for(unsigned int i = 0; i < legprices.size(); i++){
	OrderComboLegSPtr comboLeg(new OrderComboLeg());
	comboLeg->price = legprices[i];
	order.orderComboLegs->push_back(comboLeg);
}
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
order.OrderType = "LMT";
order.TotalQuantity = quantity;
order.OrderComboLegs = new List<OrderComboLeg>();
foreach(double price in legPrices)
{
	OrderComboLeg comboLeg = new OrderComboLeg();
	comboLeg.Price = 5.0;
	order.OrderComboLegs.Add(comboLeg);
}           
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
order.OrderType = "LMT"
order.TotalQuantity = quantity
order.OrderComboLegs = New List(Of OrderComboLeg)
For Each price As Double In legPrices
	Dim ComboLeg As OrderComboLeg = New OrderComboLeg
	ComboLeg.Price = 5.0
	order.OrderComboLegs.Add(ComboLeg)
Next price
If (nonGuaranteed) Then
	order.SmartComboRoutingParams = New List(Of TagValue)
	order.SmartComboRoutingParams.Add(New TagValue("NonGuaranteed", "1"))
End If
```