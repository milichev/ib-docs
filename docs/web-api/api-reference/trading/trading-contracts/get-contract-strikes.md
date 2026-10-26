[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-strikes)

# Search Strikes For An Underlier

GET https://localhost:5000/v1/api/iserver/secdef/strikes

Returns lists of valid strikes for options contracts on a given underlier, for all currently trading expirations. The /iserver/secdef/search endpoint must be called prior for the underlying. Otherwise empty arrays will return for "puts" and "calls".

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-strikes

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conid` (string, required)
- `sectype` (enum, required) — Security type of the requested contract of interest. Valid asset classes are: * `FOP` - Futures Option * `OPT` - Option * `WAR` - Warrant
  - Allowed values: `OPT`, `FOP`, `WAR`
- `month` (string, required)
- `exchange` (string, optional, default: SMART)

## Response

### 200

Successful response containing a contract's security definition.

- `call` (list of double, optional) — Array containing a series of comma separated values representing potential call strikes for the instrument.
- `put` (list of double, optional) — Array containing a series of comma separated values representing potential put strikes for the instrument.

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

## Examples

**Response**

```json
{
  "call": [
    70,
    75,
    80,
    85,
    90,
    95,
    100
  ],
  "put": [
    70,
    75,
    80,
    85,
    90,
    95,
    100
  ]
}
```

**SDK Code**

```javascript strikes
const url = 'https://localhost:5000/v1/api/iserver/secdef/strikes?conid=265598&month=JAN24&sectype=OPT';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go strikes
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/secdef/strikes?conid=265598&month=JAN24&sectype=OPT"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby strikes
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/secdef/strikes?conid=265598&month=JAN24&sectype=OPT")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php strikes
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/secdef/strikes?conid=265598&month=JAN24&sectype=OPT', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift strikes
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/secdef/strikes?conid=265598&month=JAN24&sectype=OPT")! as URL,
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
