[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/retrieving-completed-orders/receiving-completed-orders)

# Receiving Completed Orders

#### EWrapper.completedOrders(

**contract:** Contract. The order's Contract.\
**order:** Order. The currently active Order.\
**orderState:** OrderState. The order's OrderState\
)

#### Python

```python
def completedOrder(self, orderId: OrderId, contract: Contract, order: Order, orderState: OrderState):
    print(orderId, contract, order, orderState)
```

#### Java

```java
@Override
public void completedOrder(int orderId, Contract contract, Order order, OrderState orderState) {
  System.out.println(EWrapperMsgGenerator.openOrder(orderId, contract, order, orderState));
}
```

#### C++

```cpp
void TestCppClient::completedOrder( OrderId orderId, const Contract& contract, const Order& order, const OrderState& orderState) {
    printf(orderId, contract, order, orderState);
}
```

#### C#

```csharp
public virtual void completedOrder(int orderId, Contract contract, Order order, OrderState orderState)
{
  Console.WriteLine(orderId, contract, order, orderState);
}
```

#### VB.NET

```vbnet
Public Sub completedOrder(orderId As Integer, contract As IBApi.Contract, order As IBApi.Order, orderState As IBApi.OrderState) Implements IBApi.EWrapper.openOrder
  Console.WriteLine(orderId, contract, order , orderState)
End Sub
```
