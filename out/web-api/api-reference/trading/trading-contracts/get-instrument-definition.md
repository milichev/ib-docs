[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-instrument-definition)

# Instrument Definition Detail

GET https://localhost:5000/v1/api/trsrv/secdef

Returns a list of security definitions for the given conids.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-instrument-definition

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conids` (string, required)

## Response

### 200

Successful response containing a contract's security definition.

- `secdef` (list of TrsrvSecDefResponseSecdefItems, optional)

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

### TrsrvSecDefResponseSecdefItems

- `conid` (long, optional) — The conID
- `currency` (string, optional) — The traded currency for the contract.
- `time` (long, optional) — Amount of time in ms to generate the data.
- `chineseName` (string, optional) — The Chinese characters for the symbol.
- `allExchanges` (string, optional) — A series of exchanges the given symbol can trade on.
- `listingExchange` (string, optional) — The primary or listing exchange the contract is hosted on.
- `countryCode` (string, optional) — The country code the contract is traded on.
- `name` (string, optional) — The company name.
- `assetClass` (string, optional) — The asset class or security type of the contract.
- `expiry` (string, optional, nullable) — The expiry of the contract. Returns null for non-expiry instruments.
- `lastTradingDay` (string, optional, nullable) — The last trading day of the contract.
- `group` (string, optional) — The group or industry the contract is affilated with.
- `putOrCall` (string, optional, nullable) — a Put or Call option.
- `sector` (string, optional) — The contract's sector.
- `sectorGroup` (string, optional) — The sector's group.
- `strike` (string, optional) — The strike of the contract.
- `ticker` (string, optional) — The ticker symbol of the traded contract.
- `undConid` (long, optional) — The contract's underlyer.
- `multiplier` (long, optional) — The contract multiplier.
- `type` (string, optional) — Stock type.
- `hasOptions` (boolean, optional) — contract has tradable options contracts.
- `fullName` (string, optional) — Returns symbol name for requested contract.
- `isUS` (boolean, optional) — The contract is US based or not.
- `incrementRules` (list of TrsrvSecDefResponseSecdefItemsIncrementRulesItems, optional) — Indicates increment rule values including lowerEdge and increment value.
- `displayRule` (list of TrsrvSecDefResponseSecdefItemsDisplayRuleItems, optional) — Returns rules regarding incrementation for order placement. Not functional for all exchanges. Please see /iserver/contract/rules for more accurate rule details.
- `isEventContract` (boolean, optional) — The contract is an event contract or not.
- `pageSize` (long, optional) — Returns the content size of the request.

### TrsrvSecDefResponseSecdefItemsIncrementRulesItems

- `lowerEdge` (double, optional) — If the current mark price of the instrument is at or above the lower edge, the given increment value is used for order prices.
- `increment` (double, optional) — The price of the instrument must be submitted as a mulitple of the increment value.

### TrsrvSecDefResponseSecdefItemsDisplayRuleItems

- `magnification` (long, optional) — If the displayed contract information is multiplied based on a given magnitude, the value will be reflected here.
- `displayRuleStep` (list of TrsrvSecDefResponseSecdefItemsDisplayRuleItemsDisplayRuleStepItems, optional)

### TrsrvSecDefResponseSecdefItemsDisplayRuleItemsDisplayRuleStepItems

- `decimalDigits` (long, optional) — Displays the total number of digits used after the decimal value.
- `lowerEdge` (double, optional) — The lowerEdge display value to correspond to increment rules.
- `wholeDigits` (long, optional) — Displays valid display prices for before and after the decimal value.

## Examples

**Response**

```json
{
  "secdef": [
    {
      "conid": 8314,
      "currency": "USD",
      "time": 770,
      "chineseName": "&#x56FD;&#x9645;&#x5546;&#x4E1A;&#x673A;&#x5668;",
      "allExchanges": "AMEX,NYSE,CBOE,PHLX,CHX,ARCA,ISLAND,ISE,IDEAL,NASDAQQ,REALNYSE,DRCTEDGE,BEX,BATS,NITEECN,EDGEA,CSFBALGO,PSX,BYX,ITG,PDQ,IBKRATS,NYSEFLOOR,CITADEL,NYSEDARK,MIAX,IBDARK,CITADELDP,NASDDARK,IEX,WEDBUSH,SUMMER,WINSLOW,FINRA,LIQITG,UBSDARK,BTIG,VIRTU,JEFF,OPCO,COWEN,DBK,JPMC,EDGX,JANE,NEEDHAM,FRACSHARE,RBCALGO,VIRTUDP,BAYCREST,FOXRIVER,MND,NITEEXST,PEARL,GSDARK,NITERTL,NYSENAT,IEXMID,HRT,FLOWTRADE,HRTDP,JANELP,PEAK6,CTDLZERO,HRTMID,JANEZERO,HRTEXST,IMCLP,LTSE,SOCGENDP,MEMX,INTELCROS,VIRTUBYIN,JUMPTRADE,NITEZERO,TPLUS1,XTXEXST,XTXDP,XTXMID,COWENLP,BARCDP,JUMPLP,OLDMCLP,RBCCMALP,WALLBETH,IBEOS,JONES,GSLP,BLUEOCEAN,USIBSILP,OVERNIGHT,JANEMID,IBATSEOS,HRTZERO,VIRTUALGO,G1XLP,VIRTUMID,GLOBALXLP,CTDLMID,TPLUS0",
      "listingExchange": "NYSE",
      "countryCode": "US",
      "name": "INTL BUSINESS MACHINES CORP",
      "assetClass": "STK",
      "expiry": null,
      "lastTradingDay": null,
      "group": "Computers",
      "putOrCall": null,
      "sector": "Technology",
      "sectorGroup": "Computer Services",
      "strike": "0",
      "ticker": "IBM",
      "undConid": 0,
      "multiplier": 0,
      "type": "COMMON",
      "hasOptions": true,
      "fullName": "IBM",
      "isUS": true,
      "incrementRules": [
        {
          "lowerEdge": 0,
          "increment": 0.01
        }
      ],
      "displayRule": [
        {
          "magnification": 0,
          "displayRuleStep": [
            {
              "decimalDigits": 2,
              "lowerEdge": 0,
              "wholeDigits": 4
            }
          ]
        }
      ],
      "isEventContract": false
    }
  ]
}
```

**SDK Code**

```python response
import requests

url = "https://localhost:5000/v1/api/trsrv/secdef"

querystring = {"conids":"265598,8314"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/trsrv/secdef?conids=265598%2C8314"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby response
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/trsrv/secdef?conids=265598%2C8314")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/trsrv/secdef?conids=265598%2C8314', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift response
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/trsrv/secdef?conids=265598%2C8314")! as URL,
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
