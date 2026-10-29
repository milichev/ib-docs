[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/placing-orders)

# Placing Orders

Placing orders first requires a [`contract`](/docs/tws-api/doc/contracts/details) to be defined.

In the code below, the [`reqContractDetails()`](/docs/tws-api/doc/contracts/details) function initiates the sequence of function calls that place an order. Inside the defined [`contractDetails()`](/docs/tws-api/doc/contracts/details#receive-contract-details) callback function below, the [`placeOrder()`](/docs/tws-api/doc/orders/place-order#place-order) function is called, which places the order.

Data from the [`placeOrder()`](/docs/tws-api/doc/orders/place-order#place-order) function is returned via the [`openOrder()`](/docs/tws-api/doc/orders/place-order#receive-open-orders) and [`orderStatus()`](/docs/tws-api/doc/order-management/order-status) callback functions.

> **Note**
>
> Comprehensive example code for C++, C#, Java, Python, and Visual Basic can be found in the /samples directory of the downloaded TWS API file.

The requested contract object is returned via the [`contractDetails()`](/docs/tws-api/doc/contracts/details) callback function.

```python title={"Python"}
import time
import threading
from ibapi.client import *
from ibapi.wrapper import *

host = "127.0.0.1"

# Default Ports:
# TWS Live Account: 7946
# TWS Paper Account: 7947
# IB Gateway Live Account: 4001
# IB Gateway Paper Account: 4002
port = 4002

class TestApp(EClient, EWrapper):
    def __init__(self):
        EClient.__init__(self, self)
        self.nextOrderId = None

    def nextValidId(self, orderId: OrderId):
        self.nextOrderId = orderId

    def contractDetails(self, reqId: int, contractDetails: ContractDetails):
        print(contractDetails.contract)
        self.placeOrder(myOrder.orderId, contractDetails.contract, myOrder)

    def openOrder(
        self, orderId: OrderId, contract: Contract, order: Order, orderState: OrderState
    ):
        print(f"openOrder. orderId: {orderId}, contract: {contract}, order: {order}")

    def orderStatus(
        self,
        orderId: OrderId,
        status: str,
        filled: Decimal,
        remaining: Decimal,
        avgFillPrice: float,
        permId: int,
        parentId: int,
        lastFillPrice: float,
        clientId: int,
        whyHeld: str,
        mktCapPrice: float,
    ):
        print(
            f"orderId: {orderId}, status: {status}, filled: {filled}, remaining: {remaining}, avgFillPrice: {avgFillPrice}, permId: {permId}, parentId: {parentId}, lastFillPrice: {lastFillPrice}, clientId: {clientId}, whyHeld: {whyHeld}, mktCapPrice: {mktCapPrice}"
        )

    def execDetails(self, reqId: int, contract: Contract, execution: Execution):
        print(f"reqId: {reqId}, contract: {contract}, execution: {execution}")

app = TestApp()
app.connect("127.0.0.1", port, 0)
threading.Thread(target=app.run).start()
time.sleep(1)

myContract = Contract()
myContract.symbol = "AAPL"
myContract.secType = "STK"
myContract.exchange = "SMART"
myContract.currency = "USD"

myOrder = Order()
myOrder.orderId = app.nextOrderId
myOrder.action = "BUY"
myOrder.tif = "GTC"
myOrder.orderType = "LMT"
myOrder.lmtPrice = 310.00
myOrder.totalQuantity = 10

app.myOrder = myOrder
app.reqContractDetails(app.nextOrderId, myContract)

```
