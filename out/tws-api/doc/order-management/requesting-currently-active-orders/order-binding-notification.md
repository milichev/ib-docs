[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/requesting-currently-active-orders/order-binding-notification)

# Order Binding Notification

#### EWrapper.orderBound (

**orderId:** long. IBKR permId.

**apiClientId:** int. API client id.

**apiOrderId:** int. API order id.\
)

Response to API bind order control message.

#### Java

```java
@Override
public void orderBound(long orderId, int apiClientId, int apiOrderId) {
	System.out.println(EWrapperMsgGenerator.orderBound(orderId, apiClientId, apiOrderId));
}
```
