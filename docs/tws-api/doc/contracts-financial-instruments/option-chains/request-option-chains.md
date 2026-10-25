[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/option-chains/request-option-chains)

# Request Option Chains

#### EClient.reqSecDefOptParams (

**reqId:** int. The ID chosen for the request

**underlyingSymbol:** String. Contract symbol of the underlying.

**futFopExchange:** String. The exchange on which the returned options are trading. Can be set to the empty string "" for all exchanges.

**underlyingSecType:** String. The type of the underlying security, i.e. STK

**underlyingConId:** int. The contract ID of the underlying security.\
)

Requests security definition option parameters for viewing a contract's option chain.

#### Python

```python
self.reqSecDefOptParams(0, "IBM", "", "STK", 8314)
```

#### Java

```java
client.reqSecDefOptParams(0, "IBM", "", "STK", 8314);
```

#### C++

```cpp
m_pClient->reqSecDefOptParams(0, "IBM", "", "STK", 8314);
```

#### C#

```csharp
client.reqSecDefOptParams(0, "IBM", "", "STK", 8314);
```

#### VB.NET

```vbnet
client.reqSecDefOptParams(0, "IBM", "", "STK", 8314)
```
