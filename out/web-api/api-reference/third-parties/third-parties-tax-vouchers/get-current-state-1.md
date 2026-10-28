[source](https://www.interactivebrokers.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/get-current-state-1)

# Get Tax Voucher Request State

GET https://localhost:5000/gw/api/v1/tax-vouchers/{requestId}/state

Returns the current state of a tax voucher request by tax voucher request ID.**Scope**: `tax-vouchers.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/get-current-state-1

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `requestPublicId` (string, required) — Request ID (UUID)
- `requestId` (string, required)

### Headers

- `X-Request-ID` (string, optional) — Unique identifier for each HTTP request for tracing and debugging purposes

## Response

### 200

Tax voucher state returned successfully

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

## Errors

### 401 Unauthorized Error

OAuth2 verification failed

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 404 Not Found Error

Tax voucher request not found

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal server error

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Examples

**Response**

```json
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
```

**SDK Code**

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/tax-vouchers/requestId/state"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

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

url = URI("https://localhost:5000/gw/api/v1/tax-vouchers/requestId/state")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/tax-vouchers/requestId/state")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/tax-vouchers/requestId/state', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/tax-vouchers/requestId/state")! as URL,
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
