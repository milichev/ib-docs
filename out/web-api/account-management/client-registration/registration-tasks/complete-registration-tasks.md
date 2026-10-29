[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/client-registration/registration-tasks/complete-registration-tasks)

# Complete Registration Tasks

The **`[PATCH]`**[`/api/v1/accounts/`](../../../api-reference/account-management/account-management-accounts/update-accounts.md) can be used to complete registration tasks for an existing account.

## documentSubmission

Submit documents required by IBKR for account approval or for an account upgrade.

Service can be used to submit the following:

* IBKR agreements/disclosures
* KYC Documents including Proof of Identity, Proof of Address and Proof of Source of Wealth.
  * Only single document accepted per formNumber, if document has multiple sides or pages, consolidate into single file prior to submitting to IBKR.

### Schema

| Name                 | Type                                                                                                                                                                                                                                                                                                                                                                   | Usage based on form_no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| accountId            | String                                                                                                                                                                                                                                                                                                                                                                 | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | IBKR account ID of the advisor/broker client account documents are being submitted for.                                                                                                                                                                                                                                                                                                                                         |                                                                |
| fileName             | String                                                                                                                                                                                                                                                                                                                                                                 | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | File name of the PDF document submitted to IBKR. `fileName` included within the `documents` request must match the `fileName` of the PDF file that is included within the signed request.  Acceptable formats: .jpeg, .jpg, .pdf, .png Max size: 10 MB                                                                                                                                                                          |                                                                |
| sha1Checksum         | String                                                                                                                                                                                                                                                                                                                                                                 | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SHA-1 is crypto algorithm that is used to verify that a file has been unaltered. This is done by producing a checksum before the file has been transmitted, and then again once it reaches its destination.                                                                                                                                                                                                                     |                                                                |
| formNumber           | String                                                                                                                                                                                                                                                                                                                                                                 | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Use `/gw/api/v1/accounts/{accountId}/tasks` to view a list of forms that are required for approval.                                                                                                                                                                                                                                                                                                                             |                                                                |
| execTimestamp        | YYYYMMDDHHMMSS                                                                                                                                                                                                                                                                                                                                                         | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Timestamp of the execution of the agreement by the customer (i.e. time the client signed the agreement).                                                                                                                                                                                                                                                                                                                        |                                                                |
| execLoginTimestamp   | YYYYMMDDHHMMSS                                                                                                                                                                                                                                                                                                                                                         | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Login timestamp for the session (when the client logged in and acknowledged the agreement.                                                                                                                                                                                                                                                                                                                                      |                                                                |
| signedBy             | String                                                                                                                                                                                                                                                                                                                                                                 | All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `signedBy` must match the submitted: name (`first + middle` initial (if applicable) + `last`). \*Data is case and space sensitive.                                                                                                                                                                                                                                                                                              |                                                                |
| proofOfIdentityType  | **All Entities Except for IB-CAN** Driver License Passport Alien ID Card National ID Card **IB-CAN only** Bank Statement Evidence of Ownership of Property Credit Card Statement Utility Bill Brokerage Statement T4 Statement CRA Assessment                                                                                                                          | 8001 8205 8053 8057                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description of document submitted to salsify proof of identity.                                                                                                                                                                                                                                                                                                                                                                 |                                                                |
| proofOfAddressType   | Additional Proof of Identity Document Authorization to Open Account – Certification Authorization to Open Account – Evidence Bank Statement Brokerage Statement Certificate of Good Standing Certificate of Incorporation Certificate of Registration Certified Proof of Address Certified Proof of Identity Check Company Charter Company Ownership Corporate Charter | Articles of Incorporation Court- or Govt-issued document CRS card of Lombardy Current Lease Divorce Settlement Drivers License  Employer Confirmation Entitlement to Payments Evidence of Ownership of Property Financial Statement Formation Government-issued Business License Income Tax Return Italian Electronic ID Card – CIE Italian Health Card (Tessera Sanitaria) Letter National ID Ownership Passport Pay Slip Proof of Principal Place of Business and Registration Proof of Sale Proof of Winnings Severance Statement Tax Return Utility Bill Will | 8002 8001 8205 8053 8057                                                                                                                                                                                                                                                                                                                                                                                                        | Description of document submitted to salsify proof of address. |
| validAddress         | true false                                                                                                                                                                                                                                                                                                                                                             | 8001                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | If `Driver License` is provided as `proofOfIdentityType` AND `validAddress`=true, single document can be used to satisfy Proof of Identity and Proof of Address. ]                                                                                                                                                                                                                                                              |                                                                |
| documentType         | Check Company Ownership Divorce Settlement Employer Confirmation Entitlement to Payments Letter Ownership Pay Slip Proof of Sale Proof of Winnings Severance Tax Return Will Bank Statement Brokerage Statement Current Lease                                                                                                                                          | 8541 8542 8543 8544 8545 8546 8547 8548 8549                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Acceptable documents will vary based on the formNo.                                                                                                                                                                                                                                                                                                                                                                             |                                                                |
| externalIndividualId | String                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Identifier at the external entity for the individual executing the agreement. Must be an individual listed on the application. Ignored for INDIVIDUAL applications as agreements must be executed by the Account Holder. Required for JOINT accounts created via ECA for POI/POA submission. For the JOINT holder created via ECA, external id of the account holder needs to be provided for which POI/POA is being submitted. |                                                                |
| expirationDate       | YYYY-MM-DD                                                                                                                                                                                                                                                                                                                                                             | Drivers License OR Passport                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Provide expiration date of the ID document.                                                                                                                                                                                                                                                                                                                                                                                     |                                                                |
| mimeType             | application/pdf application/pdf image/png  image/jpeg (Includes .jpeg, .jpg)                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Format of the file.                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                |
| data                 | String                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Includes document encoded in base64.                                                                                                                                                                                                                                                                                                                                                                                            |                                                                |

