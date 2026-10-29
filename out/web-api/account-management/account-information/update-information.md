[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/account-information/update-information)

# Update Information

The **`[PATCH]`**[`/api/v1/accounts/`](../../api-reference/account-management/account-management-accounts/update-accounts.md) can be used to manage user-level and account-level settings.

* Changes applied at the user level will be applied to all accounts associated with the user.
* Updates are only supported for accounts that are opened.
* Alternatively, information changes can be initiated within the [IBKR Portal](https://www.ibkrguides.com/clientportal/am_settings.htm).

#### User

MIFIR data pertains to transaction reporting requirements for investment firms operating within European Economic Area (EEA) and the UK. As a client of an Investment Firm that uses the IBKR platform, you may be required to provide additional information to allow the proper transaction reports to be filed.

For more information refer to this [link](https://www.ibkrguides.com/kb/mifir-transaction-reporting.htm)

## Schema

| Name           | Type                                                                       | Description                                                                                                                          |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| accountId      | String                                                                     | IBKR account ID of the advisor/broker client account which request is being submitted for.                                           |
| title          | ACCOUNT HOLDER FIRST HOLDER SECOND HOLDER                                  | Individual Account Type title will always be "ACCOUNT HOLDER"   Joint Account Type. title will be one of: FIRST HOLDER SECOND HOLDER |
| identification | [Identification](../schema/associated-individual.md) | `identification` node included in XML request should match `identification` node that was included in Account Opening Request        |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "addMiFirData": {
            "accountId": "U12345",
            "title": "ACCOUNT HOLDER",
            "identifications": [
                {
                    "citizenship": "Liechtenstein",
                    "passport": "A11111",
                    "alienCard": "AlienCard",
                    "expire": false
                }
            ]
        }
    }
}
```

* Within the body of the request, provide updated information for the individual. If the information included within the `newAccountHolderDetails` node does not match with what IBKR has on file, the information will be updated.
  * If multiple requests are submitted for single account; the new request will override the existing pending request.
  * When submitting request to update account information, either **`id`** OR `externalId` will be required.
* For Dual Language applications, details in both Native and Translated are required.
* `changeAccountHolderDetails` requests are only supported for Individual AND Joint accounts that are open OR Pending/New application IF 9974 is assigned. If request is submitted for Pending/New application and 9974 is not assigned, the request will not be accepted.
  * If account information needs to be updated for a Pending/New account, a new application with the updated information will need to be submitted.
    * To avoid duplicate accounts, please use `abandonAccount` to delete the existing application with incorrect data.
    * When submitting a new application, a new unique external ID will need to be included. To submit a new application using the original external ID, ([updateExternalId](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts/post)) for the existing account.
    * Once updated, your team can resubmit the application for the applicant using the original external ID that was used to create the original account.
      * New IBKR account ID will be generated once the application has been resubmitted.
        * You cannot resubmit application for an externalid that had already been processed unless the externalId has been delinked (updateExternalId) from the original account.

## Schema

| Name                    | Type                                                                                                | Description                                                                                                                                                                                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId               | String                                                                                              | IBKR account ID associated with the individual. If user has multiple accounts and `accountId`, information will only be updated for the `accountId`.                                                                                                                      |
| referenceUserName       | String                                                                                              | Username associated with the individual. If user has multiple accounts and `referenceUserName` is provided, data will be updated across all accounts.                                                                                                                     |
| inputLanguage           |                                                                                                     |                                                                                                                                                                                                                                                                           |
| translation             |                                                                                                     |                                                                                                                                                                                                                                                                           |
| id                      | String                                                                                              | The **`id`** is a unique id which IBKR assigns to each individual that is associated with account. The **`id`** can be used as alternative to `externalId`. The **`id`** can be obtained by calling `GET /api/v1/accounts/{{accountId}}/details`.                         |
| externalId              | String                                                                                              | `externalId` associated with the individual. associated with the user. The `externalId` can be obtained from \<Entities> section of response file for account creation. If there are multiple individuals on an account, each individual will have a unique `externalId`. |
| newAccountHolderDetails | Array of objects ([AssociatedIndividual](../schema/associated-individual.md)) | Provide applicant data to be updated within the `newAccountHolderDetails`. node.                                                                                                                                                                                          |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "changeAccountHolderDetail": {
            "newAccountHolderDetails": [
                {
                    "id": "172032379",
                    "name": {
                        "salutation": "Ms.",
                        "first": "Jane",
                        "last": "Smith"
                    },
                    "referenceUserName": "joesm123",
                    "inputLanguage": "en",
                    "translation": false
                }
            ]
        }
    }
}
```

