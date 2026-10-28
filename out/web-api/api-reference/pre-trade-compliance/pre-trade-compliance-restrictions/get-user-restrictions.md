[source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-user-restrictions)

# Get Restriction IDs For A User

GET https://localhost:5000/gw/api/v1/restrictions/user

Returns all restriction IDs for the given username. The username must be the master user, a sub-user, or a user with trading access under the master account. Returns 403 for both unauthorized and non-existent users to prevent ID enumeration.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-user-restrictions

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `masterUserName` (string, required) — IBKR master username of the authenticated caller. Max 64 characters.
- `userName` (string, required) — Username to query. Max 64 characters.
- `isEmpTrack` (string, optional) — Set to `T` for employer-track authorization.

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account. A missing or invalid token returns HTTP 401.

## Response

### 200

Restriction IDs for the user.

- `status` (string, required) — Always `ok` on success.
- `userName` (string, required) — Echoed from the request. If the supplied `userName` was an alias, the alias is returned as-is.
- `restrictionIds` (list of long, required) — Restriction IDs for the user. Empty array when none.

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

### Master user querying their own restrictions

**Response**

```json
{
  "status": "ok",
  "userName": "user1",
  "restrictionIds": [
    1001,
    1002,
    1003
  ]
}
```

**SDK Code**

```go Master user querying their own restrictions
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master user querying their own restrictions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Master user querying their own restrictions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Master user querying their own restrictions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master user querying their own restrictions
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")! as URL,
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

### Master user querying a sub-user

**Response**

```json
{
  "status": "ok",
  "userName": "user1-sub",
  "restrictionIds": [
    1004,
    1005
  ]
}
```

**SDK Code**

```go Master user querying a sub-user
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master user querying a sub-user
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Master user querying a sub-user
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Master user querying a sub-user
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master user querying a sub-user
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")! as URL,
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

### User with no restrictions

**Response**

```json
{
  "status": "ok",
  "userName": "user1",
  "restrictionIds": []
}
```

**SDK Code**

```go User with no restrictions
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby User with no restrictions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java User with no restrictions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php User with no restrictions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift User with no restrictions
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/user?masterUserName=user1&userName=user1")! as URL,
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
