> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Account Positions (NEW)

GET https://localhost:5000/v1/api/portfolio2/{accountId}/positions

Returns a list of positions for the given account. /v1/api/portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint. This endpoint provides near-real time updates and removes caching otherwise found in the /portfolio/\{accountId}/positions/\{pageId} endpoint.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-uncached-positions

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Query parameters

- `model` (string, optional)
- `direction` (enum, optional, default: a) — The chronologic order of orders to sort by. * `a` - Display in ascending order. * `d` - Display in descending order.
  - Allowed values: `a`, `d`

## Response

### 200

response with position details

- `list of Portfolio2PositionsItems`

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

### Portfolio2PositionsItems

- `assetClass` (string, optional) — Asset class of the requested instrument.
- `avgCost` (any, optional) — The account's average cost for its position.
- `avgPrice` (double, optional) — The account's average price for its position.
- `conid` (long, optional) — IB contract ID for the instrument.
- `currency` (string, optional) — Currency in which the instrument trades.
- `description` (string, optional) — Contract's local symbol
- `group` (string, optional) — Industry sub-categorization of the instrument.
- `isLastToLoq` (boolean, optional)
- `marketPrice` (double, optional) — Current market price of the instrument, in the instrument's currency.
- `marketValue` (double, optional) — Current market value of the account's position in the instrument, in the instrument's currency.
- `model` (string, optional) — Name of the model portfolio in which the account is invested that contributes this position.
- `position` (double, optional) — Size of position in units of instrument.
- `realizedPnl` (double, optional) — Realized PnL for the instrument in the instrument's currency.
- `secType` (string, optional) — The security type of the instrument.
- `sector` (string, optional) — Industry sector categorization of the instrument.
- `timestamp` (long, optional) — Time taken to retrieve position data in milliseconds.
- `unrealizedPnl` (double, optional) — Unrealized PnL for the instrument in the account.

## Examples

**Response**

```json
[
  {
    "assetClass": "STK",
    "avgCost": null,
    "avgPrice": 262.2430710711693,
    "conid": 265598,
    "currency": "USD",
    "description": "AAPL",
    "group": "Computers",
    "isLastToLoq": false,
    "marketPrice": 256.39068603515625,
    "marketValue": 82292949.324646,
    "model": "",
    "position": 320967,
    "realizedPnl": 0,
    "secType": "STK",
    "sector": "Technology",
    "timestamp": 1767885880,
    "unrealizedPnl": -1878422.467854008
  }
]
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/portfolio2/DU123456/positions"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/portfolio2/DU123456/positions';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio2/DU123456/positions"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/portfolio2/DU123456/positions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio2/DU123456/positions")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio2/DU123456/positions', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/portfolio2/DU123456/positions");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio2/DU123456/positions")! as URL,
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