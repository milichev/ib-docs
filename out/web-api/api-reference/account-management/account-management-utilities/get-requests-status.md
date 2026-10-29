[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/get-requests-status)

# Get Status Of A Request

GET https://localhost:5000/gw/api/v1/requests/{requestId}/status

Returns status for account management request**Scope**: `accounts.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/get-requests-status

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `requestId` (long, required)

### Query parameters

- `type` (enum, required)
  - Allowed values: `response`, `update`

## Response

### 200

Returns status for account management request

- `Account Management Utilities_getRequestsStatus_Response_200`
  - AmRequestStatusResponse: AmRequestStatusResponse
  - StatusResponse: StatusResponse

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

### AmRequestStatusResponse

- `requestId` (string, optional)
- `requestType` (string, optional)
- `status` (string, optional)
- `message` (string, optional)
- `acctId` (string, optional)

### StatusResponse

- `requestId` (long, optional)
- `problemDetail` (map from string to StatusResponseProblemDetail, optional)
- `dateSubmitted` (datetime, optional)
- `fileData` (FileData, optional)

### StatusResponseProblemDetail

### FileData

- `data` (FileDataData, optional)
- `name` (string, optional)

### FileDataData

## Examples

**Response**

```json
{
  "acctId": "string",
  "message": "string",
  "requestId": "string",
  "requestType": "string",
  "status": "string"
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/requests/1/status"

querystring = {"type":"response"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/requests/1/status?type=response"

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

url = URI("https://localhost:5000/gw/api/v1/requests/1/status?type=response")

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

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/requests/1/status?type=response', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/requests/1/status?type=response")! as URL,
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
