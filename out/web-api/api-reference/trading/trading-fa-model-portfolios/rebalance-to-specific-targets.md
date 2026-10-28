[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-specific-targets)

# Rebalance To Specific Targets

POST https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets
Content-Type: application/json

Rebalance the specified model by overriding only the supplied position targets, leaving all other model targets unchanged. Unlike `to-new-targets`, this endpoint returns the fully computed allocation preview inline (allocations, allocation totals, transfer plan, and warnings/errors) rather than a subscription key.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/rebalance-to-specific-targets

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
- `positionTargets` (list of V1ApiFaModelRebalanceToSpecificTargetsPostRequestBodyContentApplicationJsonSchemaPositionTargetsItems, required) — Position targets to override for the model. Only these instruments are adjusted; the rest of the model is preserved.
- `subscriptionKey` (string, optional) — Subscription key. Send an empty string on the initial request.

## Response

### 200

Successfully retrieved the rebalance allocation preview.

- `accountsCanTradeFractions` (list of string, optional) — Accounts eligible to trade fractional shares.
- `allocationTotals` (list of rebalanceAllocationTotal, optional) — Aggregate buy/sell totals per instrument.
- `allocations` (list of rebalanceAllocation, optional) — Individual allocation instructions produced by the rebalancer.
- `baseCcy` (string, optional) — Base currency of the model.
- `contractsAllocEnabled` (list of long, optional) — Contract identifiers for which allocation is enabled.
- `contractsCashQtyEnabled` (list of long, optional) — Contract identifiers for which cash-quantity allocation is enabled.
- `contractsFracEligible` (list of long, optional) — Contract identifiers eligible for fractional-share allocation.
- `errors` (list of string, optional) — List of errors produced by the rebalancer. Empty when the preview is successful.
- `miPositionTransfers` (list of RebalanceAllocationPreviewMiPositionTransfersItems, optional) — Position transfers scheduled between managed-independent accounts.
- `model` (string, optional) — Name of the model that was rebalanced.
- `positionTransfers` (list of RebalanceAllocationPreviewPositionTransfersItems, optional) — Position transfers scheduled between the model and its accounts.
- `reqID` (long, optional) — Request identifier echoed from the originating request.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.
- `transfersInstructionId` (string, optional) — Identifier that groups the resulting transfers; supply to downstream submit endpoints.
- `warnings` (list of string, optional) — Non-fatal warnings produced by the rebalancer.

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

### V1ApiFaModelRebalanceToSpecificTargetsPostRequestBodyContentApplicationJsonSchemaPositionTargetsItems

- `conid` (long, optional) — Contract identifier for the instrument to target.
- `target` (double, optional) — Target allocation for the instrument, expressed as a fraction of the model.
- `locked` (boolean, optional) — Whether the target is locked and should not be adjusted by the rebalancer.

### rebalanceAllocationTotal

Aggregate buy/sell totals for a single instrument in the rebalance preview.

- `conid` (long, optional) — Contract identifier for the instrument.
- `secType` (string, optional) — Security type (e.g. `STK`).
- `totalBuy` (string, optional, nullable) — Total shares to buy across all accounts.
- `totalCashQtyBuy` (string, optional, nullable) — Total cash-denominated buy quantity across all accounts.
- `totalCashQtySell` (string, optional, nullable) — Total cash-denominated sell quantity across all accounts.
- `totalSell` (string, optional, nullable) — Total shares to sell across all accounts.

### rebalanceAllocation

Individual allocation instruction produced by the rebalancer.

- `account` (string, optional) — Account identifier the allocation applies to (may be qualified with the model name).
- `batchNumber` (long, optional) — Batch grouping used to order the submitted transfers.
- `cashQty` (string, optional) — Cash-denominated quantity for the allocation.
- `closePosition` (boolean, optional) — True if this allocation fully closes the position.
- `conid` (long, optional) — Contract identifier for the instrument being allocated.
- `fxHedgeConid` (long, optional, nullable) — Contract identifier for the FX hedge, when applicable.
- `fxHedgeQuantity` (string, optional, nullable) — Quantity of the FX hedge, when applicable.
- `isCashQty` (boolean, optional) — True if the allocation is expressed as a cash amount rather than a share quantity.
- `quantity` (string, optional) — Share quantity for the allocation.
- `secType` (string, optional) — Security type (e.g. `STK`).

### RebalanceAllocationPreviewMiPositionTransfersItems

### RebalanceAllocationPreviewPositionTransfersItems

## Examples

**Request**

```json
{
  "reqID": 398899,
  "model": "MODEL-API-DEMO",
  "positionTargets": [
    {}
  ]
}
```

**Response**

```json
{
  "accountsCanTradeFractions": [
    "DU12345"
  ],
  "allocationTotals": [
    {
      "conid": 268084,
      "secType": "STK",
      "totalBuy": "34.3981",
      "totalCashQtyBuy": "3809.72",
      "totalCashQtySell": "None",
      "totalSell": "None"
    }
  ],
  "allocations": [
    {
      "account": "DU12345.MODEL-API-DEMO",
      "batchNumber": 4,
      "cashQty": "3809.72",
      "closePosition": false,
      "conid": 268084,
      "fxHedgeConid": 1,
      "fxHedgeQuantity": "None",
      "isCashQty": true,
      "quantity": "34.3981",
      "secType": "STK"
    }
  ],
  "baseCcy": "USD",
  "contractsAllocEnabled": [
    268084
  ],
  "contractsCashQtyEnabled": [
    268084
  ],
  "contractsFracEligible": [
    268084
  ],
  "errors": [],
  "miPositionTransfers": [],
  "model": "MODEL-API-DEMO",
  "positionTransfers": [],
  "reqID": 398899,
  "subscriptionStatus": 1,
  "transfersInstructionId": "1",
  "warnings": []
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

	url := "https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets"

	payload := strings.NewReader("{\n  \"reqID\": 398899,\n  \"model\": \"MODEL-API-DEMO\",\n  \"positionTargets\": [\n    {}\n  ]\n}")

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

url = URI("https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"reqID\": 398899,\n  \"model\": \"MODEL-API-DEMO\",\n  \"positionTargets\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"reqID\": 398899,\n  \"model\": \"MODEL-API-DEMO\",\n  \"positionTargets\": [\n    {}\n  ]\n}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets', [
  'body' => '{
  "reqID": 398899,
  "model": "MODEL-API-DEMO",
  "positionTargets": [
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
  "reqID": 398899,
  "model": "MODEL-API-DEMO",
  "positionTargets": [[]]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/rebalance/to-specific-targets")! as URL,
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
