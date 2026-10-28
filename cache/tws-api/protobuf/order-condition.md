> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## OrderCondition

| Field | Type | Description |
| ----- | ---- | ----------- |
| `type` | `int32` | Type of order condition to be used. Supported values include: Price: 1, Time: 3, Margin: 4, Execution: 5, Volume: 6, PercentChange: 7 |
| `isConjunctionConnection` | `bool` | true to declare multiple conditions must be met (AND). False to declare any conidition should trigger conditional logic. |
| `isMore` | `bool` | The order condition will trigger if greater than the indicated value. |
| `conId` | `int32` | The unique IB contract identifier. |
| `exchange` | `string` | The destination exchange. |
| `symbol` | `string` | The underlying's asset symbol. |
| `secType` | `string` | The security's type: STK – stock (or ETF) OPT – option FUT – future IND – index FOP – futures option CASH – forex pair BAG – combo WAR – warrant BOND- bond CMDTY- commodity NEWS- news FUND- mutual fund. |
| `percent` | `int32` | Value to reflect percentage change to trigger a condition. |
| `changePercent` | `double` | Decimal value representing change to trigger a condition. |
| `price` | `double` | The order's price |
| `triggerMethod` | `int32` | Specifies how Simulated Stop |
| `time` | `string` | Trigger time for the request. Formatted as HH:MM:ss (UTC assumed if timezone note set.) |
| `volume` | `int32` | The bar's traded volume (only returned for TRADES data). |