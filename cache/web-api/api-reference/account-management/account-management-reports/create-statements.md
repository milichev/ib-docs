> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Generates Statements In Supported Formats Based On Request Parameters.

POST https://localhost:5000/gw/api/v1/statements
Content-Type: application/json

**Scope**: `statements.read` OR `statements.write` OR `reports.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-reports/create-statements

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Headers

- `authorization` (string, required) — Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...).

### Body (application/json)

This endpoint expects a StmtRequest.

- `accountId` (string, required) — account id
- `startDate` (string, required) — from date
- `endDate` (string, required) — to date
- `accountIds` (list of string, optional) — array of account id's
- `multiAccountFormat` (string, optional) — possible values are consolidate, concatenate, or customConsolidate
- `cryptoConsolIfAvailable` (boolean, optional, default: false) — crypto consolidate flag, If request contains any accounts with crypto segment, will turn request into Crypto Consolidated
- `mimeType` (string, optional) — output format
- `language` (string, optional, default: en) — two character ISO language code
- `gzip` (boolean, optional, default: false) — to gzip the whole response pass true

## Response

### 200

Returns a JSON object containing the relevant statement.

- `data` (GetStatementsResponseData, optional)

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a bad request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `invalidArguments` (list of InvalidArgument, optional)

### 401 Unauthorized Error

Returns a Problem detail instance representing an unauthorized request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 402 Payment Required Error

Returns a Problem detail instance representing an unauthorized request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 403 Forbidden Error

Returns a Problem detail instance representing a forbidden request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `detail` (string, optional)

### 500 Internal Server Error

Returns a Problem detail instance representing an internal server error.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### GetStatementsResponseData

- `dataType` (string, optional) — the data type of the value after decoding
- `encoding` (string, optional) — encoding used for the value
- `value` (string, optional) — Base 64 encoded String of byte[]. Byte[] represents compressed data when gzip is true
- `mimeType` (string, optional) — mimeType of document after decoding and serializing the value
- `gzip` (boolean, optional) — content encoding flag. Represents whether the response is compressed
- `accept` (string, optional) — specify response media types that are acceptable

### InvalidArgument

- `field` (string, required)
- `description` (string, optional)

## Examples

### Daily html

**Request**

```json
{
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html"
}
```

**Response**

```json
{
  "data": {
    "dataType": "string",
    "encoding": "string",
    "value": "string",
    "mimeType": "string",
    "gzip": true,
    "accept": "string"
  }
}
```

**SDK Code**

```python Daily html
import requests

url = "https://localhost:5000/gw/api/v1/statements"

payload = {
    "accountId": "UXXXX",
    "startDate": "20230102",
    "endDate": "20230102",
    "mimeType": "text/html"
}
headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1...",
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript Daily html
const url = 'https://localhost:5000/gw/api/v1/statements';
const options = {
  method: 'POST',
  headers: {
    authorization: 'Bearer eyJ0eXAiOiJKV1...',
    Authorization: 'Bearer <token>',
    'Content-Type': 'application/json'
  },
  body: '{"accountId":"UXXXX","startDate":"20230102","endDate":"20230102","mimeType":"text/html"}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Daily html
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/statements"

	payload := strings.NewReader("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("authorization", "Bearer eyJ0eXAiOiJKV1...")
	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Daily html
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/statements")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["authorization"] = 'Bearer eyJ0eXAiOiJKV1...'
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\"\n}"

response = http.request(request)
puts response.read_body
```

```java Daily html
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/statements")
  .header("authorization", "Bearer eyJ0eXAiOiJKV1...")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\"\n}")
  .asString();
```

```php Daily html
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/statements', [
  'body' => '{
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
    'authorization' => 'Bearer eyJ0eXAiOiJKV1...',
  ],
]);

echo $response->getBody();
```

```csharp Daily html
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/statements");
var request = new RestRequest(Method.POST);
request.AddHeader("authorization", "Bearer eyJ0eXAiOiJKV1...");
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Daily html
import Foundation

