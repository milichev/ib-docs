[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-new-targets)

# Rebalance To New Targets

POST https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets
Content-Type: application/json

Rebalance the specified model to a brand-new set of target position and cash allocations supplied on the request. The full replacement target set is submitted; the response returns a subscription key for polling the resulting allocation preview.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-new-targets

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
- `positionTargets` (list of V1ApiFaModelRebalanceToNewTargetsPostRequestBodyContentApplicationJsonSchemaPositionTargetsItems, required) — Full replacement list of position targets for the model.
- `cashTargets` (list of V1ApiFaModelRebalanceToNewTargetsPostRequestBodyContentApplicationJsonSchemaCashTargetsItems, required) — Full replacement list of currency cash targets for the model.
- `subscriptionKey` (string, optional) — Subscription key returned by a prior polling response. Send an empty string on the initial request; supply the returned key on follow-up poll requests.

## Response

### 200

Successfully submitted rebalance-to-new-targets request.

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

## Types

### V1ApiFaModelRebalanceToNewTargetsPostRequestBodyContentApplicationJsonSchemaPositionTargetsItems

- `conid` (long, optional) — Contract identifier for the instrument to target.
- `target` (double, optional) — Target allocation for the instrument, expressed as a fraction of the model (e.g. `0.3` = 30%).
- `locked` (boolean, optional) — Whether the target is locked and should not be adjusted by the rebalancer.

### V1ApiFaModelRebalanceToNewTargetsPostRequestBodyContentApplicationJsonSchemaCashTargetsItems

- `ccy` (string, optional) — Currency code of the cash target (ISO 4217).
- `target` (double, optional) — Target allocation for the currency, expressed as a fraction of the model.
- `locked` (boolean, optional) — Whether the cash target is locked and should not be adjusted by the rebalancer.

## Examples

**Request**

```json
{
  "reqID": 398896,
  "model": "Sample-Model",
  "positionTargets": [
    {}
  ],
  "cashTargets": [
    {}
  ]
}
```

**Response**

```json
{
  "reqID": "398896",
  "subscriptionKey": "2",
  "subscriptionStatus": 0
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"reqID":398896,"model":"Sample-Model","positionTargets":[{}],"cashTargets":[{}]}'
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

	url := "https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets"

	payload := strings.NewReader("{\n  \"reqID\": 398896,\n  \"model\": \"Sample-Model\",\n  \"positionTargets\": [\n    {}\n  ],\n  \"cashTargets\": [\n    {}\n  ]\n}")

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

url = URI("https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 398896,\n  \"model\": \"Sample-Model\",\n  \"positionTargets\": [\n    {}\n  ],\n  \"cashTargets\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets', [
  'body' => '{
  "reqID": 398896,
  "model": "Sample-Model",
  "positionTargets": [
    {}
  ],
  "cashTargets": [
    {}
  ]
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
  "reqID": 398896,
  "model": "Sample-Model",
  "positionTargets": [[]],
  "cashTargets": [[]]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/rebalance/to-new-targets")! as URL,
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
