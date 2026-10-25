[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/contract-details/receive-bond-details)

# Receive Bond Details

#### EWrapper.bondContractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. Contains the full contract object contents including all information about a specific traded instrument.\
)

Delivers the Bond contract data after this has been requested via reqContractDetails.

#### Python

```python
def bondContractDetails(self, reqId: int, contractDetails: ContractDetails):
  printinstance(reqId, contractDetails)
```

#### Java

```java
@Override
public void bondContractDetails(int reqId, ContractDetails contractDetails) {
	System.out.println(EWrapperMsgGenerator.contractDetails(reqId, contractDetails)); 
}
```

#### C++

```cpp
void TestCppClient::bondContractDetails( int reqId, const ContractDetails& contractDetails) {
    printf( "BondContractDetails. ReqId: %d\n", reqId);
    printContractDetailsMsg(contractDetails);
}
```

#### C#

```csharp
public virtual void bondContractDetails(int reqId, ContractDetails contractDetails)
{
	Console.WriteLine("BondContractDetails. ReqId: " + reqId);
	printContractDetailsMsg(contractDetails);
}
```

#### VB.NET

```vbnet
Public Sub bondContractDetails(reqId As Integer, contractDetails As IBApi.ContractDetails) Implements IBApi.EWrapper.contractDetails
	Console.WriteLine("BondContractDetails. ReqId: " & reqId)
	printContractDetailsMsg(contractDetails)
End Sub
```
