[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/basic-orders/forex-cash-quantity-order)

# Forex Cash Quantity Order

Forex orders can be placed in denomination of second currency in pair using cashQty field.

Products: CASH

More on [Forex Cash Quantity Orders](https://www.interactivebrokers.com/en/index.php?f=23876#963-02)

#### Python

```python
order = Order()
order.action = action
order.orderType = "LMT"
order.lmtPrice = limitPrice
order.cashQty = cashQty
```

#### Abap

```abap
curl --insecure https://localhost:5000/v1/api/iserver/account/{{accountId}}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "orderType",
      "price": price,
      "side": "side",
      "tif": "tif",
      "fxQty": fxQty,
      "isCcyConv": true
    }
  ]
}
```
