[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-accounts/get-account-owners)

# List Account Signatures And Owners

GET https://localhost:5000/v1/api/acesws/{accountId}/signatures-and-owners

Receive a list of all applicant names on the account and for which account and entity is represented.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-account-owners

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

## Response

### 200

An object containing valid accounts and the account properties regarding trading access. This endpoint is also used to confirm account validation.

- `accountId` (string, optional) — Account identifier
- `users` (list of user, optional)
- `applicant` (SignatureAndOwnersApplicant, optional)

## Errors

### 400 Bad Request Error

bad request; accountId is empty

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

### user

- `roleId` (string, optional) — The role of the username as it relates to the account
- `hasRightCodeInd` (boolean, optional) — Internally used
- `userName` (string, optional) — Identifies the username for the designated entity.
- `entity` (UserEntity, optional) — Provide information about the particular entity

### SignatureAndOwnersApplicant

- `signatures` (list of string, optional) — All names attached to the account

### UserEntity

Provide information about the particular entity

- `entityName` (string, optional) — The full entity's name, concatenating the first and last name fields
- `entityType` (enum, optional) — The type of entity assigned to the user
  - Allowed values: `INDIVIDUAL`, `Joint`, `ORG`
- `firstName` (string, optional) — The first name of the user
- `lastName` (string, optional) — The last name of the user

## Examples

**Response**

```json
{
  "accountId": "U1234567",
  "users": [
    {
      "roleId": "OWNER",
      "hasRightCodeInd": true,
      "userName": "user1234",
      "entity": {
        "entityName": "John Smith",
        "entityType": "INDIVIDUAL",
        "firstName": "John",
        "lastName": "Smith"
      }
    }
  ],
  "applicant": {
    "signatures": [
      "John Smith"
    ]
  }
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/acesws/accountId/signatures-and-owners';
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

	url := "https://localhost:5000/v1/api/acesws/accountId/signatures-and-owners"

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

url = URI("https://localhost:5000/v1/api/acesws/accountId/signatures-and-owners")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/acesws/accountId/signatures-and-owners', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/acesws/accountId/signatures-and-owners")! as URL,
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
