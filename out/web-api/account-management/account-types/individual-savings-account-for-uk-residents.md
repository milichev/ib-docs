[source](https://www.interactivebrokers.com/docs/web-api/account-management/account-types/individual-savings-account-for-uk-residents)

# Individual Savings Account For Uk Residents

IBKR provides UK clients with access to tax-advantaged accounts, including Individual Savings Accounts (ISA) and Junior Individual Savings Accounts (JISA). This section provides guidance on implementing ISA and JISA account creation via the API.

## ISA (Individual Savings Account)

### Account Coupling Requirements

IBKR enforces mandatory account coupling with ISA accounts. When an ISA application is submitted, IBKR automatically creates a General Investment Account (GIA) underneath the IB-UK master.

**Important:** Agreements for both GIA and ISA must be included within the `documents` section of the JSON application submitted to IBKR using the `/accounts` endpoint.

### ISA Restrictions

#### Trading Permissions

* **Stock Only** – No other asset types permitted

#### Margin Requirements

* **No Margin Trading** – Accounts must be configured as CASH

#### Identification Requirements

* **Tax Residency:** Must be GBR (United Kingdom)
* **National ID:** If "`issuingCountry":"GBR`", `nationalCard` is required

### ISA and GIA Coupling Details

#### Creation Method

* ISA can **only** be created using new origination (submitting application using `/accounts` endpoint)
* ISA **cannot** be added using `addAdditionalAcct`

#### Account Linking

* ISA and linked GIA will be associated with a single username and password
* Credentials for the GIA account will be included within the `ISASatelliteAccount` section of the response file
  * **Attribute:** `satelliteAccountId`

#### Multiple GIA Scenario

If a user maintains an existing GIA and requests an ISA:

* The user will now have **two GIA accounts**, each with a different username
* The GIA associated with ISA **cannot** be linked to the existing GIA
* Each GIA operates independently with separate credentials

#### Account Closure Rules

* The GIA associated with ISA **cannot** be closed independently of the ISA
* To close: Submit closure request for the ISA, and the linked GIA will automatically be closed
* If a closure request is submitted for the GIA linked to ISA, an **error will be thrown**

### Registration Tasks Assignment

Registration tasks are assigned at the applicant level:

#### Two Applicants Scenario

* **Applicant 1:** ISA with Linked GIA
* **Applicant 2:** Independent GIA

#### Single Applicant Scenario

Options include:

* GIA + Linked GIA (created using `addAdditionalAcct`)
* ISA with Linked GIA

### Technical Implementation

| **Object**                                                                                                                            | FD                                     | FA                                     |   |   |   |   |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------- | - | - | - | - |
| **[Account Holder(s)](../schema/associated-individual.md)**\*                                                   |                                        |                                        |   |   |   |   |
| email\*                                                                                                                               | Y                                      | Y                                      |   |   |   |   |
| name\* first, last                                                                                                                    | Y                                      | Y                                      |   |   |   |   |
| dateOfBirth                                                                                                                           | Y                                      | Y                                      |   |   |   |   |
| countryOfBirth                                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| numDependents                                                                                                                         | Y                                      | Y                                      |   |   |   |   |
| maritalStatus                                                                                                                         | Y                                      | Y                                      |   |   |   |   |
| identification  ID Document, citizenship                                                                                              | Y                                      | Y                                      |   |   |   |   |
| mailingAddress country\*, state, city, street1, postalCode                                                                            | Y                                      | Y                                      |   |   |   |   |
| residenceAddress  country\*, state, city, street1, postalCode                                                                         | Y                                      | Y                                      |   |   |   |   |
| phones  number, type- Mobile Required                                                                                                 | Y                                      | Y                                      |   |   |   |   |
| employmentType                                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| employmentDetails If EMPLOYED or SELFEMPLOYED: employer, occupation, employerBusiness, employerAddress                                | Y                                      | Y                                      |   |   |   |   |
| taxResidencies\* country and tin                                                                                                      | Y                                      | Y                                      |   |   |   |   |
| Tax Form  w8Ben, w9                                                                                                                   | Y                                      | Y                                      |   |   |   |   |
| IBKR Agreements and Disclosures                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| Proof of Address and Proof of ID Documents                                                                                            | Y (If Trulioo Verification is NoMatch) | Y (If Trulioo Verification is NoMatch) |   |   |   |   |
| **[Account Information](https://www.interactivebrokers.com/campus/ibkr-api-page/web-api-account-management/#customer-28)**            |                                        |                                        |   |   |   |   |
| financialInformation  netWorth, liquidNetWorth, annualNetIncome                                                                       | Y                                      | Y                                      |   |   |   |   |
| sourcesOfWealth                                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| investmentExperience yearsTrading, tradesPerYear, knowledgeLevel                                                                      | Y                                      | Y                                      |   |   |   |   |
| regulatoryInformation account holder or immediate family member controller, employee of a publicly traded company or a registered rep | Y                                      | Y                                      |   |   |   |   |
| accounts\* baseCurrency, margin                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| tradingPermissions\*                                                                                                                  | Y                                      | Y                                      |   |   |   |   |
| investmentObjectives                                                                                                                  | Y                                      | Y                                      |   |   |   |   |
| advisorWrapFees\*                                                                                                                     | N                                      | Y                                      |   |   |   |   |

#### Sample Applications

## ISA | GBR | Full Integration

```
{
  "application": {
    "customer": {
      "accountHolder": {
        "accountHolderDetails": [
          {
            "name": {
              "first": "Jane",
              "last": "Doe"
            },
            "dateOfBirth": "1995-04-28",
            "countryOfBirth": "GBR",
            "maritalStatus": "S",
            "numDependents": 0,
            "residenceAddress": {
              "street1": "1 Tester Lane",
              "city": "London",
              "state": "GB-ENG",
              "country": "GBR",
              "postalCode": "SW9 9NY"
            },
            "phones": [
              {
                "type": "Mobile",
                "number": "+4407584089999",
                "country": "GBR"
              }
            ],
            "email": "janedoe@tester.com",
            "identification": {
              "citizenship": "GBR",
              "nationalCard": "PA123456D",
              "issuingCountry": "GBR",
              "expire": false
            },
            "employmentType": "EMPLOYED",
            "employmentDetails": {
              "employer": "CHIPOTLE",
              "occupation": "EXECUTIVE",
              "employerBusiness": "FOOD AND BEVERAGE",
              "employerAddress": {
                "street1": "1 TESTER Square",
                "city": "London",
                "state": "GB-ENG",
                "country": "GBR",
                "postalCode": "W1G 0PW"
              }
            },
            "taxResidencies": [
              {
                "country": "GBR",
                "tin": "PA123456D",
                "tinType": "NonUS_NationalId"
              }
            ],
            "w8Ben": {
              "name": "Jane Doe",
              "foreignTaxId": "PA141807D",
              "tinOrExplanationRequired": true,
              "part29ACountry": "GBR",
              "cert": true,
              "blankForm": true,
              "taxFormFile": "Form5001.pdf",
              "electronicFormat": true
            },
            "externalId": "testapp1234",
            "sameMailAddress": true,
            "translated": false
          }
        ],
        "financialInformation": [
          {
            "investmentExperience": [
              {
                "assetClass": "STK",
                "yearsTrading": 5,
                "tradesPerYear": 4,
                "knowledgeLevel": "Extensive"
              },
              {
                "assetClass": "OPT",
                "yearsTrading": 5,
                "tradesPerYear": 4,
                "knowledgeLevel": "Extensive"
              }
            ],
            "sourcesOfWealth": [
              {
                "sourceType": "SOW-IND-Income",
                "percentage": 100,
                "usedForFunds": true
              }
            ],
            "netWorth": 500000,
            "liquidNetWorth": 500000,
            "annualNetIncome": 250000,
            "translated": false
          }
        ],
        "regulatoryInformation": [
          {
            "regulatoryDetail": [
              {
                "code": "ControlPubTraded",
                "status": false
              },
              {
                "code": "EmployeePubTrade",
                "status": false
              },
              {
                "code": "AFFILIATION",
                "status": false
              }
            ],
            "translated": false
          }
        ]
      },
      "externalId": "testapp1234",
      "type": "INDIVIDUAL",
      "prefix": "nvest",
      "email": "janedoe@tester.com",
      "mdStatusNonPro": true
    },
    "accounts": [
      {
        "investmentObjectives": [
          "Speculation"
        ],
        "tradingPermissions": [
          {
            "country": "ALL",
            "product": "STOCKS"
          }
        ],
        "advisorWrapFees": {
          "strategy": "NO_FEE"
        },
        "externalId": "testapp1234",
        "baseCurrency": "GBP",
        "multiCurrency": false,
        "margin": "Cash",
        "ira": true,
        "iraType": "ISA"
      }
    ],
    "users": [
      {
        "externalUserId": "testapp1234",
        "externalIndividualId": "testapp1234",
        "prefix": "nvest"
      }
    ],
    "documents": [
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form5001.pdf",
          "fileLength": 67700,
          "sha1Checksum": "D8AA699678D12DE6AC468A864D4FAE7999AA904B"
        },
        "formNumber": 5001,
        "validAddress": false,
        "execLoginTimestamp": 1731406668576,
        "execTimestamp": 1731406668576
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form2109.pdf",
          "fileLength": 15697,
          "sha1Checksum": "BF01D3C5B2B7BC6CA90A4051636051A828FD735F"
        },
        "formNumber": 2109,
        "validAddress": false,
        "execLoginTimestamp": 20240117041717,
        "execTimestamp": 20240117041717
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form3024.pdf",
          "fileLength": 67600,
          "sha1Checksum": "274FA053D7E4080F0AD429787B9F94ABDF5498D7"
        },
        "formNumber": 3024,
        "validAddress": false,
        "execLoginTimestamp": 20150716015642,
        "execTimestamp": 20150716152843
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form4319.pdf",
          "fileLength": 472704,
          "sha1Checksum": "485e44e6bc1e969ee1888fbf12bc957d7d41a182"
        },
        "formNumber": 4319,
        "validAddress": false,
        "execLoginTimestamp": 1731406668576,
        "execTimestamp": 1731406668576
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form4376.pdf",
          "fileLength": 118429,
          "sha1Checksum": "67D8506963789C3A2DA7B68F134D8F3F2515AFBC"
        },
        "formNumber": 4376,
        "validAddress": false,
        "execLoginTimestamp": 1731406668576,
        "execTimestamp": 1731406668576
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form4547.pdf",
          "fileLength": 409788,
          "sha1Checksum": "C7A601FD4C746EFC8767FCE886B03782A5C89A1C"
        },
        "formNumber": 4547,
        "validAddress": false,
        "execLoginTimestamp": 1731406668576,
        "execTimestamp": 1731406668576
      },
      {
        "signedBy": [
          "Jane Doe"
        ],
        "attachedFile": {
          "fileName": "Form4548.pdf",
          "fileLength": 416100,
          "sha1Checksum": "5FFF4BFEDD2F75A63EF493BB9F6ADEA63EBAF2A6"
        },
        "formNumber": 4548,
        "validAddress": false,
        "execLoginTimestamp": 1731406668576,
        "execTimestamp": 1731406668576
      }
    ],
    "translation": false
  }
}
```

## ISA | GBR | Hybrid- All Info

```
{
  "application": {
    "customer": {
      "accountHolder": {
        "accountHolderDetails": [
          {
            "name": {
              "first": "Jane",
              "last": "Doe"
            },
            "dateOfBirth": "1995-04-28",
            "countryOfBirth": "GBR",
            "maritalStatus": "S",
            "numDependents": 0,
            "residenceAddress": {
              "street1": "1 Tester Lane",
              "city": "London",
              "state": "GB-ENG",
              "country": "GBR",
              "postalCode": "SW9 9NY"
            },
            "phones": [
              {
                "type": "Mobile",
                "number": "+4407584089999",
                "country": "GBR"
              }
            ],
            "email": "janedoe@tester.com",
            "identification": {
              "citizenship": "GBR",
              "nationalCard": "PA123456D",
              "issuingCountry": "GBR",
              "expire": false
            },
            "employmentType": "EMPLOYED",
            "employmentDetails": {
              "employer": "CHIPOTLE",
              "occupation": "EXECUTIVE",
              "employerBusiness": "FOOD AND BEVERAGE",
              "employerAddress": {
                "street1": "1 TESTER Square",
                "city": "London",
                "state": "GB-ENG",
                "country": "GBR",
                "postalCode": "W1G 0PW"
              }
            },
            "taxResidencies": [
              {
                "country": "GBR",
                "tin": "PA123456D",
                "tinType": "NonUS_NationalId"
              }
            ],
            "w8Ben": {
              "name": "Jane Doe",
              "foreignTaxId": "PA141807D",
              "tinOrExplanationRequired": true,
              "part29ACountry": "GBR",
              "cert": true,
              "blankForm": true,
              "taxFormFile": "Form5001.pdf",
              "electronicFormat": true
            },
            "externalId": "testapp1234",
            "sameMailAddress": true,
            "translated": false
          }
        ],
        "financialInformation": [
          {
            "investmentExperience": [
              {
                "assetClass": "STK",
                "yearsTrading": 5,
                "tradesPerYear": 4,
                "knowledgeLevel": "Extensive"
              },
              {
                "assetClass": "OPT",
                "yearsTrading": 5,
                "tradesPerYear": 4,
                "knowledgeLevel": "Extensive"
              }
            ],
            "sourcesOfWealth": [
              {
                "sourceType": "SOW-IND-Income",
                "percentage": 100,
                "usedForFunds": true
              }
            ],
            "netWorth": 500000,
            "liquidNetWorth": 500000,
            "annualNetIncome": 250000,
            "translated": false
          }
        ],
        "regulatoryInformation": [
          {
            "regulatoryDetail": [
              {
                "code": "ControlPubTraded",
                "status": false
              },
              {
                "code": "EmployeePubTrade",
                "status": false
              },
              {
                "code": "AFFILIATION",
                "status": false
              }
            ],
            "translated": false
          }
        ]
      },
      "externalId": "testapp1234",
      "type": "INDIVIDUAL",
      "prefix": "nvest",
      "email": "janedoe@tester.com",
      "mdStatusNonPro": true
    },
    "accounts": [
      {
        "investmentObjectives": [
          "Speculation"
        ],
        "tradingPermissions": [
          {
            "country": "ALL",
            "product": "STOCKS"
          }
        ],
        "advisorWrapFees": {
          "strategy": "NO_FEE"
        },
        "externalId": "testapp1234",
        "baseCurrency": "GBP",
        "multiCurrency": false,
        "margin": "Cash",
        "ira": true,
        "iraType": "ISA"
      }
    ],
    "users": [
      {
        "externalUserId": "testapp1234",
        "externalIndividualId": "testapp1234",
        "prefix": "nvest"
      }
    ],
    "translation": false
  }
}
```

---

## JISA (Junior Individual Savings Account)

Unlike ISA, JISA does **not** enforce account coupling with a GIA. However, JISA applications require two sets of contact information:

#### 1. Account Holder Details

* The `accountHolderDetails` section reflects the **Junior Contact (minor)** who owns the account

#### 2. Registered Contact

* The `associatedIndividual` section contains information about the individual overseeing or managing the account (parent/guardian)

### Technical Implementation

## Required fields for Junior ISA Accounts

| **Object**                                                                                                                            | FD                                     | FA                                     |   |   |   |   |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------- | - | - | - | - |
| **Junior Contact Information**                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| name\* first, last                                                                                                                    | Y                                      | Y                                      |   |   |   |   |
| residenceAddress  country\*, state, city, street1, postalCode                                                                         | Y                                      | Y                                      |   |   |   |   |
| mailingAddress  country\*, state, city, street1, postalCode                                                                           | Y                                      | Y                                      |   |   |   |   |
| dateOfBirth                                                                                                                           | Y                                      | Y                                      |   |   |   |   |
| countryOfBirth                                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| identification  ID Document, citizenship                                                                                              | Y                                      | Y                                      |   |   |   |   |
| taxResidencies\* country and tin                                                                                                      | Y                                      | Y                                      |   |   |   |   |
| sourcesOfWealth                                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| Tax Form  w8Ben                                                                                                                       |                                        |                                        |   |   |   |   |
| **Registered Contact**                                                                                                                |                                        |                                        |   |   |   |   |
| email\*                                                                                                                               | Y                                      | Y                                      |   |   |   |   |
| name\* first, last                                                                                                                    | Y                                      | Y                                      |   |   |   |   |
| dateOfBirth                                                                                                                           | Y                                      | Y                                      |   |   |   |   |
| countryOfBirth                                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| mailingAddress country\*, state, city, street1, postalCode                                                                            | Y                                      | Y                                      |   |   |   |   |
| residenceAddress  country\*, state, city, street1, postalCode                                                                         | Y                                      | Y                                      |   |   |   |   |
| identification  ID Document, citizenship                                                                                              |                                        |                                        |   |   |   |   |
| phones  number, type- Mobile Required                                                                                                 | Y                                      | Y                                      |   |   |   |   |
| employmentType                                                                                                                        | Y                                      | Y                                      |   |   |   |   |
| employmentDetails If EMPLOYED or SELFEMPLOYED: employer, occupation, employerBusiness, employerAddress                                | Y                                      | Y                                      |   |   |   |   |
| IBKR Agreements and Disclosures                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| Proof of Address and Proof of ID Documents                                                                                            | Y (If Trulioo Verification is NoMatch) | Y (If Trulioo Verification is NoMatch) |   |   |   |   |
| **[Account Information](https://www.interactivebrokers.com/campus/ibkr-api-page/web-api-account-management/#customer-28)**            |                                        |                                        |   |   |   |   |
| financialInformation  netWorth, liquidNetWorth, annualNetIncome                                                                       | Y                                      | Y                                      |   |   |   |   |
| investmentExperience yearsTrading, tradesPerYear, knowledgeLevel                                                                      | Y                                      | Y                                      |   |   |   |   |
| regulatoryInformation account holder or immediate family member controller, employee of a publicly traded company or a registered rep | Y                                      | Y                                      |   |   |   |   |
| accounts\* baseCurrency, margin                                                                                                       | Y                                      | Y                                      |   |   |   |   |
| tradingPermissions\*                                                                                                                  | Y                                      | Y                                      |   |   |   |   |
| investmentObjectives                                                                                                                  | Y                                      | Y                                      |   |   |   |   |
| advisorWrapFees\*                                                                                                                     | Y                                      | Y                                      |   |   |   |   |
| title code                                                                                                                            | Y                                      | Y                                      |   |   |   |   |

#### Sample Applications

## JISA | GBR | Full Integration

```
{
  "application": {
    "customer": {
      "accountHolder": {
        "accountHolderDetails": [
          {
            "name": {
              "first": "Junior",
              "last": "Contact"
            },
            "dateOfBirth": "2022-12-20",
            "countryOfBirth": "GBR",
            "residenceAddress": {
              "street1": "24 TESTER LANE",
              "city": "LONDON",
              "state": "GB-LND",
              "country": "GB",
              "postalCode": "BR2 9FR"
            },
            "identification": {
              "citizenship": "GBR",
              "nationalCard": "NB123456C",
              "issuingCountry": "GBR",
              "expire": false
            },
            "taxResidencies": [
              {
                "country": "GBR",
                "tin": "NB123456C",
                "tinType": "NonUS_NationalId"
              }
            ],
            "w8Ben": {
              "localTaxForms": [
                {
                  "taxAuthority": "CANADA_TA",
                  "qualified": true,
                  "treatyCountry": "GBR"
                },
                {
                  "taxAuthority": "AUSTRALIA_TA",
                  "qualified": true,
                  "treatyCountry": "GBR"
                }
              ],
              "name": "Junior Contact",
              "foreignTaxId": "NB400056C",
              "tinOrExplanationRequired": true,
              "part29ACountry": "GBR",
              "cert": true,
              "signatureType": "Electronic",
              "blankForm": true,
              "taxFormFile": "Form5001.pdf",
              "electronicFormat": true
            },
            "externalId": "tester123",
            "sameMailAddress": false,
            "titles": [
              {
                "code": "Account Holder"
              }
            ],
            "authorizedPerson": false
          }
        ],
        "associatedIndividual": {
          "name": {
            "first": "Registered",
            "last": "Contact"
          },
          "dateOfBirth": "1963-12-20",
          "countryOfBirth": "GBR",
          "residenceAddress": {
            "street1": "24 TESTER LANE",
            "city": "LONDON",
            "state": "GB-LND",
            "country": "GB",
            "postalCode": "BR2 9FR"
          },
          "phones": [
            {
              "type": "Mobile",
              "number": "447483849999",
              "country": "GBR",
              "verified": false
            }
          ],
          "email": "DAM41832012@aol.com",
          "identification": {
            "citizenship": "GBR",
            "nationalCard": "NB400056A",
            "issuingCountry": "GBR",
            "expire": false
          },
          "employmentType": "EMPLOYED",
          "employmentDetails": {
            "employer": "Crown Prosecution Service ",
            "occupation": "Other",
            "description": "CIVIL",
            "employerBusiness": "Community/Social Service",
            "employerAddress": {
              "country": "GBR"
            }
          },
          "externalId": "tester123_rc",
          "sameMailAddress": true,
          "titles": [
            {
              "code": "Registered Contact"
            }
          ],
          "authorizedPerson": false
        },
        "financialInformation": [
          {
            "investmentExperience": [
              {
                "assetClass": "STK",
                "yearsTrading": 11,
                "tradesPerYear": 27,
                "knowledgeLevel": "Extensive"
              }
            ],
            "sourcesOfWealth": [
              {
                "sourceType": "SOW-IND-Income",
                "percentage": 10,
                "usedForFunds": true
              },
              {
                "sourceType": "SOW-IND-Pension",
                "percentage": 90,
                "usedForFunds": true
              }
            ],
            "netWorth": 375000,
            "liquidNetWorth": 70000,
            "annualNetIncome": 41600,
            "translated": false
          }
        ],
        "regulatoryInformation": [
          {
            "regulatoryDetail": [
              {
                "code": "EmployeePubTrade",
                "status": false
              },
              {
                "code": "ControlPubTraded",
                "status": false
              },
              {
                "code": "AFFILIATION",
                "status": false
              }
            ],
            "translated": false
          }
        ]
      },
      "externalId": "tester123",
      "type": "INDIVIDUAL",
      "prefix": "skm",
      "email": "DAM41832012@aol.com",
      "mdStatusNonPro": false
    },
    "accounts": [
      {
        "investmentObjectives": [
          "Growth"
        ],
        "tradingPermissions": [
          {
            "exchangeGroup": "US-SEC"
          },
          {
            "exchangeGroup": "EURONEXT-FUND"
          }
        ],
        "externalId": "tester123",
        "baseCurrency": "GBP",
        "multiCurrency": true,
        "margin": "Cash",
        "ira": true,
        "iraType": "JISA",
        "drip": false
      }
    ],
    "users": [
      {
        "externalUserId": "tester123",
        "externalIndividualId": "tester123",
        "prefix": "skm"
      }
    ],
    "documents": [
      {
        "signedBy": [
          "Registered Contact"
        ],
        "attachedFile": {
          "fileName": "Form5001.pdf",
          "fileLength": 67700,
          "sha1Checksum": "d8aa699678d12de6ac468a864d4fae7999aa904b"
        },
        "formNumber": 5001,
        "validAddress": false,
        "execLoginTimestamp": 20250511201657
      },
      {
        "signedBy": [
          "Registered Contact"
        ],
        "attachedFile": {
          "fileName": "Form3083.pdf",
          "fileLength": 557790,
          "sha1Checksum": "9C79DB3DF0925D126541817F2BBC7418BBD3EC4E"
        },
        "formNumber": 3083,
        "validAddress": false,
        "execLoginTimestamp": 20250511201657
      },
      {
        "signedBy": [
          "Registered Contact"
        ],
        "attachedFile": {
          "fileName": "Form4070.pdf",
          "fileLength": 27117,
          "sha1Checksum": "3BF982D0D81F0F6B1BBD37E9789EE6585F46F8DC"
        },
        "formNumber": 4070,
        "validAddress": false,
        "execLoginTimestamp": 20250511201657
      },
      {
        "signedBy": [
          "Registered Contact"
        ],
        "attachedFile": {
          "fileName": "Form9130.pdf",
          "fileLength": 252630,
          "sha1Checksum": "3F6E0751854D0BB7717AB4E954D97EDF31FEE6EA"
        },
        "formNumber": 9130,
        "validAddress": false,
        "execLoginTimestamp": 20250511201657
      }
    ],
    "translation": false
  }
}
```

## JISA | GBR | Hybrid- All Info

```
{
  "application": {
    "customer": {
      "accountHolder": {
        "accountHolderDetails": [
          {
            "name": {
              "first": "Junior",
              "last": "Contact"
            },
            "dateOfBirth": "2022-12-20",
            "countryOfBirth": "GBR",
            "residenceAddress": {
              "street1": "24 TESTER LANE",
              "city": "LONDON",
              "state": "GB-LND",
              "country": "GB",
              "postalCode": "BR2 9FR"
            },
            "identification": {
              "citizenship": "GBR",
              "nationalCard": "NB123456C",
              "issuingCountry": "GBR",
              "expire": false
            },
            "taxResidencies": [
              {
                "country": "GBR",
                "tin": "NB123456C",
                "tinType": "NonUS_NationalId"
              }
            ],
            "w8Ben": {
              "localTaxForms": [
                {
                  "taxAuthority": "CANADA_TA",
                  "qualified": true,
                  "treatyCountry": "GBR"
                },
                {
                  "taxAuthority": "AUSTRALIA_TA",
                  "qualified": true,
                  "treatyCountry": "GBR"
                }
              ],
              "name": "Junior Contact",
              "foreignTaxId": "NB400056C",
              "tinOrExplanationRequired": true,
              "part29ACountry": "GBR",
              "cert": true,
              "signatureType": "Electronic",
              "blankForm": true,
              "taxFormFile": "Form5001.pdf",
              "electronicFormat": true
            },
            "externalId": "tester123",
            "sameMailAddress": false,
            "titles": [
              {
                "code": "Account Holder"
              }
            ],
            "authorizedPerson": false
          }
        ],
        "associatedIndividual": {
          "name": {
            "first": "Registered",
            "last": "Contact"
          },
          "dateOfBirth": "1963-12-20",
          "countryOfBirth": "GBR",
          "residenceAddress": {
            "street1": "24 TESTER LANE",
            "city": "LONDON",
            "state": "GB-LND",
            "country": "GB",
            "postalCode": "BR2 9FR"
          },
          "phones": [
            {
              "type": "Mobile",
              "number": "447483849999",
              "country": "GBR",
              "verified": false
            }
          ],
          "email": "DAM41832012@aol.com",
          "identification": {
            "citizenship": "GBR",
            "nationalCard": "NB400056A",
            "issuingCountry": "GBR",
            "expire": false
          },
          "employmentType": "EMPLOYED",
          "employmentDetails": {
            "employer": "Crown Prosecution Service ",
            "occupation": "Other",
            "description": "CIVIL",
            "employerBusiness": "Community/Social Service",
            "employerAddress": {
              "country": "GBR"
            }
          },
          "externalId": "tester123_rc",
          "sameMailAddress": true,
          "titles": [
            {
              "code": "Registered Contact"
            }
          ],
          "authorizedPerson": false
        },
        "financialInformation": [
          {
            "investmentExperience": [
              {
                "assetClass": "STK",
                "yearsTrading": 11,
                "tradesPerYear": 27,
                "knowledgeLevel": "Extensive"
              }
            ],
            "sourcesOfWealth": [
              {
                "sourceType": "SOW-IND-Income",
                "percentage": 10,
                "usedForFunds": true
              },
              {
                "sourceType": "SOW-IND-Pension",
                "percentage": 90,
                "usedForFunds": true
              }
            ],
            "netWorth": 375000,
            "liquidNetWorth": 70000,
            "annualNetIncome": 41600,
            "translated": false
          }
        ],
        "regulatoryInformation": [
          {
            "regulatoryDetail": [
              {
                "code": "EmployeePubTrade",
                "status": false
              },
              {
                "code": "ControlPubTraded",
                "status": false
              },
              {
                "code": "AFFILIATION",
                "status": false
              }
            ],
            "translated": false
          }
        ]
      },
      "externalId": "tester123",
      "type": "INDIVIDUAL",
      "prefix": "skm",
      "email": "DAM41832012@aol.com",
      "mdStatusNonPro": false
    },
    "accounts": [
      {
        "investmentObjectives": [
          "Growth"
        ],
        "tradingPermissions": [
          {
            "exchangeGroup": "US-SEC"
          },
          {
            "exchangeGroup": "EURONEXT-FUND"
          }
        ],
        "externalId": "tester123",
        "baseCurrency": "GBP",
        "multiCurrency": true,
        "margin": "Cash",
        "ira": true,
        "iraType": "JISA",
        "drip": false
      }
    ],
    "users": [
      {
        "externalUserId": "tester123",
        "externalIndividualId": "tester123",
        "prefix": "skm"
      }
    ],
       "translation": false
  }
}
```
