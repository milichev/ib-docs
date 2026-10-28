[source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/cash-transfer/cash-transfer)

# Introduction

With support for over 20 + currencies, IBKR provides clients the flexibility to make deposits or withdrawals in base and non-base currency balances. Specific currency restrictions may apply, this is determined based on individuals country of residence and the selected funding method. Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php).

The `/gw/api/v1/external-cash-transfers` can be used to manage cash transfers between external bank account and the IBKR brokerage account. Transfer details including method (`ACH` and `WIRE`), transaction type (`DEPOSIT` or `WITHDRAWAL`), `currency`, and `amount` will be defined within the body of the request.

To supplement the sample requests found in the [API reference documentation](../../../api-reference/account-management/account-management-banking/create-external-cash-transfers.md), we've provided a details breakdown of body parameters and their usage in the section that follows.

## Request Parameters

| Name                     | Type                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accountId                | String                                                                                                                                                                           | IBKR account ID of the advisor/broker client account which funds are being deposited to.                                                                                                                                                                                                                                                                                       |
| instructionType          | DEPOSIT WITHDRAWAL                                                                                                                                                               | Type of transaction.                                                                                                                                                                                                                                                                                                                                                           |
| clientInstructionId      | Number; max characters 20.                                                                                                                                                       | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123.                                                                                                                              |
| amount                   | number > 0                                                                                                                                                                       | Amount being deposited to the clients IBKR Account.                                                                                                                                                                                                                                                                                                                            |
| bankInstructionMethod    | WIRE  ACH SEPA                                                                                                                                                                   | WIRE: Electronic fund transfer through the fed wire system.  ACH: Includes US Automated Clearing House, Single Euro Payment Area, Canadian Electronic Funds Transfer.                                                                                                                                                                                                          |
| currency                 | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php).                                           | Currency of the funds being sent to IBKR.                                                                                                                                                                                                                                                                                                                                      |
| bankInstructionName      | String; maximum of 150characters.                                                                                                                                                | Name of the previously created instruction (saved bank/account number. Only required for ACH initiated by IBKR.                                                                                                                                                                                                                                                                |
| identifier               | String; maximum of 64characters.                                                                                                                                                 | Bank Account Number                                                                                                                                                                                                                                                                                                                                                            |
| sendingInstitution       | String; maximum of 128 characters.                                                                                                                                               | Bank Name                                                                                                                                                                                                                                                                                                                                                                      |
| specialInstruction       | String; maximum of 128 characters.                                                                                                                                               | Any special instructions associated with the deposit.                                                                                                                                                                                                                                                                                                                          |
| iraContributionType      | ROLLOVER LATE_ROLLOVER EMPLOYER_SEP_CONTRIBUTION DIRECT_ROLLOVER CONTRIBUTION SPOUSAL_CONTRIBUTION                                                                               | ROLLOVER: Amount is distributed from a retirement account and 'rolled over' to the same or other retirement account LATE_ROLLOVER: Late rollover EMPLOYER_SEP_CONTRIBUTION: Simplified employee pension – employer contribution DIRECT_ROLLOVER: Direct rollover from a qualified plan CONTRIBUTION: Regular IRA contributions SPOUSAL_CONTRIBUTION: Spousal IRA contributions |
| iraTaxYearType           | CURRENT PRIOR                                                                                                                                                                    | Current: Current Tax Year Prior: Prior Tax Year                                                                                                                                                                                                                                                                                                                                |
| fromIraType              | NONE TRADITIONAL ROLLOVER ROTH SEP EDUCATION TRADITIONAL_INHERITED ROTH_INHERITED SEP_INHERITED RETIREMENT_SAVINGS_PLAN SPOUSAL_RETIREMENT_SAVINGS_PLAN TAX_FREE_SAVINGS_ACCOUNT |                                                                                                                                                                                                                                                                                                                                                                                |
| instructionName          | String                                                                                                                                                                           | Name of the recurring transaction.                                                                                                                                                                                                                                                                                                                                             |
| frequency                | MONTHLY QUARTERLY YEARLY                                                                                                                                                         | Frequency which the transaction will take place.                                                                                                                                                                                                                                                                                                                               |
| startDate                | YYYY-MM-DD                                                                                                                                                                       | Date which recurring transaction will start.                                                                                                                                                                                                                                                                                                                                   |
| endDate                  | YYYY-MM-DD                                                                                                                                                                       | Date which the recurring transaction will end.                                                                                                                                                                                                                                                                                                                                 |
| fedIncomeTaxPercentage   | Number > 0                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                |
| stateIncomeTaxPercentage | Number > 0                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                |
| stateCd                  | 2 digit state code.                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                |
| iraWithholdType          | DIRECT_ROLLOVER ROTH_DISTRIBUTION NORMAL EARLY DEATH EXCESS_CY EXCESS_PY EXCESS_SC                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                |

### **Deposit Funds**

Deposit cash into the brokerage account for trading. The funding process and time for funds to arrive will vary based on the method. Please be advised that methods available via the Web API are limited in comparison to options that are supported within the [IBKR Hosted Portal](https://www.ibkrguides.com/clientportal/transferandpay/deposit.htm).

#### Wire Deposit

Wire deposit is the quickest method to fund the brokerage account. Wire deposits arrive immediately to four business days, depending on your bank. Non-U.S. banks are generally at the longer end of the range. Credit to account is immediate upon arrival.

* Fees: Determined by your bank, generally **fees do apply**.
* Trading Hold: Funds are immediately available for trading after arriving at IBKR.
* Withdrawal Hold: Funds are available for withdrawal after **three business days**.

A two-step process is used to complete a bank wire:

Step 1: Create deposit notification so that IBKR is aware of the incoming funds. This important step helps ensure the proper routing of your funds if we do not receive your IBKR account number / account title from the wire template you setup at your bank.

Step 2: Contact bank to request bank wire and supply the bank with IBKR's wiring instructions.

* IBKR wire instructions will vary based on the **currency** AND **account ID** which the account is associated with. Wire instructions can be obtained using `/api/v1/enumerations/wire-instructions`.

## Example

```
POST /gw/api/v1/external-cash-transfers
{
  "instructionType": "DEPOSIT",
  "instruction": {
    "clientInstructionId": 7013045,
    "accountId": "U46377",
    "currency": "USD",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "sendingInstitution": "Chase Bank",
    "identifier": "123456",
    "specialInstruction": "My Deposit",
    "bankInstructionName": "Instruction",
  }
}
```

#### ACH Deposit

U.S. residents with [linked bank account](../bank-instructions.md) can seamlessly deposit funds to their IBKR brokerage account using ACH initiated at IBKR.

* Fees: Free
* Trading Hold: For initial deposit, the first deposit is available to trade four business days after initiating the deposit in Client Portal. Subsequent deposits may be available immediately (depending on tenure, deposit history and account balance). Otherwise, four business days to trade.
* Withdrawal Hold: Funds are available for withdrawal to the originating bank account after five business days. If you wish to withdraw the funds to an account other than the originating bank account, the hold period is 44 business days.

More information on ACH can be found [here](https://www.interactivebrokers.com/lib/cstools/faq/#/content/47455653).

## Example

```
POST /gw/api/v1/external-cash-transfers
{
  "instructionType": "DEPOSIT",
  "instruction": {
    "clientInstructionId": 7013045,
    "accountId": "U46377",
    "currency": "USD",
    "amount": 100,
    "bankInstructionMethod": "ACH",
    "bankInstructionName": "My Checking Account",
  }
}
```

### **Withdraw Funds**

Withdrawal requests can be initiated via the Web API if standing bank instructions are on file.

* Withdrawal limit is 100K USD. Withdrawal requests for more than 100K USD will need to be summited via the IBKR hosted portal.
* IBKR allows two free withdrawals request per calendar month. After the second withdrawal (of any kind), IBKR will charge the fees listed below for any subsequent withdrawal.
* Information on processing time and fees can be found [here](https://www.interactivebrokers.com/en/pricing/other-fees.php).

#### Wire Withdrawal

At the present, IBKR infrastructure only supports creation of wire withdrawal instructions within IBKR Hosted (not via API). Once instructions have been created, ongoing withdrawal requests can be submitted for standing instruction using the API.

###### *Add Wire Instructions via IBKR Portal*

* [Advisors](https://ibkrguides.com/advisorportal/addadvauth.htm?Highlight=streamline) and [brokers](https://www.ibkrguides.com/brokerportal/clientserviceprogram.htm) enrolled in Streamlined program can create manage banking instructions on behalf of client within IBKR Portal Broker.
* End user can create banking instructions directly within IBKR Portal under **Transfer & Pay > [Transfer Funds](https://www.ibkrguides.com/clientportal/transferandpay/enterwithdrawal.htm).** Alternatively, connect user to IBKR Portal using [Single Sign On (SSO)](../../single-sign-on.md) and set deep link.

## Example

```
POST /gw/api/v1/external-cash-transfers

{ "instructionType": "WITHDRAWAL", 
 "instruction": {    "clientInstructionId": 7013048,
    "accountId": "U46377",
    "bankInstructionName": "Test Withdrawal",
    "bankInstructionMethod": "WIRE",
    "amount": "123.45",
    "currency": "USD",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  }
```

#### ACH Withdrawal

U.S. residents with [linked bank account](../bank-instructions.md) can seamlessly withdraw funds from IBKR brokerage account to bank account via ACH.

## Example

```
POST /gw/api/v1/external-cash-transfers

{
  "instructionType": "WITHDRAWAL",
  "instruction": {
    "clientInstructionId": 7013048,
    "accountId": "U46377",
    "bankInstructionName": "Test Withdrawal",
    "bankInstructionMethod": "ACH",
    "amount": "500.12",
    "currency": "USD",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  }
}
```

## Wire Instructions

This `/api/v1/enumerations/wire-instructions` can be used to retrieve the necessary banking details and wire transfer instructions required to deposit funds into your IBKR trading account. The response will include recipient bank information, account details, and any specific reference codes needed to ensure proper crediting of your deposit.

| Name        | Value                                                                                                                                  | Description                                      | Usage    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| `accountId` | IBKR Client Account Number                                                                                                             |                                                  | Required |
| currency    | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency which wire instructions are needed for. | Required |

**Important Notes:**

* Wire instructions are subject to change and will vary based on currency
* It is recommended that you call this endpoint prior to depositing funds to IBKR to ensure you have the most current and accurate wire transfer details

## Example

```
POST /api/v1/enumerations/wire-instructions?currency=USD&accountId=U123456
{
    "enumerationsType": "wire-instructions",
    "jsonData": [
        {
            "currency": "USD",
            "accountNameAndBeneficiary": "Interactive Brokers LLC, One Pickwick Plaza, Greenwich, Connecticut, 06830, United States",
            "accountNumber": "12345678(Account Number)",
            "routingNumber": "12345678(ABA Code)",
            "bankSWIFTCode": "CHASUS33XXX",
            "bankTitleAndAddress": "JPMORGAN CHASE BANK, N.A., 383 Madison Avenue, New York, 10017, United States",
            "alternateAccountInfo": "",
            "paymentReference": "U123456/ IBLLC Test Test Account"
        }
    ]
}
```
