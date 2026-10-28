> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Trigger report generation

GET https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest

Submits a request to generate an instance of a Flex Query report. On success, returns a `ReferenceCode` to be passed to `/GetStatement` to retrieve the generated report.

**Rate limit:** 1 request per second; maximum 10 requests per minute per token.


Reference: https://ibkrcampus.com/docs/web-api/api-reference/send-request

## Request

### Query parameters

- `t` (string, required) — The access token created for the Flex Web Service in Client Portal under Reporting -> Flex Queries.
- `q` (string, required) — The Query ID of the desired Flex Query report template, obtained from Client Portal under Reporting -> Flex Query.
- `v` (enum, required) — Version of the Flex Web Service. Values `2` and `3` are supported; version `3` should always be used.
  - Allowed values: `2`, `3`
- `fd` (string, optional) — Short for `fromDate`. Define the earliest date to retrieve. If `fd` is used, the `td` parameter is required.
- `td` (string, optional) — Short for `toDate`. Define the final date to retrieve. If `td` is used, the `fd` parameter is required.
- `p` (integer, optional) — Short for `Period`. Number of days from the current date to retrieve data for. A maximum of 365 days may be requested.

## Response

### 200

XML response indicating whether the report generation request succeeded or failed. Check the `Status` element to determine the outcome.

## Examples

### Success

**Response**

```json
"<FlexStatementResponse timestamp=\"28 August, 2012 10:37 AM EDT\"><Status>Success</Status><ReferenceCode>1234567890</ReferenceCode><url>https://gdcdyn.interactivebrokers.com/Universal/servlet/FlexStatementService.GetStatement</url></FlexStatementResponse>"
```

**SDK Code**

```python Success
import requests

url = "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest"

querystring = {"q":"1099104","t":"833145478193195254070598","v":"3"}

response = requests.get(url, params=querystring)

print(response.json())
```

```javascript Success
const url = 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Success
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Success
require 'uri'
require 'net/http'

url = URI("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```java Success
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")
  .asString();
```

```php Success
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3');

echo $response->getBody();
```

```csharp Success
using RestSharp;

var client = new RestClient("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
```

```swift Success
import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")! as URL,
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
"<FlexStatementResponse timestamp=\"28 August, 2012 10:37 AM EDT\"><Status>Fail</Status><ErrorCode>1012</ErrorCode><ErrorMessage>Token has expired.</ErrorMessage></FlexStatementResponse>"
```

**SDK Code**

```python Failure
import requests

url = "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest"

querystring = {"q":"1099104","t":"833145478193195254070598","v":"3"}

response = requests.get(url, params=querystring)

print(response.json())
```

```javascript Failure
const url = 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Failure
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3"

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

url = URI("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```java Failure
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")
  .asString();
```

```php Failure
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3');

echo $response->getBody();
```

```csharp Failure
using RestSharp;

var client = new RestClient("https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
```

```swift Failure
import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?q=1099104&t=833145478193195254070598&v=3")! as URL,
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