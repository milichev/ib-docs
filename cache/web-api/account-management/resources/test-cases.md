> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Test Cases

## Client Registration – Regression Test Cases

* General
  * meetAmlStandard is set to false
  * mdStatusNonPro is set to false
  * prefix is set to teste
  * Invalid baseCurrency is provided (Eg. USDD)
  * externalId has already been processed
* name
  * Name includes special characters, numbers, or white spaces
  * Single letter provided for last name
  * First name is null
* dateOfBirth
  * Applicant is less than 18 years old
* countryOfBirth
  * Country of Birth is a prohibited country (eg. AFG)
  * Country of Birth is United States (eg. USA)
* residenceAddress
  * Country of Residence is a prohibited country (eg. AFG)
  * Country of Residence is United States (eg. USA)
  * Country of Residence is different from Tax Residency Country and part29aCountry for W8Ben
  * State provided as full state name versus the ISO code
  * street1 exceeds 200 characters
  * Postal code is null
* email
  * Email address is null
  * Email address is same as the master account
  * Invalid email provided (eg. tester\@gmail)
* identification
  * Country of Citizenship is a prohibited country (eg. AFG)
  * Country of Citizenship is United States (eg. USA)
  * Invalid ID Type is provided
  * expire is set to true AND expirationDate is missing
  * expirationDate is past date
  * ID Type and ID document is missing
  * SSN is provided and issuingCountry **is not** United States
* employmentType and employmentDetails
  * employmentType is null
  * employmentType is EMPLOYED and
    * employmentDetails is missing
    * occupation and/or employerBusiness is null
    * occupation and/or employerBusiness = 'Other'
    * employerAddress is missing
    * State provided as full state name versus the ISO code
    * street1 exceeds 200 characters
    * Postal code is null
    * country of employment is different from country of residence
    * occupation/employerBusiness is not an IBKR enumeration value
* taxResidencies
  * tax residency country AND part29ACountry are different
  * TIN and w8Ben.foreignTaxId are different
  * TIN AND w8Ben.explanation are provided
  * SSN is provided as TINType and country **is not** United States
* w8Ben
  * blankForm is set to FALSE **AND** sha1Checksum reflects sha1Checksum of a blank form.
  * part29ACountry is N/A AND explanation is missing
  * part29ACountry is null
  * name **is** different from the name.first + name.middle + name.Last
* financialInformation
  * liquidNetWorth is greater than netWorth
  * netWorth, liquidNetWorth, annualNetIncome is between 101 to 999
  * netWorth, liquidNetWorth, annualNetIncome is a negative value
  * netWorth, liquidNetWorth, annualNetIncome is null
* regulatoryDetail
  * status is set to true AND details is missing
  * ControlPubTraded and/or EmployeePubTrade are missing
* documents
  * signedBy **does not** match name.first + name.middleInitial + name.last
  * signedBy is missing
  * sha1checksum does not match sha1checksum of the form provided
  * formNumber is 8001 AND proofOfIdentityType is missing