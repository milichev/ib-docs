[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/schema/associated-individual)

# Associatedindividual

AssociatedIndividual represents data for individuals that are associated with the account. Required fields for the individual fill vary based on the association and account type.

* **Individual**: customer > accountHolder > accountHolderDetails
* **Retirement**:
  * customer > accountHolder > accountHolderDetails
  * accounts> iraBeneficiaries > primaryBeneficiaries **AND** contingentBeneficiaries
* **Joint**: customer > jointHolder > firstHolderDetails **and** secondHolderDetails
* **Trust**: customer > trust > grantors **AND** beneficiaries
* **Organization**: customer > organization > associatedEntities > associatedIndividuals **AND** associatedEntities

#### Required

## externalId

Unique identifier associated with the individual defined by counterparty.

* The `externalId`, `externalUserId`, and `externalIndividualId` are unique identifiers which the counterparty assigns. The identifier can be used as a mapping to map the IBKR account with the account/user information within counterparty's system.
* `externalId` is present within application multiple times including:
  * `customer` = Represents the customer which the account is associated with
  * `accountHolderDetails, firstHolderDetails, secondHolderDetails`: Represents Individuals associated with the account.
  * `accountHolder, jointHolder` = Represents the account itself
  * `users` (`externalUserId` and `externalIndividualId`)= Represents users associated with the account.

| Name                | Description               |
| ------------------- | ------------------------- |
| externalId required | String; max 64 characters |

##### Sample

|                                        |
| -------------------------------------- |
| `"externalId": "testapplication1234",` |

##### Required

| FD | FA | OWD | NonQI | ND-QI | ND-QI (NT) |
| -- | -- | --- | ----- | ----- | ---------- |
| ✓  | ✓  | ✓   | ✓     | ✓     | ✓          |

## name

