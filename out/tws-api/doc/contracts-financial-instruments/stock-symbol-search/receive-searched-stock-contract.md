[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/stock-symbol-search/receive-searched-stock-contract)

# Receive Searched Stock Contract

#### EWrapper.symbolSamples (

**reqID:** int. Request identifier used to track data.

**contractDescription:** ContractDescription\[]. Provide an array of contract objects matching the requested descriptoin.\
)

Returns array of sample contract descriptions

#### Java

```java
@Override
public void symbolSamples(int reqId, ContractDescription[] contractDescriptions) {
	System.out.println(EWrapperMsgGenerator.symbolSamples(reqId, contractDescriptions));
}
```
