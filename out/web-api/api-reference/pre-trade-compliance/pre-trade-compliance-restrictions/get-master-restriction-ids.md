[source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-master-restriction-ids)

# Get Restriction IDs Created By The Caller's Master Account

GET https://localhost:5000/gw/api/v1/restrictions/ids

Returns all restriction IDs created by the authenticated caller's own master account (or employer, in emp-track mode), same as the PTC portal's Restrictions page. Each entry includes a `byOperator` flag distinguishing IB(operator)-created restrictions from Client-created ones.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-master-restriction-ids

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `masterUserName` (string, required) — IBKR master username of the authenticated caller. Max 64 characters.
- `isEmpTrack` (string, optional) — Set to `T` for employer-track authorization.

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account. A missing or invalid token returns HTTP 401.

## Response

### 200

Restrictions created by the caller's master account.

- `status` (string, required) — Always `ok` on success.
- `masterUserName` (string, required) — Echoed from the request.
- `restrictions` (list of MasterRestrictionEntry, required) — Restrictions created by the caller's master account (or employer, in emp-track mode). Empty array when none.

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

### 500 Internal Server Error

Internal server error.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### MasterRestrictionEntry

A single restriction ID with its creator-type flag.

- `restrictionId` (long, optional) — Restriction ID.
- `byOperator` (boolean, optional) — `true` if created by an IB operator (Compliance/Risk role); `false` if created by the Client (Customer role).

## Examples

### Master account with restrictions

**Response**

```json
{
  "status": "ok",
  "masterUserName": "user1",
  "restrictions": [
    {
      "restrictionId": 1001,
      "byOperator": false
    },
    {
      "restrictionId": 1002,
      "byOperator": true
    }
  ]
}
```

**SDK Code**

```go Master account with restrictions
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master account with restrictions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Master account with restrictions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Master account with restrictions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master account with restrictions
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")! as URL,
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

### Master account with no restrictions

**Response**

```json
{
  "status": "ok",
  "masterUserName": "user1",
  "restrictions": []
}
```

**SDK Code**

```go Master account with no restrictions
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master account with no restrictions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Master account with no restrictions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Master account with no restrictions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master account with no restrictions
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/ids?masterUserName=user1")! as URL,
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
