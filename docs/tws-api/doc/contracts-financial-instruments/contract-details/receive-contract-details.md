[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/contract-details/receive-contract-details)

# Receive Contract Details

#### EWrapper.contractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. Contains the full contract object contents including all information about a specific traded instrument.\
)

Receives the full contract's definitions This method will return all contracts matching the requested via EClientSocket::reqContractDetails. For example, one can obtain the whole option chain with it.

#### Python

```python
def contractDetails(self, reqId: int, contractDetails: ContractDetails):
  print(reqId, contractDetails)
```

#### Java

```java
@Override
public void contractDetails(int reqId, ContractDetails contractDetails) {
	System.out.println(EWrapperMsgGenerator.contractDetails(reqId, contractDetails)); 
}
```

#### C++

```cpp
void TestCppClient::contractDetails( int reqId, const ContractDetails& contractDetails) {
    printf( "ContractDetails. ReqId: %d\n", reqId);
    printContractDetailsMsg(contractDetails);
}
```

#### C#

```csharp
public virtual void contractDetails(int reqId, ContractDetails contractDetails)
{
	Console.WriteLine("ContractDetails. ReqId: " + reqId);
	printContractDetailsMsg(contractDetails);
}
```

#### VB.NET

```vbnet
Public Sub contractDetails(reqId As Integer, contractDetails As IBApi.ContractDetails) Implements IBApi.EWrapper.contractDetails
	Console.WriteLine("ContractDetails. ReqId: " & reqId)
	printContractDetailsMsg(contractDetails)
End Sub
```

#### EWrapper.contractDetailsEnd (

**reqId:** int. Request identifier to track data.\
)

After all contracts matching the request were returned, this method will mark the end of their reception.

#### Python

```python
def contractDetailsEnd(self, reqId: int):
	print("ContractDetailsEnd. ReqId:", reqId)
```

#### Java

```java
@Override
public void contractDetailsEnd(int reqId) {
	System.out.println("Contract Details End: " + EWrapperMsgGenerator.contractDetailsEnd(reqId));
}
```

#### C++

```cpp
void TestCppClient::contractDetailsEnd( int reqId) {
    printf( "ContractDetailsEnd. %d\n", reqId);
}
```

#### C#

```csharp
public virtual void contractDetailsEnd(int reqId)
{
	Console.WriteLine("ContractDetailsEnd. "+reqId+"\n");
}
```

#### VB.NET

```vbnet
 Public Sub contractDetailsEnd(reqId As Integer) Implements IBApi.EWrapper.contractDetailsEnd
            Console.WriteLine("ContractDetailsEnd - ReqId [" & reqId & "]")
        End Sub
```
