[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-rules)

# Search Contract Rules

POST https://localhost:5000/v1/api/iserver/contract/rules
Content-Type: application/json

Returns trading related rules for a specific contract and side.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-rules

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `conid` (long, required) — Contract identifier for the interested contract.
- `isBuy` (boolean, optional, default: true) — Side of the market rules apply too. Set to true for Buy Orders, set to false for Sell orders.
- `modifyOrder` (boolean, optional, default: false) — Used to find trading rules related to an existing order.
- `orderId` (long, optional) — Specify the order identifier used for tracking a given order.

## Response

### 200

An array of objects detailing contract information.

- `algoEligible` (boolean, optional) — Indicates if the contract can trade algos or not.
- `allOrNoneEligible` (boolean, optional) — indicates all or non option is eligible for given contract.
- `costReport` (boolean, optional) — Indicates whether or not a cost report has been requested (Client Portal only).
- `canTradeAcctIds` (list of string, optional) — Indicates permitted accountIDs that may trade the contract.
- `error` (string, optional, nullable) — If rules information can not be received for any reason, it will be expressed here.
- `orderTypes` (list of enum, optional) — Indicates permitted order types for use with standard quantity trading.
  - Allowed values: `limit`, `midprice`, `market`, `stop`, `stop_limit`, `mit`, `lit`, `trailing_stop`, `trailing_stop_limit`, `relative`, `marketonclose`, `limitonclose`
- `ibAlgoTypes` (list of enum, optional) — Indicates permitted algo types for use with the given contract.
  - Allowed values: `limit`, `stop_limit`, `lit`, `trailing_stop_limit`, `relative`, `marketonclose`, `limitonclose`
- `fraqTypes` (list of enum, optional) — Indicates permitted order types for use with fractional trading.
  - Allowed values: `limit`, `market`, `stop`, `stop_limit`, `mit`, `lit`, `trailing_stop`, `trailing_stop_limit`
- `forceOrderPreview` (boolean, optional) — Indicates if the order preview is forced upon the user before submission.
- `cqtTypes` (list of enum, optional) — Indicates accepted order types for use with cash quantity.
  - Allowed values: `limit`, `market`, `stop`, `stop_limit`, `mit`, `lit`, `trailing_stop`, `trailing_stop_limit`
- `orderDefaults` (ContractRulesOrderDefaults, optional) — Indicates default order type for the given security type.
- `orderTypesOutside` (list of enum, optional) — Indicates permitted order types for use outside of regular trading hours.
  - Allowed values: `limit`, `stop_limit`, `lit`, `trailing_stop_limit`, `relative`
- `defaultSize` (long, optional) — Default total quantity value for orders.
- `cashSize` (long, optional) — Default cash value quantity.
- `sizeIncrement` (long, optional) — Indicates quantity increase for the contract.
- `tifTypes` (list of string, optional) — Indicates allowed tif types supported for the contract.
- `tifDefaults` (ContractRulesTifDefaults, optional) — Object containing details about your TIF value defaults. These defaults can be viewed and modified in TWS's within the Global Configuration.
- `limitPrice` (double, optional) — Default limit price for the given contract.
- `stopPrice` (double, optional) — Default stop price for the given contract.
- `orderOrigination` (string, optional, nullable) — Order origin designation for US securities options and Options Clearing Corporation
- `preview` (boolean, optional) — Indicates if the order preview is required (for client portal only)
- `displaySize` (long, optional, nullable) — Standard display increment rule for the instrument.
- `fraqInt` (long, optional) — Indicates decimal places for fractional order size.
- `cashCcy` (string, optional) — Indicates base currency for the instrument.
- `cashQtyIncr` (long, optional) — Indicates cash quantity increment rules.
- `priceMagnifier` (long, optional, nullable) — Signifies the magnifier of a given contract. This is separate from the price multiplier, and will typically return 'null'
- `negativeCapable` (boolean, optional) — Indicates if the value of the contract can be negative (true) or if it is always positive (false).
- `incrementType` (long, optional) — Indicates the type of increment style.
- `incrementRules` (list of ContractRulesIncrementRulesItems, optional) — Indicates increment rule values including lowerEdge and increment value.
- `hasSecondary` (boolean, optional)
- `modTypes` (list of any, optional) — Lists the available order types supported when modifying the order.
- `increment` (double, optional) — Minimum increment values for prices
- `incrementDigits` (long, optional) — Number of decimal places to indicate the increment value.

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

