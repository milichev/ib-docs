[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/read-fyi-notification)

# Mark Notification Read

PUT https://localhost:5000/v1/api/fyi/notifications/{notificationId}

Mark a particular notification message as read or unread.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fy-is-and-notifications/read-fyi-notification

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `notificationId` (any, required)

## Response

### 200

Successfully enabled or disabled your email notifications.

- `V` (long, optional) — Returns 1 to state message was acknowledged.
- `T` (long, optional) — Returns the time in ms to complete the edit.
- `P` (NotificationReadAcknowledgeP, optional) — Returns details about the notification read status.

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

### NotificationReadAcknowledgeP

Returns details about the notification read status.

- `R` (long, optional) — Returns if the message was read (1) or unread (0).
- `ID` (string, optional) — Returns the ID for the notification.

## Examples

**Response**

```json
{
  "V": 1,
  "T": 5,
  "P": {
    "R": 1,
    "ID": "2024031947509444"
  }
}
```

**SDK Code**

```javascript acknowledged
const url = 'https://localhost:5000/v1/api/fyi/notifications/:notificationId';
const options = {method: 'PUT', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go acknowledged
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fyi/notifications/:notificationId"

	req, _ := http.NewRequest("PUT", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby acknowledged
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fyi/notifications/:notificationId")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php acknowledged
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://localhost:5000/v1/api/fyi/notifications/:notificationId', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift acknowledged
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fyi/notifications/:notificationId")! as URL,
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
