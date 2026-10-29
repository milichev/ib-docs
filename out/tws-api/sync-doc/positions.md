[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/positions)

# get_positions()

The `get_positions()` function requests position details for all accounts available to the user. Positions are returned in a dictionary keyed by account ID.

## Request Arguments

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 10 seconds.

---

```python
app.get_positions()
```

## Response Object

Returns a dictionary keyed by account ID. Each value is a list of position objects for all contracts held in that account.

#### Properties

**`{AccountId}`** `object`

A map keyed by account identifier (e.g., `U1234567`). Each key contains a list of position objects for that account.

---

**`contract`** `object`

[Contract Object](/docs/tws-api/doc/contracts/object) for the instrument held.

---

**`position`** `decimal`

The total number of shares held in the account.

---

**`avgCost`** `float`

The average price across executions for the position.

---

```json wordWrap
{'U1234567': [{'contract': 2333839861008: ConId: 340216238, Symbol: COIL, SecType: FUT, LastTradeDateOrContractMonth: 20251031, Strike: 0, Right: , Multiplier: 1000, Exchange: IPE, PrimaryExchange: , Currency: , LocalSymbol: COILZ5, TradingClass: COIL, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'position': Decimal('4'), 'avgCost': 61359.9}]}
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

positions = app.get_positions(account_code='U1234567')
for position in positions['U1234567']:
    print(position)
```
