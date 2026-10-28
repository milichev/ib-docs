> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Account Allocations

GET https://localhost:5000/v1/api/portfolio/{accountId}/allocation

Get an account's allocations by asset class, sector group, and sector.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-asset-allocation

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

## Response

### 200

response with allocations

- `assetClass` (PortfolioAllocationsAssetClass, optional) — Object containing values of positions sorted by long/short and asset class.
- `group` (PortfolioAllocationsGroup, optional) — Object containing values of positions sorted by long/short and Sector Group.
- `sector` (PortfolioAllocationsSector, optional) — Object containing values of positions sorted by long/short and Sector.

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

### PortfolioAllocationsAssetClass

Object containing values of positions sorted by long/short and asset class.

- `long` (map from string to double, optional) — Object containing value of long positions in the account aggregated by asset class.
- `short` (map from string to double, optional) — Object containing value of short positions in the account aggregated by asset class.

### PortfolioAllocationsGroup

Object containing values of positions sorted by long/short and Sector Group.

- `long` (map from string to double, optional) — Object containing value of long positions in the account aggregated by Sector Group.
- `short` (map from string to double, optional) — Object containing value of short positions in the account aggregated by Sector Group.

### PortfolioAllocationsSector

Object containing values of positions sorted by long/short and Sector.

- `long` (map from string to double, optional) — Object containing value of long positions in the account aggregated by Sector.
- `short` (map from string to double, optional) — Object containing value of short positions in the account aggregated by Sector.

## Examples

**Response**

```json
{
  "assetClass": {
    "long": {
      "BOND": 380106.54,
      "CASH": 72425.68706744915,
      "CRYPTO": 255.17,
      "OPT": 44352.82,
      "STK": 1564447.6240790943
    },
    "short": {
      "CASH": -508096.16629793524,
      "OPT": -80.53,
      "STK": -103716.11109948158
    }
  },
  "group": {
    "long": {
      "Aerospace/Defense": 380106.54,
      "Auto Manufacturers": 18213.43337263364,
      "Banks": 366666.31,
      "Biotechnology": 49.72,
      "Computers": 279285.37,
      "Diversified Finan Serv": 45970.8,
      "Internet": 164576.99,
      "Others": 704313.8907064605,
      "Semiconductors": 371.9,
      "Software": 29607.2
    },
    "short": {
      "Auto Manufacturers": -11763,
      "Insurance": -4682.111099481583,
      "Internet": -189.53,
      "Semiconductors": -87162
    }
  },
  "sector": {
    "long": {
      "Communications": 164576.99,
      "Consumer, Cyclical": 18213.43337263364,
      "Consumer, Non-cyclical": 49.72,
      "Financial": 412637.11,
      "Industrial": 380106.54,
      "Others": 704313.8907064605,
      "Technology": 309264.47000000003
    },
    "short": {
      "Communications": -189.53,
      "Consumer, Cyclical": -11763,
      "Financial": -4682.111099481583,
      "Technology": -87162
    }
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/portfolio/accountId/allocation"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/portfolio/accountId/allocation';
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

	url := "https://localhost:5000/v1/api/portfolio/accountId/allocation"

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

url = URI("https://localhost:5000/v1/api/portfolio/accountId/allocation")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/accountId/allocation")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/accountId/allocation', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/portfolio/accountId/allocation");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/accountId/allocation")! as URL,
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