[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-orders/preview-margin-impact)

# New Order Preview

POST https://localhost:5000/v1/api/iserver/account/{accountId}/orders/whatif
Content-Type: application/json

Preview the projected effects of an order ticket or bracket of orders, including cost and changes to margin and account equity.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/preview-margin-impact

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

Order Preview

- `amount` (OrderPreviewAmount, optional) — Describes the projected costs associated with the order ticket.
- `equity` (OrderPreviewEquity, optional) — Describes the projected change to the account's equity.
- `initial` (OrderPreviewInitial, optional) — Describes the projected change to initial margin.
- `maintenance` (OrderPreviewMaintenance, optional) — Describes the projected change to maintenance margin.
- `position` (OrderPreviewPosition, optional) — Describes the projected change to the account's position in the instrument.
- `warn` (string, optional) — Human-readable text of warning message, if applicable. Otherwise null.
- `error` (string, optional, nullable) — Human-readable text of an error message, if applicable. Otherwise null.

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

### OrderPreviewAmount

Describes the projected costs associated with the order ticket.

- `amount` (string, optional) — Projected cost of the order, current reference price times total quantity.
- `commission` (string, optional) — Projected commissions and fees associated with the order.
- `total` (string, optional) — Sum of projected cost and commission values for the order.

### OrderPreviewEquity

Describes the projected change to the account's equity.

- `current` (string, optional) — Current equity.
- `change` (string, optional) — Difference between current and projected equity values.
- `after` (string, optional) — Projected equity after execution of the order.

### OrderPreviewInitial

Describes the projected change to initial margin.

- `current` (string, optional) — Current initial margin.
- `change` (string, optional) — Difference between current and projected initial margin values.
- `after` (string, optional) — Projected initial margin after execution of the order.

### OrderPreviewMaintenance

Describes the projected change to maintenance margin.

- `current` (string, optional) — Current maintenance margin.
- `change` (string, optional) — Difference between current and projected maintenance margin values.
- `after` (string, optional) — Projected maintenance margin after execution of the order.

### OrderPreviewPosition

Describes the projected change to the account's position in the instrument.

- `current` (string, optional) — Current position in the instrument.
- `change` (string, optional) — Difference between current and projected position sizes.
- `after` (string, optional) — Projected position size after execution of the order.

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

**Request**

```json
{}
```

**Response**

```json
{
  "amount": {
    "amount": "1,977.60 USD (10 Shares)",
    "commission": "1 USD",
    "total": "1,978.60 USD"
  },
  "equity": {
    "current": "123,456",
    "change": "-1",
    "after": "123,455"
  },
  "initial": {
    "current": "1000",
    "change": "652",
    "after": "1652"
  },
  "maintenance": {
    "current": "900",
    "change": "590\"\"",
    "after": "1490"
  },
  "position": {
    "current": "20",
    "change": "10",
    "after": "30"
  },
  "warn": "21/You are trying to submit an order without having market data for this instrument. \nIB strongly recommends against this kind of blind trading which may result in \nerroreous or unexpected trades.",
  "error": null
}
```

**SDK Code**

```python orderPreview
import requests

url = "https://localhost:5000/v1/api/iserver/account/DU123456/orders/whatif"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go orderPreview
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/orders/whatif"

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

```ruby orderPreview
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/orders/whatif")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php orderPreview
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/DU123456/orders/whatif', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift orderPreview
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/orders/whatif")! as URL,
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
