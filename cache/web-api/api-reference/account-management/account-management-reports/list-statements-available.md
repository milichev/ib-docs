> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Fetch Available Daily, Monthly, And Annual Report Dates For An Account Id

GET https://localhost:5000/gw/api/v1/statements/available

**Scope**: `statements.read` OR `reports.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-reports/list-statements-available

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `accountId` (string, required) — Specifies the account id to retrieve information

### Headers

- `authorization` (string, required) — Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...).

## Response

### 200

Returns a JSON object containing the available report dates.

- `data` (AvailableStatementDatesData, optional)

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

### 402 Payment Required Error

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

### AvailableStatementDatesData

- `dataType` (string, optional)
- `value` (AvailableStatementDatesDataValue, optional)

### InvalidArgument

- `field` (string, required)
- `description` (string, optional)

### AvailableStatementDatesDataValue

- `daily` (AvailableStatementDatesDataValueDaily, optional)
- `monthly` (list of string, optional) — monthly available reports
- `annual` (list of string, optional) — annual available reports

### AvailableStatementDatesDataValueDaily

- `startDate` (string, optional) — daily report start date
- `endDate` (string, optional) — daily report end date

## Examples

**Response**

```json
{
  "data": {
    "dataType": "String",
    "value": {
      "daily": {
        "startDate": "string",
        "endDate": "string"
      },
      "monthly": [
        "string"
      ],
      "annual": [
        "string"
      ]
    }
  }
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/statements/available"

querystring = {"accountId":"UXXXX"}

headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1...",
    "Authorization": "Bearer <token>"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```javascript
const url = 'https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX';
const options = {
  method: 'GET',
  headers: {authorization: 'Bearer eyJ0eXAiOiJKV1...', Authorization: 'Bearer <token>'}
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

	url := "https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("authorization", "Bearer eyJ0eXAiOiJKV1...")
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

url = URI("https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["authorization"] = 'Bearer eyJ0eXAiOiJKV1...'
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX")
  .header("authorization", "Bearer eyJ0eXAiOiJKV1...")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'authorization' => 'Bearer eyJ0eXAiOiJKV1...',
  ],
]);

echo $response->getBody();
```

```csharp
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX");
var request = new RestRequest(Method.GET);
request.AddHeader("authorization", "Bearer eyJ0eXAiOiJKV1...");
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = [
  "authorization": "Bearer eyJ0eXAiOiJKV1...",
  "Authorization": "Bearer <token>"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/statements/available?accountId=UXXXX")! as URL,
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