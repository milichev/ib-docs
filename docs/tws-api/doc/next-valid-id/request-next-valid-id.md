[source](https://www.interactivebrokers.com/docs/tws-api/doc/next-valid-id/request-next-valid-id)

# Request Next Valid ID

#### EClient.reqIds (

**numIds:** int. This parameter will not affect the value returned to nextValidId but is required.\
)

Requests the next valid order ID at the current moment be returned to the EWrapper.nextValidId function.

#### Python

```python
self.reqIds(-1)
```

#### Java

```java
client.reqIds(-1);
```

#### C++

```cpp
m_pClient->reqIds(-1);
```

#### C#

```csharp
client.reqIds(-1);
```

#### VB.NET

```vbnet
client.reqIds(-1)
```
