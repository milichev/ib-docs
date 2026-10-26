[source](https://www.interactivebrokers.com/docs/tws-api/sync-doc/positions)

# get_positions()

The `get_positions()` function requests position details for all accounts available to the user. Positions are returned in a dictionary keyed by account ID.

## Request Arguments

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

**`avgCost`** `float`

The average price across executions for the position.

---

```json wordWrap
{'U1234567': [{'contract': 2333839861008: ConId: 340216238, Symbol: COIL, SecType: FUT, LastTradeDateOrContractMonth: 20251031, Strike: 0, Right: , Multiplier: 1000, Exchange: IPE, PrimaryExchange: , Currency: , LocalSymbol: COILZ5, TradingClass: COIL, IncludeExpired: False, SecIdType: , SecId: , Description: , IssuerId: Combo:, 'position': Decimal('4'), 'avgCost': 61359.9}]}
```

## Example Implementation
