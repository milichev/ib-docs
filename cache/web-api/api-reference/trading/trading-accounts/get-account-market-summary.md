> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Summary Of Account Market Value

GET https://localhost:5000/v1/api/iserver/account/{accountId}/summary/market_value

Returns a summary of an account's market value, by currency and asset class.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-accounts/get-account-market-summary

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

Indicates a successful market value request.

- `currency` (SummaryMarketValueResponseCurrency, optional) — Returns an object containing market value details of the currency and positions held using that currency.

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

### SummaryMarketValueResponseCurrency

Returns an object containing market value details of the currency and positions held using that currency.

- `total_cash` (string, optional) — Lists the total cash held for the given currency.
- `settled_cash` (string, optional) — Cash recognized at the time of settlement minus the purchases at time of trade, commissions, taxes, and fees.
- `MTD Interest` (string, optional) — Total Month-to-date interest.
- `stock` (string, optional) — Total cash value of stocks held.
- `options` (string, optional) — Total cash value of options held.
- `futures` (string, optional) — Total cash value of futures held.
- `future_options` (string, optional) — Total cash value of future options held.
- `funds` (string, optional) — Total cash value of funds held.
- `dividends_receivable` (string, optional) — Total cash value of receivable dividends.
- `mutual_funds` (string, optional) — Total cash value of mutual funds held.
- `money_market` (string, optional) — Total cash value of money market securities held.
- `bonds` (string, optional) — Total cash value of bonds held.
- `Govt Bonds` (string, optional) — Total cash value of goverment bonds held.
- `t_bills` (string, optional) — Total cash value of t-bill bonds held.
- `warrants` (string, optional) — Total cash value of warrants held.
- `issuer_option` (string, optional) — Total cash value of issuer options held.
- `commodity` (string, optional) — Total cash value of commodities held.
- `Notional CFD` (string, optional) — Total cash value of notional CFDs held.
- `cfd` (string, optional) — Total cash value of CFDs held.
- `Cryptocurrency` (string, optional) — Total cash value of Cryptocurrencies held.
- `net_liquidation` (string, optional) — Total cash value of your net liquidty.
- `unrealized_pnl` (string, optional) — Total daily unrealized profit and loss.
- `realized_pnl` (string, optional) — Total daily realized profit and loss.
- `Exchange Rate` (string, optional) — Exchange rate of the labeled currency to the base currency.

## Examples

**Response**

```json
{
  "EUR": {
    "Cryptocurrency": "0",
    "Exchange Rate": "1.092525",
    "Govt Bonds": "0",
    "MTD Interest": "0",
    "Notional CFD": "0",
    "bonds": "0",
    "cfd": "0",
    "commodity": "0",
    "dividends_receivable": "0",
    "funds": "0",
    "future_options": "0",
    "futures": "0",
    "issuer_option": "0",
    "money_market": "0",
    "mutual_funds": "0",
    "net_liquidation": "194",
    "options": "0",
    "realized_pnl": "0",
    "settled_cash": "194",
    "stock": "0",
    "t_bills": "0",
    "total_cash": "194",
    "unrealized_pnl": "0",
    "warrants": "0"
  },
  "HKD": {
    "Cryptocurrency": "0",
    "Exchange Rate": "0.1278515",
    "Govt Bonds": "0",
    "MTD Interest": "0",
    "Notional CFD": "0",
    "bonds": "0",
    "cfd": "0",
    "commodity": "0",
    "dividends_receivable": "0",
    "funds": "0",
    "future_options": "0",
    "futures": "0",
    "issuer_option": "0",
    "money_market": "0",
    "mutual_funds": "0",
    "net_liquidation": "19,441",
    "options": "0",
    "realized_pnl": "0",
    "settled_cash": "0",
    "stock": "19,441",
    "t_bills": "0",
    "total_cash": "0",
    "unrealized_pnl": "4,857",
    "warrants": "0"
  },
  "JPY": {
    "Cryptocurrency": "0",
    "Exchange Rate": "0.0068052",
    "Govt Bonds": "0",
    "MTD Interest": "0",
    "Notional CFD": "0",
    "bonds": "0",
    "cfd": "0",
    "commodity": "0",
    "dividends_receivable": "0",
    "funds": "0",
    "future_options": "0",
    "futures": "0",
    "issuer_option": "0",
    "money_market": "0",
    "mutual_funds": "0",
    "net_liquidation": "14,781",
    "options": "0",
    "realized_pnl": "0",
    "settled_cash": "14,781",
    "stock": "0",
    "t_bills": "0",
    "total_cash": "14,781",
    "unrealized_pnl": "0",
    "warrants": "0"
  },
  "Total (in USD)": {
    "Cryptocurrency": "0",
    "Exchange Rate": "1.00",
    "Govt Bonds": "0",
    "MTD Interest": "-549",
    "Notional CFD": "0",
    "bonds": "0",
    "cfd": "0",
    "commodity": "0",
    "dividends_receivable": "0",
    "funds": "0",
    "future_options": "0",
    "futures": "-212",
    "issuer_option": "0",
    "money_market": "0",
    "mutual_funds": "0",
    "net_liquidation": "1,291,959",
    "options": "0",
    "realized_pnl": "0",
    "settled_cash": "-401,646",
    "stock": "1,694,154",
    "t_bills": "0",
    "total_cash": "-401,646",
    "unrealized_pnl": "253,896",
    "warrants": "0"
  },
  "USD": {
    "Cryptocurrency": "0",
    "Exchange Rate": "1.00",
    "Govt Bonds": "0",
    "MTD Interest": "-549",
    "Notional CFD": "0",
    "bonds": "0",
    "cfd": "0",
    "commodity": "0",
    "dividends_receivable": "0",
    "funds": "0",
    "future_options": "0",
    "futures": "-212",
    "issuer_option": "0",
    "money_market": "0",
    "mutual_funds": "0",
    "net_liquidation": "1,289,161",
    "options": "0",
    "realized_pnl": "0",
    "settled_cash": "-401,958",
    "stock": "1,691,668",
    "t_bills": "0",
    "total_cash": "-401,958",
    "unrealized_pnl": "253,275",
    "warrants": "0"
  }
}
```

**SDK Code**

```python success
import requests

url = "https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript success
const url = 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value';
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

	url := "https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value"

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

url = URI("https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value")

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

HttpResponse<String> response = Unirest.get("https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp success
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift success
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/account/U1234567/summary/market_value")! as URL,
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