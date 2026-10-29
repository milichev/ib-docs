[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/create-allocation-group)

# Add Allocation Group

POST https://localhost:5000/v1/api/iserver/account/allocation/group
Content-Type: application/json

Add a new allocation group. This group can be used to trade in place of the \{accountId} for the /v1/api/iserver/account/\{accountId}/orders endpoint.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/create-allocation-group

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `name` (string, required) — Name used to refer to your allocation group. If prev_name is specified, this will become the new name of the group.
- `accounts` (list of V1ApiIserverAccountAllocationGroupPostRequestBodyContentApplicationJsonSchemaAccountsItems, required) — An array of accounts that should be held in the allocation group and, if using a User-specified allocaiton method, the value correlated to the allocation.
- `default_method` (enum, required, default: N) — Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods: * `A` - Available Equity * `E` - Equal * `N` - Net Liquidation Value User-specified allocation methods: * `C` - Cash Quantity * `P` - Percentage * `R` - Ratios * `S` - Shares
  - Allowed values: `A`, `E`, `N`, `C`, `P`, `R`, `S`

## Response

### 200

Returns a confirmation that the modification was successful.

- `success` (boolean, optional)

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

### V1ApiIserverAccountAllocationGroupPostRequestBodyContentApplicationJsonSchemaAccountsItems

- `name` (string, required) — The accountId of a given sub-account.
- `amount` (long, optional) — The total distribution value for each sub-account for user-defined allocation methods.

## Examples

### Shares

**Request**

```json
{
  "name": "Group_1_Shares",
  "accounts": [
    {
      "name": "U456789",
      "amount": 4
    },
    {
      "name": "U123456",
      "amount": 1
    }
  ],
  "default_method": "S"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

```python Shares
import requests

url = "https://localhost:5000/v1/api/iserver/account/allocation/group"

payload = {
    "name": "Group_1_Shares",
    "accounts": [
        {
            "name": "U456789",
            "amount": 4
        },
        {
            "name": "U123456",
            "amount": 1
        }
    ],
    "default_method": "S"
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Shares
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/group"

	payload := strings.NewReader("{\n  \"name\": \"Group_1_Shares\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\",\n      \"amount\": 4\n    },\n    {\n      \"name\": \"U123456\",\n      \"amount\": 1\n    }\n  ],\n  \"default_method\": \"S\"\n}")

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

```ruby Shares
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/group")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_Shares\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\",\n      \"amount\": 4\n    },\n    {\n      \"name\": \"U123456\",\n      \"amount\": 1\n    }\n  ],\n  \"default_method\": \"S\"\n}"

response = http.request(request)
puts response.read_body
```

```php Shares
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
  'body' => '{
  "name": "Group_1_Shares",
  "accounts": [
    {
      "name": "U456789",
      "amount": 4
    },
    {
      "name": "U123456",
      "amount": 1
    }
  ],
  "default_method": "S"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Shares
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "name": "Group_1_Shares",
  "accounts": [
    [
      "name": "U456789",
      "amount": 4
    ],
    [
      "name": "U123456",
      "amount": 1
    ]
  ],
  "default_method": "S"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
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

### NetLiq

**Request**

```json
{
  "name": "Group_1_NetLiq",
  "accounts": [
    {
      "name": "U456789"
    },
    {
      "name": "U123456"
    }
  ],
  "default_method": "N"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

```python NetLiq
import requests

url = "https://localhost:5000/v1/api/iserver/account/allocation/group"

payload = {
    "name": "Group_1_NetLiq",
    "accounts": [{ "name": "U456789" }, { "name": "U123456" }],
    "default_method": "N"
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go NetLiq
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/group"

	payload := strings.NewReader("{\n  \"name\": \"Group_1_NetLiq\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"N\"\n}")

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

```ruby NetLiq
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/group")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_NetLiq\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"N\"\n}"

response = http.request(request)
puts response.read_body
```

```php NetLiq
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
  'body' => '{
  "name": "Group_1_NetLiq",
  "accounts": [
    {
      "name": "U456789"
    },
    {
      "name": "U123456"
    }
  ],
  "default_method": "N"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift NetLiq
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "name": "Group_1_NetLiq",
  "accounts": [["name": "U456789"], ["name": "U123456"]],
  "default_method": "N"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
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

### EqualQty

**Request**

```json
{
  "name": "Group_1_Equal",
  "accounts": [
    {
      "name": "U456789"
    },
    {
      "name": "U123456"
    }
  ],
  "default_method": "E"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

```python EqualQty
import requests

url = "https://localhost:5000/v1/api/iserver/account/allocation/group"

payload = {
    "name": "Group_1_Equal",
    "accounts": [{ "name": "U456789" }, { "name": "U123456" }],
    "default_method": "E"
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go EqualQty
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/group"

	payload := strings.NewReader("{\n  \"name\": \"Group_1_Equal\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"E\"\n}")

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

```ruby EqualQty
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/group")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_Equal\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"E\"\n}"

response = http.request(request)
puts response.read_body
```

```php EqualQty
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
  'body' => '{
  "name": "Group_1_Equal",
  "accounts": [
    {
      "name": "U456789"
    },
    {
      "name": "U123456"
    }
  ],
  "default_method": "E"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift EqualQty
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "name": "Group_1_Equal",
  "accounts": [["name": "U456789"], ["name": "U123456"]],
  "default_method": "E"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
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
