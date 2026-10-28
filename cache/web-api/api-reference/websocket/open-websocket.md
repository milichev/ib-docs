> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

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

```python
import requests

url = "https://localhost:5000/v1/api/ws"

headers = {
    "Connection": "Upgrade",
    "Upgrade": "websocket",
    "Authorization": "Bearer <token>"
}

response = requests.get(url, headers=headers)

print(response.json())
```

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

```java
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/ws")
  .header("Connection", "Upgrade")
  .header("Upgrade", "websocket")
  .header("Authorization", "Bearer <token>")
  .asString();
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

```csharp
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/ws");
var request = new RestRequest(Method.GET);
request.AddHeader("Connection", "Upgrade");
request.AddHeader("Upgrade", "websocket");
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
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