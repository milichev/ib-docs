[source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-master-list-ids)

# Get List IDs Created By The Caller's Master Account

GET https://localhost:5000/gw/api/v1/restrictions/lists/ids

Returns all list IDs created by the authenticated caller's own master account (or employer, in emp-track mode), same as the PTC portal's Lists page.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-master-list-ids

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

List IDs created by the caller's master account.

- `status` (string, required) — Always `ok` on success.
- `masterUserName` (string, required) — Echoed from the request.
- `lists` (list of MasterListEntry, required) — Lists created by the caller's master account (or employer, in emp-track mode). Empty array when none.

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

### MasterListEntry

A single list ID with its creator-type flag.

- `listId` (long, optional) — List ID.
- `byOperator` (boolean, optional) — `true` if created by an IB operator (Compliance/Risk role); `false` if created by the Client (Customer role).

## Examples

### Master account with lists

**Response**

```json
{
  "status": "ok",
  "masterUserName": "user1",
  "lists": [
    {
      "listId": 2001,
      "byOperator": false
    },
    {
      "listId": 2002,
      "byOperator": true
    }
  ]
}
```

**SDK Code**

```javascript Master account with lists
const url = 'https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Master account with lists
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master account with lists
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Master account with lists
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master account with lists
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1")! as URL,
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

### Master account with no lists

**Response**

```json
{
  "status": "ok",
  "masterUserName": "user1",
  "lists": []
}
```

**SDK Code**

```javascript Master account with no lists
const url = 'https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Master account with no lists
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Master account with no lists
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Master account with no lists
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Master account with no lists
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/lists/ids?masterUserName=user1")! as URL,
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
