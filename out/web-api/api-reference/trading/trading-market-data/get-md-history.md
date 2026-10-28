[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-market-data/get-md-history)

# Historical OHLC Bar Data

GET https://localhost:5000/v1/api/iserver/marketdata/history

Request historical data for an instrument in the form of OHLC bars.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-market-data/get-md-history

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `conid` (long, required) — IB contract ID of the requested instrument.
- `period` (string, required, default: 1d) — A time duration away from startTime into the future to be divided into bars of the specified width. Supported Period Sizes * `min` - Minutes * `h` - Hour(s) * `d` - Day(s) * `w` - Week(s) * `m` - Month(s) * `y` - Year(s)
- `bar` (string, required, default: 1min) — The width of the bars into which the interval determined by period and startTime will be divided. It is not required that bar evenly divide period; partial bars can be returned. Supported Bar Sizes * `S` - Second(s) * `min` - Minute(s) * `h` - Hour(s) * `d` - Day(s) * `w` - Week(s) * `m` - Month(s)
- `exchange` (string, optional) — Exchange (or SMART) from which data is requested.
- `outsideRth` (boolean, optional, default: false) — Indicates whether data outside of regular trading hours should be included in response.
- `startTime` (string, optional) — A fixed UTC date-time reference point for the historical data request, from which the specified period extends. Format is YYYYMMDD-hh:mm:ss. If omitted, the current time is used, and direction must be omitted or 1.
- `direction` (enum, optional, default: -1) — Indicates whether data should begin or end at the start time. * `-1` - Historical data will begin away from the start time, ending at the current time/startTime. * `1` - Historical data begins at the start time, moving towards the current time. Only supported when startTime is included.
  - Allowed values: `-1`, `1`
- `source` (string, optional, default: Last) — The type of data to be returned in the historical bars. Supported Bar Sizes * `Bid_Ask` - The OHLC bid/ask values. * `Last` - The OHLC trade values. * `Midpoint` - The OHLC of the Bid-Ask midpoint.

## Response

### 200

Historical data query successfully returned data.

- `Trading Market Data_getMdHistory_Response_200`
  - iserverHistoryBidAskResponse: iserverHistoryBidAskResponse
  - iserverHistoryLastResponse: iserverHistoryLastResponse
  - iserverHistoryMidpointResponse: iserverHistoryMidpointResponse

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

### iserverHistoryBidAskResponse

Object containing the requested historical data and related metadata.

- `serverId` (string, optional) — Internal use. Identifier of the request.
- `symbol` (string, optional) — Symbol of the request instrument.
- `text` (string, optional) — Description or company name of the instrument.
- `priceFactor` (long, optional) — Internal use. Used to scale Client Portal chart Y-axis.
- `startTime` (string, optional) — UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss.
- `high` (string, optional) — Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `low` (string, optional) — Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `timePeriod` (string, optional) — The client-specified period value.
- `barLength` (long, optional) — The client-specified bar width, represented in seconds.
- `mdAvailability` (string, optional) — A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book.
- `outsideRth` (boolean, optional) — Indicates whether data from outside regular trading hours is included in the response.
- `tradingDayDuration` (long, optional) — Length of instrument's trading day in seconds.
- `volumeFactor` (long, optional) — Internal use. Used to scale volume histograms.
- `priceDisplayRule` (long, optional) — Internal use. Governs application of pricing display rule.
- `priceDisplayValue` (string, optional) — Internal use. Governs rendering of displayed pricing.
- `chartPanStartTime` (string, optional) — Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss.
- `direction` (enum, optional) — Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
  - Allowed values: `-1`
- `negativeCapable` (boolean, optional) — Indicates whether instrument is capable of negative pricing.
- `messageVersion` (long, optional) — Internal use. Reflects the version of the response schema used.
- `travelTime` (long, optional) — Internal time in flight to serve the request.
- `data` (list of singleHistoricalBarBidAsk, optional) — Array containing OHLC bars for the requested period.
- `points` (long, optional) — Count of the number of bars returned in the data array.
- `mktDataDelay` (long, optional) — Number of milliseconds taken to satisfy this historical data request.

### iserverHistoryLastResponse

Object containing the requested historical data and related metadata.

- `serverId` (string, optional) — Internal use. Identifier of the request.
- `symbol` (string, optional) — Symbol of the request instrument.
- `text` (string, optional) — Description or company name of the instrument.
- `priceFactor` (long, optional) — Internal use. Used to scale Client Portal chart Y-axis.
- `startTime` (string, optional) — UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss.
- `high` (string, optional) — Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `low` (string, optional) — Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `timePeriod` (string, optional) — The client-specified period value.
- `barLength` (long, optional) — The client-specified bar width, represented in seconds.
- `mdAvailability` (string, optional) — A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book.
- `outsideRth` (boolean, optional) — Indicates whether data from outside regular trading hours is included in the response.
- `tradingDayDuration` (long, optional) — Length of instrument's trading day in seconds.
- `volumeFactor` (long, optional) — Internal use. Used to scale volume histograms.
- `priceDisplayRule` (long, optional) — Internal use. Governs application of pricing display rule.
- `priceDisplayValue` (string, optional) — Internal use. Governs rendering of displayed pricing.
- `chartPanStartTime` (string, optional) — Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss.
- `direction` (enum, optional) — Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
  - Allowed values: `-1`
