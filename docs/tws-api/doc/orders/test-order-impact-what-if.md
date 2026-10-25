[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/test-order-impact-what-if)

# Test Order Impact (WhatIf)

From the API it is possible to check how a specified trade execution is expected to change the account margin requirements for an account in real time. This is done by creating an Order object which has the IBApi.Order.WhatIf flag set to true.

If `WhatIf` is set to true the order will undergo a credit check for the expected post-trade margin requirement without executing an order. The estimated post-trade margin requirement is returned to the IBApi.OrderState object in the [EWrapper.openOrder](../order-management/open-orders.md) callback.

This is equivalent to creating a order ticket in TWS, clicking "Preview", and viewing the information in the "Margin Impact" panel.

This returns an [OrderState Object](../../ref/order-state.md) containing details about initial and maintenance margin impact. This also defines commission and fees for order submission.
