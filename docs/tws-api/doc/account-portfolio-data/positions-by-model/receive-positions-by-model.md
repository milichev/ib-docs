[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions-by-model/receive-positions-by-model)

# Receive Positions By Model

#### EWrapper.positionMulti(

**requestId:** int. The id of request

**account:** String. The account holding the position.

**modelCode:** String. The model code holding the position.

**contract:** Contract. The position's Contract

**pos:** decimal. The number of positions held.

**avgCost:** double. The average cost of the position.\
)

Provides the portfolio's open positions.

#### Python

```python
def positionMulti(self, reqId: int, account: str, modelCode: str, contract: Contract, pos: Decimal, avgCost: float):
  print("PositionMulti. RequestId:", reqId, "Account:", account, "ModelCode:", modelCode, "Contract:", contract, ",Position:", pos, "AvgCost:", avgCost)
```

#### Java

```java
@Override
public void positionMulti(int reqId, String account, String modelCode, Contract contract, Decimal pos, double avgCost) {
	System.out.println(EWrapperMsgGenerator.positionMulti(reqId, account, modelCode, contract, pos, avgCost));
}
```

#### C++

```cpp
void TestCppClient::positionMulti( int reqId, const std::string& account,const std::string& modelCode, const Contract& contract, Decimal pos, double avgCost) {
    printf("Position Multi. Request: %d, Account: %s, ModelCode: %s, Symbol: %s, SecType: %s, Currency: %s, Position: %s, Avg Cost: %s\n", reqId, account.c_str(), modelCode.c_str(), contract.symbol.c_str(), contract.secType.c_str(), contract.currency.c_str(), decimalStringToDisplay(pos).c_str(), Utils::doubleMaxString(avgCost).c_str());
}
```

#### C#

```csharp
public virtual void positionMulti(int reqId, string account, string modelCode, Contract contract, decimal pos, double avgCost)
{
	Console.WriteLine("Position Multi. Request: " + reqId + ", Account: " + account + ", ModelCode: " + modelCode + ", contract: " + contract + ", Position: " + Util.DecimalMaxString(pos) + ", Avg cost: " + Util.DoubleMaxString(avgCost) + "\n");
}
```

#### VB.NET

```vbnet
Public Sub positionMulti(requestId As Integer, account As String, modelCode As String, contract As Contract, pos As Decimal, avgCost As Double) Implements IBApi.EWrapper.positionMulti
	Console.WriteLine("PositionMulti. Id: " & requestId & ", Account: " & account & ", ModelCode: " & modelCode & ", Contract: " & contract.Symbol & ", pos: " & Util.DecimalMaxString(pos) & ", avgCost: " & Util.DoubleMaxString(avgCost))
End Sub
```

#### EWrapper.positionMultiEnd(

**requestId:** int. The id of request\
)

Indicates all the positions have been transmitted.

#### Python

```python
def positionMultiEnd(self, reqId: int):
	print("PositionMultiEnd. RequestId:", reqId)
```

#### Java

```java
@Override
public void positionMultiEnd(int reqId) {
	System.out.println("Position Multi End: " + EWrapperMsgGenerator.positionMultiEnd(reqId));
}
```

#### C++

```cpp
void TestCppClient::positionMultiEnd( int reqId) {
    printf("Position Multi End. Request: %d\n", reqId);
}
```

#### C#

```csharp
public virtual void positionMultiEnd(int reqId)
{
	Console.WriteLine("Position Multi End. Request: " + reqId + "\n");
}
```

#### VB.NET

```vbnet
Public Sub positionMultiEnd(requestId As Integer) Implements IBApi.EWrapper.positionMultiEnd
	Console.WriteLine("PositionMultiEnd")
End Sub
```
