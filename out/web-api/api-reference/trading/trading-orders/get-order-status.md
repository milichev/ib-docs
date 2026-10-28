[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-orders/get-order-status)

# Status Of A Single Order

GET https://localhost:5000/v1/api/iserver/account/order/status/{orderId}

Retrieve the status of a single order. Only displays orders from the current brokerage session. If orders executed on a previous day or session, queries will 503 error.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/get-order-status

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `orderId` (string, required)

## Response

### 200

order status

- `Trading Orders_getOrderStatus_Response_200`
  - orderStatus: orderStatus

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

### orderStatus

Object containing information about the status of an order ticket.

- `sub_type` (string, optional, nullable) — Internal use only.
- `request_id` (string, optional) — Internal use only. IB-assigned identifier for the status request.
- `server_id` (string, optional) — IB-assigned meta-identifier used to associate rejected and resubmitted orders following Server Prompts.
- `order_id` (long, optional) — The IB-assigned order identifier of the order, as provided in the request path.
- `conidex` (string, optional) — Contract ID and routing destination in format 123456@EXCHANGE.
- `conid` (long, optional) — Contract ID of the order's instrument.
- `symbol` (string, optional) — Symbol of the order ticket's instrument.
- `side` (enum, optional) — Side of the order ticket.
  - Allowed values: `BUY`, `SELL`
- `contract_description_1` (string, optional) — Human-readable description of the order's instrument.
- `listing_exchange` (string, optional) — Primary listing exchange of the order ticket's instrument.
- `option_acct` (string, optional) — Internal use only.
- `company_name` (string, optional) — Name of the company or asset associated with the instrument.
- `size` (string, optional) — Remaining unfilled size of the order ticket. Will reflect 0.0 if order is filled in full, cancelled, or otherwise resolved and no longer working.
- `total_size` (string, optional) — The total size of the order ticket.
- `currency` (string, optional) — The currency in which the instrument trades and executions are conducted.
- `account` (string, optional) — The account receiving executions against this order ticket.
- `order_type` (string, optional) — The order's IB order type.
- `cum_fill` (string, optional) — Cumulative filled quantity of the instrument against the order ticket.
- `order_status` (enum, optional) — Status of the order ticket.
  - Allowed values: `Inactive`, `PendingSubmit`, `PreSubmitted`, `Submitted`, `Filled`, `PendingCancel`, `Cancelled`, `WarnState`
- `order_ccp_status` (string, optional) — IB internal order status.
- `order_status_description` (string, optional) — Human-readable rendering of the order's status meant for presentation in UI.
- `tif` (enum, optional) — Time in force of the order ticket.
  - Allowed values: `DAY`, `IOC`, `GTC`, `OPG`, `PAX`
- `fgColor` (string, optional) — Internal use. IB's UI foreground color in hex.
- `bgColor` (string, optional) — Internal use. IB's UI background color in hex.
- `order_not_editable` (boolean, optional) — Indicates whether the order ticket can be modified.
- `editable_fields` (string, optional) — Indicates which fields of the order ticket can be modified currently.
- `cannot_cancel_order` (boolean, optional) — Indicates whether the order ticket can be cancelled.
- `deactivate_order` (boolean, optional) — Indicates whether the order ticket can be deactivated.
- `sec_type` (enum, optional) — IB asset class identifier.
  - Allowed values: `STK`, `OPT`, `FUT`, `FOP`, `CASH`, `CRYPTO`, `BOND`, `WAR`, `FUND`
- `available_chart_periods` (string, optional) — Internal use. Indicates chart periods available for the instrument.
- `order_description` (string, optional) — Human-readable description of the status or current result of the order ticket, meant for UI presentation.
- `order_description_with_contract` (string, optional) — Human-readable description of the status or current result of the order ticket, meant for UI presentation. Includes instrument name.
- `alert_active` (enum, optional) — Indicates that an alert is active for the order ticket.
  - Allowed values: `0`, `1`
- `child_order_type` (enum, optional) — Indicates if the order ticket is hedged, and if so, in what way. 0 = No hedge, A = Attached child hedge order, B = Beta/portfolio hedge
  - Allowed values: `0`, `A`, `B`
- `order_clearing_account` (string, optional) — The IB account to which the order ticket clears.
- `size_and_fills` (string, optional) — A string reflecting the cumulative fills and total size of the order.
- `exit_strategy_display_price` (string, optional) — Internal use. The UI-displayed price associated with a Client Portal exist strategy.
- `exit_strategy_chart_description` (string, optional) — Internal use. A string describing an active Client Portal exit strategy, or the result of its execution.
- `average_price` (string, optional) — Average price of fills against the order, if any.
- `exit_strategy_tool_availability` (string, optional) — Internal use. Indicates the availability of Client Portal exit strategy tool for the order.
- `allowed_duplicate_opposite` (boolean, optional) — Indicates whether an identical order on the opposite side can be placed.
- `order_time` (string, optional) — Time of the order's submission in format YYMMDDhhmmss.

## Examples

**Response**

```json
{
  "account": "U1234567",
  "alert_active": 1,
  "allowed_duplicate_opposite": true,
  "available_chart_periods": "#R|1",
  "average_price": "192.26",
  "bg_color": "#000000",
  "cannot_cancel_order": true,
  "child_order_type": "0",
  "company_name": "APPLE INC",
  "conid": 265598,
  "conidex": "265598",
  "contract_description_1": "AAPL",
  "cum_fill": "5.0",
  "currency": "USD",
  "deactivate_order": false,
  "editable_fields": "",
  "exit_strategy_chart_description": "Sold 5 @ 192.26",
  "exit_strategy_display_price": "193.12",
  "exit_strategy_tool_availability": "1",
  "fg_color": "#FFFFFF",
  "listing_exchange": "NASDAQ.NMS",
  "option_acct": "c",
  "order_ccp_status": "2",
  "order_clearing_account": "U1234567",
  "order_description": "Sold 5 Market, Day",
  "order_description_with_contract": "Sold 5 AAPL Market, Day",
  "order_id": 1799796559,
  "order_not_editable": true,
  "order_status": "Filled",
  "order_status_description": "Order Filled",
  "order_time": "231211180049",
  "order_type": "MARKET",
  "request_id": "209",
  "sec_type": "STK",
  "server_id": "0",
  "side": "BUY",
  "size": "0.0",
  "size_and_fills": "5",
  "sub_type": null,
  "symbol": "AAPL",
  "tif": "DAY",
  "total_size": "5.0"
}
```

**SDK Code**

```go orderStatusExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/order/status/1799796559"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby orderStatusExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/order/status/1799796559")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java orderStatusExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/order/status/1799796559")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php orderStatusExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/order/status/1799796559', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift orderStatusExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/order/status/1799796559")! as URL,
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
