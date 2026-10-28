[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio/get-position-by-conid)

# Account Position In An Instrument

GET https://localhost:5000/v1/api/portfolio/{accountId}/position/{conid}

Get position for a given instrument in a single account.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-position-by-conid

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)
- `conid` (long, required)

### Query parameters

- `model` (string, optional)

## Response

### 200

Position details by conid

- `list of individualPosition`

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

### individualPosition

A specific account's position in the requested conid.

- `acctId` (string, optional) — IB accountId of an account with a position in the requested conid.
- `allExchanges` (string, optional) — Comma separated all exchanges on which the instrument trades.
- `assetClass` (string, optional) — Asset class of the requested instrument.
- `avgCost` (double, optional) — The account's average cost for its position.
- `avgPrice` (double, optional) — The account's average price for its position.
- `baseAvgCost` (double, optional) — Average cost in the account's base currency.
- `baseAvgPrice` (double, optional) — Average price in the account's base currency.
- `baseMktPrice` (double, optional) — Market price of instrument in the account's base currency.
- `baseMktValue` (double, optional) — Market value of the position in the account's base currency.
- `baseRealizedPnl` (double, optional) — Realized PnL for the instrument in the account's base currency.
- `baseUnrealizedPnl` (double, optional) — Unrealized PnL for the instrument in the account's base currency.
- `chineseName` (string, optional) — Chinese name of the instrument.
- `conExchMap` (list of any, optional)
- `conid` (long, optional) — IB contract ID for the instrument.
- `contractDesc` (string, optional) — Human-readable description of the instrument.
- `countryCode` (string, optional) — Country in which the instrument is issued.
- `currency` (string, optional) — Currency in which the instrument trades.
- `displayRule` (IndividualPositionDisplayRule, optional) — Object defining minimum increments used in displaying market data for the instrument.
- `exchs` (IndividualPositionExchs, optional, nullable)
- `exerciseStyle` (string, optional, nullable) — Style of exercise for options.
- `expiry` (string, optional, nullable) — Expiration of instrument, if applicable.
- `fullName` (string, optional) — Full display name of the instrument.
- `group` (string, optional) — Industry sub-categorization of the instrument.
- `hasOptions` (boolean, optional) — Indicates whether instrument has options contracts available for trading at IB.
- `incrementRules` (list of IndividualPositionIncrementRulesItems, optional) — Array containing increment rules used when pricing orders for the instrument.
- `isEventContract` (boolean, optional) — Indicates whether the instrument is an Event Contract.
- `isUS` (boolean, optional) — Indicates whether the instrument is issued in the US.
- `lastTradingDay` (string, optional) — Last day of trading in the instrument, if applicable. Formatted `YYYYMMDD`.
- `listingExchange` (string, optional) — The exchange on which the instrument is listed, or the primary exchange recognized by IB for the instrument.
- `mktPrice` (double, optional) — Current market price of the instrument, in the instrument's currency.
- `mktValue` (double, optional) — Current market value of the account's position in the instrument, in the instrument's currency.
- `model` (string, optional) — Name of the model portfolio in which the account is invested that contributes this position.
- `multiplier` (double, optional) — Instrument's multiplier, if applicable.
- `name` (string, optional) — Formal name of the entity or asset to which the instrument relates.
- `pageSize` (long, optional) — Maximum number of accounts that can be returned in a single request.
- `position` (double, optional) — Size of position in units of instrument.
- `putOrCall` (enum, optional) — The right of an options contract, if applicable.
  - Allowed values: `P`, `C`
- `realizedPnl` (double, optional) — Realized PnL for the instrument in the instrument's currency.
- `sector` (string, optional) — Industry sector categorization of the instrument.
- `sectorGroup` (string, optional) — Industry sub-categorization of the instrument.
- `strike` (string, optional) — Strike price, if applicable. Returned as string.
- `ticker` (string, optional) — Symbol associated with the instrument.
- `time` (long, optional) — Time taken to retrieve position data in milliseconds.
- `type` (string, optional) — Description of instrument, used to differentiate classes, if applicable.
- `undConid` (long, optional) — Contract ID of underlying instrument, if applicable.
- `unrealizedPnl` (double, optional) — Unrealized PnL for the instrument in the account.

