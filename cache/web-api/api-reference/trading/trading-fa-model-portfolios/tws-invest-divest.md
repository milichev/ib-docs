> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# TWS Invest / Divest

POST https://localhost:5000/v1/api/fa/model/tws-invest-divest
Content-Type: application/json

Submit TWS-style invest or divest instructions across **one or more destination models** for a set of accounts. Positive `amtToInvest` values invest cash into the target model; negative values divest. The response returns the resulting allocation plan and cash transfers between the source cash pool and each destination model.

The set of accounts to invest can be specified in one of three **mutually exclusive** ways:
 * `account` - a single U-account identifier
   (e.g. `"account": "DU12349"`).
 * `accountList` - an explicit list of U-account identifiers
   (e.g. `"accountList": ["DU12349", "DU12350", "DU12351"]`).
 * `group` - the name of an FA pre-trade allocation group
   (e.g. `"group": "Group1"`), or `"All"` to include every account under the
   advisor. When `accountList` or `group` is used, each `amtToInvest` value is
   **divided equally** across the resolved accounts.


Feature comparison vs. `/fa/model/invest-divest`:
 * `tws-invest-divest` supports models denominated in **multiple currencies**;
   `invest-divest` supports only single-currency models.
 * `tws-invest-divest` accepts **multiple destination models** per request
   (via `modelList`); `invest-divest` targets a single model per request.
 * `invest-divest` allows a **different investment amount per account**
   because each account is listed individually with its own `amtToInvest`.
   FA pre-trade allocation groups are not supported by `invest-divest`.
 * When `tws-invest-divest` uses `group` or `accountList`, the single
   `amtToInvest` is split **equally** across all resolved accounts.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/tws-invest-divest

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
- `modelList` (list of V1ApiFaModelTwsInvestDivestPostRequestBodyContentApplicationJsonSchemaModelListItems, required) — List of invest/divest instructions, one per model destination.
- `account` (string, optional) — Single U-account identifier submitting the invest/divest instructions. Mutually exclusive with `accountList` and `group`.
- `accountList` (list of string, optional) — Explicit list of U-account identifiers to invest/divest. Each `amtToInvest` value in `modelList` is divided equally across the listed accounts. Mutually exclusive with `account` and `group`.
- `group` (string, optional) — Name of an FA pre-trade allocation group whose member accounts should receive the invest/divest instructions. Use `"All"` to target every account under the advisor. When supplied, each `amtToInvest` value in `modelList` is divided equally across the resolved group members. Mutually exclusive with `account` and `accountList`.
- `subscriptionKey` (string, optional) — Subscription key. Send an empty string on the initial request.

## Response

### 200

Successfully computed the invest/divest allocation plan.

- `allocations` (list of twsInvestDivestAllocation, optional) — Per-instrument allocation instructions produced by the invest/divest planner.
- `cashTransfers` (list of twsInvestDivestCashTransfer, optional) — Cash movements between source and destination models required to fund the plan.
- `errors` (list of string, optional, nullable) — Errors produced by the planner. `null` when the plan is successful.
- `positionTransfers` (list of TwsInvestDivestResponsePositionTransfersItems, optional) — Position transfers scheduled between the source and destination models.
- `reqID` (long, optional) — Request identifier echoed from the originating request.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.
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

### V1ApiFaModelTwsInvestDivestPostRequestBodyContentApplicationJsonSchemaModelListItems

- `investCurrency` (string, optional) — Currency (ISO 4217) of the invest/divest amount.
- `amtToInvest` (double, optional) — Amount of cash to invest into the model. Use a negative value to divest.
- `model` (string, optional) — Destination model for the invest/divest instruction.

### twsInvestDivestAllocation

Allocation instruction produced by the TWS invest/divest planner.

- `account` (string, optional) — Account the allocation applies to.
- `batchNumber` (long, optional) — Batch grouping used to order the submitted transfers.
- `cashQty` (string, optional) — Cash-denominated quantity for the allocation.
- `closePosition` (boolean, optional) — True if this allocation fully closes the position.
- `conid` (long, optional) — Contract identifier for the instrument being allocated.
- `isCashQty` (boolean, optional) — True if the allocation is expressed as a cash amount rather than a share quantity.
- `model` (string, optional) — Destination model for the allocation.
- `price` (string, optional) — Price used to compute the allocation.
- `quantity` (string, optional) — Share quantity for the allocation.
- `relatedRequestAccount` (string, optional) — Account associated with the related upstream request.
- `relatedRequestID` (string, optional) — Identifier of the related upstream request that produced this allocation.
- `secType` (string, optional) — Security type (e.g. `STK`).

### twsInvestDivestCashTransfer

Cash transfer between a source and destination model produced by the TWS invest/divest planner.

- `account` (string, optional) — Account the cash transfer applies to.
- `amt` (string, optional) — Amount of cash to transfer, expressed in `ccy`.
- `batchNumber` (long, optional) — Batch grouping used to order the submitted transfers.
- `ccy` (string, optional) — Currency of the cash transfer (ISO 4217).
- `destinationModel` (string, optional) — Model receiving the cash.
- `sourceModel` (string, optional) — Model supplying the cash (e.g. `Core` for the independent cash pool).

### TwsInvestDivestResponsePositionTransfersItems

## Examples

**Request**

```json
{
  "reqID": 398889,
  "modelList": [
    {}
  ]
}
```

**Response**

```json
{
  "allocations": [
    {
      "account": "DU12345",
      "batchNumber": 4,
      "cashQty": "15.73",
      "closePosition": false,
      "conid": 270639,
      "isCashQty": false,
      "model": "MODEL-API-DEMO",
      "price": "103.256",
      "quantity": "0.1523",
      "relatedRequestAccount": "DU12345",
      "relatedRequestID": "21449",
      "secType": "STK"
    },
    {
      "account": "DU12345",
      "batchNumber": 4,
      "cashQty": "206.92",
      "closePosition": false,
      "conid": 76792991,
      "isCashQty": false,
      "model": "MODEL-API-DEMO",
      "price": "339.489",
      "quantity": "0.6095",
      "relatedRequestAccount": "DU12345",
      "relatedRequestID": "21449",
      "secType": "STK"
    }
  ],
  "cashTransfers": [
    {
      "account": "DU12345",
      "amt": "3000",
      "batchNumber": 1,
      "ccy": "USD",
      "destinationModel": "MODEL-API-DEMO",
      "sourceModel": "Core"
    }
  ],
  "errors": [
    "None"
  ],
  "positionTransfers": [],
  "reqID": 398889,
  "subscriptionStatus": 1,
  "transfersInstructionId": 2
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/fa/model/tws-invest-divest"

payload = {
    "reqID": 398889,
    "modelList": [{}]
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/tws-invest-divest';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"reqID":398889,"modelList":[{}]}'
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

	url := "https://localhost:5000/v1/api/fa/model/tws-invest-divest"

	payload := strings.NewReader("{\n  \"reqID\": 398889,\n  \"modelList\": [\n    {}\n  ]\n}")

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

url = URI("https://localhost:5000/v1/api/fa/model/tws-invest-divest")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 398889,\n  \"modelList\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fa/model/tws-invest-divest")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"reqID\": 398889,\n  \"modelList\": [\n    {}\n  ]\n}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/tws-invest-divest', [
  'body' => '{
  "reqID": 398889,
  "modelList": [
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

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/fa/model/tws-invest-divest");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"reqID\": 398889,\n  \"modelList\": [\n    {}\n  ]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "reqID": 398889,
  "modelList": [[]]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/tws-invest-divest")! as URL,
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