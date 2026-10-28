> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## TickPrice

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `tickType` | `int32` | Type of data the tick represents. |
| `price` | `double` | The order's price |
| `size` | `string` | Represents volume of the order data. |
| `attrMask` | `int32` | Defines TickAttrib.canAutoExecute. |