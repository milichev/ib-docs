[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/protobuf/update-config-request)

## UpdateConfigRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `lockAndExit` | `LockAndExitConfig` | API Settings configuration for the "Lock and Exit" Global Configuration page. |
| `messages` | `MessageConfig` | Complementary messages identifying settings. |
| `api` | `ApiConfig` | Host object of all Global Configuration -> API sub-menu settings. |
| `orders` | `OrdersConfig` | Order configuration settings from the Global Configuration. |
| `acceptedWarnings` | `UpdateConfigWarning` | A list of warning messages displayed in the Global Configuration -> Messages. |
| `resetAPIOrderSequence` | `bool` | Submit as true to reset the orderId sequence back to 0. |
