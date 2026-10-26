[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio-analyst/get-single-performance-period)

# Account Performance

POST https://localhost:5000/v1/api/pa/performance
Content-Type: application/json

Returns the performance (MTM) for the given accounts, if more than one account is passed, the result is consolidated.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio-analyst/get-single-performance-period

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `acctIds` (list of any, optional) — An array of strings containing each account identifier to retrieve performance details for.
- `period` (enum, optional, default: 12M) — Specify the period for which the account should be analyzed. Available period lengths: * `1D` - The last 24 hours. * `7D` - The last 7 full days. * `MTD` - Performance since the 1st of the month. * `1M` - A full calendar month from the last full trade day. * `3M` - 3 full calendar months from the last full trade day. * `6M` - 6 full calendar months from the last full trade day. * `12M` - 12 full calendar month from the last full trade day. * `YTD` - Performance since January 1st.
  - Allowed values: `1D`, `7D`, `MTD`, `1M`, `3M`, `6M`, `12M`, `YTD`

## Response

### 200

An array of objects detailing contract information.

- `currencyType` (string, optional) — Confirms if the currency type. If trading exclusively in your base currency, "base" will be returned.
- `rc` (long, optional) — Returns the data identifier (Internal Use Only).
- `nav` (PerformanceResponseNav, optional) — Net asset value data for the account or consolidated accounts. NAV data is not applicable to benchmarks.
- `nd` (long, optional) — Returns the total data points.
- `cps` (PerformanceResponseCps, optional) — Returns the object containing the Cumulative performance data.
- `tpps` (PerformanceResponseTpps, optional) — Returns the time period performance data.
- `id` (string, optional) — Returns the request identifier, getPerformanceData.
- `included` (list of any, optional) — Returns an array containing accounts reviewed.
- `pm` (string, optional) — Portfolio Measure. Used to indicate TWR or MWR values returned.

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

### PerformanceResponseNav

Net asset value data for the account or consolidated accounts. NAV data is not applicable to benchmarks.

- `data` (list of PerformanceResponseNavDataItems, optional) — Contains the affiliated 'nav' data.
- `freq` (string, optional) — Displays the values corresponding to a given frequency.
- `dates` (list of any, optional) — Returns the array of dates formatted as strings corresponding to your frequency, the length should be same as the length of returns inside data.

### PerformanceResponseCps

Returns the object containing the Cumulative performance data.

- `data` (list of PerformanceResponseCpsDataItems, optional) — Returns the array of cps data available.
- `freq` (string, optional) — Returns the determining frequency of the data range.
- `dates` (list of any, optional) — Returns the dates corresponding to the frequency of data.

### PerformanceResponseTpps

Returns the time period performance data.

- `data` (list of PerformanceResponseTppsDataItems, optional) — Object containing all data about tpps.
- `freq` (string, optional) — Returns the determining frequency of the data range.
- `dates` (list of any, optional) — Returns the dates corresponding to the frequency of data.

### PerformanceResponseNavDataItems

- `idType` (string, optional) — Returns how identifiers are determined.
- `navs` (list of any, optional) — Returns sequential data points corresponding to the net asset value between the "start" and "end" days.
- `start` (string, optional) — Returns the first available date for data.
- `end` (string, optional) — Returns the end of the available frequency.
- `id` (string, optional) — Returns the account identifier.
- `startNAV` (PerformanceResponseNavDataItemsStartNav, optional) — Returns the intiial NAV available.
- `baseCurrency` (string, optional) — Returns the base currency used in the account.

### PerformanceResponseCpsDataItems

- `idType` (string, optional) — Returns the key value of the request.
- `start` (string, optional) — Returns the starting value of the value range.
- `end` (string, optional) — Returns the ending value of the value range.
- `returns` (list of any, optional) — Returns all cps values in order between the start and end times.
- `id` (string, optional) — Returns the account identifier.
- `baseCurrency` (string, optional) — Returns the base curency for the account.

### PerformanceResponseTppsDataItems

- `idType` (string, optional) — Returns the key value of the request.
- `start` (string, optional) — Returns the starting value of the value range.
- `end` (string, optional) — Returns the ending value of the value range.
- `returns` (list of any, optional) — Returns all cps values in order between the start and end times.
- `id` (string, optional) — Returns the account identifier.
- `baseCurrency` (string, optional) — Returns the base curency for the account.

### PerformanceResponseNavDataItemsStartNav

Returns the intiial NAV available.

- `date` (string, optional) — Returns the starting date for the request.
- `val` (long, optional) — Returns the Net Asset Value of the account.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "currencyType": "base",
  "rc": 0,
  "nav": {
    "data": [
      {
        "idType": "acctid",
        "navs": [
          "202767332.1223",
          "215718598.8239"
        ],
        "start": "20230102",
        "end": "20231213",
        "id": "U1234567",
        "startNAV": {
          "date": "20221230",
          "val": 1
        },
        "baseCurrency": "USD"
      }
    ],
    "freq": "D",
    "dates": [
      "20230102",
      "20231213"
    ]
  },
  "nd": 346,
  "cps": {
    "data": [
      {
        "idType": "acctid",
        "start": "20230102",
        "end": "20231213",
        "returns": [
          "0",
          "0.0639"
        ],
        "id": "U1234567",
        "baseCurrency": "USD"
      }
    ],
    "freq": "D",
    "dates": [
      "20230102",
      "20231213"
    ]
  },
  "tpps": {
    "data": [
      {
        "idType": "acctid",
        "start": "20230102",
        "end": "20231213",
        "returns": [
          "0.0037",
          "0.0031",
          "0.0033",
          "0.0034",
          "0.02",
          "0.0127",
          "0.0036",
          "0.0036",
          "0.0034",
          "0.0012",
          "0.0026",
          "0.0017"
        ],
        "id": "U1234567",
        "baseCurrency": "USD"
      }
    ],
    "freq": "M",
    "dates": [
      "202301",
      "202302",
      "202303",
      "202304",
      "202305",
      "202306",
      "202307",
      "202308",
      "202309",
      "202310",
      "202311",
      "202312"
    ]
  },
  "id": "getPerformanceData",
  "included": [
    "U1234567"
  ],
  "pm": "TWR"
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/pa/performance';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
};

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
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/pa/performance"

	payload := strings.NewReader("{}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

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

url = URI("https://localhost:5000/v1/api/pa/performance")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/pa/performance', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/pa/performance")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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
