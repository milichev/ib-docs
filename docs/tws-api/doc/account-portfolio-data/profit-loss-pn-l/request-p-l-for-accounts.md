[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/request-p-l-for-accounts)

# Request P&L for accounts

Subscribe using the IBApi::EClient::reqPnL function. Updates are sent to IBApi.EWrapper.pnl.

* Introducing broker accounts with less than 50 subaccounts can receive aggregate PnL for all subaccounts by specifying 'All' as the account code.
* With requests for advisor accounts with many subaccounts and/or positions can take several seconds for aggregated P\&L to be computed and returned.
* For account P\&L data the TWS setting "Prepare portfolio PnL data when downloading positions" must be checked.

#### EClient.reqPnL (

**reqId:** int. Request ID to track the data.

**account:** String. Account for which to receive PnL updates

**modelCode:** String. Specify to request PnL updates for a specific model.\
)

Creates subscription for real time daily PnL and unrealized PnL updates.

#### Python

```python
self.reqPnL(reqId, "U1234567", "")
```

#### Python

```python
from ibapi.client import *
from ibapi.wrapper import *
import time

class TradeApp(EWrapper, EClient): 
    def __init__(self): 
        EClient.__init__(self, self) 

    def pnl(self, reqId: int, dailyPnL: float, unrealizedPnL: float, realizedPnL: float):
        print("Daily PnL. ReqId:", reqId, "DailyPnL:", dailyPnL, "UnrealizedPnL:", unrealizedPnL, "RealizedPnL:", realizedPnL)

app = TradeApp()      
app.connect("127.0.0.1", 7496, clientId=1)

time.sleep(1)
app.reqPnL(102, "U123456", "")

app.run()
```

#### C++

```cpp
client.reqPnL(reqId, "U1234567", "");
```

#### C++

```cpp
m_pClient->reqPnL(reqId, "U1234567", "");
```

#### C#

```csharp
client.reqPnL(reqId, "U1234567", "");
```

#### VB.NET

```vbnet
client.reqPnL(reqId, "U1234567", "")
```
