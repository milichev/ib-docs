[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/portfolio-value)

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
