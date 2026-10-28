[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/meta-data/receive-meta-data)

# Receive Meta Data

#### EWrapper.wshEventData (

**requestId:** int. Request identifier used to track data.

**dataJson:** String. metadata in json format.\
)

Returns meta data from the WSH calendar

#### Java

```java
@Override
public void wshMetaData(int reqId, String dataJson) {
	System.out.println(EWrapperMsgGenerator.wshMetaData(reqId, dataJson));
}
```

Once the json content has been received, the specific event types used to filter [EClient.reqWshEventData()](../event-data/wsh-event-data-object.md) are listed under "meta_data" -> "event_types".

The "name" field will express what the filter will return, such as "Board of Directors Meeting"

The "tag" field will return the filter used in your JSON query. The related example would be "wshe_bod".
