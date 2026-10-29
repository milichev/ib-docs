[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-asset-transfers-2)

# Transfer Positions Externally (FOP, DWAC, Complex Asset Transfer)

POST https://localhost:5000/gw/api/v2/external-asset-transfers
Content-Type: application/json

Initiate request to submit external position transfer. Methods- Basic FOP, FOP, DWAC. More information on transfer methods can be found here - [https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers/](https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers/)**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-external-asset-transfers-2

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
  - Allowed values: `DWAC`, `FOP`, `COMPLEX_ASSET_TRANSFER`, `EXTERNAL_POSITION_TRANSFER`
- `instruction` (GwApiV2ExternalAssetTransfersPostRequestBodyContentApplicationJsonSchemaInstruction, required)

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

### GwApiV2ExternalAssetTransfersPostRequestBodyContentApplicationJsonSchemaInstruction

- FopInstructionV2: FopInstructionV2
- DwacInstructionV2: DwacInstructionV2
- ComplexAssetTransferInstructionV2: ComplexAssetTransferInstructionV2
- ExternalPositionTransferV2: ExternalPositionTransferV2

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

### FopInstructionV2

Request to transfer a position free of payment (FOP, v2).

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`, `OUT`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `contraBrokerAccountId` (string, required) — Account identifier at the contra broker.
- `contraBrokerDtcCode` (string, required) — DTC participant code of the contra broker.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `positions` (list of TradingInstrumentV2, required) — Positions to be transferred.

### DwacInstructionV2

Request to transfer a position via DWAC (Deposit/Withdrawal At Custodian, v2).

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `contraBrokerAccountId` (string, required) — Account identifier at the contra broker.
- `contraBrokerTaxId` (string, required) — Tax ID associated with the contra broker.
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `positions` (list of TradingInstrumentV2, required) — Positions to be transferred.
- `accountTitle` (string, optional) — Account title of the receiving account at IBKR.
- `referenceId` (string, optional) — Client reference identifier for the instruction.

### ComplexAssetTransferInstructionV2

Request to transfer positions to or from a contra broker (Basic FOP / complex asset transfer, v2). Basic FOP (Free of Payment) transfers assets from financial institutions generally outside the US (equities, fixed income, structured products, options); IBKR coordinates settlement instructions with the institution.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `direction` (enum, required) — Direction of the transfer (IN or OUT).
  - Allowed values: `IN`, `OUT`
- `accountId` (string, required) — Interactive Brokers account identifier the instruction applies to (e.g. "U46377").
- `currency` (string, required) — ISO 4217 currency code (e.g. "USD").
- `positions` (list of TradingInstrumentV2, required) — Positions to be transferred.
- `contraBrokerInfo` (ContraBrokerInfoRef, required) — Details of the contra (external) broker for the transfer.
- `accountIdAtCurrentBroker` (string, optional) — Client's account identifier at the current (contra) broker.
- `nonDisclosedDetail` (NonDisclosedDetailRef, optional) — Non-disclosed settlement details for the transfer.

### ExternalPositionTransferV2

- `clientInstructionId` (double, required)
- `type` (enum, required)
  - Allowed values: `FULL`, `PARTIAL`
- `subType` (enum, required)
  - Allowed values: `ACATS`, `ATON`
- `brokerId` (string, required)
- `brokerName` (string, required)
- `accountAtBroker` (string, required)
- `accountId` (string, required)
- `signature` (string, required)
- `positions` (list of AcatsPositionV2, required)
- `sourceIRAType` (enum, optional)
  - Allowed values: `RO`, `RI`, `RT`, `SP`, `ED`, `TH`, `RH`, `SH`
- `cash` (list of CashAmountV2, optional)

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

### TradingInstrumentV2

Identifies a security by contract id or by security id and asset type (v2).

- TradingInstrumentV20
- TradingInstrumentV21

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

### AcatsPositionV2

- AcatsPositionV20
- AcatsPositionV21

### CashAmountV2

- `currency` (string, required)
- `amount` (double, optional) — Send as a positive figure. A MARGIN_LOAN is recorded as a negative amount. Omit when transferAll is true, as the whole balance is transferred.
- `type` (enum, optional) — Mandatory for ACATS and ATON, optional for other transfer methods.
  - Allowed values: `BALANCE`, `MARGIN_LOAN`
- `transferAll` (boolean, optional) — Transfer the whole balance in this currency. Optional, defaults to false.

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

### TradingInstrumentV20

- `conid` (double, required) — Interactive Brokers contract identifier of the instrument.

### TradingInstrumentV21

- `tradingInstrumentDescription` (TradingInstrumentV2OneOf1TradingInstrumentDescription, required) — Instrument identified by security id and asset type (used when no contract id is supplied).

### AcatsPositionV20

- `conid` (double, required)

### AcatsPositionV21

- `tradingInstrumentDescription` (AcatsPositionV2OneOf1TradingInstrumentDescription, required)

### OpenBankingInstructionResultDetailsProviderResponse

Provider-specific data. For PLAID, populated with hostedlinkUrl/linkToken only while account linkage is pending; absent once the account is linked.

- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### DepositDetailsOpenBankingProviderResponse

Provider-specific data returned once the Plaid payment has been initiated.

- `paymentId` (string, optional)
- `hostedlinkUrl` (string, optional)
- `linkToken` (string, optional)

### TradingInstrumentV2OneOf1TradingInstrumentDescription

Instrument identified by security id and asset type (used when no contract id is supplied).

- `securityIdType` (enum, required) — Type of the security identifier (CUSIP, ISIN, or CASH).
  - Allowed values: `CUSIP`, `ISIN`, `CASH`
- `securityId` (string, required) — Security identifier value.
- `assetType` (enum, required) — Asset class of the instrument.
  - Allowed values: `STK`, `CASH`, `UNKNOWN`, `BILL`, `BOND`, `FUND`, `OPT`, `WAR`

### AcatsPositionV2OneOf1TradingInstrumentDescription

- `securityIdType` (enum, required)
  - Allowed values: `CUSIP`, `ISIN`, `CASH`
- `securityId` (string, required)
- `assetType` (enum, required)
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

```python FOP
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go FOP
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php FOP
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift FOP
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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

