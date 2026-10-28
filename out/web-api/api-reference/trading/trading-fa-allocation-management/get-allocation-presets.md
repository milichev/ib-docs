[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-allocation-presets)

# Retrieve Allocation Presets

GET https://localhost:5000/v1/api/iserver/account/allocation/presets

Retrieve the preset behavior for allocation groups for specific events. This endpoint is only supported for Financial Advisors and IBroker Accounts. 

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-allocation-presets

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Successfully retrieve preset details

- `group_auto_close_positions` (boolean, optional) — Determines if allocation groups should prioritize closing positions over equal distribution.
- `default_method_for_all` (enum, optional) — Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods: * `A` - Available Equity * `E` - Equal * `N` - Net Liquidation Value User-specified allocation methods: * `C` - Cash Quantity * `P` - Percentage * `R` - Ratios * `S` - Shares
  - Allowed values: `AvailableEquity`, `E`, `N`, `C`, `P`, `R`, `S`
- `profiles_auto_close_positions` (boolean, optional) — Determines if allocation profiles should prioritize closing positions over equal distribution.
- `strict_credit_check` (boolean, optional) — Determines if the system should always check user credit before beginning the order process every time, or only at the time of order placement and execution.
- `group_proportional_allocation` (boolean, optional) — Determines if the system should keep allocation groups proportional for scaling.

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
  "group_auto_close_positions": false,
  "default_method_for_all": "AvailableEquity",
  "profiles_auto_close_positions": false,
  "strict_credit_check": false,
  "group_proportional_allocation": false
}
```

**SDK Code**

```go presents
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/presets"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby presents
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/presets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java presents
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/allocation/presets")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php presents
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/allocation/presets', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift presents
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/presets")! as URL,
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
