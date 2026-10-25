[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-update-by-model/requesting-account-update-by-model)

# Requesting Account Update by Model

The IBApi.EClient.reqAccountUpdatesMulti can be used in any account structure to create simultaneous account value subscriptions from one or multiple accounts and/or models. As with IBApi.EClient.reqAccountUpdates the data returned will match that displayed within the TWS Account Window.

#### EClient.reqAccountUpdatesMulti (

**reqId:** int. Identifier to label the request

**account:** String. Account values can be requested for a particular account

**modelCode:** String. Values can also be requested for a model

**ledgerAndNLV:** bool. returns light-weight request; only currency positions as opposed to account values and currency positions

)

Requests account updates for account and/or model.

IBApi.EClient.reqAccountUpdatesMulti cannot be used with Account="All" in IBroker accounts with more than 50 subaccounts.

A profile name can be accepted in place of group in the account parameter for [Financial Advisors](../positions-by-model/request-positions-by-model.md)

#### Python

```python
self.reqAccountUpdatesMulti(reqId, self.account, "", True)
```

#### Python

```python
from ibapi.client import *
from ibapi.wrapper import *
import time

class TradeApp(EWrapper, EClient): 
    def __init__(self): 
        EClient.__init__(self, self) 

    def accountUpdateMulti(self, reqId: int, account: str, modelCode: str, key: str, value: str, currency: str):
        print("AccountUpdateMulti. RequestId:", reqId, "Account:", account, "ModelCode:", modelCode, "Key:", key, "Value:", value, "Currency:", currency)

    def accountUpdateMultiEnd(self, reqId: int):
        print("AccountUpdateMultiEnd. RequestId:", reqId)

app = TradeApp()      
app.connect("127.0.0.1", 7496, clientId=1)

time.sleep(1)

app.reqAccountUpdatesMulti(103, 'U123456', "", True)

app.run()
```

#### Java

```java
client.reqAccountUpdatesMulti(reqId, "U1234567", "", true);
```

#### C++

```cpp
m_pClient->reqAccountUpdatesMulti(reqId, "U1234567", "", true);
```

#### C#

```csharp
client.reqAccountUpdatesMulti(reqId, "U1234567", "", true);
```

#### VB.NET

```vbnet
client.reqAccountUpdatesMulti(reqId, "U1234567", "", True)
```
