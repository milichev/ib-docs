> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Confirm Order Reply Message

POST https://localhost:5000/v1/api/iserver/reply/{replyId}
Content-Type: application/json

Confirm an order reply message and continue with submission of order ticket.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/trading/trading-orders/confirm-order-reply

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `replyId` (string, required) — The UUID of the reply message to be confirmed, obtained from an order submission response. This is delivered from the POST /iserver/account/\{accountId}/orders endpoint when triggering certain warning messages.

### Body (application/json)

This endpoint expects an object.

- `confirmed` (boolean, optional) — Value of true answers the question in the affirmative and proceeds with order submission.

## Response

### 200

Status of reply

- `Trading Orders_confirmOrderReply_Response_200`
  - orderSubmitSuccess: list of OrderSubmitSuccessItems
  - orderReplyMessage: list of OrderReplyMessageItems
  - orderSubmitError: orderSubmitError
  - orderReplyNotFound: orderReplyNotFound
  - advancedOrderReject: advancedOrderReject

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

### OrderSubmitSuccessItems

Result of successful submission of one order ticket.

- `order_id` (string, optional) — The order ID assigned to your order ticket by IB. Contains only numerals.
- `order_status` (string, optional) — Status describing where the order stands in its lifecycle.
- `encrypt_message` (string, optional) — Internal use only.

### OrderReplyMessageItems

An object containing order reply messages emitted against a single order ticket.

- `id` (string, optional) — The replyId UUID of the order ticket's emitted order reply messages, used to confirm them and proceed. Use the POST /iserver/reply/\{replyId} endpoint to confirm an order reply message.
- `isSuppressed` (boolean, optional) — Internal use. Always delivers value 'false'.
- `message` (list of string, optional) — An array containing the human-readable text of all order reply messages emitted for the order ticket.
- `messageIds` (list of string, optional) — An array containing identifiers that categorize the types of order reply messages that have been emitted. Elements of this array are ordered so that indicies match the corresponding human-readable text strings in the 'message' array. A messageId can typically be passed in the POST /iserver/questions/suppress endpoint to auto-accept a given warning message.

### orderSubmitError

Indicates that the order reply message or submission was not accepted.

- `error` (string, optional) — Message indicating that order submission was not successful.

### orderReplyNotFound

Indicates that the order reply ID does not exist.

- `error` (string, optional) — Message indicating that order reply id was not found.

### advancedOrderReject

Relates a message generated in response to the rejection of the submitted order ticket. In some cases, it may also present a mechanism to resubmit the same order following a prompted decision.

- `orderId` (long, optional) — The order ID assigned by IB to the rejected order ticket.
- `reqId` (string, optional) — IB's internal identifier assigned to the returned message.
- `dismissable` (list of any, optional) — Indicates whether this prompt is dismissable.
- `text` (string, optional) — Human-readable text of the messages emitted by IB in response to order submission.
- `options` (list of string, optional) — Choices available to the client in response to the rejection message.
- `type` (string, optional) — The specific type of message returned.
- `messageId` (string, optional) — IB internal identifier for the nature or category of the returned message.
- `prompt` (boolean, optional) — Indicates that the message is a prompt offering a set of decisions, one or more of which may permit the rejected order to be resubmitted.

## Examples

### orderSubmitSuccessExample

**Request**

```json
{}
```

**Response**

```json
[
  {
    "encrypt_message": "1",
    "order_id": "1370093239",
    "order_status": "PreSubmitted"
  }
]
```

**SDK Code**

```python orderSubmitSuccessExample
import requests

url = "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript orderSubmitSuccessExample
const url = 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593';
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

```go orderSubmitSuccessExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

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

```ruby orderSubmitSuccessExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java orderSubmitSuccessExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php orderSubmitSuccessExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp orderSubmitSuccessExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift orderSubmitSuccessExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")! as URL,
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

### orderReplyMessageExample

**Request**

```json
{}
```

**Response**

```json
[
  {
    "id": "99097238-9824-4830-84ef-46979aa22593",
    "isSuppressed": false,
    "message": [
      "You are submitting an order without market data. We strongly recommend against this as it may result in erroneous and unexpected trades.\nAre you sure you want to submit this order?"
    ],
    "messageIds": [
      "o354"
    ]
  }
]
```

**SDK Code**

```python orderReplyMessageExample
import requests

url = "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript orderReplyMessageExample
const url = 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593';
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

```go orderReplyMessageExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

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

```ruby orderReplyMessageExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java orderReplyMessageExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php orderReplyMessageExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp orderReplyMessageExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift orderReplyMessageExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")! as URL,
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

### orderSubmitErrorExample

**Request**

```json
{}
```

**Response**

```json
{
  "error": "Order not confirmed "
}
```

**SDK Code**

```python orderSubmitErrorExample
import requests

url = "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript orderSubmitErrorExample
const url = 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593';
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

```go orderSubmitErrorExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

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

```ruby orderSubmitErrorExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java orderSubmitErrorExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php orderSubmitErrorExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp orderSubmitErrorExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift orderSubmitErrorExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")! as URL,
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

### orderReplyNotFoundExample

**Request**

```json
{}
```

**Response**

```json
{
  "error": "reply id not found: '99097238-9824-4830-84ef-46979aa22593'"
}
```

**SDK Code**

```python orderReplyNotFoundExample
import requests

url = "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript orderReplyNotFoundExample
const url = 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593';
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

```go orderReplyNotFoundExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

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

```ruby orderReplyNotFoundExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java orderReplyNotFoundExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php orderReplyNotFoundExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp orderReplyNotFoundExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift orderReplyNotFoundExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")! as URL,
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

### advancedOrderRejectPromptExample

**Request**

```json
{}
```

**Response**

```json
{
  "dismissable": [],
  "messageId": "p12",
  "options": [
    "Use on this order",
    "Always use",
    "Do not use"
  ],
  "orderId": 123456789,
  "prompt": true,
  "reqId": "22170",
  "text": "If your order is not immediately executable, our systems may, depending on market conditions, reject your order if its limit price is more that the allowed amount away from the reference price at that time. If this happens, you will not receive a fill. This is a control designed to ensure that we comply with our regulatory obligations to avoid submitting disruptive orders to the marketplace.\nUse the Price Management Algo?",
  "type": "M"
}
```

**SDK Code**

```python advancedOrderRejectPromptExample
import requests

url = "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript advancedOrderRejectPromptExample
const url = 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593';
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

```go advancedOrderRejectPromptExample
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593"

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

```ruby advancedOrderRejectPromptExample
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java advancedOrderRejectPromptExample
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php advancedOrderRejectPromptExample
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp advancedOrderRejectPromptExample
using RestSharp;

var client = new RestClient("https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift advancedOrderRejectPromptExample
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/v1/api/iserver/reply/99097238-9824-4830-84ef-46979aa22593")! as URL,
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