> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# List All Allocation Groups

GET https://localhost:5000/v1/api/iserver/account/allocation/group

Retrieves a list of all of the advisor's allocation groups. This describes the name of the allocation group, number of subaccounts within the group, and the method in use for the group. This endpoint is only supported for Financial Advisors and IBroker Accounts. 


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-allocation-groups

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Returns the "data" array, which contains all allocation groups under the advisor account.

- `data` (list of AllocationGroupsDataItems, optional) — array, which contains all allocation groups under the advisor account

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

### AllocationGroupsDataItems

- `allocation_method` (enum, optional, default: N) — Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods: * `A` - Available Equity * `E` - Equal * `N` - Net Liquidation Value User-specified allocation methods: * `C` - Cash Quantity * `P` - Percentage * `R` - Ratios * `S` - Shares
  - Allowed values: `A`, `E`, `N`, `C`, `P`, `R`, `S`
- `size` (long, optional) — Represents the total number of sub-accounts within the group.
- `name` (string, optional) — The name set for the given allocation group.

## Examples

**Response**

```json
{
  "data": [
    {
      "allocation_method": "E",
      "size": 16,
      "name": "group_1"
    },
    {
      "allocation_method": "N",
      "size": 3,
      "name": "group_2"
    }
  ]
}
```

**SDK Code**

```python groups
import requests

url = "https://localhost:5000/v1/api/iserver/account/allocation/group"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript groups
const url = 'https://localhost:5000/v1/api/iserver/account/allocation/group';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go groups
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/group"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby groups
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/group")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java groups
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/allocation/group")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php groups
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/allocation/group', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp groups
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/allocation/group");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift groups
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/group")! as URL,
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