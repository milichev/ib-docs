[source](https://www.interactivebrokers.com/docs/tws-api/protobuf/scanner-subscription)

## ScannerSubscription

| Field | Type | Description |
| ----- | ---- | ----------- |
| `numberOfRows` | `int32` | Determine the number of rows or results from the market scanner to be returned. Returns the maximum, 50, by default. |
| `instrument` | `string` | Returns the Instrument type to be returned. See scannerParameters xml response for details. |
| `locationCode` | `string` | Returns the exchange regions to be returned. See scannerParameters xml response for details. |
| `scanCode` | `string` | Returns the code to sort results by. See scannerParameters xml response for details. |
| `abovePrice` | `double` | Set the maximum MARK price to filter by. |
| `belowPrice` | `double` | Set the minimum MARK price to filter by. |
| `aboveVolume` | `int64` | Set the minimum trade volume of the day. |
| `marketCapAbove` | `double` | Set the minimum market cap restriction. |
| `marketCapBelow` | `double` | Set the maximum market cap restriction. |
| `moodyRatingAbove` | `string` | Minimum Moody Rating |
| `moodyRatingBelow` | `string` | Maximum Moody Rating |
| `spRatingAbove` | `string` | Standard & Poor's (S&P) uses a letter-based rating system to evaluate the creditworthiness of bonds and debt issuers. This field will indicate the lowest acceptable rating to be returned from the result. |
| `spRatingBelow` | `string` | Standard & Poor's (S&P) uses a letter-based rating system to evaluate the creditworthiness of bonds and debt issuers. This field will indicate the highest acceptable rating to be returned from the result. |
| `maturityDateAbove` | `string` | Set the minimum Maturity date. Formatted as YYYYMMDD. |
| `maturityDateBelow` | `string` | Set the maximum Maturity date. Formatted as YYYYMMDD. |
| `couponRateAbove` | `double` | Set the minimum Coupon Rate |
| `couponRateBelow` | `double` | Set the maximum Coupon Rate |
| `excludeConvertible` | `bool` | Determine of the bond should be convertible or not. |
| `averageOptionVolumeAbove` | `int64` | Determine the minimum average option volume from the underlying. |
| `scannerSettingPairs` | `string` | TagValue pair to indicate scanner restrictions. Currently only supports TagValue("annualVolatility", true) or an empty list. |
| `stockTypeFilter` | `string` | Determine the stock type: Common, CORP, ADR, ETF, ETN, REIT, CEF, ETMF, EFN |
| `scannerSubscriptionFilterOptions` | `ScannerSubscriptionFilterOptionsEntry` |  |
| `scannerSubscriptionOptions` | `ScannerSubscriptionOptionsEntry` |  |

## ScannerSubscription.ScannerSubscriptionFilterOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |

## ScannerSubscription.ScannerSubscriptionOptionsEntry

| Field | Type | Description |
| ----- | ---- | ----------- |
| `key` | `string` |  |
| `value` | `string` |  |
