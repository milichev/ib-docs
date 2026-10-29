[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-list-details)

# Get List Details

GET https://localhost:5000/gw/api/v1/restrictions/list

Returns list metadata and instrument entries. The list must be owned by the caller. Returns 403 for both unauthorized and non-existent lists to prevent ID enumeration.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-list-details

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `masterUserName` (string, required) — IBKR master username of the authenticated caller. Max 64 characters.
- `listId` (long, required) — Positive integer in the range 1–2147483647. Decimals and non-numeric values return 400. Values above 2147483647 return 400.
- `isEmpTrack` (string, optional) — Set to `T` for employer-track authorization.

### Headers

- `Authorization` (string, required) — RS256-signed JWT (Bearer format), signed with your registered private key. Must contain an `accountId` claim identifying the master account. A missing or invalid token returns HTTP 401.

## Response

### 200

List metadata and entries.

- `status` (string, required) — Always `ok` on success.
- `listId` (long, required) — Range 1–2147483647.
- `entries` (list of ListEntry, required) — Instrument entries. Empty array when none.
- `type` (string, optional) — Example values: SYMBOL, CONID, EXCHANGE, SECTOR, ISSUERORCONID.
- `name` (string, optional) — List name.
- `description` (string, optional, nullable) — List description.

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

## Types

### ListEntry

A single instrument entry in a list.

- `id` (long, optional) — Entry ID.
- `type` (string, optional) — Example values: ISSUER, CONID, SYMBOL, INDUSTRY.
- `createdAt` (long, optional) — Creation timestamp in epoch milliseconds.
- `params` (ListEntryParams, optional) — Instrument identifier parameters. Keys depend on entry type: ISSUER/CONID entries use `symbol`, `symboldesc`, `val`; INDUSTRY entries use `indgroup`; other types may use different keys.

### ListEntryParams

Instrument identifier parameters. Keys depend on entry type: ISSUER/CONID entries use `symbol`, `symboldesc`, `val`; INDUSTRY entries use `indgroup`; other types may use different keys.

- `symbol` (string, optional) — Instrument identifier. Format depends on entry type.
- `symboldesc` (string, optional) — Human-readable instrument description.
- `val` (string, optional) — Internal entity identifier.

## Examples

### ISSUERORCONID list with two ISSUER entries

**Response**

```json
{
  "status": "ok",
  "listId": 2001,
  "entries": [
    {
      "id": 300001,
      "type": "ISSUER",
      "createdAt": 1700000000000,
      "params": {
        "symbol": "ISIN:US0000000000",
        "symboldesc": "Bond, Example Corp - Ultimate Issuer: Example Corp, ISIN: US0000000000",
        "val": "e0000001"
      }
    },
    {
      "id": 300002,
      "type": "ISSUER",
      "createdAt": 1700000000000,
      "params": {
        "symbol": "ISIN:US0000000001",
        "symboldesc": "Bond, Example Corp Subsidiary - Ultimate Issuer: Example Corp, ISIN: US0000000001",
        "val": "e0000002"
      }
    }
  ],
  "type": "ISSUERORCONID",
  "name": "My Issuer List",
  "description": null
}
```

**SDK Code**

```python ISSUERORCONID list with two ISSUER entries
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/list"

querystring = {"listId":"2001","masterUserName":"user1"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go ISSUERORCONID list with two ISSUER entries
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby ISSUERORCONID list with two ISSUER entries
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php ISSUERORCONID list with two ISSUER entries
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift ISSUERORCONID list with two ISSUER entries
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1")! as URL,
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

### List with no entries

**Response**

```json
{
  "status": "ok",
  "listId": 2001,
  "entries": [],
  "type": "SYMBOL",
  "name": "My Symbol List",
  "description": null
}
```

**SDK Code**

```python List with no entries
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/list"

querystring = {"listId":"2001","masterUserName":"user1"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go List with no entries
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby List with no entries
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php List with no entries
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift List with no entries
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/list?listId=2001&masterUserName=user1")! as URL,
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
