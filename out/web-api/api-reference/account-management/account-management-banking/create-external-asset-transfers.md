[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-asset-transfers)

# Transfer Positions Externally (ACATS, ATON, FOP, DWAC, Complex Asset Transfer)

POST https://localhost:5000/gw/api/v1/external-asset-transfers
Content-Type: application/json

Initiate request to submit external position transfer. Methods- ACATS, ATON, Basic FOP, FOP, DWAC. More information on transfer methods can be found here - [https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers/](https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers/)**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-asset-transfers

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
  - Allowed values: `DWAC`, `FOP`, `COMPLEX_ASSET_TRANSFER`, `EXTERNAL_POSITION_TRANSFER`, `ISA_TRANSFER`
- `instruction` (GwApiV1ExternalAssetTransfersPostRequestBodyContentApplicationJsonSchemaInstruction, required)

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

### GwApiV1ExternalAssetTransfersPostRequestBodyContentApplicationJsonSchemaInstruction

- FopInstruction: FopInstruction
- DwacInstruction: DwacInstruction
- ComplexAssetTransferInstruction: ComplexAssetTransferInstruction
- ExternalPositionTransfer: ExternalPositionTransfer
- IsaTransferInstruction: IsaTransferInstruction

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

### FopInstruction

Request to transfer a position free of payment (FOP).

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`, `OUT`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `contraBrokerAccountId` (string, required) — Account identifier at the contra broker.
- `contraBrokerDtcCode` (string, required) — DTC participant code of the contra broker.
- `quantity` (double, required) — Quantity of the instrument.
- `tradingInstrument` (TradingInstrumentRef, required) — Identifies a security by contract id or by security id and asset type.

### DwacInstruction

Request to transfer a position via DWAC (Deposit/Withdrawal At Custodian).

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `contraBrokerAccountId` (string, required) — Account identifier at the contra broker.
- `contraBrokerTaxId` (string, required) — Tax ID associated with the contra broker.
- `quantity` (double, required) — Quantity of the instrument.
- `tradingInstrument` (TradingInstrumentRef, required) — Identifies a security by contract id or by security id and asset type.
- `accountTitle` (string, optional) — Account title of the receiving account at IBKR.
- `referenceId` (string, optional) — Client reference identifier for the instruction.

### ComplexAssetTransferInstruction

Request to transfer positions to or from a contra broker (Basic FOP / complex asset transfer, v2). Basic FOP (Free of Payment) transfers assets from financial institutions generally outside the US (equities, fixed income, structured products, options); IBKR coordinates settlement instructions with the institution.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`, `OUT`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `quantity` (double, required) — Quantity of the instrument.
- `tradingInstrument` (TradingInstrumentRef, required) — Identifies a security by contract id or by security id and asset type.
- `contraBrokerInfo` (ContraBrokerInfoRef, required) — Details of the contra (external) broker for the transfer.
- `accountIdAtCurrentBroker` (string, optional) — Client's account identifier at the current (contra) broker.
- `nonDisclosedDetail` (NonDisclosedDetailRef, optional) — Non-disclosed settlement details for the transfer.

### ExternalPositionTransfer

Request to transfer positions from an external broker via ACATS or ATON.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `type` (enum, required) — Transfer type (FULL).
  - Allowed values: `FULL`
- `subType` (enum, required) — Asset transfer protocol (ACATS or ATON).
  - Allowed values: `ACATS`, `ATON`
- `brokerId` (string, required) — Identifier of the external broker.
- `brokerName` (string, required) — Name of the external broker; must exactly match a value from the GET participating brokers API.
- `accountAtBroker` (string, required) — Client's account number at the external broker.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `signature` (string, required) — Client signature authorizing the instruction. Expected to input the account title at IBKR.
- `sourceIRAType` (enum, optional) — Source IRA type code.
  - Allowed values: `RO`, `RI`, `RT`, `SP`, `ED`, `TH`, `RH`, `SH`

### IsaTransferInstruction

