> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Create Or Modify Alert

POST https://localhost:5000/v1/api/iserver/account/{accountId}/alert
Content-Type: application/json

Endpoint used to create a new alert, or modify an existing alert.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/create-alert

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Body (application/json)

This endpoint expects an alertCreationRequest.

- `alertName` (string, required) — Alert name.
- `alertMessage` (string, required) — Alert message which will be sent
- `alertRepeatable` (enum, required) — Boolean number (0, 1) signifies if an alert can be triggered more than once. A value of '1' is required for MTA alerts
  - Allowed values: `0`, `1`
- `outsideRth` (enum, required) — Allow (1) or disallow (0) the alert to be triggered outside of regular trading hours
  - Allowed values: `0`, `1`
- `tif` (enum, required) — Time in Force duration of alert.
  - Allowed values: `GTC`, `GTD`
- `conditions` (list of AlertCreationRequestConditionsItems, required) — Container for all conditions applied for an alert to trigger.
- `orderId` (long, optional) — optional; used in case of modification and represent Alert Id
- `email` (string, optional) — Email address you want to send email alerts to
- `expireTime` (string, optional) — Used with a tif of "GTD" only. Signifies time when the alert should terminate if no alert is triggered.
- `iTWSOrdersOnly` (long, optional) — allow (0) or disallow (1) alerts to trigger alerts through the mobile app
- `sendMessage` (enum, optional) — allow (1) or disallow (0) alerts to trigger email messages
  - Allowed values: `0`, `1`
- `showPopup` (long, optional) — allow (1) or disallow (0) alerts to trigger TWS Pop-up messages

## Response

### 200

An object containing valid accounts and the account properties regarding trading access. This endpoint is also used to confirm account validation.

- `request_id` (long, optional) — Not applicable
- `order_id` (long, optional) — The tracking number of the alert. Alert identifier internally referenced as order id.
- `success` (boolean, optional) — Displays result status of alert request
- `text` (string, optional) — Response message to clarify submission status.
- `order_status` (string, optional) — Not applicable
- `warning_message` (string, optional) — Returns 'null'

## Errors

### 400 Bad Request Error

bad request; body is empty

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal Server Error. Unable to process request if incoming values are not valid. For example operator is "abc" Or if modification request contains unmodified fields

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### AlertCreationRequestConditionsItems

- `conidex` (string, required) — Concatenation of conid and exchange. Formatted as "conid@exchange"
- `logicBind` (enum, required, default: a) — Describes how multiple conditions should behave together. Available logic types: * `a` - AND * `o` - OR * `n` - END
  - Allowed values: `a`, `o`, `n`
- `operator` (enum, required) — Indicates whether the trigger should be above or below the given value.
  - Allowed values: `>=`, `<=`, `>`, `<`, `==`
- `triggerMethod` (string, required) — Pass the string representation of zero, "0"
- `type` (enum, required) — Designate what condition type to use. Note the "MTA" types listed are only supported if iTWSOrdersOnly=1 Available condition types: * `1` - Price * `3` - Time * `4` - Margin * `5` - Trade * `6` - Volume * `7` - MTA Market * `8` - MTA Postion * `9` - MTA Account Daily PnL
  - Allowed values: `1`, `3`, `4`, `5`, `6`, `7`, `8`, `9`
- `value` (string, required, default: *) — Trigger value based on Type.
- `timeZone` (string, optional) — Only needed for some MTA alert condition.

## Examples

### successfully-created

**Response**

```json
{
  "order_id": 1408549184,
  "success": true,
  "text": "Submitted"
}
```

**SDK Code**

```python successfully-created
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```javascript successfully-created
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert';
const options = {method: 'POST', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go successfully-created
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby successfully-created
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java successfully-created
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/account/U1234567/alert")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php successfully-created
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp successfully-created
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/alert");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift successfully-created
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert")! as URL,
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

### successfully-modified

**Response**

```json
{
  "order_id": 1408549184,
  "success": true,
  "text": "Submitted"
}
```

**SDK Code**

```python successfully-modified
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```javascript successfully-modified
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert';
const options = {method: 'POST', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go successfully-modified
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby successfully-modified
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java successfully-modified
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/account/U1234567/alert")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php successfully-modified
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp successfully-modified
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/alert");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift successfully-modified
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert")! as URL,
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

### alert-creation-request

**Request**

```json
{
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop!",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    {
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    }
  ],
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
}
```

**Response**

```json
{
  "order_id": 1408549184,
  "success": true,
  "text": "Submitted"
}
```

**SDK Code**

```python alert-creation-request
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

payload = {
    "alertName": "AAPL_Price",
    "alertMessage": "AAPL Price Drop!",
    "alertRepeatable": 0,
    "outsideRth": 0,
    "tif": "GTC",
    "conditions": [
        {
            "conidex": "265598@NYSE",
            "logicBind": "a",
            "operator": ">=",
            "triggerMethod": "0",
            "type": 1,
            "value": "500",
            "timeZone": "US/Eastern"
        }
    ],
    "email": "jonh.smith@example.com",
    "expireTime": "20231231-12:00:00",
    "iTWSOrdersOnly": 0,
    "sendMessage": 1,
    "showPopup": 1
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript alert-creation-request
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"alertName":"AAPL_Price","alertMessage":"AAPL Price Drop!","alertRepeatable":0,"outsideRth":0,"tif":"GTC","conditions":[{"conidex":"265598@NYSE","logicBind":"a","operator":">=","triggerMethod":"0","type":1,"value":"500","timeZone":"US/Eastern"}],"email":"jonh.smith@example.com","expireTime":"20231231-12:00:00","iTWSOrdersOnly":0,"sendMessage":1,"showPopup":1}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go alert-creation-request
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

	payload := strings.NewReader("{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop!\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}")

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

```ruby alert-creation-request
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop!\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}"

response = http.request(request)
puts response.read_body
```

```java alert-creation-request
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/account/U1234567/alert")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop!\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}")
  .asString();
