[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-trading-schedule)

# Trading Schedule By Symbol

GET https://localhost:5000/v1/api/trsrv/secdef/schedule

Returns the trading schedule up to a month for the requested contract.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-trading-schedule

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `assetClass` (enum, required) — Specify the security type of the given contract. Valid asset classes are: * `STK` - Stock * `OPT` - Option * `FUT` - Future * `CFD` - Contract for Difference * `WAR` - Warrant * `SWP` - Forex * `FND` - Mutual Fund * `BND` - Bond * `ICS` - Inter-Commodity Spread
  - Allowed values: `STK`, `OPT`, `FUT`, `CFD`, `WAR`, `SWP`, `FND`, `BND`, `ICS`
- `symbol` (string, required)
- `exchange` (string, optional)
- `exchangeFilter` (string, optional)

## Response

### 200

Returns the trading schedule up to a month for the requested contract.

- `list of TradingScheduleItems`

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

### TradingScheduleItems

- `id` (string, optional) — Exchange parameter id
- `tradeVenueId` (string, optional) — Reference on a trade venue of given exchange parameter
- `exchange` (string, optional) — short exchange name
- `description` (string, optional) — exchange description
- `timezone` (string, optional) — References the time zone corresponding to the listed dates and times.
- `schedules` (list of TradingScheduleItemsSchedulesItems, optional) — Always contains at least one 'tradingTime' and zero or more 'sessionTime' tags

### TradingScheduleItemsSchedulesItems

- `clearingCycleEndTime` (string, optional) — End time of clearing cycle.
- `tradingScheduleDate` (string, optional) — Date of the clearing schedule. 20000101 stands for any Sat, 20000102 stands for any Sun, … 20000107 stands for any Fri. Any other date stands for itself.
- `sessions` (list of TradingScheduleItemsSchedulesItemsSessionsItems, optional) — Lists the avialble trading sessions. This displays the regular trading hours. If the LIQUID hours differs from the total trading day then a separate 'session' tag is returned.
- `tradingTimes` (list of TradingScheduleItemsSchedulesItemsTradingTimesItems, optional) — Object containing trading times.

### TradingScheduleItemsSchedulesItemsSessionsItems

- `openingTime` (string, optional) — Opening date time of the session.
- `closingTime` (string, optional) — Closing date time of the sesion.
- `prop` (string, optional) — If the whole trading day is considered LIQUID then the value 'LIQUID' is returned.

### TradingScheduleItemsSchedulesItemsTradingTimesItems

- `openingTime` (string, optional) — Opening time of the trading day.
- `closingTime` (string, optional) — Closing time of the trading day.
- `prop` (string, optional)
- `cancelDayOrders` (string, optional) — Cancel time for day orders.

## Examples

**Response**

```json
[
  {
    "id": "p101781",
    "tradeVenueId": "v13038",
    "exchange": "NYSE",
    "description": "New York Stock Exchange",
    "timezone": "America/New_York",
    "schedules": [
      {
        "clearingCycleEndTime": "0000",
        "tradingScheduleDate": "20000101",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035"
          }
        ]
      },
      {
        "clearingCycleEndTime": "0000",
        "tradingScheduleDate": "20000102",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035"
          }
        ]
      },
      {
        "clearingCycleEndTime": "1700",
        "tradingScheduleDate": "20000103",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035",
            "prop": "LIQUID"
          }
        ]
      },
      {
        "clearingCycleEndTime": "1700",
        "tradingScheduleDate": "20000104",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035",
            "prop": "LIQUID"
          }
        ]
      },
      {
        "clearingCycleEndTime": "1700",
        "tradingScheduleDate": "20000105",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035",
            "prop": "LIQUID"
          }
        ]
      },
      {
        "clearingCycleEndTime": "1700",
        "tradingScheduleDate": "20000106",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035",
            "prop": "LIQUID"
          }
        ]
      },
      {
        "clearingCycleEndTime": "1700",
        "tradingScheduleDate": "20000107",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035",
            "prop": "LIQUID"
          }
        ]
      },
      {
        "clearingCycleEndTime": "0000",
        "tradingScheduleDate": "20240329",
        "sessions": [],
        "tradingtimes": [
          {
            "cancelDayOrders": "Y",
            "closingTime": "2330",
            "openingTime": "0035"
          }
        ]
      }
    ]
  }
]
```

**SDK Code**

```javascript ibm-nyse
const url = 'https://localhost:5000/v1/api/trsrv/secdef/schedule?assetClass=STK&symbol=AAPL';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go ibm-nyse
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/trsrv/secdef/schedule?assetClass=STK&symbol=AAPL"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby ibm-nyse
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/trsrv/secdef/schedule?assetClass=STK&symbol=AAPL")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php ibm-nyse
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/trsrv/secdef/schedule?assetClass=STK&symbol=AAPL', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift ibm-nyse
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/trsrv/secdef/schedule?assetClass=STK&symbol=AAPL")! as URL,
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
