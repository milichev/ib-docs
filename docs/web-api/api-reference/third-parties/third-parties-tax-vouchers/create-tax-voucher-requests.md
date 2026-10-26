[source](https://www.interactivebrokers.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/create-tax-voucher-requests)

# Create Tax Voucher Requests

POST https://localhost:5000/gw/api/v1/tax-vouchers
Content-Type: text/plain

Creates tax voucher requests from a signed JWT payload. The request body must be a signed OAuth2 JWT (text/plain) whose decoded payload contains the list of tax voucher requests.**Scope**: `tax-vouchers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/create-tax-voucher-requests

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `X-Request-ID` (string, optional) — Unique identifier for each HTTP request for tracing and debugging purposes

### Body (text/plain)

This endpoint expects a string.

- `string`

## Response

### 200

Tax voucher requests created successfully

- `list of TaxVoucherDTO`

## Errors

### 400 Bad Request Error

Invalid request body

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 401 Unauthorized Error

OAuth2 JWT verification failed

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal server error

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### TaxVoucherDTO

- `requestId` (string, optional)
- `custAcctId` (string, optional)
- `corpactionId` (string, optional)
- `requestState` (string, optional)
- `fee` (double, optional)
- `divAmount` (double, optional)
- `withHeldAmount` (double, optional)
- `quantity` (double, optional)
- `countryCode` (string, optional)
- `year` (long, optional)
- `migratedCustAcctId` (string, optional)

## Examples

**Request**

```json
"eyJhbGciOiJSUzI1NiJ9..."
```

**Response**

```json
[
  {
    "requestId": "string",
    "custAcctId": "string",
    "corpactionId": "string",
    "requestState": "string",
    "fee": 1.1,
    "divAmount": 1.1,
    "withHeldAmount": 1.1,
    "quantity": 1.1,
    "countryCode": "string",
    "year": 1,
    "migratedCustAcctId": "string"
  }
]
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/tax-vouchers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'text/plain'},
  body: '"eyJhbGciOiJSUzI1NiJ9..."'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/tax-vouchers"

	payload := strings.NewReader("\"eyJhbGciOiJSUzI1NiJ9...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/tax-vouchers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJhbGciOiJSUzI1NiJ9...\""

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/tax-vouchers', [
  'body' => '"eyJhbGciOiJSUzI1NiJ9..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJhbGciOiJSUzI1NiJ9..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/tax-vouchers")! as URL,
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
