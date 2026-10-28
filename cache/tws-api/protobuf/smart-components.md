> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## SmartComponents

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `smartComponents` | `SmartComponent` | Exchange mapping identifiers (such as "a6" or "a9") used in the TWS API via the reqSmartComponents function to decode single-letter exchange routing codes and aggregate multi-venue quotes. |