Legal name of the associated individual.

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| \{`"name": {"first": "Jane", "middle": "May", "last": "Doe" ,"salutation":"Mrs."},` |

| Name       | Type                      | Description                        |
| ---------- | ------------------------- | ---------------------------------- |
| first      | String; max characters 50 | Legal first name of the applicant. |
| middle     | String; max characters 50 | Middle name of the applicant.      |
| last       | String; max characters 50 | Legal last name of the applicant.  |
| salutation | Mr. Mrs. Ms. Dr. Mx. Ind. | Salutation of the applicant.       |

* The `first` and `last` are required. If either are missing, error will be thrown.

## email

Email address of the associated individual.

|                           |
| ------------------------- |
| `"email": test@ibkr.com,` |

| Name  | Type   | Description                             |
| ----- | ------ | --------------------------------------- |
| email | String | Email address of the associated person. |

* Regular Expression (REGEX)\
  `^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:(?=[A-Z0-9-]{1,63}[.])[A-Z0-9]+(?:-[A-Z0-9]+)*[.]){1,8}[A-Z]{2,63}$`
* Error thrown if email address is same as master account.

## residenceAddress

Provide the residential address where the individual physically resides.

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| \{`"residenceAddress": {"street1": "1 Tester Street", "city": "London", "state": "GB-ENG" ,"country":"GBR","postalCode": "SW10 9QL"},` |

| Name       | Type                                                 | Description                                                                            |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| country    | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | Country which the applicant resides.                                                   |
| state      | [3166-2 ISO Code](https://www.iso.org/obp/ui#search) | State/Province which the applicant resides.                                            |
| city       | String; Max characters 100                           | City which the applicant resides.                                                      |
| postalCode | String; Max characters 20                            | Postal / Zip code. For countries that do not provide postal code, please enter "00000″ |
| street1    | String; Max characters 200                           | Street which applicant resides                                                         |
| street2    | String; Max characters 200                           | Street which applicant resides                                                         |

* If the mailing address is different from the address provided in `residenceAddress` element, THEN you will also include `mailingAddress` element.
* Post Office Box is not accepted for `residentialAddress`.
* Our system validates `street1` and `street2` included within `residenceAddress` attribute to ensure Post Office Box address is not provided.
  * An error will be thrown if the below combinations are included within `street1` OR `street2`:
    * PB
    * PO Box
    * Post Office Box
    * P.O. Box
    * In care of
    * General Delivery
  * Regular Expression to validate street_1 and street_2:
    * English: `(?:P(?:ost(?:al)?)?[\.\-\s]*(?:(?:O(?:ffice)?[\.\\s]*)?B(?:ox|in|\b|\d)|o(?:ffice|\b)(?:[-\s]*\d)|code)|box[-\s]*\d)`
    * Chinese Simplified: `PO Box (?i)\b((邮政信箱) [0-9]*)\bChinese Traditional: PO Box (?i)\b((郵政信箱) [0-9]*)\b`

| FD | FA | OWD | NonQI | ND-QI | ND-QI (NT) |
| -- | -- | --- | ----- | ----- | ---------- |
| ✓  | ✓  | ✓   | ✓     | ✓     | ✓          |

#### Dependent on type

## countryOfBirth

Country which the individual was born.

|                            |
| -------------------------- |
| `"countryOfBirth": "GBR",` |

| Name           | Type                                           | Description                           |
| -------------- | ---------------------------------------------- | ------------------------------------- |
| CountryOfBirth | [3 Digit ISO Code](https://www.iso.org/obp/ui) | Country which the applicant was born. |

* Accounts are accepted from citizens or residents of all countries except citizens or residents of those countries that are prohibited by the US Office of Foreign Assets Control.
* [Click here](https://www.interactivebrokers.com/en/index.php?f=7021\&nhf=T) for a list of all available countries.
* If countryOfBirth is classified as a 'Prohibited Country', `prohibitedCountryQuestionnaire` is required.
* List of Prohibited Countries an be obtained using `/api/v1/enumerations/prohibited-country` endpoint.

## dateOfBirth

Date of birth of the associated individual.

|                               |
| ----------------------------- |
| `"dateOfBirth": "1990-08-14"` |

| Name        | Type       | Description                                                                                 |
| ----------- | ---------- | ------------------------------------------------------------------------------------------- |
| dateOfBirth | YYYY-MM-DD | Date of birth of the applicant. The applicant must be 18 years or older to open an account. |

* If the YYY-MM-DD \< 18 years error will be triggered and the account will not be created.
* If YYYY-MM-DD \< 21 the applicant is restricted to opening a CASH account only.
* UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.
  * This application must be opened using the front-end application which is available within the IBKR Portal.
  * Assets held in a single account managed by a single Custodian user.
* Error will be thrown if `dateOfBirth` is any value other than YYYY-MM-DD. The below formats will trigger errors:

## employmentDetails

Provide the Employment Details of the associated individual if EMPLOYED or SELFEMPLOYED

|                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"employmentDetails": {  "employer": "My Test Employer",  "occupation": "ACCOUNTANT",  "employerBusiness": "ARCHITECTURE_ENGINEERING",  "employerAddress": {  "street1": "Grays Inn Road",  "city": "London",  "state": "GB-ENG",  "country": "GBR",  "postalCode": "WC1X 8PX"  }`} |

| Name                         | Type                                                                       | Description                                                                                                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| employer                     | String; max characters 128                                                 | Name of the employer                                                                                                                                                                                                        |
| employerBusiness             | Use `/api/v1/enumerations/business-and-occupation` to get accepted values. |                                                                                                                                                                                                                             |
| occupation                   | `/api/v1/enumerations/business-and-occupation` to get accepted values.     |                                                                                                                                                                                                                             |
| country                      | [3 Digit ISO Code](https://www.iso.org/obp/ui)                             | Country which the employer is located.                                                                                                                                                                                      |
| state                        | [3166-2 ISO Code](https://www.iso.org/obp/ui#search)                       | State/Province which the employer is located.                                                                                                                                                                               |
| city                         | String; Max characters 100                                                 | City which the employer is located.                                                                                                                                                                                         |
| postalCode                   | String; Max characters 20                                                  | Postal / Zip code.For countries that do not provide postal code, please enter "00000″                                                                                                                                       |
| street1                      | String; Max characters 200                                                 | Street which employer is located.                                                                                                                                                                                           |
| emplCountryResCountryDetails | String; Max characters 200                                                 | Explain why country of employment is different from country of current residence.                                                                                                                                           |
| description                  | String; Max characters 200                                                 | Required IF business OR occupation= OTHER\*Other is not case/space sensitive.                                                                                                                                               |
| businessDescription          | String; Max characters 256                                                 | **Required IF employmentType is "SELFEMPLOYED"**   Business description, including the industry sector you are in, which countries you operate in, the products/services you offer, and the primary source of your revenue. |

* `employmentType: "EMPLOYED"` OR "SELFEMPLOYED"
  * FA and FD clients with IBLLC, IB-IE, IB-CE, and IB-UK: Full `employerAddress` (`country, state, city, street1, postalCode`) is required
  * All other clients, `country` within `employerAddress` is required.
* If `employmentType:"EMPLOYED"`
* `employmentType: "SELFEMPLOYED"`
  * `employerAddress` can be the same as `residenceAddress` OR `mailingAddress`.
  * `businessDescription` is required.
* EmploymentType="EMPLOYED" OR "SELFEMPLOYED"
  * When the country included within `residenceAddress` node is different from the country included within `employerAddress` node, THEN `emplCountryResCountryDetails` is required within the `employmentDetails` node.

## employmentType

Employment status of the associated person.

|                                 |
| ------------------------------- |
| `"employmentType": "EMPLOYED",` |

| Name           | Type                                                                    | Description                                     |
| -------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| employmentType | UNEMPLOYED EMPLOYED SELFEMPLOYED RETIRED STUDENT ATHOMETRADER HOMEMAKER | Employment Status of the associated individual. |

* IF `employmentType` = EMPLOYED OR SELFEMPLOYED THEN [EmploymentDetails](associated-individual.md#employmentdetails) are required.

## gender

Gender of the applicant.

|                     |
| ------------------- |
| `"gender": "MALE",` |

| Name   | Type        | Description              |
| ------ | ----------- | ------------------------ |
| gender | Male Female | Gender of the Applicant. |

* Required for India and EEA applicants that are required to report MiFIR Data.
* MiFIR Transaction Reporting applies to European Economic Area ("EEA") Investment Firms. As a client of an investment firm that uses the platform, you may be required to provide additional information to allow the proper transaction reports to be filed. [More Information](https://ibkb.interactivebrokers.com/node/2974)

## identification

Identification information of the associated individual.

Acceptable **id document** is dependent the country which associated individual resides.

### alienCard

All countries except for USA, CAN, HKG and IND.

`"identification": {"citizenship": "MEX", "alienCard": "989444798", "issuingCountry": "MEX"},`

### driversLicense

Australia

`"identification": {"citizenship": "AUS", "driversLicense": "989444798", "issuingCountry": "AUS", "expire": true, "expirationDate": "2029-03-22", "rta":"9999999", "issuingState":"AU-QLD"},`

### driversLicense

All countries except for USA, CAN, HKG, AUS and IND.

`"identification": {"citizenship": "MEX", "driversLicense": "989444798", "issuingCountry": "MEX", "expire": true, "expirationDate": "2029-03-22"},`

### nationalCard

All countries except for USA, CAN, HKG and IND.

`"identification": {"citizenship": "MEX", "nationalCard": "989444798", "issuingCountry": "MEX"},`

### hkTravelPermit

Macao and HK Travel Permit is accepted as POI for LLC Clients based in China.

`"identification": {"citizenship": "CHN", "HKTravelPermit": "HO1234567", "issuingCountry": "CHN", "expire": true, "expirationDate": "2029-03-22"},`

### panNumber

Required for India Residents, Citizens, and Tax Residents.

`"identification": {"citizenship": "IND", "panNumber": "AABPK6504E", "issuingCountry": "IND"}`

### passport

All countries except for USA, CAN, HKG and IND.

`"identification": {"citizenship": "MEX", "passport": "989444798", "issuingCountry": "MEX", "expire": true, "expirationDate": "2029-03-22"},`

### sin

Required for Canada Residents, Citizens, and Tax Residents.

`"identification": {"citizenship": "CAN", "sin": "989444798", "issuingCountry": "CAN"},`

### ssn

Required for United States Residents, Citizens, and Tax Residents.

`"identification": {"citizenship": "USA","SSN": "989444798", "issuingCountry": "USA"}`

### taxId

All countries except for USA, CAN, HKG and IND.

`"identification": {"citizenship": "ESP", "taxId": "989444798", "issuingCountry": "ESP"},`

| Name              | Type                                                 | Description                                                                                                                                                                                                                                                                                                         |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| citizenship       | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | Citizenship of the applicant. If `citizenship` is classified as a 'Prohibited Country', THEN `prohibitedCountryQuestionnaire` is required. List of Prohibited Countries an be obtained using `/api/v1/enumerations/prohibited-country` endpoint.                                                                    |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| citizenship2      | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | If the applicant has multiple citizenship, provide the additional citizenship of the applicant. If `citizenship2` is classified as a 'Prohibited Country', THEN `prohibitedCountryQuestionnaire` is required. List of Prohibited Countries an be obtained using `/api/v1/enumerations/prohibited-country` endpoint. |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| citizenship3      | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | If the applicant has multiple citizenship, provide the additional citizenship of the applicant. If `citizenship3` is classified as a 'Prohibited Country', THEN `prohibitedCountryQuestionnaire` is required. List of Prohibited Countries an be obtained using `/api/v1/enumerations/prohibited-country` endpoint. |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| issuingCountry    | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | Issuing country of the ID document.                                                                                                                                                                                                                                                                                 |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| issuingState      | [3166-2 ISO Code](https://www.iso.org/obp/ui#search) | Required if driversLicense issued in Australia is provided.                                                                                                                                                                                                                                                         |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| expire            | true false                                           | Indicate IF ID document has an ExpirationDate.                                                                                                                                                                                                                                                                      |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| expirationDate    | YYYY-MM-DD                                           | Provide expiration date of the ID document. Cannot be past date. If `driversLicense` OR `passport` is provided AND `expirationDate` is missing, an error will be thrown.                                                                                                                                            |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| rta               | String                                               | Only applicable IF ID_Type=DriversLicense AND IssuingCountry=AUS                                                                                                                                                                                                                                                    |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| ssn               | String                                               | **Social Security Number**: Required for US Residents and citizens. REGEX:(?!123456789                                                                                                                                                                                                                              | 219099999                                                                                                 | 078051120)(?!666                                 | 000)\d\{3}(?!00)\d\{2}(?!0\{4})\d\{4}\$ |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| sin               | String                                               | **Social Insurance Number**: Required for Canada Residents and citizens.  REGEX: ^\d\{9}\$                                                                                                                                                                                                                          |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| panNumber         | String                                               | India PanCard, required for India Residents and citizens.  REGEX: \[A-Z]\{5}\d\{4}\[A-Z]\{1}\$                                                                                                                                                                                                                      |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| driversLicense    | String                                               | Drivers License  REGEX by Country: AUS: ^.\{0,64}$ NZL: ^[A-Z]\{2\}\d\{6\}$                                                                                                                                                                                                                                         |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| passport          | String                                               | Passport  REGEX by Country: AUS: ^(\[a-zA-Z0-9]\{7,10})\$ CAN: ^\[a-zA-Z0-9]\{6,10} CHN: (^\[A-Za-z0-9]\{9})                                                                                                                                                                                                        | \d\{18}$ IND: ^[a-zA-Z]\{1\}[0-9]\{7\} SGP: [A-Za-z0-9]\{8,10\}$ USA: (^\[a-zA-Z]\*\d\{6,9})              | (\d\{3}-\d\{3}-\d\{3})\$                         |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| nationalCard      | String                                               | National Identification Card REGEX by Country: ARG: ^\d\{8}$ FRA: ^\d\{15\}$ FRA: ^(\[A-Za-z0-9]\{9})                                                                                                                                                                                                               | (\d\{4}(\[A-Z]                                                                                            | \d)\{3}\d\{5})\$ ITA: ^(\[A-Z]\{2}\d\{7}         | \d\{7}\[A-Z]\{2}                        | \[A-Z]\{2}\d\{5}\[A-Z]\{2})$ MEX: ^[A-Z]\{4\}\d\{6\}[A-Z]\{6\}\d\{2\}$ MYS: ^\d\{12}$ RUS: ^\d\{9\}$ RUS: ^\d\{10}\$ SAU: ^\[1 | 2]\(\d\{9}$) ZAF: ^\d\{13\}$                                        |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| taxId             | String                                               | Tax ID TIN within \<[taxResidencies](associated-individual.md#taxresidencies)>foreignTaxId within \<[w8Ben](associated-individual.md#w8ben)>  REGEX by Country: AUS: ^(\d\{8}                                                                       | \d\{9})$ AUT: ^\d\{9\}$ BEL: ^\d\{11}$ BGR: ^\d\{10\}$ BRA: ^\d\{11}$ CHE: ^756\d\{10\}$ CHN: ^\d\{17}(\d | X)\$ CHN: ^(?:\[0-9TMHWC]\[0-9]\{16}\[0-9A-Za-z] | \[0-9TMHWC]\[0-9]\{17}                  | J\[0-9]\{14})$ CYP: ^[069]\d\{7\}[A-Z]$ CZE: ^\d\{9,10}$ DEU: ^\d\{11\}$ DNK: ^\d\{10}\$ ESP: ^(\d\{8}\[A-Z]\{1})              | (\[A-Z]\{1}\d\{7}\[A-Z]\{1})$ EST: ^\d\{11\}$ FIN: ^((\d\{6}A\d\{3} | \d\{9})\[0-9A-Z])$ FRA: ^[0-3]\d\{12\}$ GBR: ^\[A-Z]\{2}\d\{6}\[ABCD]\{1}$ GRC: ^\d\{9\}$ HKG: ^\[A-Z]\{1,2}\[0-9]\{6}(\[0-9] | A)$ HRV: ^\d\{11\}$ HUN: ^(8\d\{9})$ IDN: ^\d\{16\}$ IRL: ^\d\{7}\[A-Z]\{1,2}$ ISL: ^\d\{10\}$ ISR: ^\d\{9}$ ITA: ^[A-Z]\{6\}\d\{2\}[A-Z]\d\{2\}[A-Z]\d\{3\}[A-Z]$ KOR: ^\d\{13}$ LTU: ^\d\{11\}$ LUX: ^\d\{13}$ LVA: ^\d\{11\}$ MLT: ^(\d\{9} | \d\{7}\[A-Z])\$ MYS: ^(\d\{12} | IG\d\{9,11})$ NLD: ^\d\{9\}$ NOR: ^\d\{11}$ POL: ^\d\{11\}$ PRT: ^\[1234]\d\{8}$ ROU: ^\d\{13\}$ RUS: ^\d\{12}$ SGP: ^[A-Z]\d\{7\}[A-Z]$ SVK: ^\d\{9,10}$ SVN: ^[1-9]\d\{7\}$ SWE: ^(\d\{10} | \d\{12})$ TUR: ^\d\{11\}$ UKR: ^\d\{10}\$ |
| alienCard         | String                                               | Alien Card                                                                                                                                                                                                                                                                                                          |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| cardColor         | BLUE GREEN YELLOW                                    | Required if MedicareCard is provided.                                                                                                                                                                                                                                                                               |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| medicareCard      | String; 10 digits.                                   | Only applicable for Australia residents.                                                                                                                                                                                                                                                                            |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |
| mediCareReference | String; between 1-9 digits.                          | Required if MedicareCard is provided.                                                                                                                                                                                                                                                                               |                                                                                                           |                                                  |                                         |                                                                                                                                |                                                                     |                                                                                                                               |                                                                                                                                                                                                                                                |                                |                                                                                                                                                                                              |                                           |

## LocalTaxForms

Required when Non-US applicant requests trading permissions for Canada products OR Non-Australia/Non-U.S. applicant requests trading permissions for Australia products.

|                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------- |
| `"w8Ben": {  "localTaxForms": [  {  "taxAuthority": "CANADA_TA",  "qualified": true,  "treatyCountry": "DEU"  }` |

| Name          | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| taxAuthority  | CANADA_TAAUSTRALIA_TAIRELAND_TAISRAEL_TA       | Tax Certification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| qualify       | True False                                     | Does the account holder qualify for 'taxAuthority' treaty benefits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| treatyCountry | [3 Digit ISO Code](https://www.iso.org/obp/ui) | If yes, provide Treaty Country. N/A is accepted for Non-Treaty Countries.   Canada Treaty Countries: [https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/in-force.html](https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/in-force.html)  Australia Countries: [https://treasury.gov.au/tax-treaties/income-tax-treaties](https://treasury.gov.au/tax-treaties/income-tax-treaties)  Israel Countries: [https://www.gov.il/en/departments/dynamiccollectors/international\\\_agreements](https://www.gov.il/en/departments/dynamiccollectors/international\\_agreements) |

## mailingAddress

Provide the mailing address of the applicant.

* IF `sameMailAaddress`: "false" THEN `mailingAddress` is required.

| Name                | Type                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| country required    | [3 Digit ISO Code](https://www.iso.org/obp/ui)                                                                    |
| state required      | [3166-2 ISO Code](https://www.iso.org/obp/ui#search)                                                              |
| city required       | String; Max characters 100                                                                                        |
| postalCode required | String; Max characters 20  Postal / Zip code. For countries that do not provide postal code, please enter "00000″ |
| street1 required    | String; Max characters 200                                                                                        |
| street2             | String; Max characters 200                                                                                        |

##### **Example**

|                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| \{`"mailingAddress": {"street1": "1 Tester Street", "city": "London", "state": "GB-ENG" ,"country":"GBR","postalCode": "SW10 9QL"},` |

##### **Required**

| FD | FA | OWD | NonQI | ND-QI | ND-QI (NT) |
| -- | -- | --- | ----- | ----- | ---------- |
| ✓  | ✓  | ✓   | ✓     | ✓     | –          |

## maritalStatus

Marital Status of the applicant

| Name                   | Type                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| maritalStatus required | S= Single M= Married W= Widowed D= Divorced C= Common law partner |

##### **Example**

|                         |
| ----------------------- |
| `"maritalStatus": "S",` |

##### Required

| FD | FA | OWD | NonQI | ND-QI | ND-QI (NT) |
| -- | -- | --- | ----- | ----- | ---------- |
| ✓  | ✓  | –   | –     | –     | –          |

## nativeName

Legal name of the associated individual.

|                                                                                          |
| ---------------------------------------------------------------------------------------- |
| `{"nativeName": {"first": "ון", "middle": "סמית", "last": "סמית" ,"salutation":"Mrs."},` |

| Name       | Type                                | Description                        |
| ---------- | ----------------------------------- | ---------------------------------- |
| first      | Required- String; max characters 50 | Legal first name of the applicant. |
| middle     | String; max characters 50           | Middle name of the applicant.      |
| last       | Required- String; max characters 50 | Legal last name of the applicant.  |
| salutation | Mr. Mrs. Ms. Dr. Mx. Ind.           | Salutation of the applicant.       |

* Required for Russia and Israel Applicants.
  * Error will be thrown IF first OR last are missing or null value is provided.
* Optional for other countries.

## numDependents

Number of dependents for the account holder.

|                       |
| --------------------- |
| `"numDependents": 0,` |

| Name          | Type   | Description                                                                                                                                                                     |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numDependents | Number | Provide number of Individuals the Account Holder Supports (excluding the account holder). Account holder must provide at least half of the person's total support for the year. |

## ownershipPercentage

Ownership percentage for individual that is associated with the account.

|                              |
| ---------------------------- |
| `ownershipPercentage": 100,` |

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| `ownershipPercentage` | number |             |

* Set ownership percentage for each indivdual associated with the account.
  * Joint: `ownershipPercentage` is ignored unless `type` is `tenants_common`.
  * IRA and TRUST: `ownershipPercentage` across all beneficiaries must add up to 100 or else error will be triggered.

## phones

Phone number of the associated individual.

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| `"phones": [ {"type": "Mobile", "number": "2034228988", "country": "USA", "isVerified": true} ],` |

| Name       | Type                                           | Description                                                                                                                                                                           |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | Work Home Fax Mobile Business                  | **Individual / Joint/ Retirement**: Mobile phone number is required. The user can provide additional phone numbers (ie. Home, Work) if desired.  **Org**: Business phone is optional. |
| number     | String; max characters 18                      | Phone number.                                                                                                                                                                         |
| country    | [3 Digit ISO Code](https://www.iso.org/obp/ui) | Country which phone number is associated to.                                                                                                                                          |
| isVerified | true false                                     | Indicate if mobile phone number has been verified.                                                                                                                                    |

* We use Google API to validate the Phone Number. The API allows for country code to be passed along with the phone number.
* Mobile Phone Number will be used for IBKR's Two-Factor Authentication.
* Interactive Brokers requires all applicants to be enrolled in two-factor authentication.
* Account holders will be prompted to enroll in two factor authentication within 1 month of the account being opened and funded OR after the third login to the white branded Interactive Brokers Online Portal
  * We offer HandyKey (mobile application). The application will be branded with your firms Logo.
    * [iOS](https://www.clientam.com/en/handysolutions/handy-trader.php?p=dsa)/[Android](https://www.clientam.com/en/handysolutions/handy-trader.php?p=dsa) – Configured within Mobile Application
    * Details: [https://ibkr.info/article/2260](https://ibkr.info/article/2260)
  * Two-factor authentication cannot be enabled for clients using RESTful Web API
* Two-factor authentication cannot be enabled by the advisor/broker on behalf even if Supplemental Power of Attorney is enabled.
* For joint accounts, error will be thrown if `number` is same for both account holders.

## residenceAddress

Provide the residential address where the individual physically resides.

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| \{`"residenceAddress": {"street1": "1 Tester Street", "city": "London", "state": "GB-ENG" ,"country":"GBR","postalCode": "SW10 9QL"},` |

| Name       | Type                                                 | Description                                                                            |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| country    | [3 Digit ISO Code](https://www.iso.org/obp/ui)       | Country which the applicant resides.                                                   |
| state      | [3166-2 ISO Code](https://www.iso.org/obp/ui#search) | State/Province which the applicant resides.                                            |
| city       | String; Max characters 100                           | City which the applicant resides.                                                      |
| postalCode | String; Max characters 20                            | Postal / Zip code. For countries that do not provide postal code, please enter "00000″ |
| street_1   | String; Max characters 200                           | Street which applicant resides                                                         |
| street_2   | String; Max characters 200                           | Street which applicant resides                                                         |

* If the mailing address is different from the address provided in Residence element, THEN you will also include MailingAddress element.
* Post Office Box is not accepted for Residential Address.
* Our system validates street_1 and street_2 included within Residence attribute to ensure Post Office Box address is not provided.
  * An error will be thrown if the below combinations are included within street_1 OR street_2:
    * PB
    * PO Box
    * Post Office Box
    * P.O. Box
    * In care of
    * General Delivery
  * Regular Expression to validate street_1 and street_2:
    * English: `(?:P(?:ost(?:al)?)?[\.\-\s]*(?:(?:O(?:ffice)?[\.\\s]*)?B(?:ox|in|\b|\d)|o(?:ffice|\b)(?:[-\s]*\d)|code)|box[-\s]*\d)`
    * Chinese Simplified: `PO Box (?i)\b((邮政信箱) [0-9]*)\bChinese Traditional: PO Box (?i)\b((郵政信箱) [0-9]*)\b`

## sameMailAddress

Indicate if the mailing address is different from the residential address.

|                            |
| -------------------------- |
| `"sameMailAddress": true,` |

| Name              | Type       | Description                                                                |
| ----------------- | ---------- | -------------------------------------------------------------------------- |
| `sameMailAddress` | true false | Indicate if the mailing address is different from the residential address. |

* IF  `"sameMailAddress": false,`THEN mailingAddress is required

## taxResidencies

Tax Residency information of associated individual.

|                                                                                 |
| ------------------------------------------------------------------------------- |
| `"taxResidencies": [ {"country": "USA", "tin": "132228833", "tinType": "SSN" }` |

* Provide the tax residency of the associated individual.
* Multiple tax residencies can be provided.

| Name    | Type                                                                | Description                                                                                                                                                                                                                                                                                                                               |
| ------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tinType | SSN NonUS_NationalId EIN                                            | **Individual / Retirement / Joint** Type of Tax ID number that is provided.  **SSN**: Required for United States citizens and residents.  **NonUS_NationalId**: Required for all other countries. \*For Non-U.S. Applicants, if the applicant does not have a Foreign Tax ID, then this can be excluded.  **Org / Trust** EIN is required |
| country | [3 Digit ISO Code](https://www.iso.org/obp/ui) OR Full Country Name | Country where the applicant pays taxes.                                                                                                                                                                                                                                                                                                   |
| tin     | String                                                              | Tax Identification Number.  United States citizens and Residents: This is required. Provide SSN of the applicant.  All other countries: if the applicant does not have a Foreign Tax ID, then this can be excluded.                                                                                                                       |

## translated

For applications submitted with dual language, indicate if data is translated.

|                        |
| ---------------------- |
| `"translated": false,` |

| Name       | Type       | Description                                                                                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| translated | true false | Indicates if the information is the translated version. It is used only when providing information in a different language and English. Default values is "false". |

* Indicates if the information is the translated version.
* It is used only when providing information in a different language and English.
* Default values is "false".
* If `hasTranslation` is set to `true`,

## w8Ben

Tax form for Non-U.S. Applicants only.

* Options for submitting tax form:
* Option 1: Advisor/IBroker collects the tax form records on your website and attaches the corresponding blank form in the JSON.
* Option 2: Advisor/IBroker will display the tax form on your website and client completes and signs the tax form electronically. Advisor/IBroker attaches the electronically completed and sign tax form along with the JSON.

|                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"w8Ben": { "name": "John Smith", "foreignTaxId": "2555558888", "tinOrExplanationRequired": true, "part29ACountry": "N/A", "cert": true, "blankForm": true, "taxFormFile": "Form5001.pdf", "proprietaryFormNumber": 5001, "electronicFormat": true }` |

| Name                  | Type                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| part29ACountry        | [3 Digit ISO Code](https://www.iso.org/obp/ui)           | Certify that the beneficial owner is a resident of **\<part29ACountry>** within the meaning of the income tax treaty between United States and that country.  > If the account holder is resident of a non-treaty country, enter N/A  >If the account holder qualifies for treaty benefits under US income tax treaty, please identify treaty.  >[Treaty Countries with United States](https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| name                  | String                                                   | Name listed on the W8 must = Applicants First Name + Middle Name (if Applicable) + Last Name + Suffix (if Applicable) \*Data is case and space sensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| blankForm             | true false                                               | Indicate if the Tax Form provided to IBKR is blank.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| signatureType         | Electronic                                               | Signature type recorded for the Tax Form.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| taxFormFile           | String                                                   | File name of the tax form provided to IBKR in the archive file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| foreignTaxId          | String                                                   | The foreign tax ID of the applicant. This should be the same as the TIN which was provided in the TaxResidency node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| proprietaryFormNumber | String                                                   | Form number if broker/advisor sends proprietary blank forms instead of using the form numbers provided by IBKR.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| explanation           | US_TIN TIN_NOT_DISCLOSED TIN_NOT_REQUIRED TIN_NOT_ISSUED | Required if client does not have a foreign taxID.Explanation for not providing either TIN or Foreign Tax Id:\[US_TIN] Account holder possesses US TIN; it will be added to W8 Form.  \[TIN_NOT_DISCLOSED] Country issues TIN; however, applicant is exempt from disclosing TIN under laws of the country.  \[TIN_NOT_REQUIRED] Account holder is not legally required to obtain TIN.  \[TIN_NOT_ISSUED] Country does not issue TIN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| cert                  | true false                                               | Under penalties of perjury, I declare that I have examined the information on this form and to the best of my knowledge and belief it is true, correct, and complete. By clicking each item, I further certify under penalties of perjury that:  >I am the individual that is the beneficial owner (or am authorized to sign for the individual that is the beneficial owner) of all the income to which this form relates or am using this form to document myself as an individual that is an owner or applicant of a foreign financial institution  >The person named on line 1 of this form is not a U.S. person,  >The income to which this form relates is:  >not effectively connected with the conduct of a trade or business in the United States,  >effectively connected but is not subject to tax under an income tax treaty, or  >the partner's share of a partnership's effectively connected income,  >The person named on line 1 of this form is a resident of the treaty country listed on line 9 of the form (if any) within the meaning of the income tax treaty between the United States and that country, and  >For broker transactions or barter exchanges, the beneficial owner is an exempt foreign person as defined in the instructions.   >By checking this box you confirm the information on this Form W-8BEN is correct. |
| submitDate            | YYYY-MM-DD                                               | For existing client, if firm has existing (valid) tax form on file for the account, include submitDate. submitDate represents date which client initially signed the tax form.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## w9

Tax form for U.S. Residents, Citizens, and Taxpayers.

* Options for submitting tax form:
* Option 1: Advisor/IBroker collects the tax form records on your website and attaches the corresponding blank form in the JSON.
* Option 2: Advisor/IBroker will display the tax form on your website and client completes and signs the tax form electronically. Advisor/IBroker attaches the electronically completed and sign tax form along with the JSON.

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"w9": {  "name": "paulina orr M ibllc test", "customerType": "Individual", "tin": "132228833", "tinType": "SSN", "cert1": true, "cert2": true, "cert3": true, "blankForm": true, "taxFormFile": "Form5002.pdf", "proprietaryFormNumber": 5002  }` |

| Name                  | Type             | Description                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cert1                 | true false       | The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me)                                                                                                                                                                                                                          |
| cert2                 | true false       | I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding |
| cert3                 | true false       | I am a U.S. Citizen or other U.S. Person                                                                                                                                                                                                                                                                                                              |
| customerType          | Individual Joint | Specify the account type                                                                                                                                                                                                                                                                                                                              |
| name                  | String           | Name listed on the W9 must = Applicants First Name + Middle Name (if Applicable) + Last Name + Suffix (if Applicable)\*Data is case and space sensitive.                                                                                                                                                                                              |
| signatureType         | Electronic       | Signature type recorded for the Tax Form.                                                                                                                                                                                                                                                                                                             |
| taxFormFile           | String           | File name of the tax form provided to IBKR in the archive file.                                                                                                                                                                                                                                                                                       |
| tin                   | String           | The applicant's SSN. This should be the same as the TIN which was provided in the TaxResidency node.                                                                                                                                                                                                                                                  |
| tinType               | SSN              | Will always be SSN for U.S. citizens and Residents.                                                                                                                                                                                                                                                                                                   |
| blankForm             | true false       | Indicate if the Tax Form provided to IBKR is blank.                                                                                                                                                                                                                                                                                                   |
| proprietaryFormNumber | String           | Form number if broker/advisor sends proprietary blank forms instead of using the form numbers provided by IBKR.                                                                                                                                                                                                                                       |

#### Specific to AssociatedIndividual for an Organization or Trust

## authorizedPerson

For orgs, individual that is completing the application and signing agreements.

|                             |
| --------------------------- |
| `"authorizedPerson": false` |

| Name               | Type       | Description                                                                                                                                         |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorizedPerson` | true false | Natural person who is completing the application ad has authority to sign agreements on behalf of the entity which the account is being opened for. |

* Individual will be required to provide corporate resolution or similar document authorization opening of the account and establishing that the person identified on the page can sign on behalf of he account holder and has authority to do so.
* Applicable for `associatedIndividuals` listed on an Org.

## authorizedTrader

Indicate if individual is authorized to place trades for the account.

|                              |
| ---------------------------- |
| `"authorizedTrader": false,` |

| Name               | Type       | Description                                                                       |
| ------------------ | ---------- | --------------------------------------------------------------------------------- |
| `authorizedTrader` | true false | Indicate if employee associated with the entity can trade on behalf of the trust. |

* Required if `entityTrustee` is listed for Trust.
* If only `entityTrustee` is provided as Trustee, at least one `employee` for the `entityTrustee` must be authorized to trade.
* If both `individual` AND `entityTrustee` are listed as Trustees, value can be set to `false` and `individual` will be set as the authorized trader

## authorizedToSignOnBehalfOfOwner

Indicate if individual is allowed to sign on behalf of the owner.

|                                             |
| ------------------------------------------- |
| `"authorizedToSignOnBehalfOfOwner": false,` |

| Name                              | Type       | Description                                                                      |
| --------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| `authorizedToSignOnBehalfOfOwner` | true false | Indicate if employee associated with the entity can sign on behalf of the owner. |

* Required if `entityTrustee` is listed for Trust.
* If only `entityTrustee` is provided as Trustee, at least one `employee` for the `entityTrustee` must be authorized to sign on behalf of the owner.
* If both `individual` AND `entityTrustee` are listed as Trustees, value can be set to `false` and `individual` will be authorized signer.

## primaryTrustee

Indicate if the individual is the primary trustee.

|                           |
| ------------------------- |
| `"primaryTrustee": true,` |

| Name             | Type       | Description                                            |
| ---------------- | ---------- | ------------------------------------------------------ |
| `primaryTrustee` | true false | Indicate if primary trustee associated with the trust. |

* Applicable for Australian Trust Accounts.
  * If Non-Australia trust, this is not required.
* Cannot be more than one primary trustee.
* If `entityTrustee` is provided, primary flag should be included for the `employee` associated with the `entityTrustee`
* If Individual Trustee, include flag for **`individual`**

## title

Provide title of the associated individual.

|                                              |
| -------------------------------------------- |
| `"titles": [ { "code": "Account Holder" } ]` |

| Name | Type                                                                                                                                    | Description                           |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| code | **Org-** Authorized Person  DIRECTOR OTHER OFFICER SECRETARY  **Org- Owner** SIGNATORY CEO OWNER  **Trust** Grantor Trustee Beneficiary | Title associated with the individual. |

* For Orgs and Trusts, set title for each individual that is associated with the account.
* For ORG if "`authorizedPerson": true`, title code should be one of:
  * DIRECTOR
  * OTHER OFFICER
  * SECRETARY
* For Trust, at least one trustee must be specified.
