[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-bank-instructions-query)

# View Bank Instructions

POST https://localhost:5000/gw/api/v1/bank-instructions/query
Content-Type: application/json

View active bank instructions for an accountId.**Scope**: `bank-instructions.read`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-bank-instructions-query

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
  - Allowed values: `QUERY_BANK_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`
- `instruction` (GwApiV1BankInstructionsQueryPostRequestBodyContentApplicationJsonSchemaInstruction, required)

## Response

### 201

Instruction successfully created and processed synchronously

- `Account Management Banking_createBankInstructionsQuery_Response_201`
  - QueryRecentRecurringEventResponse: QueryRecentRecurringEventResponse
  - QueryBankInstructionResponse: QueryBankInstructionResponse
  - QueryRecurringInstructionsResponse: QueryRecurringInstructionsResponse

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

### GwApiV1BankInstructionsQueryPostRequestBodyContentApplicationJsonSchemaInstruction

- QueryBankInstruction: QueryBankInstruction
- QueryRecentRecurringEvents: QueryRecentRecurringEvents
- QueryRecurringInstructions: QueryRecurringInstructions

### QueryRecentRecurringEventResponse

Response containing recent occurrences of a recurring instruction.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryRecentRecurringEventResult, optional) — Result of the submitted instruction.

### QueryBankInstructionResponse

Response containing saved bank instructions for an account.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryBankInstructionResult, optional) — Result of the submitted instruction.

### QueryRecurringInstructionsResponse

Response containing recurring instructions for an account.

- `instructionResult` (QueryRecurringInstructionsResult, optional) — Recurring instructions for an account.

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

### QueryBankInstruction

Request to query saved bank instructions for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `ACH`, `WIRE`, `USACH`, `CAACH`, `SEPA`, `eDDA`, `eGIRO`, `OPEN_BANKING`

### QueryRecentRecurringEvents

Request to query recent occurrences of a recurring instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `ibReferenceId` (double, required) — Interactive Brokers global identifier of the recurring instruction request.
- `numberOfTransactions` (double, optional) — Number of recent transactions to return.

### QueryRecurringInstructions

Request to query recurring instructions for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").

### QueryRecentRecurringEventResult

Recent occurrences of a recurring instruction.

