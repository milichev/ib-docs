[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/pn-l-single)

## PnLSingle

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `position` | `string` | The number of positions held |
| `dailyPnL` | `double` | Current day's total profit and loss. |
| `unrealizedPnL` | `double` | Unrealized profit and loss for the current day's trading session. |
| `realizedPnL` | `double` | Daily realized profit and loss on the position |
| `value` | `double` | Representative information for a given Key. |
