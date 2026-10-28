[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/account-updates-multi-request)

## AccountUpdatesMultiRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `modelCode` | `string` | Is used to place an order to a model. For example |
| `ledgerAndNLV` | `bool` | Specify false to cancel your subscription |
