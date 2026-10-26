[source](https://www.interactivebrokers.com/docs/web-api/api-reference/utilities/create-echo-signed-jwt)

# Echo A Request With Signed JWT Security Policy Back After Validation.

POST https://localhost:5000/gw/api/v1/echo/signed-jwt
Content-Type: application/json

**Scope**: `echo.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/utilities/create-echo-signed-jwt

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects a SignedJwtEchoRequest.

- `iss` (string, optional)

## Response

### 200

Returns a JSON object containing the request parameters.

- `requestMethod` (enum, required)
  - Allowed values: `GET`, `POST`, `PATCH`, `PUT`
- `securityPolicy` (enum, required)
  - Allowed values: `HTTPS`, `SIGNED_JWT`, `ENCRYPTED_JWE`
- `queryParameters` (EchoResponseQueryParameters, optional)

## Errors

### 401 Unauthorized Error

Returns a Problem detail instance representing an unauthorized request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 403 Forbidden Error

Returns a Problem detail instance representing a forbidden request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 500 Internal Server Error

Returns a Problem detail instance representing an internal server error.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### EchoResponseQueryParameters

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "requestMethod": "GET",
  "securityPolicy": "HTTPS",
  "queryParameters": {}
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/echo/signed-jwt';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
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

	url := "https://localhost:5000/gw/api/v1/echo/signed-jwt"

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

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/echo/signed-jwt")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/echo/signed-jwt', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/echo/signed-jwt")! as URL,
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
