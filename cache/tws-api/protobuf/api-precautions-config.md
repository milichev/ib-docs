> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## ApiPrecautionsConfig

| Field | Type | Description |
| ----- | ---- | ----------- |
| `bypassOrderPrecautions` | `bool` | If set to true, all order precautions will be bypassed and directly submitted without warning. |
| `bypassBondWarning` | `bool` | Bypass order precautions related to Bond trading |
| `bypassNegativeYieldConfirmation` | `bool` | If true, you are electing to bypass any warning that your API-transmitted order will result in a negative yield to worst (YTW), excluding commissions. These orders will be executed without warning. |
| `bypassCalledBondWarning` | `bool` | If set to true, you are electing to bypass warning regarding called bond contract used in order. |
| `bypassSameActionPairTradeWarning` | `bool` | If set to true, orders will submit for same-action combos without warning. |
| `bypassFlaggedAccountsWarning` | `bool` | Bypass warnings against flagged accounts submitting orders. |
| `bypassPriceBasedVolatilityWarning` | `bool` | If set to true, order will be submitted in spite of volatility concerns for the order. |
| `bypassRedirectOrderWarning` | `bool` | If set to true, direct routed orders will be submitted without warning. |
| `bypassNoOverfillProtection` | `bool` | Waive warnings that your submitted order is being passed without overfill protection. |
| `bypassRouteMarketableToBBO` | `bool` | If set to true, orders will route to designated exchanges regardless of current best bid and offer. |