- `negativeCapable` (boolean, optional) — Indicates whether instrument is capable of negative pricing.
- `messageVersion` (long, optional) — Internal use. Reflects the version of the response schema used.
- `travelTime` (long, optional) — Internal time in flight to serve the request.
- `data` (list of singleHistoricalBarLast, optional) — Array containing OHLC bars for the requested period.
- `points` (long, optional) — Count of the number of bars returned in the data array.
- `mktDataDelay` (long, optional) — Number of milliseconds taken to satisfy this historical data request.

### iserverHistoryMidpointResponse

Object containing the requested historical data and related metadata.

- `serverId` (string, optional) — Internal use. Identifier of the request.
- `symbol` (string, optional) — Symbol of the request instrument.
- `text` (string, optional) — Description or company name of the instrument.
- `priceFactor` (long, optional) — Internal use. Used to scale Client Portal chart Y-axis.
- `startTime` (string, optional) — UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss.
- `high` (string, optional) — Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `low` (string, optional) — Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'.
- `timePeriod` (string, optional) — The client-specified period value.
- `barLength` (long, optional) — The client-specified bar width, represented in seconds.
- `mdAvailability` (string, optional) — A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book.
- `outsideRth` (boolean, optional) — Indicates whether data from outside regular trading hours is included in the response.
- `tradingDayDuration` (long, optional) — Length of instrument's trading day in seconds.
- `volumeFactor` (long, optional) — Internal use. Used to scale volume histograms.
- `priceDisplayRule` (long, optional) — Internal use. Governs application of pricing display rule.
- `priceDisplayValue` (string, optional) — Internal use. Governs rendering of displayed pricing.
- `chartPanStartTime` (string, optional) — Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss.
- `direction` (enum, optional) — Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
  - Allowed values: `-1`
- `negativeCapable` (boolean, optional) — Indicates whether instrument is capable of negative pricing.
- `messageVersion` (long, optional) — Internal use. Reflects the version of the response schema used.
- `travelTime` (long, optional) — Internal time in flight to serve the request.
- `data` (list of singleHistoricalBarMidpoint, optional) — Array containing OHLC bars for the requested period.
- `points` (long, optional) — Count of the number of bars returned in the data array.
- `mktDataDelay` (long, optional) — Number of milliseconds taken to satisfy this historical data request.

### singleHistoricalBarBidAsk

Object containing Bid and Ask data for a single OHLC bar.

- `o` (double, optional) — Opening value of the bar. Indicates the time average bid during the bar.
- `c` (double, optional) — Closing value of the bar. Indicates the time average ask during the bar.
- `h` (double, optional) — High value of the bar. Indicates the highest ask price during the bar.
- `l` (double, optional) — Low value of the bar. Indicates the lowest bid price during the bar.
- `v` (double, optional) — Volume value of the bar. Always returns 0.
- `t` (long, optional) — Unix timestamp of the start (chronologically earlier) of the bar.

### singleHistoricalBarLast

Object containing Last or Trades data for a single OHLC bar.

- `o` (double, optional) — Opening value of the bar. Indicates first traded price of the bar.
- `c` (double, optional) — Closing value of the bar. Indicates the final traded price of the bar.
- `h` (double, optional) — High value of the bar. Indicates the highest traded price of the bar.
- `l` (double, optional) — Low value of the bar. Indicates the lowest traded price of the bar.
- `v` (double, optional) — Volume value of the bar, returned only for "Last" barType.
- `t` (long, optional) — Unix timestamp of the start (chronologically earlier) of the bar.

### singleHistoricalBarMidpoint

Object containing Midpoint data for a single OHLC bar.

- `o` (double, optional) — Opening value of the bar. Indicates the starting midpoint price traded price during the bar.
- `c` (double, optional) — Closing value of the bar. Indicates the last midpoint price traded price during the bar.
- `h` (double, optional) — High value of the bar. Indicates the highest midpoint price traded price during the bar.
- `l` (double, optional) — Low value of the bar. Indicates the lowest midpoint price traded price during the bar.
- `v` (double, optional) — Volume value of the bar. Always returns 0.
- `t` (long, optional) — Unix timestamp of the start (chronologically earlier) of the bar.

## Examples

### iserverHistoryBidAskSuccessExample

**Response**

