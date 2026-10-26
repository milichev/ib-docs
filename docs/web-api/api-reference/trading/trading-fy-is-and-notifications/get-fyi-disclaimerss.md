[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/get-fyi-disclaimerss)

# Get Disclaimers By FYI Type

GET https://localhost:5000/v1/api/fyi/disclaimer/{typecode}

Receive additional disclaimers based on the specified typecode.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/get-fyi-disclaimerss

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

## Response

### 200

Successfully disclaimer details

- `FC` (string, optional) — Returns the Typecode for the given disclaimer.
- `DT` (string, optional) — Returns the Disclaimer message.

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

**Response**

```json
{
  "FC": "BA",
  "DT": "This communication is provided for information purposes only and is not a recommendation or a solicitation to buy, sell or hold any investment product. Selling securities short involves significant risk and you may lose more than you invest."
}
```

**SDK Code**

```javascript ba-disclaimer
const url = 'https://localhost:5000/v1/api/fyi/disclaimer/BA';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go ba-disclaimer
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/disclaimer/BA"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby ba-disclaimer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fyi/disclaimer/BA")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php ba-disclaimer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/fyi/disclaimer/BA', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift ba-disclaimer
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/disclaimer/BA")! as URL,
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