Request to transfer a UK ISA to Interactive Brokers from another ISA provider.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `providerName` (string, required) — Name of the current ISA provider; must exactly match a provider name returned by the GET ISA providers API.
- `accountAtProvider` (string, required) — Client's account reference at the ISA provider.
- `totalAmountTransferredInGBP` (double, required)
- `authorizationType` (string, required) — How the ISA transfer should be authorized/handled.
- `signature` (string, required) — Client signature authorizing the instruction.

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

### TradingInstrumentRef

Identifies a security by contract id or by security id and asset type.

- TradingInstrumentRef0
- TradingInstrumentRef1

### ContraBrokerInfoRef

Details of the contra (external) broker for the transfer.

- `accountType` (string, required) — Type of the contra broker account. One of: INDIVIDUAL, ORG, POOL, COMPANY.
- `brokerName` (string, required) — Name of the external broker; must exactly match a value from the GET participating brokers API.
- `brokerAccountId` (string, required) — Account identifier held at the contra broker.
- `country` (string, required) — Country of the contra broker.
- `contactEmail` (string, required) — Email address of the contra broker contact.
- `contactPhone` (string, required) — Phone number of the contra broker contact.
- `depositoryId` (string, optional) — Depository / DTC identifier of the contra broker.
- `contactName` (string, optional) — Name of the contra broker contact.
- `accountTitle` (string, optional) — Title of the account.

### NonDisclosedDetailRef

Non-disclosed settlement details for the transfer.

- `tradeDate` (string, required) — Trade date of the transfer.
- `settleDate` (string, required) — Settlement date of the transfer.
- `psetBic` (string, optional) — Place-of-settlement BIC/SWIFT code.
- `reagDeagBic` (string, optional) — Receiving/delivering agent BIC/SWIFT code.
- `buyerSellBic` (string, optional) — Buyer/seller BIC/SWIFT code.
- `memberAccountId` (string, optional) — Member account identifier at the settlement location.
- `safeKeepingAccountId` (string, optional) — Safekeeping account identifier at the settlement location.

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

### TradingInstrumentRef0

- `conid` (double, required) — Interactive Brokers contract identifier of the instrument.

### TradingInstrumentRef1

- `tradingInstrumentDescription` (TradingInstrumentRefOneOf1TradingInstrumentDescription, required) — Instrument identified by security id and asset type (used when no contract id is supplied).

### OpenBankingInstructionResultDetailsProviderResponse

Provider-specific data. For PLAID, populated with hostedlinkUrl/linkToken only while account linkage is pending; absent once the account is linked.

- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### DepositDetailsOpenBankingProviderResponse

Provider-specific data returned once the Plaid payment has been initiated.

- `paymentId` (string, optional)
- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### TradingInstrumentRefOneOf1TradingInstrumentDescription

Instrument identified by security id and asset type (used when no contract id is supplied).

- `securityIdType` (enum, required) — Type of the security identifier (CUSIP, ISIN, or CASH).
  - Allowed values: `CUSIP`, `ISIN`, `CASH`
- `securityId` (string, required) — Security identifier value.
- `assetType` (enum, required) — Asset class of the instrument.
  - Allowed values: `STK`, `CASH`, `UNKNOWN`, `BILL`, `BOND`, `FUND`, `OPT`, `WAR`

## Examples

### FOP

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go FOP
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby FOP
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java FOP
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php FOP
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift FOP
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### DWAC

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "DWAC",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go DWAC
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby DWAC
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java DWAC
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php DWAC
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift DWAC
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### Complex Asset Transfer

**Response**

```json
{
  "status": 202,
  "instructionSetId": 3549,
  "instructionResult": {
    "clientInstructionId": 80188,
    "instructionType": "COMPLEX_ASSET_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43093833
  }
}
```

**SDK Code**

