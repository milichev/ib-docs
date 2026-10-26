[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-accounts/get-balance-summary)

# Summary Of Account Balances

GET https://localhost:5000/v1/api/iserver/account/{accountId}/summary/balances

Returns a summary of an account's equity and cash balances, in total and by account segment.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-balance-summary

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

Indicates a successful return of available funds.

- `total` (SummaryOfAccountBalancesResponseTotal, optional) — Contains total balance details for the account.
- `commodities` (SummaryOfAccountBalancesResponseCommodities, optional) — Contains Commodity-specific balance details.
- `securities` (SummaryOfAccountBalancesResponseSecurities, optional) — Contains Security-specific balance details.

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

### SummaryOfAccountBalancesResponseTotal

Contains total balance details for the account.

- `net_liquidation` (string, optional) — The basis for determining the price of the assets in your account.
- `Nt Lqdtn Uncrtnty` (string, optional) — Displays the uncertainty of the Net Liquidating Value associated with after-hours price changes.
- `equity_with_loan` (string, optional) — * `Cash Accounts` Settled cash * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
- `Prvs Dy Eqty Wth Ln Vl` (string, optional) — The accounts equity balance including loan value.
- `sec_gross_pos_val` (string, optional) — Equals the sum of the absolute value of all positions except cash, index futures and US treasuries.
- `cash` (string, optional) — Total cash balance in the account
- `MTD Interest` (string, optional) — Total Month-to-date interest.
- `Pndng Dbt Crd Chrgs` (string, optional) — Any pending charges for the IBKR debit account.

### SummaryOfAccountBalancesResponseCommodities

Contains Commodity-specific balance details.

- `net_liquidation` (string, optional) — The basis for determining the price of the assets in your account.
- `equity_with_loan` (string, optional) — * `Cash Accounts` Settled cash * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
- `cash` (string, optional) — Total cash balance in the account
- `MTD Interest` (string, optional) — Total Month-to-date interest.
- `Pndng Dbt Crd Chrgs` (string, optional) — Any pending charges for the IBKR debit account.

### SummaryOfAccountBalancesResponseSecurities

Contains Security-specific balance details.

- `net_liquidation` (string, optional) — The basis for determining the price of the assets in your account.
- `equity_with_loan` (string, optional) — * `Cash Accounts` Settled cash * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
- `Prvs Dy Eqty Wth Ln Vl` (string, optional) — The accounts equity balance including loan value.
- `sec_gross_pos_val` (string, optional) — Equals the sum of the absolute value of all positions except cash, index futures and US treasuries.
- `cash` (string, optional) — Total cash balance in the account
- `MTD Interest` (string, optional) — Total Month-to-date interest.
- `Pndng Dbt Crd Chrgs` (string, optional) — Any pending charges for the IBKR debit account.

## Examples

**Response**

```json
{
  "total": {
    "net_liquidation": "1,288,301 USD",
    "Nt Lqdtn Uncrtnty": "0 USD",
    "equity_with_loan": "1,279,520 USD",
    "Prvs Dy Eqty Wth Ln Vl": "1,275,902 USD",
    "sec_gross_pos_val": "1,791,096 USD",
    "cash": "-401,693 USD",
    "MTD Interest": "-549 USD",
    "Pndng Dbt Crd Chrgs": "0 USD",
    "Rg T Eqty Wth Ln Vl": "1,256,229 USD"
  },
  "commodities": {
    "net_liquidation": "32,072 USD",
    "equity_with_loan": "23,291 USD",
    "cash": "32,072 USD",
    "MTD Interest": "0 USD",
    "Pndng Dbt Crd Chrgs": "0 USD"
  },
  "securities": {
    "net_liquidation": "1,256,229 USD",
    "equity_with_loan": "1,256,229 USD",
    "Prvs Dy Eqty Wth Ln Vl": "1,275,902 USD",
    "sec_gross_pos_val": "1,791,096 USD",
    "cash": "-433,765 USD",
    "MTD Interest": "-549 USD",
    "Pndng Dbt Crd Chrgs": "0 USD",
    "Rg T Eqty Wth Ln Vl": "1,256,229 USD"
  },
  "Crypto at Paxos": {
    "MTD Interest": "0 USD",
    "Pndng Dbt Crd Chrgs": "0 USD",
    "cash": "0 USD",
    "equity_with_loan": "0 USD",
    "net_liquidation": "0 USD"
  }
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/balances';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/summary/balances"

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

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/summary/balances")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/balances', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/summary/balances")! as URL,
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
