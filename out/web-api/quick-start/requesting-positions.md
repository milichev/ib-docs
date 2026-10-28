[source](https://www.interactivebrokers.com/docs/web-api/quick-start/requesting-positions)

# Requesting Positions

In order to request your account's positions, you must first query the `/portfolio/accounts` endpoint. After sending a request to this endpoint, the [`/portfolio2/:accountId/positions`](../api-reference/trading/trading-portfolio/get-uncached-positions.md) endpoint can be queried for account positions.

**`Python`**

**`Java`**

```java title="Java"
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONArray;

public class Main {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        String accountsUrl = "https://localhost:5000/v1/api/portfolio/accounts";
        HttpRequest accountsRequest = HttpRequest.newBuilder()
                .uri(URI.create(accountsUrl))
                .header("Content-Type", "application/json")
                .GET()
                .build();

        HttpResponse<String> accountsResponse = client.send(accountsRequest, HttpResponse.BodyHandlers.ofString());
        JSONArray accounts = new JSONArray(accountsResponse.body());
        String accountId = accounts.getJSONObject(0).getString("id");

        String positionsUrl = "https://localhost:5000/v1/api/portfolio2/" + accountId + "/positions";
        HttpRequest positionsRequest = HttpRequest.newBuilder()
                .uri(URI.create(positionsUrl))
                .header("Content-Type", "application/json")
                .GET()
                .build();

        HttpResponse<String> positionsResponse = client.send(positionsRequest, HttpResponse.BodyHandlers.ofString());
        System.out.println("response: " + positionsResponse.body());
    }
}
```

**`JavaScript`**

**`C#`**

**`Go`**

```go title="Go"
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	client := &http.Client{}

	accountsUrl := "https://localhost:5000/v1/api/portfolio/accounts"
	req, err := http.NewRequest("GET", accountsUrl, nil)
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

	var accounts []map[string]interface{}
	if err := json.Unmarshal(body, &accounts); err != nil {
		panic(err)
	}
	accountId := accounts[0]["id"].(string)

	positionsUrl := fmt.Sprintf("https://localhost:5000/v1/api/portfolio2/%s/positions", accountId)
	req2, err := http.NewRequest("GET", positionsUrl, nil)
	if err != nil {
		panic(err)
	}
	req2.Header.Set("Content-Type", "application/json")

	resp2, err := client.Do(req2)
	if err != nil {
		panic(err)
	}
	defer resp2.Body.Close()

	positionsBody, _ := io.ReadAll(resp2.Body)
	fmt.Println("response:", string(positionsBody))
}
```

**`PHP`**

```php title="PHP"
<?php

$headers = [
    "Content-Type: application/json"
];

$accountsUrl = "https://localhost:5000/v1/api/portfolio/accounts";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $accountsUrl);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$accountsResponse = curl_exec($ch);
curl_close($ch);

$accounts = json_decode($accountsResponse, true);
$accountId = $accounts[0]["id"];

$positionsUrl = "https://localhost:5000/v1/api/portfolio2/{$accountId}/positions";

$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_URL, $positionsUrl);
curl_setopt($ch2, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);

$positionsResponse = curl_exec($ch2);
curl_close($ch2);

echo "response: " . $positionsResponse;
```

**`Ruby`**

```ruby title="Ruby"
require 'net/http'
require 'uri'
require 'json'

headers = { "Content-Type" => "application/json" }

accounts_url = URI("https://localhost:5000/v1/api/portfolio/accounts")
accounts_http = Net::HTTP.new(accounts_url.host, accounts_url.port)
accounts_http.use_ssl = true

accounts_request = Net::HTTP::Get.new(accounts_url)
headers.each { |k, v| accounts_request[k] = v }

accounts_response = accounts_http.request(accounts_request)
accounts = JSON.parse(accounts_response.body)
account_id = accounts[0]["id"]

positions_url = URI("https://localhost:5000/v1/api/portfolio2/#{account_id}/positions")
positions_http = Net::HTTP.new(positions_url.host, positions_url.port)
positions_http.use_ssl = true

positions_request = Net::HTTP::Get.new(positions_url)
headers.each { |k, v| positions_request[k] = v }

positions_response = positions_http.request(positions_request)

puts "response: #{positions_response.body}"
```

**`Swift`**

```swift title="Swift"
import Foundation

let headers = ["Content-Type": "application/json"]

func fetchpositions() {
    let accountsUrl = URL(string: "https://localhost:5000/v1/api/portfolio/accounts")!
    var accountsRequest = URLRequest(url: accountsUrl)
    for (key, value) in headers {
        accountsRequest.setValue(value, forHTTPHeaderField: key)
    }

    let task = URLSession.shared.dataTask(with: accountsRequest) { data, response, error in
        if let error = error {
            print("Error: \(error)")
            return
        }
        guard let data = data,
              let accounts = try? JSONSerialization.jsonObject(with: data) as? [[String: Any]],
              let accountId = accounts.first?["id"] as? String else {
            print("Failed to parse accounts")
            return
        }

        let positionsUrl = URL(string: "https://localhost:5000/v1/api/portfolio2/\(accountId)/positions")!
        var positionsRequest = URLRequest(url: positionsUrl)
        for (key, value) in headers {
            positionsRequest.setValue(value, forHTTPHeaderField: key)
        }

        let positionsTask = URLSession.shared.dataTask(with: positionsRequest) { data, response, error in
            if let error = error {
                print("Error: \(error)")
                return
            }
            if let data = data, let responseString = String(data: data, encoding: .utf8) {
                print("response: \(responseString)")
            }
        }
        positionsTask.resume()
    }
    task.resume()
}

fetchpositions()

RunLoop.main.run(until: Date(timeIntervalSinceNow: 5))
```