```python DWAC
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go DWAC
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php DWAC
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift DWAC
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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

```python Complex Asset Transfer
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Complex Asset Transfer
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Complex Asset Transfer
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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

### Partial ACATS - transfer using contractID (conid)

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 265598,
        "quantity": 100
      },
      {
        "conid": 272093,
        "quantity": 50
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
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

```python Partial ACATS - transfer using contractID (conid)
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "EXTERNAL_POSITION_TRANSFER",
    "instruction": {
        "accountAtBroker": "SOL12345",
        "accountId": "U2323232",
        "brokerId": "0226",
        "brokerName": "Wall Street Financial Group",
        "clientInstructionId": 7013040,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 265598,
                "quantity": 100
            },
            {
                "conid": 272093,
                "quantity": 50
            }
        ],
        "signature": "sample signature",
        "subType": "ACATS",
        "type": "PARTIAL"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Partial ACATS - transfer using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 265598,\n        \"quantity\": 100\n      },\n      {\n        \"conid\": 272093,\n        \"quantity\": 50\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}")

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

```ruby Partial ACATS - transfer using contractID (conid)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 265598,\n        \"quantity\": 100\n      },\n      {\n        \"conid\": 272093,\n        \"quantity\": 50\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Partial ACATS - transfer using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 265598,
        "quantity": 100
      },
      {
        "conid": 272093,
        "quantity": 50
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Partial ACATS - transfer using contractID (conid)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": [
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013040,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 265598,
        "quantity": 100
      ],
      [
        "conid": 272093,
        "quantity": 50
      ]
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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

