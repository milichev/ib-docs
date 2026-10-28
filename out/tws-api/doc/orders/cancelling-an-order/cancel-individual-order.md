[source](https://www.interactivebrokers.com/docs/tws-api/doc/orders/cancelling-an-order/cancel-individual-order)

# Cancel Individual Order

#### EClient.cancelOrder (

**orderId:** int. Specify which order should be cancelled by its identifier.

**orderCancel:** orderCancel. An OrderCancel object that can receive the manualOrderCancelTime, manualOrderIndicator, and extOperator fields. See OrderCancel Reference for more insight on the OrderCancel class.\
)

Cancels an active order placed by from the same API client ID.

**Note:** API clients cannot cancel individual orders placed by other clients. Only reqGlobalCancel is available.

#### Java

```java
client.cancelOrder(cancelID, new OrderCancel());
```
