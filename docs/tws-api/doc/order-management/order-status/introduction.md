[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/order-status/introduction)

# Introduction

#### EWrapper.orderStatus (

**orderId:** int. The order's client id.

**status:** String. The current status of the order.

**filled:** decimal. Number of filled positions.

**remaining:** decimal. The remnant positions.

**avgFillPrice:** double. Average filling price.

**permId:** int. The order's permId used by the TWS to identify orders.

**parentId:** int. Parent's id. Used for bracket and auto trailing stop orders.

**lastFillPrice:** double. Price at which the last positions were filled.

**clientId:** int. API client which submitted the order.

**whyHeld:** String. this field is used to identify an order held when TWS is trying to locate shares for a short sell. The value used to indicate this is 'locate'.

**mktCapPrice:** double. If an order has been capped, this indicates the current capped price.\
)

Gives the up-to-date information of an order every time it changes. Often there are duplicate orderStatus messages.

#### Python

```python
def orderStatus(self, orderId: OrderId, status: str, filled: Decimal, remaining: Decimal, avgFillPrice: float, permId: int, parentId: int, lastFillPrice: float, clientId: int, whyHeld: str, mktCapPrice: float):
	super().orderStatus(orderId, status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice)
```

#### Java

```java
@Override
public void orderStatus(int orderId, String status, Decimal filled, Decimal remaining, double avgFillPrice, int permId, int parentId, double lastFillPrice, int clientId, String whyHeld, double mktCapPrice) {
	System.out.println(EWrapperMsgGenerator.orderStatus( orderId, status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice));
}
```

#### C++

```cpp
void TestCppClient::orderStatus(OrderId orderId, const std::string& status, Decimal filled, Decimal remaining, double avgFillPrice, int permId, int parentId, double lastFillPrice, int clientId, const std::string& whyHeld, double mktCapPrice){
    printf(orderId, status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice);
}
```

#### C#

```csharp
public virtual void orderStatus(int orderId, string status, decimal filled, decimal remaining, double avgFillPrice, int permId, int parentId, double lastFillPrice, int clientId, string whyHeld, double mktCapPrice)
{
	Console.WriteLine("OrderStatus. Id: " + orderId + ", Status: " + status + ", Filled: " + Util.DecimalMaxString(filled) + ", Remaining: " + Util.DecimalMaxString(remaining)
		+ ", AvgFillPrice: " + Util.DoubleMaxString(orderId, status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice);
}
```

#### VB.NET

```vbnet
Public Sub orderStatus(orderId As Integer, status As String, filled As Decimal, remaining As Decimal, avgFillPrice As Double, permId As Integer, parentId As Integer, lastFillPrice As Double, clientId As Integer, whyHeld As String, mktCapPrice As Double) Implements IBApi.EWrapper.orderStatus
	Console.WriteLine(orderId , status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice)
End Sub
```
