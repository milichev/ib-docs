[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-future-by-symbol)

# Search Futures By Symbol

GET https://localhost:5000/v1/api/trsrv/futures

Returns a list of non-expired future contracts for given symbol(s)

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-future-by-symbol

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `symbols` (string, required)
- `exchange` (string, optional)

## Response

### 200

Successful response containing a contract's security definition.

- `symbol` (list of FeaturesSymbolItems, optional) — Displayed as the string of your symbol Contains a series of objects for each symbol that matches the requested.

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

### FeaturesSymbolItems

- `symbol` (string, optional) — The requested symbol value.
- `conid` (long, optional) — Contract identifier for the specific symbol
- `underlyingConid` (long, optional) — Contract identifier for the future's underlying contract.
- `expirationDate` (long, optional) — Expiration date of the specific future contract.
- `ltd` (long, optional) — Last trade date of the future contract.
- `shortFuturesCutOff` (long, optional) — Represents the final day for contract rollover for shorted futures.
- `longFuturesCutOff` (long, optional) — Represents the final day for contract rollover for long futures.

## Examples

**Response**

```json
{
  "ES": [
    {
      "conid": 495512557,
      "expirationDate": 20241220,
      "longFuturesCutOff": 20241219,
      "ltd": 20241219,
      "shortFuturesCutOff": 20241219,
      "symbol": "ES",
      "underlyingConid": 11004968
    },
    {
      "conid": 495512563,
      "expirationDate": 20251219,
      "longFuturesCutOff": 20251218,
      "ltd": 20251218,
      "shortFuturesCutOff": 20251218,
      "symbol": "ES",
      "underlyingConid": 11004968
    }
  ]
}
```

**SDK Code**

```go futures
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/trsrv/futures?symbols=ES%2CMES"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby futures
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/trsrv/futures?symbols=ES%2CMES")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java futures
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/trsrv/futures?symbols=ES%2CMES")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php futures
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/trsrv/futures?symbols=ES%2CMES', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift futures
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/trsrv/futures?symbols=ES%2CMES")! as URL,
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
