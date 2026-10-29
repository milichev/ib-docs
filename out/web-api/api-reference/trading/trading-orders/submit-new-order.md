[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-orders/submit-new-order)

# Submit New Order

POST https://localhost:5000/v1/api/iserver/account/{accountId}/orders
Content-Type: application/json

Submit a new order(s) ticket, bracket, or OCA group.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/submit-new-order

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required) — The account to which the order will clear.

### Body (application/json)

This endpoint expects an ordersSubmissionRequest.

- `orders` (list of singleOrderSubmissionRequest, optional) — Array of order tickets objects. Only one order ticket object may be submitted per request, unless constructing a bracket.

## Response

### 200

Order submission response (success, error, reply is required or order reject)

- `Trading Orders_submitNewOrder_Response_200`
  - orderSubmitSuccess: list of OrderSubmitSuccessItems
  - orderReplyMessage: list of OrderReplyMessageItems
  - orderSubmitError: orderSubmitError
  - advancedOrderReject: advancedOrderReject

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

### singleOrderSubmissionRequest

A single order ticket.

- `conid` (long, required) — IB contract ID of the instrument.
- `orderType` (string, required) — IB order type identifier.
- `side` (enum, required) — Side of the order ticket.
  - Allowed values: `BUY`, `SELL`
- `tif` (enum, required) — Time in force of the order ticket.
  - Allowed values: `DAY`, `IOC`, `GTC`, `OPG`, `PAX`
- `quantity` (double, required) — Quantity of the order ticket in units of the instrument.
- `acctId` (string, optional) — Receiving account of the order ticket.
- `conidex` (string, optional) — Contract ID and routing destination together in format 123456@EXCHANGE.
- `secType` (string, optional) — IB asset class identifier.
- `cOID` (string, optional) — Client-configurable order identifier. The value must be unique for a 24 hour span. The value can be no longer than 64 characters. Should not be set for the child of a bracket order.
- `parentId` (string, optional) — If the order ticket is a child order in a bracket, the parentId field must be set equal to the cOID provided for the parent order.
- `listingExchange` (string, optional) — The listing exchange of the instrument.
- `isSingleGroup` (boolean, optional) — Indicates that all orders in the containing array are to be treated as an OCA group.
- `outsideRTH` (boolean, optional) — Instructs IB to permit the order to execute outside of regular trading hours.
- `allOrNone` (boolean, optional) — Instructs IB to execute the order entirely or not execute at all.
- `auxPrice` (double, optional) — Additional price value used in certain order types, such as stop orders.
- `ticker` (string, optional) — Ticker symbol of the instrument.
- `trailingAmt` (double, optional) — Offset used with Trailing orders.
- `trailingType` (enum, optional) — Specifies the type of trailing used with a Trailing order.
  - Allowed values: `amt`, `%`
- `referrer` (string, optional) — IB internal identifier for order entry UI element.
- `cashQty` (double, optional) — Quantity of currency used with cash quantity orders.
- `useAdaptive` (boolean, optional) — Instructs IB to apply the Price Management Algo.
- `isCcyConv` (boolean, optional) — Indicates that a forex order is for currency conversion and should not entail a virtual forex position in the account, where applicable.
- `price` (double, optional) — Price of the order ticket, where applicable.
- `strategy` (string, optional) — The name of an execution algorithm.
- `strategyParameters` (SingleOrderSubmissionRequestStrategyParameters, optional) — Parameters governing the selected algorithm, if applicable.
- `extOperator` (string, optional) — ExtOperator is used to identify external operator
- `manualIndicator` (boolean, optional) — For all orders for US Futures products, clients must submit this flag to indicate whether the order was originated manually (by a natural person) or automatically (by an automated trading system transmitting orders without human intervention). Submit a True value to indicate a manually originated order, and submit a False value to indicate an automated order. Orders for USFUT products that do not include this field will be rejected.
- `taxOptimizerId` (string, optional) — Identifies set of tax lots selected, for gains and losses management.
- `jsonPayload` (SingleOrderSubmissionRequestJsonPayload, optional)

### OrderSubmitSuccessItems

Result of successful submission of one order ticket.

- `order_id` (string, optional) — The order ID assigned to your order ticket by IB. Contains only numerals.
- `order_status` (string, optional) — Status describing where the order stands in its lifecycle.
- `encrypt_message` (string, optional) — Internal use only.

### OrderReplyMessageItems

An object containing order reply messages emitted against a single order ticket.

- `id` (string, optional) — The replyId UUID of the order ticket's emitted order reply messages, used to confirm them and proceed. Use the POST /iserver/reply/\{replyId} endpoint to confirm an order reply message.
- `isSuppressed` (boolean, optional) — Internal use. Always delivers value 'false'.
- `message` (list of string, optional) — An array containing the human-readable text of all order reply messages emitted for the order ticket.
- `messageIds` (list of string, optional) — An array containing identifiers that categorize the types of order reply messages that have been emitted. Elements of this array are ordered so that indicies match the corresponding human-readable text strings in the 'message' array. A messageId can typically be passed in the POST /iserver/questions/suppress endpoint to auto-accept a given warning message.

