[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-instructions-query)

# Get Transaction History

POST https://localhost:5000/gw/api/v1/instructions/query
Content-Type: application/json

Query list of recent transactions (up to 30 days) based on accountId.**Scope**: `instructions.read`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-instructions-query

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
  - Allowed values: `QUERY_RECENT_INSTRUCTIONS`
- `instruction` (QueryRecentInstructions, required) — Request to query recent instructions for an account.

## Response

### 202

Accepts request to create a new instruction asynchronously

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionResult, optional) — Result of the submitted instruction.

## Errors

### 400 Bad Request Error

Returns a Problem detail instance representing a bad request.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)
- `invalidArguments` (list of InvalidArgument, optional)

### 403 Forbidden Error

Returns a Problem detail instance representing a forbidden request.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code.
- `detail` (string, required) — Human-readable explanation of the problem.
- `instructionSetId` (long, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionErrorResult, required) — Result of the submitted instruction.

### 422 Unprocessable Entity Error

Returns a Problem detail instance representing a business error.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code (422).
- `instructionSetId` (long, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionErrorResult, optional) — Result of the submitted instruction.

### 500 Internal Server Error

Returns a Problem detail instance representing an internal server error.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### QueryRecentInstructions

Request to query recent instructions for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `transactionHistory` (QueryRecentInstructionsTransactionHistory, required) — Filter/summary of the transaction history.

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

### InvalidArgument

- `field` (string, required)
- `description` (string, optional)

### InstructionErrorResult

Instruction result carrying error details for a rejected instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `error` (InstructionErrorResultError, required) — Error details returned when the instruction is rejected.
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `PROCESSED`, `REJECTED`, `PENDING_VERIFICATION`
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `description` (string, optional) — Human-readable note about the result (e.g. polling guidance).
- `details` (InstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### QueryRecentInstructionsTransactionHistory

Filter/summary of the transaction history.

- `daysToGoBack` (double, required) — Number of days to look back for matching instructions.
- `transactionType` (enum, optional) — Type of the transaction.
  - Allowed values: `ALL`, `ACH_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `WITHDRAWAL`, `DEPOSIT`, `DWAC`, `FOP`, `EDDA_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `CANCEL_INSTRUCTION`, `DELETE_BANK_INSTRUCTION`, `EXTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `INTERNAL_POSITION_TRANSFER`, `COMPLEX_ASSET_TRANSFER`

### InstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### DepositDetails

- `amount` (double, optional)
- `currency` (string, optional)
- `whenAvailable` (date, optional)
- `openBanking` (DepositDetailsOpenBanking, optional) — Present only when bankInstructionMethod is OPEN_BANKING.

### InstructionErrorResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

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

### Query Recent Instructions

**Request**

```json
{
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": {
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": {
      "daysToGoBack": 3,
      "transactionType": "ACH_INSTRUCTION"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 3702,
  "instructionResult": {
    "clientInstructionId": 7009001,
    "instructionType": "QUERY_RECENT_INSTRUCTIONS",
    "instructionStatus": "PENDING",
    "instructionId": 43094002,
    "ibReferenceId": 0,
    "description": "Query is being processed. Please poll for status 1 minutes later using FB status endpoint. No new queries will be allowed before this one is processed",
    "code": "PENDING"
  }
}
```

**SDK Code**

```go Query Recent Instructions
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3,\n      \"transactionType\": \"ACH_INSTRUCTION\"\n    }\n  }\n}")

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

```ruby Query Recent Instructions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3,\n      \"transactionType\": \"ACH_INSTRUCTION\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Query Recent Instructions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/instructions/query")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3,\n      \"transactionType\": \"ACH_INSTRUCTION\"\n    }\n  }\n}")
  .asString();
```

```php Query Recent Instructions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/instructions/query', [
  'body' => '{
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": {
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": {
      "daysToGoBack": 3,
      "transactionType": "ACH_INSTRUCTION"
    }
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Recent Instructions
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": [
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": [
      "daysToGoBack": 3,
      "transactionType": "ACH_INSTRUCTION"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/instructions/query")! as URL,
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

### Query Recent Instructions - Transaction Type not specified

**Request**

```json
{
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": {
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": {
      "daysToGoBack": 3
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 3702,
  "instructionResult": {
    "clientInstructionId": 7009001,
    "instructionType": "QUERY_RECENT_INSTRUCTIONS",
    "instructionStatus": "PENDING",
    "instructionId": 43094002,
    "ibReferenceId": 0,
    "description": "Query is being processed. Please poll for status 1 minutes later using FB status endpoint. No new queries will be allowed before this one is processed",
    "code": "PENDING"
  }
}
```

**SDK Code**

```go Query Recent Instructions - Transaction Type not specified
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3\n    }\n  }\n}")

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

```ruby Query Recent Instructions - Transaction Type not specified
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Query Recent Instructions - Transaction Type not specified
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/instructions/query")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"QUERY_RECENT_INSTRUCTIONS\",\n  \"instruction\": {\n    \"clientInstructionId\": 7009001,\n    \"accountId\": \"U139838\",\n    \"transactionHistory\": {\n      \"daysToGoBack\": 3\n    }\n  }\n}")
  .asString();
```

```php Query Recent Instructions - Transaction Type not specified
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/instructions/query', [
  'body' => '{
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": {
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": {
      "daysToGoBack": 3
    }
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Recent Instructions - Transaction Type not specified
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": [
    "clientInstructionId": 7009001,
    "accountId": "U139838",
    "transactionHistory": ["daysToGoBack": 3]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/instructions/query")! as URL,
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