### Partial ACATS - positions and cash

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "cash": [
      {
        "amount": 1500.5,
        "currency": "USD",
        "type": "BALANCE"
      },
      {
        "currency": "EUR",
        "transferAll": true,
        "type": "MARGIN_LOAN"
      }
    ],
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 265598,
        "quantity": 100,
        "type": "LONG"
      },
      {
        "conid": 272093,
        "transferAll": true,
        "type": "SHORT"
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
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

```python Partial ACATS - positions and cash
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "EXTERNAL_POSITION_TRANSFER",
    "instruction": {
        "accountAtBroker": "SOL12345",
        "accountId": "U2323232",
        "brokerId": "0226",
        "brokerName": "Wall Street Financial Group",
        "cash": [
            {
                "amount": 1500.5,
                "currency": "USD",
                "type": "BALANCE"
            },
            {
                "currency": "EUR",
                "transferAll": True,
                "type": "MARGIN_LOAN"
            }
        ],
        "clientInstructionId": 7013042,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 265598,
                "quantity": 100,
                "type": "LONG"
            },
            {
                "conid": 272093,
                "transferAll": True,
                "type": "SHORT"
            }
        ],
        "signature": "sample signature",
        "subType": "ACATS",
        "type": "PARTIAL"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Partial ACATS - positions and cash
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"cash\": [\n      {\n        \"amount\": 1500.5,\n        \"currency\": \"USD\",\n        \"type\": \"BALANCE\"\n      },\n      {\n        \"currency\": \"EUR\",\n        \"transferAll\": true,\n        \"type\": \"MARGIN_LOAN\"\n      }\n    ],\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 265598,\n        \"quantity\": 100,\n        \"type\": \"LONG\"\n      },\n      {\n        \"conid\": 272093,\n        \"transferAll\": true,\n        \"type\": \"SHORT\"\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}")

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

```ruby Partial ACATS - positions and cash
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"cash\": [\n      {\n        \"amount\": 1500.5,\n        \"currency\": \"USD\",\n        \"type\": \"BALANCE\"\n      },\n      {\n        \"currency\": \"EUR\",\n        \"transferAll\": true,\n        \"type\": \"MARGIN_LOAN\"\n      }\n    ],\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 265598,\n        \"quantity\": 100,\n        \"type\": \"LONG\"\n      },\n      {\n        \"conid\": 272093,\n        \"transferAll\": true,\n        \"type\": \"SHORT\"\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Partial ACATS - positions and cash
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "cash": [
      {
        "amount": 1500.5,
        "currency": "USD",
        "type": "BALANCE"
      },
      {
        "currency": "EUR",
        "transferAll": true,
        "type": "MARGIN_LOAN"
      }
    ],
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 265598,
        "quantity": 100,
        "type": "LONG"
      },
      {
        "conid": 272093,
        "transferAll": true,
        "type": "SHORT"
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Partial ACATS - positions and cash
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": [
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "cash": [
      [
        "amount": 1500.5,
        "currency": "USD",
        "type": "BALANCE"
      ],
      [
        "currency": "EUR",
        "transferAll": true,
        "type": "MARGIN_LOAN"
      ]
    ],
    "clientInstructionId": 7013042,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 265598,
        "quantity": 100,
        "type": "LONG"
      ],
      [
        "conid": 272093,
        "transferAll": true,
        "type": "SHORT"
      ]
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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

### Partial ACATS - transfer using tradingInstrumentDescription

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 75,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "88160R101",
          "securityIdType": "CUSIP"
        }
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
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

