[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-symbols)

# Search Instruments By Symbol

GET https://localhost:5000/v1/api/iserver/secdef/search

Returns a list of contracts based on the search symbol provided as a query param.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-symbols

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `symbol` (string, optional)
- `secType` (enum, optional, default: STK) — Available underlying security types: * `STK` - Represents an underlying as a Stock security type. * `IND` - Represents an underlying as an Index security type. * `BOND` - Represents an underlying as a Bond security type.
  - Allowed values: `STK`, `IND`, `BOND`
- `name` (boolean, optional)
- `more` (boolean, optional)
- `fund` (boolean, optional)
- `fundFamilyConidEx` (string, optional)
- `pattern` (boolean, optional)
- `referrer` (string, optional)

## Response

### 200

An array of objects detailing contract information.

- `list of SecdefSearchResponseItems`

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

### SecdefSearchResponseItems

- `bondid` (long, optional) — applicable for bonds
- `conid` (string, optional) — Contract identifier for the unique contract.
- `companyHeader` (string, optional) — Company Name - Exchange
- `companyName` (string, optional, nullable) — Formal name of the company.
- `symbol` (string, optional) — Underlying ticker symbol.
- `description` (string, optional) — Primary exchange of the contract
- `restricted` (boolean, optional, nullable) — Returns if the contract is available for trading.
- `fop` (string, optional, nullable) — Returns a string of dates, separated by semicolons.
- `opt` (string, optional, nullable) — Returns a string of dates, separated by semicolons.
- `war` (string, optional, nullable) — Returns a string of dates, separated by semicolons.
- `sections` (list of SecdefSearchResponseItemsSectionsItems, optional)
- `issuers` (list of SecdefSearchResponseItemsIssuersItems, optional)

### SecdefSearchResponseItemsSectionsItems

- `secType` (string, optional)
- `months` (string, optional) — semicolon separated list of months
- `exchange` (string, optional) — semicolon separated list of exchanges

### SecdefSearchResponseItemsIssuersItems

- `id` (string, optional)
- `name` (string, optional)

## Examples

**Response**

```json
[
  {
    "conid": "8314",
    "companyHeader": "INTL BUSINESS MACHINES CORP - NYSE",
    "companyName": "INTL BUSINESS MACHINES CORP",
    "symbol": "IBM",
    "description": "NYSE",
    "restricted": null,
    "fop": null,
    "opt": "20240315;20240322;20240328;20240405;20240412;20240419;20240426;20240517;20240621;20240719;20240920;20241018;20250117;20250620;20260116",
    "war": "20240208;20240213;20240214;20240215;20240216;20240222;20240226;20240227;20240228;20240229;20240301;20240304;20240305;20240306;20240307;20240308;20240311;20240312;20240313;20240314;20240315;20240416;20240418;20240514;20240516;20240618;20240619;20240620;20240621;20240718;20240917;20240918;20240919;20240920;20241017;20241217;20241218;20241219;20241220;20250114;20250115;20250116;20250117;20250319;20250320;20250617;20250618;20250619;20250620;20250918;20251216;20251218;20260113;20260115",
    "sections": [
      {
        "secType": "STK"
      },
      {
        "secType": "OPT",
        "months": "MAR24;APR24;MAY24;JUN24;JUL24;SEP24;OCT24;JAN25;JUN25;JAN26",
        "exchange": "SMART;AMEX;BATS;BOX;CBOE;CBOE2;EDGX;EMERALD;GEMINI;IBUSOPT;ISE;MEMX;MERCURY;MIAX;NASDAQBX;NASDAQOM;PEARL;PHLX;PSE"
      },
      {
        "secType": "WAR",
        "months": "FEB24;MAR24;APR24;MAY24;JUN24;JUL24;SEP24;OCT24;DEC24;JAN25;MAR25;JUN25;SEP25;DEC25;JAN26",
        "exchange": "EBS;FWB;GETTEX;SBF;SWB"
      },
      {
        "secType": "IOPT"
      },
      {
        "secType": "CFD",
        "exchange": "SMART",
        "conid": "118239202"
      },
      {
        "secType": "BAG"
      }
    ]
  },
  {
    "conid": "41645598",
    "companyHeader": "INTL BUSINESS MACHINES CORP - LSE",
    "companyName": "INTL BUSINESS MACHINES CORP",
    "symbol": "IBM",
    "description": "LSE",
    "restricted": null,
    "fop": null,
    "opt": null,
    "war": null,
    "sections": [
      {
        "secType": "STK"
      }
    ]
  },
  {
    "bondid": 5,
    "conid": "2147483647",
    "companyHeader": "Corporate Fixed Income",
    "companyName": null,
    "restricted": null,
    "fop": null,
    "opt": null,
    "war": null,
    "sections": [
      {
        "secType": "BOND"
      }
    ],
    "issuers": [
      {
        "id": "e5499005",
        "name": "IBM International Capital Pte Ltd"
      },
      {
        "id": "e1580374",
        "name": "IBM-CALL"
      },
      {
        "id": "e1400789",
        "name": "International Business Machines Corp"
      },
      {
        "id": "e1658116",
        "name": "Truven Health Analytics Inc"
      }
    ]
  }
]
```

**SDK Code**

```go found
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/secdef/search"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby found
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/secdef/search")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java found
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/secdef/search")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php found
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/secdef/search', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift found
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/secdef/search")! as URL,
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
