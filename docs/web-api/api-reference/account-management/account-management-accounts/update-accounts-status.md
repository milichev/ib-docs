[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-accounts/update-accounts-status)

# Update Status By Account

PATCH https://localhost:5000/gw/api/v1/accounts/{accountId}/status
Content-Type: application/json

Query status of account by accountId**Scope**: `accounts.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/update-accounts-status

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Body (application/json)

This endpoint expects a string.

- `string`

## Response

### 200

Query status of account by accountId.

- `dateOpened` (datetime, optional)
- `dateStarted` (datetime, optional)
- `dateClosed` (datetime, optional)
- `accountId` (string, optional)
- `status` (string, optional)
- `description` (string, optional)
- `masterAccountId` (string, optional)
- `adminAccountId` (string, optional)
- `state` (string, optional)
- `message` (string, optional)

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

## Examples

**Request**

```json
"string"
```

**Response**

```json
{
  "dateOpened": "2024-01-15T09:30:00Z",
  "dateStarted": "2024-01-15T09:30:00Z",
  "dateClosed": "2024-01-15T09:30:00Z",
  "accountId": "string",
  "status": "string",
  "description": "string",
  "masterAccountId": "string",
  "adminAccountId": "string",
  "state": "string",
  "message": "string"
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/accounts/accountId/status';
const options = {
  method: 'PATCH',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '"string"'
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

	url := "https://localhost:5000/gw/api/v1/accounts/accountId/status"

	payload := strings.NewReader("\"string\"")

	req, _ := http.NewRequest("PATCH", url, payload)

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

url = URI("https://localhost:5000/gw/api/v1/accounts/accountId/status")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "\"string\""

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://localhost:5000/gw/api/v1/accounts/accountId/status', [
  'body' => '"string"',
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
let parameters = "string" as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/accounts/accountId/status")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
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
