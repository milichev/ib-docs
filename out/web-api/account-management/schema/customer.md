[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/schema/customer)

# Customer

## customer

Define general customer details.

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| `"externalId": "tester111111",  "type": "INDIVIDUAL",  "prefix": "aabb",  "email": "tester@gmail.com",  "mdStatusNonPro": false,  },` |

| Name                       | Type                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| externalId                 | String                                                                                                                                                                         | The `externalId`, `externalUserId`, and `externalIndividualId` are unique identifiers which the counterparty assigns. The identifier can be used as a mapping to map the IBKR account with the account/user information within counterparty's system. `externalId` is present within application multiple times including: `customer` = Represents the customer which the account is associated with `accountHolderDetails, firstHolderDetails, secondHolderDetails`: Represents Individuals associated with the account. `accountHolder, jointHolder` = Represents the account itself `users` (`externalUserId` and `externalIndividualId`)= Represents users associated with the account. |
| type                       | INDIVIDUAL JOINT IRA TRUST ORG                                                                                                                                                 | Type of account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| prefix                     | String                                                                                                                                                                         | Prefix will be used when creating the user ID. IBKR will assign 3-6 numbers to the end of the prefix. If prefix includes the following, you will receive an error:• symbols or numeric values – Upper case letters – Prefix is less than 3 letters or more than 6 letters                                                                                                                                                                                                                                                                                                                                                                                                                   |
| email                      | String                                                                                                                                                                         | Primary email address of the applicant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| userName                   | Alphanumeric  – Letters (lower case) and numbers only. – Contains at least 3 letters. Min Characters 9; Max characters 63 – Lower case only, no spaces, no special characters. | By default, IBKR will generate a user ID using the prefix that is specified in the Customer and User node. If the user would like to select the exact user name, this can be done with userName. The [`/gw/api/v1/validations/usernames/{username}`](../../api-reference/account-management/account-management-utilities/get-validations-usernames.md) endpoint can be used to verify if usernName is available.   This feature is available by request only, to use this service, please contact [am-api@interactivebrokers.com](mailto:am-api@interactivebrokers.com).                                                                                                                                                                   |
| mdStatusNonPro             | true false                                                                                                                                                                     | Indicate if the applicant is classified as Professional or Non-Professional user. Prices for live data will vary based on if the use is Pro OR Non-Professional.  mdStatusNonPro=FALSE IF any of the conditions outlined in the below link are met: [https://ibkr.info/article/2369](https://ibkr.info/article/2369)                                                                                                                                                                                                                                                                                                                                                                        |
| directTradingAccess        | true false                                                                                                                                                                     | Indicate if the applicant will have direct access to placing trades. Required for Non-Disclosed Clients only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| meetAmlStandard            | true false                                                                                                                                                                     | Customer meets anti-money laundering standards. Required for Non-Disclosed Clients only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| taxTreatyCountry           | [3 Digit ISO Code](https://www.iso.org/obp/ui)                                                                                                                                 | If the account holder qualifies for treaty benefits under US income tax treaty, please identify treaty.  N/A is acceptable if account holder does not qualify for treaty benefits. [Treaty Countries with United States](https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z)                                                                                                                                                                                                                                                                                                                                                                  |
| legalResidenceCountry      | [3 Digit ISO Code](https://www.iso.org/obp/ui)                                                                                                                                 | Country of legal residence of the customer. Only relevant for Non-Disclosed Broker Clients.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| preferredPrimaryLanguage   | en de es jp jp zh_CN fr zh_TW he                                                                                                                                               | Specify Preferred Language for Communication sent by IBKR and for IBKR Systems including Portal and TWS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| preferredSecondaryLanguage | en de es jp jp zh_CN fr zh_TW he                                                                                                                                               | Specify Second Preferred Language for Communication sent by IBKR and for IBKR Systems including Portal and TWS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## financialInformation

Provide the net worth, liquid net worth, and annual net income of the applicant.

There are two options for providing `financialInformation`:

* Option 1: Absolute Number
* Option 2: Provide an interval range (range_id)

Validations will vary based on each option. Expand each section below to view differences.

### Absolute Value

* Any value over 100 is considered as absolute. Error will be triggered IF the value is less than 100.
* If absolute number is provided:
  * System converts the data provided in the `financialInformation` node using the `baseCurrency` specified within the `account` node to a range ID.
  * When validating the `financialInformation` against the IBKR's Financial Minimum our system uses the lower bound value for the range_id
  * Our system converts lower bound value of the range_id from `baseCurrency` to IB Currency to validate eligibility for requested capabilities.
    * IBLLC = USD
    * IB-UK = GBP
    * IB-CE, IB-IE = EUR
    * IB-HK = HKD
    * IB-AU = AUD
    * IB-CAN = CAD

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| `financialInformation": [ {"netWorth": 750000, "liquidNetWorth": 500000, "annualNetIncome": 50000}` |

| Name              | Type   | Description                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| net_worth         | Number | The total value of all assets you own, less what you owe (including all mortgages and debts).Your Net Worth cannot be less than your Liquid Net Worth. If absolute value is provided, minimum value accepted is 101; maximum value accepted is 50000001                                                                             |
| liquid_net_worth  | Number | The total value of any assets you own that can be quickly converted into cash.If absolute value is provided, minimum value accepted is 101; maximum value accepted is 5000001                                                                                                                                                       |
| annual_net_income | Number | The total amount of your earnings for one year minus any taxes or other deductions taken from your pay. These other deductions could include health insurance, retirement contributions, court ordered judgements or support payments.If absolute value is provided, minimum value accepted is 0; maximum value accepted is 1000001 |
| details           | String | Maximum of 350 Characters. Provide Description of Sources of Income.                                                                                                                                                                                                                                                                |

### Interval Range

* Eligibility for Trading Permissions and Account Type (Cash, Margin, Portfolio Margin) is validated against Financial Information Provided. [Financial Minimums](https://www.interactivebrokers.com/en/index.php?f=4945\&p=tradingrequirements)
* For Applications submitted to IBKR via API, `financialInformation` is collected in the currency which is associated with the IBKR entity.
* When validating the `financialInformation` against the IBKR's Financial Minimum our system uses the lower bound value for the range_id.
* Our system converts lower bound value of the range_id from baseCurrency to IB Currency to validate eligibility for requested capabilities.
  * IBLLC = USD
  * IB-UK = GBP
  * IB-CE, IB-IE = EUR
  * IB-HK = HKD
  * IB-AU = AUD
  * IB-CAN = CAD
* range_id can only be used for the following currencies:

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| AUD | GBP | KRW | PLN | USD |
| CAD | HKD | MXN | RUB |     |
| CHF | ILS | SEK | SGD |     |
| EUR | JPY | NZD | TRY |     |

|                                                                                       |
| ------------------------------------------------------------------------------------- |
| `financialInformation": [ {"netWorth": 8, "liquidNetWorth": 5, "annualNetIncome": 7}` |

| Name            | Type                                                                                        | Description                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| netWorth        | range_id: Pull directly using `/gw/api/v1/enumerations/fin-info-ranges?currency=<CURRENCY>` | The total value of all assets you own, less what you owe (including all mortgages and debts).Your Net Worth cannot be less than your Liquid Net Worth.                                                                                 |
| liquidNetWorth  | range_id: Pull directly using `/gw/api/v1/enumerations/fin-info-ranges?currency=<CURRENCY>` | The total value of any assets you own that can be quickly converted into cash.                                                                                                                                                         |
| annualNetIncome | range_id: Pull directly using `/gw/api/v1/enumerations/fin-info-ranges?currency=<CURRENCY>` | The total amount of your earnings for one year minus any taxes or other deductions taken from your pay. These other deductions could include health insurance, retirement contributions, court ordered judgements or support payments. |
| details         | String                                                                                      | Maximum of 350 Characters. Provide Description of Sources of Income.                                                                                                                                                                   |

## investmentExperience

Investment Experience for the applicant.

* yearsTrading is validated against the age of the applicant. If yearsTrading > Date – 18, you will receive an error.
* Cannot be hard coded.
* We only require the experience for the products the client is requesting.
* We do not require experience for FOP, SSF, WAR, FOP, ETFs, Mutual Funds as these are subcategories.
  * i.e. If the applicant only wants to trade Stocks, Mutual Funds and ETFs, we only need the experience for STK.

|                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{ "investmentExperience": [ { "assetClass": "STK", "yearsTrading": 5, "tradesPerYear": 2, "knowledgeLevel": "Limited" }, { "assetClass": "BOND", "yearsTrading": 1, "tradesPerYear": 1, "knowledgeLevel": "Limited" } ],` |

| Name           | Type                        | Description                                                                                                                                                                                                                                                                                                                       |
| -------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assetClass     | STK BOND OPT FUT CASH MRGN  | STK= Stocks (ETFs, ADRs, and Mutual Funds)  BOND= Bonds (T-Bills, Municipal/Corporate Bonds)  OPT= Options  FUT= Futures (includes Single Stock Futures, Futures Options)  CASH= Forex (includes currency conversion and leveraged forex)  MRGN= Margin (Only applicable for IB-UK/IB-EU/IB-IE/IB-CE accounts requesting Margin). |
| knowledgeLevel | None Limited Good Extensive | Knowledge level the applicant has trading this product.                                                                                                                                                                                                                                                                           |
| tradesPerYear  | Non-Negative Integer Value  | Average number of trades per year placed by the applicant for the specified product.                                                                                                                                                                                                                                              |
| yearsTrading   | Non-Negative Integer Value  | Years of experience the applicant has trading this specific product.                                                                                                                                                                                                                                                              |

**For Advisor Clients:**

* Investment Experience validations are driven by the Advisor-Master.
* If Advisor is only registered for Securities, the sub-account is only eligible for Stocks, Options, Bonds, and Mutual Funds.

**For Broker clients:**

* **STK**
  * yearsTrading="1″ AND tradesPerYear \< 10:
    * knowledgeLevel= Good OR Extensive: This will validate.
    * knowledgeLevel= None OR Limited: This will trigger an error and the application will not be processed.

* **OPT**
  * years_trading="1″ AND tradesPerYear \< 10:
    * This will trigger an error and the application will not be processed.
    * Because client has less than two years trading Options, client must take Options Exam
  * yearsTrading="2″ AND tradesPerYear \< 10:
    * knowledgeLevel= Good OR Extensive: This will validate.
    * knowledgeLevel= None OR Limited: This will trigger an error and the application will not be processed.

* **BOND**
  * yearsTrading="1″ AND tradesPerYear \< 10:
    * knowledgeLevel= Good OR Extensive: This will validate.
    * knowledgeLevel= None OR Limited: This will trigger an error and the application will not be processed.

* **FUT**
  * yearsTrading="1″ AND tradesPerYear \< 10:
    * This will trigger an error and the application will not be processed.
    * Because client has less than two years trading Futures, client must take Futures Exam
  * yearsTrading="2″ AND tradesPerYear \< 10:
    * knowledgeLevel= Good OR Extensive: This will validate.
    * knowledgeLevel= None OR Limited: This will trigger an error and the application will not be processed.
  * **CASH**
    * yearsTrading="1″ AND tradesPerYear \< 10:
      * This will not validate
    * year yearsTrading="2″ AND tradesPerYear \< 10:
      * knowledgeLevel= Good OR Extensive: This will validate.
      * knowledgeLevel= None OR Limited: This will trigger an error and the application will not be processed.

## sourcesOfWealth

Sources of wealth is how the applicant obtained funds to fund the account.

* If EmploymentType = EMPLOYED OR SELFEMPLOYED
  * SOW-IND-Income must be listed as sourceOfWealth but does not need to be selected as a source used to fund the account.
* Applicant cannot specify the same source multiple times.
* percentage is not required IF usedForFunds="false"
* Percentage across all sourceOfWealth must = 100%
* Required for all Applicants (ie. EMPLOYED, SELFEMPLOYED, RETIRED, UNEMPLOYMENT, STUDENT, ATHOMETRADER, or HOMEMAKER)

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| `"sourcesOfWealth": [  {  "sourceType": "SOW-IND-Inheritance",  "percentage": 100,  "usedForFunds": true  },` |

| Name         | Type                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                         |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| sourceType   | **Individual/ Joint / Retirement**  SOW-IND-Allowance SOW-IND-Disability SOW-IND-Income SOW-IND-Inheritance SOW-IND-Interest SOW-IND-MarketProfit SOW-IND-Other SOW-IND-Pension SOW-IND-Property  **Orgs / Trusts**  SOW-ORG Business SOW-ORG-MarketTradingProfits SOW-ORG-Other SOW-ORG-OwnerEquity SOW-ORG-Property SOW-ORG-RetainedEarnings | Other- Description is required.                                                                                     |
| description  | String; maximum of 128 characters.                                                                                                                                                                                                                                                                                                             | Describe source of funds. Only required if source_type="SOW-IND-Other" or "SOW-ORG-Other"                           |
| percentage   | Non-Negative Integer                                                                                                                                                                                                                                                                                                                           | Only required IF 1) usedForFunds = true AND account is 2) Account is with IB-HK, IB-AU, IB-UK, IB-UKL, IB-IE, IB-CE |
| usedForFunds | true false                                                                                                                                                                                                                                                                                                                                     | Is the source used to fund the account? Yes/No                                                                      |

## regulatoryInformation

Indicate if applicant or individual associated with account falls under FINRA category.

### regulatoryDetail

**FA/FD:** **Individual, Retirement, Joint (All Entities)**

* **AFFILIATION**: Is the applicant or any immediate family member who resides in the same household, registered as a broker-dealer or an employee, director or owner of a securities or commodities brokerage firm? (Yes/No) [affiliationDetails](customer.md#affiliationdetails)is required IF **true**.

**FA/FD/OWD:** **Individual, Retirement, Joint (All Entities except for IB-AU)**

* **EmployeePubTrade**: Are the owners of, or other non-owners listed on, the account Employees of a publicly traded company? (Yes/No)
* **ControlPubTraded**:Do the owners of, or other non-owners listed on, the account Control a publicly traded company? (Yes/No)

**FA/FD: Individual, Retirement, Joint (IB-AU only)**

* **POLITICALMILITARYDIPLOMATIC**: Is the account holder, or an immediate family member of the account holder: (i) a senior government official of any country, (ii) a senior diplomatic staff member or ambassador or high commissioner for Australia or a non-Australian embassy, or (iii) a high ranking member of any country's armed forces, or (iv) a senior officer (CEO, CFO, or comparable position) of any State-owned enterprise of any country. (Yes/No)
* **CONTROLLER**: Is the account holder, or an immediate family member, a director or senior employee or officer of any publicly traded company (listed) or of an issuer/manager of any exchange traded financial product? (Yes/No)

**OWD: Orgs**

* **STOCKCONTROL**: Is the organization a publicly-held entity whose shares are traded on a regulated exchange? (Yes/No) If Yes, provide Symbol within detail.
* **FOREIGN_BANK**:Is the organization a foreign bank (formed and located outside the European Union)?(Yes/No)
* **MONEY_TRANSMITTER**: Is the organization a licensed money transmitter?(Yes/No)
* **HIGH_RISK_CONTRIBUTION**: Does your organization generate 10% or more of its revenue by conducting business in high risk countries? (Yes/No) If yes, provide countries that apply. (Contact [dam@ibkr.com](mailto:dam@ibkr.com) for list of countries).

| Name                 | Type                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code                 | AFFILIATION EmployeePubTrade ControlPubTraded POLITICALMILITARYDIPLOMATICCONTROLLER STOCKCONTROL FOREIGN_BANK MONEY_TRANSMITTER HIGH_RISK_CONTRIBUTION |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| status               | true false                                                                                                                                             | Response to the above Regulatory Questions.Yes= trueNo = false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| detail               | String                                                                                                                                                 | Required IF any of the following are true:   **EmployeePubTrade** – Enter the stock symbol(s) of the company or companies, separated by commas. Stock symbol(s) must be upper case.  **ControlPubTraded** – Enter the stock symbol(s) of the company or companies, separated by commas. Stock symbol(s) must be upper case.  **STOCKCONTROL** – Enter the stock symbol(s) of the company or companies, separated by commas. Stock symbol(s) must be upper case.  **HIGH_RISK_CONTRIBUTION –** Enter the country(ies), separated by commas. Country must be 3 digit ISO code and all upper case. |
| externalIndividualId | String                                                                                                                                                 | External_ID associated with the account holder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

If ControlPubTraded and/or EmployeePubTrade="false"

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"regulatoryInformation": [ { "regulatoryDetail": [ { "code": "ControlPubTraded", "status": false }, { "code": "EmployeePubTrade", "status": false }, { "code": "AFFILIATION", "status": false } ], "translated": false } ]` |

If ControlPubTraded and/or EmployeePubTrade="true"

|                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"regulatoryInformation": [ { "regulatoryDetail": [ { "code": "ControlPubTraded", "status": true, "externalIndividualId": "tester12345", "detail": "AAPL"}, { "code": "EmployeePubTrade", "status": true, "externalIndividualId": "tester12345", "detail": "AAPL"}, { "code": "AFFILIATION", "status": false } ], "translated": false } ]` |

### affiliationDetails

**Option 1:** **Link to an existing IBKR EmployeeTrack Account**

| Name                    | Type                           | Description                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isDuplicateStmtRequired | true false                     | Indicates if IBKR should send duplicated statements to customers. For those included on FINRA Rule 3210 or equivalent on his/her jurisdiction, the expected answer is true, as they need to submit one copy to his/her employer compliance office.                                                                                                                       |
| affiliationRelationship | Other Spouse Parent Child Self | Relationship of the affiliated person to the applicant.                                                                                                                                                                                                                                                                                                                  |
| personName              | String                         | Name of the affiliated person.                                                                                                                                                                                                                                                                                                                                           |
| companyId               | String                         | If the employer has an EmployeeTrack account with IBKR, you can link the account to the EmployeeTrack account. The Employer will automatically receive duplicate statements for the account.  Use [/getEnumerations](../../api-reference/account-management/account-management-utilities/get-enumerations.md) 'company_id' to query list of companies with active EmployeeTrack accounts at Interactive Brokers. |

**Option 2:** **Provide Company Details (used if the Employer does not have an [EmployeeTrack](https://www.interactivebrokers.com/en/accounts/compliance-officer.php) account with IBKR)**

| Name                       | Type                                                 | Description                                                                                                                                                                                                                                                                                               |
| -------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| is_duplicate_stmt_required | true false                                           | Indicates if IBKR should send duplicated statements to customers. For those included on FINRA Rule 3210 or equivalent on his/her jurisdiction, the expected answer is true, as they need to submit one copy to his/her employer compliance office.                                                        |
| affiliation_relationship   | Other Spouse Parent Child Self                       | Relationship of the affiliated person to the applicant.                                                                                                                                                                                                                                                   |
| person_name                | String; max characters 48                            | Name of the affiliated person.                                                                                                                                                                                                                                                                            |
| company                    | String; max characters 400                           | Name of the company where the affiliated person is employed.                                                                                                                                                                                                                                              |
| company_phone              | String; max characters 18                            | Phone number of the compliance officer at the company.We use Google API to validate the Phone Number. The API allows for country code to be passed along with the phone number.Google Phone Library to version 8.12.2[https://github.com/google/libphonenumber](https://github.com/google/libphonenumber) |
| company_email_address      | String; max characters 80                            | Email address of the compliance officer at the company.We validate the email address using Regular Expression (REGEX)^\[A-Z0-9]\[A-Z0-9.\_%+-]\{0,63}@(?:(?=\[A-Z0-9-]\{1,63}\[.])\[A-Z0-9]+(?:-\[A-Z0-9]+)\*\[.])\{1,8}\[A-Z]\{2,63}\$                                                                   |
| companyMailingAddress      | object (Address)                                     | Mailing address for the employer                                                                                                                                                                                                                                                                          |
| street1                    | String; Max characters 200                           |                                                                                                                                                                                                                                                                                                           |
| street2                    | String; Max characters 200                           |                                                                                                                                                                                                                                                                                                           |
| country                    | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | Country which the employer is located.                                                                                                                                                                                                                                                                    |
| state                      | [3166-2 ISO Code](https://www.iso.org/obp/ui#search) | State/Province which the employer is located.                                                                                                                                                                                                                                                             |
| city                       | String; Max characters 100                           | City which the employer is located.                                                                                                                                                                                                                                                                       |
| postal_code                | String; Max characters 20                            | Postal / Zip code. For countries that do not provide postal code, please enter "00000″                                                                                                                                                                                                                    |

## witholdingStatement

Provide withholding statement for the applicant.

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| `"withholdingStatement": { "effectiveDate": "2024-11-01", "fatcaCompliantType": "FATCA_COMPLIANT", "treatyCountry": "GBR" }` |

| Name               | Type                                                              | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| effectiveDate      | YYYY-MM-DD                                                        | Effective date of withholding statement.                                                                                                                                                                                                                                                                                       |
| fatcaCompliantType | FATCA_COMPLIANT NON_CONSENTING_US_ACCOUNT NON_COOPERATIVE_ACCOUNT | Indicate if the Account Holder is FATCA compliant account                                                                                                                                                                                                                                                                      |
| treatyCountry      | [3 Digit ISO Code](https://www.iso.org/obp/ui)                    | If the account holder qualifies for treaty benefits under US income tax treaty, please identify treaty.    >N/A is acceptable if account holder does not qualify for treaty benefits.  >[Treaty Countries with UnitedStates](https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z) |