* Market data subscriptions are terminated if you have not logged into IBKR trading platform for 60 days.
* More information on market data can be found [here](https://www.ibkrguides.com/brokerportal/usersettings/marketdatasubscriptions.htm).

## Schema

| Name              | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| referenceUserName | String                                                | User name associated with the account. If you do not have the IBKR user name associated with the account, use [/getAccountDetail](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts~1%7BaccountId%7D~1details/get) to query user name based on account ID. |
| service           | Use `/enumerations/market-data` to obtain service ID. | Market data service ID the user is requesting subscription to.                                                                                                                                                                                                                                                                                     |
| action            | ADD REMOVE                                            | Set action to ADD or REMOVE the market data subscription.                                                                                                                                                                                                                                                                                          |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "manageMarketDataSubscriptions": {
      "service": [
        460,
        462
      ],
      "referenceUserName": "test12345"
    }
  }
}
```

## Schema

| Name              | Type       | Description                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| referenceUserName | String     | User name associated with the account. If you do not have the IBKR user name associated with the account, use [/detail](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts~1%7BaccountId%7D~1details/get) to query user name based on account ID. |
| email             | String     | New email address                                                                                                                                                                                                                                                                                                                        |
| hasAccess         | true false | Indicate if the user has access to the current email address. If the user does not have access to the current email address, the user cannot update the email address using DAM.                                                                                                                                                         |
| token             | String     | Confirmation `token` sent by IBKR to applicant via email.                                                                                                                                                                                                                                                                                |

### Processing

#### Non-Disclosed Clients: Email address will be updated immediately.

## Example

```
PATCH /gw/api/v1/accounts

"accountManagementRequests": {
    "updateCredentials": [
        {
            "referenceUserName": "ctest9751",
            "updateEmail": {
             "email": "newemail@gmail.com", 
            "access": true
            }
        }
    ]
  }
}
```

#### Fully-Disclosed and Advisor: User will need to retrieve email confirmation token.

**Step 1**: Send request to update Email

## Example

```
PATCH /gw/api/v1/accounts

"accountManagementRequests": {
    "updateCredentials": [
        {
            "referenceUserName": "ctest9751",
            "updateEmail": {
             "email": "newemail@gmail.com", 
            "access": true
            }
        }
    ]
  }
}
```

**Step 2:** Upon submitting request to update email, confirmation token for current email address

* IBKR will send confirmation token to users current email address.
* Counterparty instructs user to check email for confirmation token.
* Counterparty sends confirmation token to IBKR

## Example

```
PATCH /gw/api/v1/accounts

"accountManagementRequests": {
    "updateCredentials": [
        {
            "referenceUserName": "ctest9751",
            "updateEmail": {
             "email": "abqa@ibkr.com",
             "token": "12345",                
            "access": true
            }
        }
    ]
  }
}
```

**Step 3:** Confirmation token for new email address

* IBKR will send confirmation token to users new email address.
* Counterparty instructs user to check email for confirmation token.
* Counterparty sends confirmation token to IBKR
* Email address is updated successfully

## Example

```
PATCH /gw/api/v1/accounts

