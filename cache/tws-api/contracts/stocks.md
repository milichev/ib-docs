> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Stocks

**Symbol:** String. Specify the symbol for the Stock or ETF.

**SecType:** String. Specify STK.

**Exchange:** String. Smart routing is available. Otherwise, a direct exchange may be specified.

**Currency:** String. Specify the base currency of the stock.

#### Python

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.currency = "USD"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("AAPL");
contract.secType("STK");
contract.exchange("SMART");
contract.currency("USD");
```

#### C++

```cpp
Contract contract;
contract.symbol = "AAPL";
contract.secType = "STK";
contract.exchange = "SMART";
contract.currency = "USD";
```

#### C\#

```csharp
Contract contract = new Contract();
contract.Symbol = "AAPL";
contract.SecType = "STK";
contract.Exchange = "SMART";
contract.Currency = "USD";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "AAPL"
contract.SecType = "STK"
contract.Exchange = "SMART"
contract.Currency = "USD"
```

For certain smart-routed stock that have the same symbol, currency and exchange, you would also need to specify the primary exchange attribute to uniquely define the This should be defined as the native exchange of a and is good practice to include for all stocks.

For the purpose of requesting market data, the routing exchange and primary exchange can be specified in a single 'exchange' field if they are separated by a valid component exchange separator, for instance exchange = "SMART:ARCA" The default separators available are colon ":" and slash "/" Other component exchange separators can be defined using the field defined in TWS Global Configuration under API -> Settings.

**Symbol:** String. Specify the symbol for the Stock or ETF.

**SecType:** String. Specify STK.

**Exchange:** String. Smart routing is available. Otherwise, a direct exchange may be specified.

**Currency:** String. Specify the base currency of the stock.

**PrimaryExchange:** Specify the primary listing exchange of the instrument.

#### Python

```python
contract = Contract()
contract.symbol = "SPY"
contract.secType = "STK"
contract.currency = "USD"
contract.exchange = "SMART"
contract.primaryExchange = "ARCA"
```

#### Java

```java
Contract contract = new Contract();
contract.symbol("SPY");
contract.secType("STK");
contract.currency("USD");
contract.exchange("SMART");
contract.primaryExchange("ARCA");
```

#### C++

```cpp
Contract contract;
contract.symbol = "SPY";
contract.secType = "STK";
contract.currency = "USD";
contract.exchange = "SMART";
contract.primaryExchange = "ARCA";
```

#### C\#

```csharp
Contract contract = new Contract();
contract.Symbol = "SPY";
contract.SecType = "STK";
contract.Currency = "USD";
contract.Exchange = "SMART";
contract.PrimaryExchange = "ARCA";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.Symbol = "SPY"
contract.SecType = "STK"
contract.Currency = "USD"
contract.Exchange = "SMART"
contract.PrimaryExchange = "ARCA"
```