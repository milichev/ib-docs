[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-alerts/get-mta-details)

# Details Of A Mobile Trading Alert

GET https://localhost:5000/v1/api/iserver/account/mta

Retrieve information about your MTA alert. Each login user only has one mobile trading assistant (MTA) alert with it's own unique tool id that cannot be changed. MTA alerts can not be created or deleted, only modified. When modified a new order Id is generated.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/get-mta-details

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

The alert description for the unique MTA alert on the account.

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
  "order_id": 167426254,
  "tif": "GTC",
  "alert_active": 1,
  "alert_repeatable": 1,
  "alert_email": "jonh.smith@example.com",
  "alert_send_message": 1,
  "alert_show_popup": 0,
  "order_status": "Submitted",
  "alert_triggered": 1,
  "fg_color": "#FFFFFF",
  "bg_color": "#0000CC",
  "order_not_editable": false,
  "itws_orders_only": 0,
  "alert_mta_currency": "USD",
  "alert_mta_defaults": "9:STATE=1,MIN=-260000,MAX=260000,STEP=500,DEF_MIN=-26000,DEF_MAX=26000|8:STATE=0,MIN=-15,MAX=15,STEP=0.5,DEF_MIN=-2,DEF_MAX=2|7:STATE=1,MIN=-5,MAX=5,STEP=0.5,DEF_MIN=-2,DEF_MAX=2|4:STATE=1,MIN=1,MAX=50,STEP=1,DEF_VAL=10|5:STATE=0",
  "tool_id": 55834574848,
  "time_zone": "all timezones can be here",
  "condition_size": 1,
  "condition_outside_rth": 0,
  "conditions": [
    {
      "condition_type": 5,
      "conidex": "*@*",
      "contract_description_1": "Unknown",
      "condition_value": "*",
      "condition_logic_bind": true
    }
  ],
  "alert_name": "MTA (AutoAlert)"
}
```

**SDK Code**

```javascript mta-details
const url = 'https://localhost:5000/v1/api/iserver/account/mta';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go mta-details
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/mta"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby mta-details
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/mta")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php mta-details
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/mta', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift mta-details
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/mta")! as URL,
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
