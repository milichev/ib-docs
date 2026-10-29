[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api/web-api/obtaining-market-data)

# Obtaining Market Data

Market data can be obtained through a `GET` request to the `/iserver/marketdata/snapshot` endpoint. This endpoint requires a comma-separated list of conids, which are Contract IDs. These can be identified through a `GET` request to the `/trsrv/stocks/` endpoint. The fields indicate which data fields should be returned.

See [this](../../trading/instrument-discovery/contract-i-ds.md) for more info on Contract IDs.

See [this](../../trading/market-data/top-of-book-snapshots.md) for more info on the market data endpoint.

> **Warning**
>
> The first request to the `/iserver/marketdata/snapshot` endpoint will not return any data. Therefore, the endpoint must be hit at least twice to return the desired market data. The initial response will return the requested conids.

**`Python`**

```python title="Python"
import requests

conids = "265598,8314"
fields = "31,7059,84,88,86,85"

url = "https://localhost:5000/v1/api/iserver/marketdata/snapshot"

params = {
    "conids": conids,
    "fields": fields
}

response = requests.get(url, params=params)

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
	"fmt"
	"io"
	"net/http"
)

func main() {
	client := &http.Client{}

	url := "https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=265598,8314&fields=31,7059,84,88,86,85"

	resp, err := client.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	fmt.Println(resp.StatusCode)
	fmt.Println(string(body))
}
```

**`PHP`**

```php title="PHP"
<?php

$conids = "265598,8314";
$fields = "31,7059,84,88,86,85";

$url = "https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids={$conids}&fields={$fields}";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo $httpCode . "\n";
echo $response . "\n";
```

**`Ruby`**

```ruby title="Ruby"
require 'net/http'
require 'uri'

conids = "265598,8314"
fields = "31,7059,84,88,86,85"

uri = URI("https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=#{conids}&fields=#{fields}")

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)

response = http.request(request)

puts response.code
puts response.body
```

**`Swift`**

```swift title="Swift"
import Foundation

let conids = "265598,8314"
let fields = "31,7059,84,88,86,85"

guard let url = URL(string: "https://localhost:5000/v1/api/iserver/marketdata/snapshot?conids=\(conids)&fields=\(fields)") else {
    fatalError("Invalid URL")
}

var request = URLRequest(url: url)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let httpResponse = response as? HTTPURLResponse {
        print(httpResponse.statusCode)
    }
    if let data = data, let responseString = String(data: data, encoding: .utf8) {
        print(responseString)
    }
    if let error = error {
        print("Error: \(error)")
    }
}

task.resume()
```
