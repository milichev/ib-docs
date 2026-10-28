[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-allocatable-subaccounts)

# List Allocatable Subaccounts

GET https://localhost:5000/v1/api/iserver/account/allocation/accounts

Retrieves a list of all sub-accounts and returns their net liquidity and available equity for advisors to make decisions on what accounts should be allocated and how. This endpoint is only supported for Financial Advisors and IBroker Accounts. 

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-allocation-management/get-allocatable-subaccounts

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Indicates data is being returned successfully.

- `accounts` (list of SubAccountsAccountsItems, optional) — An array containing all sub-accounts held by the advisor.

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

### SubAccountsAccountsItems

- `data` (list of SubAccountsAccountsItemsDataItems, optional) — Contains Net liquidation and available equity of the given account Id.
- `name` (string, optional) — Returns the account ID affiliated with the balance data.

### SubAccountsAccountsItemsDataItems

- `value` (string, optional) — Contains the price value affiliated with the key.
- `key` (enum, optional) — Defines the value of the object * `AvailableEquity` - Indicates the value relates to the Available Equity held within the account * `NetLiquidation` - Indicates the value relates to the Net Liquidation held within the account
  - Allowed values: `AvailableEquity`, `NetLiquidation`

## Examples

**Response**

```json
{
  "accounts": [
    {
      "data": [
        {
          "value": "230013224.04",
          "key": "NetLiquidation"
        },
        {
          "value": "229617260.41",
          "key": "AvailableEquity"
        }
      ],
      "name": "U1234567"
    },
    {
      "data": [
        {
          "value": "229453917.57",
          "key": "NetLiquidation"
        },
        {
          "value": "229153196.12",
          "key": "AvailableEquity"
        }
      ],
      "name": "U1234568"
    }
  ]
}
```

**SDK Code**

```go 2-sub-accounts
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/allocation/accounts"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby 2-sub-accounts
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/allocation/accounts")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java 2-sub-accounts
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/allocation/accounts")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php 2-sub-accounts
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/allocation/accounts', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift 2-sub-accounts
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/allocation/accounts")! as URL,
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
