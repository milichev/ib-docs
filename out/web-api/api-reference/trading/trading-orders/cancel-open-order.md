[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-orders/cancel-open-order)

# Cancel An Open Order

DELETE https://localhost:5000/v1/api/iserver/account/{accountId}/order/{orderId}

Cancel an existing, unfilled order.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/cancel-open-order

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required) — The account to which the order will clear.
- `orderId` (string, required) — The IB-assigned order ID of the desired order ticket.

### Query parameters

- `extOperator` (string, optional) — ExtOperator is used to identify external operator.
- `manualIndicator` (boolean, optional) — For all orders for US Futures products, clients must submit this flag to indicate whether the order was originated manually (by a natural person) or automatically (by an automated trading system transmitting orders without human intervention). Submit a True value to indicate a manually originated order, and submit a False value to indicate an automated order. Orders for USFUT products that do not include this field will be rejected.
- `manualCancelTime` (string, optional) — Time of manual cancel.

## Response

### 200

Status of submission

- `Trading Orders_cancelOpenOrder_Response_200`
  - orderCancelSuccess: orderCancelSuccess
  - orderSubmitError: orderSubmitError

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

### orderCancelSuccess

Acknowledges IB's acceptance of the request to cancel the order. Does not report whether the cancellation can or will ultimately be enacted.

- `msg` (enum, optional) — Indicates success with value 'Request was submitted'
  - Allowed values: `Request was submitted`
- `order_id` (long, optional) — IB order ID of the order ticket requested for cancellation.
- `conid` (string, optional) — IB contract ID of the order ticket's instrument.
- `account` (string, optional, nullable) — IB account to which the order was originally set to clear.

### orderSubmitError

Indicates that the order reply message or submission was not accepted.

- `error` (string, optional) — Message indicating that order submission was not successful.

## Examples

### orderCancelSuccessExample

**Response**

```json
{
  "account": null,
  "conid": "-1",
  "msg": "Request was submitted",
  "order_id": 1370093239
}
```

**SDK Code**

```go orderCancelSuccessExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559"

	req, _ := http.NewRequest("DELETE", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby orderCancelSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java orderCancelSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.delete("https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php orderCancelSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift orderCancelSuccessExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
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

### orderCancelErrorExample

**Response**

```json
{
  "error": "OrderID 123456 doesn't exist"
}
```

**SDK Code**

```go orderCancelErrorExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559"

	req, _ := http.NewRequest("DELETE", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby orderCancelErrorExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java orderCancelErrorExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.delete("https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php orderCancelErrorExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift orderCancelErrorExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/DU123456/order/1799796559")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
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
