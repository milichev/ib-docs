> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Invest Account Into Model

POST https://localhost:5000/v1/api/fa/model/invest-divest
Content-Type: application/json

Submit invest or divest instructions for one or more accounts into a **single** destination model, with a **per-account** cash amount. Each entry in `accountList` pairs an account identifier with the individual `amtToInvest` value applied to that account (positive to invest, negative to divest).

Constraints and comparison to `/fa/model/tws-invest-divest`:
 * Only a **single model** may be targeted per request (the top-level `model`
   field). To invest into multiple models in one call, use
   `/fa/model/tws-invest-divest` and its `modelList`.
 * The model must be denominated in a **single currency**; multi-currency
   models are not supported by this endpoint. Use `/fa/model/tws-invest-divest`
   for models holding instruments across multiple currencies.
 * FA pre-trade allocation **groups are not supported** here â€” each account
   and its individual investment amount must be listed explicitly in
   `accountList`.
 * Because each account is listed individually, this endpoint allows a
   **different investment amount per account**. `/fa/model/tws-invest-divest`,
   by contrast, splits a single `amtToInvest` equally across accounts when a
   `group` or `accountList` is used.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/set-accountinvestment-in-model

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `reqID` (long, optional) — Request identifier to uniquely track a request.
- `model` (string, optional) — Define the model to invest accounts into.
- `accountList` (list of V1ApiFaModelInvestDivestPostRequestBodyContentApplicationJsonSchemaAccountListItems, optional) — Collection of accounts to invest in a model.

## Response

### 200

Successfully submitted model investment.

- `reqID` (string, optional) — Request identifier to uniquely track a request.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.

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

### V1ApiFaModelInvestDivestPostRequestBodyContentApplicationJsonSchemaAccountListItems

- `account` (string, optional) — Account identifier to invest.
- `amtToInvest` (double, optional) — Amount of cash to invest in the model from the account.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "reqID": "130",
  "subscriptionStatus": 0,
  "subscriptionKey": "2"
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/fa/model/invest-divest"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/invest-divest';
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

```go success
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/fa/model/invest-divest"

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

```ruby success
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/fa/model/invest-divest")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fa/model/invest-divest")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/invest-divest', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/fa/model/invest-divest");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/invest-divest")! as URL,
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