"accountManagementRequests": {
    "updateCredentials": [
        {
            "referenceUserName": "ctest9751",
            "updateEmail": {
             "email": "abqa@ibkr.com",
             "token": "12345",                
            "access": true
            }
        }
    ]
  }
}
```

* Error will be triggered if any of the following conditions are met
  * Request is submitted for ND-NonQI, FA, or FD sub account.
  * Effective date is missing or is not the current date (ie. Future or Past Date).

## Schema

| Name               | Type                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId          | String                                                              | IBKR account ID of the advisor/broker client account which request is being submitted for.                                                                                                                                                                                                                                                                                                                                                                                                           |
| effectiveDate      | YYYY-MM-DD                                                          | `effectivedate` of withholding statement. Current or future date.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| certW8Imy          | true false                                                          | Confirm that consistent with the IRS, Form W-8IMY you provided, you certify you are qualified intermediary and have not assumed primary withholding responsibilities under Chapter 3 and 4 and have not assumed primary 1099 reporting and backup withholding responsibility on this account. You have assumed Form 1042 reporting to your customer This account is part of withholding statement for your Form W-8IMY. We wil request a W9 from those customers who you indicate are tax residents. |
| fatcaCompliantType | FATCA_COMPLIANT  NON_CONSENTING_US_ACCOUNT  NON_COOPERATIVE_ACCOUNT | Indicate if the Account Holder is FATCA compliant account                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| treatyCountry      | [3 Digit ISO Code](https://www.iso.org/obp/ui)                      | If the account holder qualifies for treaty benefits under US income tax treaty, please identify treaty.  >N/A is acceptable if account holder does not qualify for treaty benefits.  >[Treaty Countries with United States](https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z)                                                                                                                                                                        |
| usIncomeTax        | true false                                                          | Indicate if the owner of this account is a US Income Tax Resident.                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "updateWithholdingStatement": 
        {
            "accountId": "U12345",
            "treatyCountry": "CHN",
            "fatcaCompliantType": "FATCA_COMPLIANT",
            "effectiveDate": "2020-01-02",
            "certW8Imy": true,
            "usIncomeTax": true
        }
    
  }
}
```

* `w8Ben`: US Treasury and IRS require IBKR to request new tax identification form from non-US Persons every 3 years IF tax treaty country (`part29ACountry` in `w8Ben`) is set.
  * The account holder must provide IBKR with a new tax form (Form 5001).Electronic Signature and Requirements for form submission are the same as account opening.Re-certification of this form ensures that account holder will be treated as non-US person for tax purposes.Failure to provide updated tax form by expiration date will result in account being subject to US Tax withholding at 30% on interest, dividends, payments in lieu and royalty. In addition, 28% US Tax withholding will apply to all gross proceeds from sales.If no tax treaty is set (`part29ACountry` ="N/A"), the `w8Ben`does not expire.
* Certain `changeAccountHolderDetail`requests require user to submit a new tax form reflecting the updated information. The tax form can be submitted via Web API or via IBKR Hosted Portal.
  * Profile changes which require user to submit a new tax form:
    * `name (first, last)`
    * `citizenship`
    * `residenceAddress`
    * `mailingAddress`
    * `taxResidency country`
    * `/gw/api/v1/accounts/{accountId}/login-messages` can be used to view login messages assigned to a specific account.

## Schema

