[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-contract)

# Event Contract Details

GET https://localhost:5000/v1/api/forecast/contract/details

Provides instrument details for the specific forecast contract.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-contract

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

Returns the expanded list of the event contract containing both Yes and No side identifier information.

- `conid_yes` (long, optional) — Contract identifier of "yes" contract
- `conid_no` (long, optional) — Contract identifier of "no" contract
- `question` (string, optional) — Contract question (i.e. "Will this happen on this date?")
- `side` (string, optional) — "Y" or "N", yes or no contract.
- `strike_label` (string, optional) — Strike label to display.
- `strike` (long, optional) — Contract strike.
- `exchange` (string, optional) — Contract exchange.
- `expiration` (string, optional) — Contract expiration date in YYYYMMDD format.
- `symbol` (string, optional) — Contract symbol.
- `category` (string, optional) — The affiliated market category declared in /forecast/category/tree.
- `logo_category` (string, optional) — Logo category to use in logo service to get image.
- `measured_period` (string, optional) — measured period
- `market_name` (string, optional) — name of contract's market.
- `underlying_conid` (long, optional) — Immediate underlier to contract (i.e. future conid for FOPs)
- `payout` (double, optional) — Ratio of payout scaling.

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
  "conid_yes": 805953033,
  "conid_no": 805953036,
  "question": "Will US carbon dioxide emmissions exceed 5,050 million metric tons in 2035?",
  "side": "Y",
  "strike_label": "Above 5,050",
  "strike": 5050,
  "exchange": "FORECASTX",
  "expiration": "20360430",
  "symbol": "USCE",
  "category": "g5351",
  "logo_category": "g7369",
  "measured_period": "Dec31'35",
  "market_name": "United States Carbon Dioxide Emissions",
  "underlying_conid": 732764706,
  "payout": 1
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/forecast/contract/details?conid=conid';
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

	url := "https://localhost:5000/v1/api/forecast/contract/details?conid=conid"

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

url = URI("https://localhost:5000/v1/api/forecast/contract/details?conid=conid")

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

$response = $client->request('GET', 'https://localhost:5000/v1/api/forecast/contract/details?conid=conid', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/forecast/contract/details?conid=conid")! as URL,
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
