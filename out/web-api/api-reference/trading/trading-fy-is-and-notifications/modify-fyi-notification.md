[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/modify-fyi-notification)

# Modify FYI Notifications

POST https://localhost:5000/v1/api/fyi/settings/{typecode}
Content-Type: application/json

Enable or disable group of notifications by the specific typecode.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/modify-fyi-notification

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `typecode` (enum, required) — Many FYI endpoints reference a "typecode" value. The table below lists the available codes and what they correspond to. * `BA` - Borrow Availability * `CA` - Comparable Algo * `DA` - Dividends Advisory * `EA` - Upcoming Earnings * `MF` - Mutual Fund Advisory * `OE` - Option Expiration * `PR` - Portfolio Builder Rebalance * `SE` - Suspend Order on Economic Event * `SG` - Short Term Gain turning Long Term * `SM` - System Messages * `T2` - Assignment Realizing Long-Term Gains * `TO` - Takeover * `UA` - User Alert * `M8` - M871 Trades * `PS` - Platform Use Suggestions * `DL` - Unexercised Option Loss Prevention Reminder * `PT` - Position Transfer * `CB` - Missing Cost Basis * `MS` - Milestones * `TD` - MiFID || 10% Deprecation Notice * `ST` - Save Taxes * `TI` - Trade Idea * `CT` - Cash Transfer
  - Allowed values: `BA`, `CA`, `DA`, `EA`, `MF`, `OE`, `PR`, `SE`, `SG`, `SM`, `T2`, `TO`, `UA`, `M8`, `PS`, `DL`, `PT`, `CB`, `MS`, `TD`, `ST`, `TI`, `CT`

### Body (application/json)

This endpoint expects an object.

- `enabled` (boolean, optional) — the notification should be enabled or disabled.

## Response

### 200

Successfully retrieve preset details

- `V` (long, optional) — Returns 1 to state message was acknowledged.
- `T` (long, optional) — Returns the time in ms to complete the edit.

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

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "V": 1,
  "T": 10
}
```

**SDK Code**

```go successEdited
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/settings/BA"

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

```ruby successEdited
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fyi/settings/BA")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java successEdited
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fyi/settings/BA")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php successEdited
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fyi/settings/BA', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift successEdited
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/settings/BA")! as URL,
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
