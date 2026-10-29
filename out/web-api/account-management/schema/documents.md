[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/schema/documents)

# Documents

Include forms that are required for opening a brokerage account at IBKR. This includes any [agreements, disclosures](../client-registration/agreements-and-disclosures.md), Tax Form, and supplemental documents such as Proof of ID and Proof of Address documents.

Required forms will vary based on the account configuration and the account type.

* NonQI / OWD
  * Tax Form
  * Proof of Identity / Proof of Address if Trulioo is NoMatch.
* Fully-Disclosed / Advisor
  * Tax Form
  * Proof of Identity / Proof of Address if Trulioo is NoMatch.
  * Customer Type (Individual, Joint, IRA etc.)
  * Capabilities (Margin, Portfolio Margin)
  * Trade Permissions (United States Stocks, United States Options, etc.)
  * IBKR Entity the Account is associated with. (ie. IBLLC-US, IB-CAN, IB-UK, IB-IE etc.)

## Schema

| Name                 | Type                                                                                                                                                                                                                                                                                                           | Usage based on form_no       | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName             | String                                                                                                                                                                                                                                                                                                         | All                          | File name of the PDF document submitted to IBKR. `fileName` included within the `documents` request must match the `fileName` of the PDF file that is included within the signed request.  Acceptable formats: .jpeg, .jpg, .pdf, .png Max size: 10 MB                                                                                                                                                                          |
| fileLength           | String                                                                                                                                                                                                                                                                                                         | All                          | File length associated with document.                                                                                                                                                                                                                                                                                                                                                                                           |
| sha1Checksum         | String                                                                                                                                                                                                                                                                                                         | All                          | SHA-1 is crypto algorithm that is used to verify that a file has been unaltered. This is done by producing a checksum before the file has been transmitted, and then again once it reaches its destination.                                                                                                                                                                                                                     |
| formNumber           | String                                                                                                                                                                                                                                                                                                         | All                          | Use `/gw/api/v1/accounts/{accountId}/tasks` to view a list of forms that are required for approval.                                                                                                                                                                                                                                                                                                                             |
| execTimestamp        | YYYYMMDDHHMMSS                                                                                                                                                                                                                                                                                                 | All                          | Timestamp of the execution of the agreement by the customer (i.e. time the client signed the agreement).                                                                                                                                                                                                                                                                                                                        |
| execLoginTimestamp   | YYYYMMDDHHMMSS                                                                                                                                                                                                                                                                                                 | All                          | Login timestamp for the session (when the client logged in and acknowledged the agreement.                                                                                                                                                                                                                                                                                                                                      |
| signedBy             | String                                                                                                                                                                                                                                                                                                         | All                          | `signedBy` must match the submitted: name (`first + middle` initial (if applicable) + `last`). \*Data is case and space sensitive.                                                                                                                                                                                                                                                                                              |
| proofOfIdentityType  | **All Entities Except for IB-CAN** Driver License Passport Alien ID Card National ID Card  **IB-CAN only** Bank Statement Evidence of Ownership of Property Credit Card Statement Utility Bill Brokerage Statement T4 Statement CRA Assessment                                                                 | 8001 8205 8053 8057          | Description of document submitted to salsify proof of identity.                                                                                                                                                                                                                                                                                                                                                                 |
| proofOfAddressType   | Bank Statement Brokerage Statement Homeowner Insurance Policy Bill Homeowner Insurance Policy Document Renter Insurance Policy bill Renter Insurance Policy Document Security System Bill Government Issued Letters Utility Bill Current Lease Evidence of Ownership of Property Driver License Other Document | 8002 8001 8205 8053 8057     | Description of document submitted to salsify proof of address.                                                                                                                                                                                                                                                                                                                                                                  |
| validAddress         | true false                                                                                                                                                                                                                                                                                                     | 8001                         | If `Driver License` is provided as `proofOfIdentityType` AND `validAddress`=true, single document can be used to satisfy Proof of Identity and Proof of Address. ]                                                                                                                                                                                                                                                              |
| externalIndividualId | String                                                                                                                                                                                                                                                                                                         |                              | Identifier at the external entity for the individual executing the agreement. Must be an individual listed on the application. Ignored for INDIVIDUAL applications as agreements must be executed by the Account Holder. Required for JOINT accounts created via ECA for POI/POA submission. For the JOINT holder created via ECA, external id of the account holder needs to be provided for which POI/POA is being submitted. |
| expirationDate       | YYYY-MM-DD                                                                                                                                                                                                                                                                                                     | Drivers License OR  Passport | Provide expiration date of the ID document.                                                                                                                                                                                                                                                                                                                                                                                     |
| mimeType             | application/pdf application/pdf image/png  image/jpeg (Includes .jpeg, .jpg)                                                                                                                                                                                                                                   |                              | Format of the file.                                                                                                                                                                                                                                                                                                                                                                                                             |
| data                 | String                                                                                                                                                                                                                                                                                                         |                              | Includes document encoded in base64.                                                                                                                                                                                                                                                                                                                                                                                            |

## Example

```
"documents": [
{
"signedBy": [
"Jane M Doe"
],
"attachedFile": {
"fileName": "Form5002.pdf",
"fileLength": 119331,
"sha1Checksum": "06c13ef0c01e831c1b9f0c2c0550812a4c242b3a",
"payload": {
                         "mimeType": "application/pdf",
                         "data": "<DocumentEncodedInBase64>"         }

                   
},
"formNumber": 5002,
"isValidAddress": false,
"execLoginTimestamp": 20240307114436,
"execTimestamp": 20240307114436
},
{
"signedBy": [
"Jane M Doe"
],
"attachedFile": {
"fileName": "POIandPOA.pdf",

"fileLength": 170163,
"sha1Checksum": "76bd4f17da8c8ed0d9ff752b5ffc0a1e38c16bd1"
},
"formNumber": 8001,
"expirationDate": "2029-10-29",
"proofOfIdentityType": "Drivers License",
"isValidAddress": true,
"execLoginTimestamp": 20240307114436,
"execTimestamp": 20240307114436
} ],
```
