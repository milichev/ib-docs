[source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/requesting-portfolio-data)

# Requesting Portfolio Data

Requesting portfolio data requires the use of the [`reqAccountUpdates()`](../account-portfolio-data/account-updates/requesting-account-updates.md) function which returns data via the [`updateAccountValue()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateaccountvalue-), [`updatePortfolio()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateportfolio-), and the [`updateAccountTime()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperupdateaccounttime-) callback functions.

The [`accountDownloadEnd()`](../account-portfolio-data/account-updates/receiving-account-updates.md#ewrapperaccountdownloadend-) callback function runs when all account information has been returned.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python and Visual Basic can be found in the /samples directory of the downloaded TWS API file.

```python title={"Python"}
from ibapi.client import EClient
from ibapi.wrapper import EWrapper
from ibapi.contract import Contract
import time
import threading

port = 4002

class TestApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self, self)
        self.nextOrderId = None

    def error(self, reqId, errorTime, errorCode, errorString, advancedOrderReject=""):
        print("Error: ", reqId, " ", errorCode, " ", errorString)

    def nextValidId(self, orderId):
        self.nextOrderId = orderId

    def updatePortfolio(
        self,
        contract: Contract,
        position: float,
        marketPrice: float,
        marketValue: float,
        averageCost: float,
        unrealizedPNL: float,
        realizedPNL: float,
        accountName: str,
    ):
        print(
            "UpdatePortfolio.",
            "Symbol:",
            contract.symbol,
            "SecType:",
            contract.secType,
            "Exchange:",
            contract.exchange,
            "Position:",
            position,
            "MarketPrice:",
            marketPrice,
            "MarketValue:",
            marketValue,
            "AverageCost:",
            averageCost,
            "UnrealizedPNL:",
            unrealizedPNL,
            "RealizedPNL:",
            realizedPNL,
            "AccountName:",
            accountName,
        )

    def updateAccountValue(self, key: str, val: str, currency: str, accountName: str):
        print(
            "UpdateAccountValue. Key:",
            key,
            "Value:",
            val,
            "Currency:",
            currency,
            "AccountName:",
            accountName,
        )

    def updateAccountTime(self, timeStamp: str):
        print("UpdateAccountTime. Time:", timeStamp)

    def accountDownloadEnd(self, accountName: str):
        print("AccountDownloadEnd. Account:", accountName)


app = TestApp()
app.connect("127.0.0.1", port, 0)
threading.Thread(target=app.run).start()
time.sleep(1)

app.reqAccountUpdates(True, "")
```
