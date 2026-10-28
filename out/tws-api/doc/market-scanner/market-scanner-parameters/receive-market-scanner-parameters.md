[source](https://www.interactivebrokers.com/docs/tws-api/doc/market-scanner/market-scanner-parameters/receive-market-scanner-parameters)

# Receive Market Scanner Parameters

#### EWrapper.scannerParameters (

**xml:** String. The xml-formatted string with the available parameters.\
)

Provides the xml-formatted parameters available from TWS market scanners (not all available in API).

#### Java

```java
@Override
public void scannerParameters(String xml) {
	System.out.println("ScannerParameters. " + xml + "\n");
}
```
