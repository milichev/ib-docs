[source](https://www.interactivebrokers.com/docs/web-api/api-reference/authentication/oauth-1-0-a/req-access-token)

# Generate An Access Token

POST https://localhost:5000/v1/api/oauth/access_token

Request an access token for the IB username that has granted authorization to the consumer.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/authentication/oauth-1-0-a/req-access-token

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `Authorization` (string, optional) — OAuth 1.0a authorization request header for request to /access_token endpoint.

## Response

### 200

Success response with permanent OAuth access token

- `is_true` (boolean, optional) — Indicates whether the authorizing username is paper or not.
- `oauth_token` (string, optional) — Permanent OAuth access token for the consumer with respect to the authorizing username. 20 character hex value.
- `oauth_token_secret` (string, optional) — OAuth token secret value. Base64-encoded string.

## Errors

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Examples

**Response**

```json
{
  "oauth_token": "a1b2c3d4e5f6a7b8c9d0",
  "oauth_token_secret": "coPZc+YOyFy7IdMg6is+etf9HASi3Um3SIhZvILcaifG6zhzZygYafYZx4XTFsrefRV/qrsy4sMAMwyPVp07VgkfQJPJkxYA7Sjhwz/Q76vuVN2YZNsRirNyL63Q3t+EHkjKA5HJEFY2PiIgqO4EWZ4etZUl3iZjCStiahhD+BNv7zgrlxS0bB4lL4vKw9AGcUiUnIQrqzTGJPj0/P2Zc3fMqCbXVWRcoYRcwUkk9ZYtMaIwPPVgvJ0c76rle5O5m4R4ZoFgrjfXpNiXC1F8MRS0fc7T6pgyyMvV+vI2C9XZbl7cNIEuCvtz3XYLNlUi+svyeZJh4RzjB824qH/fJQ==",
  "is_paper": true
}
```

**SDK Code**

```javascript Success
const url = 'https://localhost:5000/v1/api/oauth/access_token';
const options = {method: 'POST', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/oauth/access_token"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/oauth/access_token")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/oauth/access_token', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/oauth/access_token")! as URL,
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
