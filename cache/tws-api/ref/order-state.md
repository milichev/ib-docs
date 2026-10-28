> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## OrderState

| Field | Type | Description |
| ----- | ---- | ----------- |
| `status` | `string` | The order's current status. |
| `initMarginBefore` | `double` | The account's current initial margin. |
| `maintMarginBefore` | `double` | The account's current maintenance margin. |
| `equityWithLoanBefore` | `double` | The account's current equity with loan. |
| `initMarginChange` | `double` | The change of the account's initial margin. |
| `maintMarginChange` | `double` | The change of the account's maintenance margin. |
| `equityWithLoanChange` | `double` | The change of the account's equity with loan. |
| `initMarginAfter` | `double` | The order's impact on the account's initial margin. |
| `maintMarginAfter` | `double` | The order's impact on the account's maintenance margin. |
| `equityWithLoanAfter` | `double` | Shows the impact the order would have on the account's equity with loan. |
| `commissionAndFees` | `double` | Additional order cost for fees and commissions |
| `minCommissionAndFees` | `double` | Lowest possible commission and fee value for the order. |
| `maxCommissionAndFees` | `double` | Highest possible commission and fee value for the order. |
| `commissionAndFeesCurrency` | `string` | Type of currency representing commissions and fee values. |
| `marginCurrency` | `string` | Type of currency representing margin values. |
| `initMarginBeforeOutsideRTH` | `double` | The account's expected initial margin outside of regular trading hours. |
| `maintMarginBeforeOutsideRTH` | `double` | The account's expected maintenance margin outside of regular trading hours. |
| `equityWithLoanBeforeOutsideRTH` | `double` | The account's expected equity with loan outside of regular trading hours. |
| `initMarginChangeOutsideRTH` | `double` | The expected change of the account's initial margin outside of regular trading hours. |
| `maintMarginChangeOutsideRTH` | `double` | The expected change of the account's maintenance margin outside of regular trading hours. |
| `equityWithLoanChangeOutsideRTH` | `double` | The expected change of the account's equity with loan outside of regular trading hours. |
| `initMarginAfterOutsideRTH` | `double` | The order's expected impact on the account's initial margin outside of regular trading hours. |
| `maintMarginAfterOutsideRTH` | `double` | The order's expected impact on the account's maintenance margin outside of regular trading hours. |
| `equityWithLoanAfterOutsideRTH` | `double` | Shows the expected impact the order would have on the account's equity with loan outside of regular trading hours. |
| `suggestedSize` | `string` | Suggested size of the order based on account balances. |
| `rejectReason` | `string` | Audit trail details for why the order was rejected. |
| `orderAllocations` | `OrderAllocation` | Proto object containing order allocation behaviors. |
| `warningText` | `string` | If the order is warranted, a descriptive message will be provided. |
| `completedTime` | `string` | When the order was completed |
| `completedStatus` | `string` | The current status of the order. Supports "Inactive", "PendingSubmit", "PreSubmitted", "Submitted", "Filled", "PendingCancel", "PreCancelled", "Cancelled", "WarnState" |