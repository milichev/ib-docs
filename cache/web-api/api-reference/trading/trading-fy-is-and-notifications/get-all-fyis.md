> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# List All Notifications

GET https://localhost:5000/v1/api/fyi/notifications

Get a list of available notifications.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/get-all-fyis

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `max` (long, required)
- `include` (any, optional)
- `exclude` (any, optional)
- `id` (any, optional)

## Response

### 200

Successfully enabled or disabled your email notifications.

- `list of NotificationsItems`

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

### NotificationsItems

- `R` (string, optional) — Return if the notification was read or not. Value Format: 0: Disabled; 1: Enabled.
- `D` (string, optional) — Notification date as an epoch string.
- `MS` (string, optional) — Title of notification.
- `MD` (string, optional) — Content of notification.
- `ID` (string, optional) — Unique way to reference the notification.
- `HT` (long, optional) — HT
- `FC` (string, optional) — FYI code, we can use it to find whether the disclaimer is accepted or not in settings

## Examples

**Response**

```json
[
  {
    "R": "0",
    "D": "1710847062.0",
    "MS": "FYI: Changes in Analyst Ratings",
    "MD": "<html>Some investors use analysts ratings to stay informed about their investments. Analysts have changed their ratings for one or more companies in which you hold positions.    <br />The following summary displays the affected companies, the current number of analysts by rating category and, in parentheses, the recent change in the number of analysts rating the company within each rating category.  <br /> - JWN@NYSE: Buy: 1(0), Outperform: 1(0), Hold: 12(-1), Underperform: 5(0), Sell: 0(0). Held in: D****000 <br /> - RF@NYSE: Buy: 4(+1), Outperform: 5(0), Hold: 17(-1), Underperform: 1(0), Sell: 0(0). Held in: D****000 <br /> <br />   Note: Current ratings are from Reuters and may not reflect all rating changes from other sources such as Street Insider and Briefing.</html>",
    "ID": "2024031947509444",
    "HT": 0,
    "FC": "PF"
  },
  {
    "R": "1",
    "D": "1710761985.0",
    "MS": "FYI: Changes in Analyst Ratings",
    "MD": "<html>Some investors use analysts ratings to stay informed about their investments. Analysts have changed their ratings for one or more companies in which you hold positions.    <br />The following summary displays the affected companies, the current number of analysts by rating category and, in parentheses, the recent change in the number of analysts rating the company within each rating category.  <br /> - F@NYSE: Buy: 4(0), Outperform: 4(0), Hold: 15(+1), Underperform: 3(-1), Sell: 1(0). Held in: D****000 <br /> - RF@NYSE: Buy: 4(+1), Outperform: 5(0), Hold: 17(-1), Underperform: 1(0), Sell: 0(0). Held in: D****000 <br /> - TSLA@NASDAQ: Buy: 5(0), Outperform: 12(0), Hold: 21(0), Underperform: 7(+1), Sell: 4(0). Held in: D****000 <br /> - UAA@NYSE: Buy: 6(0), Outperform: 2(-1), Hold: 17(+1), Underperform: 2(0), Sell: 0(0). Held in: D****000 <br /> <br />   Note: Current ratings are from Reuters and may not reflect all rating changes from other sources such as Street Insider and Briefing.</html>",
    "ID": "2024031843829868",
    "HT": 0,
    "FC": "PF"
  },
  {
    "R": "1",
    "D": "1710501829.0",
    "MS": "FYI: Changes in Analyst Ratings",
    "MD": "<html>Some investors use analysts ratings to stay informed about their investments. Analysts have changed their ratings for one or more companies in which you hold positions.    <br />The following summary displays the affected companies, the current number of analysts by rating category and, in parentheses, the recent change in the number of analysts rating the company within each rating category.  <br /> - F@NYSE: Buy: 4(0), Outperform: 4(0), Hold: 14(+1), Underperform: 4(0), Sell: 1(0). Held in: D****000 <br /> - UAA@NYSE: Buy: 6(0), Outperform: 3(-1), Hold: 16(-1), Underperform: 2(+1), Sell: 0(0). Held in: D****000 <br /> <br />   Note: Current ratings are from Reuters and may not reflect all rating changes from other sources such as Street Insider and Briefing.</html>",
    "ID": "2024031537589663",
    "HT": 0,
    "FC": "PF"
  }
]
```

**SDK Code**

```python all-notifications
import requests

url = "https://localhost:5000/v1/api/fyi/notifications"

querystring = {"max":"10"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```javascript all-notifications
const url = 'https://localhost:5000/v1/api/fyi/notifications?max=10';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go all-notifications
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/notifications?max=10"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby all-notifications
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fyi/notifications?max=10")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java all-notifications
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/fyi/notifications?max=10")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php all-notifications
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/fyi/notifications?max=10', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp all-notifications
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/fyi/notifications?max=10");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift all-notifications
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/notifications?max=10")! as URL,
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