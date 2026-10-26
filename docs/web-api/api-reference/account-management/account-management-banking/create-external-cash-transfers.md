[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-cash-transfers)

# Transfer Cash Externally

POST https://localhost:5000/gw/api/v1/external-cash-transfers
Content-Type: application/json

Initiate request to deposit or withdrawal between IBKR account and bank account. More information on transfer methods can be found here - [https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers](https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers)**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-cash-transfers

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
- `instruction` (GwApiV1ExternalCashTransfersPostRequestBodyContentApplicationJsonSchemaInstruction, required)

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

### GwApiV1ExternalCashTransfersPostRequestBodyContentApplicationJsonSchemaInstruction

- DepositFundsInstruction: DepositFundsInstruction
- WithdrawFundsInstruction: WithdrawFundsInstruction

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

### DepositFundsInstruction

Request to deposit funds into an Interactive Brokers account via ACH, Wire, eDDA, or Open Banking.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `amount` (double, required) — Monetary amount for the transaction.
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `ACH`, `WIRE`, `eDDA`, `OPEN_BANKING`
- `openBanking` (DepositFundsInstructionOpenBanking, optional) — Open banking configuration for the deposit.
- `sendingInstitution` (string, optional) — Name of the institution sending the funds.
- `identifier` (string, optional) — Represents the remitter's bank account number. This field is mandatory for WIRE deposits with following currencies: ILS, AED, AUD, and INR.
- `specialInstruction` (string, optional) — Free-text special handling instruction.
- `bankInstructionName` (string, optional) — Name identifying the saved bank instruction / destination.
- `senderInstitutionName` (string, optional) — Name of the sender's institution.
- `iraDepositDetail` (DepositFundsInstructionIraDepositDetail, optional) — IRA (US Individual Retirement Account) deposit details.
- `recurringInstructionDetail` (RecurringInstructionDetailRef, optional) — Recurring schedule configuration for the instruction.

### WithdrawFundsInstruction

Request to withdraw funds from an Interactive Brokers account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `amount` (double, required) — Monetary amount for the transaction.
- `bankInstructionName` (string, required) — Name identifying the saved bank instruction / destination.
- `bankInstructionMethod` (enum, required) — Funding method / payment rail for the bank instruction.
  - Allowed values: `ACH`, `WIRE`, `SEPA`
- `dateTimeToOccur` (datetime, optional) — Requested date-time to execute the instruction, in ISO 8601 format. Please note currently we consider just the DATE part, time is not considered
- `iraWithdrawalDetail` (WithdrawFundsInstructionIraWithdrawalDetail, optional) — IRA (US Individual Retirement Account) withdrawal tax/withholding details.
- `recurringInstructionDetail` (RecurringInstructionDetailRef, optional) — Recurring schedule configuration for the instruction.

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

### DepositFundsInstructionOpenBanking

Open banking configuration for the deposit.

- `serviceProvider` (enum, required) — Open banking service provider.
  - Allowed values: `PLAID`
- `plaidOptions` (DepositFundsInstructionOpenBankingPlaidOptions, optional) — Plaid-specific options.

### DepositFundsInstructionIraDepositDetail

IRA (US Individual Retirement Account) deposit details.

- `iraContributionType` (enum, required) — Type of IRA contribution.
  - Allowed values: `ROLLOVER`, `LATE_ROLLOVER`, `DIRECT_ROLLOVER`, `CONTRIBUTION`, `SPOUSAL_CONTRIBUTION`, `EMPLOYER_SEP_CONTRIBUTION`
- `iraTaxYearType` (enum, required) — Tax year the IRA contribution applies to (CURRENT or PRIOR).
  - Allowed values: `CURRENT`, `PRIOR`
- `fromIraType` (enum, required) — Source IRA type the funds originate from.
  - Allowed values: `NONE`, `TRADITIONAL`, `ROLLOVER`, `ROTH`, `SEP`, `EDUCATION`, `TRADITIONAL_INHERITED`, `ROTH_INHERITED`, `SEP_INHERITED`, `RETIREMENT_SAVING_PLAN`, `SPOUSAL_RETIREMENT_SAVING_PLAN`, `TAX_FREE_SAVING_ACCOUNT`

### RecurringInstructionDetailRef

Recurring schedule configuration for the instruction.

