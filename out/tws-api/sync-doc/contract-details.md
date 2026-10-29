[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/contract-details)

# get_contract_details()

Interactive Brokers trading is centered around [Contract Objects](/docs/tws-api/doc/contracts/object). This is used when submitting requests for market data, retrieving position information, and placing orders. The Synchronous Wrapper utilizes the same [Contract Object](/docs/tws-api/doc/contracts/object) as the standard TWS API.

Passing as much known information through a Contract Details request will return all contracts that match the requesting information. At a minimum, the Contract ID, or Symbol and Security Type must be passed for contract discovery.

## Request Arguments

**`contract`** `object` — required

[Contract Object](/docs/tws-api/doc/contracts/object) containing the details to search for.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 5 seconds.

---

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"

app.get_contract_details(contract=contract)
```

## Response Object

The `get_contract_details()` function will return a list of [Contract](/docs/tws-api/doc/contracts/object) objects. Unless a relatively narrow scope is provided during the initial contract details request, multiple contract objects may be returned within the list. Please be aware that directly printing this information may result in the memory address being displayed, such as `3039334541648` in the example below.

```python wordWrap
[3039334541648: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: SMART, PrimaryExchange: ISLAND, Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:,NMS,0.01, ...]
```

## Example Implementation

```python
from ibapi.sync_wrapper import TWSSyncWrapper
app = TWSSyncWrapper(timeout=30)

# Connect to TWS
if not app.connect_and_start(host="127.0.0.1", port=7496, client_id=0):
    # If the connection fails and False is returned, notify the user and gracefully exit the application.
    print("Failed to connect to TWS")
    exit(1)
else:
    # If the connection succeeded, notify the user.
    print("Connected to TWS")

contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"

AAPL_CONTRACT = app.get_contract_details(contract=contract)[0]
```
