[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-bank-instructions)

# Creates Multiple Banking Instructions(ach, Open-banking, Withdrawal, Delete, Traditional-bank-instruction-verification, Predefined-destination-instruction, Edda)

POST https://localhost:5000/gw/api/v1/bank-instructions:bulk
Content-Type: application/json

**Scope**: `bank-instructions.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-bank-instructions

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
  - Allowed values: `ACH_INSTRUCTION`, `OPEN_BANKING_INSTRUCTION`, `WITHDRAWAL_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `DELETE_BANK_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `EDDA_INSTRUCTION`
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

### Delete Instruction

**Request**

```json
{
  "instructionType": "DELETE_BANK_INSTRUCTION",
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
  "instructionSetId": 1522,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 1522,
      "instructionResult": {
        "clientInstructionId": 12003410,
        "instructionType": "DELETE_BANK_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 11132283
      }
    },
    {
      "status": 202,
      "instructionSetId": 1522,
      "instructionResult": {
        "clientInstructionId": 12003411,
        "instructionType": "DELETE_BANK_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 11132284
      }
    },
    {
      "status": 202,
      "instructionSetId": 1522,
      "instructionResult": {
        "clientInstructionId": 12003412,
        "instructionType": "DELETE_BANK_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 11132285
      }
    }
  ]
}
```

**SDK Code**

```go Delete Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Delete Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Delete Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Delete Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "DELETE_BANK_INSTRUCTION",
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

```swift Delete Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### ACH Instruction

**Request**

```json
{
  "instructionType": "ACH_INSTRUCTION",
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
  "instructionSetId": 4505,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4505,
      "instructionResult": {
        "clientInstructionId": 7011149,
        "instructionType": "ACH_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096799
      }
    },
    {
      "status": 202,
      "instructionSetId": 4505,
      "instructionResult": {
        "clientInstructionId": 7011150,
        "instructionType": "ACH_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096800
      }
    }
  ]
}
```

**SDK Code**

```go ACH Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby ACH Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java ACH Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php ACH Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "ACH_INSTRUCTION",
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

```swift ACH Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "ACH_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Traditional Bank Instruction Verification

**Request**

```json
{
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
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
  "instructionSetId": 4505,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4505,
      "instructionResult": {
        "clientInstructionId": 7011149,
        "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
        "instructionStatus": "PENDING",
        "instructionId": 43096799
      }
    },
    {
      "status": 202,
      "instructionSetId": 4505,
      "instructionResult": {
        "clientInstructionId": 7011150,
        "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
        "instructionStatus": "PENDING",
        "instructionId": 43096800
      }
    }
  ]
}
```

**SDK Code**

```go Traditional Bank Instruction Verification
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Traditional Bank Instruction Verification
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Traditional Bank Instruction Verification
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Traditional Bank Instruction Verification
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
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

```swift Traditional Bank Instruction Verification
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Predefined Destination Instruction

**Request**

```json
{
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
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
  "instructionSetId": 4512,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4512,
      "instructionResult": {
        "clientInstructionId": 7011169,
        "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096811
      }
    },
    {
      "status": 202,
      "instructionSetId": 4512,
      "instructionResult": {
        "clientInstructionId": 7011170,
        "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096812
      }
    }
  ]
}
```

**SDK Code**

```go Predefined Destination Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Predefined Destination Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Predefined Destination Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Predefined Destination Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
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

```swift Predefined Destination Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### eDDA Instruction

**Request**

```json
{
  "instructionType": "EDDA_INSTRUCTION",
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
  "instructionSetId": 4512,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4512,
      "instructionResult": {
        "clientInstructionId": 7011169,
        "instructionType": "EDDA_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096811
      }
    },
    {
      "status": 202,
      "instructionSetId": 4512,
      "instructionResult": {
        "clientInstructionId": 7011170,
        "instructionType": "EDDA_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 43096812
      }
    }
  ]
}
```

**SDK Code**

```go eDDA Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby eDDA Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java eDDA Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php eDDA Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "EDDA_INSTRUCTION",
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

