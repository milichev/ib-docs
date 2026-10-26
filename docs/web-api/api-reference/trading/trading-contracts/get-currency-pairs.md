[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-currency-pairs)

# Available Currency Pairs

GET https://localhost:5000/v1/api/iserver/currency/pairs

Obtains available currency pairs corresponding to the given target currency.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-currency-pairs

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `currency` (string, required)

## Response

### 200

Returns a list of valid forex pairs for the given currency. The currency can apply as both the target or base currency.

- `map from string to list of CurrencyPairsItems`

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

### CurrencyPairsItems

- `symbol` (string, optional) — The official symbol of the given currency pair.
- `conid` (long, optional) — The official contract identifier of the given currency pair.
- `ccyPair` (string, optional) — Returns the symbol counterpart.

## Examples

**Response**

```json
{
  "USD": [
    {
      "symbol": "USD.SGD",
      "conid": 37928772,
      "ccyPair": "SGD"
    },
    {
      "symbol": "USD.RON",
      "conid": 38231133,
      "ccyPair": "RON"
    },
    {
      "symbol": "USD.CZK",
      "conid": 34838409,
      "ccyPair": "CZK"
    }
  ]
}
```

**SDK Code**

```javascript USD
const url = 'https://localhost:5000/v1/api/iserver/currency/pairs?currency=USD';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go USD
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/currency/pairs?currency=USD"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby USD
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/currency/pairs?currency=USD")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php USD
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/currency/pairs?currency=USD', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift USD
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/currency/pairs?currency=USD")! as URL,
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
