> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Details Of A Specific Alert

GET https://localhost:5000/v1/api/iserver/account/alert/{alertId}

Request details of a specific alert by providing the assigned alertId Id.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/get-alert-details

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `alertId` (long, required)

### Query parameters

- `type` (enum, required) — queryType
  - Allowed values: `Q`

## Response

### 200

An object containing all unique details of the specified alert.

- `account` (string, optional) — Requestor's account ID
- `order_id` (long, optional) — Alert's tracking ID. Can be used for modifying or deleting alerts.
- `alertName` (string, optional) — Human readable name of the alert.
- `tif` (string, optional) — Time in Force effective for the Alert
- `expire_time` (string, optional) — Returns the UTC formatted date used in GTD orders.
- `alert_active` (enum, optional) — Returns if the alert is active [1] or disabled [0].
  - Allowed values: `1`, `0`
- `alert_repeatable` (long, optional) — Returns if the alert can be sent more than once.
- `alert_email` (string, optional) — Returns the designated email address for sendMessage functionality.
- `alert_send_message` (long, optional) — Returns whether or not the alert will send an email.
- `alert_message` (string, optional) — Returns the body content of what your alert will report once triggered
- `alert_show_popup` (long, optional) — Returns whether or not the alert will trigger TWS Pop-up messages
- `alert_play_audio` (long, optional) — Returns whether or not the alert will play audio
- `order_status` (enum, optional) — represent order statusAlways returns "Presubmitted".
  - Allowed values: `Presubmitted`, `Submitted`
- `alert_triggered` (long, optional) — Returns whether or not the alert was triggered yet.
- `fg_color` (string, optional) — Foreground color. Not applicable to API.
- `bg_color` (string, optional) — Background color. Not applicable to API.
- `order_not_editable` (boolean, optional) — Returns if the order can be edited.
- `itws_orders_only` (long, optional) — Returns whether or not the alert will trigger mobile notifications.
- `alert_mta_currency` (string, optional) — Returns currency set for MTA alerts. Only valid for alert type 8 & 9.
- `alert_mta_defaults` (string, optional) — Returns current MTA default values.
- `tool_id` (long, optional) — Tracking ID for MTA alerts only. Returns 'null' for standard alerts.
- `time_zone` (string, optional) — Returned for time-specific conditions.
- `alert_default_type` (long, optional) — Returns default type set for alerts. Configured in Client Portal.
- `condition_size` (long, optional) — Returns the total number of conditions in the alert.
- `condition_outside_rth` (long, optional) — Returns whether or not the alert will trigger outside of regular trading hours.
- `conditions` (list of alertCondition, optional) — Returns all conditions

## Errors

### 400 Bad Request Error

bad request if orderId is empty or type is invalid

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

orderId is not parsable; unable to process request

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### alertCondition

- `condition_type` (long, optional) — The type of condition set.
- `conidex` (string, optional) — Returns conid and exchange in the format "conid@exchange"
- `contract_description_1` (string, optional) — Includes relevant descriptions (if applicable).
- `condition_operator` (string, optional) — Condition operator set for alert.
- `condition_trigger_method` (long, optional) — TriggerMethod value set.
- `condition_value` (string, optional) — Condition value set.
- `condition_logic_bind` (boolean, optional) — Condition logic_bind value set.
- `condition_time_zone` (string, optional) — Condition timeZone value set.

## Examples

**Response**

```json
{
  "account": "U1234567",
  "order_id": 833967258,
  "tif": "GTC",
  "alert_active": 1,
  "alert_repeatable": 0,
  "alert_email": "john.smith@example.com",
  "alert_send_message": 1,
  "alert_message": "alert message",
  "alert_show_popup": 1,
  "order_status": "Submitted",
  "alert_triggered": 1,
  "fg_color": "#FFFFFF",
  "bg_color": "#0000CC",
  "order_not_editable": false,
  "itws_orders_only": 0,
  "condition_size": 1,
  "condition_outside_rth": 1,
  "conditions": [
    {
      "condition_type": 1,
      "conidex": "8314@NYSE",
      "contract_description_1": "IBM",
      "condition_operator": ">=",
      "condition_trigger_method": 0,
      "condition_value": "500.00",
      "condition_logic_bind": true
    }
  ],
  "alert_name": "IBM"
}
```

**SDK Code**

```python found-alert
import requests

url = "https://localhost:5000/v1/api/iserver/account/alert/1"

querystring = {"type":"Q"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```javascript found-alert
const url = 'https://localhost:5000/v1/api/iserver/account/alert/1?type=Q';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go found-alert
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/alert/1?type=Q"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby found-alert
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/alert/1?type=Q")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java found-alert
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/alert/1?type=Q")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php found-alert
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/alert/1?type=Q', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp found-alert
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/alert/1?type=Q");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift found-alert
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/alert/1?type=Q")! as URL,
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