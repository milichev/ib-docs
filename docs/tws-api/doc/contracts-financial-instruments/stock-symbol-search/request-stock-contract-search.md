[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/stock-symbol-search/request-stock-contract-search)

# Request Stock Contract Search

#### EClient.reqMatchingSymbols (

**reqId:** int. Request identifier used to track data.

**pattern:** String. Either start of ticker symbol or (for larger strings) company name.\
)

Requests matching stock symbols.

#### Python

```python
self.reqMatchingSymbols(reqId, "IBM")
```

#### Java

```java
client.reqMatchingSymbols(reqId, "IB");
```

#### C++

```cpp
m_pClient->reqMatchingSymbols(reqId, "IBM");
```

#### C#

```csharp
client.reqMatchingSymbols(reqId, "IBM");
```

#### VB.NET

```vbnet
client.reqMatchingSymbols(reqId, "IBM")
```
