[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-rules)

# Event Contract Rules

GET https://localhost:5000/v1/api/forecast/contract/rules

Provides trading rules for specific event contracts.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-rules

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conid` (string, required)

## Response

### 200

Returns the corresponding contracts rules.

- `asset_class` (string, optional) — Product asset class.
- `description` (string, optional) — Long product description.
- `market_name` (string, optional) — Name of the contract's market.
- `measured_period` (string, optional) — Measured period of the contract.
- `threshold` (string, optional) — Either strike or strike label depending on contract type.
- `source_agency` (string, optional) — Name of the contract's source agency.
- `data_and_resolution_link` (string, optional) — Link to data from source agency.
- `last_trade_time` (long, optional) — last trade time in epoch seconds.
- `product_code` (string, optional) — Product code (symbol).
- `market_rules_link` (string, optional) — Link to market rules document.
- `release_time` (long, optional) — Release time in epoch seconds.
- `payout_time` (long, optional) — Payout time in epoch seconds.
- `payout` (string, optional) — Formatted payout amount.
- `price_increment` (string, optional) — Formatted price increment amount.
- `exchange_timezone` (string, optional) — Exchange timezone.

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

## Examples

**Response**

```json
{
  "asset_class": "OPT",
  "description": "Carbon Dioxide is an important greenhouse gas and thought to be one of the major contributors to anthropogenic climate change, a major societal challenge. US Carbon Dioxide emissions estimate the amount of Carbon Dioxide emitted in the United States in a calendar year.",
  "market_name": "United States Carbon Dioxide Emissions",
  "measured_period": "Dec31'35",
  "threshold": "5050.0",
  "source_agency": "Energy Information Agency",
  "data_and_resolution_link": "https://www.eia.gov/environment/emissions/carbon/",
  "last_trade_time": 2093202000,
  "product_code": "USCE",
  "market_rules_link": "https://data.forecastex.com/regulatory/USCETermsandConditions.pdf",
  "release_time": 2093202000,
  "payout_time": 2093277600,
  "payout": "$1.00",
  "price_increment": "$0.01",
  "exchange_timezone": "US/Central"
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/forecast/contract/rules?conid=conid';
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

	url := "https://localhost:5000/v1/api/forecast/contract/rules?conid=conid"

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

url = URI("https://localhost:5000/v1/api/forecast/contract/rules?conid=conid")

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

$response = $client->request('GET', 'https://localhost:5000/v1/api/forecast/contract/rules?conid=conid', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/forecast/contract/rules?conid=conid")! as URL,
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
