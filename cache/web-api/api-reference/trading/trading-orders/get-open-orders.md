> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# List Open Orders

GET https://localhost:5000/v1/api/iserver/account/orders

Returns open orders and filled or cancelled orders submitted during the current brokerage session.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/get-open-orders

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `filters` (enum, optional) — Filter results using a comma-separated list of Order Status values. Also accepts a value to sort results by time.
  - Allowed values: `inactive`, `pending_submit`, `pre_submitted`, `submitted`, `filled`, `pending_cancel`, `cancelled`, `warn_state`, `sort_by_time`
- `force` (boolean, optional) — Instructs IB to clear cache of orders and obtain updated view from brokerage backend. Response will be an empty array.

## Response

### 200

Orders for a specific account

- `orders` (list of LiveOrdersResponseOrdersItems, optional) — Array of orders that are currently working, or were filled/cancelled in the current brokerage session.
- `snapshot` (boolean, optional) — Whether the response is a snapshot.

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

### LiveOrdersResponseOrdersItems

Object representing one order.

- `account` (string, optional) — IB account ID to which the order was placed.
- `acct` (string, optional) — IB account ID to which the order was placed.
- `avgPrice` (string, optional) — Average price of fills against the order, if any.
- `bgColor` (string, optional) — Internal use. IB's UI background color in hex.
- `cashCcy` (string, optional) — Currency of the order ticket's Cash Quantity, if applicable.
- `companyName` (string, optional) — Name of business associated with instrument, or otherwise description of instrument.
- `conid` (string, optional) — Contract ID of the order's instrument.
- `conidex` (string, optional) — Contract ID and routing destination in format 123456@EXCHANGE.
- `description1` (string, optional) — Descriptive text, or additional details that specific the instrument.
- `description2` (string, optional) — Only present for derivatives. Shows Expiry, Strike, Right, And Exchange information.
- `exchange` (string, optional) — Routing destination of the order ticket.
- `fgColor` (string, optional) — Internal use. IB's UI foreground color in hex.
- `filledQuantity` (string, optional) — Quantity filled in units of the instrument.
- `isEventTrading` (enum, optional) — Indicates whether the order ticket is an Event Trading order.
  - Allowed values: `0`, `1`
- `lastExecutionTime` (string, optional) — Time of last execution against the order in format YYMMDDhhmmss.
- `lastExecutionTime_r` (string, optional) — Unix timestamp of the last execution against the order.
- `listingExchange` (string, optional) — Exchange on which the instrument is listed.
- `orderDesc` (string, optional) — Human-readable shorthand rendering of the order ticket.
- `orderId` (long, optional) — IB-assigned order identifier.
- `orderType` (string, optional) — Order type of a working order ticket.
- `order_cancellation_by_system_reason` (string, optional) — Only present for Cancelled orders. Provides the reason for order to have been cancelled or rejected by the system.
- `order_ccp_status` (string, optional) — IB internal order status.
- `origOrderType` (string, optional) — Order type of a filled order.
- `price` (string, optional) — Price of the order, if applicable to the order type.
- `remainingQuantity` (string, optional) — Quantity remaining to be filled in units of the instrument.
- `secType` (string, optional) — Asset class of the instrument.
- `side` (string, optional) — Side of the order.
- `sizeAndFills` (string, optional) — Human-readable shorthand rendering of the filled and total quantities of the order.
- `status` (enum, optional) — Status of the order ticket.
  - Allowed values: `Inactive`, `PendingSubmit`, `PreSubmitted`, `Submitted`, `Filled`, `PendingCancel`, `Cancelled`, `WarnState`
- `supportsTaxOpt` (enum, optional) — Indicates whether the order is supported by IB's Tax Optimization tool.
  - Allowed values: `0`, `1`
- `taxOptimizerId` (string, optional) — Tax Optimizer id, identifies set of tax lots selected, for gains and losses management.
- `ticker` (string, optional) — Symbol or base product code of the instrument.
- `timeInForce` (string, optional) — Time of force of the order.
- `totalCashSize` (string, optional) — Total size of a cash quantity order.
- `totalSize` (string, optional) — Total size of an order in the instrument's units.

## Examples

**Response**

```json
{
  "orders": [
    {
      "account": "DU4355398",
      "acct": "U1234567",
      "avgPrice": "0.8908",
      "bgColor": "#FFFFFF",
      "cashCcy": "CAD",
      "companyName": "Australian dollar",
      "conid": "15016138",
      "conidex": "15016138@IDEALPRO",
      "description1": "AUD.CAD",
      "exchange": "IDEALPRO",
      "fgColor": "#000000",
      "filledQuantity": "2499.99",
      "isEventTrading": "0",
      "lastExecutionTime": "240425160326",
      "lastExecutionTime_r": "1714061006000",
      "listingExchange": "FXCONV",
      "orderDesc": "Bought 2806.46 Limit 0.90000, Day",
      "orderId": 1370093238,
      "orderType": "Limit",
      "order_ccp_status": "Filled",
      "origOrderType": "LIMIT",
      "price": "0.90000",
      "remainingQuantity": "0",
      "secType": "CASH",
      "side": "BUY",
      "sizeAndFills": "2.4K CAD",
      "status": "Filled",
      "supportsTaxOpt": "0",
      "taxOptimizerId": "12334",
      "ticker": "AUD",
      "timeInForce": "CLOSE",
      "totalCashSize": "2500",
      "totalSize": "2806.46"
    }
  ],
  "snapshot": true
}
```

**SDK Code**

```python orders
import requests

url = "https://localhost:5000/v1/api/iserver/account/orders"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript orders
const url = 'https://localhost:5000/v1/api/iserver/account/orders';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go orders
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/orders"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby orders
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java orders
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/orders")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php orders
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/orders', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp orders
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/orders");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift orders
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/orders")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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