| Name                                                      | Type                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId                                                 | String                                                                                                                                                                                                                                                       | IBKR account ID of the advisor/broker client account which request is being submitted for.                                                                                                                                                                                                                                                                     |
| externalId                                                | String                                                                                                                                                                                                                                                       | `externalId` associated with the individual.                                                                                                                                                                                                                                                                                                                   |
| entityId                                                  | String                                                                                                                                                                                                                                                       | Unique ID associated with the individual. ID can be obtained from \<Entities> section of response file for [create](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts/post).   If there are multiple individuals on an account, each individual will have a unique id. |
| \<TaxForm>                                                | [w8Ben](../schema/associated-individual.md#w8ben) (Non-US)  [localTaxForms](../schema/associated-individual.md#localtaxforms) OR  [w9](../schema/associated-individual.md#w9) (US Clients) | Enter new tax form details. Validations for this section mimic same validations that are applied when including tax form for client registration.                                                                                                                                                                                                              |
| [documents](../schema/documents.md) |                                                                                                                                                                                                                                                              | Include document details associated with the tax form. Validations for this section mimic same validations that are applied when including tax form for client registration                                                                                                                                                                                    |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "updateTaxForm": {
            "accountId": "U12345",
            "entityId": "123456",
            "externalId": "Test12346",
            "documents": {
                "formNumber": "5001",
                "execTimestamp": "20161221123500",
                "execLoginTimestamp": "20161221123500",
                "signedBy": "John Doe",
                "attachedFile": {
                    "fileName": "Form5001.pdf",
                    "fileLength": "67700",
                    "sha1Checksum": "D8AA699678D12DE6AC468A864D4FAE7999AA904B"
                },
                "w8Ben": {
                    "name": "John Doe",
                    "explanation": "TIN_NOT_REQUIRED",
                    "part29ACountry": "CAN",
                    "cert": true,
                    "blankForm": true,
                    "taxFormFile": "Form5001.pdf",
                    "proprietaryFormNumber": "5001"
                }
            }
        }
    }
}
```

#### Account

Currently only LITE/PRO designation is supported. Requests submitted prior to 3pm EST are processed around 5pm EST. Requests submitted after 3pm EST are processed following business day at 5pm EST.

* Users may switch between LITE and PRO up to three times within any 90-day period. Requests exceeding this limit will be rejected and subject to a 90-day processing delay.
  * **Limit Exceeded Response:** Request cannot be processed. You have exceeded the limit of three subscription changes per 90-day period. Please wait 90 days from your first change request before resubmitting.
  * **Important Note:**
    * Declined requests must be resubmitted after the 90-day period expires

## Schema

| Name      | Type          | Description                                                                                |
| --------- | ------------- | ------------------------------------------------------------------------------------------ |
| accountId | String        | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| value     | true false    | true: Enable service false: Disable Service                                                |
| type      | LiteExecution | Configuration type                                                                         |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "accountConfiguration" : 
            {
                "accountId" : "U12345",
                "type" : "LiteExecution",
                "value" : "true"
            }   
        
    }
}
```

* Individual/Joint/IRA accounts with a net worth of at least \$1,000,000 are identified as an Accredited Investor.
* Accredited Investors can update their investor category to Qualified Purchaser or Eligible Contract Participant within IBKR Portal IF their `netWorth` > 5M USD or equivalent.

