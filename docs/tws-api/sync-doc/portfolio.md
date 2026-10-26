[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/portfolio)

# get_portfolio()

The `get_portfolio()` function requests portfolio details for the selected account or all accounts available to the user.

## Request Arguments

**`account_code`** `string`

The account ID to pull portfolio information for. Pass an empty string to request portfolio data for all available accounts.

---

**`timeout`** `int32`

Duration to wait for the response until termination. Function-specific timeout default of 10 seconds.

---

## Response Object

Returns a dictionary keyed by account ID. Each value is a list of position objects for all contracts held in that account.

#### Properties

**`{AccountId}`** `object`

A map keyed by account identifier (e.g., `U1234567`). Each key contains a list of position objects for that account.

---

**`contract`** `object`

[Contract Object](../doc/contracts-financial-instruments/the-contract-object.md) for the instrument held.

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
