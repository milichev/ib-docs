[source](https://www.interactivebrokers.com/docs/tws-api/doc/wall-street-horizon/event-data/cancel-event-data)

# Cancel Event Data

#### EClient.cancelWshEventData (

**requestId:** int. Request identifier used to track data.

)

Cancels pending WSH event data request.

#### Python

```python
self.cancelWshEventData(1101, eventDataObj)
```

#### Java

```java
client.cancelWshEventData(1101, eventDataObj);
```

#### C++

```cpp
 m_pClient->cancelWshEventData(30002, eventDataObj);
```

#### C#

```csharp
client.cancelWshEventData(1101, eventDataObj);
```

#### VB.NET

```vbnet
client.cancelWshEventData(1101, eventDataobj)
```
