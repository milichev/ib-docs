> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## SecDefOptParameter

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `exchange` | `string` | The destination exchange. |
| `underlyingConId` | `int32` | IBKR Contract Identifier of the underlying contract. |
| `tradingClass` | `string` | The trading class name for this contract. Available in TWS contract description window as well. For example, GBL Dec '13 future's trading class is "FGBL" |
| `multiplier` | `string` | The instrument's multiplier (i.e. options, futures). |
| `expirations` | `string` | A list of the expiries for the options of this underlying on this exchange |
| `strikes` | `double` | The list of strikes for the given contract. |