[More Information](https://www.ibkrguides.com/advisorportal/investorcategory.htm?cid=67cc40e3-b273-47c2-abe3-bb0abed6f201)

## Schema

| Code                        | Usage                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId                   | String                                         | IBKR account ID of the advisor/broker client account which the Investor Category is being changed for.                                                                                                                                                                                                                                                                                                     |
| signedBy                    | String                                         | Signature of the Account Holder. `signedBy` should be First Name + Middle Initial (If Applicable) + Last Name + Suffix (If Applicable). Data is case and case sensitive.                                                                                                                                                                                                                                   |
| status                      | true false                                     | true= Yes Fales = No                                                                                                                                                                                                                                                                                                                                                                                       |
| accreditedInvestor          | Required                                       | The answers you provided in your account application indicate that you are qualified as an accredited Investor (as defined in Rule 501(a) of Regulation D of the Securities Act of 1933).                                                                                                                                                                                                                  |
| qualifiedPurchaser          | Optional                                       | qualifiedPurchaser: You may be qualified as a Qualified Purchaser (as defined in Section 2(a)(51) of the Investment Company Act of 1940), which would allow you to participate in certain special programs.   Would you like to answer a few questions so Interactive Brokers can determine if you may qualify as an ECP? YES/NO                                                                           |
| investmentCompanyAct        | Required if qualifiedPurchaser=true            | Are you a natural person who owns at least \$5,000,000 in investments (as defined in Rule 2a51-1 under the Investment Company Act of 1940)?YES/NO                                                                                                                                                                                                                                                          |
| discretionaryBasis          | Required if qualifiedPurchaser=true            | Are you a natural person who is acting for his own account or the accounts of other qualified purchasers and who in the aggregate owns and invests on a `discretionaryBasis` at least \$25,000,000 in investments? YES/NO                                                                                                                                                                                  |
| eligibleContractParticipant | Optional                                       | Eligible Contract Participant United States regulations impose restrictions on customers who are not Eligible Contract Participants (ECPs) (as defined in Section 1a(12) of the Commodity Exchange Act), which may limit your trading. Click here to learn more about the benefits of being an ECP.   The answers you provided in your account application indicate that you may qualify as an ECP. YES/NO |
| discretionaryBasis          | Required if EligibleContractParticipant = True | Are you an individual, acting for your own account, who has more than \$10,000,000 invested on a discretionary basis? YES/NO                                                                                                                                                                                                                                                                               |
| highRisk                    | Required if discretionaryBasis= False          | Are you an individual, acting for your own account, who has invested more than \$5,000,000 on a discretionary basis and your transaction activity is intended to hedge the risk of other assets you have (or that you are reasonably likely to have)? YES/NO                                                                                                                                               |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "accreditedInvestor": 
        {
            "accountId": "U12345",
            "status": true,
            "signedBy": 
                "Test Test"
            
"qualifiedPurchaser": {
                "status": true,
                "qualifiedPurchaserDetails": 
                    {
                        "code": "InvestmentCompanyAct",
                        "status": true
                    },
                    {
                        "code": "DiscretionaryBasis",
                        "status": true
                    }
             
            },
            "eligibleContractParticipant": {
                "status": true,
                "eligibleContractParticipantDetails": [
                    {
                        "code": "HighRisk",
                        "status": true
                    },
                    {
                        "code": "DiscretionaryBasis",
                        "status": false
                    }
                
            }
        }
    
  }
}
```

* Add CLP (Complex Leverage Product) capabilities to an existing account.

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example for Non-Disclosed

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "addCLPCapability" : 
            {
                "accountId" : "U12345"
            }   
        
    }
}
```

## Example for Fully-Disclosed and Advisor

#### Validations for Fully-Disclosed and Advisor-Clients

1. The account holder must be presented with the required form AND sign the required form before the counterparty submits the request to IBKR.
   * 4155: Risk Disclosure for Complex or Leveraged Exch-Traded Products
2. Eligibility is validated against users age, Investment Experience, and Financial Information.
3. For Fully-Disclosed clients; the account holder must have a minimum of two years trading experience with stocks AND either options or futures.

**Futures**

* 1 year, 1-10 Trades per year
  * This will not validate
  * Because client has less than two years trading Futures, client must take Futures Exam
* 2 years, 1-10 Trades per year
  * This will validate if Knowledge level is Good or Extensive
  * Will not validate if Knowledge Level is Limited

**Options**

* 1 year, 1-10 Trades per year
  * This will not validate
  * Because client has less than two years trading Options, client must take Options Exam
* 2 years, 1-10 Trades per year
  * This will validate if Knowledge level is Good or Extensive
  * Will not validate if Knowledge Level is Limited

By default, all clients have access to currency conversion. Leveraged FX allows you to trade currency pairs with leverage. With leveraged FX, you are able to trade larger position sizes with a smaller amount of margin. Leveraged FX trading to eligible clients.

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "addLevFxCapability" : 
            {
                "accountId" : "U12345"
            }   
        
    }
}
```

Add trading permissions to an opened account.

**Processing Time:**

* New Regions: Trade Permissions for new regions are effective immediately

* New Products: New Products take 1-2 business day to be processed and reviewed by our compliance team.

## Schema

| Name                  | Type                                                                                                  | Description                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| addTradingPermissions | Array of Objects [tradingPermissions](../schema/accounts.md#tradingpermissions) | Trading permissions which are being requested.                                             |
| accountId             | String                                                                                                | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example For Non-Disclosed

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "addTradingPermissions": 
            {
                "tradingPermissions": [
                    {
                        "country": "BELGIUM",
                        "product": "STOCKS"
                    }
                ],
                    "accountId": "U1234",
            }
        
    }
}
```