### Validations

* Acceptable formats: .jpeg, .jpg, .pdf, .png
* Max upload size: 25 MB

#### Acceptable documentType based on formNumber

| formName                                                    | formNumber | documentType                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proof of Identity and Date of Birth                         | 8001       | Driver License Passport Alien ID Card National ID Card                                                                                                                                                                                                                                                         |
| Proof of Address                                            | 8002       | Bank Statement Brokerage Statement Homeowner Insurance Policy Bill Homeowner Insurance Policy Document Renter Insurance Policy bill Renter Insurance Policy Document Security System Bill Government Issued Letters Utility Bill Current Lease Evidence of Ownership of Property Driver License Other Document |
| Selfie Verification                                         | 8205       | The account holder will need to take a 'selfie' holding their Identity document.For ID Document we only accept National ID OR Passport.Driver's License/Alien card is not accepted.                                                                                                                            |
| Hong Kong Signature Verification                            | 8043       | [Form8043.pdf](https://ndcdyn.interactivebrokers.com/Universal/servlet/Registration_v2.formSampleView?formdb=8043\&preferredFormat=pdf)                                                                                                                                                                        |
| PROOF OF SOW-IND-Allowance                                  | 8541       | Bank Statement Pay Slip Employer Confirmation Divorce Settlement Company Ownership                                                                                                                                                                                                                             |
| PROOF OF SOW-IND-Disability                                 | 8542       | Bank Statement Entitlement to Payments Severance                                                                                                                                                                                                                                                               |
| PROOF OF SOW-IND-Income                                     | 8543       | Pay Slip Bank Statement Employer Confirmation                                                                                                                                                                                                                                                                  |
| PROOF OF SOW-IND-Inheritance                                | 8544       | Letter Bank Statement Check Will Brokerage Statement                                                                                                                                                                                                                                                           |
| PROOF OF SOW-IND-Interest                                   | 8545       | Brokerage  Statement Tax Return                                                                                                                                                                                                                                                                                |
| PROOF OF SOW-IND-MarketProfit                               | 8546       | Ownership Brokerage Statement Tax Return                                                                                                                                                                                                                                                                       |
| PROOF OF SOW-IND-Other                                      | 8547       | Proof of Winnings Bank Statement Tax Return Brokerage Statement                                                                                                                                                                                                                                                |
| PROOF OF SOW-IND-Pension                                    | 8548       | Bank Statement Pay Slip                                                                                                                                                                                                                                                                                        |
| PROOF OF SOW-IND-Property                                   | 8549       | Proof of Sale Current Lease                                                                                                                                                                                                                                                                                    |
| Proof of Existence                                          | 8003       | Certificate of Incorporation Formation Certificate of Registration Company Charter Certificate of Good Standing Government-issued Business License Corporate Charter Articles of Incorporation                                                                                                                 |
| Proof of Principal Place of Business Address                | 8004       | Statement Certified Proof of Identity Certified Proof of Address Income Tax Return Additional Proof of Identity Document Proof of Principal Place of Business and Registration Utility Bill Bank Statement Bank Statement Brokerage Statement Current Lease Evidence of Ownership of Property                  |
| Proof of Name Change                                        | 8039       | Court- or Govt-issued document Passport National ID Drivers License                                                                                                                                                                                                                                            |
| Proof of Change of Name                                     | 8040       | Court- or Govt-issued document                                                                                                                                                                                                                                                                                 |
| Proof of Citizenship                                        | 8138       | Passport National ID                                                                                                                                                                                                                                                                                           |
| Proof of Authorization to Open Account – Certification Task | 8175       | Authorization to Open Account – Certification                                                                                                                                                                                                                                                                  |
| Proof of Authorization to Open Account – Evidence Task      | 8176       | Authorization to Open Account – Evidence                                                                                                                                                                                                                                                                       |
| Proof of Tax Id                                             | 8360       | CRS card of Lombardy Italian Electronic ID Card – CIE Italian Health Card (Tessera Sanitaria)                                                                                                                                                                                                                  |
| Proof of Liquid Net Worth                                   | 9975       | Bank Statement Brokerage Statement Financial Statement                                                                                                                                                                                                                                                         |

### Example

```
PATCH /api/v1/accounts/

{"accountManagementRequests": {       
"documentSubmission": 
            {
                "documents": [
                    {
                        "signedBy": [
                            "Jane Doe"
                        ],
                        "attachedFile": {
                            "fileName": "ProofOfId.pdf",
                            "fileLength": 9508,
                            "sha1Checksum": "b6e3235d3d21dc999da2fa24c7009ad0815e7330"
                        },
                        "formNumber": 8001,
                        "validAddress": true,
                        "execLoginTimestamp": 20210929123113,
                        "execTimestamp": 20210929123113,
                        "proofOfIdentityType": "Drivers License",
                        "payload": {
                         "mimeType": "application/pdf",
                         "data": "<DocumentEncodedInBase64>"         }

                    }
                ],
                "accountId":"U123456,
                "inputLanguage": "en",
                "translation": false
            }
        
    }
```

## questionnaires

Complete questionnaire(s) for an existing account.

Service supports following questionnaires

* Due Diligence (EDD)
* Knowledge Assessment

The[/api/v1/enumerations/questionnaires?form-number=\<formNumber>](../../../api-reference/account-management/account-management-utilities/get-enumerations.md) can be used to retrieve list of questions associated questionnaire based on the `formNumber`. The endpoint indicates if processing of the task is supported using the API.

* IF `apiSupportedTask='true'` this indicates the task can be completed using the API.

* IF `apiSupportedTask='false'` this indicates the task will need to be completed within IBKR Portal by the master user **OR** end client.

### Schema

| Name       | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| accountId  | String | IBKR account ID of the advisor/broker client account documents are being requested for. |
| formNumber | String | Form number associated with the Questionnaire.                                          |
| detail     | String | Maximum of 350 Characters.                                                              |

### Example- Due Diligence

```
PATCH /api/v1/accounts/{
{
    "accountManagementRequests": {
        "questionnaires": {
            "accountId": "U123456",
            "questionnaire": [
                {
                    "formNumber": 9943,
                    "answers": [
                        {
                            "detail": "description",
                            "id": 2396,
                            "questionId": 1620
                        }
                    ]
                }
            ]
        }
    }
}
```

### Example- Knowledge Assessment

```
PATCH /api/v1/accounts/
{
"accountManagementRequests": {
"quizQuestionnaires": {
"questionnaire": [
{
"answers": [
{
"id": 4,
"questionId": 1
},
{
"id": 4,
"questionId": 2
},
{
"id": 4,
"questionId": 3
},
{
"id": 4,
"questionId": 4
},
{
"id": 4,
"questionId": 5
},
{
"id": 4,
"questionId": 6
},
{
"id": 4,
"questionId": 7
},
{
"id": 4,
"questionId": 8
},
{
"id": 4,
"questionId": 9
},
{
"id": 4,
"questionId": 10
}
],
"formNumber": 2430
},
{
"answers": [
{
"id": 4,
"questionId": 1
},
{
"id": 4,
"questionId": 2
},
{
"id": 4,
"questionId": 3
},
{
"id": 4,
"questionId": 4
},
{
"id": 4,
"questionId": 5
},
{
"id": 4,
"questionId": 6
},
{
"id": 4,
"questionId": 7
},
{
"id": 4,
"questionId": 8
},
{
"id": 4,
"questionId": 9
},
{
"id": 4,
"questionId": 10
}
],
"formNumber": 2438
},
{
"answers": [
{
"id": 4,
"questionId": 1
},
{
"id": 4,
"questionId": 2
},
{
"id": 4,
"questionId": 3
},
{
"id": 4,
"questionId": 4
},
{
"id": 4,
"questionId": 5
},
{
"id": 4,
"questionId": 6
},
{
"id": 4,
"questionId": 7
},
{
"id": 4,
"questionId": 8
},
{
"id": 4,
"questionId": 9
},
{
"id": 4,
"questionId": 10
}
],
"formNumber": 2432
}
],
"accountId": "U1111111",
"task": [
{
"formNumber": 2431,
"status": false
},
{
"formNumber": 2439,
"status": false
},
{
"formNumber": 2433,
"status": false
}
]
}
}
}
```

## prohibitedCountryQuestionnaire

Complete Prohibited Country Questionnaire.

* If `citizenship, citizenship2, citizenship3` or `countryOfBirth` is prohibited country then `prohibitedCountryQuestionnaire` (`formNumber` 3442) will be assigned to the account.
* List of Prohibited Countries can be obtained using `/api/v1/enumerations/prohibited-country` endpoint.

### Schema

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId  | String                                                                       | IBKR account ID of the client account which `prohibitedCountryQuestionnaire` is being submitted for.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| code       | PASSPORT CITIZENSHIP BUSINESSDEALINGS FINANCIALACCOUNTS RESIDENT MULTI BIRTH | **PASSPORT**: Do you currently hold a passport from a Prohibited Country?  **CITIZENSHIP**: Do you currently hold a citizenship from a Prohibited Country?  **BUSINESSDEALINGS**: Do you currently have business dealings in a Prohibited Country?  **FINANCIALACCOUNTS**: Do you currently have financial accounts in a Prohibited Country?  **RESIDENT**: Do you currently have plans to reside in a Prohibited Country?  **MULTI**: Do you hold citizenship and/or residency status in multiple countries  **BIRTH**: Were you born in any of the following countries \<Prohibited Country> |
| externalId | String                                                                       | `externalID` associated with the account holder. This should be the same `externalID` that was included in the request to create the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| status     | true false                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| details    | string                                                                       | Required if status="true"; provide a description.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Example

**PATCH /gw/api/v1/accounts**

```
{
  "accountManagementRequests": {
    "prohibitedCountryQuestionnaire": {
      "accountId": "accountId",
      "entityId": "247519520",
      "prohibitedQuestionnaireDetails": [
        {
          "code": "PASSPORT",
          "details": "Do you hold passport for the following countries"
        },
        {
          "code": "BIRTH",
          "details": "Were you born in the following countries"
        },
        {
          "code": "CITIZENSHIP",
          "details": "Do you hold citizenship in the following countries"
        },
        {
          "code": "BUSINESSDEALINGS",
          "details": "Do you have business dealings in the following countries"
        },
        {
          "code": "FINANCIALACCOUNTS",
          "details": "Do you have financial accounts in the following countries"
        },
        {
          "code": "RESIDENT",
          "details": "Do you plan to reside in the following countries"
        },
        {
          "code": "MULTI",
          "details": "Do you hold citizenship and/or residency details in multiple countries"
        }
      ]
    }
  }
}
```
