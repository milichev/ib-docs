[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/list-participating-banks)

# Get Participating Banks

GET https://localhost:5000/gw/api/v1/participating-banks

Get list of banks which support banking connection with Interactive Brokers.**Scope**: `enumerations.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/list-participating-banks

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `client-id` (string, required) — The client's clientId

### Query parameters

- `type` (string, required) — Parameter for which the list of participating banks is fetched

## Response

### 200

Returns the list of participating banks.

- `type` (string, required) — Scheme/instruction type the participating bank list applies to.
- `participatingBanks` (list of GetParticipatingListResponseParticipatingBanksItems, required) — List of participating banks.

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a not found request.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code (404).
- `detail` (string, optional) — Human-readable explanation of the problem.

### 500 Internal Server Error

Unable to process request due to an Internal Error. Please try again later.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### GetParticipatingListResponseParticipatingBanksItems

- `institutionName` (string, required) — Name of the institution.
- `clearingCode` (string, required) — Clearing code of the institution.
- `BIC` (string, required) — BIC/SWIFT code of the institution.

## Examples

**Response**

```json
{
  "type": "eDDA",
  "participatingBanks": [
    {
      "institutionName": "WELAB BANK LIMITED",
      "clearingCode": "390",
      "BIC": "WEDIHKHHXXX"
    },
    {
      "institutionName": "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED",
      "clearingCode": "072",
      "BIC": "UBHKHKHHXXX"
    },
    {
      "institutionName": "FUSION BANK LIMITED",
      "clearingCode": "391",
      "BIC": "IFFUHKHHXXX"
    },
    {
      "institutionName": "CITIBANK (HONG KONG) LIMITED",
      "clearingCode": "250",
      "BIC": "CITIHKAXXXX"
    }
  ]
}
```

**SDK Code**

```go Participating Banks
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/participating-banks?type=eDDA"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Participating Banks
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/participating-banks?type=eDDA")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Participating Banks
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/participating-banks?type=eDDA")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Participating Banks
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/participating-banks?type=eDDA', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Participating Banks
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/participating-banks?type=eDDA")! as URL,
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