```

```php alert-creation-request
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert', [
  'body' => '{
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop!",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    {
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    }
  ],
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp alert-creation-request
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/alert");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop!\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift alert-creation-request
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop!",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    [
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    ]
  ],
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert")! as URL,
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

### alert-modification-request

**Request**

```json
{
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop! Modified message",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    {
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    }
  ],
  "orderId": 1408549184,
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
}
```

**Response**

```json
{
  "order_id": 1408549184,
  "success": true,
  "text": "Submitted"
}
```

**SDK Code**

```python alert-modification-request
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

payload = {
    "alertName": "AAPL_Price",
    "alertMessage": "AAPL Price Drop! Modified message",
    "alertRepeatable": 0,
    "outsideRth": 0,
    "tif": "GTC",
    "conditions": [
        {
            "conidex": "265598@NYSE",
            "logicBind": "a",
            "operator": ">=",
            "triggerMethod": "0",
            "type": 1,
            "value": "500",
            "timeZone": "US/Eastern"
        }
    ],
    "orderId": 1408549184,
    "email": "jonh.smith@example.com",
    "expireTime": "20231231-12:00:00",
    "iTWSOrdersOnly": 0,
    "sendMessage": 1,
    "showPopup": 1
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript alert-modification-request
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"alertName":"AAPL_Price","alertMessage":"AAPL Price Drop! Modified message","alertRepeatable":0,"outsideRth":0,"tif":"GTC","conditions":[{"conidex":"265598@NYSE","logicBind":"a","operator":">=","triggerMethod":"0","type":1,"value":"500","timeZone":"US/Eastern"}],"orderId":1408549184,"email":"jonh.smith@example.com","expireTime":"20231231-12:00:00","iTWSOrdersOnly":0,"sendMessage":1,"showPopup":1}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go alert-modification-request
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert"

	payload := strings.NewReader("{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop! Modified message\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"orderId\": 1408549184,\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}")

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

```ruby alert-modification-request
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop! Modified message\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"orderId\": 1408549184,\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}"

response = http.request(request)
puts response.read_body
```

```java alert-modification-request
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/account/U1234567/alert")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop! Modified message\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"orderId\": 1408549184,\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}")
  .asString();
```

```php alert-modification-request
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert', [
  'body' => '{
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop! Modified message",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    {
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    }
  ],
  "orderId": 1408549184,
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp alert-modification-request
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/alert");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"alertName\": \"AAPL_Price\",\n  \"alertMessage\": \"AAPL Price Drop! Modified message\",\n  \"alertRepeatable\": 0,\n  \"outsideRth\": 0,\n  \"tif\": \"GTC\",\n  \"conditions\": [\n    {\n      \"conidex\": \"265598@NYSE\",\n      \"logicBind\": \"a\",\n      \"operator\": \">=\",\n      \"triggerMethod\": \"0\",\n      \"type\": 1,\n      \"value\": \"500\",\n      \"timeZone\": \"US/Eastern\"\n    }\n  ],\n  \"orderId\": 1408549184,\n  \"email\": \"jonh.smith@example.com\",\n  \"expireTime\": \"20231231-12:00:00\",\n  \"iTWSOrdersOnly\": 0,\n  \"sendMessage\": 1,\n  \"showPopup\": 1\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift alert-modification-request
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "alertName": "AAPL_Price",
  "alertMessage": "AAPL Price Drop! Modified message",
  "alertRepeatable": 0,
  "outsideRth": 0,
  "tif": "GTC",
  "conditions": [
    [
      "conidex": "265598@NYSE",
      "logicBind": "a",
      "operator": ">=",
      "triggerMethod": "0",
      "type": 1,
      "value": "500",
      "timeZone": "US/Eastern"
    ]
  ],
  "orderId": 1408549184,
  "email": "jonh.smith@example.com",
  "expireTime": "20231231-12:00:00",
  "iTWSOrdersOnly": 0,
  "sendMessage": 1,
  "showPopup": 1
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert")! as URL,
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