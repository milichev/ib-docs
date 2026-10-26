[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/list-forms)

# Get Forms

GET https://localhost:5000/gw/api/v1/forms

Get forms**Scope**: `accounts.read` OR `forms.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/list-forms

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Query parameters

- `formNo` (list of long, optional)
- `getDocs` (string, optional)
- `fromDate` (string, optional)
- `toDate` (string, optional)
- `language` (string, optional)
- `projection` (enum, optional, default: NONE)
  - Allowed values: `PAYLOAD`, `DOCS`, `NONE`

## Response

### 200

Get forms

- `error` (ErrorResponse, optional)
- `hasError` (boolean, optional)
- `errorDescription` (string, optional)
- `fileData` (FileData, optional)
- `formDetails` (list of FormDetails, optional)
- `timestamp` (datetime, optional)

## Errors

### 400 Bad Request Error

Returns error description representing bad request

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 401 Unauthorized Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 403 Forbidden Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 500 Internal Server Error

Returns error description representing internal server error

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

## Types

### ErrorResponse

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### FileData

- `data` (FileDataData, optional)
- `name` (string, optional)

### FormDetails

- `formNumber` (long, optional)
- `sha1Checksum` (string, optional)
- `dateModified` (datetime, optional)
- `fileName` (string, optional)
- `language` (string, optional)
- `formName` (string, optional)
- `payload` (FormPayload, optional)
- `apiSupportedTask` (boolean, optional)
- `type` (string, optional)
- `action` (string, optional)
- `acceptableDocs` (list of string, optional)
- `questionnaire` (list of QuestionnaireResponse, optional)
- `error` (ErrorResponse, optional)
- `hasError` (boolean, optional)
- `errorDescription` (string, optional)
- `fileLength` (long, optional)

### FileDataData

### FormPayload

- `mimeType` (string, optional)
- `data` (string, optional)

### QuestionnaireResponse

- `questionId` (long, optional)
- `question` (string, optional)
- `isMandatoryToAnswer` (boolean, optional)
- `questionType` (string, optional)
- `answers` (list of AnswerResponse, optional)

### AnswerResponse

- `answerId` (long, optional)
- `answer` (string, optional)
- `dependentQuestionId` (long, optional)
- `dependentAnswerId` (long, optional)
- `multiAnswerDetail` (list of string, optional)

## Examples

**Response**

```json
{
  "error": {
    "status": 1,
    "error": "string",
    "message": "string"
  },
  "hasError": true,
  "errorDescription": "string",
  "fileData": {
    "data": {},
    "name": "string"
  },
  "formDetails": [
    {
      "formNumber": 1,
      "sha1Checksum": "string",
      "dateModified": "2024-01-15T09:30:00Z",
      "fileName": "string",
      "language": "string",
      "formName": "string",
      "payload": {
        "mimeType": "string",
        "data": "string"
      },
      "apiSupportedTask": true,
      "type": "string",
      "action": "string",
      "acceptableDocs": [
        "string"
      ],
      "questionnaire": [
        {
          "questionId": 1,
          "question": "string",
          "isMandatoryToAnswer": true,
          "questionType": "string",
          "answers": [
            {
              "answerId": 1,
              "answer": "string",
              "dependentQuestionId": 1,
              "dependentAnswerId": 1,
              "multiAnswerDetail": [
                "string"
              ]
            }
          ]
        }
      ],
      "error": {
        "status": 1,
        "error": "string",
        "message": "string"
      },
      "hasError": true,
      "errorDescription": "string",
      "fileLength": 1
    }
  ],
  "timestamp": "2024-01-15T09:30:00Z"
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/forms';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/forms"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/forms")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/forms', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/forms")! as URL,
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
