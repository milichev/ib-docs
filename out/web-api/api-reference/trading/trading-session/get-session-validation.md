[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-session/get-session-validation)

# Validate SSO Web API Session

GET https://localhost:5000/v1/api/sso/validate

Validates the current session for the SSO user.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-session/get-session-validation

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

An array of objects detailing contract information.

- `USER_ID` (long, optional) — Internal user identifier.
- `USER_NAME` (string, optional) — current username logged in for the session.
- `RESULT` (boolean, optional) — Confirms if validation was successful. True if session was validated; false if not.
- `AUTH_TIME` (long, optional) — Returns the time of authentication in epoch time.
- `SF_ENABLED` (boolean, optional) — (Internal use only)
- `IS_FREE_TRIAL` (boolean, optional) — Returns if the account is a trial account or a funded account.
- `CREDENTIAL` (string, optional) — Returns the underlying username of the account.
- `IP` (string, optional) — Internal use only. Does not reflect the IP address of the user.
- `EXPIRES` (long, optional) — Returns the time until SSO session expiration in milliseconds.
- `QUALIFIED_FOR_MOBILE_AUTH` (boolean, optional) — Returns if the customer requires two factor authentication.
- `LANDING_APP` (string, optional) — Used for Client Portal (Internal use only)
- `IS_MASTER` (boolean, optional) — Returns whether the account is a master account (true) or subaccount (false).
- `lastAccessed` (long, optional) — Returns the last time the user was accessed in epoch time.
- `loginType` (long, optional) — Returns the login type. 1 for Live, 2 for Paper
- `PAPER_USER_NAME` (string, optional) — Returns the paper username for the account.
- `features` (SsoValidateResponseFeatures, optional) — Returns supported features such as bonds and option trading.
- `region` (string, optional) — Returns the region connected to internally.

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

## Types

### SsoValidateResponseFeatures

Returns supported features such as bonds and option trading.

- `envs` (string, optional) — Returns the connecting environment to distinguish production or paper.
- `wlms` (boolean, optional) — Internal Use Only
- `realtime` (boolean, optional) — Returns if realtime market data is available
- `bond` (boolean, optional) — Returns if bonds can be traded.
- `optionChains` (boolean, optional) — Returns if option chains can be retrieved in the account.
- `calendar` (boolean, optional) — Returns if trading calendars are enabled
- `newMf` (boolean, optional) — Internal Use Only

## Examples

**Response**

```json
{
  "success": {
    "value": {
      "AUTH_TIME": 1702580846836,
      "CREDENTIAL": "user1234",
      "EXPIRES": 415890,
      "IP": "12.345.678.901",
      "IS_FREE_TRIAL": false,
      "IS_MASTER": false,
      "LANDING_APP": "UNIVERSAL",
      "LOGIN_TYPE": 2,
      "PAPER_USER_NAME": "user1234",
      "QUALIFIED_FOR_MOBILE_AUTH": null,
      "RESULT": true,
      "SF_ENABLED": false,
      "USER_ID": 123456789,
      "USER_NAME": "user1234",
      "features": {
        "bond": true,
        "calendar": true,
        "env": "PROD",
        "newMf": true,
        "optionChains": true,
        "realtime": true,
        "wlms": true
      },
      "lastAccessed": 1702581069652,
      "region": "NJ"
    }
  }
}
```

**SDK Code**

```go Trading Session_getSessionValidation_example
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/sso/validate"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Trading Session_getSessionValidation_example
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/sso/validate")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Trading Session_getSessionValidation_example
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/sso/validate")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Trading Session_getSessionValidation_example
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/sso/validate', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Trading Session_getSessionValidation_example
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/sso/validate")! as URL,
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
