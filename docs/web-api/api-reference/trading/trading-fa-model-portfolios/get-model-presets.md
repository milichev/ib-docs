[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-model-presets)

# Get Model Preset

POST https://localhost:5000/v1/api/fa/fa-preset/get
Content-Type: application/json

Get the preset behavior for model rebalancing.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-model-presets

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `reqID` (long, required) — Request identifier to uniquely track a request.

## Response

### 200

Successfully retrieve preset details

- `avoidNegativeCashInIndependent` (boolean, optional) — Avoid negative offsetting cash in Independent
- `closeDivestIndependentPosition` (boolean, optional) — Close out the full position while divesting.
- `fullyInvestExistingLongPositions` (boolean, optional) — Use the maximum avialble funds to increase long positions.
- `keepModelOpen` (boolean, optional) — Keep model open for fully divested accounts.
- `preferCrossWithIndependent` (boolean, optional) — Transfer positions to Independent instead of liquidating.
- `preferTransferFromIndependent` (boolean, optional) — Transfer positions from Independent structure when possible.
- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `roundAllocationQuantityToExchangeBoardLot` (boolean, optional) — Determine if allocation quantities should be handled by lot size.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.
- `useNonBaseCcy` (boolean, optional) — Use non-base balances when available.
- `useToleranceRange` (boolean, optional) — Designate of tolerance ranges should be used for rebalancing.

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

**Request**

```json
{
  "reqID": 540608
}
```

**Response**

```json
{
  "avoidNegativeCashInIndependent": false,
  "closeDivestIndependentPosition": true,
  "fullyInvestExistingLongPositions": false,
  "keepModelOpen": false,
  "preferCrossWithIndependent": false,
  "preferTransferFromIndependent": true,
  "reqID": 127,
  "roundAllocationQuantityToExchangeBoardLot": false,
  "subscriptionStatus": 1,
  "useNonBaseCcy": false,
  "useToleranceRange": false
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/fa-preset/get';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"reqID":540608}'
};

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
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fa/fa-preset/get"

	payload := strings.NewReader("{\n  \"reqID\": 540608\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

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

url = URI("https://localhost:5000/v1/api/fa/fa-preset/get")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 540608\n}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/fa-preset/get', [
  'body' => '{
  "reqID": 540608
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["reqID": 540608] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/fa-preset/get")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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
