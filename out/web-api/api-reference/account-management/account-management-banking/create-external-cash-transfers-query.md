[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-cash-transfers-query)

# View Cash Balances

POST https://localhost:5000/gw/api/v1/external-cash-transfers/query
Content-Type: application/json

View available cash for withdrawal with and without margin loan by accountId**Scope**: `transfers.read`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-cash-transfers-query

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
  - Allowed values: `QUERY_WITHDRAWABLE_FUNDS`, `QUERY_IRA_CONTRIBUTIONS`
- `instruction` (GwApiV1ExternalCashTransfersQueryPostRequestBodyContentApplicationJsonSchemaInstruction, required)

## Response

### 201

Instruction successfully created and processed synchronously

- `Account Management Banking_createExternalCashTransfersQuery_Response_201`
  - QueryWithdrawableAmountsResponse: QueryWithdrawableAmountsResponse
  - QueryWithdrawableAmountsWithoutOriginHoldResponse: QueryWithdrawableAmountsWithoutOriginHoldResponse

### 202

Accepts request to create a new instruction asynchronously

- `Account Management Banking_createExternalCashTransfersQuery_Response_202`
  - AsynchronousInstructionResponse: AsynchronousInstructionResponse

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

### GwApiV1ExternalCashTransfersQueryPostRequestBodyContentApplicationJsonSchemaInstruction

- QueryWithdrawableFunds: QueryWithdrawableFunds
- QueryIRAContributions: QueryIRAContributions

### QueryWithdrawableAmountsResponse

Response containing withdrawable amounts for an account.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryWithdrawableAmountsInstructionResult, optional) — Result of the submitted instruction.

### QueryWithdrawableAmountsWithoutOriginHoldResponse

Response containing withdrawable amounts excluding origination hold.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryWithdrawableAmountsWithoutOriginHoldResult, optional) — Result of the submitted instruction.

### AsynchronousInstructionResponse

Response acknowledging an asynchronously processed instruction.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionResult, optional) — Result of the submitted instruction.

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

### QueryWithdrawableFunds

Request to query withdrawable funds for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `bankRoutingNumber` (string, optional) — If bankRoutingNumber is provided then bankAccountNumber is also required, cannot be passed with bankInstructionName
- `bankAccountNumber` (string, optional) — If bankAccountNumber is provided then bankRoutingNumber is also required, cannot be passed with bankInstructionName
- `bankInstructionName` (string, optional) — bankInstructionName cannot be passed with (bankAccountNumber or bankRoutingNumber)

### QueryIRAContributions

Request to query IRA contribution limits and usage for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `year` (string, required) — Contribution tax year.

### QueryWithdrawableAmountsInstructionResult

