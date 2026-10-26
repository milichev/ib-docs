[source](https://www.interactivebrokers.com/docs/web-api/api-reference/account-management/account-management-utilities/get-enumerations)

# Get Enumerations

GET https://localhost:5000/gw/api/v1/enumerations/{enumerationType}

Used to query list of enumerations for attributes included within extPositionsTransfers, occupation, employerBusiness, financialInformation, affiliationDetails, tradingPermissions, etc.**Scope**: `accounts.read` OR `enumerations.read`**Security Policy**: `HTTPS`

Reference: https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-utilities/get-enumerations

## Authentication

- `Authorization` header (bearer token, required) — RS256-signed JWT access token signed with your registered private key.

## Servers

- `https://localhost:5000` (Client Portal Gateway, default)
- `https://api.ibkr.com` (Production)
- `https://qa.interactivebrokers.com` (Sandbox)

## Request

### Path parameters

- `enumeration` (enum, required) — exchange-bundles - query most up to date list of exchange-bundles for tradingPermissionsbusiness-and-occupation - list of occupation and employerBusiness for employmentDetailsemployee-track - query most up to date companyId for account. For affiliation details, if company has an existing IBKR Employee Track accountfin-info-ranges - query most up to date range IDs by currency for annualNetIncome, netWorth, liquidNetWorthacats - query most up to date values for brokerId and brokerName. Used if funding via US ACATS extPositionsTransfersaton - query most up to date values for brokerId and brokerName. Used if funding via US ACATS extPositionsTransfersmarket-data - query most up to date values for brokerId and brokerName. Used if funding via ATON Canada extPositionsTransfersedd-avt - query questions associated with EDD (Enhanced Due Diligence) or AVT (Additional Verification) tasks assigned to an accountprohibited-country - view list of prohibited countries. Applicants that reside in prohibited country are restricted from opening an account with IBKR. Error will be thrown IF legalResidenceCountry, OR country (included within Residence, mailingAddress and employerAddress, taxResidency node) is a prohibited countryemployee-plans - view EPA that are linked to master account (applicable IF offering SEP IRA accounts)questionnaires - obtain list of questionnairessecurity-questions - obtain list of questions supported for IBKR security questionsquiz-questions - obtain list of questions associated with IBKR knowledge assessmentwire-instructions - obtain list of wire instructionsproduct-country-bundles - obtain list of product country bundlescountries - obtain list of countriesstates - obtain list of statesidentification - obtain catalog of required ID documents by country (including MiFIR rules). Pass type=mifir and one or more citizenship params to instead obtain the MiFIR-required ID document(s) for the given citizenship(s)
  - Allowed values: `exchange-bundles`, `business-and-occupation`, `employee-track`, `fin-info-ranges`, `acats`, `aton`, `market-data`, `edd-avt`, `prohibited-country`, `employee-plans`, `questionnaires`, `security-questions`, `quiz-questions`, `wire-instructions`, `product-country-bundles`, `countries`, `states`, `identification`
- `enumerationType` (string, required)

### Query parameters

- `currency` (string, optional)
- `ibEntity` (string, optional)
- `mdStatusNonPro` (string, optional)
- `form-number` (string, optional)
- `language` (enum, optional)
  - Allowed values: `en`, `ar`, `de`, `es`, `fr`, `he`, `hu`, `it`, `ja`, `nl`, `pt`, `ru`, `zh_CN`, `zh_TW`
- `accountId` (string, optional)
- `userName` (string, optional)
- `type` (string, optional)
- `citizenship` (list of string, optional)

## Response

### 200

Get enumerations

- `enumerationsType` (string, optional)
- `formNumber` (string, optional)
- `jsonData` (ArrayNode, optional)

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

### 500 Internal Server Error

Returns error description representing internal server error

- `type` (string, optional)
- `title` (string, optional)
- `status` (long, optional)
- `detail` (string, optional)
- `instance` (string, optional)

## Types

### ArrayNode

## Examples

**Response**

```json
{
  "enumerationsType": "string",
  "formNumber": "string",
  "jsonData": {}
}
```

**SDK Code**

```javascript
const url = 'https://localhost:5000/gw/api/v1/enumerations/enumerationType';
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

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
	"net/http"
	"io"
)

func main() {

	url := "https://localhost:5000/gw/api/v1/enumerations/enumerationType"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

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

url = URI("https://localhost:5000/gw/api/v1/enumerations/enumerationType")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```php
<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://localhost:5000/gw/api/v1/enumerations/enumerationType', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://localhost:5000/gw/api/v1/enumerations/enumerationType")! as URL,
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
