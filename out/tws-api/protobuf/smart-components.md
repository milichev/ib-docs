[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/smart-components)

## SmartComponents

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `smartComponents` | `SmartComponent` | Exchange mapping identifiers (such as "a6" or "a9") used in the TWS API via the reqSmartComponents function to decode single-letter exchange routing codes and aggregate multi-venue quotes. |