let headers = [
  "authorization": "Bearer eyJ0eXAiOiJKV1...",
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/statements")! as URL,
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

### Monthly pdf

**Request**

```json
{
  "accountId": "UXXXX",
  "startDate": "202301",
  "endDate": "202301",
  "mimeType": "application/pdf"
}
```

**Response**

```json
{
  "data": {
    "dataType": "string",
    "encoding": "string",
    "value": "string",
    "mimeType": "string",
    "gzip": true,
    "accept": "string"
  }
}
```

**SDK Code**

```python Monthly pdf
import requests

url = "https://localhost:5000/gw/api/v1/statements"

payload = {
    "accountId": "UXXXX",
    "startDate": "202301",
    "endDate": "202301",
    "mimeType": "application/pdf"
}
headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1...",
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript Monthly pdf
const url = 'https://localhost:5000/gw/api/v1/statements';
const options = {
  method: 'POST',
  headers: {
    authorization: 'Bearer eyJ0eXAiOiJKV1...',
    Authorization: 'Bearer <token>',
    'Content-Type': 'application/json'
  },
  body: '{"accountId":"UXXXX","startDate":"202301","endDate":"202301","mimeType":"application/pdf"}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Monthly pdf
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/statements"

	payload := strings.NewReader("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"202301\",\n  \"endDate\": \"202301\",\n  \"mimeType\": \"application/pdf\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("authorization", "Bearer eyJ0eXAiOiJKV1...")
	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Monthly pdf
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/statements")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["authorization"] = 'Bearer eyJ0eXAiOiJKV1...'
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"202301\",\n  \"endDate\": \"202301\",\n  \"mimeType\": \"application/pdf\"\n}"

response = http.request(request)
puts response.read_body
```

```java Monthly pdf
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/statements")
  .header("authorization", "Bearer eyJ0eXAiOiJKV1...")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"202301\",\n  \"endDate\": \"202301\",\n  \"mimeType\": \"application/pdf\"\n}")
  .asString();
```

```php Monthly pdf
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/statements', [
  'body' => '{
  "accountId": "UXXXX",
  "startDate": "202301",
  "endDate": "202301",
  "mimeType": "application/pdf"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
    'authorization' => 'Bearer eyJ0eXAiOiJKV1...',
  ],
]);

echo $response->getBody();
```

```csharp Monthly pdf
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/statements");
var request = new RestRequest(Method.POST);
request.AddHeader("authorization", "Bearer eyJ0eXAiOiJKV1...");
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"202301\",\n  \"endDate\": \"202301\",\n  \"mimeType\": \"application/pdf\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Monthly pdf
import Foundation

let headers = [
  "authorization": "Bearer eyJ0eXAiOiJKV1...",
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "accountId": "UXXXX",
  "startDate": "202301",
  "endDate": "202301",
  "mimeType": "application/pdf"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/statements")! as URL,
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

### Daily html gzip

**Request**

```json
{
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html",
  "gzip": true
}
```

**Response**

```json
{
  "data": {
    "dataType": "string",
    "encoding": "string",
    "value": "string",
    "mimeType": "string",
    "gzip": true,
    "accept": "string"
  }
}
```

**SDK Code**

```python Daily html gzip
import requests

url = "https://localhost:5000/gw/api/v1/statements"

payload = {
    "accountId": "UXXXX",
    "startDate": "20230102",
    "endDate": "20230102",
    "mimeType": "text/html",
    "gzip": True
}
headers = {
    "authorization": "Bearer eyJ0eXAiOiJKV1...",
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript Daily html gzip
const url = 'https://localhost:5000/gw/api/v1/statements';
const options = {
  method: 'POST',
  headers: {
    authorization: 'Bearer eyJ0eXAiOiJKV1...',
    Authorization: 'Bearer <token>',
    'Content-Type': 'application/json'
  },
  body: '{"accountId":"UXXXX","startDate":"20230102","endDate":"20230102","mimeType":"text/html","gzip":true}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Daily html gzip
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/statements"

	payload := strings.NewReader("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\",\n  \"gzip\": true\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("authorization", "Bearer eyJ0eXAiOiJKV1...")
	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Daily html gzip
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/statements")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["authorization"] = 'Bearer eyJ0eXAiOiJKV1...'
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\",\n  \"gzip\": true\n}"

response = http.request(request)
puts response.read_body
```

```java Daily html gzip
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/statements")
  .header("authorization", "Bearer eyJ0eXAiOiJKV1...")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\",\n  \"gzip\": true\n}")
  .asString();
```

```php Daily html gzip
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/statements', [
  'body' => '{
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html",
  "gzip": true
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
    'authorization' => 'Bearer eyJ0eXAiOiJKV1...',
  ],
]);

echo $response->getBody();
```

```csharp Daily html gzip
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/statements");
var request = new RestRequest(Method.POST);
request.AddHeader("authorization", "Bearer eyJ0eXAiOiJKV1...");
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"accountId\": \"UXXXX\",\n  \"startDate\": \"20230102\",\n  \"endDate\": \"20230102\",\n  \"mimeType\": \"text/html\",\n  \"gzip\": true\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Daily html gzip
import Foundation

let headers = [
  "authorization": "Bearer eyJ0eXAiOiJKV1...",
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "accountId": "UXXXX",
  "startDate": "20230102",
  "endDate": "20230102",
  "mimeType": "text/html",
  "gzip": true
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/statements")! as URL,
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