[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-instrument-info)

# General Instrument Information

GET https://localhost:5000/v1/api/iserver/contract/{conid}/info

Requests full contract details for the given conid.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-instrument-info

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

Returns detailed information for the passed contract.

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

## Examples

### stk-contract-info

**Response**

```json
{
  "cfi_code": "",
  "symbol": "IBM",
  "cusip": null,
  "con_id": 8314,
  "industry": "Computers",
  "instrument_type": "STK",
  "trading_class": "IBM",
  "valid_exchanges": "SMART,AMEX,NYSE,CBOE,PHLX,ISE,CHX,ARCA,NASDAQ,DRCTEDGE,BEX,BATS,EDGEA,BYX,NYSEDARK,NASDDARK,IEX,EDGX,FOXRIVER,PEARL,NYSENAT,IEXMID,JANELP,IMCLP,LTSE,MEMX,JUMPLP,OLDMCLP,RBCCMALP,IBEOS,GSLP,BLUEOCEAN,OVERNIGHT,JANEMID,G1XLP,PSX",
  "allow_sell_long": false,
  "is_zero_commission_security": false,
  "local_symbol": "IBM",
  "currency": "USD",
  "underlying_con_id": 0,
  "r_t_h": true,
  "company_name": "INTL BUSINESS MACHINES CORP",
  "smart_available": true,
  "exchange": "SMART",
  "category": "Computer Services"
}
```

**SDK Code**

```python stk-contract-info
import requests

url = "https://localhost:5000/v1/api/iserver/contract/265598/info"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go stk-contract-info
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/contract/265598/info"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby stk-contract-info
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/contract/265598/info")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php stk-contract-info
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/265598/info', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift stk-contract-info
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/265598/info")! as URL,
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

### opt-contract-info

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
  "currency": "USD",
  "text": "MAR 15 '24 187.5 Call",
  "underlying_con_id": 8314,
  "r_t_h": false,
  "multiplier": "100",
  "contract_month": "202403",
  "company_name": "INTL BUSINESS MACHINES CORP",
  "smart_available": true,
  "exchange": "SMART",
  "right": "CALL",
  "strike": "187.5"
}
```

**SDK Code**

```python opt-contract-info
import requests

url = "https://localhost:5000/v1/api/iserver/contract/265598/info"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go opt-contract-info
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/contract/265598/info"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby opt-contract-info
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/contract/265598/info")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php opt-contract-info
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/265598/info', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift opt-contract-info
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/265598/info")! as URL,
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