- `amount` (double, required) — Monetary amount for the transaction.
- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `PROCESSED`, `REJECTED`, `PENDING_VERIFICATION`
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `method` (string, required) — Funding method of the recurring transaction.
- `recurringInstructionName` (string, required) — Name of the recurring instruction.
- `recurringTransactionStatus` (string, required) — Status of the recurring instruction.
- `recurringTransactionType` (string, required) — Type of the recurring transaction.
- `transactionHistory` (QueryRecentRecurringEventResultTransactionHistory, required) — Filter/summary of the transaction history.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `description` (string, optional) — Human-readable note about the result (e.g. polling guidance).
- `details` (InstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### QueryBankInstructionResult

Saved bank instructions for an account.

- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `bankInstructionDetails` (list of QueryBankInstructionResultBankInstructionDetailsItems, required) — List of bank instructions configured for the account.
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `WIRE`, `ACH`, `USACH`, `CAACH`, `SEPA`, `eDDA`, `eGIRO`, `OPEN_BANKING`
- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
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

### QueryRecurringInstructionsResult

Recurring instructions for an account.

- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `PROCESSED`, `REJECTED`, `PENDING_VERIFICATION`
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `recurringInstructions` (list of QueryRecurringInstructionsResultRecurringInstructionsItems, required) — List of recurring instructions for the account.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `description` (string, optional) — Human-readable note about the result (e.g. polling guidance).
- `details` (InstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

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

### QueryRecentRecurringEventResultTransactionHistory

Filter/summary of the transaction history.

- `maxNumberOfTransactions` (long, optional) — Maximum number of transactions returned.
- `result` (list of QueryRecentRecurringEventResultTransactionHistoryResultItems, optional) — List of matching records.

### QueryBankInstructionResultBankInstructionDetailsItems

- `instructionName` (string, required) — Name of the recurring instruction.
- `type` (string, required) — Type of the bank instruction. One of: CREDIT, DEBIT, DEBIT_CREDIT.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `instructionStatus` (string, required) — Processing state of the instruction.
- `bankRoutingNumber` (string, required) — Bank routing number.
- `bankAccountNumber` (string, required) — Bank account number.

### QueryRecurringInstructionsResultRecurringInstructionsItems

- `requestId` (long, optional) — Retail request id of the recurring instruction request.
- `bankInstructionName` (string, optional) — Name identifying the saved bank instruction / destination.
- `transactionType` (string, optional) — Type of the transaction.
- `bankInstructionMethod` (string, optional) — Funding method / payment rail for the bank instruction.
- `amount` (double, optional) — Monetary amount for the transaction.
- `currency` (string, optional) — ISO 4217 currency code (e.g. "USD").
- `frequency` (string, optional) — Frequency at which the recurring instruction runs.
- `startDate` (date, optional) — Start date of the recurring schedule.
- `endDate` (date, optional) — End date of the recurring schedule.

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

### QueryRecentRecurringEventResultTransactionHistoryResultItems

- `ibRequestId` (long, optional) — Interactive Brokers global identifier of the request.
- `status` (string, optional) — Processing status.

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

### Query Bank Instruction - WIRE

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "bankInstructionDetails": [
      {
        "bankAccountNumber": "*****7042",
        "bankRoutingNumber": "000127591",
        "currency": "USD",
        "instructionName": "testCitadele",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****9869",
        "bankRoutingNumber": "021100361",
        "currency": "USD",
        "instructionName": "testChase1",
        "instructionStatus": "PROCESSED",
        "type": "LOCAL_BANK"
      },
      {
        "bankAccountNumber": "*****9889",
        "bankRoutingNumber": "021112361",
        "currency": "USD",
        "instructionName": "testee",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****2531",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "test multiple",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****1234",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "farawayBroker",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BROKER"
      }
    ],
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 12001819,
    "ibReferenceId": 0,
    "instructionId": 43094187,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_BANK_INSTRUCTION"
  },
  "instructionSetId": 3771,
  "status": 201
}
```

**SDK Code**

```python Query Bank Instruction - WIRE
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Query Bank Instruction - WIRE
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Query Bank Instruction - WIRE
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Query Bank Instruction - WIRE
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Query Bank Instruction - WIRE
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Bank Instruction - ACH

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "bankInstructionDetails": [
      {
        "bankAccountNumber": "*****7042",
        "bankRoutingNumber": "000127591",
        "currency": "USD",
        "instructionName": "testCitadele",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****9869",
        "bankRoutingNumber": "021100361",
        "currency": "USD",
        "instructionName": "testChase1",
        "instructionStatus": "PROCESSED",
        "type": "LOCAL_BANK"
      },
      {
        "bankAccountNumber": "*****9889",
        "bankRoutingNumber": "021112361",
        "currency": "USD",
        "instructionName": "testee",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****2531",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "test multiple",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****1234",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "farawayBroker",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BROKER"
      }
    ],
    "bankInstructionMethod": "ACH",
    "clientInstructionId": 12001819,
    "ibReferenceId": 0,
    "instructionId": 43094187,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_BANK_INSTRUCTION"
  },
  "instructionSetId": 3771,
  "status": 201
}
```

**SDK Code**

```python Query Bank Instruction - ACH
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Query Bank Instruction - ACH
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Query Bank Instruction - ACH
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Query Bank Instruction - ACH
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Query Bank Instruction - ACH
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Recent Recurring Events

**Response**

```json
{
  "instructionResult": {
    "amount": 1,
    "clientInstructionId": 12007909,
    "currency": "CNH",
    "ibReferenceId": 0,
    "instructionId": 43104464,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_RECENT_RECURRING_EVENTS",
    "method": "206603051",
    "recurringInstructionName": "test",
    "recurringTransactionStatus": "NOTACTIVATED",
    "recurringTransactionType": "DEPOSIT",
    "transactionHistory": {
      "maxNumberOfTransactions": 100,
      "result": [
        {
          "ibRequestId": 206586288,
          "status": "ACKNOWLEDGED"
        },
        {
          "ibRequestId": 206582418,
          "status": "CANCELED"
        }
      ]
    }
  },
  "instructionSetId": 14132,
  "status": 201
}
```

