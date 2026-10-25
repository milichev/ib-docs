[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/request-event-data)

# Request Event Data

#### EClient.reqWshEventData (

**requestId:** int. Request identifier used to track data.

**wshEventData:** WshEventData. Unique object used to track all parameters for the event data request. See [WshEventData Object](#wsheventdata-object) for more details.\
)

**MIN_SERVER_VER_WSH_EVENT_DATA_FILTERS_DATE:** \*Only passed in the Python implementation. Server version of the API implementationmust be passed. This can be accomplished with the EClient.serverVersion() function call.

Requests event data from the WSH calendar.

#### Python

```python
self.reqWshEventData(1101, eventDataObj, serverVersion)
```

#### Java

```java
client.reqWshEventData(1101, eventDataObj, serverVersion);
```

#### C++

```cpp
 m_pClient->reqWshEventData(30002, eventDataObj, serverVersion);
```

#### C#

```csharp
client.reqWshEventData(1101, eventDataObj, serverVersion);
```

#### VB.NET

```vbnet
client.reqWshEventData(1101, eventDataobj, serverVersion)
```
