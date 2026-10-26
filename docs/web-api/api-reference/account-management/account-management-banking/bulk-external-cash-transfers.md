[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-external-cash-transfers)

# Creates Multiple External Cash Transfers (Deposit And Withdraw Fund)

POST https://localhost:5000/gw/api/v1/external-cash-transfers:bulk
Content-Type: application/json

**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-external-cash-transfers

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `client-id` (string, required) — The client's clientId

### Body (application/json)

This endpoint expects an object.

- `instructionType` (enum, required)
  - Allowed values: `DEPOSIT`, `WITHDRAWAL`
- `instructions` (list of any, required)

## Response

### 202

Accepts all instructions in Bulk request to create them asynchronously

- `status` (long, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResults` (list of AsynchronousInstructionSetResponseInstructionResultsItems, optional) — Per-instruction results for the bulk request.

### 207

Some or all instructions are rejected, some (if any) are accepted for asynchronous creation

- `status` (long, required) — HTTP status code for the bulk request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResults` (list of any, optional) — Per-instruction results for the bulk request.

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `invalidArguments` (list of InvalidArgument, optional)

### 500 Internal Server Error

Unable to process request due to an Internal Error. Please try again later.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### AsynchronousInstructionSetResponseInstructionResultsItems

- `status` (long, required) — Processing status.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionResult, required) — Result of the submitted instruction.

### InvalidArgument

- `field` (string, required)
- `description` (string, optional)

### InstructionResult

Result of a submitted instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `PROCESSED`, `REJECTED`, `PENDING_VERIFICATION`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result (e.g. polling guidance).
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.
- `details` (InstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.

### InstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### DepositDetails

- `amount` (double, optional)
- `currency` (string, optional)
- `whenAvailable` (date, optional)
- `openBanking` (DepositDetailsOpenBanking, optional) — Present only when bankInstructionMethod is OPEN_BANKING.

### OpenBankingInstructionResultDetails

- `bankInstructionName` (string, optional)
- `type` (string, optional)
- `currency` (string, optional)
- `bankRoutingNumber` (string, optional)
- `bankAccountNumber` (string, optional)
- `serviceProvider` (enum, optional)
  - Allowed values: `PLAID`
- `providerResponse` (OpenBankingInstructionResultDetailsProviderResponse, optional) — Provider-specific data. For PLAID, populated with hostedlinkUrl/linkToken only while account linkage is pending; absent once the account is linked.

### WithdrawalInstructionResultDetails

- `bankInstructionName` (string, optional)
- `type` (string, optional)
- `currency` (string, optional)
- `bankRoutingNumber` (string, optional)
- `bankAccountNumber` (string, optional)

### DepositDetailsOpenBanking

Present only when bankInstructionMethod is OPEN_BANKING.

- `serviceProvider` (enum, optional)
  - Allowed values: `PLAID`
- `providerResponse` (DepositDetailsOpenBankingProviderResponse, optional) — Provider-specific data returned once the Plaid payment has been initiated.

### OpenBankingInstructionResultDetailsProviderResponse

Provider-specific data. For PLAID, populated with hostedlinkUrl/linkToken only while account linkage is pending; absent once the account is linked.

- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### DepositDetailsOpenBankingProviderResponse

Provider-specific data returned once the Plaid payment has been initiated.

- `paymentId` (string, optional)
- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

## Examples

### Withdraw Funds

**Request**

```json
{
  "instructionType": "WITHDRAWAL",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 9094,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 9094,
      "instructionResult": {
        "clientInstructionId": 7012999,
        "instructionType": "WITHDRAWAL",
        "instructionStatus": "PENDING",
        "instructionId": 43100910
      }
    },
    {
      "status": 202,
      "instructionSetId": 9094,
      "instructionResult": {
        "clientInstructionId": 7013000,
        "instructionType": "WITHDRAWAL",
        "instructionStatus": "PENDING",
        "instructionId": 43100911
      }
    },
    {
      "status": 202,
      "instructionSetId": 9094,
      "instructionResult": {
        "clientInstructionId": 7013001,
        "instructionType": "WITHDRAWAL",
        "instructionStatus": "PENDING",
        "instructionId": 43100912
      }
    }
  ]
}
```

**SDK Code**

```javascript Withdraw Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"WITHDRAWAL","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Withdraw Funds
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Withdraw Funds
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Withdraw Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk', [
  'body' => '{
  "instructionType": "WITHDRAWAL",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Withdraw Funds
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")! as URL,
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

### Deposit Funds

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 9095,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 9095,
      "instructionResult": {
        "clientInstructionId": 7013002,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PENDING",
        "instructionId": 43100913
      }
    },
    {
      "status": 202,
      "instructionSetId": 9095,
      "instructionResult": {
        "clientInstructionId": 7013003,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PENDING",
        "instructionId": 43100914
      }
    },
    {
      "status": 202,
      "instructionSetId": 9095,
      "instructionResult": {
        "clientInstructionId": 7013004,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PENDING",
        "instructionId": 43100915
      }
    }
  ]
}
```

**SDK Code**

```javascript Deposit Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Deposit Funds
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Deposit Funds
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Deposit Funds
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")! as URL,
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

### Deposit Funds - Open Banking

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 9096,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 9096,
      "instructionResult": {
        "clientInstructionId": 7013051,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PROCESSED",
        "instructionId": 43100916,
        "depositDetails": {
          "amount": 100,
          "currency": "EUR",
          "openBanking": {
            "serviceProvider": "PLAID",
            "providerResponse": {
              "paymentId": "payment-sandbox-3c4c4c1c-9c1a-4d4d-8c1a-9c1a4d4d8c1a",
              "hostedlinkUrl": "https://secure.plaid.com/hl/ls90p1o43o92oo9263nprro41nqq1r03ss",
              "linkToken": "link-sandbox-45c6b98b-47bb-4718-acee-b96add6e58ff"
            }
          }
        }
      }
    },
    {
      "status": 202,
      "instructionSetId": 9096,
      "instructionResult": {
        "clientInstructionId": 7013052,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PROCESSED",
        "instructionId": 43100917,
        "depositDetails": {
          "amount": 50,
          "currency": "GBP",
          "openBanking": {
            "serviceProvider": "PLAID",
            "providerResponse": {
              "paymentId": "payment-sandbox-56d7c09c-58cc-5829-bdff-c07bbe6f69gg",
              "hostedlinkUrl": "https://secure.plaid.com/hl/ns91q2p54p03pp0374osqp52orqq2s14tt",
              "linkToken": "link-sandbox-56d7c09c-58cc-5829-bdff-c07bbe6f69gg"
            }
          }
        }
      }
    }
  ]
}
```

**SDK Code**

```javascript Deposit Funds - Open Banking
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instructions":["string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Deposit Funds - Open Banking
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Deposit Funds - Open Banking
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds - Open Banking
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string"
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Deposit Funds - Open Banking
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")! as URL,
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

### Withdraw Funds

**Request**

```json
{
  "instructionType": "WITHDRAWAL",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4433,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript Withdraw Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"WITHDRAWAL","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Withdraw Funds
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Withdraw Funds
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Withdraw Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk', [
  'body' => '{
  "instructionType": "WITHDRAWAL",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Withdraw Funds
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")! as URL,
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

### Deposit Funds

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4493,
  "instructionResults": [
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript Deposit Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Deposit Funds
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Deposit Funds
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers:bulk', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instructions": [
    "string",
    "string",
    "string"
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Deposit Funds
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers:bulk")! as URL,
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
