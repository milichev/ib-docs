[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-watchlists/post-new-watchlist)

# Create A Watchlist

POST https://localhost:5000/v1/api/iserver/watchlist
Content-Type: application/json

Create a named watchlist by submitting a set of conids.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-watchlists/post-new-watchlist

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `id` (string, required) — Must be a number, digits 0-9 only. Must be unique relative to other watchlist IDs.
- `name` (string, required) — Arbitrary human-readable name to be displayed in TWS and Client Portal.
- `rows` (list of V1ApiIserverWatchlistPostRequestBodyContentApplicationJsonSchemaRowsItems, required) — Array of JSON objects corresponding to watchlist rows, one per instruments.

## Response

### 200

Watchlist creation successful.

- `id` (string, optional) — The submitted watchlist ID.
- `hash` (string, optional) — IB's internal hash of the submitted watchlist.
- `name` (string, optional) — The submitted human-readable watchlist name.
- `readOnly` (boolean, optional) — Indicates whether watchlist is write-restricted. User-created watchlists will always show false.
- `instruments` (list of any, optional) — Array will always be empty. Contents can be queried via `GET /iserver/watchlist?id=`

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

internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests. For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem.

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### V1ApiIserverWatchlistPostRequestBodyContentApplicationJsonSchemaRowsItems

- `C` (string, optional) — Conid as string.

## Examples

**Request**

```json
{
  "id": "string",
  "name": "string",
  "rows": [
    {}
  ]
}
```

**Response**

```json
{
  "id": "string",
  "hash": "string",
  "name": "string",
  "readOnly": true,
  "instruments": [
    "string"
  ]
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/v1/api/iserver/watchlist';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"id":"string","name":"string","rows":[{}]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/watchlist"

	payload := strings.NewReader("{\n  \"id\": \"string\",\n  \"name\": \"string\",\n  \"rows\": [\n    {}\n  ]\n}")

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

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/watchlist")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"id\": \"string\",\n  \"name\": \"string\",\n  \"rows\": [\n    {}\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/watchlist', [
  'body' => '{
  "id": "string",
  "name": "string",
  "rows": [
    {}
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "id": "string",
  "name": "string",
  "rows": [[]]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/watchlist")! as URL,
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
