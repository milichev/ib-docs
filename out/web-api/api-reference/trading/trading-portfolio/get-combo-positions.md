[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio/get-combo-positions)

# Combination Positions

GET https://localhost:5000/v1/api/portfolio/{accountId}/combo/positions

Provides all positions held in the account acquired as a combination, including values such as ratios, size, and market value.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-combo-positions

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Query parameters

- `nocache` (boolean, optional, default: false)

## Response

### 200

response with combo position definitions

- `list of ComboPositionResponseItems`

## Errors

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

### ComboPositionResponseItems

- `description` (string, optional) — The ratio and conids included in the position.
- `legs` (list of ComboPositionResponseItemsLegsItems, optional) — List of the legs that make up a position.
- `name` (string, optional) — Internal identifier of a combination position.
- `positions` (list of individualComboPosition, optional) — List of the positions that make up a combination.

### ComboPositionResponseItemsLegsItems

- `conid` (string, optional) — Contract identifier of the given leg.
- `ratio` (long, optional) — Ratio of the leg compared to the quantity.

### individualComboPosition

- `acctId` (string, optional) — IB accountId of an account with a position in the requested conid.
- `assetClass` (string, optional) — Asset class of the requested instrument.
- `avgCost` (double, optional) — The account's average cost for its position.
- `avgPrice` (double, optional) — The account's average price for its position.
- `conExchMap` (list of any, optional)
- `conid` (long, optional) — IB contract ID for the instrument.
- `contractDesc` (string, optional) — Human-readable description of the instrument.
- `currency` (string, optional) — Currency in which the instrument trades.
- `exchs` (IndividualComboPositionExchs, optional, nullable)
- `exerciseStyle` (string, optional, nullable) — Style of exercise for options.
- `expiry` (string, optional) — Expiration of instrument, if applicable.
- `mktPrice` (double, optional) — Current market price of the instrument, in the instrument's currency.
- `mktValue` (double, optional) — Current market value of the account's position in the instrument, in the instrument's currency.
- `multiplier` (double, optional) — Instrument's multiplier, if applicable.
- `position` (double, optional) — Size of position in units of instrument.
- `putOrCall` (enum, optional) — The right of an options contract, if applicable.
  - Allowed values: `P`, `C`, `None`
- `realizedPnl` (double, optional) — Realized PnL for the instrument in the instrument's currency.
- `strike` (string, optional) — Strike price, if applicable. Returned as string.
- `undConid` (long, optional) — Contract ID of underlying instrument, if applicable.
- `unrealizedPnl` (double, optional) — Unrealized PnL for the instrument in the account.

### IndividualComboPositionExchs

## Examples

**Response**

```json
[
  {
    "description": "1*649180695-1*654503299",
    "legs": [
      {
        "conid": "649180695",
        "ratio": 1
      },
      {
        "conid": "654503299",
        "ratio": -1
      }
    ],
    "name": "CP.CP695fcbb4",
    "positions": [
      {
        "acctId": "DU5240685",
        "assetClass": "FUT",
        "avgCost": 348114.52,
        "avgPrice": 6962.2904,
        "conExchMap": [],
        "conid": 649180695,
        "contractDesc": "ES       MAR2026",
        "currency": "USD",
        "exchs": "None",
        "exerciseStyle": "None",
        "expiry": "None",
        "mktPrice": 6962,
        "mktValue": 348100,
        "multiplier": 1.1,
        "position": 1,
        "putOrCall": "None",
        "realizedPnl": 0,
        "strike": "0",
        "undConid": 0,
        "unrealizedPnl": -14.52
      },
      {
        "acctId": "DU5240685",
        "assetClass": "FUT",
        "avgCost": 49997.98,
        "avgPrice": 999.9596,
        "conExchMap": [],
        "conid": 654503299,
        "contractDesc": "ES       DEC2028",
        "currency": "USD",
        "exchs": "None",
        "exerciseStyle": "None",
        "expiry": "None",
        "mktPrice": 7530.1928711,
        "mktValue": -376509.64,
        "multiplier": 1.1,
        "position": -1,
        "putOrCall": "None",
        "realizedPnl": 0,
        "strike": "0",
        "undConid": 0,
        "unrealizedPnl": -326511.66
      }
    ]
  }
]
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

	url := "https://localhost:5000/v1/api/portfolio/accountId/combo/positions"

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

url = URI("https://localhost:5000/v1/api/portfolio/accountId/combo/positions")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/accountId/combo/positions")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/accountId/combo/positions', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/accountId/combo/positions")! as URL,
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
