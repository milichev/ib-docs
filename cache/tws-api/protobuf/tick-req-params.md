> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## TickReqParams

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `minTick` | `string` | tick for the contract on the exchange |
| `bboExchange` | `string` | Identifier for the exchange with the best bid and offer |
| `snapshotPermissions` | `int32` | Market data permissions to retrieve instrument data. |
| `lastPricePrecision` | `string` | The decimal precision for supported prices. |
| `lastSizePrecision` | `string` | The decimal precision supported for order sizes. |