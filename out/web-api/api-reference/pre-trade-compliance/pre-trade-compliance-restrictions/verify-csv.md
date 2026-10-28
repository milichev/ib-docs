[source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/verify-csv)

# Verify PTC CSV

POST https://localhost:5000/gw/api/v1/restrictions/verify
Content-Type: text/plain

Validates CSV content without applying changes. Must be called before `/csv/v2/apply` with the same `requestId`.

The master account identity is resolved from the `accountId` claim in the Authorization header JWT. Do not include `masterAcctId` in the request body.

A missing or invalid Authorization header does not return HTTP 401. The request proceeds and fails at validation with `success: false, message: "Master account not specified and not emp track"` unless `isEmpTrack: T` is set in the body.**Scope**: `restrictions.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/verify-csv

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account.

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

```go Operation succeeded
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/verify"

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

url = URI("https://localhost:5000/gw/api/v1/restrictions/verify")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```java Operation succeeded
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/restrictions/verify")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "text/plain")
  .body("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")
  .asString();
```

```php Operation succeeded
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions/verify', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/verify")! as URL,
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

```go CSV validation failed — plain string message
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/verify"

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

url = URI("https://localhost:5000/gw/api/v1/restrictions/verify")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```java CSV validation failed — plain string message
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/restrictions/verify")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "text/plain")
  .body("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")
  .asString();
```

```php CSV validation failed — plain string message
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions/verify', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/verify")! as URL,
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

```go CSV validation failed — structured bridge message
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/verify"

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

url = URI("https://localhost:5000/gw/api/v1/restrictions/verify")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```java CSV validation failed — structured bridge message
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/restrictions/verify")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "text/plain")
  .body("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")
  .asString();
```

```php CSV validation failed — structured bridge message
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions/verify', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/verify")! as URL,
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

```go Auth or account resolution failure
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/verify"

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

url = URI("https://localhost:5000/gw/api/v1/restrictions/verify")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```java Auth or account resolution failure
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/restrictions/verify")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "text/plain")
  .body("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")
  .asString();
```

```php Auth or account resolution failure
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions/verify', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/verify")! as URL,
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

```go Apply only — body token failure before requestId is parsed
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/verify"

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

url = URI("https://localhost:5000/gw/api/v1/restrictions/verify")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'text/plain'
request.body = "\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\""

response = http.request(request)
puts response.read_body
```

```java Apply only — body token failure before requestId is parsed
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/restrictions/verify")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "text/plain")
  .body("\"eyJ0eXAiOiJhdCtKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFkOTEx...\"")
  .asString();
```

```php Apply only — body token failure before requestId is parsed
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/restrictions/verify', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/verify")! as URL,
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
