> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Contracts specified by CUSIP, FIGI, or ISIN

**SecId:** String. Specify the CUSIP, FIGI, or ISIN code of the instrument

**SecIdType:** String. Supports "CUSIP", "FIGI", or "ISIN".

**Exchange:** String. Specify SMART.

#### Python

```python
contract = Contract()
contract.secIdType = "FIGI"
contract.secId = "BBG000B9XRY4"
contract.exchange = "SMART"
```

#### Java

```java
Contract contract = new Contract();
contract.secIdType("FIGI");
contract.secId("BBG000B9XRY4");
contract.exchange("SMART");
```

#### C++

```cpp
Contract contract;
contract.secIdType = "FIGI";
contract.secId = "BBG000B9XRY4";
contract.exchange = "SMART";
```

#### C\#

```csharp
Contract contract = new Contract();
contract.SecIdType = "FIGI";
contract.SecId = "BBG000B9XRY4";
contract.Exchange = "SMART";
```

#### VB.NET

```vbnet
Dim contract As Contract = New Contract
contract.SecIdType = "FIGI"
contract.SecId = "BBG000B9XRY4"
contract.Exchange = "SMART"
```