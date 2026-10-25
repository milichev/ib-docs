[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/execution-details/receive-execution-details)

# Receive Execution Details

#### EWrapper.execDetails (

**reqId:** int. The request's identifier.

**contract:** Contract. The Contract of the Order.

**execution:** Execution. The Execution details.\
)

Provides the executions which happened in the last 24 hours.

#### Python

```python
def execDetails(self, reqId: int, contract: Contract, execution: Execution):
  print("ExecDetails. ReqId:", reqId, "Symbol:", contract.symbol, "SecType:", contract.secType, "Currency:", contract.currency, execution)
```

#### Java

```java
@Override
public void execDetails(int reqId, Contract contract, Execution execution) {
	System.out.println(EWrapperMsgGenerator.execDetails( reqId, contract, execution));
}
```

#### C++

```cpp
void TestCppClient::execDetails( int reqId, const Contract& contract, const Execution& execution) {
    printf( "ExecDetails. ReqId: %d - %s, %s, %s - %s, %s, %s, %s, %s\n", reqId, contract.symbol.c_str(), contract.secType.c_str(), contract.currency.c_str(), execution.execId.c_str(), Utils::longMaxString(execution.orderId).c_str(), decimalStringToDisplay(execution.shares).c_str(), decimalStringToDisplay(execution.cumQty).c_str(), Utils::intMaxString(execution.lastLiquidity).c_str());
}
```

#### C#

```csharp
public virtual void execDetails(int reqId, Contract contract, Execution execution)
{
	Console.WriteLine("ExecDetails. " + reqId + " - " + contract.Symbol + ", " + contract.SecType+", " + contract.Currency+" - " + execution.ExecId + ", " + Util.IntMaxString(execution.OrderId) + 
		", " + Util.DecimalMaxString(execution.Shares) + ", " + Util.DecimalMaxString(execution.CumQty) + ", " + execution.LastLiquidity);
}
```

#### VB.NET

```vbnet
Public Sub execDetails(reqId As Integer, contract As IBApi.Contract, execution As IBApi.Execution) Implements IBApi.EWrapper.execDetails
  Console.WriteLine("ExecDetails - ReqId [" & reqId & "] Contract [" & contract.Symbol & ", " & contract.SecType &
          "] Execution [Price: " & Util.DoubleMaxString(execution.Price) & ", Exchange: " & execution.Exchange & ", Last Liquidity: " & execution.LastLiquidity.ToString() & ", Shares: " & Util.DecimalMaxString(execution.Shares) & ", Cum Qty: " & Util.DecimalMaxString(execution.CumQty) & "]")
End Sub
```

#### EWrapper.execDetailsEnd (

**reqId:** int. The request's identifier\
)

Indicates the end of the Execution reception.

#### Python

```python
def execDetailsEnd(self, reqId: int):
	print("ExecDetailsEnd. ReqId:", reqId)
```

#### Java

```java
@Override
public void execDetailsEnd(int reqId) {
	System.out.println("Exec Details End: " + EWrapperMsgGenerator.execDetailsEnd( reqId));
}
```

#### C++

```cpp
void TestCppClient::execDetailsEnd( int reqId) {
    printf( "ExecDetailsEnd. %d\n", reqId);
}
```

#### C#

```csharp
public virtual void execDetailsEnd(int reqId)
{
	Console.WriteLine("ExecDetailsEnd. "+reqId+"\n");
}
```

#### VB.NET

```vbnet
Public Sub execDetailsEnd(reqId As Integer) Implements IBApi.EWrapper.execDetailsEnd
	Console.WriteLine("ExecDetailsEnd - ReqId [" & reqId & "]")
End Sub
```
