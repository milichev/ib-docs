[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/modify-allocation-group)

# Modify Allocation Group

PUT https://localhost:5000/v1/api/iserver/account/allocation/group
Content-Type: application/json

Modify an existing allocation group.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/modify-allocation-group

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
- `accounts` (list of V1ApiIserverAccountAllocationGroupPutRequestBodyContentApplicationJsonSchemaAccountsItems, required) — An array of accounts that should be held in the allocation group and, if using a User-specified allocaiton method, the value correlated to the allocation.
- `default_method` (enum, required, default: N) — Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods: * `A` - Available Equity * `E` - Equal * `N` - Net Liquidation Value User-specified allocation methods: * `C` - Cash Quantity * `P` - Percentage * `R` - Ratios * `S` - Shares
  - Allowed values: `A`, `E`, `N`, `C`, `P`, `R`, `S`
- `prev_name` (string, optional) — Can be used to rename a group. Using this field will recognize the previous name, while the "name" filed will mark the updated name.

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

### V1ApiIserverAccountAllocationGroupPutRequestBodyContentApplicationJsonSchemaAccountsItems

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
  "default_method": "S",
  "prev_name": "Group_0_Shares"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

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

	payload := strings.NewReader("{\n  \"name\": \"Group_1_Shares\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\",\n      \"amount\": 4\n    },\n    {\n      \"name\": \"U123456\",\n      \"amount\": 1\n    }\n  ],\n  \"default_method\": \"S\",\n  \"prev_name\": \"Group_0_Shares\"\n}")

	req, _ := http.NewRequest("PUT", url, payload)

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

request = Net::HTTP::Put.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_Shares\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\",\n      \"amount\": 4\n    },\n    {\n      \"name\": \"U123456\",\n      \"amount\": 1\n    }\n  ],\n  \"default_method\": \"S\",\n  \"prev_name\": \"Group_0_Shares\"\n}"

response = http.request(request)
puts response.read_body
```

```java Shares
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.put("https://localhost:5000/v1/api/iserver/account/allocation/group")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"name\": \"Group_1_Shares\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\",\n      \"amount\": 4\n    },\n    {\n      \"name\": \"U123456\",\n      \"amount\": 1\n    }\n  ],\n  \"default_method\": \"S\",\n  \"prev_name\": \"Group_0_Shares\"\n}")
  .asString();
```

```php Shares
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
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
  "default_method": "S",
  "prev_name": "Group_0_Shares"
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
  "default_method": "S",
  "prev_name": "Group_0_Shares"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
  "default_method": "N",
  "prev_name": "Group_0_NetLiq"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

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

	payload := strings.NewReader("{\n  \"name\": \"Group_1_NetLiq\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"N\",\n  \"prev_name\": \"Group_0_NetLiq\"\n}")

	req, _ := http.NewRequest("PUT", url, payload)

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

request = Net::HTTP::Put.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_NetLiq\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"N\",\n  \"prev_name\": \"Group_0_NetLiq\"\n}"

response = http.request(request)
puts response.read_body
```

```java NetLiq
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.put("https://localhost:5000/v1/api/iserver/account/allocation/group")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"name\": \"Group_1_NetLiq\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"N\",\n  \"prev_name\": \"Group_0_NetLiq\"\n}")
  .asString();
```

```php NetLiq
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
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
  "default_method": "N",
  "prev_name": "Group_0_NetLiq"
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
  "default_method": "N",
  "prev_name": "Group_0_NetLiq"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
  "default_method": "E",
  "prev_name": "Group_0_Equal"
}
```

**Response**

```json
{
  "success": true
}
```

**SDK Code**

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

	payload := strings.NewReader("{\n  \"name\": \"Group_1_Equal\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"E\",\n  \"prev_name\": \"Group_0_Equal\"\n}")

	req, _ := http.NewRequest("PUT", url, payload)

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

request = Net::HTTP::Put.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"name\": \"Group_1_Equal\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"E\",\n  \"prev_name\": \"Group_0_Equal\"\n}"

response = http.request(request)
puts response.read_body
```

```java EqualQty
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.put("https://localhost:5000/v1/api/iserver/account/allocation/group")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"name\": \"Group_1_Equal\",\n  \"accounts\": [\n    {\n      \"name\": \"U456789\"\n    },\n    {\n      \"name\": \"U123456\"\n    }\n  ],\n  \"default_method\": \"E\",\n  \"prev_name\": \"Group_0_Equal\"\n}")
  .asString();
```

```php EqualQty
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
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
  "default_method": "E",
  "prev_name": "Group_0_Equal"
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
  "default_method": "E",
  "prev_name": "Group_0_Equal"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
