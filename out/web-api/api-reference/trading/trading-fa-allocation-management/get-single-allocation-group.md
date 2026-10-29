[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-single-allocation-group)

# Retrieve Single Allocation Group

POST https://localhost:5000/v1/api/iserver/account/allocation/group/single
Content-Type: application/json

Retrieves the configuration of a single account group.  This describes the name of the allocation group, the specific accounts contained in the group, and the allocation method in use along with any relevant quantities. This endpoint is only supported for Financial Advisors and IBroker Accounts. 

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-single-allocation-group

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `name` (string, required) — Name of an existing allocation group.

## Response

### 200

Returns details of the allocation group.

- `name` (string, optional) — Name used to refer to your allocation group. This will be used while placing orders.
- `accounts` (list of AllocationGroupAccountsItems, optional) — Contains a series of objects depicting which accounts are involved and, for user-defined allocation methods, the distribution value for each sub-account.
- `default_method` (enum, optional, default: N) — Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods: * `A` - Available Equity * `E` - Equal * `N` - Net Liquidation Value User-specified allocation methods: * `C` - Cash Quantity * `P` - Percentage * `R` - Ratios * `S` - Shares
  - Allowed values: `A`, `E`, `N`, `C`, `P`, `R`, `S`

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests. For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem.

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### AllocationGroupAccountsItems

- `amount` (long, optional) — The total distribution value for each sub-account for user-defined allocation methods.
- `name` (string, optional) — The accountId of a given sub-account.

## Examples

**Request**

```json
{
  "name": "Group_1_NetLiq"
}
```

**Response**

```json
{
  "name": "group1",
  "accounts": [
    {
      "name": "U1234567"
    },
    {
      "name": "U1234568"
    }
  ],
  "default_method": "E"
}
```

**SDK Code**

```python single-group
import requests

url = "https://localhost:5000/v1/api/iserver/account/allocation/group/single"

payload = { "name": "Group_1_NetLiq" }
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go single-group
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/group/single"

	payload := strings.NewReader("{\n  \"name\": \"Group_1_NetLiq\"\n}")

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

```ruby single-group
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/group/single")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_NetLiq\"\n}"

response = http.request(request)
puts response.read_body
```

```php single-group
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/allocation/group/single', [
  'body' => '{
  "name": "Group_1_NetLiq"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift single-group
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["name": "Group_1_NetLiq"] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group/single")! as URL,
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