```go Complex Asset Transfer
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Complex Asset Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java Complex Asset Transfer
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php Complex Asset Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Complex Asset Transfer
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### External Position Transfer

**Response**

```json
{
  "status": 202,
  "instructionSetId": 3700,
  "instructionResult": {
    "clientInstructionId": 7008998,
    "instructionType": "EXTERNAL_POSITION_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43094000
  }
}
```

**SDK Code**

```go External Position Transfer
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby External Position Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java External Position Transfer
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php External Position Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift External Position Transfer
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### ISA Transfer

**Request**

```json
{
  "instructionType": "ISA_TRANSFER",
  "instruction": {
    "accountAtProvider": "HL-ACC-9999",
    "accountId": "U1234567",
    "authorizationType": "SELL_INV_AND_TRANSFER_AS_CASH",
    "clientInstructionId": 7013070,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "providerName": "Hargreaves Lansdown",
    "quantity": 1000,
    "signature": "John Doe",
    "totalAmountTransferredInGBP": 5000,
    "tradingInstrument": {
      "conid": 459200101
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 3701,
  "instructionResult": {
    "clientInstructionId": 7013070,
    "instructionType": "ISA_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43094100
  }
}
```

**SDK Code**

```go ISA Transfer
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"ISA_TRANSFER\",\n  \"instruction\": {\n    \"accountAtProvider\": \"HL-ACC-9999\",\n    \"accountId\": \"U1234567\",\n    \"authorizationType\": \"SELL_INV_AND_TRANSFER_AS_CASH\",\n    \"clientInstructionId\": 7013070,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"providerName\": \"Hargreaves Lansdown\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"totalAmountTransferredInGBP\": 5000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    }\n  }\n}")

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

```ruby ISA Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"ISA_TRANSFER\",\n  \"instruction\": {\n    \"accountAtProvider\": \"HL-ACC-9999\",\n    \"accountId\": \"U1234567\",\n    \"authorizationType\": \"SELL_INV_AND_TRANSFER_AS_CASH\",\n    \"clientInstructionId\": 7013070,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"providerName\": \"Hargreaves Lansdown\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"totalAmountTransferredInGBP\": 5000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java ISA Transfer
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"ISA_TRANSFER\",\n  \"instruction\": {\n    \"accountAtProvider\": \"HL-ACC-9999\",\n    \"accountId\": \"U1234567\",\n    \"authorizationType\": \"SELL_INV_AND_TRANSFER_AS_CASH\",\n    \"clientInstructionId\": 7013070,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"providerName\": \"Hargreaves Lansdown\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"totalAmountTransferredInGBP\": 5000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    }\n  }\n}")
  .asString();
