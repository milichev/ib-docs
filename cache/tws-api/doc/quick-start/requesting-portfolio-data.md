> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Requesting Portfolio Data

Requesting portfolio data requires the use of the [`reqAccountUpdates()`](/docs/tws-api/doc/accounts/updates) function which returns data via the [`updateAccountValue()`](/docs/tws-api/doc/accounts/updates#ewrapperupdateaccountvalue-), [`updatePortfolio()`](/docs/tws-api/doc/accounts/updates#ewrapperupdateportfolio-), and the [`updateAccountTime()`](/docs/tws-api/doc/accounts/updates#ewrapperupdateaccounttime-) callback functions.

The [`accountDownloadEnd()`](/docs/tws-api/doc/accounts/updates#ewrapperaccountdownloadend-) callback function runs when all account information has been returned.

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