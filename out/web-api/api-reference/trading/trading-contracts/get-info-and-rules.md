[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-info-and-rules)

# Instrument Info And Market Rules

GET https://localhost:5000/v1/api/iserver/contract/{conid}/info-and-rules

Requests full contract details and trading rules for the given conid. A follow-up request will provide additional trading rules.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-info-and-rules

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `conid` (string, required)

## Response

### 200

Returns all contract information and trading rules for the contract.

- `cfi_code` (string, optional) — Classification of Financial Instrument codes
- `symbol` (string, optional) — Underlying symbol
- `cusip` (string, optional, nullable) — Returns the CUSIP for the given instrument. Only used in BOND trading.
- `expiry_full` (string, optional) — Returns the expiration month of the contract.
- `con_id` (long, optional) — Indicates the contract identifier of the given contract.
- `maturity_date` (string, optional) — Indicates the final maturity date of the given contract.
- `industry` (string, optional) — Specific group of companies or businesses.
- `instrument_type` (string, optional) — Asset class of the instrument.
- `trading_class` (string, optional) — Designated trading class of the contract.
- `valid_exchanges` (string, optional) — Comma separated list of support exchanges or trading venues.
- `allow_sell_long` (boolean, optional) — Allowed to sell shares you own.
- `is_zero_commission_security` (boolean, optional) — Indicates if the contract supports zero commission trading.
- `local_symbol` (string, optional) — Contract's symbol from primary exchange. For options it is the OCC symbol.
- `contract_clarification_type` (string, optional)
- `classifier` (string, optional)
- `currency` (string, optional) — Base currency contract is traded in.
- `text` (string, optional) — Indicates the display name of the contract, as shown with Client Portal.
- `underlying_con_id` (long, optional) — Underlying contract identifier for the requested contract.
- `r_t_h` (boolean, optional) — Indicates if the contract can be traded outside regular trading hours or not.
- `multiplier` (string, optional) — Indicates the multiplier of the contract.
- `underlying_issuer` (string, optional) — Indicates the issuer of the underlying.
- `contract_month` (string, optional) — Indicates the year and month the contract expires.
- `company_name` (string, optional) — Indicates the name of the company or index.
- `smart_available` (boolean, optional) — Indicates if the contract can be smart routed or not.
- `exchange` (string, optional) — Indicates the primary exchange for which the contract can be traded.
- `category` (string, optional) — Indicates the industry category of the instrument.
- `rules` (contractRules, optional) — detailed contract information

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

### contractRules

detailed contract information

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

### stk

**Response**

```json
{
  "cfi_code": "",
  "symbol": "IBM",
  "cusip": null,
  "expiry_full": null,
  "con_id": 8314,
  "maturity_date": null,
  "industry": "Computers",
  "instrument_type": "STK",
  "trading_class": "IBM",
  "valid_exchanges": "SMART,AMEX,NYSE,CBOE,PHLX,ISE,CHX,ARCA,NASDAQ,DRCTEDGE,BEX,BATS,EDGEA,BYX,NYSEDARK,NASDDARK,IEX,EDGX,FOXRIVER,PEARL,NYSENAT,IEXMID,JANELP,IMCLP,LTSE,MEMX,JUMPLP,OLDMCLP,RBCCMALP,IBEOS,GSLP,BLUEOCEAN,OVERNIGHT,JANEMID,G1XLP,PSX",
  "allow_sell_long": false,
  "is_zero_commission_security": false,
  "local_symbol": "IBM",
  "contract_clarification_type": null,
  "classifier": null,
  "currency": "USD",
  "text": null,
  "underlying_con_id": 0,
  "r_t_h": true,
  "multiplier": null,
  "underlying_issuer": null,
  "contract_month": null,
  "company_name": "INTL BUSINESS MACHINES CORP",
  "smart_available": true,
  "exchange": "SMART",
  "category": "Computer Services",
  "rules": {
    "algoEligible": true,
    "costReport": false,
    "canTradeAcctIds": [
      "DUC10000"
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
      "MKT": {}
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
      "SIZE": "100.00"
    },
    "limitPrice": 196.88,
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
    "overnightEligible": true,
    "stopprice": 196.88
  }
}
```

**SDK Code**

```python stk
import requests

url = "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go stk
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby stk
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php stk
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift stk
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules")! as URL,
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

### option

**Response**

```json
{
  "cfi_code": "OCXXXS",
  "symbol": "IBM",
  "cusip": null,
  "expiry_full": "20240315",
  "con_id": 685302909,
  "maturity_date": "20240315",
  "instrument_type": "OPT",
  "trading_class": "IBM",
  "valid_exchanges": "SMART,AMEX,CBOE,PHLX,PSE,ISE,BOX,BATS,NASDAQOM,CBOE2,NASDAQBX,MIAX,GEMINI,EDGX,MERCURY,PEARL,EMERALD,MEMX,IBUSOPT",
  "allow_sell_long": false,
  "is_zero_commission_security": false,
  "local_symbol": "IBM   240315C00187500",
  "contract_clarification_type": null,
  "classifier": null,
  "currency": "USD",
  "text": "MAR 15 '24 187.5 Call",
  "underlying_con_id": 8314,
  "r_t_h": false,
  "multiplier": "100",
  "underlying_issuer": null,
  "contract_month": "202403",
  "company_name": "INTL BUSINESS MACHINES CORP",
  "smart_available": true,
  "exchange": "SMART",
  "rules": {
    "algoEligible": true,
    "costReport": false,
    "canTradeAcctIds": [
      "DUC10000"
    ],
    "error": null,
    "orderTypes": [
      "limit",
      "market",
      "stop",
      "stop_limit",
      "mit",
      "lit",
      "trailing_stop",
      "trailing_stop_limit",
      "relative"
    ],
    "ibAlgoTypes": [
      "limit",
      "stop_limit",
      "lit",
      "trailing_stop_limit",
      "relative"
    ],
    "fraqTypes": [],
    "forceOrderPreview": false,
    "cqtTypes": [],
    "orderDefaults": {
      "LMT": {
        "LP": "empty"
      }
    },
    "orderTypesOutside": [],
    "defaultSize": 1,
    "cashSize": 0,
    "sizeIncrement": 1,
    "tifTypes": [
      "IOC/MARKET,LIMIT,RELATIVE,MARKETONCLOSE,MIDPRICE,LIMITONCLOSE,MKT_PROTECT,STPPRT,a",
      "GTC/o,a",
      "GTD/o,a",
      "DAY/o,a"
    ],
    "tifDefaults": {
      "TIF": "DAY",
      "SIZE": "1.00"
    },
    "orderOrigination": null,
    "preview": true,
    "displaySize": null,
    "fraqInt": 0,
    "cashCcy": "USD",
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
    "overnightEligible": false,
    "stopprice": null
  },
  "right": "CALL",
  "strike": "187.5"
}
```

**SDK Code**

```python option
import requests

url = "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go option
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby option
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php option
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift option
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/265598/info-and-rules")! as URL,
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
