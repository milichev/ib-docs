[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-model-summary-single)

# Request Model Summary

POST https://localhost:5000/v1/api/fa/model/summary
Content-Type: application/json

Request a summary for a single model.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-model-summary-single

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `model` (string, optional) — Name of your model.

## Response

### 200

Successfully retrieve model summary.

- `bootstrapped` (boolean, optional) — Used internally for client portal designation. Should be ignored.
- `customIndex` (boolean, optional) — Used internally for client portal. Should be ignored.
- `desc` (string, optional) — Personal description of model to read in IBKR GUI elements.
- `isStatic` (boolean, optional) — Determine if investing and rebalancing should be handled statically or dynamically. * `true` - Static models will always use the original targets. * `false` - Dynamic models will adjust allocation in response to market movements.
- `mismatch` (boolean, optional) — Notes if the Actual allocation has become misalligned with the Target.
- `model` (string, optional) — Name of the model.
- `nlv` (double, optional) — Net Liquidation of the model.
- `numAccounts` (long, optional) — Lists the number of accounts held within the model.
- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.

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
{}
```

**Response**

```json
{
  "bootstrapped": true,
  "customIndex": false,
  "desc": "USModel",
  "isStatic": false,
  "mismatch": false,
  "model": "USModel",
  "nlv": 79.63,
  "numAccounts": 2,
  "reqID": 540609,
  "subscriptionStatus": 1
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/summary';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
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

	url := "https://localhost:5000/v1/api/fa/model/summary"

	payload := strings.NewReader("{}")

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

url = URI("https://localhost:5000/v1/api/fa/model/summary")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/summary', [
  'body' => '{}',
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
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/summary")! as URL,
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
