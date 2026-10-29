[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/combo-limit-with-price-per-leg)

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
