[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-all-model-positions)

# Request Model Positions

POST https://localhost:5000/v1/api/fa/model/positions
Content-Type: application/json

Request all positions held within the model.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-all-model-positions

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `model` (string, optional) — Name of your model.
- `sortField` (enum, optional) — Field to sort the response by. * `actual` - Current actual model allocation for the instrument. * `actualRangeMax` - Maximum actual model allocation allowed for the instrument. * `actualRangeMin` - Minimum actual model allocation allowed for the instrument. * `ccy` - Currency of the instrument. * `conid` - Contract identifier, or conid. * `dlv` - Market value. * `instrumentImbalance` - How far an instrument's actual allocation is from its model. * `instrument` - Symbol of the security. * `mv` - Market value of the model position. * `position` - Number of shares held by the model. * `target` - Target percentage of an instrument held within a model.
  - Allowed values: `actual`, `actualRangeMax`, `actualRangeMin`, `ccy`, `conid`, `dlv`, `instrumentImbalance`, `instrument`, `mismatchType`, `mv`, `position`, `target`
- `sortDirection` (enum, optional) — Direction to sort the request by. * `ASC` - Sort from greatest to smallest. * `DESC` - Sort from smallest to greatest.
  - Allowed values: `ASC`, `DESC`
- `limit` (long, optional) — Maximum number of positions to return.

## Response

### 200

Successfully retrieve position details

- `cash` (list of ModelPositionResponseCashItems, optional) — An object representing each currency held in the model.
- `mismatched` (boolean, optional) — Notes if the Actual allocation has become misalligned with the Target.
- `model` (string, optional) — Name of the model.
- `nlv` (double, optional) — Market value of the model.
- `positionList` (list of ModelPositionResponsePositionListItems, optional) — List of object containing each equity in the model.
- `positionTs` (long, optional) — Epoch timestamp when the position was retrieved.
- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `stkOnly` (boolean, optional) — Describes if the model contains only stocks.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.
- `totalDlv` (double, optional) — Diplayed total liquidation value of the model.
- `totalMv` (double, optional) — Market value of the entire position.

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

### ModelPositionResponseCashItems

- `actual` (double, optional) — Actual percent of the model held in the postion.
- `ccy` (string, optional) — Currency symbol.
- `exchangeRate` (double, optional) — Exchange rate of the account base currency to the model base currency.
- `instrumentImbalance` (double, optional) — Describes the percentage of imbalance of the actual allocation from the model.
- `mv` (double, optional) — Market value of the position.
- `target` (double, optional) — Target percentage of the model to hold in the position.

### ModelPositionResponsePositionListItems

- `actual` (double, optional) — Actual percent of the model held in the postion.
- `actualRangeMax` (double, optional) — Maximum accepted tolerance above the target.
- `actualRangeMin` (double, optional) — Minimum accepted tolerance below the target.
- `ccy` (string, optional) — Currency symbol.
- `conid` (long, optional) — Contract identifier for the instrument.
- `dlv` (double, optional) — Displayed liquidation value.
- `exchangeRate` (long, optional) — Used internally for client portal. Should be ignored.
- `flags` (long, optional) — Used internally for client portal. Should be ignored.
- `instrumentImbalance` (double, optional) — Describes the percentage of imbalance of the actual allocation from the model.
- `instrument` (string, optional) — Symbol of the position.
- `mismatchType` (double, optional) — Used internally for client portal. Should be ignored.
- `mv` (double, optional) — Market Value.
- `position` (double, optional) — The total size of the position held in the model.
- `target` (double, optional) — The desired allocation percentage of the position in the model.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "cash": [
    {
      "actual": 0,
      "ccy": "USD",
      "exchangeRate": 1,
      "instrumentImbalance": 0,
      "mv": 0,
      "target": 0.096
    }
  ],
  "mismatched": false,
  "model": "MCPAPI01",
  "nlv": 0,
  "positionList": [
    {
      "actual": 0,
      "actualRangeMax": 1.1,
      "actualRangeMin": 1.1,
      "ccy": "USD",
      "conid": 268084,
      "dlv": 0,
      "exchangeRate": 1,
      "flags": 0,
      "instrumentImbalance": 0,
      "instrument": "CSCO",
      "mismatchType": 0,
      "mv": 0,
      "position": 0,
      "target": 0.432
    },
    {
      "actual": 0,
      "actualRangeMax": 1.1,
      "actualRangeMin": 1.1,
      "ccy": "USD",
      "conid": 270639,
      "dlv": 0,
      "exchangeRate": 1,
      "flags": 0,
      "instrumentImbalance": 0,
      "instrument": "INTC",
      "mismatchType": 0,
      "mv": 0,
      "position": 0,
      "target": 0.4721
    }
  ],
  "positionTs": 1769614805464,
  "reqID": 540607,
  "stkOnly": true,
  "subscriptionStatus": 1,
  "totalDlv": 0,
  "totalMv": 0
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/positions';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
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

	url := "https://localhost:5000/v1/api/fa/model/positions"

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

url = URI("https://localhost:5000/v1/api/fa/model/positions")

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

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/positions', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/positions")! as URL,
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
