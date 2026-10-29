[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-categories)

# Event Contract Categories

GET https://localhost:5000/v1/api/forecast/category/tree

Returns the category names, parent ids, and markets for Event Contracts.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-categories

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Returns a list of category identifiers and name to be used for more granular contract discovery.

- `categories` (CategoryTreeResponseCategories, optional) — A JSON object containing all category IDs and their relevant information.

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

### CategoryTreeResponseCategories

A JSON object containing all category IDs and their relevant information.

- `categoryId` (CategoryTreeResponseCategoriesCategoryId, optional) — Category identifier.

### CategoryTreeResponseCategoriesCategoryId

Category identifier.

- `name` (string, optional) — Category name.
- `parent_id` (string, optional) — Identifier of parent category (if applicable).
- `markets` (list of any, optional) — List of affiliated markets (if applicable).

## Examples

**Response**

```json
{
  "categories": {
    "g17490": {
      "markets": [
        {
          "conid": 732764706,
          "exchange": "FORECASTX",
          "name": "United States Carbon Dioxide Emissions",
          "product_conid": 732764711,
          "symbol": "USCE"
        },
        {
          "conid": 732764712,
          "exchange": "FORECASTX",
          "name": "United States Drought",
          "product_conid": 732764717,
          "symbol": "USDR"
        }
      ],
      "name": "United States",
      "parent_id": "g7369"
    },
    "g5351": {
      "name": "Environmental"
    },
    "g7369": {
      "name": "Climate Change",
      "parent_id": "g5351"
    }
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/forecast/category/tree"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/forecast/category/tree"

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

url = URI("https://localhost:5000/v1/api/forecast/category/tree")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/forecast/category/tree', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/forecast/category/tree")! as URL,
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
