[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions/receive-positions)

# Receive Positions

#### EWrapper.position(

**account:** String. The account holding the position.

**contract:** Contract. The position's Contract

**pos:** decimal. The number of positions held. avgCost the average cost of the position.

**avgCost:** double. The total average cost of all trades for the currently held position.\
)

Provides the portfolio's open positions. After the initial callback (only) of all positions, the IBApi.EWrapper.positionEnd function will be triggered.

For futures, the exchange field will not be populated in the position callback as some futures trade on multiple exchanges

#### Python

```python
def position(self, account: str, contract: Contract, position: Decimal, avgCost: float):
  print("Position.", "Account:", account, "Contract:", contract, "Position:", position, "Avg cost:", avgCost)
```

#### Java

```java
@Override
public void position(String account, Contract contract, Decimal pos, double avgCost) {
    System.out.println(EWrapperMsgGenerator.position(account, contract, pos, avgCost));
}
```

#### C++

```cpp
@Override
public void position(String account, Contract contract, Decimal pos, double avgCost) {
    System.out.println(EWrapperMsgGenerator.position(account, contract, pos, avgCost));
}
```

#### C#

```csharp
public virtual void position(string account, Contract contract, decimal pos, double avgCost)
{
Console.WriteLine("Position. " + account + " - Symbol: " + contract.Symbol + ", SecType: " + contract.SecType + ", Currency: " + contract.Currency + ", Position: " + Util.DecimalMaxString(pos) + ", Avg cost: " + Util.DoubleMaxString(avgCost));
}
```

#### VB.NET

```vbnet
Public Sub position(account As String, contract As IBApi.Contract, pos As Decimal, avgCost As Double) Implements IBApi.EWrapper.position
  Console.WriteLine("Position. " & account & " - Symbol: " & contract.Symbol & ", SecType: " & contract.SecType & ", Currency: " &  contract.Currency & ", Position: " & Util.DecimalMaxString(pos) & ", Avg cost: " & Util.DoubleMaxString(avgCost))
End Sub
```

#### Ewrapper.positionEnd()

Indicates all the positions have been transmitted. Only returned after the initial callback of EWrapper.position.

#### Python

```python
def positionEnd(self):
  print("PositionEnd")
```

#### Java

```java
@Override
public void positionEnd() {
	System.out.println("Position End: " + EWrapperMsgGenerator.positionEnd());
}
```

#### C++

```cpp
void TestCppClient::positionEnd() {
    printf( "PositionEnd\n");
}
```

#### C#

```csharp
public virtual void positionEnd()
{
	Console.WriteLine("PositionEnd \n");
}
```

#### VB.NET

```vbnet
Public Sub positionEnd() Implements IBApi.EWrapper.positionEnd
	Console.WriteLine("PositionEnd")
End Sub
```
