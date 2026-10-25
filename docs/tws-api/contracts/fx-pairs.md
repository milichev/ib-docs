[source](https://www.interactivebrokers.com/docs/tws-api/contracts/fx-pairs)

# FX Pairs

**Symbol:** String. Specify the target currency. For orders, this will dictate the quantity value.

**SecType:** String. Specify CASH.

**Exchange:** String. Specify IDEAL for Virtual Forex or IDEALPRO for true forex trading.

**Currency:** String. Specify the base currency forex pair. This will dictate size with cash quantity trades.

#### Python

```python
contract = Contract()
contract.symbol = "EUR"
contract.secType = "CASH"
contract.exchange = "IDEALPRO"
contract.currency = "GBP"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("EUR");
contract.secType("CASH");
contract.exchange("IDEALPRO");
contract.currency("GBP");
```

#### C++

```cpp
Contract contract;
contract.symbol = "EUR";
contract.secType = "CASH";
contract.exchange = "IDEALPRO";
contract.currency = "GBP";
```

#### C#

```csharp
Contract contract = new Contract();
contract.Symbol = "EUR";
contract.SecType = "CASH";
contract.Exchange = "IDEALPRO";
contract.Currency = "GBP";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "EUR"
contract.SecType = "CASH"
contract.Exchange = "IDEALPRO"
contract.Currency = "GBP"
```
