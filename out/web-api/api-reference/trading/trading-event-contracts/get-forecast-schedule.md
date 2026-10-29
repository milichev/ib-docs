[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-schedule)

# Event Contract Schedules

GET https://localhost:5000/v1/api/forecast/contract/schedules

Provides forecast trading schedules.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-event-contracts/get-forecast-schedule

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conid` (string, required)

## Response

### 200

Returns the liquid and extended trading hours of the coming and prior trading days.

- `timezone` (string, optional) — Exchange timezone of event contract.
- `trading_schedules` (list of ForecastSchedulesResponseTradingSchedulesItems, optional) — List containing trading objects for each date.

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

### ForecastSchedulesResponseTradingSchedulesItems

- `day_of_week` (string, optional) — Provides the day of the week corresponding to the trading schedule.
- `trading_times` (list of ForecastSchedulesResponseTradingSchedulesItemsTradingTimesItems, optional) — List containing the opening times for the event contract. Multiple trading blocks may be returned if the contract has an intraday trading closure.

### ForecastSchedulesResponseTradingSchedulesItemsTradingTimesItems

- `open` (string, optional) — The opening time for the given trading session.
- `close` (string, optional) — The closing time for the given trading session.

## Examples

**Response**

```json
{
  "timezone": "US/Central",
  "trading_schedules": [
    {
      "day_of_week": "Saturday",
      "trading_times": [
        {
          "open": "12:00 AM",
          "close": "4:00 PM"
        },
        {
          "open": "4:15 PM",
          "close": "11:59 PM"
        }
      ]
    },
    {
      "day_of_week": "Sunday",
      "trading_times": [
        {
          "open": "12:00 AM",
          "close": "4:00 PM"
        },
        {
          "open": "4:15 PM",
          "close": "11:59 PM"
        }
      ]
    },
    {
      "day_of_week": "Monday",
      "trading_times": [
        {
          "open": "12:00 AM",
          "close": "4:00 PM"
        },
        {
          "open": "4:15 PM",
          "close": "11:59 PM"
        }
      ]
    }
  ]
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/forecast/contract/schedules"

querystring = {"conid":"conid"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/forecast/contract/schedules?conid=conid"

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

url = URI("https://localhost:5000/v1/api/forecast/contract/schedules?conid=conid")

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

$response = $client->request('GET', 'https://localhost:5000/v1/api/forecast/contract/schedules?conid=conid', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/forecast/contract/schedules?conid=conid")! as URL,
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
