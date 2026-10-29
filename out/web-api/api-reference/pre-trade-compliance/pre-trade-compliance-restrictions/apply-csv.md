[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/apply-csv)

# Apply PTC CSV

POST https://localhost:5000/gw/api/v1/restrictions
Content-Type: text/plain

Applies previously verified CSV changes. Requires two tokens:

**Authorization header** — RS256-signed JWT containing an `accountId` claim, used to identify the master account. A missing or invalid token does not return HTTP 401; the request proceeds and fails at validation with `success: false`.

**Request body** — a separate RS256-signed JWT (validity: 1 minute) whose payload contains the request claims (`userName`, `requestId`, `payload`, and optionally `isEmpTrack`). The `requestId` must match a prior successful `/csv/v2/verify` call.

Failures that occur before the body JWT payload is parsed (inactive token, missing payload) return `success: false` without a `requestId` field.**Scope**: `restrictions.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/apply-csv

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account. Separate from and additional to the JWT in the request body.

### Body (text/plain)

This endpoint expects a string.

- `string`

## Response

### 200

Always HTTP 200. Inspect the `success` field to determine the outcome. All failure conditions — authentication, authorization, validation, and internal errors — return `success: false`.

- `success` (boolean, required) — Indicates whether the operation succeeded.
- `requestId` (long, optional) — Echoed from the request. Absent only on early apply failures (inactive body token, missing payload) where the `requestId` has not yet been parsed.
- `message` (CsvResponseMessage, optional) — `OK` on success. On failure, either a plain string describing the error or a JSON object for structured bridge validation errors.

## Types

### CsvResponseMessage

`OK` on success. On failure, either a plain string describing the error or a JSON object for structured bridge validation errors.

- string
- map from string to any

## Examples

### Operation succeeded

**Request**

```json
"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."
```

**Response**

```json
{
  "success": true,
  "requestId": 1,
  "message": "OK"
}
```

**SDK Code**

```python Operation succeeded
import requests

url = "https://localhost:5000/gw/api/v1/restrictions"

payload = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "text/plain"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go Operation succeeded
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions"

	payload := strings.NewReader("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Operation succeeded
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```php Operation succeeded
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions', [
  'body' => '"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift Operation succeeded
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions")! as URL,
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

### CSV validation failed — plain string message

**Request**

```json
"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."
```

**Response**

```json
{
  "success": false,
  "requestId": 1,
  "message": "Invalid CSV: Missing RULE_END"
}
```

**SDK Code**

```python CSV validation failed — plain string message
import requests

url = "https://localhost:5000/gw/api/v1/restrictions"

payload = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "text/plain"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go CSV validation failed — plain string message
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions"

	payload := strings.NewReader("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby CSV validation failed — plain string message
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```php CSV validation failed — plain string message
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions', [
  'body' => '"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift CSV validation failed — plain string message
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions")! as URL,
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

### CSV validation failed — structured bridge message

**Request**

```json
"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."
```

**Response**

```json
{
  "success": false,
  "requestId": 1,
  "message": {
    "detail": "Unknown parameter for rule type",
    "errorCode": "RULE_PARAM_INVALID"
  }
}
```

**SDK Code**

```python CSV validation failed — structured bridge message
import requests

url = "https://localhost:5000/gw/api/v1/restrictions"

payload = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "text/plain"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go CSV validation failed — structured bridge message
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions"

	payload := strings.NewReader("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby CSV validation failed — structured bridge message
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```php CSV validation failed — structured bridge message
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions', [
  'body' => '"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift CSV validation failed — structured bridge message
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions")! as URL,
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

### Auth or account resolution failure

**Request**

```json
"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."
```

**Response**

```json
{
  "success": false,
  "requestId": 1,
  "message": "Master account not specified and not emp track"
}
```

**SDK Code**

```python Auth or account resolution failure
import requests

url = "https://localhost:5000/gw/api/v1/restrictions"

payload = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "text/plain"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go Auth or account resolution failure
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions"

	payload := strings.NewReader("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Auth or account resolution failure
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```php Auth or account resolution failure
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions', [
  'body' => '"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift Auth or account resolution failure
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions")! as URL,
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

### Apply only — body token failure before requestId is parsed

**Request**

```json
"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."
```

**Response**

```json
{
  "success": false,
  "message": "The token is not active"
}
```

**SDK Code**

```python Apply only — body token failure before requestId is parsed
import requests

url = "https://localhost:5000/gw/api/v1/restrictions"

payload = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "text/plain"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go Apply only — body token failure before requestId is parsed
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions"

	payload := strings.NewReader("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "text/plain")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Apply only — body token failure before requestId is parsed
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```php Apply only — body token failure before requestId is parsed
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions', [
  'body' => '"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'text/plain',
  ],
]);

echo $response->getBody();
```

```swift Apply only — body token failure before requestId is parsed
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "text/plain"
]

let postData = NSData(data: ""eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx..."".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions")! as URL,
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