## Example For Fully-Disclosed and Advisor

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "addTradingPermissions": 
            {
                "tradingPermissions": [
                    {
                        "country": "BELGIUM",
                        "product": "STOCKS"
                    }
                ],
                "documentSubmission": {
                    "documents": [],
                    "accountId": "U1234",
                    "inputLanguage": "en",
                    "translation": false
                },
                    "accountId": "U1234",
            }
        
    }
}
```

Disclaimer: For Fully-Disclosed and Advisor-Clients

* If the exchange_group requires a form, the request to AddTradePermissions must be initiated by the client.

* The account holder must be presented with the required form AND sign the required form before the counterparty submits the request to IBKR.

* If the trading bundle does not require a form, you can submit to IBKR directly as the client does not need to sign a disclosure.

* For broker clients, fee changes submitted before 17:00 ET are processed on the same day and will take effect starting from midnight on the following business day.

* For advisor-clients, if the fee is increased or fee type is changed, the client will need to verify/acknowledge the fee increase directly in Account Management/Client Portal.
  * Fee templates acknowledged by the client prior to 5:45PM ET will be processed on the same day.
  * Fee templates acknowledged by the client after 5:45PM ET will be processed on the following business day.
  * If the fee is decreased, the fee will be automatically processed (no client acknowledgement is needed).

## Schema

| Name         | Type   | Description                                                                                                                                                                                                                                                                                                   |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| templateName | String | Name of the fee template being applied. Data is case and space sensitive. The `templateName` must match the name of the template which was previously created in the advisor/broker portal. [Details](https://www.ibkrguides.com/advisorportal/homemenu/configclientfeetemplate.htm?Highlight=fee%20template) |
| accountId    | String | IBKR account ID of the advisor/broker client account which request is being submitted for.                                                                                                                                                                                                                    |

## Example

```
PATCH /gw/api/v1/accounts
 {
  "accountManagementRequests": {
   "applyFeeTemplate": {
      "accountId": "U10032411",
      "templateName": "FeePerTradeUnit100"
    }
  }
}
```

Update the base currency for an opened account. Base currency requests will not be effective until the following business day.

## Schema

| Name              | Type                                                                                                                                   | Description                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| accountId         | String                                                                                                                                 | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| new_base_currency | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | New base currency for the account.                                                         |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "changeBaseCurrency": {
            "accountId": "U12345",
            "newBaseCurrency": "USD"
        }
    }
}
```

* Used to update and increase Investment Experience, Investment Objectives, and/or Financial Information for existing accounts.
  * The service cannot be used to downgrade the knowledge level.
* **Processing Time**
  * Fully-Disclosed and Advisor Clients: Takes 1-2 business day to be processed and reviewed by our compliance team.

## Schema

