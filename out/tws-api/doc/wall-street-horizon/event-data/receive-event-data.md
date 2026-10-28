[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/receive-event-data)

# Receive Event Data

#### EWrapper.wshEventData (

**requestId:** int. Request identifier used to track data.

**dataJson:** String. Event data json format.\
)

Returns calendar events from the WSH.

#### Java

```java
@Override
public void wshEventData(int reqId, String dataJson) {
	System.out.println(EWrapperMsgGenerator.wshEventData(reqId, dataJson));
}
```
