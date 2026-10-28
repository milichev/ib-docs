[source](https://www.interactivebrokers.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/get-active-country-list)

# Get Active Country List

GET https://localhost:5000/gw/api/v1/tax-vouchers/active-countries

Returns the list of active countries eligible for tax voucher requests, including applicable fees and currencies**Scope**: `tax-vouchers.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/third-parties/third-parties-tax-vouchers/get-active-country-list

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `X-Request-ID` (string, optional) — Unique identifier for each HTTP request for tracing and debugging purposes

## Response

### 200

Country list returned successfully

- `list of Country`

## Errors

### 500 Internal Server Error

Internal server error

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### Country

- `country` (string, optional)
- `fee` (double, optional)
- `currency` (string, optional)
- `countryCode` (string, optional)
- `disabled` (boolean, optional)

## Examples

**Response**

```json
[
  {
    "country": "string",
    "fee": 1.1,
    "currency": "string",
    "countryCode": "string",
    "disabled": true
  }
]
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

	url := "https://localhost:5000/gw/api/v1/tax-vouchers/active-countries"

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

url = URI("https://localhost:5000/gw/api/v1/tax-vouchers/active-countries")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/tax-vouchers/active-countries")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/tax-vouchers/active-countries', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/tax-vouchers/active-countries")! as URL,
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
