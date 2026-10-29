[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-accounts-in-model)

# Get Models Accounts

POST https://localhost:5000/v1/api/fa/model/accounts-details
Content-Type: application/json

Request all accounts held within a model.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-accounts-in-model

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `calcPnls` (boolean, optional) — Determine if Profit and Loss values
- `model` (string, optional) — Request model to pull account details from.
- `reqID` (long, optional) — Request identifier to uniquely track a request.

## Response

### 200

Successfully retrieve account details of in a model.

- `accountInfoList` (list of V1ApiFaModelAccountsDetailsPostResponsesContentApplicationJsonSchemaAccountInfoListItems, optional) — Collection of accounts held in the model.
- `baseCcyMaster` (string, optional) — Base currency of the model.
- `model` (string, optional) — Model retrieving accounts from.
- `reqID` (long, optional) — Unique identifier for the request.

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

### V1ApiFaModelAccountsDetailsPostResponsesContentApplicationJsonSchemaAccountInfoListItems

- `account` (string, optional) — Account identifier.
- `accountImbalance` (string, optional) — Account's imbalance from the target allocation.
- `alias` (string, optional) — Account alias.
- `baseCcyAccount` (string, optional) — Base currency of the account.
- `costBasis` (string, optional) — Cost basis.
- `exchangeRate` (double, optional) — Exchange rate of the account base currency to the model base currency.
- `nlv` (string, optional) — The net liquidation value of the instrument.
- `numInstrumentsOutsideRange` (long, optional) — The number of instruments held by the account outside of the alloted range from the presets.
- `unrealizedPnL` (string, optional) — The unrealized profit and loss of the model within the account.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "accountInfoList": [
    {
      "account": "DU12346",
      "accountImbalance": "0.904036",
      "alias": "",
      "baseCcyAccount": "USD",
      "costBasis": "0",
      "exchangeRate": 1,
      "nlv": "0",
      "numInstrumentsOutsideRange": 2,
      "unrealizedPnL": "0",
      "cashInIndependent": "974588.11"
    },
    {
      "account": "DU12348",
      "accountImbalance": "0.904036",
      "alias": "",
      "baseCcyAccount": "USD",
      "costBasis": "0",
      "exchangeRate": 1,
      "nlv": "0",
      "numInstrumentsOutsideRange": 2,
      "unrealizedPnL": "0",
      "cashInIndependent": "1006035.06"
    },
    {
      "account": "TOTAL",
      "accountImbalance": "0",
      "alias": "None",
      "baseCcyAccount": "USD",
      "costBasis": "0",
      "exchangeRate": 1,
      "nlv": "0",
      "numInstrumentsOutsideRange": 0,
      "unrealizedPnL": "0",
      "cashInIndependent": "1980623.17"
    }
  ],
  "baseCcyMaster": "USD",
  "model": "MCPAPI01",
  "reqID": 131
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/fa/model/accounts-details"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
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

	url := "https://localhost:5000/v1/api/fa/model/accounts-details"

	payload := strings.NewReader("{}")

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

url = URI("https://localhost:5000/v1/api/fa/model/accounts-details")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/accounts-details', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/accounts-details")! as URL,
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
