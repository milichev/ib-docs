> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## UpdateConfigResponse

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `status` | `string` | Current status of the order. |
| `message` | `string` | The news bulletin context |
| `changedFields` | `string` | All fields changed from the UpdateConfigRequest |
| `errors` | `string` | Proto path that failed to update. |
| `warnings` | `UpdateConfigWarning` | Object containing detailed warnings about setting modification. |