| Name                    | Type                                                                                                                                                                                                                                                               | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| accountId               | String                                                                                                                                                                                                                                                             | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| newFinancialInformation | Array of objects [financialInformation  investmentExperience](../schema/accounts.md) [investmentObjectives](../schema/accounts.md#investmentobjectives) [sourcesOfWealth](../schema/accounts.md) | Provide updated information.                                                               |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
    "changeFinancialInformation": [
        {
          "accountId": "U12345",
          "newFinancialInformation": {
            "investmentExperience": [
              {
                "assetClass": "BILL",
                "yearsTrading": 2,
                "tradesPerYear": 5,
                "knowledgeLevel": "Extensive"
              }
            ],
            "investmentObjectives": [
              "Trading",
              "Growth",
              "Speculation",
              "Hedging",
              "Preservation",
              "Income"
            ],
            "additionalSourcesOfIncome": [
                {
                    "sourceType": "CONSULTING",
                    "percentage": 4,
                    "description": "from Spouse"
                },
                {
                    "sourceType": "INHERITANCE",
                    "percentage": 10,
                    "description": "father property"
                }
            ],
            "sourcesOfWealth": [
                {
                    "sourceType": "SOW-IND-Allowance",
                    "percentage": 25,
                    "usedForFunds": false,
                    "description": "Allowance from spouse"
                },
                {
                    "sourceType": "SOW-IND-Disability",
                    "percentage": 50,
                    "usedForFunds": false,
                    "description": "Allowance from spouse"
                },
                {
                    "sourceType": "SOW-IND-Inheritance",
                    "percentage": 23,
                    "usedForFunds": true,
                    "description": "Allowance from spouse"
                }
            ],
            "netWorth": 1700000,
            "liquidNetWorth": 120000,
            "annualNetIncome": 210000,
            "totalAssets": 173000,
            "sourceOfFunds": "string",
            "translated": false
          }
        }
      ]
    }
}
```

Upgrade margin capabilities for an existing account.

* Cash accounts can upgrade to a Margin account.

* To upgrade to a Portfolio Margin account, you must be approved to trade options and your account must have at least USD 110,000 (or USD equivalent) in Net Liquidation Value.

* **Processing Time**
  * Upgrade requests can take 1-2 business day to be processed and reviewed by our compliance team.

## Schema

| Name      | Type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountId | String                                    | IBKR account ID of the advisor/broker client account which request is being submitted for.                                                                                                                                                                                                                                                                                                          |
| newMargin | RegT REGT PortfolioMargin PORTFOLIOMARGIN | **Portfolio Margin:** Risk Based Model and can offer anywhere from a 6:1 leverage for a diverse portfolio; and down to a 3:1 leverage for a more concentrated portfolio.   Minimum Equity: $100,000  If the account falls below $100,000 the account will be in close only mode.   **RegT:** Rule based margin and offers 4:1 leverage intraday and 2:1 leverage overnight. Minimum Equity: \$2,000 |

## Example For Non-Disclosed

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "changeMarginType": {
            "accountId": "U12345",
            "newMargin": "Margin"
        }
    }
}
```

## Example for Fully-Disclosed and Advisor Clients

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "changeMarginType": {
            "documentSubmission": {
                "documents": [
                    "signedBy": "John Smith",
                    "validAddress": true,
                    "execTimestamp": 10,
                    "documentType": "Certified Proof of Address",
                    "expirationDate": "2033-11-22"
                ],
                "accountId": "U12345",
                "inputLanguage": "en",
                "translation": false
            },
            "accountId": "U12345",
            "newMargin": "xMargin"
        }
    }
}
```

Disclaimer: For Fully-Disclosed and Advisor-Clients

* The account holder must be presented with the required form AND sign the required form before the counterparty submits the request to IBKR.

Dividend reinvestment (DRIP) is an option where you can elect how you wish to receive your dividends for stocks and mutual funds. Dividend Reinvestment is available to IB LLC, IB AU, IB CAN, IB HK, IB IE, IB JP, IB SG and IB UK clients only.

Information on DRIP can be found [here](https://www.ibkrguides.com/clientportal/dividendreinvestment.htm).

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests":{
        "enrollInDrip":{
            "accountId": "U12345",
        }
    }
}
```

Disclaimer: For Fully-Disclosed and Advisor-Clients

* The account holder must be presented with the required form AND sign the required form before the counterparty submits the request to IBKR.

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests":{
        "leaveDrip":{
            "accountId": "U12345",
        }
    }
}
```

* **Processing Time**
  * Requests submitted prior to 5pm EST will be processed same day.
  * Requests submitted after 5pm EST will be processed the following business day.
  * Users must wait 90 days from previous unenrollment date before re-enrolling.

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests":{
        "enrollInSyep":{
            "accountId": "U12345",
        }
    }
}
```

* **Processing Time**
  * Requests submitted prior to 5pm EST will be processed same day.
  * Requests submitted after 5pm EST will be processed the following business day.
  * Users must wait 90 days from previous unenrollment date before re-enrolling.

## Schema

