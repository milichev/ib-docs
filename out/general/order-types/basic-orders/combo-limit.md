[source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/combo-limit)

# Combo Limit

Create combination orders that include options, stock and futures legs (stock legs can be included if the order is routed through SmartRouting). Although a combination/spread order is constructed of separate legs, it is executed as a single transaction if it is routed directly to an exchange. For combination orders that are SmartRouted, each leg may be executed separately to ensure best execution.

Products: OPT, STK, FUT

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "LMT",
      "price": price,
      "side": "side",
      "tif": "tif",
      "quantity": quantity
    }
  ]
}
```

#### Java

```java
Order order = new Order();
order.action(action);
order.orderType("LMT");
order.lmtPrice(limitPrice);
order.totalQuantity(quantity);
if (nonGuaranteed)
{
	order.smartComboRoutingParams().add(new TagValue("NonGuaranteed", "1"));
}
```
