[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-markets)

# Provides All Contracts For Given Underlying Market.

GET https://localhost:5000/v1/api/forecast/contract/market

Returns all high level contract details affiliated with the underlying market conid provided.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-markets

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `underlyingConid` (string, required)
- `exchange` (string, optional)

## Response

### 200

Returns the liquid and extended trading hours of the coming and prior trading days.

- `market_name` (string, optional) — Market contract identifier.
- `exchange` (string, optional) — Exchange that was passed in request or determined internally.
- `symbol` (string, optional) — Market symbol.
- `logo_category` (string, optional) — Logo category to use in logo service to retrieve image.
- `exclude_historical_data` (boolean, optional) — Indicates whether UI should or should not display underlying chart.
- `payout` (double, optional) — Ratio of payout scaling.
- `contracts` (list of ForecastMarketResponseContractsItems, optional) — List of contracts matching the requested market.

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

### ForecastMarketResponseContractsItems

- `conid` (long, optional) — Market contract identifier.
- `side` (string, optional) — "Y" or "N" denoting a Yes or No contract.
- `expiration` (string, optional) — Contract expiration date in YYYYMMDD format.
- `strike` (long, optional) — Contract strike price.
- `strike_label` (string, optional) — Strike label to display.
- `expiry_label` (string, optional) — Label UI to show for the expiration tabs.
- `underlying_conid` (long, optional) — Immediate underlier to contract (i.e. future conid for FOPs).
- `time_specifier` (string, optional) — Specified date of expiration.

## Examples

**Response**

```json
{
  "market_name": "United States Carbon Dioxide Emissions",
  "exchange": "FORECASTX",
  "symbol": "USCE",
  "logo_category": "g7369",
  "exclude_historical_data": false,
  "payout": 1,
  "contracts": [
    {
      "conid": 732957192,
      "side": "Y",
      "expiration": "20260430",
      "strike": 4700,
      "strike_label": "Above 4,700",
      "expiry_label": "2025",
      "underlying_conid": 732764706,
      "time_specifier": "2025.12.31"
    },
    {
      "conid": 732957197,
      "side": "N",
      "expiration": "20260430",
      "strike": 4700,
      "strike_label": "Above 4,700",
      "expiry_label": "2025",
      "underlying_conid": 732764706,
      "time_specifier": "2025.12.31"
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

	url := "https://localhost:5000/v1/api/forecast/contract/market?underlyingConid=underlyingConid"

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

url = URI("https://localhost:5000/v1/api/forecast/contract/market?underlyingConid=underlyingConid")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/forecast/contract/market?underlyingConid=underlyingConid")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/forecast/contract/market?underlyingConid=underlyingConid', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/forecast/contract/market?underlyingConid=underlyingConid")! as URL,
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