### ContractRulesOrderDefaults

Indicates default order type for the given security type.

- `LMT` (ContractRulesOrderDefaultsLmt, optional)

### ContractRulesTifDefaults

Object containing details about your TIF value defaults. These defaults can be viewed and modified in TWS's within the Global Configuration.

- `TIF` (string, optional) — The default TIF type for orders.
- `SIZE` (string, optional) — The default size value for orders.
- `DEFAULT_ACCT` (string, optional) — default account (multi account only)
- `PMALGO` (boolean, optional)

### ContractRulesIncrementRulesItems

- `lowerEdge` (long, optional) — If the current mark price of the instrument is at or above the lower edge, the given increment value is used for order prices.
- `increment` (long, optional) — The price of the instrument must be submitted as a mulitple of the increment value.

### ContractRulesOrderDefaultsLmt

- `LP` (string, optional) — Indicates a Limit Price default value.

## Examples

**Request**

```json
{
  "conid": 1
}
```

**Response**

```json
{
  "algoEligible": true,
  "allOrNoneEligible": true,
  "costReport": false,
  "canTradeAcctIds": [
    "U1234567",
    "U1234568",
    "U1234569"
  ],
  "error": null,
  "orderTypes": [
    "limit",
    "midprice",
    "market",
    "stop",
    "stop_limit",
    "mit",
    "lit",
    "trailing_stop",
    "trailing_stop_limit",
    "relative",
    "marketonclose",
    "limitonclose"
  ],
  "ibAlgoTypes": [
    "limit",
    "stop_limit",
    "lit",
    "trailing_stop_limit",
    "relative",
    "marketonclose",
    "limitonclose"
  ],
  "fraqTypes": [
    "limit",
    "market",
    "stop",
    "stop_limit",
    "mit",
    "lit",
    "trailing_stop",
    "trailing_stop_limit"
  ],
  "forceOrderPreview": false,
  "cqtTypes": [
    "limit",
    "market",
    "stop",
    "stop_limit",
    "mit",
    "lit",
    "trailing_stop",
    "trailing_stop_limit"
  ],
  "orderDefaults": {
    "LMT": {
      "LP": "198.22"
    }
  },
  "orderTypesOutside": [
    "limit",
    "stop_limit",
    "lit",
    "trailing_stop_limit",
    "relative"
  ],
  "defaultSize": 100,
  "cashSize": 0,
  "sizeIncrement": 100,
  "tifTypes": [
    "IOC/MARKET,LIMIT,RELATIVE,MARKETONCLOSE,MIDPRICE,LIMITONCLOSE,MKT_PROTECT,STPPRT,a",
    "GTC/o,a",
    "OPG/LIMIT,MARKET,a",
    "GTD/o,a",
    "DAY/o,a"
  ],
  "tifDefaults": {
    "TIF": "DAY",
    "SIZE": "100.00",
    "DEFAULT_ACCT": "U1234567",
    "PMALGO": true
  },
  "limitPrice": 198.22,
  "orderOrigination": null,
  "preview": true,
  "displaySize": null,
  "fraqInt": 4,
  "cashCcy": "USD",
  "cashQtyIncr": 500,
  "priceMagnifier": null,
  "negativeCapable": false,
  "incrementType": 1,
  "incrementRules": [
    {
      "lowerEdge": 0,
      "increment": 1
    }
  ],
  "hasSecondary": true,
  "increment": 0.01,
  "incrementDigits": 2,
  "stopprice": 198.22
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/contract/rules';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"conid":1}'
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

	url := "https://localhost:5000/v1/api/iserver/contract/rules"

	payload := strings.NewReader("{\n  \"conid\": 1\n}")

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

url = URI("https://localhost:5000/v1/api/iserver/contract/rules")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"conid\": 1\n}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/contract/rules', [
  'body' => '{
  "conid": 1
}',
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
let parameters = ["conid": 1] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/rules")! as URL,
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