- `instructionName` (string, required) — Name of the recurring instruction.
- `frequency` (enum, required) — Frequency at which the recurring instruction runs.
  - Allowed values: `MONTHLY`, `QUARTERLY`, `YEARLY`
- `startDate` (string, required) — Start date of the recurring schedule.
- `endDate` (string, optional) — End date of the recurring schedule.

### WithdrawFundsInstructionIraWithdrawalDetail

IRA (US Individual Retirement Account) withdrawal tax/withholding details.

- `fedIncomeTaxPercentage` (double, required) — Federal income tax withholding percentage.
- `stateIncomeTaxPercentage` (double, required) — State income tax withholding percentage.
- `stateCd` (string, required) — Two-letter US state code for tax withholding.
- `iraWithholdType` (enum, required) — IRA withholding/distribution type.
  - Allowed values: `DIRECT_ROLLOVER`, `ROTH_DISTRIBUTION`, `NORMAL`, `EARLY`, `DEATH`, `EXCESS_CY`, `EXCESS_PY`, `EXCESS_SC`

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

### DepositFundsInstructionOpenBankingPlaidOptions

Plaid-specific options.

- `completionRedirectUri` (string, optional) — This should be a URI with a custom scheme and this can be any value you'd like, as long as it isn't a reserved one such as http or tel. By convention, it's often one associated with the name of your application.
- `linkDisplayName` (string, optional) — Client Name displayed on Plaid Link UI
- `isMobileApp` (boolean, optional) — Whether the Plaid Link session runs inside a mobile app.

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