| Name      | Type   | Description                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests":{
        "leaveSyep":{
            "accountId": "U12345",
        }
    }
}
```

* **Processing Time**
  * Requests submitted prior to 5pm EST will be processed same day.
  * Requests submitted after 5pm EST will be processed the following business day.

## Schema

| Name              | Type                                                                                                  | Description                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| tradingPermission | Array of Objects [tradingPermissions](../schema/accounts.md#tradingpermissions) | Trading permissions to be removed.                                                         |
| accountId         | String                                                                                                | IBKR account ID of the advisor/broker client account which request is being submitted for. |

## Example

```
PATCH /gw/api/v1/accounts
{
    "accountManagementRequests": {
        "removeTradingPermissions": [
            {
                "tradingPermissions": [
                    {
                        "assetClass": "STK",
                        "exchangeGroup": "EU-IBET",
                        "country": "BELGIUM",
                        "product": "STOCKS"
                    }
                ]
                "accountId":"U123456"
            }
        ]
    }
}
```

Account alias will appear on account statements, portal, and TWS.

* **Processing Time:** Changes will be effective immediately. You will need to restart TWS OR Portal to view the new alias.

## Schema

| Name         | Type                           | Description                                                                                |
| ------------ | ------------------------------ | ------------------------------------------------------------------------------------------ |
| accountId    | String                         | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| accountAlias | String Max # of characters: 80 | Account alias or Nickname                                                                  |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "updateAccountAlias": [
            {
                "accountId": "U12345",
                "accountAlias": "U111"
            }
        ]
    }
}
```

## Schema

| Name             | Type   | Description                                                                                                              |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| accountId        | String | IBKR account ID of the advisor/broker client account which request is being submitted for.                               |
| representativeId | String | IBKR username of the account representative. User must be listed on the master account which account is associated with. |
| percentage       | Number | Total percentage across all representatives should add up to 100%.                                                       |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "updateAccountRepresentatives": [
        {
            "accountId": "U12345",
            "representativeDetails": [
                {
                    "representativeId": "ajd0318a",
                    "percentage": 100
                }
            ]
        }
    ]
  }
}
```

SFC regulation requires clients under IBHK with trading permissions to SEHK stocks OR bonds to provide BCAN.

* Only applicable for Non Disclosed (QI and NonQI) – All Customer Types.

## Schema

| Name      | Type   | Description                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| accountId | String | IBKR account ID of the advisor/broker client account which request is being submitted for.                        |
| bcan      | String | Broker-to-Client-Assigned-Number (bcan).  – It must be 10 digits or less without leading 0 and it cannot be 1-99. |
| ceNumber  | String | Central entity number (CE#) of broker. It must be 6 digit alphanumeric identifier.                                |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "updateBcan": [
        {
            "accountId": "U12345",
            "bcan": "1125",
            "ceNumber": "BNO808"
        }
    ]
  }
}
```

## Schema

| Name          | Type   | Description                                                                                |
| ------------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId     | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| newExternalId | String | New external ID to be assigned to the account.                                             |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "updateExternalId" : 
            {
                "accountId" : "U12345",
                "newExternalId" : "Test1234"            }   
        
    }
}
```

Service is available by request only. To use this service, please contact [am-api@interactivebrokers.com](mailto:am-api@interactivebrokers.com).

## Schema

| Name            | Type   | Description                                                                                |
| --------------- | ------ | ------------------------------------------------------------------------------------------ |
| accountId       | String | IBKR account ID of the advisor/broker client account which request is being submitted for. |
| propertyProfile | String | Name of property being assigned.                                                           |

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "updatePropertyProfile" : 
            {
                "accountId" : "U12345",
                "propertyProfile" : "Standard"            }   
        
    }
}
```

Manage account access to users associated with the master account.

* Only applicable if the user is configured as 'Specific Sub Accounts' for the UAR

* This service will allow advisors/brokers to add/remove account access for users at master level that have access to 'Specific Sub Accounts'

## Schema

| Name      | Type       | Description                                                                                                    |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| accountId | String     | IBKR account ID of the advisor/broker client account which request is being submitted for.                     |
| action    | ADD REMOVE | ADD=User will have access to the given account.  REMOVE= User will no longer have access to the given account. |
| repId     | String     | User ID which account access is being updated for. This should be user ID associated with the master account.  |

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
    "updateUserAccessRights": [
        {
            "accountId": "U12345",
            "repId": "potest123",
            "action": "ADD"
        }
    ]
  }
}
```
