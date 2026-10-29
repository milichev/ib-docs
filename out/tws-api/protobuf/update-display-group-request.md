[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/update-display-group-request)

## UpdateDisplayGroupRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `contractInfo` | `string` | The encoded value that uniquely represents the contract in IB. Possible values include:[none: empty selection, contractID@exchange: any non-combination contract., combo: if any combo is selected.] |