```swift eDDA Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EDDA_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Open Banking Instruction

**Request**

```json
{
  "instructionType": "OPEN_BANKING_INSTRUCTION",
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
  "instructionSetId": 924413,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 924413,
      "instructionResult": {
        "clientInstructionId": 11111318,
        "instructionType": "OPEN_BANKING_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 703854682,
        "details": {
          "providerResponse": {
            "hostedlinkUrl": "https://secure.plaid.com/hl/ls90p1o43o92oo9263nprro41nqq1r03ss",
            "linkToken": "link-sandbox-45c6b98b-47bb-4718-acee-b96add6e58ff"
          },
          "serviceProvider": "PLAID"
        }
      }
    },
    {
      "status": 202,
      "instructionSetId": 924413,
      "instructionResult": {
        "clientInstructionId": 11111319,
        "instructionType": "OPEN_BANKING_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 703854683,
        "details": {
          "providerResponse": {
            "hostedlinkUrl": "https://secure.plaid.com/hl/ns91q2p54p03pp0374osqp52orqq2s14tt",
            "linkToken": "link-sandbox-56d7c09c-58cc-5829-bdff-c07bbe6f69gg"
          },
          "serviceProvider": "PLAID"
        }
      }
    }
  ]
}
```

**SDK Code**

```go Open Banking Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"OPEN_BANKING_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Open Banking Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"OPEN_BANKING_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Open Banking Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"OPEN_BANKING_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Open Banking Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "OPEN_BANKING_INSTRUCTION",
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

```swift Open Banking Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "OPEN_BANKING_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Withdrawal Instruction

**Request**

```json
{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
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
  "instructionSetId": 929604,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 929604,
      "instructionResult": {
        "clientInstructionId": 11111445,
        "instructionType": "WITHDRAWAL_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 704094343,
        "details": {
          "bankAccountNumber": "*****1111",
          "bankInstructionName": "Starling - LVP",
          "bankRoutingNumber": "MONZGB2LXXX",
          "currency": "GBP",
          "type": "CREDIT"
        }
      }
    },
    {
      "status": 202,
      "instructionSetId": 929604,
      "instructionResult": {
        "clientInstructionId": 11111446,
        "instructionType": "WITHDRAWAL_INSTRUCTION",
        "instructionStatus": "PENDING",
        "instructionId": 704094344,
        "details": {
          "bankAccountNumber": "*****1111",
          "bankInstructionName": "BBVA - Banca Perso(1111) - SEPA",
          "bankRoutingNumber": "BBVAESMMXXX",
          "currency": "EUR",
          "type": "CREDIT"
        }
      }
    }
  ]
}
```

**SDK Code**

```go Withdrawal Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Withdrawal Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Withdrawal Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Withdrawal Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
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

```swift Withdrawal Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Delete Instruction

**Request**

```json
{
  "instructionType": "DELETE_BANK_INSTRUCTION",
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
  "instructionSetId": 1523,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```go Delete Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Delete Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Delete Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Delete Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "DELETE_BANK_INSTRUCTION",
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

```swift Delete Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### ACH Instruction

**Request**

```json
{
  "instructionType": "ACH_INSTRUCTION",
  "instructions": [
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4506,
  "instructionResults": [
    "string",
    "string"
  ]
}
```

**SDK Code**

```go ACH Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby ACH Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java ACH Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php ACH Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "ACH_INSTRUCTION",
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

```swift ACH Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "ACH_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Traditional Bank Instruction Verification

**Request**

```json
{
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
  "instructions": [
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4511,
  "instructionResults": [
    "string",
    "string"
  ]
}
```

**SDK Code**

```go Traditional Bank Instruction Verification
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Traditional Bank Instruction Verification
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Traditional Bank Instruction Verification
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Traditional Bank Instruction Verification
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
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

```swift Traditional Bank Instruction Verification
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### Predefined Destination Instruction

**Request**

```json
{
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
  "instructions": [
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4513,
  "instructionResults": [
    "string",
    "string"
  ]
}
```

**SDK Code**

```go Predefined Destination Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Predefined Destination Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java Predefined Destination Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php Predefined Destination Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
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

```swift Predefined Destination Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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

### eDDA Instruction

**Request**

```json
{
  "instructionType": "EDDA_INSTRUCTION",
  "instructions": [
    "string",
    "string"
  ]
}
```

**Response**

```json
{
  "status": 207,
  "instructionSetId": 4513,
  "instructionResults": [
    "string",
    "string"
  ]
}
```

**SDK Code**

```go eDDA Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby eDDA Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java eDDA Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/bank-instructions:bulk")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")
  .asString();
```

```php eDDA Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions:bulk', [
  'body' => '{
  "instructionType": "EDDA_INSTRUCTION",
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

```swift eDDA Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EDDA_INSTRUCTION",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions:bulk")! as URL,
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
