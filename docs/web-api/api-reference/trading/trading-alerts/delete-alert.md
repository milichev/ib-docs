[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-alerts/delete-alert)

# Delete An Alert

DELETE https://localhost:5000/v1/api/iserver/account/{accountId}/alert/{alertId}
Content-Type: application/json

Permanently delete an existing alert. Deleting an MTA alert will reset it to the default state.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-alerts/delete-alert

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)
- `alertId` (string, required)

## Response

### 200

An object containing details on the deleted endpoint.

- `request_id` (long, optional) — Not applicable
- `order_id` (long, optional) — The tracking number of the alert. Occasssionally referenced as the alertId or alert_id.
- `success` (boolean, optional) — Displays result status of alert request
- `text` (string, optional) — Response message to clarify success status reason.
- `failure_list` (string, optional) — If "success" returns false, will list failed order Ids

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 500 Internal Server Error

Internal Server Error; Unable to delete alert in case when provided alert id doesn't exist

- `error` (string, optional) — error reason

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "order_id": 833967258,
  "success": true,
  "text": "Request was submitted"
}
```

**SDK Code**

```javascript successfully-deleted
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/9876543210';
const options = {
  method: 'DELETE',
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

```go successfully-deleted
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/alert/9876543210"

	payload := strings.NewReader("{}")

	req, _ := http.NewRequest("DELETE", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby successfully-deleted
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/alert/9876543210")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php successfully-deleted
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://localhost:5000/v1/api/iserver/account/U1234567/alert/9876543210', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift successfully-deleted
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/alert/9876543210")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
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
