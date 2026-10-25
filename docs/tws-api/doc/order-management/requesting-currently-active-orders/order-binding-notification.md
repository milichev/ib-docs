[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/requesting-currently-active-orders/order-binding-notification)

# Order Binding Notification

#### EWrapper.orderBound (

**orderId:** long. IBKR permId.

**apiClientId:** int. API client id.

**apiOrderId:** int. API order id.\
)

Response to API bind order control message.

#### Python

```python
def orderBound(self, orderId: int, apiClientId: int, apiOrderId: int):
	print("OrderBound.", "OrderId:", intMaxString(orderId), "ApiClientId:", intMaxString(apiClientId), "ApiOrderId:", intMaxString(apiOrderId))
```

#### Java

```java
@Override
public void orderBound(long orderId, int apiClientId, int apiOrderId) {
	System.out.println(EWrapperMsgGenerator.orderBound(orderId, apiClientId, apiOrderId));
}
```

#### C++

```cpp
void TestCppClient::orderBound(long long orderId, int apiClientId, int apiOrderId) {
    printf("Order bound. OrderId: %s, ApiClientId: %s, ApiOrderId: %s\n", Utils::llongMaxString(orderId).c_str(), Utils::intMaxString(apiClientId).c_str(), Utils::intMaxString(apiOrderId).c_str());
}
```

#### C#

```csharp
public void orderBound(long orderId, int apiClientId, int apiOrderId)
{
	Console.WriteLine("Order bound. Order Id: {0}, Api Client Id: {1}, Api Order Id: {2}", Util.LongMaxString(orderId), Util.IntMaxString(apiClientId), Util.IntMaxString(apiOrderId));
}
```

#### VB.NET

```vbnet
Public Sub orderBound(orderId As Long, apiClientId As Integer, apiOrderId As Integer) Implements EWrapper.orderBound
	Console.WriteLine("Order bound. Order Id: {0}, Api Client Id: {1}, Api Order Id: {2}", Util.LongMaxString(orderId), Util.IntMaxString(apiClientId), Util.IntMaxString(apiOrderId))
End Sub
```
