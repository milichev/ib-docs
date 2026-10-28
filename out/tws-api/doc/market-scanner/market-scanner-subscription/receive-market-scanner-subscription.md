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

#### Java

```java
@Override
public void scannerData(int reqId, int rank, ContractDetails contractDetails, String distance, String benchmark, String projection, String legsStr) {
	System.out.println("ScannerData: " + EWrapperMsgGenerator.scannerData(reqId, rank, contractDetails, distance, benchmark, projection, legsStr));
}
```
