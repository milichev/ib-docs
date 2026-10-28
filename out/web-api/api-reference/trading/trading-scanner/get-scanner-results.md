[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-scanner/get-scanner-results)

# Run An IServer Market Scanner

POST https://localhost:5000/v1/api/iserver/scanner/run
Content-Type: application/json

Searches for contracts according to the filters specified in /iserver/scanner/params endpoint.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-scanner/get-scanner-results

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an iserverScannerRunRequest.

- `instrument` (string, optional) — Instrument type as the target of the market scanner request. Found in the "instrument_list" section of the /iserver/scanner/params response.
- `type` (string, optional) — Scanner value the market scanner is sorted by. Based on the "scan_type_list" section of the /iserver/scanner/params response.
- `location` (string, optional) — Location value the market scanner is searching through. Based on the "location_tree" section of the /iserver/scanner/params response.
- `filter` (list of IserverScannerRunRequestFilterItems, optional) — Contains any additional filters that should apply to response.

## Response

### 200

An array of objects detailing contract information.

- `contracts` (list of IserverScannerRunResponseContractsItems, optional) — Contains contracts related to the market scanner request.
- `scan_data_column_name` (string, optional) — Internal Use Only

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

### IserverScannerRunRequestFilterItems

- `code` (string, optional) — Code value of the filter. Based on the "code" value within the "filter_list" section of the /iserver/scanner/params response.
- `value` (IserverScannerRunRequestFilterItemsValue, optional) — Value corresponding to the input for "code".

### IserverScannerRunResponseContractsItems

- `server_id` (string, optional) — Contract's index in relation to the market scanner type's sorting priority.
- `column_name` (string, optional) — Always returned for the first contract.
- `symbol` (string, optional) — Returns the contract's ticker symbol.
- `conidex` (string, optional) — Returns the contract ID of the contract.
- `con_id` (long, optional) — Returns the contract ID of the contract.
- `available_chart_periods` (string, optional) — Internal Use Only
- `company_name` (string, optional) — Returns the company long name.
- `contract_description_1` (string, optional) — For derivatives like Futures, the local symbol of the contract will be returned.
- `listing_exchange` (string, optional) — Returns the primary listing exchange of the contract.
- `sec_type` (string, optional) — Returns the security type of the contract.

### IserverScannerRunRequestFilterItemsValue

Value corresponding to the input for "code".

- string
- long
- boolean
- double

## Examples

### top_trade_count

**Response**

```json
{
  "contracts": [
    {
      "server_id": "0",
      "column_name": "Trades",
      "symbol": "TSLA",
      "conidex": "76792991",
      "con_id": 76792991,
      "available_chart_periods": "#R|1",
      "company_name": "TESLA INC",
      "contract_description_1": "TSLA",
      "listing_exchange": "NASDAQ.NMS",
      "sec_type": "STK",
      "scan_data": "221.521K"
    },
    {
      "server_id": "1",
      "symbol": "SPY",
      "conidex": "756733",
      "con_id": 756733,
      "available_chart_periods": "#R|1",
      "company_name": "SPDR S&P 500 ETF TRUST",
      "contract_description_1": "SPY",
      "listing_exchange": "ARCA",
      "sec_type": "STK",
      "scan_data": "123.661K"
    }
  ],
  "scan_data_column_name": "Trades"
}
```

**SDK Code**

```go top_trade_count
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/scanner/run"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby top_trade_count
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/scanner/run")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java top_trade_count
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/scanner/run")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php top_trade_count
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/scanner/run', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift top_trade_count
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/scanner/run")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
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

### Trading Scanner_getScannerResults_example

**Request**

```json
{
  "instrument": "STK",
  "type": "TOP_TRADE_COUNT",
  "location": "STK.US.MAJOR",
  "filter": [
    {
      "code": "priceAbove",
      "value": 5
    }
  ]
}
```

**Response**

```json
{
  "contracts": [
    {
      "server_id": "0",
      "column_name": "Trades",
      "symbol": "TSLA",
      "conidex": "76792991",
      "con_id": 76792991,
      "available_chart_periods": "#R|1",
      "company_name": "TESLA INC",
      "contract_description_1": "TSLA",
      "listing_exchange": "NASDAQ.NMS",
      "sec_type": "STK",
      "scan_data": "221.521K"
    },
    {
      "server_id": "1",
      "symbol": "SPY",
      "conidex": "756733",
      "con_id": 756733,
      "available_chart_periods": "#R|1",
      "company_name": "SPDR S&P 500 ETF TRUST",
      "contract_description_1": "SPY",
      "listing_exchange": "ARCA",
      "sec_type": "STK",
      "scan_data": "123.661K"
    }
  ],
  "scan_data_column_name": "Trades"
}
```

**SDK Code**

```go Trading Scanner_getScannerResults_example
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/scanner/run"

	payload := strings.NewReader("{\n  \"instrument\": \"STK\",\n  \"type\": \"TOP_TRADE_COUNT\",\n  \"location\": \"STK.US.MAJOR\",\n  \"filter\": [\n    {\n      \"code\": \"priceAbove\",\n      \"value\": 5\n    }\n  ]\n}")

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

```ruby Trading Scanner_getScannerResults_example
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/scanner/run")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instrument\": \"STK\",\n  \"type\": \"TOP_TRADE_COUNT\",\n  \"location\": \"STK.US.MAJOR\",\n  \"filter\": [\n    {\n      \"code\": \"priceAbove\",\n      \"value\": 5\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Trading Scanner_getScannerResults_example
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/scanner/run")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instrument\": \"STK\",\n  \"type\": \"TOP_TRADE_COUNT\",\n  \"location\": \"STK.US.MAJOR\",\n  \"filter\": [\n    {\n      \"code\": \"priceAbove\",\n      \"value\": 5\n    }\n  ]\n}")
  .asString();
```

```php Trading Scanner_getScannerResults_example
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/scanner/run', [
  'body' => '{
  "instrument": "STK",
  "type": "TOP_TRADE_COUNT",
  "location": "STK.US.MAJOR",
  "filter": [
    {
      "code": "priceAbove",
      "value": 5
    }
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Trading Scanner_getScannerResults_example
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instrument": "STK",
  "type": "TOP_TRADE_COUNT",
  "location": "STK.US.MAJOR",
  "filter": [
    [
      "code": "priceAbove",
      "value": 5
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/scanner/run")! as URL,
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
