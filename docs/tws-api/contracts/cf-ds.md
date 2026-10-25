[source](https://www.interactivebrokers.com/docs/tws-api/contracts/cf-ds)

# CFDs

**Symbol:** String. Specify the symbol of the CFD.

**SecType:** String. Specify CFD.

**Exchange:** String. Specify SMART.

**Currency:** String. Specify the base currency the CFD is traded with.

#### Python

```python
contract = Contract()
contract.symbol = "IBDE30"
contract.secType = "CFD"
contract.currency = "EUR"
contract.exchange = "SMART"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("IBDE30");
contract.secType("CFD");
contract.currency("EUR");
contract.exchange("SMART");
```

#### C++

```cpp
Contract contract;
contract.symbol = "IBDE30";
contract.secType = "CFD";
contract.currency = "EUR";
contract.exchange = "SMART";
```

#### C#

```csharp
Contract contract = new Contract();
contract.Symbol = "IBDE30";
contract.SecType = "CFD";
contract.Currency = "EUR";
contract.Exchange = "SMART";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "IBDE30"
contract.SecType = "CFD"
contract.Currency = "EUR"
contract.Exchange = "SMART"
```
