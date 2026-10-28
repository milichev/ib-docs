> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## SecDefOptParamsRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `underlyingSymbol` | `string` | Symbol of the underlying contract. |
| `futFopExchange` | `string` | The exchange on which the returned options are trading. Can be set to the empty string "" for all exchanges |
| `underlyingSecType` | `string` | Security or Asset type of the underlying contract. |
| `underlyingConId` | `int32` | IBKR Contract Identifier of the underlying contract. |