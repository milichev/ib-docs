> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## UpdateDisplayGroupRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contractInfo` | `string` | The encoded value that uniquely represents the contract in IB. Possible values include:[none: empty selection, contractID@exchange: any non-combination contract., combo: if any combo is selected.] |