[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/combo-market)

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
