> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Initialize Brokerage Session

POST https://localhost:5000/v1/api/iserver/auth/ssodh/init
Content-Type: application/json

After retrieving the access token and subsequent Live Session Token, customers can initialize their brokerage session with the ssodh/init endpoint.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-session/initialize-session

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects a brokerageSessionInitRequest.

- `publish` (boolean, optional) — publish brokerage session token at the same time when brokerage session initialized. If set false, then session token should be published before calling init. Setting true is preferred way.
- `compete` (boolean, optional) — Determines if other brokerage sessions should be disconnected to prioritize this connection.

## Response

### 200

An array of objects detailing contract information.

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

### 500 Internal Server Error

internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests. For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem.

- `error` (string, optional) — error reason

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### BrokerageSessionStatusServerInfo

- `serverName` (string, optional) — IBKR server information. Internal use only.
- `serverVersion` (string, optional) — IBKR version information. Internal use only.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "success": {
    "value": {
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
  }
}
```

**SDK Code**

```python Trading Session_initializeSession_example
import requests

url = "https://localhost:5000/v1/api/iserver/auth/ssodh/init"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript Trading Session_initializeSession_example
const url = 'https://localhost:5000/v1/api/iserver/auth/ssodh/init';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Trading Session_initializeSession_example
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/auth/ssodh/init"

	payload := strings.NewReader("{}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Trading Session_initializeSession_example
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/auth/ssodh/init")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java Trading Session_initializeSession_example
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/auth/ssodh/init")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php Trading Session_initializeSession_example
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/auth/ssodh/init', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Trading Session_initializeSession_example
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/auth/ssodh/init");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Trading Session_initializeSession_example
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/auth/ssodh/init")! as URL,
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