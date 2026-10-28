> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Get Status For ClientInstructionId

GET https://localhost:5000/gw/api/v1/client-instructions/{clientInstructionId}

Retrieve status of request by clientInstructionId.**Scope**: `instructions.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/get-client-instructions

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `client-id` (string, required) — The client's clientId
- `clientInstructionId` (long, required) — The target instruction id.

## Response

### 200

Returns the status of an instruction.

- `Account Management Banking_getClientInstructions_Response_200`
  - InstructionPollingResponse: InstructionPollingResponse
  - InstructionResponse: InstructionResponse
  - QueryRecentInstructionResponse: QueryRecentInstructionResponse
  - DepositFundsPollingResponse: DepositFundsPollingResponse
  - QueryIRAContributionsResponse: QueryIRAContributionsResponse

### 208

Client tried to reuse the same instructionId for more than one transaction. Returning the status for the first registered transaction under given instructionId (when there were no duplicates yet). Reconcile based on instructionSetId

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionResult, optional) — Result of the submitted instruction.

## Errors

### 404 Not Found Error

Returns a Problem detail instance representing a not found request.

- `type` (string, required) — URI reference identifying the problem type.
- `title` (string, required) — Short, human-readable summary of the problem.
- `status` (long, required) — HTTP status code (404).
- `detail` (string, optional) — Human-readable explanation of the problem.

### 500 Internal Server Error

Unable to process request due to an Internal Error. Please try again later.

- `type` (string, required)
- `title` (string, required)
- `status` (long, required)

## Types

### InstructionPollingResponse

Polling response for a submitted instruction.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (PollingInstructionResult, optional) — Result of the submitted instruction.

### InstructionResponse

Response acknowledging a submitted instruction.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (InstructionResult, optional) — Result of the submitted instruction.

### QueryRecentInstructionResponse

Response containing recent instructions for an account.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryRecentInstructionResult, optional) — Result of the submitted instruction.

### DepositFundsPollingResponse

Polling response for a deposit funds instruction.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (DepositFundsPollingResult, optional) — Result of the submitted instruction.

### QueryIRAContributionsResponse

Response containing IRA contribution information for an account.

- `status` (double, required) — HTTP status code for the request.
- `instructionSetId` (double, required) — Identifier of the instruction set grouping the submitted instructions.
- `instructionResult` (QueryIRAContributionsResult, optional) — Result of the submitted instruction.

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

### PollingInstructionResult

Result of polling a submitted instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (PollingInstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (PollingInstructionResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### QueryRecentInstructionResult

Recent instructions for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `instructionHistory` (QueryRecentInstructionResultInstructionHistory, required) — Recent instruction history.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (QueryRecentInstructionResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (QueryRecentInstructionResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### DepositFundsPollingResult

Result of polling a deposit funds instruction.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (DepositFundsPollingResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (DepositFundsPollingResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### QueryIRAContributionsResult

IRA contribution limits and usage for an account.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `instructionType` (enum, required) — Type of the instruction.
  - Allowed values: `ACH_INSTRUCTION`, `CANCEL_INSTRUCTION`, `COMPLEX_ASSET_TRANSFER`, `DELETE_BANK_INSTRUCTION`, `DEPOSIT`, `DWAC`, `EXTERNAL_POSITION_TRANSFER`, `FOP`, `QUERY_RECENT_INSTRUCTIONS`, `QUERY_WITHDRAWABLE_FUNDS`, `INTERNAL_POSITION_TRANSFER`, `INTERNAL_CASH_TRANSFER`, `MICRO_AMOUNT`, `OPEN_BANKING_INSTRUCTION`, `PREDEFINED_DESTINATION_INSTRUCTION`, `TRADITIONAL_BANK_INSTRUCTION_VERIFICATION`, `WITHDRAWAL`, `WITHDRAWAL_INSTRUCTION`, `QUERY_IRA_CONTRIBUTIONS`, `EDDA_INSTRUCTION`, `QUERY_RECENT_RECURRING_EVENTS`, `QUERY_RECURRING_INSTRUCTIONS`, `QUERY_ACCOUNT_BALANCES`, `QUERY_BANK_INSTRUCTION`, `QUERY_WITHDRAWABLE_CASH_EQUITY`, `ISA_TRANSFER`
- `instructionStatus` (enum, required) — Processing state of the instruction.
  - Allowed values: `PENDING`, `REJECTED`, `PROCESSED`
- `instructionId` (double, required) — Funds and Banking identifier of the instruction.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `year` (string, required) — Contribution tax year.
- `iraType` (string, required) — Type of IRA.
- `contributions` (list of QueryIraContributionsResultContributionsItems, required) — List of contribution limit records.
- `ibReferenceId` (double, optional) — Interactive Brokers global identifier of the request.
- `description` (string, optional) — Human-readable note about the result.
- `details` (QueryIraContributionsResultDetails, optional) — Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.
- `depositDetails` (DepositDetails, optional) — Present only for the DEPOSIT instruction type.
- `error` (QueryIraContributionsResultError, optional) — Error details returned when the instruction is rejected.
- `processedTimestamp` (datetime, optional) — Timestamp at which the instruction was processed.

### InstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### DepositDetails

- `amount` (double, optional)
- `currency` (string, optional)
- `whenAvailable` (date, optional)
- `openBanking` (DepositDetailsOpenBanking, optional) — Present only when bankInstructionMethod is OPEN_BANKING.

### PollingInstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### PollingInstructionResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### QueryRecentInstructionResultInstructionHistory

Recent instruction history.

- `historyMaxDepthNumberOfDays` (long, required) — Maximum look-back window, in days.
- `historyMaxDepthNumberOfInstruction` (long, required) — Maximum number of instructions returned.
- `result` (list of string, required) — List of matching records.

### QueryRecentInstructionResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### QueryRecentInstructionResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### DepositFundsPollingResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### DepositFundsPollingResultError

Error details returned when the instruction is rejected.

- `errorCode` (string, required) — Machine-readable error code.
- `errorMessage` (string, required) — Human-readable error message.

### QueryIraContributionsResultContributionsItems

- `maximumContributionLimit` (double, required) — Maximum contribution allowed for the year.
- `yearToDateContribution` (double, required) — Amount contributed year-to-date.
- `allowedContributionLimit` (double, required) — Remaining allowed contribution.

### QueryIraContributionsResultDetails

Present only for OPEN_BANKING_INSTRUCTION and WITHDRAWAL_INSTRUCTION instruction types.

- OpenBankingInstructionResultDetails: OpenBankingInstructionResultDetails
- WithdrawalInstructionResultDetails: WithdrawalInstructionResultDetails

### QueryIraContributionsResultError

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

### Polling Status Pending

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 7008156,
    "instructionId": 43092595,
    "instructionStatus": "PENDING",
    "instructionType": "INTERNAL_CASH_TRANSFER"
  },
  "instructionSetId": 2650,
  "status": 200
}
```

