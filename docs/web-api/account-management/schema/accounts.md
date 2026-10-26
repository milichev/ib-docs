[source](https://www.interactivebrokers.com/docs/web-api/account-management/schema/accounts)

# Accounts

### Account Configurations

## account

Mandatory attributes to be included within account

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| `"accounts": [ "externalId": "TEST12345", "baseCurrency": "USD", "margin": "RegT", "alias": "My Individual Account"}` |

| Name         | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| external_id  | String; max characters 64                                                                                                              | Identifier for the account. This will be specified by the counterparty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| baseCurrency | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Base currency for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| alias        | String; Max number of characters is 80                                                                                                 | Nick name for the account. If you create an account alias, the alias will replace the IBKR Account number on account statements, portal, and TWS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| margin       | Cash Margin RegT PortfolioMargin                                                                                                       | Type of margin rules to be applied to the account.  **Cash**: No margin capabilities. **Margin/RegT**: Rule based margin and offers 4:1 leverage intraday and 2:1 leverage overnight.Minimum Equity: $2,000 **Portfolio Margin**: Risk Based Model and can offer anywhere from a 6:1 leverage for a diverse portfolio; and down to a 3:1 leverage for a more concentrated portfolio.Minimum Equity: $100,000If the account falls below \$100,000 the account will be in close only mode. Note: Margin Trading is not available for Australia Residents or accounts underneath IB-AU. For IB-AU accounts, it will always be margin="CASH" |

## capabilities

Included if the applicant is requesting CLP (Complex Leverage Products) and/or LEVFX (Cash Forex) during account opening.

| Name         | Type      | Description                                                          |
| ------------ | --------- | -------------------------------------------------------------------- |
| capabilities | CLP LEVFX | CLP= Complex Leveraged Product.  LEVFX= Leveraged Forex (Cash Forex) |

|                                                            |
| ---------------------------------------------------------- |
| `"accounts": [  {  "capabilities": [  "CLP",  "LEVFX"  ],` |

* LEVFX allows you to trade currency pairs with leverage. With leveraged FX, you are able to trade larger position sizes with a smaller amount of margin. Leveraged FX trading to eligible clients.
* CLP for for Fully-Disclosed clients; the account holder must have a minimum of two years trading experience with stocks AND either options or futures.
* **Futures**
* 1 year, 1-10 Trades per year
  * This will not validate
  * Because client has less than two years trading Futures, client must take Futures Exam
* 2 years, 1-10 Trades per year
  * This will validate if Knowledge level is Good or Extensive
  * Will not validate if Knowledge Level is Limited
* **Options**
* 1 year, 1-10 Trades per year
  * This will not validate
  * Because client has less than two years trading Options, client must take Options Exam
* 2 years, 1-10 Trades per year

## investmentObjectives

Specify investmentObjectives for the applicant.

* Eligibility for TradingPermissions will vary based on the InvestmentObjectives.
* This cannot be hardcoded.
* *To Trade All Products*
  * Growth + Trading Profits + Speculation + Hedging
  * Growth + Speculation + Hedging
  * Growth + Speculation
  * Growth + Trading Profits
  * Hedging + Trading Profits
  * Speculation + Hedging
  * Speculation + Hedging + Trading Profits
* *Bonds Only*
  * Preservation of Capital only
* Income + Preservation of Capital + Growth= cannot include Options or Forex
* Income + Preservation of Capital + Growth + Hedging= cannot include Options

|                                                                  |
| ---------------------------------------------------------------- |
| `"accounts": [ { "investmentObjectives": [ "Income", "Growth"],` |

| Name      | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objective | Preservation Income Growth Trading Speculation Hedging | **Preservation of Capital:** Seek maximum safety and stability for your principal by focusing on securities and investments that carry a low degree of risk.  **Income**: Generate dividend, interest or other income instead of, or in addition to, seeking long-term capital appreciation.  **Growth**: Increase the principal value of your investments over time rather than seeking current income. Investor assumes higher degree of risk.  **Trading Profits**: Increase the principal value of your investments by using shorter term trading strategies and by assuming higher risk.  **Speculation**: Substantially increase the principal value of your investments by assuming substantially higher risk to your investment capital.  **Hedging**: Take positions in a product in order to hedge or offset the risk in another product. |

## tradingPermissions

Specify trading permissions for the account.

Permissions can be requested by exchange OR by product and market.

For `exchange_group`, use[`/api/v1/enumerations/exchange-bundles`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) endpoint to query list of available permissions.

* To trade Fractional Shares, include `"exchangeGroup": "IB-FRAC-STK".`

|                                                               |
| ------------------------------------------------------------- |
| `{ "tradingPermissions": [ { "exchangeGroup": "US-Sec", } ],` |

For bundle based, specify the country and Product. Table below includes a list of available products and countries.

| Name    | Type                                                                                                                                                                          | Description                                                                                                                                                                                                                                    |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| product | BONDS FUTURES FOREX FUTURES OPTIONS MUTUAL FUNDS STOCKS SINGLE STOCK FUTURES OPTIONS STOCK OPTIONS                                                                            | Product type being requested                                                                                                                                                                                                                   |
| country | All AUSTRALIA AUSTRIA BELGIUM CANADA FRANCE GERMANY HONG KONG ITALY JAPAN KOREA MEXICO NORWAY SINGAPORE SPAIN SWEDEN SWITZERLAND THE NETHERLANDS UNITED KINGDOM UNITED STATES | Region which user is requesting to trade the product. If ALL is selected, this includes all available regions for the PRODUCT. Available products based on region can be found [here](https://www.interactivebrokers.com/en/index.php?f=1563). |

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| \{`"tradingPermissions": [`  `{"country": "AUSTRALIA",`  `"product": "STOCKS"` `},`  `{"country": "AUSTRIA",` `"product": "STOCKS"` `},` |

### Optional Configurations

#### Fee Management

## advisorWrapFees

Specify fee schedule for the account.

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| `"advisorWrapFees": {  "strategy": "NO_FEE",  "chargeAdvisor": false,  "chargeOtherFeesToAdvisor": false  },` |

* Required for advisor-clients. Optionally, set fees based on predefined template that was created in Advisor Portal using `feeTemplateName`.
* Overview on advisor fees can be found [here](https://www.interactivebrokers.com/en/pricing/advisor-fees.php).

| Name          | Type                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| strategy      | NO_FEES AUTOMATED                                                                                                                                                                                                                                                                                                                                                                                         | **NO_FEES** = No management fees will be applied to the account. Management fees can be added after the account is approved/opened. Please note, if fees are applied after the account is approved/opened, the client will need to sign off on the fee change. **AUTOMATED**= Only if automated_fees_detail is included. Fees will be billed to the client's account with blanket client authorization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| chargeAdvisor | true false                                                                                                                                                                                                                                                                                                                                                                                                | Indicates whether commissions will be charged to the advisor account. By default, this is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| type          | ANNUALFLATFEE ANNUALFLATFEE_MONTHLY ANNUALFLATFEE_QUATERLY BLENDEDPERCENTOFEQUITY BLENDEDPERCENTOFEQUITY_EOM BLENDEDPERCENTOFEQUITY_EOQ BLENDEDPERCENTOFEQUITY_MONTHLY BLENDEDPERCENTOFEQUITY_QUARTERLY PERCENTOFEQUITY PERCENTOFEQUITY_EOM PERCENTOFEQUITY_EOQ PERCENTOFEQUITY_MONTHLY PERCENTOFEQUITY_QUARTERLY PERCENTOFNLV_CAP PERCENTOFNLV_CAP_EOPEQTY PERCENTOFNLV_CAP_EOPEQTY_Q PERCENTOFNLV_CAP_Q | *Annual Flat Fee; Entered as an annualized amount, applied on a daily, monthly or quarterly basis (apportioned by 252 days).* ANNUALFLATFEE ANNUALFLATFEE_MONTHLY ANNUALFLATFEE_QUATERLY  *Percentage of net liquidation with ranges; Enter up to five separate net asset-value ranges, and an annualized fee percentage for each.* BLENDEDPERCENTOFEQUITY BLENDEDPERCENTOFEQUITY_EOM BLENDEDPERCENTOFEQUITY_EOQ BLENDEDPERCENTOFEQUITY_MONTHLY BLENDEDPERCENTOFEQUITY_QUARTERLY  *Percentage of net liquidation. Entered as an annualized percentage, applied on a daily, monthly or quarterly basis.* PERCENTOFEQUITY PERCENTOFEQUITY_MONTHLY PERCENTOFEQUITY_QUARTERLY  *Percentage of net liquidation, calculated by using the End of Month\_/Quarter\_ Net Liquidation Value, the rate and the number of business days in a particular month period.* PERCENTOFEQUITY_EOM PERCENTOFEQUITY_EOQ  *Invoice; Specify the maximum percentage of the client's Net Asset Value that can be deducted as advisory fees each month or quarter.* PERCENTOFNLV_CAP PERCENTOFNLV_CAP_Q  *Period-End Invoice Limit; The Month End Balance and Quarter End Balance invoicing options allow advisors to invoice clients with limits calculated based on the ending value of the previous period.* PERCENTOFNLV_CAP_EOPEQTY PERCENTOFNLV_CAP_EOPEQTY_Q |
| maxFee        | Non-Negative Integer                                                                                                                                                                                                                                                                                                                                                                                      | Maximum fee to be charged to the client account, displayed as an annualized amount.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## feesTemplateName

Assign pre-defined fee template to an account. Fee template will need to created in the Advisor/Broker Portal.

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `feesTemplateName` | String | Name of the fee template being applied. Data is case and space sensitive. The `feesTemplateName` must match the name of the template which was previously created in the advisor/broker portal. [Details](https://www.ibkrguides.com/advisorportal/homemenu/configclientfeetemplate.htm?Highlight=fee%20template) |

|                                        |
| -------------------------------------- |
| `"feesTemplateName": "MyFeeTemplate",` |

Disclaimer: Fee schedule will automatically be applied once the account is opened and funded.

#### Funding

## depositNotification

Include funding instructions during client registration.

* During account opening, we support deposit notifications for Checks OR Wires. Our New Accounts team prioritizes applications that are already funded, so we encourage users to include funding instructions in the Application.
* CHECK: The request is indicating a check deposit notification. The client still needs to send the physical check to IBKR. The deposit notification is used by IBKR to match the deposited funds to the account.
* WIRE: The request is indicating a wire deposit notification. The client still needs to contact their bank to initiate the transfer. The deposit notification is used by IBKR to match the deposited funds to the account. For list of wire instructions by currency, please contact [dam@ibkr.com](mailto:dam@ibkr.com).
* Refer to [Funding Limitations](https://www.interactivebrokers.com/en/index.php?f=1544\&p=cash1)

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"depositNotification": {`  `"wireDetails": {`  `"bankName": "Macquarie"`  `},`  `"type": "WIRE",`  `"amount": 30000,`  `"currency": "AUD"`  `},` |

| Name          | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | CHECK WIRE                                                                                                                             | Specify how fund are being sent to IBKR.                                                                                                                                                                                                                                                   |
| amount        | Non-Negative Integer Value                                                                                                             | Amount being deposited to IBKR. If there is a discrepancy between amount included in the request versus actual amount sent to IBKR, the funds will not be automatically credited to the account. The applicant will need to contact our Customer Service team to verify the fund transfer. |
| currency      | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency of the funds being sent to IBKR.                                                                                                                                                                                                                                                  |
| bankName      | String                                                                                                                                 | Name of the sending institution. Only required for WIRE deposits                                                                                                                                                                                                                           |
| acctNumber    | String                                                                                                                                 | Account number at bank. Only required for CHECK deposits.                                                                                                                                                                                                                                  |
| routingNumber | String; max characters 9                                                                                                               | The routing number listed on the check. Only required for CHECK deposits.                                                                                                                                                                                                                  |
| checkNumber   | String; max characters 16                                                                                                              | The check number listed on the check sent to IBKR. Only required for CHECK deposits.                                                                                                                                                                                                       |

## extPositionsTransfers

* Initiate ACATS transfer to the IBKR Account. ACATS will automatically be initiated once the IBKR Account is approved/opened. During account opening, we support FULL OR Partial Transfers. This guide only provides information on FULL transfers. For information on PARTIAL transfers, please send an email to [dam@ibkr.com](mailto:dam@ibkr.com).
* Usage is optional.
* [Limitations and Time to Arrive](https://www.interactivebrokers.com/en/index.php?f=1544\&p=transfer)

|                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"extPositionsTransfers":  {  "type": "FULL",  "subType": "ACATS",  "brokerId": "0226",  "brokerName": "Wall Street Financial Group",`  `"accountAtBroker": "SOL12345", "sourceIRAType": "RO",  "ssn": "123232323",  "signature": "John Tester" "marginLoan": true, "shortPos": false, "optionPos": false, "authorizeToRemoveFund": true }` |

| Name            | Type                                                                                                | Description                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| type            | FULL PARTIAL                                                                                        | Indicate if this is a Full OR Partial Transfer.                                                                           |
| optionPos       | true false                                                                                          | Does the account hold option positions? Yes/No                                                                            |
| ssn             | String                                                                                              | SSN listed on the account (This should match the SSN which was listed in Identification element AND TaxResidency element) |
| brokerId        | Use [`/api/v1/enumerations/acats`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) to view values. | DTC Number of the sending institution                                                                                     |
| brokerName      | Use [`/api/v1/enumerations/acats`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) to view values. | Name of the sending Broker                                                                                                |
| signature       | String                                                                                              | This should match First Name + Middle Initial (If Applicable) + Last Name.                                                |
| subType         | ACATS                                                                                               | Static- will always be ACATS for ACATS transfer                                                                           |
| accountAtBroker | String                                                                                              | Account number at the sending institution.                                                                                |
| marginLoan      | true false                                                                                          | Does the account hold short positions? Yes/No                                                                             |

#### **Retirement Accounts**

## decendent

|                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"decendent": [  {  "name": {  "salutation": "Mr.",  "first": "paulina",  "last": "ibllc test",  "middle": "M"  },  "dateOfDeath": "2021-12-15",  "relationship": "Individual",  "inheritorType": I,  "identification": {  "SSN": "1231231212",  "citizenship": "USA",  },` |

| Name          | Type                                           | Description                                        |
| ------------- | ---------------------------------------------- | -------------------------------------------------- |
| dateOfDeath   | YYYY-MM-DD                                     | Date of Death.                                     |
| SSN           | String                                         | Social security number, required for the deceased. |
| citizenship   | [3 Digit ISO Code](https://www.iso.org/obp/ui) | Citizenship of the deceased.                       |
| inheritorType | I O T S                                        | I=Individual O= Other T= Trust S= Spouse           |
| relationship  | Individual Other Trust Spouse                  |                                                    |

## employeePlan

|                              |
| ---------------------------- |
| `"employePlan": "U1234456",` |

| Name         | Type   | Description                                                     |
| ------------ | ------ | --------------------------------------------------------------- |
| employeePlan | String | IBKR Account ID associate with the Employee Plan Administrator. |

* The `/api/v1/enumerations/employee-plans` can be used to view list of EPA's that are linked to the master.
* Error will be thrown if the Employee Plan Administrator is not associated with the master account.
* Employer will open an Employer Plan Admin account (**EPA**) directly with Interactive Brokers
* The advisor/broker master will submit a one-time linking request to the EPA
  * EPA will accept
* The SIMPLE IRA account will be linked to the EPA and Advisor.
  * Both the advisor/broker and EPA must have an open account with Interactive Brokers
* The EPA manages all contributions into the SIMPLE IRA account
* The advisor/broker can the trade on behalf of the SIMPLE IRA holder
* Advisor/broker can use all designated FA functionality, except initiating a deposit notification

## iraBeneficiaries

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"iraBeneficiaries": { "primaryBeneficiaries": [ { "name": { "salutation": "Mr.", "first": "Joe", "last": "Smith", "middle": "A" }, "dateOfBirth": "1967-11-09", "countryOfBirth": "USA", "residenceAddress": { "street1": "1 Tester Way", "city": "Stamford", "state": "CT", "country": "United States", "postalCode": "94510" }, "identification": { "citizenship": "United States", "ssn": "132121212", }, "externalId": "100883PB1", "sameMailAddress": true, "ownershipPercentage": 100, "relationship": "Husband" } ], "successor": false "spousePrimaryBeneficiary": false },` |

| Name                     | Type       | Description                                                        |
| ------------------------ | ---------- | ------------------------------------------------------------------ |
| spousePrimaryBeneficiary | true false | Indicate if the spouse is the primary beneficiary.                 |
| successor                | true false | Indicate if Successor. Only applicable for Canadian TSFA accounts. |

* If **MaritalStatus="M"** and **spouse_primary_beneficiary="false"** , the Spousal Consent Form (form_no="4091″) will be required for approval. Spousal Consent Form can be submitted to IBKR using '[DocumentSubmission](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts/patch) ' via [/update](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts/patch) endpoint.[Download Spousal Consent Form](https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration_v2.formSampleView?formdb=4091)

## ira & iraType

Required for retirement accounts.

* Indicate if retirement account and set retirement type.

|                                        |
| -------------------------------------- |
| `"iraType": "SIMPLE",` `"ira": "true"` |

| Name    | Type                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ira     | true false                                      | Default is false. If retirement account, set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| iraType | RI RO RT SP TH RH SH TFSA RRSP SRRSP SIMPLE ISA | Required IF `ira:"true"`  Applicable for United States residents only: RI= Traditional New RO = Traditional Rollover RT = Roth New SP= SEP New TH = Traditional- Inherited RH= Roth- Inherited SIMPLE Details: [https://www.interactivebrokers.com/en/index.php?f=14429](https://www.interactivebrokers.com/en/index.php?f=14429)  Applicable for Canadian residents only: TFSA= Tax Free Savings Account. RRSP = Registered Retirement Savings Plan. SRRSP= Spousal Registered Retirement Savings Plan. Details: [https://www.interactivebrokers.ca/en/index.php?f=11792](https://www.interactivebrokers.ca/en/index.php?f=13406\&p=tfsa)  Applicable for UK Residents ISA= Individual Savings Account Details: [https://www.interactivebrokers.co.uk/en/trading/isa-accounts.php](https://www.interactivebrokers.co.uk/en/trading/isa-accounts.php) |

#### Trading Configuration

## accountConfiguration

Manage LITE/PRO designation for account.

Available by request only, to use service, contact [dam@ibkr.com](mailto:dam@ibkr.com).

| Name  | Type          | Description                                 |
| ----- | ------------- | ------------------------------------------- |
| value | true false    | true: Enable service false: Disable Service |
| type  | LiteExecution | Configuration type                          |

|                                                                               |
| ----------------------------------------------------------------------------- |
| `"accountConfiguration": {`  `"type": "LiteExecution",`  `"value": true` `},` |

## accountType

Set trading account type, only applicable for clients facing IB-AU.

* Applicable for accounts facing IB-AU entity.

|                            |
| -------------------------- |
| `"accountType":"Trading",` |

| Name        | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountType | Investment Trading | **Investment**: For individual investors with 2K AUD minimum deposit and minimum liquid net worth of 20K AUD. No margin trading, limited options, unleveraged spot forex, and some low leverage derivatives trading allowed. **Trading**: Individual investors with a minimum of 10K Deposit AUD and minimum liquid net worth of 100K AUD or 20K AUD + 50K AUD minimum income. No trading on margin but limited options and unleveraged spot forex. |

## drip

Enroll account in the dividend reinvestment program.

* Dividend reinvestment (DRIP) is an option where you can elect how you wish to receive your dividends for stocks and mutual funds. Dividend Reinvestment is available to IB LLC, IB AU, IB CAN, IB HK, IB IE, IB JP, IB SG and IB UK clients only.
* Information on DRIP can be found [here](https://www.ibkrguides.com/clientportal/dividendreinvestment.htm).

|                  |
| ---------------- |
| `"drip": false,` |

| Name | Type       | Description                                                                                                                                                                                                                                |
| ---- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| drip | true false | Flag to indicate if the account will subscribe to Dividend Reinvestment Plan. IBKR offers a dividend reinvestment program whereby accountholders may elect to reinvest qualifying cash dividends to purchase shares in the issuing company |

## stockYieldProgram

Enroll account in the Stock Yield Enhancement Program.

* The Stock Yield Enhancement program provides customers with the opportunity to earn additional income on securities positions which would otherwise be segregated (i.e., fully-paid and excess margin securities) by permitting IBKR to lend out those securities to third parties. Customers who participate in the program will receive cash collateral to secure the return of the stock loan at its termination as well as interest on the cash collateral provided by the borrower for any day the loan exists.
* Information on Stock Yield Program can be found [here](https://www.interactivebrokers.com/en/pricing/stock-yield-enhancement-program.php).

|                               |
| ----------------------------- |
| `"stockYieldProgram": false,` |

| Name              | Type       | Description                                                                            |
| ----------------- | ---------- | -------------------------------------------------------------------------------------- |
| stockYieldProgram | true false | Flag to indicate if the account will enroll in IBKR's Stock Yield Enhancement Program. |

## limitedOptions

Enable access to limited options (Level 1 and Level 2)

|                           |
| ------------------------- |
| `"limitedOptions": false` |

| Name           | Type       | Description                                                         |
| -------------- | ---------- | ------------------------------------------------------------------- |
| limitedOptions | true false | Indicate if limited options trading is elected . Default is "False" |

* Limited option trading is available with ANY Investment Objective.
* Limited option trading lets you trade the following option strategies:
  * Long Call or Put
  * Covered Calls
  * Short Naked Put: Only if covered by cash
  * Call Spread: Only European-style cash-settled
  * Put Spread: Only European-style cash-settled
  * Long Butterfly: Only European-style cash settled
  * Iron Condor: Only European-style cash settled
  * Long Call and Puts
* Information on option levels can be found [here](https://www.ibkrguides.com/clientportal/optionstradingpermissions.htm).

## multiCurrency

Manage access to non-base currency products.

|                          |
| ------------------------ |
| `"multiCurrency": true,` |

| Name          | Type       | Description                                         |
| ------------- | ---------- | --------------------------------------------------- |
| multicurrency | true false | Indicate if this account is multi-currency capable. |

* By default, all accounts have access to currency conversion (eg. Multiple Currencies).

#### Supplemental

## accountRep

Designate account representative for the account.

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| `"accountRep": {`  `"repDetails": {`  `"repId": "potest123",`  `"percentage": 50`  `},` `"repId": "w3test123",`  `"percentage": 50`  `},` |

| Name       | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| **repId**  | String | Username associated with the account rep. |
| percentage | Number |                                           |

* Designate account representative for the account. The account representative represents user at master level.
* Multiple representatives can be assigned to a single account. Percentage across all reps must add up to 100.
* If representative is not user at master level, error will be thrown.

## migration

Indicate if account is part of bulk migration.

|                       |
| --------------------- |
| `"migration": false,` |

| Name      | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| migration | true false | Indicate if account is a migration account. |

* Only applicable for advisors/brokers that are completing bulk migration.
* Usage of this attribute is available by request only, contact [dam@ibkr.com](mailto:dam@ibkr.com).

## propertyProfile

Assign account property to an account.

|                                  |
| -------------------------------- |
| `"propertyProfile": "Standard",` |

| Name            | Type   | Description                      |
| --------------- | ------ | -------------------------------- |
| propertyProfile | String | Name of property being assigned. |

* Assign property profile to an account.
* Available by request only. To use this, contact [am-api@interactivebrokers.com](mailto:am-api@interactivebrokers.com).

## sourceAccountId

For advisors/brokers that are completing bulk migration, include account ID of the source account.

|                                   |
| --------------------------------- |
| `"sourceAccountId": "ABA123123",` |

| Name            | Type   | Description                                                            |
| --------------- | ------ | ---------------------------------------------------------------------- |
| sourceAccountId | String | The account ID associated with individuals account at delivering firm. |

* Only applicable for advisors/brokers that are completing bulk migration.
* Usage of this attribute is available by request only, contact [am-api@ibkr.com](mailto:am-api@ibkr.com).
