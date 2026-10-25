[source](https://www.interactivebrokers.com/docs/tws-api/doc/market-scanner/market-scanner-subscription/receive-market-scanner-subscription)

# Receive Market Scanner Subscription

#### EWrapper.scannerData (

**reqid:** int. Request identifier used to track data.

**rank:** int. The ranking position of the contract in the scanner sort.

**contractDetails:** ContractDetails. Contract object of the resulting object.

**distance:** String. Internal use only.

**benchmark:** String. Internal use only.

**projection:** String. Internal use only.

**legStr:** String. Describes the combo legs when the scanner is returning EFP\
)

Provides the data resulting from the market scanner request.

#### Python

```python
def scannerData(self, reqId: int, rank: int, contractDetails: ContractDetails, distance: str, benchmark: str, projection: str, legsStr: str):
	print("ScannerData. ReqId:", reqId, ScanData(contractDetails.contract, rank, distance, benchmark, projection, legsStr))
```

#### Java

```java
@Override
public void scannerData(int reqId, int rank, ContractDetails contractDetails, String distance, String benchmark, String projection, String legsStr) {
	System.out.println("ScannerData: " + EWrapperMsgGenerator.scannerData(reqId, rank, contractDetails, distance, benchmark, projection, legsStr));
}
```

#### C++

```cpp
void TestCppClient::scannerData(int reqId, int rank, const ContractDetails& contractDetails, const std::string& distance, const std::string& benchmark, const std::string& projection, const std::string& legsStr) {
    printf( "ScannerData. %d - Rank: %d, Symbol: %s, SecType: %s, Currency: %s, Distance: %s, Benchmark: %s, Projection: %s, Legs String: %s\n", reqId, rank, contractDetails.contract.symbol.c_str(), contractDetails.contract.secType.c_str(), contractDetails.contract.currency.c_str(), distance.c_str(), benchmark.c_str(), projection.c_str(), legsStr.c_str());
}
```

#### C#

```csharp
public virtual void scannerData(int reqId, int rank, ContractDetails contractDetails, string distance, string benchmark, string projection, string legsStr)
{
	Console.WriteLine("ScannerData. "+reqId+" - Rank: "+rank+", Symbol: "+contractDetails.Contract.Symbol+", SecType: "+contractDetails.Contract.SecType+", Currency: "+contractDetails.Contract.Currency +", Distance: "+distance+", Benchmark: "+benchmark+", Projection: "+projection+", Legs String: "+legsStr);
}
```

#### VB.NET

```vbnet
Public Sub scannerData(reqId As Integer, rank As Integer, contractDetails As IBApi.ContractDetails, distance As String, benchmark As String, projection As String, legsStr As String) Implements IBApi.EWrapper.scannerData
	Console.WriteLine("ScannerData. " & reqId & " - Rank: " & rank & ", : " & contractDetails.Contract.Symbol & ", SecType: " &contractDetails.Contract.SecType & ", Currency: " & contractDetails.Contract.Currency & ", Distance: " & distance & ", Benchmark: " & benchmark & ", Projection: " & projection & ", Legs String: " & legsStr)
End Sub
```
