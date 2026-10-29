[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/authentication/oauth-1-0-a/req-live-session-token)

# Generate A Live Session Token

POST https://localhost:5000/v1/api/oauth/live_session_token

Generate a Live Session Token shared secret and gain access to Web API.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/authentication/oauth-1-0-a/req-live-session-token

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `Authorization` (string, optional) — OAuth 1.0a authorization request header for request to /live_session_token endpoint.

## Response

### 200

Success response with Diffie-Hellman challenge and Signature value

- `diffie_hellman_challenge` (string, optional) — Diffie-Hellman challenge value used to compute live session token locally by client.
- `live_session_token_signature` (string, optional) — Signature value used to validate successful client-side computation of live session token.
- `live_session_token_expiration` (long, optional) — Unix timestamp in milliseconds of time of live session token computation by IB. Live session tokens are valid for 24 hours from this time.

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
  "live_session_token_signature": "712549e22ba937ab10bc8d571bd3a9c20c43d7cb",
  "live_session_token_expiration": 1714669716258,
  "diffie_hellman_response": "74d222b7c3c0916eb3c7e60ecec937cd4f531aab5ea5698ebd754feeb39a9d7fe04c2887b5e11d8a8e4176c2eee7ddd42016e57c7a98cfbb9a3282c5247f7d4a9b8f544a34fac4d6334065b55d6a2e73e390175cfb94e80281443e555030c576d1db409bf96870dab20581bc01cdf28489778f20c714e7ad39af60c476cf2207a119df3af82bbefcdad7749fa5b4ae6e93169ec14f66ff3220cf3156487ca33932284b0a09af14f05a75269ab243362ff4eabb2e2a57db0d7911ca549f24affa1f92f04908fd9a2349cefb0f9326aca65fc144847ab837fcbd1635b1aa84b4509198e349fad87c2caf6744cb94be2c5c1c7ef9f08c44e85ded45ebeefa248dc8"
}
```

**SDK Code**

```python Success
import requests

url = "https://localhost:5000/v1/api/oauth/live_session_token"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/oauth/live_session_token"

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

url = URI("https://localhost:5000/v1/api/oauth/live_session_token")

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

$response = $client->request('POST', 'https://localhost:5000/v1/api/oauth/live_session_token', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/oauth/live_session_token")! as URL,
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
