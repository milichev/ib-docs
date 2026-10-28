> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Account Ledger

## Subscribe to Account Ledger

Request account ledger details for a given account, providing balance and market value data sorted by currency.

### Request

`sld+{{accountId}}+{"keys":["Key1", "Key2"], "fields":["Field1", "Field2"]}`

#### Properties

**`sld`** `const`

The leading topic message indicating a request to subscribe to account ledger details.

---

**`accountId`** `string`

The `accountId` variable indicates the Interactive Brokers account identifier to retrieve ledger details for. Only one `accountId` may be included per request.

---

`object`

---

**`keys`** `array`

An array of currency keys to filter in. If no value is passed, all currencies are requested. Pass currency identifiers in the format `"LedgerListXXX"`, where `XXX` is the three-character currency code, or `"LedgerListBASE"` for the account's base currency.

#### Example Values

`"LedgerListBASE"`, `"LedgerListUSD"`, `"LedgerListEUR"`, `"LedgerListCAD"`, `"LedgerListCHF"`

---

**`fields`** `array`

An array of field names to filter responses. If no values are passed, all fields are returned for all currencies.

#### Supported Values

`"cashbalance"`, `"cashBalanceFXSegment"`, `"commodityMarketValue"`, `"corporateBondsMarketValue"`, `"dividends"`, `"exchangeRate"`, `"funds"`, `"interest"`, `"issueOptionsMarketValue"`, `"marketValue"`, `"moneyFunds"`, `"netLiquidationValue"`, `"optionMarketValue"`, `"realizedPnl"`, `"secondKey"`, `"settledCash"`, `"stockMarketValue"`, `"tBillsMarketValue"`, `"tBondsMarketValue"`, `"unrealizedPnl"`, `"warrantsMarketValue"`

---

```
sld+U1234567+{"keys":["LedgerListBASE","LedgerListEUR"], "fields":["cashbalance","exchangeRate"]}
```

### Response

A new message is published every 10 seconds until the `sld` topic is unsubscribed. A given message will only deliver a currency's field data when a change occurred for that currency in the preceding interval. If no change occurred, the currency's entry will contain only the currency key and a timestamp.

Note that all currency values of JSON number type will be presented with a fractional component following a decimal point, and may also include an exponential component following an `E` if sufficiently large.

#### Properties

**`result`** `array` — required

Key containing an array of account ledger objects, each representing one currency in the account.

---

`object`

---

**`key`** `string` — required

Currency identifier string in the form `"LedgerListXXX"`, where `XXX` is the three-character currency code, or `"LedgerListBASE"` for the account's base currency.

---

**`timestamp`** `integer` — required

The timestamp reflecting when the currency's values were retrieved.

---

**`acctCode`** `string`

The account containing the currency position described by the accompanying data.

---

**`cashbalance`** `number`

Cash balance for the given currency.

---

**`cashBalanceFXSegment`** `number`

Cash balance attributed to the FX segment.

---

**`commodityMarketValue`** `number`

Market value of commodity positions in this currency.

---

**`corporateBondsMarketValue`** `number`

Market value of corporate bond positions in this currency.

---

**`dividends`** `number`

Dividends received in this currency.

---

**`exchangeRate`** `number`

Exchange rate of this currency relative to the account's base currency.

---

**`funds`** `number`

Market value of fund positions in this currency.

---

**`interest`** `number`

Accrued interest in this currency.

---

**`issueOptionsMarketValue`** `number`

Market value of issued options in this currency.

---

**`marketValue`** `number`

Total market value of all positions in this currency.

---

**`moneyFunds`** `number`

Market value of money market fund positions in this currency.

---

**`netLiquidationValue`** `number`

Net liquidation value for this currency.

---

**`optionMarketValue`** `number`

Market value of option positions in this currency.

---

**`realizedPnl`** `number`

Realized profit and loss in this currency.

---

**`secondKey`** `string`

The three-character currency code associated with the `key`.

---

**`settledCash`** `number`

Settled cash balance in this currency.

---

**`stockMarketValue`** `number`

Market value of stock positions in this currency.

---

**`tBillsMarketValue`** `number`

Market value of T-bill positions in this currency.

---

**`tBondsMarketValue`** `number`

Market value of T-bond positions in this currency.

---

**`unrealizedPnl`** `number`

Unrealized profit and loss in this currency.

---

**`warrantsMarketValue`** `number`

Market value of warrant positions in this currency.

---

**`severity`** `integer` — required

Internal use. Returns `0`.

---

**`topic`** `string` — required, default: sld+\{\{accountId}}

Returns the sld topic and accountId.

---

```json wordWrap
{"result":[{"acctCode":"DU1234567","cashbalance":2.0201311791131118E8,"cashBalanceFXSegment":0.0,"commodityMarketValue":0.0,"corporateBondsMarketValue":0.0,"key":"LedgerListBASE","dividends":0.0,"exchangeRate":1.0,"funds":0.0,"marketValue":0.0,"optionMarketValue":0.0,"interest":396687.69214935537,"issueOptionsMarketValue":0.0,"moneyFunds":0.0,"netLiquidationValue":2.0280151634374067E8,"realizedPnl":0.0,"unrealizedPnl":249013.5397937378,"secondKey":"BASE","settledCash":2.0201311791131118E8,"severity":0,"stockMarketValue":391710.74028015137,"tBillsMarketValue":0.0,"tBondsMarketValue":0.0,"warrantsMarketValue":0.0,"timestamp":1700248325},{"key":"LedgerListCAD","timestamp":1700248325},{"key":"LedgerListUSD","timestamp":1700248325},{"key":"LedgerListEUR","timestamp":1700248325},{"key":"LedgerListCHF","timestamp":1700248325}],"topic":"sld+DU1234567"}
```

---

## Unsubscribe from Account Ledger

`uld+{{accountId}}+{}`

Request to cancel an Account Ledger stream for the given account.

### Request

#### Properties

**`uld`** `const`

Unsubscribes the user from account ledger information for the specified account.

---

**`accountId`** `string`

The `accountId` variable indicates the Interactive Brokers account identifier to unsubscribe ledger details for. Only one `accountId` may be included per request.

---

```
uld+U1234567+{}
```

### Response Example

Unsubscribing from account ledger updates does not deliver any acknowledgement. It would be expected for `sld` responses to immediately halt.