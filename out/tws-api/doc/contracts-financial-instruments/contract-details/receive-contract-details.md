[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/contract-details/receive-contract-details)

# Receive Contract Details

#### EWrapper.contractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. Contains the full contract object contents including all information about a specific traded instrument.\
)

Receives the full contract's definitions This method will return all contracts matching the requested via EClientSocket::reqContractDetails. For example, one can obtain the whole option chain with it.

#### Java

```java
@Override
public void contractDetails(int reqId, ContractDetails contractDetails) {
	System.out.println(EWrapperMsgGenerator.contractDetails(reqId, contractDetails)); 
}
```

#### EWrapper.contractDetailsEnd (

**reqId:** int. Request identifier to track data.\
)

After all contracts matching the request were returned, this method will mark the end of their reception.

#### Java

```java
@Override
public void contractDetailsEnd(int reqId) {
	System.out.println("Contract Details End: " + EWrapperMsgGenerator.contractDetailsEnd(reqId));
}
```
