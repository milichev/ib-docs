[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-existing-targets)

# Rebalance To Existing Targets

POST https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets
Content-Type: application/json

Rebalance the specified model back to its currently saved target allocations. The response returns a subscription key that is used to poll for the resulting allocation preview via the standard subscription workflow.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-existing-targets

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
- `model` (string, required) — Name of the model to rebalance.
- `subscriptionKey` (string, optional) — Subscription key returned by a prior polling response. Send an empty string on the initial request; supply the returned key on follow-up poll requests.

## Response

### 200

Successfully submitted rebalance-to-existing-targets request.

- `reqID` (string, optional) — Request identifier echoed from the originating request.
- `subscriptionKey` (string, optional) — Subscription key to include on follow-up poll requests.
- `subscriptionStatus` (long, optional) — Polling state indicator. * `0` - Result is still being computed; continue polling. * `1` - Result is ready.

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
  "reqID": 398899,
  "model": "Sample-Model"
}
```

**Response**

```json
{
  "reqID": "398899",
  "subscriptionKey": "1",
  "subscriptionStatus": 0
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"reqID":398899,"model":"Sample-Model"}'
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

	url := "https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets"

	payload := strings.NewReader("{\n  \"reqID\": 398899,\n  \"model\": \"Sample-Model\"\n}")

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

url = URI("https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 398899,\n  \"model\": \"Sample-Model\"\n}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets', [
  'body' => '{
  "reqID": 398899,
  "model": "Sample-Model"
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
let parameters = [
  "reqID": 398899,
  "model": "Sample-Model"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/rebalance/to-existing-targets")! as URL,
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
