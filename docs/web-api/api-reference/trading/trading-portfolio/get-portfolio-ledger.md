[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio/get-portfolio-ledger)

# Account Ledger

GET https://localhost:5000/v1/api/portfolio/{accountId}/ledger

Get the given account's ledger data detailing its balances by currency.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio/get-portfolio-ledger

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

- `model` (string, optional)

## Response

### 200

ledger

- `map from string to Ledger`

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

### Ledger

Object describing the account's balances in its base currency, by asset class and account segments. Will be duplicated by another object in response bearing the currency's name.

- `acctcode` (string, optional) — The Account ID of the requested account.
- `cashbalance` (double, optional) — The given account's cash balance in this currency.
- `cashbalancefxsegment` (double, optional) — The given account's cash balance in its dedicated forex segment in this currency, if applicable.
- `commoditymarketvalue` (double, optional) — Market value of the given account's commodity positions in this currency.
- `corporatebondsmarketvalue` (double, optional) — Market value of the given account's corporate bond positions in this currency.
- `currency` (string, optional) — Three-letter name of the currency reflected by this object, or 'BASE' for the account's base currency.
- `dividends` (double, optional) — The given account's receivable (not yet disbursed) dividend balance in this currency.
- `exchangerate` (long, optional) — Exchange rate of this currency relative to the account's base currency.
- `funds` (double, optional) — The value of the given account's mutual fund holdings in this currency.
- `futuremarketvalue` (double, optional) — Market value of the given account's futures positions in this currency.
- `futureoptionmarketvalue` (double, optional) — Market value of the given account's futures options positions in this currency.
- `futuresonlypnl` (double, optional) — PnL of the given account's futures positions in this currency.
- `interest` (double, optional) — The given account's receivable interest balance in this currency.
- `issueroptionsmarketvalue` (double, optional) — Market value of the given account's issuer options positions in this currency.
- `key` (enum, optional) — Identifies the nature of data. Always takes values 'LedgerList'.
  - Allowed values: `LedgerList`
- `moneyfunds` (double, optional) — The value of the given account's money market fund holdings in this currency.
- `netliquidationvalue` (double, optional) — The given account's net liquidation value of positions in this currency.
- `realizedpnl` (double, optional) — The given account's realized PnL for positions in this currency.
- `secondkey` (string, optional) — Additional identifier of the currency reflected in this object. Always matches 'currency' field.
- `sessionid` (long, optional)
- `settledcash` (double, optional) — The given account's settled cash balance in this currency.
- `severity` (long, optional)
- `stockmarketvalue` (double, optional) — Market value of the given account's stock positions in this currency.
- `stockoptionmarketvalue` (double, optional) — Market value of the given account's stock options positions in this currency.
- `tbillsmarketvalue` (double, optional) — Market value of the given account's treasury bill positions in this currency.
- `tbondsmarketvalue` (double, optional) — Market value of the given account's treasury bond positions in this currency.
- `timestamp` (long, optional) — Timestamp of retrievable of this account ledger data.
- `unrealizedpnl` (double, optional) — The given account's unrealied PnL for positions in this currency.
- `warrantsmarketvalue` (double, optional) — Market value of the given account's warrant positions in this currency.

## Examples

**Response**

```json
{
  "AUD": {
    "acctcode": "DU5240685",
    "cashbalance": 223911.11,
    "cashbalancefxsegment": 0,
    "commoditymarketvalue": 0,
    "corporatebondsmarketvalue": 0,
    "currency": "AUD",
    "dividends": 0,
    "exchangerate": 0.650378,
    "funds": 0,
    "futuremarketvalue": 0,
    "futureoptionmarketvalue": 0,
    "futuresonlypnl": 0,
    "interest": 83.04,
    "issueroptionsmarketvalue": 0,
    "key": "LedgerList",
    "moneyfunds": 0,
    "netliquidationvalue": 223994.16,
    "realizedpnl": 0,
    "secondkey": "AUD",
    "sessionid": 1,
    "settledcash": 223911.11,
    "severity": 0,
    "stockmarketvalue": 0,
    "stockoptionmarketvalue": 0,
    "tbillsmarketvalue": 0,
    "tbondsmarketvalue": 0,
    "timestamp": 1754948718,
    "unrealizedpnl": 0,
    "warrantsmarketvalue": 0,
    "cryptocurrencyvalue": 0
  },
  "BASE": {
    "acctcode": "DU5240685",
    "cashbalance": 218093824,
    "cashbalancefxsegment": 0,
    "commoditymarketvalue": 0,
    "corporatebondsmarketvalue": 2094.11,
    "currency": "BASE",
    "dividends": 0,
    "exchangerate": 1,
    "funds": 0,
    "futuremarketvalue": 2750.1,
    "futureoptionmarketvalue": 0,
    "futuresonlypnl": 2750.1,
    "interest": 150856.48,
    "issueroptionsmarketvalue": 0,
    "key": "LedgerList",
    "moneyfunds": 0,
    "netliquidationvalue": 219449280,
    "realizedpnl": 0,
    "secondkey": "BASE",
    "sessionid": 1,
    "settledcash": 218093824,
    "severity": 0,
    "stockmarketvalue": 1202347.1,
    "stockoptionmarketvalue": 906.95,
    "tbillsmarketvalue": 0,
    "tbondsmarketvalue": 0,
    "timestamp": 1754948718,
    "unrealizedpnl": 154673.2,
    "warrantsmarketvalue": 0,
    "cryptocurrencyvalue": 0
  },
  "USD": {
    "acctcode": "DU5240685",
    "cashbalance": 213375440,
    "cashbalancefxsegment": 0,
    "commoditymarketvalue": 0,
    "corporatebondsmarketvalue": 2094.11,
    "currency": "USD",
    "dividends": 0,
    "exchangerate": 1,
    "funds": 0,
    "futuremarketvalue": 2750.1,
    "futureoptionmarketvalue": 0,
    "futuresonlypnl": 2750.1,
    "interest": 150009.97,
    "issueroptionsmarketvalue": 0,
    "key": "LedgerList",
    "moneyfunds": 0,
    "netliquidationvalue": 214730048,
    "realizedpnl": 0,
    "secondkey": "USD",
    "sessionid": 1,
    "settledcash": 213375440,
    "severity": 0,
    "stockmarketvalue": 1202347.1,
    "stockoptionmarketvalue": 906.95,
    "tbillsmarketvalue": 0,
    "tbondsmarketvalue": 0,
    "timestamp": 1754948718,
    "unrealizedpnl": 154673.2,
    "warrantsmarketvalue": 0,
    "cryptocurrencyvalue": 0,
    "endofbundle": 1
  }
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/portfolio/DU123456/ledger';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

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
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/portfolio/DU123456/ledger"

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

url = URI("https://localhost:5000/v1/api/portfolio/DU123456/ledger")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/portfolio/DU123456/ledger', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/portfolio/DU123456/ledger")! as URL,
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
