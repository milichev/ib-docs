[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions-by-model/request-positions-by-model)

# Request Positions By Model

#### EClient.reqPositionsMulti(

**requestId:** int. Request's identifier.

**account:** String. If an account Id is provided, only the account's positions belonging to the specified model will be delivered.

**modelCode:** String. The code of the model's positions we are interested in.\
)

Requests position subscription for account and/or model Initially all positions are returned, and then updates are returned for any position changes in real time.

#### Python

```python
self.reqPositionsMulti(requestid, "U1234567", "")
```

#### Python

```python
from ibapi.client import *
from ibapi.wrapper import *
import threading
import time

class TradingApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self,self)

    def positionMulti(self, reqId: int, account: str, modelCode: str, contract: Contract, pos: Decimal, avgCost: float):
       print("PositionMulti. RequestId:", reqId, "Account:", account, "ModelCode:", modelCode, "Contract:", contract, ",Position:", pos, "AvgCost:", avgCost)         

    def positionMultiEnd(self, reqId: int):
        print("")
        print("PositionMultiEnd. RequestId:", reqId)       

def websocket_con():
    app.run()

app = TradingApp()      
app.connect("127.0.0.1", 7497, clientId=1)

con_thread = threading.Thread(target=websocket_con, daemon=True)
con_thread.start()
time.sleep(1) 

app.reqPositionsMulti(2, "DU1234567", "")  #To specify a U-account number
time.sleep(1)

app.reqPositionsMulti(3, "Group1", "")     #To specify a Financial Advisor Group / Profile 
time.sleep(1)
```

#### Java

```java
client.reqPositionsMulti(requestid, "U1234567", "");
```

#### C++

```cpp
m_pClient->reqPositionsMulti(requestid, "U1234567", "");
```

#### C#

```csharp
client.reqPositionsMulti(requestid, "U1234567", "");
```

#### VB.NET

```vbnet
client.reqPositionsMulti(requestid, "U1234567", "")
```
