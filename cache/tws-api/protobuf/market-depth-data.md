> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## MarketDepthData

| Field | Type | Description |
| ----- | ---- | ----------- |
| `position` | `int32` | The number of positions held |
| `operation` | `int32` | Indicates a change in the row's value.: |
| `side` | `int32` | 0 for ask, 1 for bid |
| `price` | `double` | The order's price |
| `size` | `string` | Represents volume of the order data. |
| `marketMaker` | `string` | The exchange holding the order if isSmartDepth is True, otherwise the MPID of the market maker |
| `isSmartDepth` | `bool` | Flag indicates that this is smart depth request |