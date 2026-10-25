[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/execution-details/request-execution-details)

# Request Execution Details

#### EClient.reqExecutions (

**reqId:** int. The request's unique identifier.

**filter:** ExecutionFilter. The filter criteria used to determine which execution reports are returned.\
)

Requests current day's (since midnight) executions and commission report matching the filter. Only the current day's executions can be retrieved.

#### Python

```python
self.reqExecutions(10001, ExecutionFilter())
```

#### Java

```java
client.reqExecutions(10001, new ExecutionFilter());
```

#### C++

```cpp
m_pClient->reqExecutions(10001, ExecutionFilter());
```

#### C#

```csharp
client.reqExecutions(10001, new ExecutionFilter());
```

#### VB.NET

```vbnet
client.reqExecutions(10001, New ExecutionFilter())
```
