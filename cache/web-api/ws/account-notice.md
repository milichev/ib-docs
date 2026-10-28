> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Account Notice

An account update message with the topic `act` is sent automatically when a websocket connection is first established, providing details about the brokerage accounts accessible to the authenticated user. Supplemental `act` messages are sent whenever there is a change to the account details.

### Response

#### Properties

**`topic`** `string` — required

Returns the topic of the message. Returns `"act"`.

---

**`args`** `object` — required

Object containing the account details.

---

**`accounts`** `array`

All accounts currently accessible by the authenticated user.

---

**`acctProps`** `object`

Object containing account properties keyed by account identifier or group.

---

**`hasChildAccounts`** `boolean`

Indicates whether there are subaccounts attached to the listed account.

---

**`supportsCashQty`** `boolean`

Indicates whether the account supports cash quantity orders.

---

**`noFXConv`** `boolean`

Indicates whether the account disables automatic forex conversion.

---

**`isProp`** `boolean`

Indicates whether the account is a proprietary account.

---

**`supportsFractions`** `boolean`

Indicates whether the account supports fractional trading.

---

**`allowCustomerTime`** `boolean`

Indicates whether the account returns data in the customer's local time.

---

**`aliases`** `object`

Map of accounts to their configured aliases.

---

**`allowFeatures`** `object`

Object describing the features enabled for the account.

---

**`showGFIS`** `boolean`

Determines whether the account can display GFIS data.

---

**`showEUCostReport`** `boolean`

Determines if the account receives the EU Cost Report.

---

**`allowEventContract`** `boolean`

Determines if the account can trade event contracts.

---

**`allowFXConv`** `boolean`

Determines if the account supports forex conversion.

---

**`allowFinancialLens`** `boolean`

Determines if the account supports Financial Lens. Client Portal only.

---

**`allowMTA`** `boolean`

Determines if the account supports Mobile Trading Alerts.

---

**`allowTypeAhead`** `boolean`

Determines if the account supports Type Ahead. Client Portal only.

---

**`allowEventTrading`** `boolean`

Determines if the account supports Event Trader. Client Portal only.

---

**`snapshotRefreshTimeout`** `integer`

Snapshot refresh timeout in seconds. Client Portal only.

---

**`liteUser`** `boolean`

Indicates if the account is an IBKR Lite account.

---

**`showWebNews`** `boolean`

Indicates if the account has access to web news.

---

**`research`** `boolean`

Indicates if the account has research subscriptions enabled.

---

**`debugPnl`** `boolean`

Indicates if PnL debug mode is enabled. Client Portal only.

---

**`showTaxOpt`** `boolean`

Indicates if the account supports Tax Optimizer. Client Portal only.

---

**`showImpactDashboard`** `boolean`

Indicates if the Impact Dashboard should display on startup. Client Portal only.

---

**`allowDynAccount`** `boolean`

Indicates if the account supports Dynamic Account Structures. Client Portal only.

---

**`allowCrypto`** `boolean`

Indicates if the account supports crypto trading.

---

**`allowedAssetTypes`** `string`

Comma-separated list of supported asset or security types.

---

**`chartPeriods`** `object`

Map of supported asset types to arrays of available chart periods.

---

**`groups`** `array`

Groups the account is listed under.

---

**`profiles`** `array`

Profiles the account is listed under.

---

**`selectedAccount`** `string`

The currently selected account identifier.

---

**`serverInfo`** `object`

Object describing the server details.

---

**`serverName`** `string`

The server name.

---

**`serverVersion`** `string`

The server version.

---

**`sessionId`** `string`

The session identifier.

---

**`isFT`** `boolean`

Indicates if the account is a fractional trading account.

---

**`isPaper`** `boolean`

Indicates if the active account is a paper trading account.

---

```json wordWrap
{"topic":"act","args":{"accounts":[],"acctProps":{"All":{"hasChildAccounts":false,"supportsCashQty":true,"noFXConv":false,"isProp":false,"supportsFractions":true,"allowCustomerTime":false}},"aliases":{},"allowFeatures":{"showGFIS":false,"showEUCostReport":false,"allowEventContract":false,"allowFXConv":true,"allowFinancialLens":false,"allowMTA":false,"allowTypeAhead":false,"allowEventTrading":false,"snapshotRefreshTimeout":0,"liteUser":false,"showWebNews":false,"research":false,"debugPnl":false,"showTaxOpt":false,"showImpactDashboard":false,"allowDynAccount":false,"allowCrypto":false,"allowedAssetTypes":"STK,CFD,OPT"},"chartPeriods":{"STK":[],"CFD":[],"OPT":[],"FOP":[],"WAR":[],"IOPT":[],"FUT":[],"CASH":[],"IND":[],"BOND":[],"FUND":[],"CMDTY":[],"PHYSS":[],"CRYPTO":[]},"groups":[],"profiles":[],"selectedAccount":"DU1234567","serverInfo":{"serverName":"server01","serverVersion":"10.25.0"},"sessionId":"session123","isFT":false,"isPaper":true}}
```