### IndividualPositionDisplayRule

Object defining minimum increments used in displaying market data for the instrument.

- `displayRuleStep` (list of IndividualPositionDisplayRuleDisplayRuleStepItems, optional) — Array containing objects corresponding to display rule increments.
- `magnification` (long, optional) — Magnifier applied to pricing, if applicable.

### IndividualPositionExchs

### IndividualPositionIncrementRulesItems

Objects describing a single increment rule.

- `increment` (double, optional) — The pricing increment.
- `lowerEdge` (double, optional) — Lower edge from which the price increment rule is effective.

### IndividualPositionDisplayRuleDisplayRuleStepItems

A single display rule increment.

- `decimalDigits` (long, optional) — Number of decimal digits to display.
- `lowerEdge` (double, optional) — Lower edge from which the display rule is effective.
- `wholeDigits` (long, optional) — Number of integer digits to display.

## Examples

### individualPositionOpt

**Response**

```json
[
  {
    "acctId": "DU123456",
    "allExchanges": "AMEX,CBOE,PHLX,PSE,ISE,BOX,BATS,NASDAQOM,CBOE2,NASDAQBX,MIAX,GEMINI,EDGX,MERCURY,PEARL,EMERALD,MEMX,WALLBETH,IBUSOPT",
    "assetClass": "OPT",
    "avgCost": 4229.1637,
    "avgPrice": 42.291637,
    "chineseName": "Meta&#x5E73;&#x53F0;&#x80A1;&#x4EFD;&#x6709;&#x9650;&#x516C;&#x53F8;",
    "conExchMap": [],
    "conid": 580947749,
    "contractDesc": "META JUN2024 330 P [META 240621P00330000 100]",
    "countryCode": "US",
    "currency": "USD",
    "displayRule": {
      "displayRuleStep": [
        {
          "decimalDigits": 2,
          "lowerEdge": 0,
          "wholeDigits": 4
        }
      ],
      "magnification": 0
    },
    "exchs": null,
    "exerciseStyle": null,
    "expiry": "20240621",
    "fullName": "META Jun21'24 330 Put",
    "group": "Internet",
    "hasOptions": false,
    "incrementRules": [
      {
        "increment": 0.01,
        "lowerEdge": 0
      }
    ],
    "isEventContract": false,
    "isUS": true,
    "lastTradingDay": "20240621",
    "listingExchange": "AMEX",
    "mktPrice": 0.77968365,
    "mktValue": -77.97,
    "model": "",
    "multiplier": 100,
    "name": "META PLATFORMS INC-CLASS A",
    "pageSize": 100,
    "position": -1,
    "putOrCall": "P",
    "realizedPnl": 0,
    "sector": "Communications",
    "sectorGroup": "Internet Content-Entmnt",
    "strike": "330",
    "ticker": "META",
    "time": 27,
    "type": "",
    "undConid": 107113386,
    "unrealizedPnl": 4151.2,
    "crossCurrency": false,
    "undComp": "META PLATFORMS INC-CLASS A",
    "undSym": "META"
  }
]
```

**SDK Code**

