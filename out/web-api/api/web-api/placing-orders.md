[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api/web-api/placing-orders)

# Placing Orders

First, ensure you have an active brokerage session, as shown in [Initializing Brokerage Session](/docs). Then, send a POST request to the `/iserver/account/{accountId}/orders` endpoint.

**`Python`**

```python title="Python"
import requests

account_id = "DU123456"
url = f"https://localhost:5000/v1/api/iserver/account/{account_id}/orders"

payload = {
    "orders": [
        {
            "conid": 265598,
            "orderType": "LMT",
            "price": 165,
            "quantity": 100,
            "side": "BUY",
            "tif": "DAY"
        }
    ]
}

headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

print(response.status_code)
print(response.json())
```

**`Java`**

**`JavaScript`**

**`C#`**

**`Go`**

```go title="Go"
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func main() {
	accountId := "DU123456"
	url := fmt.Sprintf("https://localhost:5000/v1/api/iserver/account/%s/orders", accountId)

	payload := []byte(`{
		"orders": [
			{
				"conid": 265598,
				"orderType": "LMT",
				"price": 165,
				"quantity": 100,
				"side": "BUY",
				"tif": "DAY"
			}
		]
	}`)

	client := &http.Client{}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
	if err != nil {
		panic(err)
	}
	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println("Status:", resp.StatusCode)
	fmt.Println(string(body))
}
```

**`PHP`**

```php title="PHP"
<?php

$accountId = "DU123456";
$url = "https://localhost:5000/v1/api/iserver/account/{$accountId}/orders";

$payload = json_encode([
    "orders" => [
        [
            "conid" => 265598,
            "orderType" => "LMT",
            "price" => 165,
            "quantity" => 100,
            "side" => "BUY",
            "tif" => "DAY"
        ]
    ]
]);

$headers = [
    "Content-Type: application/json"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($response === false) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    echo "Status: $statusCode\n";
    echo $response;
}

curl_close($ch);
```

**`Ruby`**

```ruby title="Ruby"
require 'net/http'
require 'uri'
require 'json'

account_id = "DU123456"
url = URI("https://localhost:5000/v1/api/iserver/account/#{account_id}/orders")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request.body = {
    orders: [
        {
            conid: 265598,
            orderType: "LMT",
            price: 165,
            quantity: 100,
            side: "BUY",
            tif: "DAY"
        }
    ]
}.to_json

response = http.request(request)

puts "Status: #{response.code}"
puts response.body
```

**`Swift`**

```swift title="Swift"
import Foundation

let accountId = "DU123456"
let url = URL(string: "https://localhost:5000/v1/api/iserver/account/\(accountId)/orders")!

var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")

let payload: [String: Any] = [
    "orders": [
        [
            "conid": 265598,
            "orderType": "LMT",
            "price": 165,
            "quantity": 100,
            "side": "BUY",
            "tif": "DAY"
        ]
    ]
]

request.httpBody = try! JSONSerialization.data(withJSONObject: payload, options: [])

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print("Error: \(error)")
        return
    }
    if let httpResponse = response as? HTTPURLResponse {
        print("Status: \(httpResponse.statusCode)")
    }
    if let data = data, let responseString = String(data: data, encoding: .utf8) {
        print(responseString)
    }
}
task.resume()

RunLoop.main.run(until: Date(timeIntervalSinceNow: 5))
```
