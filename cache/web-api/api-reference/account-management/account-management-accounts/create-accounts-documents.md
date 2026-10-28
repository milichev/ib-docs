> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Submit General Agreements And Disclosures

POST https://localhost:5000/gw/api/v1/accounts/documents
Content-Type: application/json

Provides mechanism to submit Agreements and Disclosures to IBKR once a day instead of with each application. We store these documents on the servers and will use them for new application requests submitted that day.Documents will need to be submitted once a day (before the Applications are submitted). PDFs will be displayed and submitted as is- no changes/edits will be made to the actual PDF files.This end-point will not process any Tax Form Documents. Tax Form document should be submitted with every applicationIf submitted in the morning, you only need to include the Tax Form attachment for each applicant. Otherwise, you will need to include PDFs with each application (Create Account).**Scope**: `accounts.write`**Security Policy**: `Signed JWT`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/create-accounts-documents

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Body (application/json)

This endpoint expects a ProcessDocumentsPayload.

- `processDocuments` (ProcessDocuments, optional)

## Response

### 200

Submit standard agreements and disclosures

- `requestId` (long, optional)
- `problemDetail` (map from string to StatusResponseProblemDetail, optional)
- `dateSubmitted` (datetime, optional)
- `fileData` (FileData, optional)

## Errors

### 400 Bad Request Error

Returns error description representing bad request

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 401 Unauthorized Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 403 Forbidden Error

Returns error description representing access issue

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

### 422 Unprocessable Entity Error

Request was rejected by the system due to a business rule or validation error.

- `requestId` (long, optional)
- `problemDetail` (map from string to StatusResponseProblemDetail, optional)
- `dateSubmitted` (datetime, optional)
- `fileData` (FileData, optional)

### 500 Internal Server Error

Returns error description representing internal server error

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

## Types

### ProcessDocuments

- `documents` (list of Document, optional)
- `inputLanguage` (enum, optional)
  - Allowed values: `en`, `zh-Hans`, `ja`, `ru`, `fr`, `pt`, `es`, `it`, `ar-AE`, `de`, `he-IL`, `hu`
- `translation` (boolean, optional)

### StatusResponseProblemDetail

### FileData

- `data` (FileDataData, optional)
- `name` (string, optional)

### Document

- `attachedFile` (AttachedFileType, required)
- `formNumber` (long, required) — Form number of the pendingTask OR Document submitted.
- `execLoginTimestamp` (long, required) — Login timestamp for the session (when the client logged in and acknowledged the agreement).
- `execTimestamp` (long, required) — Timestamp of the execution of the agreement by the customer (i.e. the time that the client signed the agreement).
- `signedBy` (list of string, optional) — signedBy must match the submitted: name (first + middle initial (if applicable) + last).\*Data is case and space sensitive.Object is required if submitting documents for the following endpoints: Client Registration: \[POST]: [https://api.ibkr.com/gw/api/v1/accounts](https://api.ibkr.com/gw/api/v1/accounts)Updating Account Information: \[PATCH] [https://api.ibkr.com/gw/api/v1/account](https://api.ibkr.com/gw/api/v1/account)
- `validAddress` (boolean, optional) — If Driver License is provided as proofOfIdentityType AND validAddress=true, single document can be used to satisfy Proof of Identity and Proof of Address.
- `documentType` (enum, optional) — Acceptable documents will vary based on the formNumber.
  - Allowed values: `Check`, `Company Ownership`, `Divorce Settlement`, `Employer Confirmation`, `Entitlement to Payments`, `Letter`, `Ownership`, `Pay Slip`, `Proof of Sale`, `Proof of Winnings`, `Severance`, `Tax Return`, `Will`, `Bank Statement`, `Brokerage Statement`, `Current Lease`, `Financial Statement`, `Certificate of Incorporation/Formation`, `Certificate of Registratios`, `Company Charter`, `Certificate of Good Standing`, `Government-issued Business License`, `Corporate Charter`, `Articles of Incorporation`, `Bank Passbook/Statement`, `Certified Proof of Identity`, `Certified Proof of Address`, `Income Tax Return`, `Additional Proof of Identity Document`, `Proof of Principal Place of Business and Registration`, `Utility Bill`, `Evidence of Ownership of Property`, `Authorization to Open Account - Evidence`, `Authorization to Open Account - Certification`, `Italian Health Card (Tessera Sanitaria)`, `CRS card of Lombardy`, `Italian Electronic ID Card - CIE`, `Court- or Govt-issued document`, `Copy of Passport, National Id or Driver's License`, `Passport`, `National ID`
- `signature` (string, optional)
- `externalAccountId` (string, optional)
- `externalIndividualId` (string, optional) — Identifier at the external entity for the individual executing the agreement. Must be an individual listed on the application. Ignored for INDIVIDUAL applications as the agreements must be executed by the Account Holder. Required for JOINT accounts created via ECA for POI and POA submission. For the JOINT holder created via ECA, external id of the account holder needs to be provided for which POI/POA is being submitted.
- `proofOfIdentityType` (enum, optional) — Description of document submitted to satisfy Proof of Identity.
  - Allowed values: `Driver License`, `Passport`, `Alien ID Card`, `National ID Card`, `Bank Statement`, `Evidence of Ownership of Property`, `Credit Card Statement`, `Utility Bill`, `Brokerage Statement`, `T4 Statement`, `CRA Assessment`, `Hong Kong and Macao Entry Permit`
- `expirationDate` (date, optional) — Expiration date of the ID Document.
- `proofOfAddressType` (enum, optional) — Description of document submitted to satisfy Proof of Address.
  - Allowed values: `Driver License`, `Bank Statement`, `Brokerage Statement`, `Homeowner Insurance Policy Bill`, `Homeowner Insurance Policy Document`, `Renter Insurance Policy bill`, `Renter Insurance Policy Document`, `Security System Bill`, `Government Issued Letters`, `Utility Bill`, `Current Lease`, `Evidence of Ownership of Property`, `Other Document`
- `payload` (FilePayload, optional)

### FileDataData

### AttachedFileType

- `fileName` (string, required) — File name of the PDF document submitted to IBKR. fileName included within the documents request must match the fileName of the PDF file that is included within the signed request. • Acceptable Formats: .jpeg, .jpg, .pdf, .png • Max size: 10 MB
- `fileLength` (long, required) — Length of the PDF form
- `sha1Checksum` (string, required) — SHA-1 is crypto algorithm that is used to verify that a file has been unaltered. This is done by producing a checksum before the file has been transmitted, and then once it reaches it's destination.

### FilePayload

- `mimeType` (string, required) — Format of the file.
- `data` (string, required) — Includes document encoded in base64.

## Examples

**Request**

```json
{}
```

**Response**

```json
{
  "requestId": 1,
  "dateSubmitted": "2024-01-15T09:30:00Z",
  "fileData": {
    "data": {},
    "name": "string"
  }
}
```

**SDK Code**

```python
import requests

url = "https://localhost:5000/gw/api/v1/accounts/documents"

payload = {}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())
```

```javascript
const url = 'https://localhost:5000/gw/api/v1/accounts/documents';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/accounts/documents"

	payload := strings.NewReader("{}")

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

```ruby
require 'uri'
require 'net/http'

url = URI("https://localhost:5000/gw/api/v1/accounts/documents")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

HttpResponse<String> response = Unirest.post("https://localhost:5000/gw/api/v1/accounts/documents")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://localhost:5000/gw/api/v1/accounts/documents', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp
using RestSharp;

var client = new RestClient("https://localhost:5000/gw/api/v1/accounts/documents");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/accounts/documents")! as URL,
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