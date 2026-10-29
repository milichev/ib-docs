[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-restriction-details)

# Get Restriction Details

GET https://localhost:5000/gw/api/v1/restrictions/restriction

Returns full details of a restriction including rules. The restriction must be owned by the caller. Returns 403 for both unauthorized and non-existent restrictions to prevent ID enumeration.**Scope**: `restrictions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/pre-trade-compliance/pre-trade-compliance-restrictions/get-restriction-details

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

Full restriction details.

- `status` (string, required) — Always `ok` on success.
- `restrictionId` (long, required) — Echoed from the request.
- `rules` (list of RestrictionRule, required) — Rules attached to this restriction. Empty array when none.
- `name` (string, optional) — Restriction name.
- `description` (string, optional, nullable) — Restriction description.
- `message` (string, optional, nullable) — Shown to users when the restriction triggers.
- `applicationType` (string, optional) — Example values: Restrict.
- `usageType` (string, optional) — Example values: Trading, Compliance, Monitor.
- `allowOnly` (string, optional, nullable) — Null when not applicable. The value `F` returned by the database is normalized to null.
- `matchAll` (string, optional, nullable) — Null when not applicable. The value `F` returned by the database is normalized to null.
- `isWhiteList` (string, optional) — Whitelist flag.
- `tmFrequency` (string, optional) — Trade-monitoring recurrence. Present only when configured.
- `tmFirstDate` (long, optional) — Trade-monitoring start timestamp in epoch milliseconds. Present only when configured.

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

### RestrictionRule

A single rule within a restriction. Field order: `ruleId`, `type`, `validityType`, `startDate`/`endDate` (GTD only), `params` (absent when empty).

- `ruleId` (long, optional) — Rule ID within the restriction.
- `type` (string, optional) — Example values: CLOSINGONLY, RESTRICTALLORDERS, CONCENTRATIONLIMIT, RESTRICTEDASSETCLASS, ISSUER, CONID, UNDERLYING, WHITELIST.
- `validityType` (string, optional) — GTC = Good Till Cancelled, GTD = Good Till Date.
- `startDate` (string, optional) — GTD rules only. Format: MM/dd/yyyy.
- `endDate` (string, optional) — GTD rules only. Format: MM/dd/yyyy.
- `params` (list of map from string to string, optional) — Rule parameters. Absent when the rule has no parameters.

## Examples

### Restriction with one rule

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1001,
  "rules": [
    {
      "ruleId": 5001,
      "type": "RESTRICTALLORDERS",
      "validityType": "GTC",
      "params": [
        {
          "orderside": "ALL"
        }
      ]
    }
  ],
  "name": "My Restriction",
  "description": null,
  "message": null,
  "applicationType": "Restrict",
  "usageType": "Trading",
  "allowOnly": null,
  "matchAll": null,
  "isWhiteList": "F"
}
```

**SDK Code**

```python Restriction with one rule
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Restriction with one rule
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Restriction with one rule
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Restriction with one rule
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Restriction with one rule
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001")! as URL,
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

### Restriction with trade-monitoring

**Response**

```json
{
  "status": "ok",
  "restrictionId": 1002,
  "rules": [],
  "name": "My TM Restriction",
  "description": null,
  "message": null,
  "applicationType": "Restrict",
  "usageType": "Monitor",
  "allowOnly": null,
  "matchAll": null,
  "isWhiteList": "F",
  "tmFrequency": "Daily",
  "tmFirstDate": 1700000000000
}
```

**SDK Code**

```python Restriction with trade-monitoring
import requests

url = "https://localhost:5000/gw/api/v1/restrictions/restriction"

querystring = {"masterUserName":"user1","restrictionId":"1001"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Restriction with trade-monitoring
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Restriction with trade-monitoring
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Restriction with trade-monitoring
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Restriction with trade-monitoring
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/restrictions/restriction?masterUserName=user1&restrictionId=1001")! as URL,
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
