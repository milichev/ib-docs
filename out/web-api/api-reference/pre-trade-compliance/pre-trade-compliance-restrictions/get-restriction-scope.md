[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-restriction-scope)

# Get Restriction Scope

GET https://localhost:5000/gw/api/v1/restrictions/restriction-scope

Returns a restriction's scope (`Active For Family`, `Active Except`, `Active For Some`, or `Inactive`) and the account IDs relevant to that scope. `accountIds` is omitted for `Active For Family` and `Inactive` (implicit: all/no accounts). For `Active For Some`, `accountIds` is capped at a configurable limit (default 10000) with a `truncated` flag indicating whether more accounts exist beyond the cap. For `Active Except`, `accountIds` (the excluded accounts) is always returned in full, uncapped. The restriction must be owned by the caller's master account. Employee-track (`isEmpTrack=T`) callers are not supported.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-restriction-scope

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `masterUserName` (string, required) — IBKR master username of the authenticated caller. Max 64 characters.
- `restrictionId` (long, required) — Positive integer. Decimals and non-numeric values return 400.
- `isEmpTrack` (string, optional) — Set to `T` for employer-track authorization.

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account. A missing or invalid token returns HTTP 401.

## Response

### 200

Restriction scope and relevant account IDs.

- `status` (string, required) — Always `ok` on success.
- `restrictionId` (long, required) — Echoed from the request.
- `scope` (string, required) — The restriction's scope. One of: `Active For Family`, `Active Except`, `Active For Some`, `Inactive`.
- `accountIds` (list of string, optional, nullable) — Account IDs relevant to the scope. Omitted entirely for `Active For Family` (all accounts are implicitly in scope) and `Inactive` (no accounts). For `Active For Some`, the directly associated accounts, capped at a configurable limit (see `truncated`). For `Active Except`, the excluded accounts, always returned in full and never capped.
- `truncated` (boolean, optional, nullable) — Present only for `Active For Some`. `true` if the account list was capped at the configured limit and more accounts exist beyond it; `false` if the full list was returned. Never present for other scopes (`Active Except` is always returned in full, uncapped).

## Errors

### 400 Bad Request Error

Missing, empty, non-numeric, or out-of-range parameter. The `error` field is always prefixed with `Bad Request:`.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 403 Forbidden Error

Resource does not belong to the caller, does not exist, or an unsupported HTTP method was used. All cases return an identical body to prevent ID enumeration.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal server error.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Examples

### Active for family

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1001,
  "scope": "Active For Family"
}
```

**SDK Code**

```python Active for family
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction-scope"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Active for family
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Active for family
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Active for family
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Active for family
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")! as URL,
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

### Active except

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1002,
  "scope": "Active Except",
  "accountIds": [
    "U1000001"
  ]
}
```

**SDK Code**

```python Active except
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction-scope"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Active except
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Active except
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Active except
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Active except
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")! as URL,
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

### Active for some

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1003,
  "scope": "Active For Some",
  "accountIds": [
    "U1000000",
    "U1000002"
  ],
  "truncated": false
}
```

**SDK Code**

```python Active for some
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction-scope"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Active for some
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Active for some
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Active for some
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Active for some
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")! as URL,
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

### Inactive

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1004,
  "scope": "Inactive"
}
```

**SDK Code**

```python Inactive
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction-scope"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Inactive
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Inactive
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Inactive
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Inactive
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction-scope?masterUserName=user1&restrictionId=1001")! as URL,
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
