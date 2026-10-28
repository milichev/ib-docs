[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/combo-orders)

# Combo Orders

A user may create an order for a combination of symbols, referred to as a Spread or Combo, by the use of a Spread Contract.

Spreads may be priced on a per-leg basis or a complete order.

* Combo orders may only use price-per-leg on with two legs in a Non-Guaranteed spread.
* Combo orders with more than 2 legs may only be placed with a price for the overall order and must not be NonGuaranteed.

#### Combo Price Per Leg

Combination orders may be priced per-leg with no more than 2 legs in a [NonGuaranteed](https://www.interactivebrokers.com/lib/cstools/faq/#/content/1163249841) order. This is accomplished with the OrderComboLeg class and defining a price in each object. The OrderComboLeg should then be added to the Order object's OrderComboLegs attribute in an array.

```
order = Order()
order.orderType = "LMT"

orderLeg1 = OrderComboLeg()
orderLeg1.price = 222

orderLeg2 = OrderComboLeg()
orderLeg2.price = 333

order.orderComboLegs = [orderLeg2, orderLeg1]
```

#### Price Overall Order

To price an overall order, users would only need to define the lmtPrice or auxPrice values within the Order object as they would if trading an individual contract.

```
order = Order()
order.orderType = "LMT"
order.lmtPrice = 555
```