Withdrawable amounts for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `withdrawableAmount` (double, required) — Amount available to withdraw.
- `withdrawableAmountNoBorrow` (double, required) — Amount available to withdraw, excluding borrowing.
- `allowedTransferAmountToMaster` (double, required) — Amount allowed to transfer to the master account.
- `allowedTransferAmountToMasterNoBorrow` (double, required) — Amount allowed to transfer to the master account, excluding borrowing.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (QueryWithdrawableAmountsInstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (QueryWithdrawableAmountsInstructionResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### QueryWithdrawableAmountsWithoutOriginHoldResult

Withdrawable amounts excluding origination hold.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `withdrawableAmountWithoutOriginationHold` (double, required) — Amount available to withdraw excluding funds under origination hold.
- `withdrawableAmountWithoutOriginationHoldNoBorrow` (double, required) — Amount available to withdraw excluding origination hold and borrowing.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (QueryWithdrawableAmountsWithoutOriginHoldResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (QueryWithdrawableAmountsWithoutOriginHoldResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

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

### InstructionErrorResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### DepositDetails

- `amount` (double, optional)
- `currency` (string, optional)
- `whenAvailable` (date, optional)
- `openBanking` (DepositDetailsOpenBanking, optional) — Present only when bankInstructionMethod is OPEN_BANKING.

### InstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### QueryWithdrawableAmountsInstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### QueryWithdrawableAmountsInstructionResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### QueryWithdrawableAmountsWithoutOriginHoldResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### QueryWithdrawableAmountsWithoutOriginHoldResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### DepositDetailsOpenBanking

Present only when bankInstructionMethod is OPEN_BANKING.

- `serviceProvider` (enum, optional)
  - Allowed values: `PLAID`
- `providerResponse` (DepositDetailsOpenBankingProviderResponse, optional) — Provider-specific data returned once the Plaid payment has been initiated.

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

### DepositDetailsOpenBankingProviderResponse

Provider-specific data returned once the Plaid payment has been initiated.

- `paymentId` (string, optional)
- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### OpenBankingInstructionResultDetailsProviderResponse

Provider-specific data. For PLAID, populated with hostedlinkUrl/linkToken only while account linkage is pending; absent once the account is linked.

- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

## Examples

### Query Withdrawable Funds

**Request**

```json
{
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": {
    "accountId": "U87440",
    "clientInstructionId": 7009005,
    "currency": "USD"
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "allowedTransferAmountToMaster": 0,
    "allowedTransferAmountToMasterNoBorrow": 0,
    "clientInstructionId": 7013230,
    "currency": "EUR",
    "ibReferenceId": 0,
    "instructionId": 43133309,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
    "withdrawableAmount": 0,
    "withdrawableAmountNoBorrow": 0
  },
  "instructionSetId": 17791,
  "status": 201
}
```

**SDK Code**

```python Query Withdrawable Funds
import requests

url = "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

payload = {
    "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
    "instruction": {
        "accountId": "U87440",
        "clientInstructionId": 7009005,
        "currency": "USD"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Withdrawable Funds
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_WITHDRAWABLE_FUNDS\",\n  \"instruction\": {\n    \"accountId\": \"U87440\",\n    \"clientInstructionId\": 7009005,\n    \"currency\": \"USD\"\n  }\n}")

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

```ruby Query Withdrawable Funds
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_WITHDRAWABLE_FUNDS\",\n  \"instruction\": {\n    \"accountId\": \"U87440\",\n    \"clientInstructionId\": 7009005,\n    \"currency\": \"USD\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Withdrawable Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers/query', [
  'body' => '{
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": {
    "accountId": "U87440",
    "clientInstructionId": 7009005,
    "currency": "USD"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Withdrawable Funds
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": [
    "accountId": "U87440",
    "clientInstructionId": 7009005,
    "currency": "USD"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers/query")! as URL,
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

### Query Withdrawable Funds Without Origination Hold

**Request**

```json
{
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": {
    "accountId": "U139838",
    "bankAccountNumber": "9876543210",
    "bankRoutingNumber": "122199983",
    "clientInstructionId": 7009006,
    "currency": "USD"
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "clientInstructionId": 7013230,
    "currency": "EUR",
    "ibReferenceId": 0,
    "instructionId": 43133309,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
    "withdrawableAmountWithoutOriginationHold": 0,
    "withdrawableAmountWithoutOriginationHoldNoBorrow": 0
  },
  "instructionSetId": 17791,
  "status": 201
}
```

**SDK Code**

```python Query Withdrawable Funds Without Origination Hold
import requests

url = "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

payload = {
    "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
    "instruction": {
        "accountId": "U139838",
        "bankAccountNumber": "9876543210",
        "bankRoutingNumber": "122199983",
        "clientInstructionId": 7009006,
        "currency": "USD"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Withdrawable Funds Without Origination Hold
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_WITHDRAWABLE_FUNDS\",\n  \"instruction\": {\n    \"accountId\": \"U139838\",\n    \"bankAccountNumber\": \"9876543210\",\n    \"bankRoutingNumber\": \"122199983\",\n    \"clientInstructionId\": 7009006,\n    \"currency\": \"USD\"\n  }\n}")

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

```ruby Query Withdrawable Funds Without Origination Hold
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_WITHDRAWABLE_FUNDS\",\n  \"instruction\": {\n    \"accountId\": \"U139838\",\n    \"bankAccountNumber\": \"9876543210\",\n    \"bankRoutingNumber\": \"122199983\",\n    \"clientInstructionId\": 7009006,\n    \"currency\": \"USD\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Withdrawable Funds Without Origination Hold
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers/query', [
  'body' => '{
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": {
    "accountId": "U139838",
    "bankAccountNumber": "9876543210",
    "bankRoutingNumber": "122199983",
    "clientInstructionId": 7009006,
    "currency": "USD"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Withdrawable Funds Without Origination Hold
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": [
    "accountId": "U139838",
    "bankAccountNumber": "9876543210",
    "bankRoutingNumber": "122199983",
    "clientInstructionId": 7009006,
    "currency": "USD"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers/query")! as URL,
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

### Query IRA Contributions

**Request**

```json
{
  "instructionType": "QUERY_IRA_CONTRIBUTIONS",
  "instruction": {
    "accountId": "U68903",
    "clientInstructionId": 7009007,
    "currency": "USD",
    "year": "2003"
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U1032333",
    "clientInstructionId": 7013306,
    "description": "Query is being processed. Please poll for status 1 minutes later using FB status endpoint. No new queries will be allowed before this one is processed ",
    "ibReferenceId": 0,
    "instructionId": 43134474,
    "instructionStatus": "PENDING",
    "instructionType": "QUERY_IRA_CONTRIBUTIONS",
    "year": "2022"
  },
  "instructionSetId": 18640,
  "status": 202
}
```

**SDK Code**

```python Query IRA Contributions
import requests

url = "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

payload = {
    "instructionType": "QUERY_IRA_CONTRIBUTIONS",
    "instruction": {
        "accountId": "U68903",
        "clientInstructionId": 7009007,
        "currency": "USD",
        "year": "2003"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query IRA Contributions
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_IRA_CONTRIBUTIONS\",\n  \"instruction\": {\n    \"accountId\": \"U68903\",\n    \"clientInstructionId\": 7009007,\n    \"currency\": \"USD\",\n    \"year\": \"2003\"\n  }\n}")

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

```ruby Query IRA Contributions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_IRA_CONTRIBUTIONS\",\n  \"instruction\": {\n    \"accountId\": \"U68903\",\n    \"clientInstructionId\": 7009007,\n    \"currency\": \"USD\",\n    \"year\": \"2003\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query IRA Contributions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers/query', [
  'body' => '{
  "instructionType": "QUERY_IRA_CONTRIBUTIONS",
  "instruction": {
    "accountId": "U68903",
    "clientInstructionId": 7009007,
    "currency": "USD",
    "year": "2003"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query IRA Contributions
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_IRA_CONTRIBUTIONS",
  "instruction": [
    "accountId": "U68903",
    "clientInstructionId": 7009007,
    "currency": "USD",
    "year": "2003"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers/query")! as URL,
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
