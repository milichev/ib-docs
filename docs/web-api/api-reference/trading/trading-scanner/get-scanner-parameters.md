[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-scanner/get-scanner-parameters)

# Get Valid IServer Scanner Parameters

GET https://localhost:5000/v1/api/iserver/scanner/params

Returns an xml file containing all available parameters to be sent for the Iserver scanner request.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-scanner/get-scanner-parameters

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

An array of objects detailing contract information.

- `scan_type_list` (list of IserverScannerParamsScanTypeListItems, optional) — Contains all values used as the scanner "type" in the request.
- `instrument_list` (list of IserverScannerParamsInstrumentListItems, optional) — Contains all values relevant to the scanner "instrument" request field.
- `filter_list` (list of IserverScannerParamsFilterListItems, optional)
- `location_tree` (list of IserverScannerParamsLocationTreeItems, optional) — Contains all values relevant to the location field of the market scanner request.

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

### IserverScannerParamsScanTypeListItems

- `display_name` (string, optional) — Human readable name for the scanner "type"
- `code` (string, optional) — Value used for the market scanner request.
- `instruments` (list of any, optional) — Returns all instruments the scanner type can be used with.

### IserverScannerParamsInstrumentListItems

- `display_name` (string, optional) — Human readable representation of the instrument type.
- `type` (string, optional) — Value used for the market scanner request.
- `filters` (list of any, optional) — Returns an array of all filters uniquely avaliable to that instrument type.

### IserverScannerParamsFilterListItems

- `group` (string, optional) — Returns the group of filters the request is affiliated with.
- `display_name` (string, optional) — Returns the human-readable identifier for the filter.
- `code` (string, optional) — Value used for the market scanner request.
- `type` (string, optional) — Returns the type of value to be used in the request. This can indicate a range based value, or if it should be a single value.
- `combo_values` (list of IserverScannerParamsFilterListItemsComboValuesItems, optional) — combo values when type equals to combo

### IserverScannerParamsLocationTreeItems

- `display_name` (string, optional) — Returns the overarching instrument type to designate the location.
- `type` (string, optional) — Returns the code value of the market scanner instrument type value.
- `locations` (list of IserverScannerParamsLocationTreeItemsLocationsItems, optional)

### IserverScannerParamsFilterListItemsComboValuesItems

- `default` (boolean, optional)
- `vendor` (IserverScannerParamsFilterListItemsComboValuesItemsVendor, optional)

### IserverScannerParamsLocationTreeItemsLocationsItems

- `display_name` (string, optional) — Returns the human-readable value of the market scanner's location value.
- `type` (string, optional) — Returns the code value of the market scanner location value.
- `locations` (list of IserverScannerParamsLocationTreeItemsLocationsItemsLocationsItems, optional)

### IserverScannerParamsFilterListItemsComboValuesItemsVendor

### IserverScannerParamsLocationTreeItemsLocationsItemsLocationsItems

- `display_name` (string, optional)
- `type` (string, optional)

## Examples

**Response**

```json
{
  "scan_type_list": [
    {
      "display_name": "Top % Gainers",
      "code": "TOP_PERC_GAIN",
      "instruments": [
        "STK",
        "ETF.EQ.US",
        "ETF.FI.US",
        "FUT.US",
        "IND.US",
        "STOCK.NA",
        "FUT.NA",
        "SSF.NA",
        "STOCK.EU",
        "FUT.EU",
        "IND.EU",
        "SSF.EU",
        "STOCK.ME",
        "STOCK.HK",
        "FUT.HK",
        "IND.HK",
        "SSF.HK"
      ]
    }
  ],
  "instrument_list": [
    {
      "display_name": "US Stocks",
      "type": "STK",
      "filters": [
        "afterHoursChange",
        "afterHoursChangePerc",
        "avgOptVolume",
        "avgPriceTarget",
        "avgRating"
      ]
    }
  ],
  "filter_list": [
    {
      "group": "afterHoursChangeAbove",
      "display_name": "After-Hours Change Above",
      "code": "afterHoursChangeAbove",
      "type": "non-range"
    },
    {
      "group": "stkTypes",
      "display_name": "Stock type",
      "code": "stkTypes",
      "combo_values": [
        {
          "default": true
        }
      ]
    }
  ],
  "location_tree": [
    {
      "display_name": "US Stocks",
      "type": "STK",
      "locations": [
        {
          "display_name": "Listed/NASDAQ",
          "type": "STK.US.MAJOR",
          "locations": []
        },
        {
          "display_name": "OTCMarkets",
          "type": "STK.US.MINOR",
          "locations": []
        }
      ]
    },
    {
      "display_name": "US Futures",
      "type": "FUT.US",
      "locations": [
        {
          "display_name": "CME",
          "type": "FUT.CME"
        },
        {
          "display_name": "CBOT",
          "type": "FUT.CBOT"
        },
        {
          "display_name": "NYMEX",
          "type": "FUT.NYMEX"
        }
      ]
    }
  ]
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/scanner/params';
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

	url := "https://localhost:5000/v1/api/iserver/scanner/params"

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

url = URI("https://localhost:5000/v1/api/iserver/scanner/params")

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

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/scanner/params', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/scanner/params")! as URL,
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
