[source](https://www.interactivebrokers.com/docs/tws-api/doc/tws-ui-display-groups/subscribe-to-group-events/request-group-events-subscription)

# Request Group Events Subscription

#### EClient.subscribeToGroupEvents (

**requestId:** int. Request identifier used to track data.

**groupId:** int. The display group for integration.\
)

Integrates API client and TWS window grouping.

#### Python

```python
self.subscribeToGroupEvents(19002, 1)
```

#### Java

```java
client.subscribeToGroupEvents(9002, 1);
```

#### C++

```cpp
m_pClient->subscribeToGroupEvents(9002, 1);
```

#### C#

```csharp
client.subscribeToGroupEvents(9002, 1);
```

#### VB.NET

```vbnet
client.subscribeToGroupEvents(9002, 1)
```
