[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/execution-details/receive-execution-details)

# Receive Execution Details

#### EWrapper.execDetails (

**reqId:** int. The request's identifier.

**contract:** Contract. The Contract of the Order.

**execution:** Execution. The Execution details.\
)

Provides the executions which happened in the last 24 hours.

#### Java

```java
@Override
public void execDetails(int reqId, Contract contract, Execution execution) {
	System.out.println(EWrapperMsgGenerator.execDetails( reqId, contract, execution));
}
```

#### EWrapper.execDetailsEnd (

**reqId:** int. The request's identifier\
)

Indicates the end of the Execution reception.

#### Java

```java
@Override
public void execDetailsEnd(int reqId) {
	System.out.println("Exec Details End: " + EWrapperMsgGenerator.execDetailsEnd( reqId));
}
```
