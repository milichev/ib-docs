[home](../../index.md) | [web-api](../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/get-statement)

# Retrieve generated report

GET https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement

Retrieves the Flex Query report instance identified by the `ReferenceCode` returned by a prior successful `/SendRequest` call. Depending on the size of the report, you may need to wait before calling this endpoint to allow generation to complete.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/get-statement

## Request

### Query parameters

- `t` (string, required) — The access token created for the Flex Web Service in Client Portal under Reporting -> Flex Queries.
- `q` (string, required) — The `ReferenceCode` returned by a prior successful `/SendRequest` call, identifying the specific report instance to retrieve.
- `v` (enum, required) — Version of the Flex Web Service. Values `2` and `3` are supported; version `3` should always be used.
  - Allowed values: `2`, `3`

## Response

### 200

The generated report file. The format (e.g. CSV, XML) depends on the configuration of the Flex Query template. On failure, an XML error response is returned instead.

## Examples

### Succes

**Response**

```json
"\"ClientAccountID\",\"CurrencyPrimary\",\"Symbol\",\"Conid\",\"Date/Time\",\"Exchange\",\"Buy/Sell\",\"Quantity\",\"Price\",\"OrigTradeID\",\"TraderID\",\"OrderID\",\"OrderReference\",\"IsAPIOrder\" \"DU5240685\",\"USD\",\"AAPL\",\"265598\",\"20260806;112923\",\"IEX\",\"BUY\",\"80\",\"309.96\",\"\",\"\",\"734329156\",\"\",\"N\" \"DU5240685\",\"USD\",\"AAPL\",\"265598\",\"20260806;112923\",\"IEX\",\"BUY\",\"40\",\"309.98\",\"\",\"\",\"734329156\",\"\",\"N\" \"DU5240685\",\"USD\",\"AAPL\",\"265598\",\"20260806;112923\",\"IBDARK\",\"BUY\",\"80\",\"309.94\",\"\",\"\",\"734329156\",\"\",\"N\" \"DU5240685\",\"USD\",\"AAPL\",\"265598\",\"20260811;130307\",\"NASDAQ\",\"BUY\",\"10\",\"306.11\",\"\",\"\",\"736171840\",\"\",\"Y\" \"DU5240685\",\"USD\",\"AAPL\",\"265598\",\"20260811;130352\",\"MEMX\",\"BUY\",\"10\",\"306.11\",\"\",\"\",\"736173116\",\"order-id-in-exec\",\"Y\""
```

**SDK Code**

```python Succes
import requests

url = "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement"

querystring = {"q":"7729029235","t":"833145478193195254070598","v":"3"}

response = requests.get(url, params=querystring)

print(response.json())
```

```go Succes
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Succes
require 'uri'
require 'net/http'

url = URI("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```php Succes
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3');

echo $response->getBody();
```

```swift Succes
import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"

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

### Failure

**Response**

```json
"<FlexStatementResponse timestamp=\"28 August, 2012 10:37 AM EDT\"><Status>Fail</Status><ErrorCode>1017</ErrorCode><ErrorMessage>Reference code is invalid.</ErrorMessage></FlexStatementResponse>"
```

**SDK Code**

```python Failure
import requests

url = "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement"

querystring = {"q":"7729029235","t":"833145478193195254070598","v":"3"}

response = requests.get(url, params=querystring)

print(response.json())
```

```go Failure
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Failure
require 'uri'
require 'net/http'

url = URI("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```php Failure
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3');

echo $response->getBody();
```

```swift Failure
import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/GetStatement?q=7729029235&t=833145478193195254070598&v=3")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"

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
