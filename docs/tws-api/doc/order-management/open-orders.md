[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/open-orders)

# Open Orders

#### EWrapper.openOrder (

**orderId:** int. The order's unique id

**contract:** Contract. The order's Contract.

**order:** Order. The currently active Order.

**orderState:** OrderState. The order's OrderState\
)

Feeds in currently open orders.

#### Python

```python
def openOrder(self, orderId: OrderId, contract: Contract, order: Order, orderState: OrderState):
    print(orderId, contract, order, orderState)
```

#### Java

```java
@Override
public void openOrder(int orderId, Contract contract, Order order, OrderState orderState) {
	System.out.println(EWrapperMsgGenerator.openOrder(orderId, contract, order, orderState));
}
```

#### C++

```cpp
void TestCppClient::openOrder( OrderId orderId, const Contract& contract, const Order& order, const OrderState& orderState) {
    printf(orderId, contract, order, orderState);
}
```

#### C#

```csharp
public virtual void openOrder(int orderId, Contract contract, Order order, OrderState orderState)
{
	Console.WriteLine(orderId, contract, order, orderState);
}
```

#### VB.NET

```vbnet
Public Sub openOrder(orderId As Integer, contract As IBApi.Contract, order As IBApi.Order, orderState As IBApi.OrderState) Implements IBApi.EWrapper.openOrder
	Console.WriteLine(orderId, contract, order , orderState)
End Sub
```

#### EWrapper.openOrderEnd ()

Notifies the end of the open orders' reception.

#### Python

```python
def openOrderEnd(self):
	print("OpenOrderEnd")
```

#### Java

```java
@Override
public void openOrderEnd() {
	System.out.println("Open Order End: " + EWrapperMsgGenerator.openOrderEnd());
}
```

#### C++

```cpp
void TestCppClient::openOrderEnd() {
    printf( "OpenOrderEnd\n");
}
```

#### C#

```csharp
public virtual void openOrderEnd()
{
	Console.WriteLine("OpenOrderEnd");
}
```

#### VB.NET

```vbnet
Public Sub openOrderEnd() Implements IBApi.EWrapper.openOrderEnd
	Console.WriteLine("OpenOrderEnd")
End Sub
```