**SDK Code**

```python Query Recent Recurring Events
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Query Recent Recurring Events
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Query Recent Recurring Events
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Query Recent Recurring Events
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Query Recent Recurring Events
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Recurring Instructions - using Account ID

**Request**

```json
{
  "instructionType": "QUERY_RECURRING_INSTRUCTIONS",
  "instruction": {
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U399192",
    "clientInstructionId": 12008027,
    "ibReferenceId": 0,
    "instructionId": 43104628,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_RECENT_INSTRUCTIONS",
    "recurringInstructions": [
      {
        "amount": 1,
        "bankInstructionMethod": "ACH",
        "bankInstructionName": "Recurring Test- cpereira",
        "currency": "USD",
        "endDate": "2024-12-12",
        "frequency": "MONTHLY",
        "requestId": 206611807,
        "startDate": "2024-06-12",
        "transactionType": "DEPOSIT"
      }
    ]
  },
  "instructionSetId": 14258,
  "status": 201
}
```

**SDK Code**

```python Query Recurring Instructions - using Account ID
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

payload = {
    "instructionType": "QUERY_RECURRING_INSTRUCTIONS",
    "instruction": {
        "accountId": "U399192",
        "bankInstructionMethod": "WIRE",
        "clientInstructionId": 1012983
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Recurring Instructions - using Account ID
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_RECURRING_INSTRUCTIONS\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983\n  }\n}")

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

```ruby Query Recurring Instructions - using Account ID
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_RECURRING_INSTRUCTIONS\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Recurring Instructions - using Account ID
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'body' => '{
  "instructionType": "QUERY_RECURRING_INSTRUCTIONS",
  "instruction": {
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Recurring Instructions - using Account ID
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_RECURRING_INSTRUCTIONS",
  "instruction": [
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Bank Instruction - Wire

**Request**

```json
{
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "bankInstructionDetails": [
      {
        "bankAccountNumber": "*****7042",
        "bankRoutingNumber": "000127591",
        "currency": "USD",
        "instructionName": "testCitadele",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****9869",
        "bankRoutingNumber": "021100361",
        "currency": "USD",
        "instructionName": "testChase1",
        "instructionStatus": "PROCESSED",
        "type": "LOCAL_BANK"
      },
      {
        "bankAccountNumber": "*****9889",
        "bankRoutingNumber": "021112361",
        "currency": "USD",
        "instructionName": "testee",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****2531",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "test multiple",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****1234",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "farawayBroker",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BROKER"
      }
    ],
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 12001819,
    "ibReferenceId": 0,
    "instructionId": 43094187,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_BANK_INSTRUCTION"
  },
  "instructionSetId": 3771,
  "status": 201
}
```

**SDK Code**

```python Query Bank Instruction - Wire
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

payload = {
    "instructionType": "QUERY_BANK_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionMethod": "WIRE",
        "clientInstructionId": 1012983
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Bank Instruction - Wire
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983\n  }\n}")

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

```ruby Query Bank Instruction - Wire
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Bank Instruction - Wire
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'body' => '{
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Bank Instruction - Wire
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": [
    "accountId": "U46377",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Bank Instruction - ACH Instruction

**Request**

```json
{
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionMethod": "ACH",
    "clientInstructionId": 1012983
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "bankInstructionDetails": [
      {
        "bankAccountNumber": "*****7042",
        "bankRoutingNumber": "000127591",
        "currency": "USD",
        "instructionName": "testCitadele",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****9869",
        "bankRoutingNumber": "021100361",
        "currency": "USD",
        "instructionName": "testChase1",
        "instructionStatus": "PROCESSED",
        "type": "LOCAL_BANK"
      },
      {
        "bankAccountNumber": "*****9889",
        "bankRoutingNumber": "021112361",
        "currency": "USD",
        "instructionName": "testee",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****2531",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "test multiple",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****1234",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "farawayBroker",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BROKER"
      }
    ],
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 12001819,
    "ibReferenceId": 0,
    "instructionId": 43094187,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_BANK_INSTRUCTION"
  },
  "instructionSetId": 3771,
  "status": 201
}
```

**SDK Code**

```python Query Bank Instruction - ACH Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

