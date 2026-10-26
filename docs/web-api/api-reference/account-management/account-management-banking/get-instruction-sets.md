[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/get-instruction-sets)

# Get Status For InstructionSetId

GET https://localhost:5000/gw/api/v1/instruction-sets/{instructionSetId}

Retrieve status of all requests associated with instructionSetId.**Scope**: `instructions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/get-instruction-sets

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `client-id` (string, required) — The client's clientId
- `instructionSetId` (long, required) — The target instruction set id.

## Response

### 200

Returns the status multiple instructions.

- `status` (long, required) — HTTP status code for the bulk request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResults` (list of any, optional) — Per-instruction results for the bulk request.

## Errors

### 404 Not Found Error

Returns a Problem detail instance representing a not found request.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code (404).
- `instructionSetId` (long, required) — Identifier of the instruction set grouping the submitted instructions.
- `detail` (string, optional) — Human-readable explanation of the problem.

### 500 Internal Server Error

Unable to process request due to an Internal Error. Please try again later.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Examples

**Response**

```json
{
  "status": 200,
  "instructionSetId": 9094,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript Response
const url = 'https://localhost:5000/gw/api/v1/instruction-sets/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/instruction-sets/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Response
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/instruction-sets/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/instruction-sets/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Response
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/instruction-sets/-1988905739")! as URL,
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
