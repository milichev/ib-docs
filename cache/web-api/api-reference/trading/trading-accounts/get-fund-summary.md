> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Summary Of Available Funds

GET https://localhost:5000/v1/api/iserver/account/{accountId}/summary/available_funds

Provides a summary specific for avilable funds giving more depth than the standard /summary endpoint.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-fund-summary

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

Indicates a successful return of available funds.

- `total` (AvailableFundsResponseTotal, optional) — total values
- `Crypto at Paxos` (funds, optional) — Contains commodities specific fund values.
- `commodities` (funds, optional) — Contains commodities specific fund values.
- `securities` (AvailableFundsResponseSecurities, optional) — Contains an overview of Security specific fund values.

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

### AvailableFundsResponseTotal

total values

- `current_available` (string, optional) — Describes currently avialable funds in your account for trading.
- `current_excess` (string, optional) — Describes total value of the account.
- `Prdctd Pst-xpry Excss` (string, optional) — Displays predicted post-expiration account value.
- `Lk Ahd Avlbl Fnds` (string, optional) — This value reflects your available funds at the next margin change.
- `Lk Ahd Excss Lqdty` (string, optional) — * `Securities` - Equity with loan value. Look ahead maintenance margin. * `Commodities` - Net Liquidation value. Look ahead maintenance margin.
- `overnight_available` (string, optional) — Describes available funds for overnight trading.
- `overnight_excess` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` - Equivalent to regular trading hours. * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.
- `buying_power` (string, optional) — Describes the total buying power of the account including existing balance with margin.
- `leverage` (string, optional) — Describes the total combined leverage.
- `Lk Ahd Nxt Chng` (string, optional) — Describes when the next 'Look Ahead' calculation will take place.
- `day_trades_left` (string, optional) — Describes the number of trades remaining before flagging the Pattern Day Trader status. "Unlimited" is used for existing Pattern Day Traders.

### funds

Contains commodities specific fund values.

- `current_available` (string, optional) — Describes currently avialable funds in your account for trading.
- `current_excess` (string, optional) — Describes total value of the account.
- `Prdctd Pst-xpry Excss` (string, optional) — Displays predicted post-expiration account value.
- `Lk Ahd Avlbl Fnds` (string, optional) — This value reflects your available funds at the next margin change.
- `overnight_available` (string, optional) — Describes available funds for overnight trading.
- `overnight_excess` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` - Equivalent to regular trading hours. * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.

### AvailableFundsResponseSecurities

Contains an overview of Security specific fund values.

- `current_available` (string, optional) — Describes currently avialable funds in your account for trading.
- `current_excess` (string, optional) — Describes total value of the account.
- `Prdctd Pst-xpry Excss` (string, optional) — Displays predicted post-expiration account value.
- `SMA` (string, optional)
- `Lk Ahd Avlbl Fnds` (string, optional) — This value reflects your available funds at the next margin change.
- `Lk Ahd Excss Lqdty` (string, optional) — * `Securities` - Equity with loan value. Look ahead maintenance margin. * `Commodities` - Net Liquidation value. Look ahead maintenance margin.
- `overnight_available` (string, optional) — Describes available funds for overnight trading.
- `overnight_excess` (string, optional) — Overnight refers to the window of time after the local market trading day is closed. * `Securities` - Equivalent to regular trading hours. * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.
- `leverage` (string, optional) — Describes the total combined leverage.

## Examples

**Response**

```json
{
  "total": {
    "current_available": "825,208 USD",
    "current_excess": "826,089 USD",
    "Prdctd Pst-xpry Excss": "0 USD",
    "Lk Ahd Avlbl Fnds": "821,067 USD",
    "Lk Ahd Excss Lqdty": "822,324 USD",
    "overnight_available": "821,067 USD",
    "overnight_excess": "822,324 USD",
    "buying_power": "3,304,346 USD",
    "leverage": "n/a",
    "Lk Ahd Nxt Chng": "@ 16:00:00",
    "day_trades_left": "Unlimited",
    "SMA": "368,538 USD"
  },
  "Crypto at Paxos": {
    "current_available": "0 USD",
    "current_excess": "0 USD",
    "Prdctd Pst-xpry Excss": "0 USD",
    "Lk Ahd Avlbl Fnds": "0 USD",
    "overnight_available": "0 USD",
    "overnight_excess": "0 USD",
    "Lk Ahd Excss Lqdty": "0 USD"
  },
  "commodities": {
    "current_available": "22,483 USD",
    "current_excess": "23,361 USD",
    "Prdctd Pst-xpry Excss": "0 USD",
    "Lk Ahd Avlbl Fnds": "18,342 USD",
    "overnight_available": "18,342 USD",
    "overnight_excess": "19,597 USD",
    "Lk Ahd Excss Lqdty": "19,597 USD"
  },
  "securities": {
    "current_available": "802,725 USD",
    "current_excess": "802,727 USD",
    "Prdctd Pst-xpry Excss": "0 USD",
    "SMA": "368,538 USD",
    "Lk Ahd Avlbl Fnds": "802,725 USD",
    "Lk Ahd Excss Lqdty": "802,727 USD",
    "overnight_available": "802,725 USD",
    "overnight_excess": "802,727 USD",
    "leverage": "1.43"
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds';
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

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds"

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

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/summary/available_funds")! as URL,
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