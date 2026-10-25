[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/receive-p-l-for-individual-positions)

# Receive P&L for individual positions

#### EWrapper.pnlSingle (

**reqId:** int. Request identifier used for tracking.

**pos:** decimal. Current size of the position

**dailyPnL:** double. DailyPnL for the position

**unrealizedPnL:** double. Total unrealized PnL for the position (since inception) updating in real time

**realizedPnL:** double. Total realized PnL for the position (since inception) updating in real time

**value:** double. Current market value of the position.\
)

Receives real time updates for single position daily PnL values

#### Python

```python
def pnlSingle(self, reqId: int, pos: Decimal, dailyPnL: float, unrealizedPnL: float, realizedPnL: float, value: float):
  print("Daily PnL Single. ReqId:", reqId, "Position:", pos, "DailyPnL:", dailyPnL, "UnrealizedPnL:", unrealizedPnL, "RealizedPnL:", realizedPnL, "Value:", value)
```

#### Java

```java
@Override
public void pnlSingle(int reqId, Decimal pos, double dailyPnL, double unrealizedPnL, double realizedPnL, double value) {
  System.out.println(EWrapperMsgGenerator.pnlSingle(reqId, pos, dailyPnL, unrealizedPnL, realizedPnL, value));                
}
```

#### C++

```cpp
void TestCppClient::pnlSingle(int reqId, Decimal pos, double dailyPnL, double unrealizedPnL, double realizedPnL, double value) {
    printf("PnL Single. ReqId: %d, pos: %s, daily PnL: %s, unrealized PnL: %s, realized PnL: %s, value: %s\n", reqId, decimalStringToDisplay(pos).c_str(), Utils::doubleMaxString(dailyPnL).c_str(), Utils::doubleMaxString(unrealizedPnL).c_str(), Utils::doubleMaxString(realizedPnL).c_str(), Utils::doubleMaxString(value).c_str());
}
```

#### C#

```csharp
public void pnlSingle(int reqId, decimal pos, double dailyPnL, double unrealizedPnL, double realizedPnL, double value)
{
	Console.WriteLine("PnL Single. Request Id: {0}, Pos {1}, Daily PnL {2}, Unrealized PnL {3}, Realized PnL: {4}, Value: {5}", reqId, Util.DecimalMaxString(pos), Util.DoubleMaxString(dailyPnL), Util.DoubleMaxString(unrealizedPnL),
		Util.DoubleMaxString(realizedPnL), Util.DoubleMaxString(value));
}
```

#### VB.NET

```vbnet
Public Sub pnlSingle(reqId As Integer, pos As Decimal, dailyPnL As Double, unrealizedPnL As Double, realizedPnL As Double, value As Double) Implements EWrapper.pnlSingle
	Console.WriteLine("PnL Single. Request Id: {0}, pos: {1}, daily PnL: {2}, unrealized PnL: {3}, realized PnL: {4}, value: {5}", reqId, Util.DecimalMaxString(pos), Util.DoubleMaxString(dailyPnL), Util.DoubleMaxString(unrealizedPnL), Util.DoubleMaxString(realizedPnL), Util.DoubleMaxString(value))
End Sub
```