**SDK Code**

```python Polling Status Pending
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status Pending
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status Pending
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status Pending
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status Pending
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status Pending
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status Pending
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status Pending
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status Processed

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 7008157,
    "instructionId": 43092596,
    "instructionStatus": "PROCESSED",
    "instructionType": "INTERNAL_CASH_TRANSFER"
  },
  "instructionSetId": 2651,
  "status": 200
}
```

**SDK Code**

```python Polling Status Processed
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status Processed
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status Processed
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status Processed
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status Processed
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status Processed
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status Processed
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status Processed
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Open Banking Instruction

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 11111346,
    "details": {
      "bankAccountNumber": "*****1111",
      "bankInstructionName": "Starling(1111)",
      "bankRoutingNumber": "MONGBFDFXXX",
      "currency": "EUR",
      "serviceProvider": "PLAID",
      "type": "DEBIT"
    },
    "ibReferenceId": 322257437,
    "instructionId": 703893229,
    "instructionStatus": "PROCESSED",
    "instructionType": "OPEN_BANKING_INSTRUCTION"
  },
  "instructionSetId": 924413,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Open Banking Instruction
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Open Banking Instruction
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Open Banking Instruction
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Open Banking Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Open Banking Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Open Banking Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Open Banking Instruction
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Open Banking Instruction
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Withdrawal Instruction

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 11111445,
    "details": {
      "bankAccountNumber": "*****1111",
      "bankInstructionName": "Starling - LVP",
      "bankRoutingNumber": "MONZGB2LXXX",
      "currency": "GBP",
      "type": "CREDIT"
    },
    "ibReferenceId": 322374720,
    "instructionId": 704094343,
    "instructionStatus": "PROCESSED",
    "instructionType": "WITHDRAWAL_INSTRUCTION"
  },
  "instructionSetId": 929604,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Withdrawal Instruction
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Withdrawal Instruction
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Withdrawal Instruction
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Withdrawal Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Withdrawal Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Withdrawal Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Withdrawal Instruction
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Withdrawal Instruction
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status Query Recent Instruction

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 13050609,
    "ibReferenceId": 0,
    "instructionHistory": {
      "historyMaxDepthNumberOfDays": 30,
      "historyMaxDepthNumberOfInstruction": 100000,
      "result": [
        {
          "amount": 100,
          "clientInstructionId": 13050551,
          "currency": "USD",
          "ibInstructionId": 703818628,
          "instructionSetId": 881209,
          "instructionType": "DEPOSIT",
          "requestDate": "2025-11-05T00:20:06-05",
          "status": "PROCESSED"
        },
        {
          "amount": 100,
          "clientInstructionId": 13050504,
          "currency": "USD",
          "ibInstructionId": 703818069,
          "instructionSetId": 880813,
          "instructionType": "DEPOSIT",
          "requestDate": "2025-11-03T07:37:04-05",
          "status": "PROCESSED"
        },
        {
          "amount": 100,
          "clientInstructionId": 13050492,
          "currency": "USD",
          "ibInstructionId": 703818065,
          "instructionSetId": 880811,
          "instructionType": "DEPOSIT",
          "requestDate": "2025-11-03T07:34:57-05",
          "status": "PROCESSED"
        }
      ]
    },
    "instructionId": 703818685,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_RECENT_INSTRUCTIONS"
  },
  "instructionSetId": 881284,
  "status": 200
}
```

