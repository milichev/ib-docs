[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-watchlists/get-all-watchlists)

# Return All Saved Watchlists

GET https://localhost:5000/v1/api/iserver/watchlists

Returns all saved watchlists stored on IB backend for the username in use in the current Web API session.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-watchlists/get-all-watchlists

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `SC` (enum, optional) — Can only be used with value USER_WATCHLIST, which returns only user-created watchlists and excludes those created by IB.
  - Allowed values: `USER_WATCHLIST`

## Response

### 200

Historical data query successfully returned data.

- `data` (WatchlistsResponseData, optional) — Contains the watchlist query results.
- `action` (enum, optional) — Internal use. Always has value 'content'.
  - Allowed values: `content`
- `MID` (string, optional) — Internal use. Number of times endpoint has been visited during session.

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

### WatchlistsResponseData

Contains the watchlist query results.

- `scanners_only` (boolean, optional) — Indicates if query results contain only market scanners.
- `show_scanners` (boolean, optional) — Indicates if market scanners are included in query results.
- `bulk_delete` (boolean, optional) — Indicates if username's watchlists can be bulk-deleted.
- `user_lists` (list of WatchlistsResponseDataUserListsItems, optional) — Array of objects detailing the watchlists saved for the username in use in the current Web API session.

### WatchlistsResponseDataUserListsItems

Details of a single watchlist.

- `is_open` (boolean, optional) — Internal use. Indicates if the watchlist is currently in use.
- `read_only` (boolean, optional) — Indicates if the watchlist can be edited.
- `name` (string, optional) — Display name of the watchlist.
- `modified` (long, optional) — Unix timestamp in milliseconds of the last modification of the watchlist.
- `id` (string, optional) — Watchlist ID of the watchlist.
- `type` (enum, optional) — Always has value 'watchlist'.
  - Allowed values: `watchlist`

## Examples

**Response**

```json
{
  "data": {
    "scanners_only": false,
    "show_scanners": false,
    "bulk_delete": false,
    "user_lists": [
      {
        "is_open": false,
        "read_only": false,
        "name": "Test Watchlist",
        "modified": 1702581306241,
        "id": "1234",
        "type": "watchlist"
      }
    ]
  },
  "action": "content",
  "MID": "2"
}
```

**SDK Code**

```python watchlistDataExample
import requests

url = "https://localhost:5000/v1/api/iserver/watchlists"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go watchlistDataExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/watchlists"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby watchlistDataExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/watchlists")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php watchlistDataExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/watchlists', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift watchlistDataExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/watchlists")! as URL,
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
