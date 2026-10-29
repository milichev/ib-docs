[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-market-data/get-md-snapshot)

# Live Market Data Snapshot

GET https://localhost:5000/v1/api/iserver/marketdata/snapshot

Get Market Data for the given conid(s). A pre-flight request must be made prior to ever receiving data. For some fields, it may take more than a few moments to receive information. See response fields for a list of available fields that can be request via fields argument. The endpoint /iserver/accounts must be called prior to /iserver/marketdata/snapshot. For derivative contracts the endpoint /iserver/secdef/search must be called first.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-market-data/get-md-snapshot

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conids` (string, required)
- `fields` (string, optional) — Market Data fields enumerating tick ids to their respective value. May provide a comma-separated series of fields. A maximum of 50 fields may be specified at one time. * `31` - Last Price. The last price at which the contract traded. May contain one of the following prefixes: C - Previous day's closing price. H - Trading has halted. * `55` - Symbol. * `58` - Text. * `70` - High. Current day high price * `71` - Low. Current day low price * `73` - Market Value. The current market value of your position in the security. Market Value is calculated with real time market data (even when not subscribed to market data). * `74` - Avg Price. The average price of the position. * `75` - Unrealized PnL. Unrealized profit or loss. Unrealized PnL is calculated with real time market data (even when not subscribed to market data). * `76` - Formatted position. * `77` - Formatted Unrealized PnL. * `78` - Daily PnL. Your profit or loss of the day since prior close. Daily PnL is calculated with real time market data (even when not subscribed to market data). * `79` - Realized PnL. Realized profit or loss. Realized PnL is calculated with real time market data (even when not subscribed to market data). * `80` - Unrealized PnL %. Unrealized profit or loss expressed in percentage. * `82` - Change. The difference between the last price and the close on the previous trading day * `83` - Change %. The difference between the last price and the close on the previous trading day in percentage. * `84` - Bid Price. The highest-priced bid on the contract. * `85` - Ask Size. The number of contracts or shares offered at the ask price. For US stocks * `86` - Ask Price. The lowest-priced offer on the contract. * `87` - Volume. Volume for the day * `88` - Bid Size. The number of contracts or shares bid for at the bid price. For US stocks * `201` - Right. Declares the Right of the Option, Call or Put. * `6004` - Exchange. * `6008` - Conid. Contract identifier from IBKR's database. * `6070` - SecType. The asset class of the instrument. * `6072` - Months. * `6073` - Regular Expiry. * `6119` - Marker for market data delivery method (similar to request id). * `6457` - Underlying Conid. Use /trsrv/secdef to get more information about the security. * `6508` - Service Params.. * `6509` - Market Data Availability. The field may contain three chars. First char defines: R = RealTime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed, i - incomplete, v - VDR Exempt (Vendor Display Rule 603c). Second char defines: P = Snapshot, p = Consolidated. Third char defines: B = Book. RealTime Data is relayed back in real time without delay, market data subscription(s) are required. Delayed - Data is relayed back 15-20 min delayed. Frozen - Last recorded data at market close. relayed back in real time. Frozen Delayed - Last recorded data at market close, relayed back delayed. Not Subscribed - User does not have the required market data subscription(s) to relay back either real time or delayed data. Snapshot - Snapshot request is available for contract. Consolidated - Market data is aggregated across multiple exchanges or venues. Book - Top of the book data is available for contract. * `7051` - Company name. * `7057` - Ask Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY * `7058` - Last Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY * `7059` - Last Size. The number of unites traded at the last price * `7068` - Bid Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY * `7084` - Implied Vol./Hist. Vol %. The ratio of the implied volatility over the historical volatility, expressed as a percentage. * `7085` - Total Put option open interest divided by the Call option open interest for the trading day. May only be used on underlyings. * `7086` - Put/Call Volume. Put option volume/call option volume for the trading day. * `7087` - Hist. Vol. %. 30-day real-time historical volatility. * `7088` - Hist. Vol. Close %. Shows the historical volatility based on previous close price. * `7089` - Opt. Volume. Option Volume * `7094` - Conid + Exchange. * `7184` - canBeTraded. If contract is a trade-able instrument. Returns 1(true) or 0(false). * `7219` - Contract Description. * `7220` - Contract Description. * `7221` - Listing Exchange. * `7280` - Industry. Displays the type of industry under which the underlying company can be categorized. * `7281` - Category. Displays a more detailed level of description within the industry under which the underlying company can be categorized. * `7282` - Average Volume. The average daily trading volume over 90 days. * `7283` - Option Implied Vol. %. A prediction of how volatile an underlying will be in the future.At the market volatility estimated for a maturity thirty calendar days forward of the current trading day, and based on option prices from two consecutive expiration months. To query the Implied Vol. % of a specific strike refer to field 7633. * `7284` - Historical volatility %. Deprecated * `7285` - Put/Call Ratio. * `7292` - Cost Basis. Your current position in this security multiplied by the average price and multiplier. * `7293` - 52 Week High. The highest price for the past 52 weeks. * `7294` - 52 Week Low. The lowest price for the past 52 weeks. * `7295` - Open. Today's opening price. * `7296` - Close. Today's closing price. * `7308` - Delta. The ratio of the change in the price of the option to the corresponding change in the price of the underlying. * `7309` - Gamma. The rate of change for the delta with respect to the underlying asset's price. * `7310` - Theta. A measure of the rate of decline the value of an option due to the passage of time. * `7311` - Vega. The amount that the price of an option changes compared to a 1% change in the volatility. * `7607` - Opt. Volume Change %. Today's option volume as a percentage of the average option volume. * `7633` - Implied Vol. %. The implied volatility for the specific strike of the option in percentage. To query the Option Implied Vol. % from the underlying refer to field 7283. * `7635` - Mark. The mark price is * `7636` - Shortable Shares. Number of shares available for shorting. * `7637` - Fee Rate. Interest rate charged on borrowed shares. * `7638` - Option Open Interest. Available for Underlyings and Derivatives. * `7639` - % of Mark Value. Displays the market value of the contract as a percentage of the total market value of the account. Mark Value is calculated with real time market data (even when not subscribed to market data). * `7644` - Shortable. Describes the level of difficulty with which the security can be sold short. * `7671` - Dividends. This value is the total of the expected dividend payments over the next twelve months per share. * `7672` - Dividends TTM. This value is the total of the expected dividend payments over the last twelve months per share. * `7674` - EMA(200). Exponential moving average (N=200). * `7675` - EMA(100). Exponential moving average (N=100). * `7676` - EMA(50). Exponential moving average (N=50). * `7677` - EMA(20). Exponential moving average (N=20). * `7678` - Price/EMA(200). Price to Exponential moving average (N=200) ratio -1 * `7679` - Price/EMA(100). Price to Exponential moving average (N=100) ratio -1 * `7724` - Price/EMA(50). Price to Exponential moving average (N=50) ratio -1 * `7681` - Price/EMA(20). Price to Exponential moving average (N=20) ratio -1 * `7682` - Change Since Open. The difference between the last price and the open price. * `7683` - Upcoming Event. Shows the next major company event. Requires Wall Street Horizon subscription. * `7684` - Upcoming Event Date. The date of the next major company event. Requires Wall Street Horizon subscription. * `7685` - Upcoming Analyst Meeting. The date and time of the next scheduled analyst meeting. Requires Wall Street Horizon subscription. * `7686` - Upcoming Earnings. The date and time of the next scheduled earnings/earnings call event. Requires Wall Street Horizon subscription. * `7687` - Upcoming Misc Event. The date and time of the next shareholder meeting * `7688` - Recent Analyst Meeting. The date and time of the most recent analyst meeting. Requires Wall Street Horizon subscription. * `7689` - Recent Earnings. The date and time of the most recent earnings/earning call event. Requires Wall Street Horizon subscription. * `7690` - Recent Misc Event. The date and time of the most recent shareholder meeting * `7694` - Probability of Max Return. Customer implied probability of maximum potential gain. * `7695` - Break Even. Break even points * `7696` - SPX Delta. Beta Weighted Delta is calculated using the formula; Delta x dollar adjusted beta * `7697` - Futures Open Interest. Total number of outstanding futures contracts * `7698` - Last Yield. Implied yield of the bond if it is purchased at the current last price. Last yield is calculated using the Last price on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher. * `7699` - Bid Yield. Implied yield of the bond if it is purchased at the current bid price. Bid yield is calculated using the Ask on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher. * `7700` - Probability of Max Return. Customer implied probability of maximum potential gain. * `7702` - Probability of Max Loss. Customer implied probability of maximum potential loss. * `7703` - Profit Probability. Customer implied probability of any gain. * `7704` - Organization Type. * `7705` - Debt Class. * `7706` - Ratings. Ratings issued for bond contract. * `7707` - Bond State Code. * `7708` - Bond Type. * `7714` - Last Trading Date. * `7715` - Issue Date. * `7720` - Ask Yield. Implied yield of the bond if it is purchased at the current offer. Ask yield is calculated using the Bid on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher. * `7741` - Prior Close. Yesterday's closing price * `7762` - Volume Long. High precision volume for the day. For formatted volume refer to field 87. * `7768` - hasTradingPermissions. if user has trading permissions for specified contract. Returns 1(true) or 0(false). * `7899` - Stock Type. Determines the stock type. Includes: Common, CORP, ADR, ETF, ETN, EFN, REIT, CEF, ETMF. * `7920` - Daily PnL Raw. Your profit or loss of the day since prior close. Daily PnL is calculated with real-time market data (even when not subscribed to market data). * `7921` - Cost Basis Raw. Your current position in this security multiplied by the average price and and multiplier. * `7943` - Rebate Rate. Fed funds or other currency-relevant Benchmark rate minus the interest rate charged on borrowed shares.

## Response

### 200

Successfully requested market data

- `list of IserverSnapshotItems`

## Errors

### 400 Bad Request Error

Missing, empty, non-numeric, or out-of-range parameter. The `error` field is always prefixed with `Bad Request:`.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests. For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem.

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### IserverSnapshotItems

- any

## Examples

**Response**

```json
[
  null
]
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/v1/api/iserver/marketdata/snapshot"

querystring = {"conids":"265598,8314"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=265598%2C8314"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=265598%2C8314")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=265598%2C8314', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=265598%2C8314")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```
