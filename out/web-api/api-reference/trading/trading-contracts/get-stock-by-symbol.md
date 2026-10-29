[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-stock-by-symbol)

# Search Stocks By Symbol

GET https://localhost:5000/v1/api/trsrv/stocks

Returns an object contains all stock contracts for given symbol(s)

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-stock-by-symbol

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `symbols` (string, required)

## Response

### 200

Successful response containing a contract's security definition.

- `map from string to list of StocksItems`

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

### StocksItems

Contains a series of objects for each symbol that matches the requested

- `name` (string, optional) — Full company name for the given contract.
- `chineseName` (string, optional) — Chinese name for the given company as unicode.
- `assetClass` (string, optional) — Asset class for the given company.
- `contracts` (list of StocksItemsContractsItems, optional) — A series of arrays pertaining to the same company listed by "name". Typically differentiated based on currency of the primary exchange.

### StocksItemsContractsItems

- `conid` (long, optional) — Contract ID for the specific contract.
- `exchange` (string, optional) — Primary exchange for the given contract.
- `isUS` (boolean, optional) — States whether the contract is hosted in the United States or not.

## Examples

**Response**

```json
{
  "IBM": [
    {
      "name": "INTL BUSINESS MACHINES CORP",
      "chineseName": "&#x56FD;&#x9645;&#x5546;&#x4E1A;&#x673A;&#x5668;",
      "assetClass": "STK",
      "contracts": [
        {
          "conid": 8314,
          "exchange": "NYSE",
          "isUS": true
        },
        {
          "conid": 1411277,
          "exchange": "IBIS",
          "isUS": false
        },
        {
          "conid": 38709473,
          "exchange": "MEXI",
          "isUS": false
        },
        {
          "conid": 41645598,
          "exchange": "LSE",
          "isUS": false
        }
      ]
    },
    {
      "name": "INTL BUSINESS MACHINES C-CDR",
      "chineseName": "&#x56FD;&#x9645;&#x5546;&#x4E1A;&#x673A;&#x5668;",
      "assetClass": "STK",
      "contracts": [
        {
          "conid": 530091934,
          "exchange": "AEQLIT",
          "isUS": false
        }
      ]
    }
  ]
}
```

**SDK Code**

```python ibm
import requests

url = "https://localhost:5000/v1/api/trsrv/stocks"

querystring = {"symbols":"AAPL,IBKR"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go ibm
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL%2CIBKR"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby ibm
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL%2CIBKR")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php ibm
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL%2CIBKR', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift ibm
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/trsrv/stocks?symbols=AAPL%2CIBKR")! as URL,
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
