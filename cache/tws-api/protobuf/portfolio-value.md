> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## PortfolioValue

| Field | Type | Description |
| ----- | ---- | ----------- |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `position` | `string` | The number of positions held |
| `marketPrice` | `double` | The instrument's unitary price |
| `marketValue` | `double` | Total market value of the instrument |
| `averageCost` | `double` | Average cost of the overall position. |
| `unrealizedPNL` | `double` | Unrealized profit and loss for the current day's trading session. |
| `realizedPNL` | `double` | Daily realized profit and loss on the position |
| `accountName` | `string` | The account identifier. |