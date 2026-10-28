> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

## WshEventDataRequest

| Field | Type | Description |
| ----- | ---- | ----------- |
| `reqId` | `int32` | Unique request identifier used for tracking across EWrapper |
| `conId` | `int32` | The unique IB contract identifier. |
| `filter` | `string` | The filter criteria used to determine which execution reports are returned |
| `fillWatchlist` | `bool` | Automatically fill in watchlist values |
| `fillPortfolio` | `bool` | Automatically fill in portfolio values |
| `fillCompetitors` | `bool` | Automatically fill in competitor values of existing positions |
| `startDate` | `string` | The earliest starting point of the request. Formatted as "YYYYMMDD-HH:mm:ss" to assume UTC or "YYYYMMDD HH:mm:ss TMZ" |
| `endDate` | `string` | Specify the end date of the event requests. Formatted as "YYYYMMDD" |
| `totalLimit` | `int32` | Maximum number of WSH Events that may be returned. |