### Deposit Funds

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013045,
    "currency": "USD",
    "fromAccountNumber": "U46377",
    "identifier": "indentifier",
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2480,
  "instructionResult": {
    "clientInstructionId": 7008143,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PENDING",
    "instructionId": 43092468
  }
}
```

**SDK Code**

```javascript Deposit Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instruction":{"accountId":"U46377","amount":100,"bankInstructionMethod":"WIRE","bankInstructionName":"Instruction","clientInstructionId":7013045,"currency":"USD","fromAccountNumber":"U46377","identifier":"indentifier","senderInstitutionName":"Senders Institution name","sendingInstitution":"Sending Institution name","specialInstruction":"U46377"}}'
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

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013045,\n    \"currency\": \"USD\",\n    \"fromAccountNumber\": \"U46377\",\n    \"identifier\": \"indentifier\",\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U46377\"\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013045,\n    \"currency\": \"USD\",\n    \"fromAccountNumber\": \"U46377\",\n    \"identifier\": \"indentifier\",\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U46377\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013045,
    "currency": "USD",
    "fromAccountNumber": "U46377",
    "identifier": "indentifier",
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  }
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
  "instruction": [
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013045,
    "currency": "USD",
    "fromAccountNumber": "U46377",
    "identifier": "indentifier",
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "OPEN_BANKING",
    "bankInstructionName": "Starling(1111)",
    "clientInstructionId": 7013051,
    "currency": "EUR",
    "openBanking": {
      "plaidOptions": {
        "completionRedirectUri": "wonderwallet://hosted-link-complete",
        "isMobileApp": true,
        "linkDisplayName": "WonderWallet"
      },
      "serviceProvider": "PLAID"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2481,
  "instructionResult": {
    "clientInstructionId": 7013051,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PROCESSED",
    "instructionId": 43092469,
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
}
```

**SDK Code**

```javascript Deposit Funds - Open Banking
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instruction":{"accountId":"U46377","amount":100,"bankInstructionMethod":"OPEN_BANKING","bankInstructionName":"Starling(1111)","clientInstructionId":7013051,"currency":"EUR","openBanking":{"plaidOptions":{"completionRedirectUri":"wonderwallet://hosted-link-complete","isMobileApp":true,"linkDisplayName":"WonderWallet"},"serviceProvider":"PLAID"}}}'
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

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"OPEN_BANKING\",\n    \"bankInstructionName\": \"Starling(1111)\",\n    \"clientInstructionId\": 7013051,\n    \"currency\": \"EUR\",\n    \"openBanking\": {\n      \"plaidOptions\": {\n        \"completionRedirectUri\": \"wonderwallet://hosted-link-complete\",\n        \"isMobileApp\": true,\n        \"linkDisplayName\": \"WonderWallet\"\n      },\n      \"serviceProvider\": \"PLAID\"\n    }\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"OPEN_BANKING\",\n    \"bankInstructionName\": \"Starling(1111)\",\n    \"clientInstructionId\": 7013051,\n    \"currency\": \"EUR\",\n    \"openBanking\": {\n      \"plaidOptions\": {\n        \"completionRedirectUri\": \"wonderwallet://hosted-link-complete\",\n        \"isMobileApp\": true,\n        \"linkDisplayName\": \"WonderWallet\"\n      },\n      \"serviceProvider\": \"PLAID\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds - Open Banking
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "OPEN_BANKING",
    "bankInstructionName": "Starling(1111)",
    "clientInstructionId": 7013051,
    "currency": "EUR",
    "openBanking": {
      "plaidOptions": {
        "completionRedirectUri": "wonderwallet://hosted-link-complete",
        "isMobileApp": true,
        "linkDisplayName": "WonderWallet"
      },
      "serviceProvider": "PLAID"
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

```swift Deposit Funds - Open Banking
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instruction": [
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "OPEN_BANKING",
    "bankInstructionName": "Starling(1111)",
    "clientInstructionId": 7013051,
    "currency": "EUR",
    "openBanking": [
      "plaidOptions": [
        "completionRedirectUri": "wonderwallet://hosted-link-complete",
        "isMobileApp": true,
        "linkDisplayName": "WonderWallet"
      ],
      "serviceProvider": "PLAID"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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
  "instruction": {
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013048,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2719,
  "instructionResult": {
    "clientInstructionId": 12000862,
    "instructionType": "WITHDRAWAL",
    "instructionStatus": "PROCESSED",
    "instructionId": 43092641,
    "ibReferenceId": 132123
  }
}
```

**SDK Code**

```javascript Withdraw Funds
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"WITHDRAWAL","instruction":{"accountId":"U46377","amount":123.45,"bankInstructionMethod":"WIRE","bankInstructionName":"Test Withdrawal","clientInstructionId":7013048,"currency":"GBP","dateTimeToOccur":"2023-11-20T09:12:13Z"}}'
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

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013048,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\"\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013048,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Withdraw Funds
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013048,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  }
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
  "instruction": [
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013048,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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

### Deposit Funds - IRA

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U399192",
    "amount": 1,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013046,
    "currency": "USD",
    "fromAccountNumber": "U399192",
    "identifier": "indentifier",
    "iraDepositDetail": {
      "fromIraType": "TRADITIONAL",
      "iraContributionType": "ROLLOVER",
      "iraTaxYearType": "CURRENT"
    },
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U399192"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2480,
  "instructionResult": {
    "clientInstructionId": 7008143,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PENDING",
    "instructionId": 43092468
  }
}
```

**SDK Code**

```javascript Deposit Funds - IRA
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instruction":{"accountId":"U399192","amount":1,"bankInstructionMethod":"WIRE","bankInstructionName":"Instruction","clientInstructionId":7013046,"currency":"USD","fromAccountNumber":"U399192","identifier":"indentifier","iraDepositDetail":{"fromIraType":"TRADITIONAL","iraContributionType":"ROLLOVER","iraTaxYearType":"CURRENT"},"senderInstitutionName":"Senders Institution name","sendingInstitution":"Sending Institution name","specialInstruction":"U399192"}}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Deposit Funds - IRA
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"amount\": 1,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013046,\n    \"currency\": \"USD\",\n    \"fromAccountNumber\": \"U399192\",\n    \"identifier\": \"indentifier\",\n    \"iraDepositDetail\": {\n      \"fromIraType\": \"TRADITIONAL\",\n      \"iraContributionType\": \"ROLLOVER\",\n      \"iraTaxYearType\": \"CURRENT\"\n    },\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U399192\"\n  }\n}")

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

```ruby Deposit Funds - IRA
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"amount\": 1,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013046,\n    \"currency\": \"USD\",\n    \"fromAccountNumber\": \"U399192\",\n    \"identifier\": \"indentifier\",\n    \"iraDepositDetail\": {\n      \"fromIraType\": \"TRADITIONAL\",\n      \"iraContributionType\": \"ROLLOVER\",\n      \"iraTaxYearType\": \"CURRENT\"\n    },\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U399192\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds - IRA
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U399192",
    "amount": 1,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013046,
    "currency": "USD",
    "fromAccountNumber": "U399192",
    "identifier": "indentifier",
    "iraDepositDetail": {
      "fromIraType": "TRADITIONAL",
      "iraContributionType": "ROLLOVER",
      "iraTaxYearType": "CURRENT"
    },
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U399192"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Deposit Funds - IRA
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instruction": [
    "accountId": "U399192",
    "amount": 1,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013046,
    "currency": "USD",
    "fromAccountNumber": "U399192",
    "identifier": "indentifier",
    "iraDepositDetail": [
      "fromIraType": "TRADITIONAL",
      "iraContributionType": "ROLLOVER",
      "iraTaxYearType": "CURRENT"
    ],
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U399192"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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

### Deposit Funds - Recurring

**Request**

```json
{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013047,
    "currency": "USD",
    "identifier": "indentifier",
    "recurringInstructionDetail": {
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
    },
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2480,
  "instructionResult": {
    "clientInstructionId": 7008143,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PENDING",
    "instructionId": 43092468
  }
}
```

**SDK Code**

```javascript Deposit Funds - Recurring
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DEPOSIT","instruction":{"accountId":"U46377","amount":100,"bankInstructionMethod":"WIRE","bankInstructionName":"Instruction","clientInstructionId":7013047,"currency":"USD","identifier":"indentifier","recurringInstructionDetail":{"frequency":"MONTHLY","instructionName":"Arkansas-Test-Instr","startDate":"2023-10-16"},"senderInstitutionName":"Senders Institution name","sendingInstitution":"Sending Institution name","specialInstruction":"U46377"}}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Deposit Funds - Recurring
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013047,\n    \"currency\": \"USD\",\n    \"identifier\": \"indentifier\",\n    \"recurringInstructionDetail\": {\n      \"frequency\": \"MONTHLY\",\n      \"instructionName\": \"Arkansas-Test-Instr\",\n      \"startDate\": \"2023-10-16\"\n    },\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U46377\"\n  }\n}")

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

```ruby Deposit Funds - Recurring
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DEPOSIT\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 100,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Instruction\",\n    \"clientInstructionId\": 7013047,\n    \"currency\": \"USD\",\n    \"identifier\": \"indentifier\",\n    \"recurringInstructionDetail\": {\n      \"frequency\": \"MONTHLY\",\n      \"instructionName\": \"Arkansas-Test-Instr\",\n      \"startDate\": \"2023-10-16\"\n    },\n    \"senderInstitutionName\": \"Senders Institution name\",\n    \"sendingInstitution\": \"Sending Institution name\",\n    \"specialInstruction\": \"U46377\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Deposit Funds - Recurring
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "DEPOSIT",
  "instruction": {
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013047,
    "currency": "USD",
    "identifier": "indentifier",
    "recurringInstructionDetail": {
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
    },
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Deposit Funds - Recurring
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DEPOSIT",
  "instruction": [
    "accountId": "U46377",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Instruction",
    "clientInstructionId": 7013047,
    "currency": "USD",
    "identifier": "indentifier",
    "recurringInstructionDetail": [
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
    ],
    "senderInstitutionName": "Senders Institution name",
    "sendingInstitution": "Sending Institution name",
    "specialInstruction": "U46377"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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

### Withdraw Funds - IRA

**Request**

```json
{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "accountId": "U399192",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013049,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": {
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2480,
  "instructionResult": {
    "clientInstructionId": 7008143,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PENDING",
    "instructionId": 43092468
  }
}
```

**SDK Code**

```javascript Withdraw Funds - IRA
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"WITHDRAWAL","instruction":{"accountId":"U399192","amount":123.45,"bankInstructionMethod":"WIRE","bankInstructionName":"Test Withdrawal","clientInstructionId":7013049,"currency":"GBP","dateTimeToOccur":"2023-11-20T09:12:13Z","iraWithdrawalDetail":{"fedIncomeTaxPercentage":10,"iraWithholdType":"NORMAL","stateCd":"TE","stateIncomeTaxPercentage":12}}}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Withdraw Funds - IRA
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013049,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\",\n    \"iraWithdrawalDetail\": {\n      \"fedIncomeTaxPercentage\": 10,\n      \"iraWithholdType\": \"NORMAL\",\n      \"stateCd\": \"TE\",\n      \"stateIncomeTaxPercentage\": 12\n    }\n  }\n}")

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

```ruby Withdraw Funds - IRA
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013049,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\",\n    \"iraWithdrawalDetail\": {\n      \"fedIncomeTaxPercentage\": 10,\n      \"iraWithholdType\": \"NORMAL\",\n      \"stateCd\": \"TE\",\n      \"stateIncomeTaxPercentage\": 12\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Withdraw Funds - IRA
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "accountId": "U399192",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013049,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": {
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
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

```swift Withdraw Funds - IRA
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL",
  "instruction": [
    "accountId": "U399192",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013049,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": [
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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

### Withdraw Funds - Recurring

**Request**

```json
{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013050,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": {
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
    },
    "recurringInstructionDetail": {
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2480,
  "instructionResult": {
    "clientInstructionId": 7008143,
    "instructionType": "DEPOSIT",
    "instructionStatus": "PENDING",
    "instructionId": 43092468
  }
}
```

**SDK Code**

```javascript Withdraw Funds - Recurring
const url = 'https://localhost:5000/gw/api/v1/external-cash-transfers';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"WITHDRAWAL","instruction":{"accountId":"U46377","amount":123.45,"bankInstructionMethod":"WIRE","bankInstructionName":"Test Withdrawal","clientInstructionId":7013050,"currency":"GBP","dateTimeToOccur":"2023-11-20T09:12:13Z","iraWithdrawalDetail":{"fedIncomeTaxPercentage":10,"iraWithholdType":"NORMAL","stateCd":"TE","stateIncomeTaxPercentage":12},"recurringInstructionDetail":{"frequency":"MONTHLY","instructionName":"Arkansas-Test-Instr","startDate":"2023-10-16"}}}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Withdraw Funds - Recurring
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-cash-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013050,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\",\n    \"iraWithdrawalDetail\": {\n      \"fedIncomeTaxPercentage\": 10,\n      \"iraWithholdType\": \"NORMAL\",\n      \"stateCd\": \"TE\",\n      \"stateIncomeTaxPercentage\": 12\n    },\n    \"recurringInstructionDetail\": {\n      \"frequency\": \"MONTHLY\",\n      \"instructionName\": \"Arkansas-Test-Instr\",\n      \"startDate\": \"2023-10-16\"\n    }\n  }\n}")

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

```ruby Withdraw Funds - Recurring
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-cash-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"WITHDRAWAL\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"amount\": 123.45,\n    \"bankInstructionMethod\": \"WIRE\",\n    \"bankInstructionName\": \"Test Withdrawal\",\n    \"clientInstructionId\": 7013050,\n    \"currency\": \"GBP\",\n    \"dateTimeToOccur\": \"2023-11-20T09:12:13Z\",\n    \"iraWithdrawalDetail\": {\n      \"fedIncomeTaxPercentage\": 10,\n      \"iraWithholdType\": \"NORMAL\",\n      \"stateCd\": \"TE\",\n      \"stateIncomeTaxPercentage\": 12\n    },\n    \"recurringInstructionDetail\": {\n      \"frequency\": \"MONTHLY\",\n      \"instructionName\": \"Arkansas-Test-Instr\",\n      \"startDate\": \"2023-10-16\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Withdraw Funds - Recurring
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-cash-transfers', [
  'body' => '{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013050,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": {
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
    },
    "recurringInstructionDetail": {
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
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

```swift Withdraw Funds - Recurring
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "WITHDRAWAL",
  "instruction": [
    "accountId": "U46377",
    "amount": 123.45,
    "bankInstructionMethod": "WIRE",
    "bankInstructionName": "Test Withdrawal",
    "clientInstructionId": 7013050,
    "currency": "GBP",
    "dateTimeToOccur": "2023-11-20T09:12:13Z",
    "iraWithdrawalDetail": [
      "fedIncomeTaxPercentage": 10,
      "iraWithholdType": "NORMAL",
      "stateCd": "TE",
      "stateIncomeTaxPercentage": 12
    ],
    "recurringInstructionDetail": [
      "frequency": "MONTHLY",
      "instructionName": "Arkansas-Test-Instr",
      "startDate": "2023-10-16"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-cash-transfers")! as URL,
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
