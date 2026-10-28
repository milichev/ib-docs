[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-session/get-brokerage-status)

# Brokerage Session Status

POST https://localhost:5000/v1/api/iserver/auth/status

Current Authentication status to the Brokerage system. Market Data and Trading is not possible if not authenticated.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-session/get-brokerage-status

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Detailed status of the Brokerage session

- `authenticated` (boolean, optional) — Returns whether your brokerage session is authenticated or not.
- `established` (boolean, optional) — Returns whether your brokerage session is fully established and ready to handle requests. Set to true when the login message is received from underlying brokerage infrastructure, indicating authentication is complete and account information is loaded.
- `competing` (boolean, optional) — Returns whether you have a competing brokerage session in another connection.
- `connected` (boolean, optional) — Returns whether you are connected to the gateway or not.
- `message` (string, optional) — A message about your authenticate status if any.
- `MAC` (string, optional) — Device MAC information.
- `serverInfo` (BrokerageSessionStatusServerInfo, optional)
- `hardware_info` (string, optional) — Client Portal use only.
- `fail` (string, optional) — Returns the reason for failing to retrieve authentication status.

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### BrokerageSessionStatusServerInfo

- `serverName` (string, optional) — IBKR server information. Internal use only.
- `serverVersion` (string, optional) — IBKR version information. Internal use only.

## Examples

**Response**

```json
{
  "success": {
    "value": {
      "MAC": "12:B:B3:23:BF:A0",
      "authenticated": true,
      "competing": false,
      "connected": true,
      "established": true,
      "fail": "",
      "hardware_info": "21026956|06:8E:04:45:DA:8F",
      "message": "",
      "serverInfo": {
        "serverName": "JifN19053",
        "serverVersion": "Build 10.25.0p, Dec 5, 2023 5:48:12 PM"
      }
    }
  }
}
```

**SDK Code**

```go Trading Session_getBrokerageStatus_example
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/auth/status"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Trading Session_getBrokerageStatus_example
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/auth/status")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Trading Session_getBrokerageStatus_example
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/auth/status")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Trading Session_getBrokerageStatus_example
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/auth/status', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Trading Session_getBrokerageStatus_example
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/auth/status")! as URL,
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
