[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/tick-option-computation)

## TickOptionComputation

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `tickType` | `int32` | Type of data the tick represents. |
| `tickAttrib` | `int32` | Defines TickAttrib.canAutoExecute. |
| `impliedVol` | `double` | Implied volatility of the Option. |
| `delta` | `double` | The stock's Delta. For orders on BOX only. |
| `optPrice` | `double` | The option price |
| `pvDividend` | `double` | The present value of dividends expected on the option's underlying |
| `gamma` | `double` | The option gamma value |
| `vega` | `double` | Option greek Vega. |
| `theta` | `double` | Option Greek Theta |
| `undPrice` | `double` | Current price of the underlying contract. |
