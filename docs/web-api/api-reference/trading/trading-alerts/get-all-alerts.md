[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-alerts/get-all-alerts)

# List All Alerts

GET https://localhost:5000/v1/api/iserver/account/{accountId}/alerts

Retrieve a list of all alerts attached to the provided account.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/get-all-alerts

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

## Response

### 200

An array of objects detailing contract information.

- `list of alert`

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### alert

An array containing all alerts as separate objects.

- `order_id` (long, optional) — The order id (alert id)
- `account` (string, optional) — The account the alert was attributed to.
- `alert_name` (string, optional) — The requested name for the alert.
- `alert_active` (enum, optional) — Determines if the alert is active [1] or not [0]
  - Allowed values: `1`, `0`
- `order_time` (string, optional) — UTC-formatted time of the alert's creation.
- `alert_triggered` (boolean, optional) — Confirms if the order is triggered or not.
- `alert_repeatable` (enum, optional) — Confirms if the alert is enabled to occur more than once.
  - Allowed values: `1`, `0`

## Examples

### not-found

**Response**

```json
[]
```

**SDK Code**

```javascript not-found
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alerts';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go not-found
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alerts"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby not-found
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alerts")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php not-found
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/alerts', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift not-found
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alerts")! as URL,
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

### found-alerts

**Response**

```json
[
  {
    "order_id": 9876543210,
    "account": "U1234567",
    "alert_name": "AAPL",
    "alert_active": 1,
    "order_time": "20240308-17:08:38",
    "alert_triggered": false,
    "alert_repeatable": 0
  }
]
```

**SDK Code**

```javascript found-alerts
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alerts';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go found-alerts
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alerts"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby found-alerts
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alerts")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php found-alerts
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/alerts', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift found-alerts
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alerts")! as URL,
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
