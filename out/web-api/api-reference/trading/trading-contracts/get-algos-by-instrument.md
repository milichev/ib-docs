[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-contracts/get-algos-by-instrument)

# Search Algos For An Instrument

GET https://localhost:5000/v1/api/iserver/contract/{conid}/algos

Returns supported IB Algos for an instrument. A pre-flight request must be submitted before retrieving information.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-algos-by-instrument

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `conid` (string, required)

### Query parameters

- `algos` (enum, optional) — List of algo ids delimited by ";" to filter by. Max of 8 algos ids can be specified. Case sensitive to algo id.
  - Allowed values: `Adaptive`, `Vwap`
- `addDescription` (enum, optional, default: 0) — Whether or not to add algo descriptions to response. Set to 1 for yes, 0 for no.
  - Allowed values: `0`, `1`
- `addParams` (enum, optional, default: 0) — Whether or not to show algo parameters. Set to 1 for yes, 0 for no.
  - Allowed values: `0`, `1`

## Response

### 200

Returns a list of available algos and a description of their behavior.

- `algos` (list of AlgosResponseAlgosItems, optional) — Contains all relevant algos for the contract.

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

### AlgosResponseAlgosItems

- `name` (string, required) — Common name of the algo
- `id` (string, required) — Algo identifier used for requests.
- `parameters` (list of algoParam, optional)

### algoParam

- `guiRank` (long, optional) — Positional ranking for the algo. Used for Client Portal.
- `defaultValue` (AlgoParamDefaultValue, optional) — Default parameter value. Type defined in valueClassName field
- `minValue` (long, optional)
- `maxValue` (long, optional)
- `name` (string, optional) — Parameter name.
- `id` (string, optional) — Parameter identifier for the algo.
- `description` (string, optional)
- `legalStrings` (list of string, optional) — Allowed values for the parameter.
- `required` (boolean, optional) — States whether the parameter is required for the given algo order to place.
- `valueClassName` (enum, optional) — Returns the variable type of the parameter.
  - Allowed values: `String`, `Boolean`, `Time`, `Double`, `Integer`

### AlgoParamDefaultValue

Default parameter value. Type defined in valueClassName field

- string
- long
- boolean
- double

## Examples

### success

**Response**

```json
{
  "algos": [
    {
      "name": "Adaptive",
      "id": "Adaptive"
    },
    {
      "name": "Arrival Price",
      "id": "ArrivalPx"
    },
    {
      "name": "Close Price",
      "id": "ClosePx"
    },
    {
      "name": "DarkIce",
      "id": "DarkIce"
    },
    {
      "name": "Percentage of Volume",
      "id": "PctVol"
    },
    {
      "name": "Price Variant Percentage of Volume",
      "id": "PctVolPx"
    },
    {
      "name": "Size Variant Percentage of Volume",
      "id": "PctVolSz"
    },
    {
      "name": "TWAP",
      "id": "Twap"
    },
    {
      "name": "Time Variant Percentage of Volume",
      "id": "PctVolTm"
    },
    {
      "name": "VWAP",
      "id": "Vwap"
    }
  ]
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/iserver/contract/conid/algos"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

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

	url := "https://localhost:5000/v1/api/iserver/contract/conid/algos"

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

url = URI("https://localhost:5000/v1/api/iserver/contract/conid/algos")

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

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/conid/algos', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/conid/algos")! as URL,
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

### success-with-additional-data

**Response**

```json
{
  "algos": [
    {
      "name": "Adaptive",
      "id": "Adaptive",
      "parameters": [
        {
          "guiRank": 1,
          "defaultValue": "Normal",
          "name": "Adaptive order priority/urgency",
          "id": "adaptivePriority",
          "legalStrings": [
            "Urgent",
            "Normal",
            "Patient"
          ],
          "required": true,
          "valueClassName": "String"
        }
      ]
    },
    {
      "name": "Arrival Price",
      "id": "ArrivalPx",
      "parameters": [
        {
          "guiRank": 3,
          "defaultValue": "Neutral",
          "name": "Urgency/Risk aversion",
          "id": "riskAversion",
          "legalStrings": [
            "GetDone",
            "Aggressive",
            "Neutral",
            "Passive"
          ],
          "required": true,
          "valueClassName": "String"
        },
        {
          "guiRank": 6,
          "defaultValue": false,
          "name": "Allow trading past end time",
          "id": "allowPastEndTime",
          "valueClassName": "Boolean"
        },
        {
          "guiRank": 7,
          "defaultValue": false,
          "name": "Attempt completion by EOD",
          "id": "forceCompletion",
          "valueClassName": "Boolean"
        },
        {
          "guiRank": 4,
          "name": "Start Time",
          "id": "startTime",
          "description": "Defaults to start of market trading",
          "valueClassName": "Time"
        },
        {
          "guiRank": 2,
          "minValue": 1,
          "maxValue": 50,
          "name": "Max Percentage",
          "id": "maxPctVol",
          "description": "From 0.01 to 50.0",
          "required": true,
          "valueClassName": "Double"
        },
        {
          "guiRank": 5,
          "name": "End Time",
          "id": "endTime",
          "description": "Defaults to end of market trading",
          "valueClassName": "Time"
        }
      ]
    }
  ]
}
```

**SDK Code**

```python success-with-additional-data
import requests

url = "https://localhost:5000/v1/api/iserver/contract/conid/algos"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go success-with-additional-data
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/contract/conid/algos"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby success-with-additional-data
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/contract/conid/algos")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success-with-additional-data
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/contract/conid/algos', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success-with-additional-data
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/contract/conid/algos")! as URL,
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
