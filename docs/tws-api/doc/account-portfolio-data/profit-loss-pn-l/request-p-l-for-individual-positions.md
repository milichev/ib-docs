[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/profit-loss-pn-l/request-p-l-for-individual-positions)

# Request P&L for individual positions

Subscribe using the IBApi::EClient::reqPnLSingle function Cannot be used with IBroker accounts configured for on-demand lookup with account = 'All'. Currently updates are returned to IBApi.EWrapper.pnlSingle approximately once per second\*.

* If a P\&L subscription request is made for an invalid conId or contract not in the account, there will not be a response.
* As elsewhere in the API, a max double value will indicate an 'unset' value. This corresponds to an empty cell in TWS.
* Introducing broker accounts without a large number of subaccounts (\<50) can receive aggregate data by specifying the account as "All".
* \*Cannot be used with IBroker accounts configured for on-demand lookup with account = 'All'

\*subject to change in the future.

#### EClient.reqPnLSingle (

**reqId:** int. Request identifier for to track the data.

**account:** String. Account in which position exists

**modelCode:** String. Model in which position exists

**conId:** int. Contract ID (conId) of contract to receive daily PnL updates for. Note: does not return message if invalid conId is entered

)

Requests real time updates for daily PnL of individual positions.

#### Python

```python
self.reqPnLSingle(requestId, "U1234567", "", 265598)
```

#### Python

```python
from ibapi.client import *
from ibapi.wrapper import *
import time

class TradeApp(EWrapper, EClient): 
    def __init__(self): 
        EClient.__init__(self, self) 

    def pnlSingle(self, reqId: int, pos: Decimal, dailyPnL: float, unrealizedPnL: float, realizedPnL: float, value: float):
        print("Daily PnL Single. ReqId:", reqId, "Position:", pos, "DailyPnL:", dailyPnL, "UnrealizedPnL:", unrealizedPnL, "RealizedPnL:", realizedPnL, "Value:", value)

app = TradeApp()      
app.connect("127.0.0.1", 7496, clientId=1)

time.sleep(1)
app.reqPnLSingle(101, "U123456", "", 8314) #IBM conId: 8314

app.run()
```

#### Java

```java
client.reqPnLSingle(requestId, "U1234567", "", 265598);
```

#### C++

```cpp
m_pClient->reqPnLSingle(requestId, "U1234567", "", 265598);
```

#### C#

```csharp
client.reqPnLSingle(requestId, "U1234567", "", 265598);
```

#### Python

```python
client.reqPnLSingle(requestId, "U1234567", "", 265598)
```
