[source](https://www.interactivebrokers.com/docs/tws-api/doc/next-valid-id/receive-next-valid-id)

# Receive Next Valid ID

#### EWrapper.nextValidId (

**orderId:** int. Receives next valid order id.\
)

Will be invoked automatically upon successful API client connection, or after call to EClient.reqIds.

#### Python

```python
def nextValidId(self, orderId: int):
    print("NextValidId:", orderId)
```

#### Java

```java
@Override
public void nextValidId(int orderId) {
	System.out.println(EWrapperMsgGenerator.nextValidId(orderId));
	currentOrderId = orderId;
}
```

#### C++

```cpp
void TestCppClient::nextValidId( OrderId orderId)
{
    printf("Next Valid Id: %ld\n", orderId);
    m_orderId = orderId;
}
```

#### C#

```csharp
public virtual void nextValidId(int orderId) 
{
	Console.WriteLine("Next Valid Id: "+orderId);
	NextOrderId = orderId;
}
```

#### VB.NET

```vbnet
Public Sub nextValidId(orderId As Integer) Implements IBApi.EWrapper.nextValidId
	Console.WriteLine("NextValidId - OrderId [" & orderId & "]")
	nextOrderId = orderId
End Sub
```
