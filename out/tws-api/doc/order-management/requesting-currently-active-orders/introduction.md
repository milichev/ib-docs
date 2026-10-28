[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/requesting-currently-active-orders/introduction)

# Introduction

As long as an order is active, it is possible to retrieve it using the TWS API. Orders submitted via the TWS API will always be bound to the client application (i.e. client Id) they were submitted from meaning only the submitting client will be able to modify the placed order. Three different methods are provided to allow for maximum flexibility. Active orders will be returned via the [IBApi.EWrapper.openOrder](../open-orders.md) and [IBApi.EWrapper.orderStatus](/docs/tws-api#order-status) methods as already described in [The openOrder callback](../open-orders.md) and [The orderStatus callback](../order-status/introduction.md) sections

**Note:** it is not possible to obtain cancelled or fully filled orders.
