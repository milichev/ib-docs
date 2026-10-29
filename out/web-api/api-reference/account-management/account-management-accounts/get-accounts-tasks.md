[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-accounts/get-accounts-tasks)

# Get Registration Tasks

GET https://localhost:5000/gw/api/v1/accounts/{accountId}/tasks

Query registration tasks assigned to account and pending tasks that are required for account approval**Scope**: `accounts.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/get-accounts-tasks

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `accountId` (string, required)

### Query parameters

- `type` (enum, optional, default: registration)
  - Allowed values: `pending`, `registration`

## Response

### 200

Query registration tasks assigned to account and pending tasks that are required for account approval

- `Account Management Accounts_getAccountsTasks_Response_200`
  - RegistrationTasksResponse: RegistrationTasksResponse
  - PendingTasksResponse: PendingTasksResponse

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

### RegistrationTasksResponse

- `registrationTaskPresent` (boolean, optional)
- `empty` (boolean, optional)
- `error` (ErrorResponse, optional)
- `hasError` (boolean, optional)
- `errorDescription` (string, optional)
- `accountId` (string, optional)
- `status` (string, optional)
- `description` (string, optional)
- `state` (string, optional)
- `registrationTasks` (list of RegistrationTask, optional)

### PendingTasksResponse

- `empty` (boolean, optional)
- `error` (ErrorResponse, optional)
- `hasError` (boolean, optional)
- `errorDescription` (string, optional)
- `accountId` (string, optional)
- `status` (string, optional)
- `description` (string, optional)
- `state` (string, optional)
- `pendingTasks` (list of PendingTask, optional)
- `pendingTaskPresent` (boolean, optional)

### ErrorResponse

- `status` (long, optional)
- `error` (string, optional)
- `message` (string, optional)

### RegistrationTask

- `externalId` (string, optional)
- `formNumber` (long, optional)
- `formName` (string, optional)
- `action` (string, optional)
- `dateCompleted` (datetime, optional)
- `state` (string, optional)
- `questionIds` (list of long, optional)
- `warning` (string, optional)
- `isRequiredForApproval` (boolean, optional)
- `isCompleted` (boolean, optional)
- `isDeclined` (boolean, optional)

### PendingTask

- `taskNumber` (long, optional)
- `formNumber` (long, optional)
- `formName` (string, optional)
- `action` (string, optional)
- `externalId` (string, optional)
- `state` (string, optional)
- `documentRejectReason` (list of string, optional)
- `url` (string, optional)
- `startDate` (datetime, optional)
- `au10tixCreatedDate` (datetime, optional)
- `au10tixExpiryDate` (datetime, optional)
- `entityId` (long, optional)
- `onlineTask` (boolean, optional)
- `requiredForApproval` (boolean, optional)
- `requiredForTrading` (boolean, optional)
- `questionIds` (list of long, optional)

## Examples

**Response**

```json
{
  "accountId": "string",
  "description": "string",
  "empty": true,
  "error": {
    "error": "string",
    "message": "string",
    "status": 1
  },
  "errorDescription": "string",
  "hasError": true,
  "registrationTaskPresent": true,
  "registrationTasks": [
    {
      "action": "string",
      "dateCompleted": "2024-01-15T09:30:00Z",
      "externalId": "string",
      "formName": "string",
      "formNumber": 1,
      "isCompleted": true,
      "isDeclined": true,
      "isRequiredForApproval": true,
      "questionIds": [
        1
      ],
      "state": "string",
      "warning": "string"
    }
  ],
  "state": "string",
  "status": "string"
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/accounts/accountId/tasks"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/accounts/accountId/tasks"

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

url = URI("https://localhost:5000/gw/api/v1/accounts/accountId/tasks")

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

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/accounts/accountId/tasks', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/accounts/accountId/tasks")! as URL,
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
