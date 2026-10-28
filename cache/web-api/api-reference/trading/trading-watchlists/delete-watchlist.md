> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Delete A Saved Watchlist

DELETE https://localhost:5000/v1/api/iserver/watchlist

Delete a specified watchlist from the username's settings.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-watchlists/delete-watchlist

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `id` (string, required) — Watchlist ID of the watchlist to be deleted.

## Response

### 200

Successful deletion of specified watchlist.

- `data` (WatchlistDeleteSuccessData, optional)
- `action` (enum, optional) — Internal use. Always has value 'context'.
  - Allowed values: `context`
- `MID` (string, optional) — Internal use. Number of times endpoint has been visited during session.

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

### WatchlistDeleteSuccessData

- `deleted` (string, optional) — Watchlist ID of the deleted watchlist.

## Examples

**Response**

```json
{
  "data": {
    "deleted": "1234"
  },
  "action": "context",
  "MID": "2"
}
```

**SDK Code**

```python watchlistDeleteSuccessExample
import requests

url = "https://localhost:5000/v1/api/iserver/watchlist"

querystring = {"id":"1234"}

headers = {"Authorization": "Bearer <token>"}

response = requests.delete(url, headers=headers, params=querystring)

print(response.json())
```

```javascript watchlistDeleteSuccessExample
const url = 'https://localhost:5000/v1/api/iserver/watchlist?id=1234';
const options = {method: 'DELETE', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go watchlistDeleteSuccessExample
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/watchlist?id=1234"

	req, _ := http.NewRequest("DELETE", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby watchlistDeleteSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/watchlist?id=1234")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java watchlistDeleteSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.delete("https://localhost:5000/v1/api/iserver/watchlist?id=1234")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php watchlistDeleteSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://localhost:5000/v1/api/iserver/watchlist?id=1234', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp watchlistDeleteSuccessExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/watchlist?id=1234");
var request = new RestRequest(Method.DELETE);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift watchlistDeleteSuccessExample
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/watchlist?id=1234")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
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