payload = {
    "instructionType": "QUERY_BANK_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionMethod": "ACH",
        "clientInstructionId": 1012983
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Bank Instruction - ACH Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionMethod\": \"ACH\",\n    \"clientInstructionId\": 1012983\n  }\n}")

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

```ruby Query Bank Instruction - ACH Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionMethod\": \"ACH\",\n    \"clientInstructionId\": 1012983\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Bank Instruction - ACH Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'body' => '{
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionMethod": "ACH",
    "clientInstructionId": 1012983
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Bank Instruction - ACH Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_BANK_INSTRUCTION",
  "instruction": [
    "accountId": "U46377",
    "bankInstructionMethod": "ACH",
    "clientInstructionId": 1012983
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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

### Query Recent Recurring Event

**Request**

```json
{
  "instructionType": "QUERY_RECENT_RECURRING_EVENTS",
  "instruction": {
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983,
    "ibReferenceId": 206603050,
    "numberOfTransactions": 100
  }
}
```

**Response**

```json
{
  "instructionResult": {
    "accountId": "U46377",
    "bankInstructionDetails": [
      {
        "bankAccountNumber": "*****7042",
        "bankRoutingNumber": "000127591",
        "currency": "USD",
        "instructionName": "testCitadele",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****9869",
        "bankRoutingNumber": "021100361",
        "currency": "USD",
        "instructionName": "testChase1",
        "instructionStatus": "PROCESSED",
        "type": "LOCAL_BANK"
      },
      {
        "bankAccountNumber": "*****9889",
        "bankRoutingNumber": "021112361",
        "currency": "USD",
        "instructionName": "testee",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****2531",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "test multiple",
        "instructionStatus": "PROCESSED",
        "type": "FOREIGN_BANK"
      },
      {
        "bankAccountNumber": "*****1234",
        "bankRoutingNumber": "021100361",
        "currency": "CHF",
        "instructionName": "farawayBroker",
        "instructionStatus": "REJECTED",
        "type": "FOREIGN_BROKER"
      }
    ],
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 12001819,
    "ibReferenceId": 0,
    "instructionId": 43094187,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_BANK_INSTRUCTION"
  },
  "instructionSetId": 3771,
  "status": 201
}
```

**SDK Code**

```python Query Recent Recurring Event
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions/query"

payload = {
    "instructionType": "QUERY_RECENT_RECURRING_EVENTS",
    "instruction": {
        "accountId": "U399192",
        "bankInstructionMethod": "WIRE",
        "clientInstructionId": 1012983,
        "ibReferenceId": 206603050,
        "numberOfTransactions": 100
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Query Recent Recurring Event
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions/query"

	payload := strings.NewReader("{\n  \"instructionType\": \"QUERY_RECENT_RECURRING_EVENTS\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983,\n    \"ibReferenceId\": 206603050,\n    \"numberOfTransactions\": 100\n  }\n}")

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

```ruby Query Recent Recurring Event
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions/query")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"QUERY_RECENT_RECURRING_EVENTS\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"clientInstructionId\": 1012983,\n    \"ibReferenceId\": 206603050,\n    \"numberOfTransactions\": 100\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Query Recent Recurring Event
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions/query', [
  'body' => '{
  "instructionType": "QUERY_RECENT_RECURRING_EVENTS",
  "instruction": {
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983,
    "ibReferenceId": 206603050,
    "numberOfTransactions": 100
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Query Recent Recurring Event
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "QUERY_RECENT_RECURRING_EVENTS",
  "instruction": [
    "accountId": "U399192",
    "bankInstructionMethod": "WIRE",
    "clientInstructionId": 1012983,
    "ibReferenceId": 206603050,
    "numberOfTransactions": 100
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions/query")! as URL,
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
