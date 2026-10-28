> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Portfolio Allocation

POST https://localhost:5000/v1/api/pa/allocation
Content-Type: application/json

Returns consolidated portfolio allocation by Financial Instrument, Asset Class, Sector, Region, or Country for a given set of accounts. Result is aggregated for the included accounts. Current day data is supported only if all included accounts have the same base currency as specified in the currency parameter.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio-analyst/create-allocation

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `acctIds` (list of string, required)
- `type` (enum, required) — The allocation category type. One of FINANCIAL_INSTRUMENT, ASSET_CLASS, SECTOR, REGION, COUNTRY, or ALL. Case insensitive. When ALL is specified, the response includes allocations for every category type.
  - Allowed values: `FINANCIAL_INSTRUMENT`, `ASSET_CLASS`, `SECTOR`, `REGION`, `COUNTRY`, `ALL`
- `currency` (string, optional, default: USD) — Three character currency code. The base currency to use for the NAV calculation in the response.
- `date` (string, optional) — Optional. Formatted as yyyymmdd. If specified, should be prior to the current day. If not specified, request will be for the current day. If the request is for current day and current day data is not available, then the response will be for the previous business day.
- `model` (string, optional) — Optional. Model portfolio name to use for the allocation calculation.

## Response

### 200

Returns the allocation breakdown for the specified accounts.

- `id` (string, optional) — Response identifier.
- `currency` (string, optional) — Three character currency code. Currency of NAV values, as specified in the request.
- `realtime` (boolean, optional) — true indicates the response is for current day data.
- `date` (string, optional) — The as-of date for the NAV and allocations. Formatted as yyyymmdd.
- `allocations` (map from string to AllocationResponseAllocations, optional) — Object keyed by allocation type (FINANCIAL_INSTRUMENT, ASSET_CLASS, SECTOR, REGION, or COUNTRY). When type=ALL is requested, multiple keys may be present.
- `excluded` (list of string, optional) — Requested accounts that were not included in the result due to an error.
- `warning` (string, optional) — Warning message, if any.

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

### AllocationResponseAllocations

- `long` (AllocationResponseAllocationsLong, optional) — Long positions allocation breakdown.
- `short` (AllocationResponseAllocationsShort, optional) — Short positions allocation breakdown.

### AllocationResponseAllocationsLong

Long positions allocation breakdown.

- `total` (AllocationResponseAllocationsLongTotal, optional)
- `items` (list of AllocationResponseAllocationsLongItemsItems, optional) — Long allocation entries.

### AllocationResponseAllocationsShort

Short positions allocation breakdown.

- `total` (AllocationResponseAllocationsShortTotal, optional)
- `items` (list of AllocationResponseAllocationsShortItemsItems, optional) — Short allocation entries.

### AllocationResponseAllocationsLongTotal

- `nav` (double, optional) — Total NAV for long positions.
- `weight` (double, optional) — Total weight for long positions. Multiply by 100 to get as percentage.

### AllocationResponseAllocationsLongItemsItems

- `id` (string, optional) — Identifier for the category.
- `name` (string, optional) — English display name of the category.
- `nav` (double, optional) — Amount held in this category. Precision 8.
- `weight` (double, optional) — Proportion of the long portfolio held in this category. Multiply by 100 to get as percentage.
- `color` (string, optional) — RGB color code in hex format.

### AllocationResponseAllocationsShortTotal

- `nav` (double, optional) — Total NAV for short positions.
- `weight` (double, optional) — Total weight for short positions. Multiply by 100 to get as percentage.

### AllocationResponseAllocationsShortItemsItems

- `id` (string, optional) — Identifier for the category.
- `name` (string, optional) — English display name of the category.
- `nav` (double, optional) — Amount held in this category. Precision 8.
- `weight` (double, optional) — Proportion of the short portfolio held in this category. Multiply by 100 to get as percentage.
- `color` (string, optional) — RGB color code in hex format.

## Examples

**Request**

```json
{
  "acctIds": [
    "DU123456"
  ],
  "type": "FINANCIAL_INSTRUMENT"
}
```

**Response**

```json
{
  "id": "getAllocation",
  "currency": "USD",
  "realtime": false,
  "date": "20240611",
  "allocations": {
    "SECTOR": {
      "long": {
        "total": {
          "nav": 111598.1,
          "weight": 1
        },
        "items": [
          {
            "id": "51",
            "name": "Basic Materials",
            "nav": 2593.59,
            "weight": 0.02324045,
            "color": "#007aa0"
          },
          {
            "id": "57",
            "name": "Technology",
            "nav": 27329.01,
            "weight": 0.24488781,
            "color": "#008fd5"
          }
        ]
      },
      "short": {
        "total": {
          "nav": -42904.21,
          "weight": 1
        },
        "items": [
          {
            "id": "51",
            "name": "Basic Materials",
            "nav": -708.14,
            "weight": 0.01650514,
            "color": "#007aa0"
          }
        ]
      }
    }
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/pa/allocation"

payload = {
    "acctIds": ["DU123456"],
    "type": "FINANCIAL_INSTRUMENT"
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/pa/allocation';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"acctIds":["DU123456"],"type":"FINANCIAL_INSTRUMENT"}'
};

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
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/pa/allocation"

	payload := strings.NewReader("{\n  \"acctIds\": [\n    \"DU123456\"\n  ],\n  \"type\": \"FINANCIAL_INSTRUMENT\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

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

url = URI("https://localhost:5000/v1/api/pa/allocation")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"acctIds\": [\n    \"DU123456\"\n  ],\n  \"type\": \"FINANCIAL_INSTRUMENT\"\n}"

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/pa/allocation")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"acctIds\": [\n    \"DU123456\"\n  ],\n  \"type\": \"FINANCIAL_INSTRUMENT\"\n}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/pa/allocation', [
  'body' => '{
  "acctIds": [
    "DU123456"
  ],
  "type": "FINANCIAL_INSTRUMENT"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/pa/allocation");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"acctIds\": [\n    \"DU123456\"\n  ],\n  \"type\": \"FINANCIAL_INSTRUMENT\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "acctIds": ["DU123456"],
  "type": "FINANCIAL_INSTRUMENT"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/pa/allocation")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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