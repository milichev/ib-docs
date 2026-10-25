[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/calculate-option-price-request)

## CalculateOptionPriceRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `volatility` | `double` | The option price in volatility |
| `underPrice` | `double` | Current price of the underlying contract. |
| `optionPriceOptions` | `OptionPriceOptionsEntry` | Internal use only. Send an empty tag value list |

## CalculateOptionPriceRequest.OptionPriceOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
