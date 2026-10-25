[source](https://www.interactivebrokers.com/docs/tws-api/doc/order-management/requesting-currently-active-orders/manually-submitted-tws-orders)

# Manually Submitted TWS Orders

#### EClient.reqAutoOpenOrders (

**autoBind:** bool. If set to true, the newly created orders will be assigned an API order ID and implicitly associated with this client. If set to false, future orders will not be.\
)

Requests status updates about future orders placed from TWS. Can only be used with client ID 0.

**Important:** only those applications connecting with client Id 0 will be able to take over manually submitted orders

#### Python

```python
self.reqAutoOpenOrders(True)
```

#### Java

```java
client.reqAutoOpenOrders(true);
```

#### C++

```cpp
m_pClient->reqAutoOpenOrders(true);
```

#### C#

```csharp
client.reqAutoOpenOrders(true);
```

#### VB.NET

```vbnet
client.reqAutoOpenOrders(True)
```
