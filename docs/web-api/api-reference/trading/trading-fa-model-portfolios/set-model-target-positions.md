[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/set-model-target-positions)

# Set Model Allocations

POST https://localhost:5000/v1/api/fa/model/save
Content-Type: application/json

Create or Modify a model's target positions.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/set-model-target-positions

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `cashTargets` (list of V1ApiFaModelSavePostRequestBodyContentApplicationJsonSchemaCashTargetsItems, required) — Array target cash objects
- `desc` (string, required) — Personal description of model to read in IBKR GUI elements.
- `isStatic` (boolean, required) — Determine if investing and rebalancing should be handled statically or dynamically. * `true` - Static models will always use the original targets. * `false` - Dynamic models will adjust allocation in response to market movements.
- `model` (string, required) — Name of your model.
- `positionTargets` (list of V1ApiFaModelSavePostRequestBodyContentApplicationJsonSchemaPositionTargetsItems, required) — List containing all contracts to hold in the model.
- `reqID` (long, required) — Request identifier to uniquely track a request.

## Response

### 200

Successfully saved a model

- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `success` (boolean, optional) — Signifies that the request was successfully submitted.

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

### V1ApiFaModelSavePostRequestBodyContentApplicationJsonSchemaCashTargetsItems

- `ccy` (string, optional) — Currency code to hold positions.
- `target` (double, optional) — Percentage of model to distribute to the given currency.

### V1ApiFaModelSavePostRequestBodyContentApplicationJsonSchemaPositionTargetsItems

- `conid` (long, optional) — Contract identifier, conid, to designate which security to hold.
- `target` (double, optional) — Percentage of model to distribute to the given currency.

## Examples

**Request**

```json
{
  "cashTargets": [
    {}
  ],
  "desc": "string",
  "isStatic": true,
  "model": "Sample-Model",
  "positionTargets": [
    {}
  ],
  "reqID": 540607
}
```

**Response**

```json
{
  "reqID": 540607,
  "success": true
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/v1/api/fa/model/save';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"cashTargets":[{}],"desc":"string","isStatic":true,"model":"Sample-Model","positionTargets":[{}],"reqID":540607}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fa/model/save"

	payload := strings.NewReader("{\n  \"cashTargets\": [\n    {}\n  ],\n  \"desc\": \"string\",\n  \"isStatic\": true,\n  \"model\": \"Sample-Model\",\n  \"positionTargets\": [\n    {}\n  ],\n  \"reqID\": 540607\n}")

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

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fa/model/save")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"cashTargets\": [\n    {}\n  ],\n  \"desc\": \"string\",\n  \"isStatic\": true,\n  \"model\": \"Sample-Model\",\n  \"positionTargets\": [\n    {}\n  ],\n  \"reqID\": 540607\n}"

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/save', [
  'body' => '{
  "cashTargets": [
    {}
  ],
  "desc": "string",
  "isStatic": true,
  "model": "Sample-Model",
  "positionTargets": [
    {}
  ],
  "reqID": 540607
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "cashTargets": [[]],
  "desc": "string",
  "isStatic": true,
  "model": "Sample-Model",
  "positionTargets": [[]],
  "reqID": 540607
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/save")! as URL,
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
