[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/modify-fyi-emails)

# Toggle Email Delivery

PUT https://localhost:5000/v1/api/fyi/deliveryoptions/email

Enable or disable your account's primary email to receive notifications.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/modify-fyi-emails

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `enabled` (any, required)

## Response

### 200

Successfully enabled or disabled your email notifications.

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
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/deliveryoptions/email?enabled="

	req, _ := http.NewRequest("PUT", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

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

url = URI("https://localhost:5000/v1/api/fyi/deliveryoptions/email?enabled=")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java successEdited
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.put("https://localhost:5000/v1/api/fyi/deliveryoptions/email?enabled=")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php successEdited
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://localhost:5000/v1/api/fyi/deliveryoptions/email?enabled=', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift successEdited
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/deliveryoptions/email?enabled=")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
