[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/authentication/oauth-2-0/generate-token)

# Create Access Token

POST https://localhost:5000/oauth2/api/v1/token
Content-Type: application/x-www-form-urlencoded

Generate OAuth 2.0 access tokens based on request parameters.

Reference: https://ibkrcampus.com/docs/web-api/api-reference/authentication/oauth-2-0/generate-token

## Authentication

- `Authorization` header (bearer token, required) — SSO bearer token.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/x-www-form-urlencoded)

This endpoint expects a TokenRequest.

- `scope` (string, optional)
- `clientAuthenticationMethod` (enum, optional)
  - Allowed values: `none`, `private_key_jwt`, `client_secret_basic`, `client_secret_post`
- `clientId` (string, optional)
- `clientSecret` (string, optional)
- `clientAssertion` (string, optional)
- `clientAssertionType` (string, optional)

## Response

### 200

Returns a token response.

- `access_token` (string, optional) — The serialized access token
- `refresh_token` (string, optional) — The serialized refresh token if applicable
- `id_token` (string, optional) — The serialized ID token if applicable
- `token_type` (string, optional) — The token type (e.g., Bearer)
- `scope` (string, optional) — The space-delimited list of granted scopes
- `expires_in` (long, optional) — The number of seconds from now until the access token expires

## Errors

### 400 Bad Request Error

Returns a [Problem detail](https://datatracker.ietf.org/doc/html/rfc9457) instance representing a bad request.

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 500 Internal Server Error

Returns a [Problem detail](https://datatracker.ietf.org/doc/html/rfc9457) instance representing an internal server error.

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjM0MDk5YjQxYThkZTY1ZTJmNTAwMzQ3MmQ0M2Q5ZDBhZjI2MWIzN2IifQ.eyJpc3MiOiIvdG9rZW4iLCJzdWIiOiJwcm9kdGVzdGVyIiwiZXhwIjoxNzA5NzczMjgyLCJpYXQiOjE3MDk2ODY4ODIsInNjb3BlIjoiZWNoby5yZWFkIGVjaG8ud3JpdGUiLCJjc2lkIjoicHJvZHRlc3RlciIsImFjY291bnRJZCI6IlU0NjM3NyJ9.HDfltwI2xOYYnCRgjefujhU2h5lcQCvuvtNuCVSeq26IydAvMiv_QccmcBvsMSHKYjH6nvA1r_5f7R3Jsc46_d1YMArcFfE33mj_qj9GYml-B_8634vLdD104abB-DU2J4a7yW1YwN61hYwPGWueps_UsnKnxf-Iaj6ELxtPBRl4NOEC8vJZ9nfhL81t4L5N_f-skXbpcLcArZaBtxqXvI1z4ClJd9L1-9pJ_3DPUp0s3VHnDCnx2wBkLY_pPEcnP52Ms_gppSHLXn_x5OLL82kbxWSlhbX9fvogj0AtHJDvhWNwTFk8Az57MSsPBAZMf4rsx-LY1ZK9bNSlQNb2W-BuqotDwwPwIZNB9en_6p0KoJFFEQu0dTSJAxGjfMeADQc6ZduHFzyNeOTpnh2oPfRK7JrsLGuGvbQ_M7taKEiDV49gpYzjJqVtfuNDAzLARLbj8WPGcUbckSF4pJH5Ipm1FbYhp0DzEgo5VEjZlQU5ChlQGakF4nf9NEIz5Aed",
  "token_type": "Bearer",
  "scope": "echo.read echo.write",
  "expires_in": 86399
}
```

**SDK Code**

```python Token Response
import requests

url = "https://localhost:5000/oauth2/api/v1/token"

payload = ""
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/x-www-form-urlencoded"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())
```

```go Token Response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/oauth2/api/v1/token"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Token Response
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/oauth2/api/v1/token")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/x-www-form-urlencoded'

response = http.request(request)
puts response.read_body
```

```php Token Response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/oauth2/api/v1/token', [
  'form_params' => null,
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/x-www-form-urlencoded',
  ],
]);

echo $response->getBody();
```

```swift Token Response
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/x-www-form-urlencoded"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/oauth2/api/v1/token")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
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
