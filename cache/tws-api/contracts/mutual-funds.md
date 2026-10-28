> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Mutual Funds

**Symbol:** String. Specify the symbol for the mutual fund.

**SecType:** String. Specify FUND.

**Exchange:** String. Specify the exchange of the fund. FUNDSERV is the most common.

**Currency:** String. Specify the base currency of the fund.

#### Python

```python
contract = Contract()
contract.symbol = "VINIX"
contract.secType = "FUND"
contract.exchange = "FUNDSERV"
contract.currency = "USD"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("VINIX");
contract.secType("FUND");
contract.exchange("FUNDSERV");
contract.currency("USD");
```

#### C++

```cpp
Contract contract;
contract.symbol = "VINIX";
contract.secType = "FUND";
contract.exchange = "FUNDSERV";
contract.currency = "USD";
```

#### C\#

```csharp
Contract contract = new Contract();
contract.Symbol = "VINIX";
contract.SecType = "FUND";
contract.Exchange = "FUNDSERV";
contract.Currency = "USD";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "VINIX"
contract.SecType = "FUND"
contract.Exchange = "FUNDSERV"
contract.Currency = "USD"
```

Note: It is recommended to understand mutual fund orders on TWS UI before implementing via API due to restrictions enforced on trading mutual funds For example to buy ARBIX one requires to use cash quantity ie cashQty while selling ARBIX can be implemented using total quantity ie totalQuantity