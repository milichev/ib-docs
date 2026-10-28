[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio/get-many-subaccounts)

# Portfolio Subaccounts (Large Account Structures)

GET https://localhost:5000/v1/api/portfolio/subaccounts2

Used in tiered account structures (such as Financial Advisor and IBroker Accounts) to return a list of sub-accounts, paginated up to 1000 accounts per page, for which the user can view position and account-related information.  This endpoint must be called prior to calling other /portfolio endpoints for those sub-accounts. If you have less than 100 sub-accounts use /portfolio/subaccounts.  To query a list of accounts the user can trade, see /iserver/accounts.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-many-subaccounts

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Query parameters

- `nocache` (boolean, optional, default: false)
- `page` (long, optional)
- `pageSize` (long, optional, default: 20)

## Response

### 200

response with subaccount definitions

- `metadata` (Subaccounts2ResponseMetadata, optional) — Metadata container describing the subaccounts.
- `subaccounts` (list of accountAttributes, optional) — List containing all subaccounts of the account structure.

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

### Subaccounts2ResponseMetadata

Metadata container describing the subaccounts.

- `pageNum` (long, optional) — The active page number.
- `pageSize` (long, optional) — Items contained in the returning page.
- `total` (long, optional) — The total number of accounts returned for the page.

### accountAttributes

- `PrepaidCrypto-P` (boolean, optional) — Indicates whether account has a prepaid crypto segment (Crypto Plus) with PAXOS.
- `PrepaidCrypto-Z` (boolean, optional) — Indicates whether account has a prepaid crypto segment (Crypto Plus) with ZEROHASH.
- `accountAlias` (string, optional, nullable) — User-defined alias assigned to the account for easy identification.
- `accountId` (string, optional) — Indicates the identifying number for the account.
- `accountStatus` (long, optional) — Unix epoch timestamp of account opening.
- `accountTitle` (string, optional) — A name assigned to the account, typically the account holder name or business entity.
- `accountVan` (string, optional) — The account's virtual account number, or otherwise its IB accountId if no VAN is set.
- `acctCustType` (string, optional) — Identifies the type of client with which the account is associated, such as an individual or LLC.
- `brokerageAccess` (boolean, optional) — Indicates whether account can receive live orders (do not mix with paper trading).
- `businessType` (enum, optional) — A descriptor of the nature of the account, reflecting the responsible group within IB.
  - Allowed values: `IB_SALES`, `IB_PROSERVE`, `FA`, `FA_CLIENT`, `INTR_BROK`, `INTR_BROK_CLIENT`, `FD_CLIENT`, `INSTITUTIONAL`, `IB_DEVELOPERS`
- `category` (string, optional) — Designated account category. Only used in non-standard account structures.
- `clearingStatus` (enum, optional) — Status of the account with respect to clearing at IB. O is open, P pending, N new, A abandoned, C closed, R rejected.
  - Allowed values: `A`, `N`, `O`, `C`, `P`, `R`, `E`, `Q`
- `covestor` (boolean, optional) — Indicates a Covestor account.
- `currency` (enum, optional) — Base currency of the account.
  - Allowed values: `AED`, `AUD`, `CAD`, `CHF`, `CNH`, `CZK`, `DKK`, `EUR`, `GBP`, `HKD`, `HUF`, `ILS`, `JPY`, `MXN`, `NOK`, `NZD`, `PLN`, `SEK`, `SGD`, `USD`
- `desc` (string, optional) — Internal human-readable description of the account.
- `displayName` (string, optional) — Displayed name of the account in UI. Will reflect either the accountId or accountAlias, if set.
- `faClient` (boolean, optional) — Indicates that the account is managed by a financial advisor.
- `ibEntity` (enum, optional) — IB business entity under which the account resides.
  - Allowed values: `IBLLC-US`, `IB-CAN`, `IB-UK`, `IB-IE`, `IB-AU`, `IB-HK`, `IB-IN`, `IB-JP`, `IB-SG`
- `id` (string, optional) — The account's IB accountId.
- `noClientTrading` (boolean, optional) — Indicates that trading by the client is disabled in the account.
- `parent` (AccountAttributesParent, optional) — Describes account relations in partitioned or multiplexed (segemented) account structures.
- `trackVirtualFXPortfolio` (boolean, optional) — Indicates that virtual forex positions are tracked in the account.
- `tradingType` (enum, optional) — Internal identifier used by IB to reflect the trading permissions of the account.
  - Allowed values: `IRAMRGN`, `FUTNOPT`, `GPMRGN`, `PMRGN`, `STKCASH`, `STKMRGN`, `STKNOPT`
- `type` (enum, optional) — Indicates whether the account exists in production, paper, or demo environments.
  - Allowed values: `DEMO`, `DEMO-BROKER`, `DEMO-ADVISOR`, `FNF`, `INDIVIDUAL`, `COMPANY`, `STL`, `UTMA`, `PRO-ADV`, `IRA`, `TRUST`

### AccountAttributesParent

Describes account relations in partitioned or multiplexed (segemented) account structures.

- `accountId` (string, optional) — Account ID of the parent account in a multiplex account structure.
- `isMChild` (boolean, optional) — Indicates that the given account is a multiplex child account.
- `isMParent` (boolean, optional) — Indicates that the given account is itself a multiplex parent account.
- `isMultiplex` (boolean, optional) — Indicates that the account is a multiplex account.
- `mmc` (list of any, optional) — Money manager client.

## Examples

**Response**

```json
{
  "metadata": {
    "pageNum": 0,
    "pageSize": 20,
    "total": 1
  },
  "subaccounts": [
    {
      "PrepaidCrypto-P": false,
      "PrepaidCrypto-Z": false,
      "accountAlias": "None",
      "accountId": "U1234567",
      "accountStatus": 1644814800000,
      "accountTitle": "",
      "accountVan": "U1234567",
      "acctCustType": "LLC",
      "brokerageAccess": false,
      "businessType": "IB_PROSERVE",
      "category": "",
      "clearingStatus": "O",
      "covestor": false,
      "currency": "USD",
      "desc": "U1234567",
      "displayName": "U1234567",
      "ibEntity": "IBLLC-US",
      "id": "U1234567",
      "noClientTrading": false,
      "parent": {
        "accountId": "",
        "isMChild": false,
        "isMParent": false,
        "isMultiplex": false,
        "mmc": []
      },
      "trackVirtualFXPortfolio": true,
      "tradingType": "PMRGN",
      "type": "DEMO",
      "faclient": false
    }
  ]
}
```

**SDK Code**

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/subaccounts2"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

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

url = URI("https://localhost:5000/v1/api/portfolio/subaccounts2")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/portfolio/subaccounts2")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/subaccounts2', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/subaccounts2")! as URL,
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
