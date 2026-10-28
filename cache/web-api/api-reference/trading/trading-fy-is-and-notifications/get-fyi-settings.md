> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Get Notification Settings

GET https://localhost:5000/v1/api/fyi/settings

Return the current choices of subscriptions for notifications.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/get-fyi-settings

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Indicates data is being returned successfully.

- `list of FyiSettingsItems`

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

### FyiSettingsItems

- `A` (long, optional) — Returns ony if the subscription can be disabled/enabled manually. See /fyi/settings/\{typecode} for how to enable/disable.
- `FC` (string, optional) — Fyi code for enabling or disabling the notification.
- `H` (long, optional) — Disclaimer if the notification was read.
- `FD` (string, optional) — Returns a detailed description of the topic.
- `FN` (string, optional) — Returns a human readable title for the notification.

## Examples

**Response**

```json
[
  {
    "A": 1,
    "FC": "PF",
    "H": 0,
    "FD": "Notify me of recent activity affecting my portfolio holdings.",
    "FN": "Portfolio FYIs"
  },
  {
    "A": 1,
    "FC": "PT",
    "H": 0,
    "FD": "Notify me of potential account configuration changes needed and useful features based on my position transfers.",
    "FN": "Position Transfer"
  }
]
```

**SDK Code**

```python settings
import requests

url = "https://localhost:5000/v1/api/fyi/settings"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript settings
const url = 'https://localhost:5000/v1/api/fyi/settings';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go settings
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/settings"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby settings
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fyi/settings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java settings
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/fyi/settings")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php settings
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/fyi/settings', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp settings
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/fyi/settings");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift settings
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/settings")! as URL,
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