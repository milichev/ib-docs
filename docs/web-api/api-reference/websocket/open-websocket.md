[source](https://www.interactivebrokers.com/docs/web-api/api-reference/websocket/open-websocket)

# Open Websocket

GET https://localhost:5000/v1/api/ws

Open websocket.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/websocket/open-websocket

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `bearer_token` (string, optional) — Required for OAuth 2.0 users. Query parameter defining Bearer Token to authorize connection.
- `oauth_token` (string, optional) — Required when authroizing with OAuth 1.0a. 8-character OAuth access token.

### Headers

- `Connection` (enum, required)
  - Allowed values: `Upgrade`
- `Upgrade` (enum, required)
  - Allowed values: `websocket`

## Examples

**SDK Code**

```javascript
const url = 'https://localhost:5000/v1/api/ws';
const options = {
  method: 'GET',
  headers: {Connection: 'Upgrade', Upgrade: 'websocket', Authorization: 'Bearer <token>'}
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/ws"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Connection", "Upgrade")
	req.Header.Add("Upgrade", "websocket")
	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/ws")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Connection"] = 'Upgrade'
request["Upgrade"] = 'websocket'
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/ws', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Connection' => 'Upgrade',
    'Upgrade' => 'websocket',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = [
  "Connection": "Upgrade",
  "Upgrade": "websocket",
  "Authorization": "Bearer <token>"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/ws")! as URL,
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
