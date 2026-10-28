> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## ScannerDataElement

| Field | Type | Description |
| ----- | ---- | ----------- |
| `rank` | `int32` | Position of the sorted scanner results. |
| `contract` | `Contract` | Contract object containing defining characteristics for ticker. |
| `marketName` | `string` | Instrument's local name. |
| `distance` | `string` | Internal use only. |
| `benchmark` | `string` | Always returns an empty string. |
| `projection` | `string` | Internal use only. |
| `comboKey` | `string` | Describes the combo legs when the scanner is returning EFP. |