### orderSubmitError

Indicates that the order reply message or submission was not accepted.

- `error` (string, optional) — Message indicating that order submission was not successful.

### advancedOrderReject

Relates a message generated in response to the rejection of the submitted order ticket. In some cases, it may also present a mechanism to resubmit the same order following a prompted decision.

- `orderId` (long, optional) — The order ID assigned by IB to the rejected order ticket.
- `reqId` (string, optional) — IB's internal identifier assigned to the returned message.
- `dismissable` (list of any, optional) — Indicates whether this prompt is dismissable.
- `text` (string, optional) — Human-readable text of the messages emitted by IB in response to order submission.
- `options` (list of string, optional) — Choices available to the client in response to the rejection message.
- `type` (string, optional) — The specific type of message returned.
- `messageId` (string, optional) — IB internal identifier for the nature or category of the returned message.
- `prompt` (boolean, optional) — Indicates that the message is a prompt offering a set of decisions, one or more of which may permit the rejected order to be resubmitted.

### SingleOrderSubmissionRequestStrategyParameters

Parameters governing the selected algorithm, if applicable.

- `PLACEHOLDER` (string, optional) — Placeholder -- these vary by algo (and not always type string, sometimes bool)

### SingleOrderSubmissionRequestJsonPayload

- `allocation_profile` (SingleOrderSubmissionRequestJsonPayloadAllocationProfile, optional) — The assigned contents for how the order should be allocated amongst subaccount(s).

### SingleOrderSubmissionRequestJsonPayloadAllocationProfile

The assigned contents for how the order should be allocated amongst subaccount(s).

- `alloc_type` (enum, optional) — The allocation type to define how shares should be distributed. A warning message to be pre-approved. * `SHARE` - Designate the allocation amounts as a quantity of shares. * `CASH` - Designate the allocation amounts as a quantity of a cash quantity to allocate.
  - Allowed values: `SHARE`, `CASH`
- `allocations` (list of SingleOrderSubmissionRequestJsonPayloadAllocationProfileAllocationsItems, optional) — List of accounts to allocate a trade and the affiliated quantity.

### SingleOrderSubmissionRequestJsonPayloadAllocationProfileAllocationsItems

- `account` (string, optional) — Account to allocate trades to.
- `amount` (double, optional) — Allocation to the given account based on the alloc_type.

## Examples

### orderSubmitSuccessExample

**Request**

```json
{}
```

**Response**

```json
[
  {
    "encrypt_message": "1",
    "order_id": "1370093239",
    "order_status": "PreSubmitted"
  }
]
```

**SDK Code**

```python orderSubmitSuccessExample
import requests

url = "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go orderSubmitSuccessExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

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

```ruby orderSubmitSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php orderSubmitSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/DU123456/orders', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift orderSubmitSuccessExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/orders")! as URL,
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

### orderReplyMessageExample

**Request**

```json
{}
```

**Response**

```json
[
  {
    "id": "99097238-9824-4830-84ef-46979aa22593",
    "isSuppressed": false,
    "message": [
      "You are submitting an order without market data. We strongly recommend against this as it may result in erroneous and unexpected trades.\nAre you sure you want to submit this order?"
    ],
    "messageIds": [
      "o354"
    ]
  }
]
```

**SDK Code**

```python orderReplyMessageExample
import requests

url = "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go orderReplyMessageExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

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

```ruby orderReplyMessageExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php orderReplyMessageExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/DU123456/orders', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift orderReplyMessageExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/orders")! as URL,
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

### orderSubmitErrorExample

**Request**

```json
{}
```

**Response**

```json
{
  "error": "Order not confirmed "
}
```

**SDK Code**

```python orderSubmitErrorExample
import requests

url = "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go orderSubmitErrorExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

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

```ruby orderSubmitErrorExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php orderSubmitErrorExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/DU123456/orders', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift orderSubmitErrorExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/orders")! as URL,
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

### advancedOrderRejectPromptExample

**Request**

```json
{}
```

**Response**

```json
{
  "dismissable": [],
  "messageId": "p12",
  "options": [
    "Use on this order",
    "Always use",
    "Do not use"
  ],
  "orderId": 123456789,
  "prompt": true,
  "reqId": "22170",
  "text": "If your order is not immediately executable, our systems may, depending on market conditions, reject your order if its limit price is more that the allowed amount away from the reference price at that time. If this happens, you will not receive a fill. This is a control designed to ensure that we comply with our regulatory obligations to avoid submitting disruptive orders to the marketplace.\nUse the Price Management Algo?",
  "type": "M"
}
```

**SDK Code**

```python advancedOrderRejectPromptExample
import requests

url = "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go advancedOrderRejectPromptExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/orders"

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

```ruby advancedOrderRejectPromptExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php advancedOrderRejectPromptExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/DU123456/orders', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift advancedOrderRejectPromptExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/orders")! as URL,
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
