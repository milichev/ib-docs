[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/live-news-headlines/request-broad-tape-news)

# Request BroadTape News

#### BroadTape News Contracts

For BroadTape News you specify the contract for the specific news source. This is uniquely identified by the symbol and exchange. The symbol of an instrument can easily be obtained via the [EClientSocket.reqContractDetails](#request-contract-details) request.

The symbol is typically the provider code, a colon, then the news provider codes appended with "\_ALL"

#### Example news contract

#### Python

```python
contract = Contract()
contract.symbol  = "BRF:BRF_ALL"
contract.secType = "NEWS"
contract.exchange = "BRF"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("BRF:BRF_ALL");
contract.secType("NEWS");
contract.exchange("BRF"); 
```

#### C++

```cpp
Contract contract;
contract.symbol = "BRF:BRF_ALL"; 
contract.secType = "NEWS";
contract.exchange = "BRF";
```

#### C#

```csharp
Contract contract = new Contract();
contract.Symbol = "BRF:BRF_ALL";
contract.SecType = "NEWS";
contract.Exchange = "BRF";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract()
contract.Symbol = "BRF:BRF_ALL"
contract.SecType = "NEWS"
contract.Exchange = "BRF"
```

#### Python

```python
self.reqMktData(reqId, contract, "mdoff,292", False, False, [])
```

#### Java

```java
client.reqMktData(reqId, contract, "mdoff,292", false, false, null);
```

#### C++

```cpp
m_pClient->reqMktData(reqId, contract, "mdoff,292", false, false, TagValueListSPtr());
```

#### C#

```csharp
client.reqMktData(reqId, contract, "mdoff,292", false, false, null);
```

#### VB.NET

```vbnet
client.reqMktData(reqId, contract, "mdoff,292", False, False, Nothing)
```
