[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-allmodels)

# Request All Models

POST https://localhost:5000/v1/api/fa/model/list
Content-Type: application/json

Retrieve summaries for all models under the advisor account.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-allmodels

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

Successfully retrieve the model list

- `baseCcy` (string, optional) — Base currency of the established model.
- `masterAccount` (string, optional) — Advisor account responsible for the model.
- `models` (list of ModelListResponseModelsItems, optional) — List of all models held under the masterAccount.
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

## Types

### ModelListResponseModelsItems

- `bootstrapped` (boolean, optional) — Used internally for client portal designation. Should be ignored.
- `customIndex` (boolean, optional) — Used internally for client portal. Should be ignored.
- `desc` (string, optional) — Personal description of model to read in IBKR GUI elements.
- `isStatic` (boolean, optional) — Determine if investing and rebalancing should be handled statically or dynamically. * `true` - Static models will always use the original targets. * `false` - Dynamic models will adjust allocation in response to market movements.
- `mismatch` (boolean, optional) — Notes if the Actual allocation has become misalligned with the Target.
- `model` (string, optional) — Name of the model.
- `nlv` (double, optional) — Market value of the model.
- `numAccounts` (long, optional) — Lists the number of accounts held within the model.

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
  "baseCcy": "USD",
  "masterAccount": "DF123456",
  "models": [
    {
      "bootstrapped": true,
      "customIndex": false,
      "desc": "Model formed around TSEJ contracts",
      "isStatic": false,
      "mismatch": false,
      "model": "JPModel",
      "nlv": 30567.89,
      "numAccounts": 2
    },
    {
      "bootstrapped": true,
      "customIndex": false,
      "desc": "USModel",
      "isStatic": false,
      "mismatch": false,
      "model": "USModel",
      "nlv": 79.63,
      "numAccounts": 2
    }
  ],
  "reqID": 540608,
  "subscriptionStatus": 1
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/list';
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

	url := "https://localhost:5000/v1/api/fa/model/list"

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

url = URI("https://localhost:5000/v1/api/fa/model/list")

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

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/list', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/list")! as URL,
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
