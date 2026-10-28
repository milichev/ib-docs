> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Search Bond Filter Information

GET https://localhost:5000/v1/api/iserver/secdef/bond-filters

Request a list of filters relating to a given Bond issuerID. The issuerId is retrieved from /iserver/secdef/search and can be used in /iserver/secdef/info?issuerId=\{issuerId} for retrieving conIds.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-contracts/get-bond-filters

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `symbol` (string, required)
- `issuerId` (string, required)

## Response

### 200

Successful requests return the currency exchange rate of the target currency value divided by the source currency.

- `bondFilters` (list of BondFiltersResponseBondFiltersItems, optional) — Contains all filters pertaining to the given issuerId

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

### BondFiltersResponseBondFiltersItems

- `displayText` (enum, optional) — An identifier used to document returned options/values. This can be thought of as a key value.
  - Allowed values: `Maturity Date`, `Issue Date`, `Coupon`, `Currency`
- `columnId` (long, optional) — Used for user interfaces. Internal use only.
- `options` (list of BondFiltersResponseBondFiltersItemsOptionsItems, optional) — Contains all objects with values corresponding to the parent displayText key.

### BondFiltersResponseBondFiltersItemsOptionsItems

- `value` (string, required) — Returns value directly correlating to the displayText key. This may include exchange, maturity date, issue date, coupon, or currency.
- `text` (string, optional) — In some instances, a text value will be returned, which indicates the standardized value format such as plaintext dates, rather than solely numerical values.

## Examples

**Response**

```json
{
  "bondFilters": [
    {
      "displayText": "Maturity Date",
      "columnId": 27,
      "options": [
        {
          "value": "202501",
          "text": "Jan 2025"
        },
        {
          "value": "202812",
          "text": "Dec 2028"
        }
      ]
    },
    {
      "displayText": "Issue Date",
      "columnId": 28,
      "options": [
        {
          "value": "20140918",
          "text": "Sep 18 2014"
        },
        {
          "value": "20150409",
          "text": "Apr 09 2015"
        }
      ]
    },
    {
      "displayText": "Coupon",
      "columnId": 25,
      "options": [
        {
          "value": "1.301"
        },
        {
          "value": "1.34"
        }
      ]
    },
    {
      "displayText": "Currency",
      "columnId": 5,
      "options": [
        {
          "value": "EUR"
        },
        {
          "value": "USD"
        }
      ]
    }
  ]
}
```

**SDK Code**

```python bond-filter
import requests

url = "https://localhost:5000/v1/api/iserver/secdef/bond-filters"

querystring = {"issuerId":"e1400715","symbol":"BOND"}

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```

```javascript bond-filter
const url = 'https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go bond-filter
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby bond-filter
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java bond-filter
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php bond-filter
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp bond-filter
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift bond-filter
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/secdef/bond-filters?issuerId=e1400715&symbol=BOND")! as URL,
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