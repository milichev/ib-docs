[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-orders/get-trade-history)

# Trade History

GET https://localhost:5000/v1/api/iserver/account/trades

Retrieve a list of trades, up to a maximum of 7 days prior.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/get-trade-history

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `days` (long, optional) — The number of prior days prior to include in response, up to a maximum of 7. If omitted, only the current day's executions will be returned.

## Response

### 200

trades

- `list of TradesResponseItems`

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

### TradesResponseItems

Object containing details of a single execution.

- `execution_id` (string, optional) — IB-assigned execution identifier.
- `symbol` (string, optional) — Symbol of the instrument involved in the execution.
- `supports_tax_opt` (enum, optional) — Indicates whether the order is supported by IB's Tax Optimization tool.
  - Allowed values: `0`, `1`
- `side` (enum, optional) — Side of the execution. * `"B"`: Buy * `"S"`: Sell * `"N"`: Net - Shares netted from trading Event Contracts. * `"X"`: Expiration - Event Contract expired. * `"L"` : Lapse * `"A"` : Assigned * `"F"` : Fund exchange * `"E"` : Exercise * `"U"` : Automated Exercise
  - Allowed values: `B`, `S`, `N`, `X`, `L`, `A`, `F`, `E`, `U`
- `order_description` (string, optional) — Human-readable description of the outcome of the execution.
- `trade_time` (string, optional) — UTC date and time of the execution in format YYYYMMDD-hh:mm:ss.
- `trade_time_r` (long, optional) — Unix timestamp of the execution time in milliseconds.
- `size` (double, optional) — The size of the execution in units of the instrument.
- `price` (string, optional) — The price at which the execution occurred.
- `order_ref` (string, optional) — The client-provided customer order identifier. Specified via cOID during order submission in the Web API.
- `submitter` (string, optional) — The IB username that originated the order ticket against which the execution occurred.
- `exchange` (string, optional) — The exchange or other venue on which the execution occurred.
- `commission` (string, optional) — Commissions incurred by the execution. May also include
- `net_amount` (double, optional) — net_amount
- `account` (string, optional) — The IB account ID of the account that received the execution.
- `accountCode` (string, optional) — The IB account ID of the account that received the execution.
- `account_allocation_name` (string, optional) — The IB account ID of the account that received the execution.
- `company_name` (string, optional) — Name of business associated with instrument, or otherwise description of instrument.
- `contract_description_1` (string, optional) — Human-readable description of the order's instrument.
- `sec_type` (enum, optional) — IB asset class identifier.
  - Allowed values: `STK`, `OPT`, `FUT`, `FOP`, `CASH`, `CRYPTO`, `BOND`, `WAR`, `FUND`
- `listing_exchange` (string, optional) — The primary exchange on which the instrument is listed.
- `conid` (string, optional) — Contract ID of the order's instrument.
- `conidEx` (string, optional) — Contract ID and routing destination in format 123456@EXCHANGE.
- `clearing_id` (string, optional) — Identifier of the firm clearing the trade. Value is "IB" if account is cleared by Interactive Brokers.
- `clearing_name` (string, optional) — Name of the firm clearing the trade. Value is "IB" if account is cleared by Interactive Brokers.
- `liquidation_trade` (enum, optional) — Indicates whether the trade is the result of a liquidiation by IB.
  - Allowed values: `0`, `1`
- `is_event_trading` (enum, optional) — Indicates whether the order ticket is an Event Trading order.
  - Allowed values: `0`, `1`
- `order_id` (long, optional) — Order ID

## Examples

**Response**

```json
[
  {
    "execution_id": "0000e0d5.6576fd38.01.01",
    "symbol": "AAPL",
    "supports_tax_opt": "1",
    "side": "S",
    "order_description": "Sold 5 @ 192.26 on ISLAND",
    "trade_time": "20231211-18:00:49",
    "trade_time_r": 1702317649000,
    "size": 5,
    "price": "192.26",
    "order_ref": "Order123",
    "submitter": "user1234",
    "exchange": "ISLAND",
    "commission": "1.01",
    "net_amount": 961.3,
    "account": "U1234567",
    "accountCode": "U1234567",
    "account_allocation_name": "U1234567",
    "company_name": "APPLE INC",
    "contract_description_1": "AAPL",
    "sec_type": "STK",
    "listing_exchange": "NASDAQ.NMS",
    "conid": "265598",
    "conidEx": "265598",
    "clearing_id": "IB",
    "clearing_name": "IB",
    "liquidation_trade": "0",
    "is_event_trading": "0",
    "order_id": 17437897932
  }
]
```

**SDK Code**

```javascript tradesResponseExample
const url = 'https://localhost:5000/v1/api/iserver/account/trades';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go tradesResponseExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/trades"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby tradesResponseExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/trades")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php tradesResponseExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/trades', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift tradesResponseExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/trades")! as URL,
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
