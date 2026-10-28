> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bonds

**Symbol:** String. The CUSIP of the bond.

**SecType:** String. Always specify as BOND.

**Exchange:** String. Smart may be specified. May direct route if interested.

**Currency:** String. Specify the base currency the BOND is traded with.

#### Python

```python
contract = Contract()
contract.symbol = "912828C57"
contract.secType = "BOND"
contract.exchange = "SMART"
contract.currency = "USD"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("912828C57");
contract.secType("BOND");
contract.exchange("SMART");
contract.currency("USD");
```

#### C++

```cpp
Contract contract;
contract.symbol = "912828C57";
contract.secType = "BOND";
contract.exchange = "SMART";
contract.currency = "USD";
```

#### C\#

```csharp
Contract contract = new Contract();
contract.Symbol = "912828C57";
contract.SecType = "BOND";
contract.Exchange = "SMART";
contract.Currency = "USD";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "912828C57"
contract.SecType = "BOND"
contract.Exchange = "SMART"
contract.Currency = "USD"
```