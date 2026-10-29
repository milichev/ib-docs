[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/calculate-implied-volatility-request)

## CalculateImpliedVolatilityRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `optionPrice` | `double` | Hypothetical option price |
| `underPrice` | `double` | Current price of the underlying contract. |
| `impliedVolatilityOptions` | `ImpliedVolatilityOptionsEntry` | Internal use only. Send an empty tag value list |

## CalculateImpliedVolatilityRequest.ImpliedVolatilityOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
