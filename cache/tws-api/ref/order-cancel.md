> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## OrderCancel

| Field | Type | Description |
| ----- | ---- | ----------- |
| `manualOrderCancelTime` | `string` | Used by brokers and advisors when manually entering an order cancellation request. Format should be "YYYYMMDD-HH:mm:ss" using UTC as the timezone value. |
| `extOperator` | `string` | Following [CME Rule 576](https://www.cmegroup.com/rulebook/files/cme-group-Rule-576.pdf), the ExtOperator field will signify the unique API operator at the time of trading for order management. |
| `manualOrderIndicator` | `int32` | Following [CME Rule 576](https://www.cmegroup.com/rulebook/files/cme-group-Rule-576.pdf), the ManualOrderIndicator field will signify if an order is manual (1) or automated (0). |