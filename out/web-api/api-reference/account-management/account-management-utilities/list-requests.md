[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/list-requests)

# Get Requests' Details By Timeframe

GET https://localhost:5000/gw/api/v1/requests

Fetch Requests' Details By Timeframe**Scope**: `accounts.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/list-requests

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `requestDetails` (RequestDetailsRequest, required)

## Response

### 200

Fetch Requests' Details By Timeframe

- `requestDetails` (list of RequestDetail, optional)
- `offset` (long, optional)
- `limit` (long, optional)
- `total` (long, optional)

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

### RequestDetailsRequest

- `startDate` (date, required)
- `endDate` (date, required)
- `offset` (long, optional)
- `limit` (long, optional)
- `status` (enum, optional)
  - Allowed values: `N`, `O`, `P`, `C`, `A`, `E`, `F`, `I`, `J`, `L`, `M`, `R`, `W`, `Q`

### RequestDetail

- `requestId` (long, optional)
- `dateSubmitted` (string, optional)
- `status` (string, optional)
- `accountID` (string, optional)
- `requestType` (string, optional)

## Examples

**Response**

```json
{
  "requestDetails": [
    {
      "requestId": 1,
      "dateSubmitted": "string",
      "status": "string",
      "accountID": "string",
      "requestType": "string"
    }
  ],
  "offset": 1,
  "limit": 1,
  "total": 1
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/requests"

querystring = {"requestDetails":"{\"endDate\":\"2023-01-15\",\"startDate\":\"2023-01-15\"}"}

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

	url := "https://localhost:5000/gw/api/v1/requests?requestDetails=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D"

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

url = URI("https://localhost:5000/gw/api/v1/requests?requestDetails=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D")

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

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/requests?requestDetails=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/requests?requestDetails=%7B%22endDate%22%3A%222023-01-15%22%2C%22startDate%22%3A%222023-01-15%22%7D")! as URL,
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
