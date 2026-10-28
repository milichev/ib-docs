> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Search Dynamic Accounts

GET https://localhost:5000/v1/api/iserver/account/search/{searchPattern}

Returns a list of accounts matching a query pattern set in the request. Broker accounts configured with the DYNACCT property will not receive account information at login. Instead, they must dynamically query then set their account number. Customers without the DYNACCT property will receive a 503 error.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-dynamic-accounts

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `searchPattern` (string, required)

## Response

### 200

Returns all accounts that match the searchPattern string.

- `matchedAccounts` (list of DynAccountSearchResponseMatchedAccountsItems, optional) — Contains a series of objects that pertain to the account information requested.
- `pattern` (string, optional) — Displays the searchPattern used for the request.

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

## Types

### DynAccountSearchResponseMatchedAccountsItems

- `accountId` (string, optional) — Returns a matching account ID that corresponds to the matching value.
- `alias` (string, optional) — Returns the corresponding alias or alternative name for the specific account ID. May be a duplicate of the accountId value in most cases.
- `allocationId` (string, optional) — Returns the allocation identifier used internally for the account.

## Examples

### successfully-found

**Response**

```json
{
  "matchedAccounts": [
    {
      "accountId": "U1234567",
      "alias": "U1234567",
      "allocationId": "U1234567"
    }
  ],
  "pattern": "U1"
}
```

**SDK Code**

```python successfully-found
import requests

url = "https://localhost:5000/v1/api/iserver/account/search/U123"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript successfully-found
const url = 'https://localhost:5000/v1/api/iserver/account/search/U123';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go successfully-found
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/search/U123"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby successfully-found
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/search/U123")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java successfully-found
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/search/U123")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php successfully-found
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/search/U123', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp successfully-found
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/search/U123");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift successfully-found
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/search/U123")! as URL,
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

### not-found

**Response**

```json
{
  "matchedAccounts": [],
  "pattern": "123"
}
```

**SDK Code**

```python not-found
import requests

url = "https://localhost:5000/v1/api/iserver/account/search/U123"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript not-found
const url = 'https://localhost:5000/v1/api/iserver/account/search/U123';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go not-found
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/account/search/U123"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby not-found
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/account/search/U123")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java not-found
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/search/U123")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php not-found
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/search/U123', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp not-found
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/search/U123");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift not-found
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/search/U123")! as URL,
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