[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/cancel-p-l-request-for-individual-positions)

# Cancel P&L request for individual positions

#### EClient.cancelPnLSingle (

**reqId:** int. Request identifier to cancel the P\&L subscription for.\
)

Cancels real time subscription for a positions daily PnL information.

#### Python

```python
self.cancelPnLSingle(requestId);
```

#### Java

```java
client.cancelPnLSingle(reqId);
```

#### C++

```cpp
m_pClient->cancelPnLSingle(reqId);
```

#### C#

```csharp
client.cancelPnLSingle(reqId);
```

#### VB.NET

```vbnet
client.cancelPnLSingle(reqId);
```