**SDK Code**

```python Polling Status Query Recent Instruction
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status Query Recent Instruction
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status Query Recent Instruction
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status Query Recent Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status Query Recent Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status Query Recent Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status Query Recent Instruction
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status Query Recent Instruction
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Deposit Instruction

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 1091115677,
    "ibReferenceId": 166903389,
    "instructionId": 11177823,
    "instructionStatus": "PROCESSED",
    "instructionType": "DEPOSIT"
  },
  "instructionSetId": 3673,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Deposit Instruction
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Deposit Instruction
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Deposit Instruction
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Deposit Instruction
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Deposit Instruction
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Deposit Instruction
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Deposit Instruction
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Deposit Instruction
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Deposit Instruction (Open Banking)

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 7013051,
    "depositDetails": {
      "amount": 100,
      "currency": "EUR",
      "openBanking": {
        "providerResponse": {
          "hostedlinkUrl": "https://secure.plaid.com/hl/ls90p1o43o92oo9263nprro41nqq1r03ss",
          "linkToken": "link-sandbox-45c6b98b-47bb-4718-acee-b96add6e58ff",
          "paymentId": "payment-sandbox-3c4c4c1c-9c1a-4d4d-8c1a-9c1a4d4d8c1a"
        },
        "serviceProvider": "PLAID"
      }
    },
    "ibReferenceId": 322257437,
    "instructionId": 43092469,
    "instructionStatus": "PROCESSED",
    "instructionType": "DEPOSIT"
  },
  "instructionSetId": 2481,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Deposit Instruction (Open Banking)
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Deposit Instruction (Open Banking)
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Deposit Instruction (Open Banking)
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Deposit Instruction (Open Banking)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Deposit Instruction (Open Banking)
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Deposit Instruction (Open Banking)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Deposit Instruction (Open Banking)
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Deposit Instruction (Open Banking)
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Query IRA Contributions

**Response**

```json
{
  "instructionResult": {
    "accountId": "U68903",
    "clientInstructionId": 7013308,
    "contributions": [
      {
        "allowedContributionLimit": 500,
        "maximumContributionLimit": 4000,
        "yearToDateContribution": 3500
      }
    ],
    "ibReferenceId": 0,
    "instructionId": 43134476,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_IRA_CONTRIBUTIONS",
    "iraType": "ROTH NEW",
    "year": "2003"
  },
  "instructionSetId": 18642,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Query IRA Contributions
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Query IRA Contributions
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Query IRA Contributions
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Query IRA Contributions
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Query IRA Contributions
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Query IRA Contributions
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Query IRA Contributions
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Query IRA Contributions
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Polling Status - Query IRA Contributions (SEP Accounts)

**Response**

```json
{
  "instructionResult": {
    "accountId": "U1032333",
    "clientInstructionId": 7013306,
    "contributions": [
      {
        "maximumContributionLimit": 7000,
        "type": "EMPLOYEE",
        "yearToDateContribution": 0
      },
      {
        "maximumContributionLimit": 58000,
        "type": "EMPLOYER",
        "yearToDateContribution": 0
      }
    ],
    "ibReferenceId": 0,
    "instructionId": 43134474,
    "instructionStatus": "PROCESSED",
    "instructionType": "QUERY_IRA_CONTRIBUTIONS",
    "iraType": "SEP",
    "year": "2022"
  },
  "instructionSetId": 18640,
  "status": 200
}
```

**SDK Code**

```python Polling Status - Query IRA Contributions (SEP Accounts)
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Polling Status - Query IRA Contributions (SEP Accounts)
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Polling Status - Query IRA Contributions (SEP Accounts)
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Polling Status - Query IRA Contributions (SEP Accounts)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Polling Status - Query IRA Contributions (SEP Accounts)
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Polling Status - Query IRA Contributions (SEP Accounts)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Polling Status - Query IRA Contributions (SEP Accounts)
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Polling Status - Query IRA Contributions (SEP Accounts)
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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

### Response

**Response**

```json
{
  "instructionResult": {
    "clientInstructionId": 1013025,
    "error": {
      "errorCode": "CORRUPT_DATA_INVALID_ACCT",
      "errorMessage": "Account U1 does not exist"
    },
    "instructionId": 43091799,
    "instructionStatus": "REJECTED",
    "instructionType": "INTERNAL_CASH_TRANSFER"
  },
  "instructionSetId": 1686,
  "status": 208
}
```

**SDK Code**

```python Response
import requests

url = "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

headers = {"Authorization": "Bearer <token>"}

response = requests.get(url, headers=headers)

print(response.json())
```

```javascript Response
const url = 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/client-instructions/-1988905739"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Response
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Response
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.get("https://localhost:5000/gw/api/v1/client-instructions/-1988905739")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/client-instructions/-1988905739', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp Response
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/client-instructions/-1988905739");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift Response
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/client-instructions/-1988905739")! as URL,
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