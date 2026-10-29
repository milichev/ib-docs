[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/create-internal-asset-transfers)

# Transfer Positions Internally

POST https://localhost:5000/gw/api/v1/internal-asset-transfers
Content-Type: application/json

Transfer positions internally between two accounts with Interactive Brokers**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/create-internal-asset-transfers

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
  - Allowed values: `INTERNAL_POSITION_TRANSFER`
- `instruction` (InternalPositionTransferInstruction, required) — Request to transfer a position between two Interactive Brokers accounts.

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

### InternalPositionTransferInstruction

Request to transfer a position between two Interactive Brokers accounts.

- `clientInstructionId` (double, required) — Client-assigned identifier for this instruction; must be a positive number and unique within the request.
- `sourceAccountId` (string, required) — Interactive Brokers account the asset is transferred from.
- `targetAccountId` (string, required) — Interactive Brokers account the asset is transferred to.
- `transferQuantity` (double, required) — Quantity of the instrument to transfer.
- `tradingInstrument` (TradingInstrumentRef, required) — Identifies a security by contract id or by security id and asset type.
- `transferPrice` (double, optional) — If transferPrice is provided then tradeDate and settleDate are also required
- `tradeDate` (string, optional) — If tradeDate is provided then settleDate is also required
- `settleDate` (string, optional) — If settleDate is provided then tradeDate is also required

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

### TradingInstrumentRef

Identifies a security by contract id or by security id and asset type.

- TradingInstrumentRef0
- TradingInstrumentRef1

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

### TradingInstrumentRef0

- `conid` (double, required) — Interactive Brokers contract identifier of the instrument.

### TradingInstrumentRef1

- `tradingInstrumentDescription` (TradingInstrumentRefOneOf1TradingInstrumentDescription, required) — Instrument identified by security id and asset type (used when no contract id is supplied).

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

### TradingInstrumentRefOneOf1TradingInstrumentDescription

Instrument identified by security id and asset type (used when no contract id is supplied).

- `securityIdType` (enum, required) — Type of the security identifier (CUSIP, ISIN, or CASH).
  - Allowed values: `CUSIP`, `ISIN`, `CASH`
- `securityId` (string, required) — Security identifier value.
- `assetType` (enum, required) — Asset class of the instrument.
  - Allowed values: `STK`, `CASH`, `UNKNOWN`, `BILL`, `BOND`, `FUND`, `OPT`, `WAR`

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

### Response

**Response**

```json
{
  "status": 202,
  "instructionSetId": 2614,
  "instructionResult": {
    "clientInstructionId": 7008152,
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Response
import requests

url = "https://localhost:5000/gw/api/v1/internal-asset-transfers"

headers = {"Authorization": "Bearer <token>"}

response = requests.post(url, headers=headers)

print(response.json())
```

