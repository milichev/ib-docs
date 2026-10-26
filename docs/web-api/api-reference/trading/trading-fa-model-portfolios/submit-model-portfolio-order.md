[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/submit-model-portfolio-order)

# Submit New Model Portfolio Order

POST https://localhost:5000/v1/api/iserver/account/{modelCode}/orders
Content-Type: application/json

Create Model Portfolio invest or rebalancing order. Submits one or more order instructions against the Model Portfolio identified by `modelCode` in the URL path. Each order entry follows the standard IBKR order submission contract used by `/iserver/account/{accountId}/orders`, with `acctId` set to the target sub-account and orders routed under the model.

This endpoint returns either a list of successfully submitted order confirmations or a list of reply objects that require follow-up confirmation via `/iserver/reply/{replyId}` before the orders are transmitted.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/submit-model-portfolio-order

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `modelCode` (string, required) — Name of the target Model Portfolio to receive the invest or rebalancing order.

### Body (application/json)

This endpoint expects an object.

- `orders` (list of V1ApiIserverAccountModelCodeOrdersPostRequestBodyContentApplicationJsonSchemaOrdersItems, required) — Collection of order instructions to submit against the model portfolio.

## Response

### 200

Successfully submitted the model portfolio order(s). The response is either a list of order confirmations, or a list of reply objects requiring follow-up confirmation via `/iserver/reply/{replyId}`.

- `list of V1ApiIserverAccountModelCodeOrdersPostResponsesContentApplicationJsonSchemaItems`

## Errors

### 400 Bad Request Error

Missing, empty, non-numeric, or out-of-range parameter. The `error` field is always prefixed with `Bad Request:`.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

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

### V1ApiIserverAccountModelCodeOrdersPostRequestBodyContentApplicationJsonSchemaOrdersItems

- `acctId` (string, optional) — Sub-account identifier the order applies to under the model.
- `conid` (long, optional) — Contract identifier for the instrument to trade.
- `conidex` (string, optional) — Combined contract identifier and routing destination in the form `<conid>@<exchange>`. Optional; if omitted, IBKR default routing is used.
- `secType` (string, optional) — Security type (e.g. `STK`, `OPT`, `FUT`, `CASH`).
- `cOID` (string, optional) — Client order identifier. Must be unique per order and can be used to correlate submissions with downstream events.
- `parentId` (string, optional) — `cOID` of the parent order when submitting child orders in a bracket or OCA group.
- `orderType` (enum, optional) — Order type.
  - Allowed values: `MKT`, `LMT`, `STP`, `STOP_LIMIT`, `MIDPRICE`, `TRAIL`, `TRAILLMT`
- `listingExchange` (string, optional) — Preferred listing exchange for the instrument.
- `isSingleGroup` (boolean, optional) — True to submit the order set as a single OCA group.
- `outsideRTH` (boolean, optional) — True to allow the order to execute outside regular trading hours.
- `price` (double, optional) — Limit price. Required for `LMT` and `STOP_LIMIT` order types.
- `auxPrice` (double, optional) — Stop or trailing price. Required for `STP`, `STOP_LIMIT`, and trailing order types.
- `side` (enum, optional) — Order side.
  - Allowed values: `BUY`, `SELL`
- `ticker` (string, optional) — Instrument ticker symbol.
- `tif` (enum, optional) — Time in force for the order.
  - Allowed values: `DAY`, `GTC`, `OPG`, `IOC`
- `trailingAmt` (double, optional) — Trailing amount for `TRAIL` / `TRAILLMT` order types.
- `trailingType` (enum, optional) — Trailing amount type.
  - Allowed values: `amt`, `%`
- `referrer` (string, optional) — Optional referrer identifier used for internal tracking.
- `quantity` (double, optional) — Share quantity to trade. Mutually exclusive with `cashQty`.
- `cashQty` (double, optional) — Cash-denominated quantity to trade. Mutually exclusive with `quantity`.
- `fxQty` (double, optional) — FX quantity for currency conversion orders.
- `useAdaptive` (boolean, optional) — True to route the order using the IB Adaptive algorithm.
- `isCcyConv` (boolean, optional) — True if the order is a currency conversion order.
- `allocationMethod` (string, optional) — FA allocation method used to distribute the order across the model's sub-accounts (e.g. `AvailableEquity`, `NetLiq`, `EqualQuantity`, `PctChange`).
- `strategy` (string, optional) — Optional algorithmic execution strategy name.
- `strategyParameters` (V1ApiIserverAccountModelCodeOrdersPostRequestBodyContentApplicationJsonSchemaOrdersItemsStrategyParameters, optional) — Parameters passed to the selected algorithmic strategy.

### V1ApiIserverAccountModelCodeOrdersPostResponsesContentApplicationJsonSchemaItems

- `order_id` (string, optional) — Identifier of the submitted model portfolio order.
- `order_status` (string, optional) — Current status of the submitted order (e.g. `PreSubmitted`, `Submitted`, `Filled`).
- `encrypt_message` (string, optional) — Internal encrypted acknowledgement of the submission.
- `id` (string, optional) — Reply identifier returned when the order requires additional confirmation. Supply this value to `/iserver/reply/{replyId}` to continue submission.
- `message` (list of string, optional) — Confirmation prompts that must be acknowledged before the order is transmitted.
- `isSuspended` (boolean, optional) — True if the order is suspended pending reply confirmation.

### V1ApiIserverAccountModelCodeOrdersPostRequestBodyContentApplicationJsonSchemaOrdersItemsStrategyParameters

Parameters passed to the selected algorithmic strategy.

## Examples

### success

**Request**

```json
{
  "orders": [
    {}
  ]
}
```

**Response**

```json
[
  {
    "order_id": "1799115492",
    "order_status": "PreSubmitted",
    "encrypt_message": "1"
  }
]
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/account/Sample-Model/orders';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"orders":[{}]}'
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

	url := "https://localhost:5000/v1/api/iserver/account/Sample-Model/orders"

	payload := strings.NewReader("{\n  \"orders\": [\n    {}\n  ]\n}")

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

url = URI("https://localhost:5000/v1/api/iserver/account/Sample-Model/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"orders\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/Sample-Model/orders', [
  'body' => '{
  "orders": [
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
let parameters = ["orders": [[]]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/Sample-Model/orders")! as URL,
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

### replyRequired

**Request**

```json
{
  "orders": [
    {}
  ]
}
```

**Response**

```json
[
  {
    "id": "a1b2c3d4-1234-5678-9abc-def012345678",
    "message": [
      "The following order size is larger than the average daily trading volume for this instrument. Are you sure you want to submit this order?"
    ],
    "isSuspended": false
  }
]
```

**SDK Code**

```javascript replyRequired
const url = 'https://localhost:5000/v1/api/iserver/account/Sample-Model/orders';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"orders":[{}]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go replyRequired
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/Sample-Model/orders"

	payload := strings.NewReader("{\n  \"orders\": [\n    {}\n  ]\n}")

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

```ruby replyRequired
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/Sample-Model/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"orders\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php replyRequired
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/Sample-Model/orders', [
  'body' => '{
  "orders": [
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

```swift replyRequired
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["orders": [[]]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/Sample-Model/orders")! as URL,
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
