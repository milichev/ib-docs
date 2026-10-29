[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/sec-def-opt-params-request)

## SecDefOptParamsRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `underlyingSymbol` | `string` | Symbol of the underlying contract. |
| `futFopExchange` | `string` | The exchange on which the returned options are trading. Can be set to the empty string "" for all exchanges |
| `underlyingSecType` | `string` | Security or Asset type of the underlying contract. |
| `underlyingConId` | `int32` | IBKR Contract Identifier of the underlying contract. |
