> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## AccountUpdateMulti

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `modelCode` | `string` | Is used to place an order to a model. For example |
| `key` | `string` | The value being updated |
| `value` | `string` | Representative information for a given Key. |
| `currency` | `string` | The underlying's currency. |