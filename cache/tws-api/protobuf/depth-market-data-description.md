> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## DepthMarketDataDescription

| Field | Type | Description |
| ----- | ---- | ----------- |
| `exchange` | `string` | The destination exchange. |
| `secType` | `string` | The security's type: STK – stock (or ETF) OPT – option FUT – future IND – index FOP – futures option CASH – forex pair BAG – combo WAR – warrant BOND- bond CMDTY- commodity NEWS- news FUND- mutual fund. |
| `listingExch` | `string` | The primary exchange where the contract is listed. |
| `serviceDataType` | `string` | A list containing all available exchanges offering market depth. |
| `aggGroup` | `int32` | Aggregated group Indicates the smart-routing group to which a contract belongs. contracts which cannot be smart-routed have aggGroup = -1. |