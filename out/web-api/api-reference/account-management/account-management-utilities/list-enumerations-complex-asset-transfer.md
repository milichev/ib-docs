[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/list-enumerations-complex-asset-transfer)

# Get A List Of Participating Brokers For The Given Asset Type

GET https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer

Get list of brokers supported for given asset transfer type**Scope**: `enumerations.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/list-enumerations-complex-asset-transfer

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `client-id` (string, required) — The client's clientId

### Query parameters

- `instructionType` (string, required) — Asset transfer type to get the list of supported brokers

## Response

### 200

Returns list of brokers supported for given asset type

- `instructionType` (string, required) — Type of the instruction.
- `brokers` (list of string, required) — List of supported broker names.

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a not found request.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code (404).
- `detail` (string, optional) — Human-readable explanation of the problem.

### 500 Internal Server Error

Unable to process request due to an Internal Error. Please try again later.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Examples

**Response**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "brokers": [
    "DONNER & REUSCHEL",
    "IBROKER GLOBAL MARKETS SOCIEDAD DE VALORES, S.A",
    "EQUATEX 4500",
    "IMAGI  BROKERAGE LIMITED",
    "V-BANK",
    "ADMIRAL MARKETS UK LTD",
    "ALFA BANK",
    "YICKO SECURITIES LIMITED",
    "BLACKWELL GLOBAL SECURITIES LIMITED",
    "EQUINITI",
    "KAISA FINANCIAL GROUP COMPANY LIMITED"
  ]
}
```

**SDK Code**

```python Response
import requests

url = "https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer"

querystring = {"instructionType":"COMPLEX_ASSET_TRANSFER"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go Response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer?instructionType=COMPLEX_ASSET_TRANSFER"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Response
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer?instructionType=COMPLEX_ASSET_TRANSFER")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer?instructionType=COMPLEX_ASSET_TRANSFER', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Response
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/enumerations/complex-asset-transfer?instructionType=COMPLEX_ASSET_TRANSFER")! as URL,
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