```python Partial ACATS - transfer using tradingInstrumentDescription
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "EXTERNAL_POSITION_TRANSFER",
    "instruction": {
        "accountAtBroker": "SOL12345",
        "accountId": "U2323232",
        "brokerId": "0226",
        "brokerName": "Wall Street Financial Group",
        "clientInstructionId": 7013041,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 459200101,
                "quantity": 75,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "88160R101",
                    "securityIdType": "CUSIP"
                }
            }
        ],
        "signature": "sample signature",
        "subType": "ACATS",
        "type": "PARTIAL"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Partial ACATS - transfer using tradingInstrumentDescription
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 75,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"88160R101\",\n          \"securityIdType\": \"CUSIP\"\n        }\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}")

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

```ruby Partial ACATS - transfer using tradingInstrumentDescription
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"accountAtBroker\": \"SOL12345\",\n    \"accountId\": \"U2323232\",\n    \"brokerId\": \"0226\",\n    \"brokerName\": \"Wall Street Financial Group\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 75,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"88160R101\",\n          \"securityIdType\": \"CUSIP\"\n        }\n      }\n    ],\n    \"signature\": \"sample signature\",\n    \"subType\": \"ACATS\",\n    \"type\": \"PARTIAL\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Partial ACATS - transfer using tradingInstrumentDescription
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 75,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "88160R101",
          "securityIdType": "CUSIP"
        }
      }
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Partial ACATS - transfer using tradingInstrumentDescription
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": [
    "accountAtBroker": "SOL12345",
    "accountId": "U2323232",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "clientInstructionId": 7013041,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 459200101,
        "quantity": 75,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "88160R101",
          "securityIdType": "CUSIP"
        ]
      ]
    ],
    "signature": "sample signature",
    "subType": "ACATS",
    "type": "PARTIAL"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 1000
      }
    ]
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

```python FOP - transfer using contractID (conid)
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "FOP",
    "instruction": {
        "accountId": "U46377",
        "clientInstructionId": 7013038,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 12123,
                "quantity": 1000
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go FOP - transfer using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013038,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 1000\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013038,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 1000\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php FOP - transfer using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013038,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 1000
      }
    ]
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 12123,
        "quantity": 1000
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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

```python FOP - transfer using tradingInstrument.detail
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "FOP",
    "instruction": {
        "accountId": "U46377",
        "clientInstructionId": 7013039,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 459200101,
                "quantity": 1000,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "459200101",
                    "securityIdType": "ISIN"
                }
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go FOP - transfer using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013039,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 1000,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instruction\": {\n    \"accountId\": \"U46377\",\n    \"clientInstructionId\": 7013039,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 1000,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php FOP - transfer using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "FOP",
  "instruction": {
    "accountId": "U46377",
    "clientInstructionId": 7013039,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        ]
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 1000
      }
    ],
    "referenceId": "refId"
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

```python DWAC - transfer using contractID (conid)
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "DWAC",
    "instruction": {
        "accountId": "U1001095",
        "accountTitle": "Special Company Holding LLC",
        "clientInstructionId": 7013036,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "contraBrokerTaxId": "123456789",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 12123,
                "quantity": 1000
            }
        ],
        "referenceId": "refId"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go DWAC - transfer using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013036,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 1000\n      }\n    ],\n    \"referenceId\": \"refId\"\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013036,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 1000\n      }\n    ],\n    \"referenceId\": \"refId\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php DWAC - transfer using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013036,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 1000
      }
    ],
    "referenceId": "refId"
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 12123,
        "quantity": 1000
      ]
    ],
    "referenceId": "refId"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ],
    "referenceId": "refId"
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

```python DWAC - transfer using tradingInstrument.detail
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
    "instructionType": "DWAC",
    "instruction": {
        "accountId": "U1001095",
        "accountTitle": "Special Company Holding LLC",
        "clientInstructionId": 7013037,
        "contraBrokerAccountId": "12345678A",
        "contraBrokerDtcCode": "534",
        "contraBrokerTaxId": "123456789",
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 459200101,
                "quantity": 1000,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "459200101",
                    "securityIdType": "ISIN"
                }
            }
        ],
        "referenceId": "refId"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go DWAC - transfer using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013037,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 1000,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ],\n    \"referenceId\": \"refId\"\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instruction\": {\n    \"accountId\": \"U1001095\",\n    \"accountTitle\": \"Special Company Holding LLC\",\n    \"clientInstructionId\": 7013037,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerTaxId\": \"123456789\",\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 1000,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ],\n    \"referenceId\": \"refId\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php DWAC - transfer using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
  'body' => '{
  "instructionType": "DWAC",
  "instruction": {
    "accountId": "U1001095",
    "accountTitle": "Special Company Holding LLC",
    "clientInstructionId": 7013037,
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "contraBrokerTaxId": "123456789",
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ],
    "referenceId": "refId"
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 459200101,
        "quantity": 1000,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        ]
      ]
    ],
    "referenceId": "refId"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 10
      }
    ]
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

