> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## HistoricalTickLast

| Field | Type | Description |
| ----- | ---- | ----------- |
| `time` | `int64` | The UNIX timestamp of the historical tick. |
| `tickAttribLast` | `TickAttribLast` | Tick attribs of historical last tick. |
| `price` | `double` | The last price of the historical tick. |
| `size` | `string` | The last size of the historical tick. |
| `exchange` | `string` | The source exchange of the historical tick. |
| `specialConditions` | `string` | The conditions of the historical tick. Refer to [Trade Conditions](https://www.interactivebrokers.com/en/index.php?f=7235) page for more details. |