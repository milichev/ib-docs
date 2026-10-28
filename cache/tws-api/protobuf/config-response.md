> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## ConfigResponse

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `lockAndExit` | `LockAndExitConfig` | API Settings configuration for the "Lock and Exit" Global Configuration page. |
| `messages` | `MessageConfig` | Complementary messages identifying settings. |
| `api` | `ApiConfig` | Host object of all Global Configuration -> API sub-menu settings. |
| `orders` | `OrdersConfig` | Order configuration settings from the Global Configuration. |