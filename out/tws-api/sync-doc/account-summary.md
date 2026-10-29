[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/account-summary)

# get_account_summary()

The `get_account_summary()` function returns all relevant account details identical to Trader Workstation's "Account" window. Users may query to receive all available data or a narrow window based on the [Account Summary Tag](/docs/tws-api/doc/accounts/summary#account-summary-tags).

## Request Arguments

**`tags`** `string` — required

Account summary key value to receive data for.

---

**`group`** `string` — required

Indicates a Financial Advisor's allocation group to reference account details for. Non-advisor account structures should always pass `"All"`. Set to `"All"` by default.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 5 second.

---

```python
from ibapi.account_summary_tags import AccountSummaryTags

app.get_account_summary(AccountSummaryTags.AllTags, "All")
```

## Response Object

The total size of the response may vary depending on number of linked accounts and the number of tags requested.

#### Properties

**`AccountId`** `object`

A map keyed by account identifier (e.g., `U1234567`). Each key corresponds to a unique account.

---

**`Tag`** `object`

Metadata information describing the classifying content.

---

**`value`** `string`

The value pairing to the parent Tag title. The string contents may include values representative of currency, negative values, epoch timestamp values, and alphanumeric strings representing account types and other information.

---

**`currency`** `string`

ISO currency code associated with the value. May return an empty string if unset.

---

```json wordWrap
{'U1234567': {'AccountType': {'value': 'LLC', 'currency': ''}, 'Cushion': {'value': '0.993764', 'currency': ''}, 'DayTradesRemaining': {'value': '-1', 'currency': ''}, 'LookAheadNextChange': {'value': '1760558400', 'currency': ''}, 'AccruedCash': {'value': '262079.00', 'currency': 'USD'}, 'AvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'BuyingPower': {'value': '1466299088.69', 'currency': 'USD'}, 'EquityWithLoanValue': {'value': '221042710.95', 'currency': 'USD'}, 'ExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'FullAvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'FullExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'FullInitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'FullMaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'GrossPositionValue': {'value': '2982965.22', 'currency': 'USD'}, 'InitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'LookAheadAvailableFunds': {'value': '219944453.18', 'currency': 'USD'}, 'LookAheadExcessLiquidity': {'value': '220044618.70', 'currency': 'USD'}, 'LookAheadInitMarginReq': {'value': '1101020.27', 'currency': 'USD'}, 'LookAheadMaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'MaintMarginReq': {'value': '1000859.00', 'currency': 'USD'}, 'NetLiquidation': {'value': '221425500.56', 'currency': 'USD'}, 'PreviousDayEquityWithLoanValue': {'value': '205659145.23', 'currency': 'USD'}, 'TotalCashValue': {'value': '218181198.71', 'currency': 'USD'}}}
```
