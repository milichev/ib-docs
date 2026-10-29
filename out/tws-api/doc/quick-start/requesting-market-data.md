[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/requesting-market-data)

# Requesting Market Data

Requesting market data first requires the definition of a contract object for which to return market data for.

The [`reqMarketDataType()`](../md/delayed-data.md#request-market-data-type) function sets the market data type. The type can either be live, frozen, delayed, or delayed frozen. The differences between these types are described [here](../md/delayed-data.md).

The `reqMktData()` function returns data through the [`tickPrice()`](../md/streaming-data.md#ewrappertickprice) and [`tickSize()`](../md/streaming-data.md#ewrapperticksize) callback functions.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python and Visual Basic can be found in the /samples directory of the downloaded TWS API file.

```python title={"Python"}
from ibapi.client import *
from ibapi.wrapper import *
import time
import threading
from ibapi.ticktype import TickTypeEnum

# Default Ports:
# TWS Live Account: 7946
# TWS Paper Account: 7947
# IB Gateway Live Account: 4001
# IB Gateway Paper Account: 4002
port = 4002

class TestApp(EClient, EWrapper):
    def __init__(self):
        EClient.__init__(self, self)

    def nextValidId(self, orderId: OrderId):
        self.orderId = orderId

    def nextId(self):
        self.orderId += 1
        return self.orderId

    def error(self, reqId, errorTime, errorCode, errorString, advancedOrderReject=""):
        print(
            f"reqId: {reqId}, errorCode: {errorCode}, errorString: {errorString}, orderReject: {advancedOrderReject}"
        )

    def tickPrice(self, reqId, tickType, price, attrib):
        print(
            f"reqId: {reqId}, tickType: {TickTypeEnum.toStr(tickType)}, price: {price}, attrib: {attrib}"
        )

    def tickSize(self, reqId, tickType, size):
        print(f"reqId: {reqId}, tickType: {TickTypeEnum.toStr(tickType)}, size: {size}")

app = TestApp()
app.connect("127.0.0.1", port, 0)
threading.Thread(target=app.run).start()
time.sleep(1)

mycontract = Contract()
mycontract.symbol = "AAPL"
mycontract.secType = "STK"
mycontract.exchange = "SMART"
mycontract.currency = "USD"

app.reqMarketDataType(3)
app.reqMktData(app.nextId(), mycontract, "", False, False, [])

```
