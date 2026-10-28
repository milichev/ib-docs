[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-accounts/get-account-summary)

# Summary Of Account Values

GET https://localhost:5000/v1/api/iserver/account/{accountId}/summary

Provides a general overview of the account details such as balance values.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-account-summary

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

## Response

### 200

Provides a general overview of the account details such as balance values.

- `accountType` (string, optional) — Describes the unique account type. For standard individual accounts, an empty string is returned.
- `status` (string, optional) — If the account is currently non-tradeable, a status message will be dispalyed.
- `balance` (double, optional) — Returns the total account balance.
- `SMA` (double, optional) — Simple Moving Average of the account.
- `buyingPower` (double, optional) — Total buying power available for the account.
- `availableFunds` (double, optional) — The amount of equity you have available for trading. For both the Securities and Commodities segments, this is calculated as: Equity with Loan Value – Initial Margin.
- `excessLiquidity` (double, optional) — The amount of cash in excess of the usual requirement in your account.
- `netLiquidationValue` (double, optional) — The basis for determining the price of the assets in your account.
- `equityWithLoanValue` (double, optional) — The basis for determining whether you have the necessary assets to either initiate or maintain security assets.
- `regTLoan` (double, optional) — The Federal Reserve Board regulation governing the amount of credit that broker dealers may extend to clients who borrow money to buy securities on margin.
- `securitiesGVP` (double, optional) — Absolute value of the Long Stock Value + Short Stock Value + Long Option Value + Short Option Value + Fund Value.
- `totalCashValue` (double, optional) — Cash recognized at the time of trade + futures P&L. This value reflects real-time currency positions, including: * Trades executed directly through the FX market. * Trades executed as a result of automatic IB conversions, which occur when you trade a product in a non-base currency. * Trades deliberately executed to close non-base currency positions using the FXCONV destination.
- `accruedInterest` (double, optional) — Accrued interest is the interest accruing on a security since the previous coupon date. If a security is sold between two payment dates, the buyer usually compensates the seller for the interest accrued, either within the price or as a separate payment.
- `regTMargin` (double, optional) — The initial margin requirements calculated under US Regulation T rules for both the securities and commodities segment of your account.
- `initialMargin` (double, optional) — The available initial margin for the account.
- `maintenanceMargin` (double, optional) — The available maintenance margin for the account.
- `cashBalances` (list of AccountSummaryResponseCashBalancesItems, optional) — An array containing balance information for all currencies held by the account.

## Errors

### 400 Bad Request Error

bad request; passed input cannot pass initial validation and detected right away

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### AccountSummaryResponseCashBalancesItems

- `currency` (string, optional) — The currency the values represent. Base currency represented as "Total (in \{BaseCurrency})"
- `balance` (double, optional) — The total available currency held in the account.
- `settledCash` (double, optional) — The available settled cash that can be withdrawn from the account.

## Examples

**Response**

```json
{
  "accountType": "",
  "status": "",
  "balance": 825903,
  "SMA": 368538,
  "buyingPower": 3307124,
  "availableFunds": 825903,
  "excessLiquidity": 826781,
  "netLiquidationValue": 1290490,
  "equityWithLoanValue": 1281714,
  "regTLoan": 0,
  "securitiesGVP": 1793178,
  "totalCashValue": -401846,
  "accruedInterest": 0,
  "regTMargin": 0,
  "initialMargin": 464586,
  "maintenanceMargin": 463709,
  "cashBalances": [
    {
      "currency": "EUR",
      "balance": 194,
      "settledCash": 194
    },
    {
      "currency": "HKD",
      "balance": 0,
      "settledCash": 0
    },
    {
      "currency": "JPY",
      "balance": 14781,
      "settledCash": 14781
    },
    {
      "currency": "USD",
      "balance": -402158,
      "settledCash": -402158
    },
    {
      "currency": "Total (in USD)",
      "balance": -401846,
      "settledCash": -401846
    }
  ]
}
```

**SDK Code**

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/summary"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/summary")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/U1234567/summary")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/summary', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/summary")! as URL,
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
