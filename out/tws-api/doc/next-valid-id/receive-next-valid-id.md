[source](https://www.interactivebrokers.com/docs/tws-api/doc/next-valid-id/receive-next-valid-id)

# Receive Next Valid ID

#### EWrapper.nextValidId (

**orderId:** int. Receives next valid order id.\
)

Will be invoked automatically upon successful API client connection, or after call to EClient.reqIds.

#### Java

```java
@Override
public void nextValidId(int orderId) {
	System.out.println(EWrapperMsgGenerator.nextValidId(orderId));
	currentOrderId = orderId;
}
```