```json
{
  "barLength": 86400,
  "chartPanStartTime": "20250521-00:00:00",
  "data": [
    {
      "c": 212.11,
      "h": 213.94,
      "l": 210.58,
      "o": 212.09,
      "t": 1747229400000,
      "v": 0
    },
    {
      "c": 211.34,
      "h": 212.97,
      "l": 209.53,
      "o": 211.32,
      "t": 1747315800000,
      "v": 0
    },
    {
      "c": 211.07,
      "h": 212.56,
      "l": 209.77,
      "o": 211.05,
      "t": 1747402200000,
      "v": 0
    },
    {
      "c": 207.86,
      "h": 209.48,
      "l": 204.25,
      "o": 207.84,
      "t": 1747661400000,
      "v": 0
    }
  ],
  "direction": -1,
  "high": "21394/0/1440",
  "low": "20425/0/8640",
  "mdAvailability": "S",
  "messageVersion": 2,
  "mktDataDelay": 0,
  "negativeCapable": false,
  "outsideRth": false,
  "points": 3,
  "priceDisplayRule": 1,
  "priceDisplayValue": "2",
  "priceFactor": 100,
  "serverId": "4155828",
  "startTime": "20250513-13:30:00",
  "symbol": "AAPL",
  "text": "APPLE INC",
  "timePeriod": "1w",
  "travelTime": 2,
  "volumeFactor": 100
}
```

**SDK Code**

```go iserverHistoryBidAskSuccessExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby iserverHistoryBidAskSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java iserverHistoryBidAskSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php iserverHistoryBidAskSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift iserverHistoryBidAskSuccessExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")! as URL,
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

### iserverHistoryLastSuccessExample

**Response**

```json
{
  "barLength": 86400,
  "chartPanStartTime": "20250521-00:00:00",
  "data": [
    {
      "c": 212.33,
      "h": 213.94,
      "l": 210.58,
      "o": 212.43,
      "t": 1747229400000,
      "v": 266616.18
    },
    {
      "c": 211.45,
      "h": 212.96,
      "l": 209.54,
      "o": 210.95,
      "t": 1747315800000,
      "v": 256847.25
    },
    {
      "c": 211.26,
      "h": 212.57,
      "l": 209.77,
      "o": 212.36,
      "t": 1747402200000,
      "v": 235240.24
    },
    {
      "c": 208.78,
      "h": 209.48,
      "l": 204.26,
      "o": 207.78,
      "t": 1747661400000,
      "v": 267569.89
    }
  ],
  "direction": -1,
  "high": "21394/266616.18/1440",
  "low": "20426/267569.89/8640",
  "mdAvailability": "S",
  "messageVersion": 2,
  "mktDataDelay": 0,
  "negativeCapable": false,
  "outsideRth": false,
  "points": 3,
  "priceDisplayRule": 1,
  "priceDisplayValue": "2",
  "priceFactor": 100,
  "serverId": "4155816",
  "startTime": "20250513-13:30:00",
  "symbol": "AAPL",
  "text": "APPLE INC",
  "timePeriod": "1w",
  "travelTime": 7,
  "volumeFactor": 100
}
```

**SDK Code**

```go iserverHistoryLastSuccessExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby iserverHistoryLastSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java iserverHistoryLastSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php iserverHistoryLastSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift iserverHistoryLastSuccessExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")! as URL,
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

### iserverHistoryMidpointSuccessExample

**Response**

```json
{
  "barLength": 86400,
  "chartPanStartTime": "20250521-00:00:00",
  "data": [
    {
      "c": 212.42,
      "h": 213.94,
      "l": 210.59,
      "o": 212.37,
      "t": 1747229400000,
      "v": 0
    },
    {
      "c": 211.43,
      "h": 212.97,
      "l": 209.53,
      "o": 210.98,
      "t": 1747315800000,
      "v": 0
    },
    {
      "c": 211.19,
      "h": 212.5,
      "l": 209.77,
      "o": 212.36,
      "t": 1747402200000,
      "v": 0
    },
    {
      "c": 208.72,
      "h": 209.48,
      "l": 204.26,
      "o": 207.94,
      "t": 1747661400000,
      "v": 0
    }
  ],
  "direction": -1,
  "high": "21394/0/1440",
  "low": "20426/0/8640",
  "mdAvailability": "S",
  "messageVersion": 2,
  "mktDataDelay": 0,
  "negativeCapable": false,
  "outsideRth": false,
  "points": 3,
  "priceDisplayRule": 1,
  "priceDisplayValue": "2",
  "priceFactor": 100,
  "serverId": "4155818",
  "startTime": "20250513-13:30:00",
  "symbol": "AAPL",
  "text": "APPLE INC",
  "timePeriod": "1w",
  "travelTime": 7,
  "volumeFactor": 100
}
```

**SDK Code**

```go iserverHistoryMidpointSuccessExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby iserverHistoryMidpointSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java iserverHistoryMidpointSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php iserverHistoryMidpointSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift iserverHistoryMidpointSuccessExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/marketdata/history?bar=1min&conid=265598&period=1d")! as URL,
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
