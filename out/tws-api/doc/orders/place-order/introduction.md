[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/place-order/introduction)

# Introduction

Orders are submitted via the EClient.placeOrder method.

Immediately after an order is submitted correctly, the TWS will start sending events concerning the order's activity via [EWrapper.openOrder](../../order-management/open-orders.md) and [EWrapper.orderStatus](../../order-management/order-status/introduction.md)

Advisors executing allocation orders will receive execution details and commissions for the allocation order itself. To receive allocation details and commissions for a specific subaccount [EClient.reqExecutions](../../order-management/execution-details/request-execution-details.md) can be used.

An order can be sent to TWS but not transmitted to the IB server by setting the Order.Transmit flag in the order class to False. Untransmitted orders will only be available within that TWS session (not for other usernames) and will be cleared on restart. Also, they can be cancelled or transmitted from the API but not viewed while they remain in the "untransmitted" state.

#### EClient.placeOrder (

**id:** int. The order's unique identifier. If a new order is placed with an order ID less than or equal to the order ID of a previous order an error will occur.

**contract:** Contract. The order's contract

**order:** Order. The order object.\
)

Places or modifies an order.

#### Java

```java
client.placeOrder(nextOrderId++, contract, order);
```
