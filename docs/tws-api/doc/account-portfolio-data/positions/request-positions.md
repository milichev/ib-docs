[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/positions/request-positions)

# Request Positions

#### EClient.reqPositions()

Subscribes to position updates for all accessible accounts. All positions sent initially, and then only updates as positions change.

#### Python

```python
self.reqPositions()
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

    def position(self, account: str, contract: Contract, position: Decimal, avgCost: float):
        print("Position.", "Account:", account, "Contract:", contract, "Position:", position, "Avg cost:", avgCost)

    def positionEnd(self):
       print("PositionEnd")

def websocket_con():
    app.run()

app = TradingApp()      
app.connect("127.0.0.1", 7496, clientId=1)

con_thread = threading.Thread(target=websocket_con, daemon=True)
con_thread.start()
time.sleep(1) 

app.reqPositions()
time.sleep(1)
```

#### Java

```java
client.reqPositions();
```

#### C++

```cpp
m_pClient->reqPositions();
```

#### C#

```csharp
client.reqPositions();
```

#### VB.NET

```vbnet
client.reqPositions()
```