```

```php ISA Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "ISA_TRANSFER",
  "instruction": {
    "accountAtProvider": "HL-ACC-9999",
    "accountId": "U1234567",
    "authorizationType": "SELL_INV_AND_TRANSFER_AS_CASH",
    "clientInstructionId": 7013070,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "providerName": "Hargreaves Lansdown",
    "quantity": 1000,
    "signature": "John Doe",
    "totalAmountTransferredInGBP": 5000,
    "tradingInstrument": {
      "conid": 459200101
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

```swift ISA Transfer
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "ISA_TRANSFER",
  "instruction": [
    "accountAtProvider": "HL-ACC-9999",
    "accountId": "U1234567",
    "authorizationType": "SELL_INV_AND_TRANSFER_AS_CASH",
    "clientInstructionId": 7013070,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "providerName": "Hargreaves Lansdown",
    "quantity": 1000,
    "signature": "John Doe",
    "totalAmountTransferredInGBP": 5000,
    "tradingInstrument": ["conid": 459200101]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### FOP - transfer using contractID (conid)

**Request**

```json
{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013038,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go FOP - transfer using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013038,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")

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

```ruby FOP - transfer using contractID (conid)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013038,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java FOP - transfer using contractID (conid)
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013038,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")
  .asString();
```

```php FOP - transfer using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013038,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
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

```swift FOP - transfer using contractID (conid)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "FOP",
  "instruction": [
    "accountId": "U46377",
    "clientInstructionId": 7013038,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": [
      "conid": 12123,
      "currency": "USD"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### FOP - transfer using tradingInstrument.detail

**Request**

```json
{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013039,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go FOP - transfer using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013039,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby FOP - transfer using tradingInstrument.detail
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013039,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java FOP - transfer using tradingInstrument.detail
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013039,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")
  .asString();
```

```php FOP - transfer using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013039,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
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

```swift FOP - transfer using tradingInstrument.detail
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "FOP",
  "instruction": [
    "accountId": "U46377",
    "clientInstructionId": 7013039,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "tradingInstrument": [
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": [
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### DWAC - transfer using contractID (conid)

**Request**

```json
{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013036,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go DWAC - transfer using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013036,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")

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

```ruby DWAC - transfer using contractID (conid)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013036,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java DWAC - transfer using contractID (conid)
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013036,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")
  .asString();
```

```php DWAC - transfer using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013036,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
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

```swift DWAC - transfer using contractID (conid)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DWAC",
  "instruction": [
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013036,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": [
      "conid": 12123,
      "currency": "USD"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### DWAC - transfer using tradingInstrument.detail

**Request**

```json
{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013037,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go DWAC - transfer using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013037,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby DWAC - transfer using tradingInstrument.detail
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013037,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java DWAC - transfer using tradingInstrument.detail
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013037,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"referenceId\": \"refId\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")
  .asString();
```

```php DWAC - transfer using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013037,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
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

```swift DWAC - transfer using tradingInstrument.detail
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DWAC",
  "instruction": [
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013037,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "direction": "IN",
    "quantity": 1000,
    "referenceId": "refId",
    "tradingInstrument": [
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": [
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### Complex Asset Transfer - using contractID (conid)

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go Complex Asset Transfer - using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")

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

```ruby Complex Asset Transfer - using contractID (conid)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Complex Asset Transfer - using contractID (conid)
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 12123,\n      \"currency\": \"USD\"\n    }\n  }\n}")
  .asString();
```

```php Complex Asset Transfer - using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": {
      "conid": 12123,
      "currency": "USD"
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

```swift Complex Asset Transfer - using contractID (conid)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": [
    "accountId": "U399192",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": [
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    ],
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": [
      "conid": 12123,
      "currency": "USD"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### Complex Asset Transfer - using tradingInstrument.detail

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go Complex Asset Transfer - using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby Complex Asset Transfer - using tradingInstrument.detail
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Complex Asset Transfer - using tradingInstrument.detail
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")
  .asString();
```

```php Complex Asset Transfer - using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
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

```swift Complex Asset Transfer - using tradingInstrument.detail
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": [
    "accountId": "U399192",
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": [
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    ],
    "direction": "IN",
    "quantity": 10,
    "tradingInstrument": [
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": [
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### Complex Asset Transfer - where user is nonDisclosed type

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "nonDisclosedDetail": {
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    },
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go Complex Asset Transfer - where user is nonDisclosed type
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby Complex Asset Transfer - where user is nonDisclosed type
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Complex Asset Transfer - where user is nonDisclosed type
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")
  .asString();
```

```php Complex Asset Transfer - where user is nonDisclosed type
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "nonDisclosedDetail": {
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    },
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
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

```swift Complex Asset Transfer - where user is nonDisclosed type
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": [
    "accountId": "U399192",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": [
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    ],
    "direction": "IN",
    "nonDisclosedDetail": [
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    ],
    "quantity": 10,
    "tradingInstrument": [
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": [
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "accountIdAtCurrentBroker": "8E90075",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountTitle": "test",
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "nonDisclosedDetail": {
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    },
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
    }
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"accountIdAtCurrentBroker\": \"8E90075\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountTitle\": \"test\",\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"accountIdAtCurrentBroker\": \"8E90075\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountTitle\": \"test\",\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"accountIdAtCurrentBroker\": \"8E90075\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountTitle\": \"test\",\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"quantity\": 10,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")
  .asString();
```

```php Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "accountId": "U399192",
    "accountIdAtCurrentBroker": "8E90075",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": {
      "accountTitle": "test",
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    },
    "direction": "IN",
    "nonDisclosedDetail": {
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    },
    "quantity": 10,
    "tradingInstrument": {
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": {
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      }
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

```swift Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": [
    "accountId": "U399192",
    "accountIdAtCurrentBroker": "8E90075",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerInfo": [
      "accountTitle": "test",
      "accountType": "ORG",
      "brokerAccountId": "as3456567678578N",
      "brokerName": "JP MORGAN",
      "contactEmail": "a@gmail.com",
      "contactName": "as",
      "contactPhone": "2039126155",
      "country": "United States",
      "depositoryId": "1234"
    ],
    "direction": "IN",
    "nonDisclosedDetail": [
      "buyerSellBic": "",
      "memberAccountId": "",
      "psetBic": "",
      "reagDeagBic": "",
      "safeKeepingAccountId": "",
      "settleDate": "2018-03-20T09:12:13Z",
      "tradeDate": "2018-03-20T09:12:13Z"
    ],
    "quantity": 10,
    "tradingInstrument": [
      "conid": 459200101,
      "currency": "USD",
      "tradingInstrumentDescription": [
        "assetType": "STK",
        "securityId": "459200101",
        "securityIdType": "ISIN"
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### External Position Transfer - ACATS

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "John Doe",
    "sourceIRAType": "RO",
    "subType": "ACATS",
    "tradingInstrument": {
      "conid": 459200101
    },
    "type": "FULL"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go External Position Transfer - ACATS
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"sourceIRAType\": \"RO\",\n    \"subType\": \"ACATS\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}")

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

```ruby External Position Transfer - ACATS
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"sourceIRAType\": \"RO\",\n    \"subType\": \"ACATS\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java External Position Transfer - ACATS
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"John Doe\",\n    \"sourceIRAType\": \"RO\",\n    \"subType\": \"ACATS\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}")
  .asString();
```

```php External Position Transfer - ACATS
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "John Doe",
    "sourceIRAType": "RO",
    "subType": "ACATS",
    "tradingInstrument": {
      "conid": 459200101
    },
    "type": "FULL"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift External Position Transfer - ACATS
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": [
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "John Doe",
    "sourceIRAType": "RO",
    "subType": "ACATS",
    "tradingInstrument": ["conid": 459200101],
    "type": "FULL"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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

### External Position Transfer - ATON

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "3265",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "Marko Barr",
    "subType": "ATON",
    "tradingInstrument": {
      "conid": 459200101
    },
    "type": "FULL"
  }
}
```

**Response**

```json
{
  "status": 202,
  "instructionSetId": 1703,
  "instructionResult": {
    "clientInstructionId": 1013031,
    "instructionType": "FOP",
    "instructionStatus": "PENDING",
    "instructionId": 43091814
  }
}
```

**SDK Code**

```go External Position Transfer - ATON
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"3265\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"Marko Barr\",\n    \"subType\": \"ATON\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}")

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

```ruby External Position Transfer - ATON
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"3265\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"Marko Barr\",\n    \"subType\": \"ATON\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```java External Position Transfer - ATON
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/external-asset-transfers")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U1225448\",\n    \"brokerId\": \"3265\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013060,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"direction\": \"IN\",\n    \"quantity\": 1000,\n    \"signature\": \"Marko Barr\",\n    \"subType\": \"ATON\",\n    \"tradingInstrument\": {\n      \"conid\": 459200101\n    },\n    \"type\": \"FULL\"\n  }\n}")
  .asString();
```

```php External Position Transfer - ATON
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "3265",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "Marko Barr",
    "subType": "ATON",
    "tradingInstrument": {
      "conid": 459200101
    },
    "type": "FULL"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift External Position Transfer - ATON
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": [
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "brokerId": "3265",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013060,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "direction": "IN",
    "quantity": 1000,
    "signature": "Marko Barr",
    "subType": "ATON",
    "tradingInstrument": ["conid": 459200101],
    "type": "FULL"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers")! as URL,
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
