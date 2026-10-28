> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# get\_portfolio()

The `get_portfolio()` function requests portfolio details for the selected account or all accounts available to the user.

## Request Arguments

**`account_code`** `string`

The account ID to pull portfolio information for. Pass an empty string to request portfolio data for all available accounts.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 10 seconds.

---

```python
app.get_portfolio(account_code="U1234567")
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

**`marketPrice`** `float`

The current market price of the instrument.

---

**`marketValue`** `float`

The current value of the total position.

---

**`averageCost`** `float`

The average price across executions for the position.

---

**`unrealizedPNL`** `float`

The unrealized profit and loss for the instrument.

---

**`realizedPNL`** `float`

The realized profit and loss for the instrument.

---

**`accountName`** `string`

The account identifier that holds the given position.

---

```json wordWrap
{[{'contract': 1957652380880: ConId: 265598, Symbol: AAPL, SecType: STK, LastTradeDateOrContractMonth: , Strike: 0, Right: , Multiplier: , Exchange: ISLAND, PrimaryExchange: , Currency: USD, LocalSymbol: AAPL, TradingClass: NMS, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'position': Decimal('202635'), 'marketPrice': 258.57998655, 'marketValue': 52397355.58, 'averageCost': 263.3360764, 'unrealizedPNL': -963750.26, 'realizedPNL': 0.0, 'accountName': 'DU5240685'}]}
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

for portfolio in app.get_portfolio():
    print(portfolio)
```