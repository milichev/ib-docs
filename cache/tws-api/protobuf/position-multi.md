> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## PositionMulti

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `position` | `string` | The number of positions held |
| `avgCost` | `double` | Average cost of the overall position. |
| `modelCode` | `string` | Is used to place an order to a model. For example |