```go individualPositionOpt
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/DU123456/position/265598"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby individualPositionOpt
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java individualPositionOpt
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php individualPositionOpt
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/DU123456/position/265598', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift individualPositionOpt
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/DU123456/position/265598")! as URL,
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

### individualPositionStk

**Response**

```json
[
  {
    "acctId": "DU123456",
    "allExchanges": "AMEX,NYSE,CBOE,PHLX,CHX,ARCA,ISLAND,ISE,IDEAL,NASDAQQ,REALNYSE,DRCTEDGE,BEX,BATS,NITEECN,EDGEA,CSFBALGO,PSX,BYX,ITG,PDQ,IBKRATS,NYSEFLOOR,CITADEL,NYSEDARK,MIAX,IBDARK,CITADELDP,NASDDARK,IEX,WEDBUSH,SUMMER,WINSLOW,FINRA,LIQITG,UBSDARK,BTIG,VIRTU,JEFF,OPCO,COWEN,DBK,JPMC,EDGX,JANE,NEEDHAM,FRACSHARE,RBCALGO,VIRTUDP,BAYCREST,FOXRIVER,MND,NITEEXST,PEARL,GSDARK,NITERTL,NYSENAT,IEXMID,HRT,FLOWTRADE,HRTDP,JANELP,PEAK6,CTDLZERO,HRTMID,JANEZERO,HRTEXST,IMCLP,LTSE,SOCGENDP,MEMX,INTELCROS,VIRTUBYIN,JUMPTRADE,NITEZERO,TPLUS1,XTXEXST,XTXDP,XTXMID,COWENLP,BARCDP,JUMPLP,OLDMCLP,RBCCMALP,WALLBETH,IBEOS,JONES,GSLP,BLUEOCEAN,USIBSILP,OVERNIGHT,JANEMID,IBATSEOS,HRTZERO,VIRTUALGO,G1XLP,VIRTUMID,GLOBALXLP,CTDLMID,TPLUS0",
    "assetClass": "STK",
    "avgCost": 144.46141,
    "avgPrice": 144.46141,
    "chineseName": "&#x56FD;&#x9645;&#x5546;&#x4E1A;&#x673A;&#x5668;",
    "conExchMap": [],
    "conid": 8314,
    "contractDesc": "IBM",
    "countryCode": "US",
    "currency": "USD",
    "displayRule": {
      "displayRuleStep": [
        {
          "decimalDigits": 2,
          "lowerEdge": 0,
          "wholeDigits": 4
        }
      ],
      "magnification": 0
    },
    "exchs": null,
    "exerciseStyle": null,
    "expiry": null,
    "fullName": "IBM",
    "group": "Computers",
    "hasOptions": true,
    "incrementRules": [
      {
        "increment": 0.01,
        "lowerEdge": 0
      }
    ],
    "isEventContract": false,
    "isUS": true,
    "listingExchange": "NYSE",
    "mktPrice": 185.17599485,
    "mktValue": 261468.5,
    "model": "",
    "multiplier": 0,
    "name": "INTL BUSINESS MACHINES CORP",
    "pageSize": 100,
    "position": 1412,
    "realizedPnl": 0,
    "sector": "Technology",
    "sectorGroup": "Computer Services",
    "strike": "0",
    "ticker": "IBM",
    "time": 38,
    "type": "COMMON",
    "undConid": 0,
    "unrealizedPnl": 57488.99
  }
]
```

**SDK Code**

```go individualPositionStk
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/DU123456/position/265598"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby individualPositionStk
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java individualPositionStk
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php individualPositionStk
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/DU123456/position/265598', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift individualPositionStk
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/DU123456/position/265598")! as URL,
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

### individualPositionWithNoSecDef

**Response**

```json
[
  {
    "acctId": "DU123456",
    "assetClass": "OPT",
    "avgCost": 4229.1637,
    "avgPrice": 42.291637,
    "conExchMap": [],
    "conid": 580947749,
    "contractDesc": "META JUN2024 330 P [META 240621P00330000 100]",
    "currency": "USD",
    "exchs": null,
    "exerciseStyle": null,
    "expiry": null,
    "mktPrice": 0.7800926,
    "mktValue": -78.01,
    "model": "",
    "position": -1,
    "realizedPnl": 0,
    "strike": "0",
    "undConid": 0,
    "unrealizedPnl": 4151.15
  }
]
```

**SDK Code**

```go individualPositionWithNoSecDef
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/DU123456/position/265598"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby individualPositionWithNoSecDef
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java individualPositionWithNoSecDef
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/DU123456/position/265598")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php individualPositionWithNoSecDef
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/DU123456/position/265598', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift individualPositionWithNoSecDef
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/DU123456/position/265598")! as URL,
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
