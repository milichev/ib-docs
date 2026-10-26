[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-accounts/list-accounts-login-messages)

# Get Login Messages

GET https://localhost:5000/gw/api/v1/accounts/login-messages

Query all accounts associated with ‘Client ID’ that have incomplete login message**Scope**: `accounts.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/list-accounts-login-messages

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `loginMessageRequest` (LoginMessageRequest, required)

## Response

### 200

Query all accounts associated with ‘Client ID’ that have incomplete login message

- `accountId` (string, optional)
- `clearingStatus` (string, optional)
- `clearingStatusDescription` (string, optional)
- `loginMessages` (list of LoginMessage, optional)
- `loginMessagePresent` (boolean, optional)

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

### LoginMessageRequest

- `startDate` (date, required)
- `endDate` (date, required)
- `offset` (long, optional)
- `limit` (long, optional)
- `status` (enum, optional)
  - Allowed values: `N`, `O`, `P`, `C`, `A`, `E`, `F`, `I`, `J`, `L`, `M`, `R`, `W`, `Q`
- `type` (string, optional)

### LoginMessage

- `recordDate` (datetime, optional)
- `id` (long, optional)
- `username` (string, optional)
- `messageType` (string, optional)
- `contentId` (long, optional)
- `state` (string, optional)
- `description` (string, optional)
- `tasks` (list of long, optional)

## Examples

**Response**

```json
{
  "accountId": "string",
  "clearingStatus": "string",
  "clearingStatusDescription": "string",
  "loginMessages": [
    {
      "recordDate": "2024-01-15T09:30:00Z",
      "id": 1,
      "username": "string",
      "messageType": "string",
      "contentId": 1,
      "state": "string",
      "description": "string",
      "tasks": [
        1
      ]
    }
  ],
  "loginMessagePresent": true
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/accounts/login-messages?loginMessageRequest=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D';
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

	url := "https://localhost:5000/gw/api/v1/accounts/login-messages?loginMessageRequest=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D"

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

url = URI("https://localhost:5000/gw/api/v1/accounts/login-messages?loginMessageRequest=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D")

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

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/accounts/login-messages?loginMessageRequest=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/accounts/login-messages?loginMessageRequest=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D")! as URL,
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
