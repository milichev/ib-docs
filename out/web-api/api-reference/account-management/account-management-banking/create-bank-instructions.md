[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-bank-instructions)

# Manage Bank Instructions

POST https://localhost:5000/gw/api/v1/bank-instructions
Content-Type: application/json

Create or delete bank instructions by accountId. ACH, Open Banking, Withdrawal (against an existing Open Banking deposit), Traditional Bank Instruction Verification, Predefined Destination, and eDDA are supported for 'Create'.**Scope**: `bank-instructions.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-bank-instructions

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
- `instruction` (GwApiV1BankInstructionsPostRequestBodyContentApplicationJsonSchemaInstruction, required)

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

### GwApiV1BankInstructionsPostRequestBodyContentApplicationJsonSchemaInstruction

- TraditionalBankInstructionVerification: TraditionalBankInstructionVerification
- AchInstruction: AchInstruction
- OpenBankingInstruction: OpenBankingInstruction
- WithdrawalBankInstruction: WithdrawalBankInstruction
- DeleteBankInstruction: DeleteBankInstruction
- PredefinedDestinationInstruction: PredefinedDestinationInstruction
- EddaInstruction: EddaInstruction

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

### TraditionalBankInstructionVerification

Request to verify a pending bank instruction using micro-deposit amounts.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `bankInstructionCode` (enum, required) — Code identifying the type of bank instruction.
  - Allowed values: `USACH`, `CAACH`, `ACHUS`, `WIRE`
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `pendingInstructionId` (double, required) — Funds and Banking identifier of the pending instruction being verified.
- `creditAmount1` (double, required) — First micro-deposit amount used to verify the bank instruction; Order is not important.
- `creditAmount2` (double, required) — Second micro-deposit amount used to verify the bank instruction; Order is not important.

### AchInstruction

Request to create an ACH bank instruction linking an external US or Canada bank account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `bankInstructionCode` (enum, required) — Code identifying the type of bank instruction.
  - Allowed values: `CAACH`, `USACH`
- `achType` (enum, required) — ACH authorization type (DEBIT, CREDIT, or DEBIT_CREDIT).
  - Allowed values: `DEBIT`, `CREDIT`, `DEBIT_CREDIT`
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `clientAccountInfo` (AchInstructionClientAccountInfo, required) — External bank account details for the ACH instruction.

### OpenBankingInstruction

Request to link a bank account via an open banking provider.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `serviceProvider` (enum, required) — Open banking service provider.
  - Allowed values: `PLAID`
- `plaidOptions` (OpenBankingInstructionPlaidOptions, optional) — Plaid-specific options.

### WithdrawalBankInstruction

Request to create a withdrawal bank instruction based on an existing deposit link.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `sourceDepositInstruction` (WithdrawalBankInstructionSourceDepositInstruction, required) — Existing deposit instruction the withdrawal link is based on.

### DeleteBankInstruction

Request to delete a saved bank instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `WIRE`, `ACH`
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").

### PredefinedDestinationInstruction

Request to create a predefined withdrawal destination bank instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `LVP`, `SEPA`, `WIRE`, `ACH`, `CPA`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `financialInstitution` (PredefinedDestinationInstructionFinancialInstitution, required) — Destination financial institution details.

### EddaInstruction

Request to set up an electronic Direct Debit Authorization (eDDA) bank instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `bankBranchCode` (string, required) — Bank branch code.
- `bankAccountNumber` (string, required) — Bank account number.
- `bankClearingCode` (string, required) — Bank clearing code; can be found in the participating bank list returned by the GET API.
- `debtorIdentificationDocumentType` (enum, required) — Type of the debtor's identification document.
  - Allowed values: `hkId`, `passport`, `chinaId`, `hkMacaoEntryPermit`

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

### AchInstructionClientAccountInfo

External bank account details for the ACH instruction.

- `bankRoutingNumber` (string, required) — Bank routing number.
- `bankAccountNumber` (string, required) — Bank account number.
- `bankName` (string, required) — Name of the bank.
- `bankAccountTypeCode` (enum, required) — Type of bank account: 1 = Checking, 2 = Savings. If unspecified, defaults to Checking.
  - Allowed values: `0`, `1`, `2`

### OpenBankingInstructionPlaidOptions

Plaid-specific options.

- `completionRedirectUri` (string, optional) — This should be a URI with a custom scheme and this can be any value you'd like, as long as it isn't a reserved one such as http or tel. By convention, it's often one associated with the name of your application.
- `linkDisplayName` (string, optional) — Client Name displayed on Plaid Link UI
- `isMobileApp` (boolean, optional) — Whether the Plaid Link session runs inside a mobile app.

### WithdrawalBankInstructionSourceDepositInstruction

Existing deposit instruction the withdrawal link is based on.

- `type` (enum, required) — Type of the source deposit instruction the withdrawal is based on (currently only OPEN_BANKING).
  - Allowed values: `OPEN_BANKING`
- `name` (string, optional) — Name of the source deposit instruction.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.

### PredefinedDestinationInstructionFinancialInstitution

Destination financial institution details.

- `name` (string, required) — Name of the financial institution.
- `identifier` (string, required) — Identifier of the financial institution (e.g. SWIFT/BIC or IFSC value).
- `identifierType` (enum, required) — Type of the institution identifier (BIC or IFSC).
  - Allowed values: `BIC`, `IFSC`
- `clientAccountId` (string, required) — Client's account identifier at the financial institution.
- `branchCode` (string, optional) — Branch code of the financial institution.
- `branchCodeType` (enum, optional) — Type of the branch code.
  - Allowed values: `BSB_AUD`, `BANK_CODE_CAD`, `NONE`

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

### ACH Instruction

**Request**

```json
{
  "instructionType": "ACH_INSTRUCTION",
  "instruction": {
    "accountId": "U223454",
    "achType": "DEBIT_CREDIT",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "TestInstr",
    "clientAccountInfo": {
      "bankAccountNumber": "101267576983",
      "bankAccountTypeCode": 0,
      "bankName": "JPM Chase",
      "bankRoutingNumber": "202012983"
    },
    "clientInstructionId": 1012983,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2487,
  "instructionResult": {
    "clientInstructionId": 80009,
    "instructionType": "ACH_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43092478
  }
}
```

**SDK Code**

```python ACH Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "ACH_INSTRUCTION",
    "instruction": {
        "accountId": "U223454",
        "achType": "DEBIT_CREDIT",
        "bankInstructionCode": "USACH",
        "bankInstructionName": "TestInstr",
        "clientAccountInfo": {
            "bankAccountNumber": "101267576983",
            "bankAccountTypeCode": 0,
            "bankName": "JPM Chase",
            "bankRoutingNumber": "202012983"
        },
        "clientInstructionId": 1012983,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "USD",
        "pendingInstructionId": 35354345
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go ACH Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U223454\",\n    \"achType\": \"DEBIT_CREDIT\",\n    \"bankInstructionCode\": \"USACH\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientAccountInfo\": {\n      \"bankAccountNumber\": \"101267576983\",\n      \"bankAccountTypeCode\": 0,\n      \"bankName\": \"JPM Chase\",\n      \"bankRoutingNumber\": \"202012983\"\n    },\n    \"clientInstructionId\": 1012983,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"pendingInstructionId\": 35354345\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"ACH_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U223454\",\n    \"achType\": \"DEBIT_CREDIT\",\n    \"bankInstructionCode\": \"USACH\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientAccountInfo\": {\n      \"bankAccountNumber\": \"101267576983\",\n      \"bankAccountTypeCode\": 0,\n      \"bankName\": \"JPM Chase\",\n      \"bankRoutingNumber\": \"202012983\"\n    },\n    \"clientInstructionId\": 1012983,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"pendingInstructionId\": 35354345\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php ACH Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "ACH_INSTRUCTION",
  "instruction": {
    "accountId": "U223454",
    "achType": "DEBIT_CREDIT",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "TestInstr",
    "clientAccountInfo": {
      "bankAccountNumber": "101267576983",
      "bankAccountTypeCode": 0,
      "bankName": "JPM Chase",
      "bankRoutingNumber": "202012983"
    },
    "clientInstructionId": 1012983,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  }
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
  "instruction": [
    "accountId": "U223454",
    "achType": "DEBIT_CREDIT",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "TestInstr",
    "clientAccountInfo": [
      "bankAccountNumber": "101267576983",
      "bankAccountTypeCode": 0,
      "bankName": "JPM Chase",
      "bankRoutingNumber": "202012983"
    ],
    "clientInstructionId": 1012983,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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
  "instruction": {
    "accountId": "U117717",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "ACH-Tst1Random172",
    "clientInstructionId": 7013057,
    "creditAmount1": 0.32,
    "creditAmount2": 0.46,
    "pendingInstructionId": 43086786
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2614,
  "instructionResult": {
    "clientInstructionId": 7008152,
    "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Traditional Bank Instruction Verification
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
    "instruction": {
        "accountId": "U117717",
        "bankInstructionCode": "USACH",
        "bankInstructionName": "ACH-Tst1Random172",
        "clientInstructionId": 7013057,
        "creditAmount1": 0.32,
        "creditAmount2": 0.46,
        "pendingInstructionId": 43086786
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Traditional Bank Instruction Verification
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instruction\": {\n    \"accountId\": \"U117717\",\n    \"bankInstructionCode\": \"USACH\",\n    \"bankInstructionName\": \"ACH-Tst1Random172\",\n    \"clientInstructionId\": 7013057,\n    \"creditAmount1\": 0.32,\n    \"creditAmount2\": 0.46,\n    \"pendingInstructionId\": 43086786\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION\",\n  \"instruction\": {\n    \"accountId\": \"U117717\",\n    \"bankInstructionCode\": \"USACH\",\n    \"bankInstructionName\": \"ACH-Tst1Random172\",\n    \"clientInstructionId\": 7013057,\n    \"creditAmount1\": 0.32,\n    \"creditAmount2\": 0.46,\n    \"pendingInstructionId\": 43086786\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Traditional Bank Instruction Verification
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
  "instruction": {
    "accountId": "U117717",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "ACH-Tst1Random172",
    "clientInstructionId": 7013057,
    "creditAmount1": 0.32,
    "creditAmount2": 0.46,
    "pendingInstructionId": 43086786
  }
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
  "instruction": [
    "accountId": "U117717",
    "bankInstructionCode": "USACH",
    "bankInstructionName": "ACH-Tst1Random172",
    "clientInstructionId": 7013057,
    "creditAmount1": 0.32,
    "creditAmount2": 0.46,
    "pendingInstructionId": 43086786
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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

### Delete Bank Instruction

**Request**

```json
{
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Delete",
    "clientInstructionId": 7013055,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2487,
  "instructionResult": {
    "clientInstructionId": 80009,
    "instructionType": "DELETE_BANK_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43092478
  }
}
```

**SDK Code**

```python Delete Bank Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "DELETE_BANK_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionCode": "ACHUS",
        "bankInstructionMethod": "WIRE",
        "bankInstructionName": "Test Delete",
        "clientInstructionId": 7013055,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "USD",
        "pendingInstructionId": 35354345
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Delete Bank Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Delete\",\n    \"clientInstructionId\": 7013055,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"pendingInstructionId\": 35354345\n  }\n}")

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

```ruby Delete Bank Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DELETE_BANK_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Delete\",\n    \"clientInstructionId\": 7013055,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"pendingInstructionId\": 35354345\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Delete Bank Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Delete",
    "clientInstructionId": 7013055,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Delete Bank Instruction
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instruction": [
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Delete",
    "clientInstructionId": 7013055,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "pendingInstructionId": 35354345
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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
  "instruction": {
    "accountId": "U399192",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "ACH",
    "bankInstructionName": "Test-ACH-Instr",
    "clientInstructionId": 7013053,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "financialInstitution": {
      "branchCode": "",
      "branchCodeType": "BSB_AUD",
      "clientAccountId": "132456789",
      "identifier": "SBIN001000",
      "identifierType": "IFSC",
      "name": "SBI Bank"
    },
    "pendingInstructionId": 35354345
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2614,
  "instructionResult": {
    "clientInstructionId": 7008152,
    "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Predefined Destination Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
    "instruction": {
        "accountId": "U399192",
        "bankInstructionCode": "ACHUS",
        "bankInstructionMethod": "ACH",
        "bankInstructionName": "Test-ACH-Instr",
        "clientInstructionId": 7013053,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "USD",
        "financialInstitution": {
            "branchCode": "",
            "branchCodeType": "BSB_AUD",
            "clientAccountId": "132456789",
            "identifier": "SBIN001000",
            "identifierType": "IFSC",
            "name": "SBI Bank"
        },
        "pendingInstructionId": 35354345
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Predefined Destination Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionMethod\": \"ACH\",\n    \"bankInstructionName\": \"Test-ACH-Instr\",\n    \"clientInstructionId\": 7013053,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"financialInstitution\": {\n      \"branchCode\": \"\",\n      \"branchCodeType\": \"BSB_AUD\",\n      \"clientAccountId\": \"132456789\",\n      \"identifier\": \"SBIN001000\",\n      \"identifierType\": \"IFSC\",\n      \"name\": \"SBI Bank\"\n    },\n    \"pendingInstructionId\": 35354345\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"PREDEFINED_DESTINATION_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionMethod\": \"ACH\",\n    \"bankInstructionName\": \"Test-ACH-Instr\",\n    \"clientInstructionId\": 7013053,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"USD\",\n    \"financialInstitution\": {\n      \"branchCode\": \"\",\n      \"branchCodeType\": \"BSB_AUD\",\n      \"clientAccountId\": \"132456789\",\n      \"identifier\": \"SBIN001000\",\n      \"identifierType\": \"IFSC\",\n      \"name\": \"SBI Bank\"\n    },\n    \"pendingInstructionId\": 35354345\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Predefined Destination Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
  "instruction": {
    "accountId": "U399192",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "ACH",
    "bankInstructionName": "Test-ACH-Instr",
    "clientInstructionId": 7013053,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "financialInstitution": {
      "branchCode": "",
      "branchCodeType": "BSB_AUD",
      "clientAccountId": "132456789",
      "identifier": "SBIN001000",
      "identifierType": "IFSC",
      "name": "SBI Bank"
    },
    "pendingInstructionId": 35354345
  }
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
  "instruction": [
    "accountId": "U399192",
    "bankInstructionCode": "ACHUS",
    "bankInstructionMethod": "ACH",
    "bankInstructionName": "Test-ACH-Instr",
    "clientInstructionId": 7013053,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "USD",
    "financialInstitution": [
      "branchCode": "",
      "branchCodeType": "BSB_AUD",
      "clientAccountId": "132456789",
      "identifier": "SBIN001000",
      "identifierType": "IFSC",
      "name": "SBI Bank"
    ],
    "pendingInstructionId": 35354345
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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
  "instruction": {
    "accountId": "U8072517",
    "bankAccountNumber": "132456",
    "bankBranchCode": "003",
    "bankClearingCode": "003",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "{instrution-name}",
    "clientInstructionId": 7012743,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "CNH",
    "debtorIdentificationDocumentType": "hkId",
    "pendingInstructionId": 35354345
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 6401,
  "instructionResult": {
    "clientInstructionId": 7012743,
    "instructionType": "EDDA_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43098698
  }
}
```

**SDK Code**

```python eDDA Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "EDDA_INSTRUCTION",
    "instruction": {
        "accountId": "U8072517",
        "bankAccountNumber": "132456",
        "bankBranchCode": "003",
        "bankClearingCode": "003",
        "bankInstructionCode": "ACHUS",
        "bankInstructionName": "{instrution-name}",
        "clientInstructionId": 7012743,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "CNH",
        "debtorIdentificationDocumentType": "hkId",
        "pendingInstructionId": 35354345
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go eDDA Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U8072517\",\n    \"bankAccountNumber\": \"132456\",\n    \"bankBranchCode\": \"003\",\n    \"bankClearingCode\": \"003\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"{instrution-name}\",\n    \"clientInstructionId\": 7012743,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"CNH\",\n    \"debtorIdentificationDocumentType\": \"hkId\",\n    \"pendingInstructionId\": 35354345\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EDDA_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U8072517\",\n    \"bankAccountNumber\": \"132456\",\n    \"bankBranchCode\": \"003\",\n    \"bankClearingCode\": \"003\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"{instrution-name}\",\n    \"clientInstructionId\": 7012743,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"CNH\",\n    \"debtorIdentificationDocumentType\": \"hkId\",\n    \"pendingInstructionId\": 35354345\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php eDDA Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "EDDA_INSTRUCTION",
  "instruction": {
    "accountId": "U8072517",
    "bankAccountNumber": "132456",
    "bankBranchCode": "003",
    "bankClearingCode": "003",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "{instrution-name}",
    "clientInstructionId": 7012743,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "CNH",
    "debtorIdentificationDocumentType": "hkId",
    "pendingInstructionId": 35354345
  }
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
  "instruction": [
    "accountId": "U8072517",
    "bankAccountNumber": "132456",
    "bankBranchCode": "003",
    "bankClearingCode": "003",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "{instrution-name}",
    "clientInstructionId": 7012743,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "CNH",
    "debtorIdentificationDocumentType": "hkId",
    "pendingInstructionId": 35354345
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111318,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "plaidOptions": {
      "completionRedirectUri": "wonderwallet://hosted-link-complete",
      "isMobileApp": true,
      "linkDisplayName": "Test displayname"
    },
    "serviceProvider": "PLAID"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 910137,
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
}
```

**SDK Code**

```python Open Banking Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "OPEN_BANKING_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionCode": "ACHUS",
        "bankInstructionName": "TestInstr",
        "clientInstructionId": 11111318,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "EUR",
        "pendingInstructionId": 35354345,
        "plaidOptions": {
            "completionRedirectUri": "wonderwallet://hosted-link-complete",
            "isMobileApp": True,
            "linkDisplayName": "Test displayname"
        },
        "serviceProvider": "PLAID"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Open Banking Instruction
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"OPEN_BANKING_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111318,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"EUR\",\n    \"pendingInstructionId\": 35354345,\n    \"plaidOptions\": {\n      \"completionRedirectUri\": \"wonderwallet://hosted-link-complete\",\n      \"isMobileApp\": true,\n      \"linkDisplayName\": \"Test displayname\"\n    },\n    \"serviceProvider\": \"PLAID\"\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"OPEN_BANKING_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111318,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"EUR\",\n    \"pendingInstructionId\": 35354345,\n    \"plaidOptions\": {\n      \"completionRedirectUri\": \"wonderwallet://hosted-link-complete\",\n      \"isMobileApp\": true,\n      \"linkDisplayName\": \"Test displayname\"\n    },\n    \"serviceProvider\": \"PLAID\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Open Banking Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "OPEN_BANKING_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111318,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "plaidOptions": {
      "completionRedirectUri": "wonderwallet://hosted-link-complete",
      "isMobileApp": true,
      "linkDisplayName": "Test displayname"
    },
    "serviceProvider": "PLAID"
  }
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
  "instruction": [
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111318,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "plaidOptions": [
      "completionRedirectUri": "wonderwallet://hosted-link-complete",
      "isMobileApp": true,
      "linkDisplayName": "Test displayname"
    ],
    "serviceProvider": "PLAID"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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

**Response**

```json
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
}
```

**SDK Code**

```python Withdrawal Instruction
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Withdrawal Instruction
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

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

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Withdrawal Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Withdrawal Instruction
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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

### Withdrawal Instruction (by name)

**Request**

```json
{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": {
      "name": "BBVA - Banca Perso(1111)",
      "type": "OPEN_BANKING"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2487,
  "instructionResult": {
    "clientInstructionId": 80009,
    "instructionType": "ACH_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43092478
  }
}
```

**SDK Code**

```python Withdrawal Instruction (by name)
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "WITHDRAWAL_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionCode": "ACHUS",
        "bankInstructionName": "TestInstr",
        "clientInstructionId": 11111377,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "EUR",
        "pendingInstructionId": 35354345,
        "sourceDepositInstruction": {
            "name": "BBVA - Banca Perso(1111)",
            "type": "OPEN_BANKING"
        }
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Withdrawal Instruction (by name)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111377,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"EUR\",\n    \"pendingInstructionId\": 35354345,\n    \"sourceDepositInstruction\": {\n      \"name\": \"BBVA - Banca Perso(1111)\",\n      \"type\": \"OPEN_BANKING\"\n    }\n  }\n}")

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

```ruby Withdrawal Instruction (by name)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111377,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"EUR\",\n    \"pendingInstructionId\": 35354345,\n    \"sourceDepositInstruction\": {\n      \"name\": \"BBVA - Banca Perso(1111)\",\n      \"type\": \"OPEN_BANKING\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Withdrawal Instruction (by name)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": {
      "name": "BBVA - Banca Perso(1111)",
      "type": "OPEN_BANKING"
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

```swift Withdrawal Instruction (by name)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": [
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "EUR",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": [
      "name": "BBVA - Banca Perso(1111)",
      "type": "OPEN_BANKING"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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

### Withdrawal Instruction (by ibReferenceId)

**Request**

```json
{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "GBP",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": {
      "ibReferenceId": 322386848,
      "type": "OPEN_BANKING"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2487,
  "instructionResult": {
    "clientInstructionId": 80009,
    "instructionType": "ACH_INSTRUCTION",
    "instructionStatus": "PENDING",
    "instructionId": 43092478
  }
}
```

**SDK Code**

```python Withdrawal Instruction (by ibReferenceId)
import requests

url = "https://localhost:5000/gw/api/v1/bank-instructions"

payload = {
    "instructionType": "WITHDRAWAL_INSTRUCTION",
    "instruction": {
        "accountId": "U46377",
        "bankInstructionCode": "ACHUS",
        "bankInstructionName": "TestInstr",
        "clientInstructionId": 11111377,
        "creditAmount1": 1,
        "creditAmount2": 2,
        "currency": "GBP",
        "pendingInstructionId": 35354345,
        "sourceDepositInstruction": {
            "ibReferenceId": 322386848,
            "type": "OPEN_BANKING"
        }
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Withdrawal Instruction (by ibReferenceId)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/bank-instructions"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111377,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"GBP\",\n    \"pendingInstructionId\": 35354345,\n    \"sourceDepositInstruction\": {\n      \"ibReferenceId\": 322386848,\n      \"type\": \"OPEN_BANKING\"\n    }\n  }\n}")

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

```ruby Withdrawal Instruction (by ibReferenceId)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/bank-instructions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL_INSTRUCTION\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"bankInstructionCode\": \"ACHUS\",\n    \"bankInstructionName\": \"TestInstr\",\n    \"clientInstructionId\": 11111377,\n    \"creditAmount1\": 1,\n    \"creditAmount2\": 2,\n    \"currency\": \"GBP\",\n    \"pendingInstructionId\": 35354345,\n    \"sourceDepositInstruction\": {\n      \"ibReferenceId\": 322386848,\n      \"type\": \"OPEN_BANKING\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Withdrawal Instruction (by ibReferenceId)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/bank-instructions', [
  'body' => '{
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": {
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "GBP",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": {
      "ibReferenceId": 322386848,
      "type": "OPEN_BANKING"
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

```swift Withdrawal Instruction (by ibReferenceId)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL_INSTRUCTION",
  "instruction": [
    "accountId": "U46377",
    "bankInstructionCode": "ACHUS",
    "bankInstructionName": "TestInstr",
    "clientInstructionId": 11111377,
    "creditAmount1": 1,
    "creditAmount2": 2,
    "currency": "GBP",
    "pendingInstructionId": 35354345,
    "sourceDepositInstruction": [
      "ibReferenceId": 322386848,
      "type": "OPEN_BANKING"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/bank-instructions")! as URL,
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
