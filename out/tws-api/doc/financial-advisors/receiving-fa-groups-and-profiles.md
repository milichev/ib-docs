[source](https://www.interactivebrokers.com/docs/tws-api/doc/financial-advisors/receiving-fa-groups-and-profiles)

# Receiving FA Groups and Profiles

#### EWrapper.receiveFA (

**faDataType:** int. Receive the faDataType value specified in the requestFA. See [FA Data Types](#fa-data-types)

**faXmlData:** String. The xml-formatted configuration.\
)

Receives the Financial Advisor's configuration available in the TWS.

#### Java

```java
@Override
public void receiveFA(int faDataType, String xml) {
	System.out.println("Receiving FA: " + faDataType + " - " + xml);
}
```
