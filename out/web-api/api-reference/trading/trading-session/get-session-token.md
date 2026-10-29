[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-session/get-session-token)

# Brokerage Keep-Alive Ping

POST https://localhost:5000/v1/api/tickle

If the gateway has not received any requests for several minutes an open session will automatically timeout. The tickle endpoint pings the server to prevent the session from ending. It is expected to call this endpoint approximately every 60 seconds to maintain the connection to the brokerage session.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-session/get-session-token

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

An array of objects detailing contract information.

- `tickleResponse`
  - successfulTickleResponse: successfulTickleResponse
  - failedTickleResponse: failedTickleResponse

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### successfulTickleResponse

- `session` (string, optional) — Returns the session token of the contract.
- `ssoExpires` (long, optional) — Returns the number of milliseconds until the current sso session expires.
- `collission` (boolean, optional) — (Internal Use Only)
- `userId` (long, optional) — (Internal Use Only)
- `hmds` (SuccessfulTickleResponseHmds, optional) — Returns connection details for the historical market data server.
- `iserver` (SuccessfulTickleResponseIserver, optional)

### failedTickleResponse

- `error` (string, optional) — reason why tickle was accepted by not processed

### SuccessfulTickleResponseHmds

Returns connection details for the historical market data server.

- `error` (string, optional) — Relays any internal connection errors.
- `authStatus` (list of any, optional) — Returns authentication details.

### SuccessfulTickleResponseIserver

- `authStatus` (brokerageSessionStatus, optional)

### brokerageSessionStatus

- `authenticated` (boolean, optional) — Returns whether your brokerage session is authenticated or not.
- `established` (boolean, optional) — Returns whether your brokerage session is fully established and ready to handle requests. Set to true when the login message is received from underlying brokerage infrastructure, indicating authentication is complete and account information is loaded.
- `competing` (boolean, optional) — Returns whether you have a competing brokerage session in another connection.
- `connected` (boolean, optional) — Returns whether you are connected to the gateway or not.
- `message` (string, optional) — A message about your authenticate status if any.
- `MAC` (string, optional) — Device MAC information.
- `serverInfo` (BrokerageSessionStatusServerInfo, optional)
- `hardware_info` (string, optional) — Client Portal use only.
- `fail` (string, optional) — Returns the reason for failing to retrieve authentication status.

### BrokerageSessionStatusServerInfo

- `serverName` (string, optional) — IBKR server information. Internal use only.
- `serverVersion` (string, optional) — IBKR version information. Internal use only.

## Examples

**Response**

```json
{
  "fail": {
    "value": {
      "error": "failed to process request"
    }
  },
  "success": {
    "value": {
      "collission": false,
      "hmds": {
        "error": "no bridge"
      },
      "iserver": {
        "authStatus": {
          "MAC": "98:F2:B3:23:BF:A0",
          "authenticated": true,
          "competing": false,
          "connected": true,
          "established": true,
          "message": "",
          "serverInfo": {
            "serverName": "JifN19053",
            "serverVersion": "Build 10.25.0p, Dec 5, 2023 5:48:12 PM"
          }
        }
      },
      "session": "bb665d0f55b6289d70bc7380089fc96f",
      "ssoExpires": 460311,
      "userId": 123456789
    }
  }
}
```

**SDK Code**

```python Trading Session_getSessionToken_example
import requests

url = "https://localhost:5000/v1/api/tickle"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Trading Session_getSessionToken_example
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/tickle"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Trading Session_getSessionToken_example
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/tickle")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Trading Session_getSessionToken_example
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/tickle', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Trading Session_getSessionToken_example
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/tickle")! as URL,
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
