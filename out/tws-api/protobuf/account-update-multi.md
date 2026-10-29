[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/account-update-multi)

## AccountUpdateMulti

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `account` | `string` | The IBKR account identifier to affiliate the request with |
| `modelCode` | `string` | Is used to place an order to a model. For example |
| `key` | `string` | The value being updated |
| `value` | `string` | Representative information for a given Key. |
| `currency` | `string` | The underlying's currency. |
