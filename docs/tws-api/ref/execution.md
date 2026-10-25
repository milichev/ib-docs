[source](https://www.interactivebrokers.com/docs/tws-api/ref/execution)

## Execution

| Field | Type | Description |
| ----- | ---- | ----------- |
| `orderId` | `int32` | The API client's order Id. May not be unique to an account. |
| `execId` | `string` | The execution's identifier. Each partial fill has a separate ExecId. A correction is indicated by an ExecId which differs from a previous ExecId in only the digits after the final period |
| `time` | `string` | The execution's server time. |
| `acctNumber` | `string` | The account to which the order was allocated. |
| `exchange` | `string` | The exchange where the execution took place. |
| `side` | `string` | Specifies if the transaction was buy or sale BOT for bought |
| `shares` | `string` | The number of shares filled. |
| `price` | `double` | The order's execution price excluding commissions. |
| `permId` | `int64` | The TWS order identifier. The PermId can be 0 for trades originating outside IB. |
| `clientId` | `int32` | The API client identifier which placed the order which originated this execution. |
| `isLiquidation` | `bool` | Indicates the order was triggered as an IB Liquidation. |
| `cumQty` | `string` | Cumulative quantity. Used in regular trades |
| `avgPrice` | `double` | Average price. Used in regular trades |
| `orderRef` | `string` | The OrderRef is a user-customizable string that can be set from the API or TWS and will be associated with an order for its lifetime. |
| `evRule` | `string` | The Economic Value Rule name and the respective optional argument. The two values should be separated by a colon. For example |
| `evMultiplier` | `double` | Tells you approximately how much the market value of a contract would change if the price were to change by 1. It cannot be used to get market value by multiplying the price by the approximate multiplier. |
| `modelCode` | `string` | Identifier of the financial advisor's model |
| `lastLiquidity` | `int32` | The liquidity type of the execution. |
| `isPriceRevisionPending` | `bool` | Indicates the price the order executed as may be changed. |
| `submitter` | `string` | Username that placed the executing order. |
| `optExerciseOrLapseType` | `int32` | Flags the type of exercise that traded the order. |
