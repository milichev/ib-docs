[source](https://www.interactivebrokers.com/docs/web-api/api-reference/trading/trading-portfolio-analyst/get-transactions)

# Transaction History

POST https://localhost:5000/v1/api/pa/transactions
Content-Type: application/json

Transaction history for a given number of conids and accounts. Types of transactions include dividend payments, buy and sell transactions, transfers.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-portfolio-analyst/get-transactions

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects an object.

- `acctIds` (list of string, optional)
- `conids` (list of long, optional)
- `currency` (string, optional, default: USD) — Define the currency to display price amounts with.
- `days` (long, optional, default: 90) — Specify the number of days to receive transaction data for.

## Response

### 200

An array of objects detailing contract information.

- `rc` (long, optional) — Client portal use only
- `nd` (long, optional) — Client portal use only
- `rpnl` (TransactionsResponseRpnl, optional) — Returns the object containing the realized pnl for the contract on the date.
- `currency` (string, optional) — Returns the currency the account is traded in.
- `from` (long, optional) — Returns the epoch time for the start of requests.
- `id` (string, optional) — Returns the request identifier, getTransactions.
- `to` (long, optional) — Returns the epoch time for the end of requests.
- `includesRealTime` (boolean, optional) — Returns if the trades are up to date or not.
- `transactions` (list of TransactionsResponseTransactionsItems, optional) — Lists all supported transaction values.

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

### TransactionsResponseRpnl

Returns the object containing the realized pnl for the contract on the date.

- `data` (list of any, optional) — Returns an array of realized pnl objects.
- `items` (TransactionsResponseRpnlItems, optional)
- `amt` (string, optional) — Provides the total amount gained or lost from all days returned

### TransactionsResponseTransactionsItems

- `date` (string, optional) — Reutrns the human-readable datetime of the transaction.
- `cur` (string, optional) — Returns the currency of the traded insturment.
- `fxRate` (long, optional) — Returns the forex conversion rate.
- `pr` (long, optional) — Returns the price per share of the transaction.
- `qty` (long, optional) — Returns the total quantity traded. Will display a negative value for sell orders, and a positive value for buy orders.
- `acctid` (string, optional) — Returns the account which made the transaction.
- `amt` (long, optional) — Returns the total value of the trade.
- `conid` (long, optional) — Returns the contract identifier.
- `type` (string, optional) — Returns the order side.
- `desc` (string, optional) — Returns the long name for the company.

### TransactionsResponseRpnlItems

- `date` (string, optional) — Specifies the date for the transaction.
- `cur` (string, optional) — Specifies the currency of the realized value.
- `fxRate` (long, optional) — Returns the foreign exchnage rate.
- `side` (enum, optional) — Determines if the day was a loss or gain * `L` - LOSS * `G` - GAIN
  - Allowed values: `L`, `G`
- `acctid` (string, optional) — Returns the account ID the trade transacted on.
- `amt` (string, optional) — Returns the amount gained or lost on the day.
- `conid` (string, optional) — Returns the contract ID of the transaction.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "rc": 0,
  "nd": 4,
  "rpnl": {
    "data": [
      "string"
    ],
    "amt": "12.2516"
  },
  "currency": "USD",
  "from": 1702270800000,
  "id": "getTransactions",
  "to": 1702530000000,
  "includesRealTime": true,
  "transactions": [
    {
      "date": "Mon Dec 11 00:00:00 EST 2023",
      "cur": "USD",
      "fxRate": 1,
      "pr": 1,
      "qty": -5,
      "acctid": "U1234567",
      "amt": 1,
      "conid": 265598,
      "type": "Sell",
      "desc": "Apple Inc"
    }
  ]
}
```

**SDK Code**

```javascript success
const url = 'https://localhost:5000/v1/api/pa/transactions';
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

	url := "https://localhost:5000/v1/api/pa/transactions"

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

url = URI("https://localhost:5000/v1/api/pa/transactions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```php success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/pa/transactions', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift success
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/pa/transactions")! as URL,
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
