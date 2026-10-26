[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-info)

# Instrument Attributes Detail

GET https://localhost:5000/v1/api/iserver/secdef/info

Returns the attributes of the instrument.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-contract-info

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conid` (string, optional)
- `sectype` (any, optional)
- `month` (any, optional)
- `exchange` (any, optional)
- `strike` (any, optional)
- `right` (enum, optional) — Set the right for the given contract. * `C` - for Call options. * `P` - for Put options.
  - Allowed values: `C`, `P`
- `issuerId` (string, optional)
- `filters` (any, optional)

## Response

### 200

Successful response containing a contract's security definition.

- `conid` (long, optional) — Contract Identifier of the given contract.
- `ticker` (string, optional) — Ticker symbol for the given contract
- `secType` (string, optional) — Security type for the given contract.
- `listingExchange` (string, optional) — Primary listing exchange for the given contract.
- `exchange` (string, optional) — Exchange requesting data for.
- `companyName` (string, optional) — Name of the company for the given contract.
- `currency` (string, optional) — Traded currency allowed for the given contract.
- `validExchanges` (string, optional) — Series of all valid exchanges the contract can be traded on in a single comma-separated string.
- `priceRendering` (string, optional, nullable)
- `maturityDate` (string, optional, nullable) — Date of expiration for the given contract.
- `right` (enum, optional) — Set the right for the given contract. * `C` - for Call options. * `P` - for Put options.
  - Allowed values: `P`, `C`
- `strike` (double, optional) — Returns the given strike value for the given contract.

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

## Examples

**Response**

```json
{
  "conid": 8314,
  "ticker": "IBM",
  "secType": "STK",
  "listingExchange": "NYSE",
  "exchange": "SMART",
  "companyName": "INTL BUSINESS MACHINES CORP",
  "currency": "USD",
  "validExchanges": "SMART,AMEX,NYSE,CBOE,PHLX,ISE,CHX,ARCA,NASDAQ,DRCTEDGE,BEX,BATS,EDGEA,BYX,NYSEDARK,NASDDARK,IEX,EDGX,FOXRIVER,PEARL,NYSENAT,IEXMID,JANELP,IMCLP,LTSE,MEMX,JUMPLP,OLDMCLP,RBCCMALP,IBEOS,GSLP,BLUEOCEAN,OVERNIGHT,JANEMID,G1XLP,PSX",
  "priceRendering": null,
  "maturityDate": null,
  "right": "P",
  "strike": 0
}
```

**SDK Code**

```javascript infoBy-symbol-exchange-conid
const url = 'https://localhost:5000/v1/api/iserver/secdef/info';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go infoBy-symbol-exchange-conid
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/secdef/info"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby infoBy-symbol-exchange-conid
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/secdef/info")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php infoBy-symbol-exchange-conid
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/secdef/info', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift infoBy-symbol-exchange-conid
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/secdef/info")! as URL,
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