```go Response
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/internal-asset-transfers"

	req, _ := http.NewRequest("POST", url, nil)

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

url = URI("https://localhost:5000/gw/api/v1/internal-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php Response
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/internal-asset-transfers', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift Response
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/internal-asset-transfers")! as URL,
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

### Internal Position Transfer - using Trading Instrument

**Request**

```json
{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013044,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
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
  "instructionSetId": 2614,
  "instructionResult": {
    "clientInstructionId": 7008152,
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Internal Position Transfer - using Trading Instrument
import requests

url = "https://localhost:5000/gw/api/v1/internal-asset-transfers"

payload = {
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instruction": {
        "clientInstructionId": 7013044,
        "sourceAccountId": "U399192",
        "targetAccountId": "U87440",
        "transferQuantity": 6,
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
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Internal Position Transfer - using Trading Instrument
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/internal-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013044,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}")

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

```ruby Internal Position Transfer - using Trading Instrument
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/internal-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013044,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 459200101,\n      \"currency\": \"USD\",\n      \"tradingInstrumentDescription\": {\n        \"assetType\": \"STK\",\n        \"securityId\": \"459200101\",\n        \"securityIdType\": \"ISIN\"\n      }\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Internal Position Transfer - using Trading Instrument
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/internal-asset-transfers', [
  'body' => '{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013044,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
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

```swift Internal Position Transfer - using Trading Instrument
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": [
    "clientInstructionId": 7013044,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
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

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/internal-asset-transfers")! as URL,
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

### Internal Position Transfer - using contractID (conid)

**Request**

```json
{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": {
      "conid": 21323,
      "currency": "USD"
    }
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
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Internal Position Transfer - using contractID (conid)
import requests

url = "https://localhost:5000/gw/api/v1/internal-asset-transfers"

payload = {
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instruction": {
        "clientInstructionId": 7013043,
        "sourceAccountId": "U399192",
        "targetAccountId": "U87440",
        "transferQuantity": 6,
        "tradingInstrument": {
            "conid": 21323,
            "currency": "USD"
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

```go Internal Position Transfer - using contractID (conid)
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/internal-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013043,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 21323,\n      \"currency\": \"USD\"\n    }\n  }\n}")

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

```ruby Internal Position Transfer - using contractID (conid)
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/internal-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013043,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 21323,\n      \"currency\": \"USD\"\n    }\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Internal Position Transfer - using contractID (conid)
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/internal-asset-transfers', [
  'body' => '{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": {
      "conid": 21323,
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

```swift Internal Position Transfer - using contractID (conid)
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": [
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": [
      "conid": 21323,
      "currency": "USD"
    ]
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/internal-asset-transfers")! as URL,
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

### Internal Position Transfer - with Optional fields

**Request**

```json
{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": {
      "conid": 21323,
      "currency": "USD"
    },
    "transferPrice": 100.3456789,
    "tradeDate": "2025-02-17",
    "settleDate": "2025-02-25"
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
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instructionStatus": "PENDING",
    "instructionId": 43092590
  }
}
```

**SDK Code**

```python Internal Position Transfer - with Optional fields
import requests

url = "https://localhost:5000/gw/api/v1/internal-asset-transfers"

payload = {
    "instructionType": "INTERNAL_POSITION_TRANSFER",
    "instruction": {
        "clientInstructionId": 7013043,
        "sourceAccountId": "U399192",
        "targetAccountId": "U87440",
        "transferQuantity": 6,
        "tradingInstrument": {
            "conid": 21323,
            "currency": "USD"
        },
        "transferPrice": 100.3456789,
        "tradeDate": "2025-02-17",
        "settleDate": "2025-02-25"
    }
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```go Internal Position Transfer - with Optional fields
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/internal-asset-transfers"

	payload := strings.NewReader("{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013043,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 21323,\n      \"currency\": \"USD\"\n    },\n    \"transferPrice\": 100.3456789,\n    \"tradeDate\": \"2025-02-17\",\n    \"settleDate\": \"2025-02-25\"\n  }\n}")

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

```ruby Internal Position Transfer - with Optional fields
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/internal-asset-transfers")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"INTERNAL_POSITION_TRANSFER\",\n  \"instruction\": {\n    \"clientInstructionId\": 7013043,\n    \"sourceAccountId\": \"U399192\",\n    \"targetAccountId\": \"U87440\",\n    \"transferQuantity\": 6,\n    \"tradingInstrument\": {\n      \"conid\": 21323,\n      \"currency\": \"USD\"\n    },\n    \"transferPrice\": 100.3456789,\n    \"tradeDate\": \"2025-02-17\",\n    \"settleDate\": \"2025-02-25\"\n  }\n}"

response = http.request(request)
puts response.read_body
```

```php Internal Position Transfer - with Optional fields
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/internal-asset-transfers', [
  'body' => '{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": {
      "conid": 21323,
      "currency": "USD"
    },
    "transferPrice": 100.3456789,
    "tradeDate": "2025-02-17",
    "settleDate": "2025-02-25"
  }
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```swift Internal Position Transfer - with Optional fields
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": [
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "transferQuantity": 6,
    "tradingInstrument": [
      "conid": 21323,
      "currency": "USD"
    ],
    "transferPrice": 100.3456789,
    "tradeDate": "2025-02-17",
    "settleDate": "2025-02-25"
  ]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/internal-asset-transfers")! as URL,
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
