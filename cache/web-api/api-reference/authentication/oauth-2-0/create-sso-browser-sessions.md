> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Create SSO Browser Session.

POST https://localhost:5000/gw/api/v1/sso-browser-sessions
Content-Type: application/json

**Scope**: `sso-browser-sessions.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/authentication/oauth-2-0/create-sso-browser-sessions

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `authorization` (string, required) — Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...).

### Body (application/json)

This endpoint expects a CreateBrowserSessionRequest.

- `credential` (string, required)
- `ip` (string, required)

## Response

### 200

Create a Single Sign On (SSO) to access the IBKR hosted portal (White Branded).

- `active` (boolean, optional)
- `url` (string, optional)

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a bad request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `invalidArguments` (list of InvalidArgument, optional)

### 401 Unauthorized Error

Returns a Problem detail instance representing an unauthorized request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 403 Forbidden Error

Returns a Problem detail instance representing a forbidden request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 500 Internal Server Error

Returns a Problem detail instance representing an internal server error.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### InvalidArgument

- `field` (string, required)
- `description` (string, optional)

## Examples

**Request**

```json
{
  "credential": "ddowney2",
  "ip": "10.10.10.10"
}
```

**Response**

```json
{
  "active": true,
  "url": "https://www.interactivebrokers.com/sso/..."
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/sso-browser-sessions"

payload = {
    "credential": "ddowney2",
    "ip": "10.10.10.10"
}
headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1...",
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript
const url = 'https://localhost:5000/gw/api/v1/sso-browser-sessions';
const options = {
  method: 'POST',
  headers: {
    authorization: 'Bearer eyJ0eXAiOiJKV1...',
    Authorization: 'Bearer <token>',
    'Content-Type': 'application/json'
  },
  body: '{"credential":"ddowney2","ip":"10.10.10.10"}'
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
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/sso-browser-sessions"

	payload := strings.NewReader("{\n  \"credential\": \"ddowney2\",\n  \"ip\": \"10.10.10.10\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("authorization", "Bearer eyJ0eXAiOiJKV1...")
	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

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

url = URI("https://localhost:5000/gw/api/v1/sso-browser-sessions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["authorization"] = 'Bearer eyJ0eXAiOiJKV1...'
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"credential\": \"ddowney2\",\n  \"ip\": \"10.10.10.10\"\n}"

response = http.request(request)
puts response.read_body
```

```java
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/sso-browser-sessions")
  .header("authorization", "Bearer eyJ0eXAiOiJKV1...")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"credential\": \"ddowney2\",\n  \"ip\": \"10.10.10.10\"\n}")
  .asString();
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/sso-browser-sessions', [
  'body' => '{
  "credential": "ddowney2",
  "ip": "10.10.10.10"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
    'authorization' => 'Bearer eyJ0eXAiOiJKV1...',
  ],
]);

echo $response->getBody();
```

```csharp
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/sso-browser-sessions");
var request = new RestRequest(Method.POST);
request.AddHeader("authorization", "Bearer eyJ0eXAiOiJKV1...");
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"credential\": \"ddowney2\",\n  \"ip\": \"10.10.10.10\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = [
  "authorization": "Bearer eyJ0eXAiOiJKV1...",
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "credential": "ddowney2",
  "ip": "10.10.10.10"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/sso-browser-sessions")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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