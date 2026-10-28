[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-accounts/get-margin-summary)

# Summary Of Account Margin Usage

GET https://localhost:5000/v1/api/iserver/account/{accountId}/summary/margins

Returns a summary of an account's margin, in total and by account segment.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-margin-summary

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

Indicates a success request to receive margin balance values.

- `total` (SummaryOfAccountMarginResponseTotal, optional)
- `Crypto at Paxos` (SummaryOfAccountMarginResponseCryptoAtPaxos, optional)
- `commodities` (SummaryOfAccountMarginResponseCommodities, optional)
- `securities` (SummaryOfAccountMarginResponseSecurities, optional)

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

### SummaryOfAccountMarginResponseTotal

- `current_initial` (string, optional) — The minimum amount required to open a new position.
- `Prdctd Pst-xpry Mrgn @ Opn` (string, optional) — Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio.
- `current_maint` (string, optional) — The amount of equity required to maintain your positions.
- `projected_liquidity_inital_margin` (string, optional) — Provides a projected "liquid" initial margin value based on account liquidation value.
- `Prjctd Lk Ahd Mntnnc Mrgn` (string, optional) — If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open. * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account. * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
- `projected_overnight_initial_margin` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * Securities – Projected overnight initial margin requirement in the base currency of the account. * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
- `Prjctd Ovrnght Mntnnc Mrgn` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account. * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.

### SummaryOfAccountMarginResponseCryptoAtPaxos

- `current_initial` (string, optional) — The minimum amount required to open a new position.
- `Prdctd Pst-xpry Mrgn @ Opn` (string, optional) — Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio.
- `current_maint` (string, optional) — The amount of equity required to maintain your positions.
- `projected_liquidity_inital_margin` (string, optional) — Provides a projected "liquid" initial margin value based on account liquidation value.
- `Prjctd Lk Ahd Mntnnc Mrgn` (string, optional) — If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open. * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account. * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
- `projected_overnight_initial_margin` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * Securities – Projected overnight initial margin requirement in the base currency of the account. * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
- `Prjctd Ovrnght Mntnnc Mrgn` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account. * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.

### SummaryOfAccountMarginResponseCommodities

- `RegT Margin` (string, optional) — The current RegT margin in use.
- `current_initial` (string, optional) — The minimum amount required to open a new position.
- `Prdctd Pst-xpry Mrgn @ Opn` (string, optional) — Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio.
- `current_maint` (string, optional) — The amount of equity required to maintain your positions.
- `projected_liquidity_inital_margin` (string, optional) — Provides a projected "liquid" initial margin value based on account liquidation value.
- `Prjctd Lk Ahd Mntnnc Mrgn` (string, optional) — If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open. * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account. * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
- `projected_overnight_initial_margin` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * Securities – Projected overnight initial margin requirement in the base currency of the account. * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
- `Prjctd Ovrnght Mntnnc Mrgn` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account. * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.

### SummaryOfAccountMarginResponseSecurities

- `current_initial` (string, optional) — The minimum amount required to open a new position.
- `Prdctd Pst-xpry Mrgn @ Opn` (string, optional) — Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio.
- `current_maint` (string, optional) — The amount of equity required to maintain your positions.
- `projected_liquidity_inital_margin` (string, optional) — Provides a projected "liquid" initial margin value based on account liquidation value.
- `Prjctd Lk Ahd Mntnnc Mrgn` (string, optional) — If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open. * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account. * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
- `projected_overnight_initial_margin` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * Securities – Projected overnight initial margin requirement in the base currency of the account. * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
- `Prjctd Ovrnght Mntnnc Mrgn` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account. * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.

## Examples

**Response**

```json
{
  "total": {
    "current_initial": "468,562 USD",
    "Prdctd Pst-xpry Mrgn @ Opn": "0 USD",
    "current_maint": "467,308 USD",
    "projected_liquidity_inital_margin": "468,562 USD",
    "Prjctd Lk Ahd Mntnnc Mrgn": "467,308 USD",
    "projected_overnight_initial_margin": "468,562 USD",
    "Prjctd Ovrnght Mntnnc Mrgn": "467,308 USD",
    "RegT Margin": "896,255 USD"
  },
  "Crypto at Paxos": {
    "current_initial": "0 USD",
    "Prdctd Pst-xpry Mrgn @ Opn": "0 USD",
    "current_maint": "0 USD",
    "projected_liquidity_inital_margin": "0 USD",
    "Prjctd Lk Ahd Mntnnc Mrgn": "0 USD",
    "projected_overnight_initial_margin": "0 USD",
    "Prjctd Ovrnght Mntnnc Mrgn": "0 USD"
  },
  "commodities": {
    "current_initial": "13,794 USD",
    "Prdctd Pst-xpry Mrgn @ Opn": "0 USD",
    "current_maint": "12,540 USD",
    "projected_liquidity_inital_margin": "13,794 USD",
    "Prjctd Lk Ahd Mntnnc Mrgn": "12,540 USD",
    "projected_overnight_initial_margin": "13,794 USD",
    "Prjctd Ovrnght Mntnnc Mrgn": "12,540 USD"
  },
  "securities": {
    "current_initial": "454,768 USD",
    "Prdctd Pst-xpry Mrgn @ Opn": "0 USD",
    "current_maint": "454,768 USD",
    "projected_liquidity_inital_margin": "454,768 USD",
    "Prjctd Lk Ahd Mntnnc Mrgn": "454,768 USD",
    "projected_overnight_initial_margin": "454,768 USD",
    "Prjctd Ovrnght Mntnnc Mrgn": "454,768 USD",
    "RegT Margin": "896,255 USD"
  }
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

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/summary/margins"

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

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/summary/margins")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/U1234567/summary/margins")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/margins', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/summary/margins")! as URL,
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
