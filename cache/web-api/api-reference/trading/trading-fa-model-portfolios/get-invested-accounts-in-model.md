> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Summary Of Accounts Invested In The Model

POST https://localhost:5000/v1/api/fa/model/invest-divest-positions
Content-Type: application/json

Request the list of all accounts already invested in the provided model and a summary of their investment.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-fa-model-portfolios/get-invested-accounts-in-model

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
- `model` (string, optional) — Define the model to retrieve accounts from.
- `subscriptionStatus` (long, optional) — Describes if the model is in polling mode.

## Response

### 200

Successfully retrieve preset details

- `accountList` (list of GetInvestedAccountsSummaryAccountListItems, optional) — Array of account details with net liquidation values and currency information
- `baseCcyMaster` (string, optional) — Base currency for the master account (ISO 4217 currency code)
- `baseCcyMasterPrecision` (string, optional) — Precision for the master account base currency (decimal places)
- `model` (string, optional) — Model portfolio identifier associated with this account list
- `reqID` (long, optional) — Unique request identifier for tracking API calls
- `subscriptionStatus` (enum, optional) — Market data subscription status (1 = active, 0 = inactive)
  - Allowed values: `0`, `1`

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

### GetInvestedAccountsSummaryAccountListItems

- `account` (string, optional) — Account identifier (account number)
- `accountModelNlv` (string, optional) — Net liquidation value for positions in the current model portfolio
- `accountOtherModelsNlv` (string, optional) — Net liquidation value for positions in other model portfolios
- `alias` (string, optional) — User-defined alias for the account (empty string if not set)
- `baseCcyAccount` (string, optional) — Base currency for this account (ISO 4217 currency code)
- `baseCcyAccountPrecision` (string, optional) — Precision for the account base currency (decimal places)
- `exchangeRate` (double, optional) — Exchange rate from account base currency to master base currency
- `cashInIndependentNlv` (string, optional) — Individual cash net liquidation value in base currency
- `positionsInIndependentNlv` (string, optional) — Individual position net liquidation value in base currency
- `nlv` (string, optional) — Total net liquidation value (cash + positions) in base currency

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "accountList": [
    {
      "account": "DU12346",
      "accountModelNlv": "0",
      "accountOtherModelsNlv": "30545.33",
      "alias": "",
      "baseCcyAccount": "USD",
      "baseCcyAccountPrecision": "0.01",
      "exchangeRate": 1,
      "cashInIndependentNlv": "974589.5",
      "positionsInIndependentNlv": "6820.19",
      "nlv": "1011955.02"
    },
    {
      "account": "DU12347",
      "accountModelNlv": "0",
      "accountOtherModelsNlv": "-17.91",
      "alias": "",
      "baseCcyAccount": "USD",
      "baseCcyAccountPrecision": "0.01",
      "exchangeRate": 1,
      "cashInIndependentNlv": "1006063.06",
      "positionsInIndependentNlv": "6320.08",
      "nlv": "1012365.23"
    }
  ],
  "baseCcyMaster": "USD",
  "baseCcyMasterPrecision": "0.01",
  "model": "USModel",
  "reqID": 129,
  "subscriptionStatus": 1
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/fa/model/invest-divest-positions"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/fa/model/invest-divest-positions';
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

	url := "https://localhost:5000/v1/api/fa/model/invest-divest-positions"

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

url = URI("https://localhost:5000/v1/api/fa/model/invest-divest-positions")

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

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/fa/model/invest-divest-positions")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/fa/model/invest-divest-positions', [
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

var client = new RestClient("https://localhost:5000/v1/api/fa/model/invest-divest-positions");
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/fa/model/invest-divest-positions")! as URL,
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