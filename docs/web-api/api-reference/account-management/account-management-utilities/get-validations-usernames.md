[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/get-validations-usernames)

# Verify User Availability

GET https://localhost:5000/gw/api/v1/validations/usernames/{username}

Verify whether user is valid and available**Scope**: `accounts.read` OR `validations.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/get-validations-usernames

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `username` (string, required)

## Response

### 200

Verify whether user is valid and available

- `error` (ErrorResponse, optional)
- `hasError` (boolean, optional)
- `errorDescription` (string, optional)
- `isValid` (boolean, optional)
- `isAvailable` (boolean, optional)
- `suggestedUserName` (list of string, optional)

## Errors

### 400 Bad Request Error

Returns error description representing bad request

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 401 Unauthorized Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 403 Forbidden Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 500 Internal Server Error

Returns error description representing internal server error

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

## Types

### ErrorResponse

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Examples

**Response**

```json
{
  "error": {
    "status": 1,
    "error": "string",
    "message": "string"
  },
  "hasError": true,
  "errorDescription": "string",
  "isValid": true,
  "isAvailable": true,
  "suggestedUserName": [
    "string"
  ]
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/validations/usernames/username';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

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
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/validations/usernames/username"

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

url = URI("https://localhost:5000/gw/api/v1/validations/usernames/username")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/validations/usernames/username', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/validations/usernames/username")! as URL,
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
