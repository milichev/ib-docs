> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

With the release of TWS API 10.40, Interactive Brokers has introduced the Synchronous API Wrapper class, combining the functionality of EClient and EWrapper. This class provides a synchronous structure so that values are returned directly through the function call rather than handled by a separate streaming class.

The interface is exclusively available through the *Python* programming language.

The content shown here is an example of what the Sync Wrapper structure looks like and how it can be used to build a contract, request market data, then place an order.

#### Initialize our connection

```python
# Import our Sync Wrapper and Contract objects
from ibapi.sync_wrapper import *
from datetime import datetime

# Instantiate the reference for our sync class
app = TWSSyncWrapper(timeout=30)

# make a connection to Trader Workstation
# In this case, we're connecting on Localhost with port 7496 and Client ID 0.
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=8675309):
    print("Failed to connect to TWS")
    exit(1)
else:
    print("Connected to TWS")
```

This will display `"Connected to TWS"` in our console.

```
ERROR -1 1761170335710 2104 Market data farm connection is OK:usbond
ERROR -1 1761170335711 2104 Market data farm connection is OK:usfarm.nj
ERROR -1 1761170335712 2104 Market data farm connection is OK:eufarm
ERROR -1 1761170335712 2104 Market data farm connection is OK:usfarm
ERROR -1 1761170335712 2106 HMDS data farm connection is OK:ushmds
ERROR -1 1761170335713 2158 Sec-def data farm connection is OK:secdefil
Connected to TWS
```

For those familiar with the standard Trader Workstation API, this function call for `connect_and_start` consolidate the requests for `connect()` and `run()` while also splitting the `run()` functionality to it's own thread.

#### Establish Our Contract Object

