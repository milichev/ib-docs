[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-external-asset-transfers)

# Creates Multiple External Asset Transfers (Fop, DWAC And Complex Asset Transfer)

POST https://localhost:5000/gw/api/v1/external-asset-transfers:bulk
Content-Type: application/json

**Scope**: `transfers.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-banking/bulk-external-asset-transfers

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

### FOP

**Request**

```json
{
  "instructionType": "FOP",
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
  "instructionSetId": 1526,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 1526,
      "instructionResult": {
        "clientInstructionId": 12003434,
        "instructionType": "FOP",
        "instructionStatus": "PENDING",
        "instructionId": 11132295
      }
    },
    {
      "status": 202,
      "instructionSetId": 1526,
      "instructionResult": {
        "clientInstructionId": 12003435,
        "instructionType": "FOP",
        "instructionStatus": "PENDING",
        "instructionId": 11132296
      }
    },
    {
      "status": 202,
      "instructionSetId": 1526,
      "instructionResult": {
        "clientInstructionId": 12003436,
        "instructionType": "FOP",
        "instructionStatus": "PENDING",
        "instructionId": 11132297
      }
    }
  ]
}
```

**SDK Code**

```javascript FOP
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"FOP","instructions":["string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go FOP
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby FOP
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php FOP
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "FOP",
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

```swift FOP
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "FOP",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### DWAC

**Request**

```json
{
  "instructionType": "DWAC",
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
  "instructionSetId": 4498,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4498,
      "instructionResult": {
        "clientInstructionId": 7011115,
        "instructionType": "DWAC",
        "instructionStatus": "PENDING",
        "instructionId": 43096780
      }
    },
    {
      "status": 202,
      "instructionSetId": 4498,
      "instructionResult": {
        "clientInstructionId": 7011116,
        "instructionType": "DWAC",
        "instructionStatus": "PENDING",
        "instructionId": 43096781
      }
    }
  ]
}
```

**SDK Code**

```javascript DWAC
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DWAC","instructions":["string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go DWAC
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby DWAC
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php DWAC
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "DWAC",
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

```swift DWAC
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DWAC",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### External Position Transfer

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
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
  "instructionSetId": 4500,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4500,
      "instructionResult": {
        "clientInstructionId": 7011122,
        "instructionType": "EXTERNAL_POSITION_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096785
      }
    },
    {
      "status": 202,
      "instructionSetId": 4500,
      "instructionResult": {
        "clientInstructionId": 7011123,
        "instructionType": "EXTERNAL_POSITION_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096786
      }
    },
    {
      "status": 202,
      "instructionSetId": 4500,
      "instructionResult": {
        "clientInstructionId": 7011124,
        "instructionType": "EXTERNAL_POSITION_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096787
      }
    }
  ]
}
```

**SDK Code**

```javascript External Position Transfer
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"EXTERNAL_POSITION_TRANSFER","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go External Position Transfer
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby External Position Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php External Position Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
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

```swift External Position Transfer
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### Complex Asset Transfer

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
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
  "instructionSetId": 4502,
  "instructionResults": [
    {
      "status": 202,
      "instructionSetId": 4502,
      "instructionResult": {
        "clientInstructionId": 7011138,
        "instructionType": "COMPLEX_ASSET_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096791
      }
    },
    {
      "status": 202,
      "instructionSetId": 4502,
      "instructionResult": {
        "clientInstructionId": 7011139,
        "instructionType": "COMPLEX_ASSET_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096792
      }
    },
    {
      "status": 202,
      "instructionSetId": 4502,
      "instructionResult": {
        "clientInstructionId": 7011140,
        "instructionType": "COMPLEX_ASSET_TRANSFER",
        "instructionStatus": "PENDING",
        "instructionId": 43096793
      }
    }
  ]
}
```

**SDK Code**

```javascript Complex Asset Transfer
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"COMPLEX_ASSET_TRANSFER","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Complex Asset Transfer
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Complex Asset Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
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

```swift Complex Asset Transfer
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### FOP

**Request**

```json
{
  "instructionType": "FOP",
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
  "instructionSetId": 1527,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript FOP
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"FOP","instructions":["string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go FOP
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"FOP\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby FOP
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"FOP\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php FOP
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "FOP",
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

```swift FOP
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "FOP",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### DWAC

**Request**

```json
{
  "instructionType": "DWAC",
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
  "instructionSetId": 4499,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript DWAC
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"DWAC","instructions":["string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go DWAC
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"DWAC\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby DWAC
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"DWAC\",\n  \"instructions\": [\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php DWAC
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "DWAC",
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

```swift DWAC
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "DWAC",
  "instructions": ["string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### External Position Transfer

**Request**

```json
{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
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
  "instructionSetId": 4501,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript External Position Transfer
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"EXTERNAL_POSITION_TRANSFER","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go External Position Transfer
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby External Position Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"EXTERNAL_POSITION_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php External Position Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
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

```swift External Position Transfer
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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

### Complex Asset Transfer

**Request**

```json
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
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
  "instructionSetId": 4503,
  "instructionResults": [
    "string",
    "string",
    "string"
  ]
}
```

**SDK Code**

```javascript Complex Asset Transfer
const url = 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"instructionType":"COMPLEX_ASSET_TRANSFER","instructions":["string","string","string"]}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go Complex Asset Transfer
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk"

	payload := strings.NewReader("{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}")

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

```ruby Complex Asset Transfer
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"instructionType\": \"COMPLEX_ASSET_TRANSFER\",\n  \"instructions\": [\n    \"string\",\n    \"string\",\n    \"string\"\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```php Complex Asset Transfer
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/external-asset-transfers:bulk', [
  'body' => '{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
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

```swift Complex Asset Transfer
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instructions": ["string", "string", "string"]
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/external-asset-transfers:bulk")! as URL,
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
