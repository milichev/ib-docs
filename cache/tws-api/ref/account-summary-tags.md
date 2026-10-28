> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# AccountSummaryTags

| Field                            | Type     | Description                                                                                                                                  |
| -------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `AccountType`                    | `string` |                                                                                                                                              |
| `NetLiquidation`                 | `string` |                                                                                                                                              |
| `TotalCashValue`                 | `string` | Total cash including futures pnl                                                                                                             |
| `SettledCash`                    | `string` | For cash accounts, this is the same as TotalCashValue                                                                                        |
| `AccruedCash`                    | `string` | Net accrued interest                                                                                                                         |
| `BuyingPower`                    | `string` | The maximum amount of marginable US stocks the account can buy                                                                               |
| `EquityWithLoanValue`            | `string` | Cash + stocks + bonds + mutual funds                                                                                                         |
| `PreviousDayEquityWithLoanValue` | `string` |                                                                                                                                              |
| `GrossPositionValue`             | `string` | The sum of the absolute value of all stock and equity option positions                                                                       |
| `ReqTEquity`                     | `string` |                                                                                                                                              |
| `ReqTMargin`                     | `string` |                                                                                                                                              |
| `SMA`                            | `string` | Special Memorandum Account                                                                                                                   |
| `InitMarginReq`                  | `string` |                                                                                                                                              |
| `MaintMarginReq`                 | `string` |                                                                                                                                              |
| `AvailableFunds`                 | `string` |                                                                                                                                              |
| `ExcessLiquidity`                | `string` |                                                                                                                                              |
| `Cushion`                        | `string` | Excess liquidity as a percentage of net liquidation value                                                                                    |
| `FullInitMarginReq`              | `string` |                                                                                                                                              |
| `FullMaintMarginReq`             | `string` |                                                                                                                                              |
| `FullAvailableFunds`             | `string` |                                                                                                                                              |
| `FullExcessLiquidity`            | `string` |                                                                                                                                              |
| `LookAheadNextChange`            | `string` | Time when look-ahead values take effect                                                                                                      |
| `LookAheadInitMarginReq`         | `string` |                                                                                                                                              |
| `LookAheadMaintMarginReq`        | `string` |                                                                                                                                              |
| `LookAheadAvailableFunds`        | `string` |                                                                                                                                              |
| `LookAheadExcessLiquidity`       | `string` |                                                                                                                                              |
| `HighestSeverity`                | `string` | A measure of how close the account is to liquidation                                                                                         |
| `DayTradesRemaining`             | `string` | The Number of Open/Close trades one could do before Pattern Day Trading is detected; a value of "-1" means user can do unlimited day trades. |
| `Leverage`                       | `string` | GrossPositionValue / NetLiquidation                                                                                                          |