Now that the session is connect, we are able to start working with the API.
In this scenario, we will define and qualify a Contract object to trade. Here we are trading `AAPL`, though the procedure can be interchanged with any [supported product at Interactive Brokers](https://www.interactivebrokers.com/en/trading/products-exchanges.php#/).

```python
    # Create a contract class reference.
    contract = Contract()
    contract.symbol = "AAPL"
    contract.secType = "STK"
    contract.exchange = "SMART"
    contract.currency = "USD"

    contract_details = app.get_contract_details(contract)
    print(contract_details)
```

Contract details requests will return all contracts the match the details of our contract object in a list.

```
[2970189074576: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: NASDAQ, Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:,NMS,0.01,ACTIVETIM,AD,ADDONT,ADJUST,ALERT,ALGO,ALLOC,AON,AVGCOST,BASKET,BENCHPX,CASHQTY,COND,CONDORDER,DARKONLY,DARKPOLL,DAY,DEACT,DEACTDIS,DEACTEOD,DIS,DUR,GAT,GTC,GTD,GTT,HID,IBKRATS,ICE,IMB,IOC,LIT,LMT,LOC,MIDPX,MIT,MKT,MOC,MTL,NGCOMB,NODARK,NONALGO,OCA,OPG,OPGREROUT,PEGBENCH,PEGMID,POSTATS,POSTONLY,PREOPGRTH,PRICECHK,REL,REL2MID,RELPCTOFS,RPI,RTH,SCALE,SCALEODD,SCALERST,SIZECHK,SMARTSTG,SNAPMID,SNAPMKT,SNAPREL,STP,STPLMT,SWEEP,TRAIL,TRAILLIT,TRAILLMT,TRAILMIT,WHATIF,SMART,AMEX,NYSE,CBOE,PHLX,ISE,CHX,ARCA,NASDAQ,DRCTEDGE,BEX,BATS,EDGEA,BYX,IEX,EDGX,FOXRIVER,PEARL,NYSENAT,LTSE,MEMX,IBEOS,OVERNIGHT,TPLUS0,PSX,T24X,TXSE,1,0,APPLE INC,,Technology,Computers,Computers,US/Eastern,20261001:0400-20261001:2000;20261002:0400-20261002:2000;20261003:CLOSED;20261004:CLOSED;20261005:0400-20261005:2000;20261006:0400-20261006:2000,20261001:0930-20261001:1600;20261002:0930-20261002:1600;20261003:CLOSED;20261004:CLOSED;20261005:0930-20261005:1600;20261006:0930-20261006:1600,,0,,,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,4563,1,[2970193668944: ISIN=US0378331005;],,COMMON,,,,,,False,False,0,False,,,,,False,,0.0001,0.0001,40,0,0.000001,0.000001,None,,,,]
```

Because a list is returned, we are taking the first (or 0 index) contract returned.

```python
    aapl_contract = contract_details[0].contract
    print(aapl_contract)
```

This returns a single qualified contract which can be used in market data requests or order submissions.

```
ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: NASDAQ, Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:
```

We can save time in future sessions by storing information like the ConID and Exchange to a database for future reference.

#### Request Market Data

With a qualified contract, we begin acting on the behavior. In this case, we need to find the current price of the contract prior to submitting a trade.
This is done with `get_market_data_snapshot()` and retrieving the [tick type](/docs/tws-api/doc/md/streaming-data#available-tick-types) from the returned list.

```python
    market_data = app.get_market_data_snapshot(aapl_contract)
    print(market_data)
```

This will return a dictionary of [tick types](/docs/tws-api/doc/md/streaming-data#available-tick-types).

```
{'BID': 330.1, 'BID_SIZE': Decimal('40'), 'ASK': 330.2, 'ASK_SIZE': Decimal('760'), 'LAST': 330.1155, 'LAST_SIZE': Decimal('50'), 'VOLUME': Decimal('36236375'), 'HIGH': 332.4816, 'LOW': 325.81, 'CLOSE': 333.019989, 'OPEN': 329.6, 'BID_EXCH': 'Z', 'ASK_EXCH': 'KP', 'LAST_EXCH': 'D', 'LAST_TIMESTAMP': '1790891266', 'HALTED': 0.0}
```

#### Create and Place an Order

With the price of the instrument in hand we can make an informed decision to price our trade.
We would start by defining the attributes of our order object, including those required parameters such as `action`, `orderType`, `totalQuantity`, `tif`, and because of our `orderType`, we'll also assign `lmtPrice`. The `lmtPrice` is precisely why the market data was needed in this scenario.

```python
    order = Order()
    order.action = "BUY"
    order.orderType = "LMT"
    order.totalQuantity = 100
    order.lmtPrice = round(market_data["LAST"],2)
    order.tif = "DAY"
    order.outsideRth = True
```

The `Order` class can then be submitted to the market using the `place_order_sync` function call.

```python
    order_status = app.place_order_sync(contract, order)
    print(order_status)
    oid = order_status["orderId"]
```

The returned order status object includes details like our current `'status'` and `orderId` which can be used to track the order, or cancel it if need be.

```
    {'orderId': 1784379326, 'status': 'Submitted', 'filled': Decimal('0'), 'remaining': Decimal('100'), 'avgFillPrice': 0.0, 'permId': 943637618, 'parentId': 0, 'lastFillPrice': 0.0, 'clientId': 0, 'whyHeld': '', 'mktCapPrice': 0.0}
```

#### Terminate Our Session

With the session out of the way, all that is left is to disconnect our session to avoid overlapping with the connection in the future.

```python
    app.disconnect_and_stop()
```

#### Full Script

The contents below are the full script referenced above to help test the complete example.

```python
    # Import our Sync Wrapper and Contract objects
    from ibapi.sync_wrapper import *

    # Instantiate the reference for our sync class
    app = TWSSyncWrapper(timeout=30)

    # make a connection to Trader Workstation
    # In this case, we're connecting on Localhost with port 7496 and Client ID 0.
    if not app.connect_and_start(host="127.0.0.1", port=7497, client_id=0):
    print("Failed to connect to TWS")
    exit(1)
    else:
    print("Connected to TWS")

    contract = Contract()
    contract.symbol = "AAPL"
    contract.secType = "STK"
    contract.exchange = "SMART"
    contract.primaryExchange = "ISLAND"
    contract.currency = "USD"

    contract_details = app.get_contract_details(contract)
    print(contract_details)
    aapl_contract = contract_details[0].contract
    print(aapl_contract)

    market_data = app.get_market_data_snapshot(aapl_contract)
    print(market_data)

    order = Order()
    order.action = "BUY"
    order.orderType = "LMT"
    order.totalQuantity = 100
    order.lmtPrice = round(market_data["LAST"],2)
    order.tif = "DAY"
    order.outsideRth = True

    order_status = app.place_order_sync(contract, order)
    print(order_status)
    oid = order_status["orderId"]


    app.disconnect_and_stop()
```