> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# get\_market\_data\_snapshot()

Users may request market data using `get_market_data_snapshot()` to retrieve available market data. The request currently supports [tickPrice, tickSize, tickString, tickGeneric, tickNews, and tickOptionCompution](/docs/tws-api/doc/md/streaming-data#receive-data) data.

## Request Arguments

**`contract`** `object` — required

[Contract Object](/docs/tws-api/doc/contracts/object) for the instrument to retrieve market data for.

---

**`generic_tick_list`** `string`

Comma-separated values to determine additional data to retrieve. Defaults to an empty string, returning only the basic data such as Last, Bid, and Ask. See [Available Tick Types](/docs/tws-api/doc/md/streaming-data#available-tick-types) for more details.

---

**`snapshot`** `bool`

Determine if a single snapshot should be returned or if data should be continuously updated until the timeout threshold has been reached. Default: `True`, returning a snapshot of data as soon as possible.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Uses the default timeout value passed to `TWSSyncWrapper`.

---

```python
contract = Contract()
contract.symbol = "AAPL"
contract.secType = "STK"
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

market_data = app.get_market_data_snapshot(contract, "225,232", False)
```

## Response Object

Data returned by `get_market_data_snapshot()` is delivered as a dictionary object. Values are returned as the affiliated tick types alongside any price or attribute data.

#### Properties

**`{TickType}`** `string | float | decimal`

The value for the given tick type. Can include price values (`float`), size values (`decimal`), or direct information (`string`).

---

```json wordWrap
{'BID': 276.17, 'BID_SIZE': Decimal('900'), 'ASK': 276.2, 'ASK_SIZE': Decimal('300'), 'LAST_TIMESTAMP': '1764009996', 'LAST': 276.18, 'LAST_SIZE': Decimal('100'), 'VOLUME': Decimal('271511')}
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
contract.exchange = "SMART"
contract.primaryExchange = "NASDAQ"
contract.currency = "USD"

market_data = app.get_market_data_snapshot(contract)
AAPL_BID_PRICE = market_data["BID"]
```