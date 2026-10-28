[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/model-cash-analyzer)

# Model Cash Analyzer

POST https://localhost:5000/v1/api/fa/model/cash-analyzer
Content-Type: application/json

Run the model cash analyzer to review pending cash transfers, FX conversion orders, and any margin warnings that would result from the currently pending model allocation plan.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/model-cash-analyzer

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
- `subscriptionKey` (string, optional) — Subscription key. Send an empty string on the initial request.

## Response

### 200

Successfully retrieved the cash analyzer summary.

- `cashTransfers` (list of twsInvestDivestCashTransfer, optional) — Cash transfers required by the current allocation plan.
- `error` (string, optional, nullable) — Error message produced by the analyzer, or `null` if none.
- `fxconvorders` (list of CashAnalyzerResponseFxconvordersItems, optional) — FX conversion orders required to fund the plan.
- `marginWarning` (boolean, optional) — True if the plan would trigger a margin warning.
- `reqID` (long, optional) — Request identifier echoed from the originating request.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.
- `success` (boolean, optional) — Signifies that the analyzer completed successfully.
- `transfersInstructionId` (long, optional) — Identifier that groups the resulting transfers; supply to downstream submit endpoints.

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

### twsInvestDivestCashTransfer

Cash transfer between a source and destination model produced by the TWS invest/divest planner.

- `account` (string, optional) — Account the cash transfer applies to.
- `amt` (string, optional) — Amount of cash to transfer, expressed in `ccy`.
- `batchNumber` (long, optional) — Batch grouping used to order the submitted transfers.
- `ccy` (string, optional) — Currency of the cash transfer (ISO 4217).
- `destinationModel` (string, optional) — Model receiving the cash.
- `sourceModel` (string, optional) — Model supplying the cash (e.g. `Core` for the independent cash pool).

### CashAnalyzerResponseFxconvordersItems

## Examples

**Request**

```json
{
  "reqID": 398899
}
```

**Response**

```json
{
  "cashTransfers": [],
  "error": "None",
  "fxconvorders": [],
  "marginWarning": false,
  "reqID": 398899,
  "subscriptionStatus": 1,
  "success": true,
  "transfersInstructionId": 3
}
```

**SDK Code**

```go success
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fa/model/cash-analyzer"

	payload := strings.NewReader("{\n  \"reqID\": 398899\n}")

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

url = URI("https://localhost:5000/v1/api/fa/model/cash-analyzer")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 398899\n}"

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fa/model/cash-analyzer")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"reqID\": 398899\n}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/cash-analyzer', [
  'body' => '{
  "reqID": 398899
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
let parameters = ["reqID": 398899] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/cash-analyzer")! as URL,
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
