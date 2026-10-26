[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-watchlists/get-specific-watchlist)

# Return A Single Saved Watchlist

GET https://localhost:5000/v1/api/iserver/watchlist

Retrieve details of a single watchlist stored in the username's settings.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-watchlists/get-specific-watchlist

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `id` (string, required) — Watchlist ID of the requested watchlist.

## Response

### 200

Successful deletion of specified watchlist.

- `id` (string, optional) — Identifier of the watchlist.
- `hash` (string, optional) — Internal use. Unique hash of the watchlist.
- `name` (string, optional) — Human-readable display name of the watchlist.
- `readOnly` (boolean, optional) — Indicates whether the watchlist can be edited.
- `instruments` (list of singleWatchlistEntry, optional) — Array of instruments contained in the watchlist.

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

### singleWatchlistEntry

Object containing watchlist entry for a single instrument.

- `ST` (enum, optional) — All-capital, shorthand security type identifier of the instrument.
  - Allowed values: `STK`, `OPT`, `FUT`, `BOND`, `FUND`, `WAR`, `CASH`, `CRYPTO`
- `C` (string, optional) — Instrument conid as a string.
- `conid` (long, optional) — IB contract ID of the instrument.
- `name` (string, optional) — Complete display name of the instrument.
- `fullName` (string, optional) — Full display presentation of the instrument symbol.
- `assetClass` (enum, optional) — All-capital, shorthand security type identifier of the instrument.
  - Allowed values: `STK`, `OPT`, `FUT`, `BOND`, `FUND`, `WAR`, `CASH`, `CRYPTO`
- `ticker` (string, optional) — Symbol of the instrument.
- `chineseName` (string, optional) — Rendering of the instrument name in Chinese.

## Examples

**Response**

```json
{
  "id": "1234",
  "hash": "1234987651621",
  "name": "Test Watchlist",
  "readOnly": false,
  "instruments": [
    {
      "ST": "STK",
      "C": "8314",
      "conid": 8314,
      "name": "INTL BUSINESS MACHINES CORP",
      "fullName": "IBM",
      "assetClass": "STK",
      "ticker": "IBM",
      "chineseName": ""
    }
  ]
}
```

**SDK Code**

```javascript singleWatchlistExample
const url = 'https://localhost:5000/v1/api/iserver/watchlist?id=1234';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go singleWatchlistExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/watchlist?id=1234"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby singleWatchlistExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/watchlist?id=1234")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php singleWatchlistExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/watchlist?id=1234', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift singleWatchlistExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/watchlist?id=1234")! as URL,
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