```python Complex Asset Transfer - using contractID (conid)
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
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
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 12123,
                "quantity": 10
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Complex Asset Transfer - using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 10\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013040,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 12123,\n        \"quantity\": 10\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer - using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 12123,
        "quantity": 10
      }
    ]
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 12123,
        "quantity": 10
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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

```python Complex Asset Transfer - using tradingInstrument.detail
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
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
        "currency": "USD",
        "direction": "IN",
        "positions": [
            {
                "conid": 459200101,
                "quantity": 10,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "459200101",
                    "securityIdType": "ISIN"
                }
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Complex Asset Transfer - using tradingInstrument.detail
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013042,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer - using tradingInstrument.detail
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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
    "currency": "USD",
    "direction": "IN",
    "positions": [
      [
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        ]
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
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
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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

```python Complex Asset Transfer - where user is nonDisclosed type
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
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
        "currency": "USD",
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
        "positions": [
            {
                "conid": 459200101,
                "quantity": 10,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "459200101",
                    "securityIdType": "ISIN"
                }
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Complex Asset Transfer - where user is nonDisclosed type
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer - where user is nonDisclosed type
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
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
    "currency": "USD",
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
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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
    "currency": "USD",
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
    "positions": [
      [
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        ]
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
    "currency": "USD",
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
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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

```python Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
import requests

url = "https://localhost:5000/gw/api/v2/external-asset-transfers"

payload = {
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
        "currency": "USD",
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
        "positions": [
            {
                "conid": 459200101,
                "quantity": 10,
                "tradingInstrumentDescription": {
                    "assetType": "STK",
                    "securityId": "459200101",
                    "securityIdType": "ISIN"
                }
            }
        ]
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v2/external-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"accountIdAtCurrentBroker\": \"8E90075\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountTitle\": \"test\",\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}")

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

url = URI("https://localhost:5000/gw/api/v2/external-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instruction\": {\n    \"accountId\": \"U399192\",\n    \"accountIdAtCurrentBroker\": \"8E90075\",\n    \"clientInstructionId\": 7013041,\n    \"contraBrokerAccountId\": \"12345678A\",\n    \"contraBrokerDtcCode\": \"534\",\n    \"contraBrokerInfo\": {\n      \"accountTitle\": \"test\",\n      \"accountType\": \"ORG\",\n      \"brokerAccountId\": \"as3456567678578N\",\n      \"brokerName\": \"JP MORGAN\",\n      \"contactEmail\": \"a@gmail.com\",\n      \"contactName\": \"as\",\n      \"contactPhone\": \"2039126155\",\n      \"country\": \"United States\",\n      \"depositoryId\": \"1234\"\n    },\n    \"currency\": \"USD\",\n    \"direction\": \"IN\",\n    \"nonDisclosedDetail\": {\n      \"buyerSellBic\": \"\",\n      \"memberAccountId\": \"\",\n      \"psetBic\": \"\",\n      \"reagDeagBic\": \"\",\n      \"safeKeepingAccountId\": \"\",\n      \"settleDate\": \"2018-03-20T09:12:13Z\",\n      \"tradeDate\": \"2018-03-20T09:12:13Z\"\n    },\n    \"positions\": [\n      {\n        \"conid\": 459200101,\n        \"quantity\": 10,\n        \"tradingInstrumentDescription\": {\n          \"assetType\": \"STK\",\n          \"securityId\": \"459200101\",\n          \"securityIdType\": \"ISIN\"\n        }\n      }\n    ]\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer with internal broker details - accountIdAtCurrentBroker and accountTitle
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v2/external-asset-transfers', [
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
    "currency": "USD",
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
    "positions": [
      {
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": {
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        }
      }
    ]
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
    "currency": "USD",
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
    "positions": [
      [
        "conid": 459200101,
        "quantity": 10,
        "tradingInstrumentDescription": [
          "assetType": "STK",
          "securityId": "459200101",
          "securityIdType": "ISIN"
        ]
      ]
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v2/external-asset-transfers")! as URL,
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
