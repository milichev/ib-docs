[home](../../../index.md) | [general](../../index.md) | [source](https://www.interactivebrokers.com/docs/general/order-types/peg-orders/pegged-to-primary-relative)

# Pegged To Primary / Relative

Relative (a.k.a. Pegged-to-Primary) orders provide a means for traders to seek a more aggressive price than the National Best Bid and Offer (NBBO). By acting as liquidity providers, and placing more aggressive bids and offers than the current best bids and offers, traders increase their odds of filling their order. Quotes are automatically adjusted as the markets move, to remain aggressive. Stocks, Options and Futures – not available on paper trading.

Products: CFD, STK, OPT, FUT

More on [Pegged To Primary Orders](https://www.interactivebrokers.com/en/index.php?f=613)

More on [Supported exchanges](https://www.interactivebrokers.com/en/index.php?f=3883?ot=rel)

#### Python

```python
order = Order()
order.action = action
order.orderType = "REL"
order.totalQuantity = quantity
order.lmtPrice = priceCap
order.auxPrice = offsetAmount
```

#### Abap

```abap
curl {baseURL}/iserver/account/{accountId}/orders \
--request POST \
--header 'Content-Type:application/json' \
--data '{
  "orders": [
    {
      "conid": conid,
      "orderType": "REL",
      "price": Limit_Price,
      "auxPrice": Offset_Price,
      "side": "side",
      "quantity": quantity
    }
  ]
}
```
