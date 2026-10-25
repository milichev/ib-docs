[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-summary/requesting-account-summary)

# Requesting Account Summary

Requests a specific account's summary. This method will subscribe to the account summary as presented in the TWS' Account Summary tab. Customers can specify the data received by using a specific tags value. See the Account Summary Tags section for available options.

Alternatively, many languages offer the import of AccountSummaryTags with a method to retrieve all tag values.

#### EClient.reqAccountSummary (

**reqId:** int. The unique request identifier.

**group:** String. set to "All" to return account summary data for all accounts, or set to a specific Advisor Account Group name that has already been created in TWS Global Configuration.

**tags:** String. A comma separated list with the [desired tags](#account-summary-tags)

)

**Important:** only **two** active summary subscriptions are allowed at a time!

#### Python

```python
self.reqAccountSummary(9001, "All", AccountSummaryTags.AllTags)
```

#### Python

```python
from ibapi.client import *
from ibapi.wrapper import *
from ibapi.contract import Contract
import time

class TradeApp(EWrapper, EClient): 
    def __init__(self): 
        EClient.__init__(self, self) 

    def accountSummary(self, reqId: int, account: str, tag: str, value: str,currency: str):
        print("AccountSummary. ReqId:", reqId, "Account:", account,"Tag: ", tag, "Value:", value, "Currency:", currency)

    def accountSummaryEnd(self, reqId: int):
        print("AccountSummaryEnd. ReqId:", reqId)

app = TradeApp()      
app.connect("127.0.0.1", 7496, clientId=1)

time.sleep(1)

app.reqAccountSummary(9001, "All", 'NetLiquidation')
app.run()
```

#### Java

```java
client.reqAccountSummary(9001, "All", "AccountType,NetLiquidation,TotalCashValue,SettledCash,AccruedCash,BuyingPower,EquityWithLoanValue,PreviousEquityWithLoanValue,GrossPositionValue,ReqTEquity,ReqTMargin,SMA,InitMarginReq,MaintMarginReq,AvailableFunds,ExcessLiquidity,Cushion,FullInitMarginReq,FullMaintMarginReq,FullAvailableFunds,FullExcessLiquidity,LookAheadNextChange,LookAheadInitMarginReq ,LookAheadMaintMarginReq,LookAheadAvailableFunds,LookAheadExcessLiquidity,HighestSeverity,DayTradesRemaining,Leverage");
```

#### C++

```cpp
m_pClient->reqAccountSummary(9001, "All", AccountSummaryTags::getAllTags());
```

#### C#

```csharp
client.reqAccountSummary(9001, "All", AccountSummaryTags.GetAllTags());
```

#### VB.NET

```vbnet
client.reqAccountSummary(9001, "All", AccountSummaryTags.GetAllTags())
```
