[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-alerts/activate-alert)

# Activate Or Deactivate An Alert

POST https://localhost:5000/v1/api/iserver/account/{accountId}/alert/activate
Content-Type: application/json

Activate or Deactivate existing alerts created for this account. This does not delete alerts, but disables notifications until reactivated.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/activate-alert

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Body (application/json)

This endpoint expects an alertActivationRequest.

- `alertId` (long, required) — The alert Identifier
- `alertActive` (enum, required) — Set whether or not the alert should be active (1) or inactive (0).
  - Allowed values: `1`, `0`

## Response

### 200

An object containing details about the activated/deactivated alert.

- `request_id` (long, optional)
- `order_id` (long, optional) — The tracking number of the alert. Occasssionally referenced as the alertId or alert_id.
- `success` (boolean, optional) — Displays result status of alert request
- `text` (string, optional) — Response message to clarify success status reason.
- `failure_list` (string, optional) — If "success" returns false, will list failed order Ids

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal Server Error; unable to process incoming request due to invalid data in it

- `error` (string, optional) — error reason

## Examples

### activated-deactivated-successfully

**Response**

```json
{
  "order_id": 833967258,
  "success": true,
  "text": "Request was submitted"
}
```

**SDK Code**

```javascript activated-deactivated-successfully
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate';
const options = {method: 'POST', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go activated-deactivated-successfully
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby activated-deactivated-successfully
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php activated-deactivated-successfully
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift activated-deactivated-successfully
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
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

### activate-request

**Request**

```json
{
  "alertId": 9876543210,
  "alertActive": 1
}
```

**Response**

```json
{
  "order_id": 833967258,
  "success": true,
  "text": "Request was submitted"
}
```

**SDK Code**

```javascript activate-request
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"alertId":9876543210,"alertActive":1}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go activate-request
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate"

	payload := strings.NewReader("{\n  \"alertId\": 9876543210,\n  \"alertActive\": 1\n}")

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

```ruby activate-request
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"alertId\": 9876543210,\n  \"alertActive\": 1\n}"

response = http.request(request)
puts response.read_body
```

```php activate-request
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate', [
  'body' => '{
  "alertId": 9876543210,
  "alertActive": 1
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift activate-request
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "alertId": 9876543210,
  "alertActive": 1
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")! as URL,
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

### deactivate-request

**Request**

```json
{
  "alertId": 9876543210,
  "alertActive": 0
}
```

**Response**

```json
{
  "order_id": 833967258,
  "success": true,
  "text": "Request was submitted"
}
```

**SDK Code**

```javascript deactivate-request
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"alertId":9876543210,"alertActive":0}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go deactivate-request
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate"

	payload := strings.NewReader("{\n  \"alertId\": 9876543210,\n  \"alertActive\": 0\n}")

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

```ruby deactivate-request
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"alertId\": 9876543210,\n  \"alertActive\": 0\n}"

response = http.request(request)
puts response.read_body
```

```php deactivate-request
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate', [
  'body' => '{
  "alertId": 9876543210,
  "alertActive": 0
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift deactivate-request
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "alertId": 9876543210,
  "alertActive": 0
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert/activate")! as URL,
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
