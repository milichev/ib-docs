> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Account Profit And Loss

GET https://localhost:5000/v1/api/iserver/account/pnl/partitioned

Returns updated profit and loss values for the selected account. Initial request will return an empty array in the upnl object.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-pnl

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Response

### 200

Refers to "updated PnL". Holds a json object of key-value paired pnl details.

- `upnl` (PnlPartitionedResponseUpnl, optional) — Refers to the U accounts PnL. This does reference Realized Profit and Loss.

## Errors

### 400 Bad Request Error

bad request; passed input cannot pass initial validation and detected right away

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

### 401 Unauthorized Error

Missing, invalid, or unparseable Authorization token.

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### 503 Service Unavailable Error

service is unavailable. For example if request takes more than 10s due to some internal service unavailability, request aborted and this status returned

- `error` (string, optional) — error reason
- `statusCode` (long, optional) — mimic response status code

## Types

### PnlPartitionedResponseUpnl

Refers to the U accounts PnL. This does reference Realized Profit and Loss.

- `U1234567.Core` (PnlPartitionedResponseUpnlU1234567Core, optional) — The account or model's Profit and Loss.

### PnlPartitionedResponseUpnlU1234567Core

The account or model's Profit and Loss.

- `rowType` (long, optional) — Returns the positional value of the returned account. Always returns 1 for individual accounts.
- `dpl` (long, optional) — Daily PnL for the specified account profile.
- `nl` (long, optional) — Net Liquidity for the specified account profile.
- `upl` (long, optional) — Unrealized PnL for the specified account profile.
- `el` (long, optional) — Excess Liquidity for the specified account profile.
- `mv` (long, optional) — Margin value for the specified account profile.

## Examples

### success

**Response**

```json
{
  "upnl": {
    "U1234567.Core": {
      "rowType": 1,
      "dpl": -12510,
      "nl": 1290000,
      "upl": 256000,
      "el": 824600,
      "mv": 1700000
    }
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/iserver/account/pnl/partitioned"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/account/pnl/partitioned';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/pnl/partitioned"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/pnl/partitioned")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/pnl/partitioned")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/pnl/partitioned', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/pnl/partitioned");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/pnl/partitioned")! as URL,
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

### can-be-empty-for-initial-request

**Response**

```json
{
  "upnl": {}
}
```

**SDK Code**

```python can-be-empty-for-initial-request
import requests

url = "https://localhost:5000/v1/api/iserver/account/pnl/partitioned"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript can-be-empty-for-initial-request
const url = 'https://localhost:5000/v1/api/iserver/account/pnl/partitioned';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go can-be-empty-for-initial-request
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/pnl/partitioned"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby can-be-empty-for-initial-request
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/pnl/partitioned")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java can-be-empty-for-initial-request
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/pnl/partitioned")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php can-be-empty-for-initial-request
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/pnl/partitioned', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp can-be-empty-for-initial-request
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/pnl/partitioned");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift can-be-empty-for-initial-request
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/pnl/partitioned")! as URL,
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