[source](https://www.interactivebrokers.com/docs/tws-api/contracts/commodities)

# Commodities

**Symbol:** String. Specify the symbol of the commodity.

**SecType:** String. Specify CMDTY.

**Exchange:** String. Specify SMART.

**Currency:** String. Specify the base currency the commodity is traded with.

#### Python

```python
contract = Contract()
contract.symbol = "XAUUSD"
contract.secType = "CMDTY"
contract.exchange = "SMART"
contract.currency = "USD"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("XAUUSD");
contract.secType("CMDTY");
contract.exchange("SMART");
contract.currency("USD");
```

#### C++

```cpp
Contract contract;
contract.symbol = "XAUUSD";
contract.secType = "CMDTY";
contract.exchange = "SMART";
contract.currency = "USD";
```

#### C#

```csharp
Contract contract = new Contract();
contract.Symbol = "XAUUSD";
contract.SecType = "CMDTY";
contract.Exchange = "SMART";
contract.Currency = "USD";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "XAUUSD"
contract.SecType = "CMDTY"
contract.Exchange = "SMART"
contract.Currency = "USD"
```
