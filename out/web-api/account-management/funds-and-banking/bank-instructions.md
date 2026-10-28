[source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/bank-instructions)

# Bank Instructions

In this section we will review how to create, view, and delete banking instructions using the Web API. Please be advised options available using the API are limited in comparison to methods that are supported using the IBKR Hosted Application.

### Add Bank Instructions

The `/gw/api/v1/bank-instructions` endpoint can be used to add banking instructions to an existing IBKR brokerage account. The banking instructions can be used to facilitate future fund transfers.

## ACH_INSTRUCTION

Create bank instructions for Automated Clearing House (ACH) transfer initiated by IBKR.

1. Counterparty will provide bank account information to IBKR (ach_instruction).
2. IBKR will provide a real-time response including a unique IBKR **id** and PENDING status.
3. IBKR verifies the ACH instruction using JPM's Account Validation Service (AVS) which leverages EWS' PaymentChek and Account Ownership Authentication services as a data source.
   * Verification can take anywhere from 7-15 minutes.
   * Notification will be sent via [/callback](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref-staging/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts~1%7BaccountId%7D~1login-messages/get) once verification has been completed. Optionally, poll for status using [/gw/api/v1/client-instructions/\{clientInstructionId}](../../api-reference/account-management/account-management-banking/get-client-instructions.md) endpoint.
4. Once verification has been completed, status will be updated to reflect one of:
   * **PROCESSED:** ACH Instruction was processed. The ACH instructions can be used for [DEPOSIT](cash-transfer/cash-transfer.md#deposit-funds) and [WITHDRAWAL](cash-transfer/cash-transfer.md#withdraw-funds) using the Web API or IBKR Portal (Transfer & Pay).
   * **PENDING**: EWS Verification is in progress.
   * **PENDING_VERIFICATION:** IBKR automatically sends micro amount to the bank account provided. Counterparty will need to submit micro amounts to IBKR using `"instructionType":"TRADITIONAL_BANK_INSTRUCTION_VERIFICATION"`
   * Once this step has been complete, the status will be updated to PROCESSED. The banking instructions can be used to submit [deposits](cash-transfer/cash-transfer.md#deposit-funds) and [withdrawals](cash-transfer/cash-transfer.md#withdraw-funds) using the Web API or IBKR Portal (Transfer & Pay).
   * **REJECTED :** Instruction cannot be verified using EWS. To proceed with ACH, client will need to log into the IBKR Portal to add instructions via IBKR hosted Portal. Optionally, the user can use different funding method will need to be used.

### Schema

| Name                | Type                             | Description                                                                                                                                                                                                                                       |
| ------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clientInstructionId | Number; max characters 20.       | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| bankInstructionCode | USACH                            | Static value and will always be USACH                                                                                                                                                                                                             |
| achType             | DEBIT_CREDIT DEBIT CREDIT        | DEBIT_CREDIT: ACH Instructions for deposits and withdrawals. DEBIT: ACH Instructions for deposits only. CREDIT: ACH instructions for withdrawals only.                                                                                            |
| bankInstructionName | String; max 32 characters        | Name of the instructions. This is defined by counterparty.                                                                                                                                                                                        |
| bankName            | String                           | Name of the bank.                                                                                                                                                                                                                                 |
| bankRoutingNumber   | Numeric value; max 9 characters. | Routing number associated with the bank.                                                                                                                                                                                                          |
| bankAccountNumber   | String; max 32 characters        | Bank account number.                                                                                                                                                                                                                              |
| bankAccountTypeCode | 1 2                              | 1: Checking 2: Savings  If unspecified, defaults to checking.                                                                                                                                                                                     |
| currency            | USD                              | Currency of the assets being transferred. Only supports USD at this time.                                                                                                                                                                         |
| accountId           | String; max 32 characters        | IBKR account ID associated with the client account.                                                                                                                                                                                               |

### Example

```
POST /gw/api/v1/bank-instructions

{"instructionType": "ACH_INSTRUCTION",
"instruction": 

{
"clientInstructionId": "1012983",
"bankInstructionCode": "USACH",
"achType": "DEBIT_CREDIT",
"bankInstructionName": "TestInstr",
"currency": "USD",
"accountId": "U223454",
"clientAccountInfo": {
"bankRoutingNumber": "202012983",
"bankAccountNumber": "101267576983",
"bankName": "JPM Chase",
"bankAccountTypeCode": 1
}
}
}
```

## TRADITIONAL_BANK_INSTRUCTION_VERIFICATION

Verify micro deposits for ACH instructions initiated via Web API.

1. We use EWS (Early Warning System) to verify ACH Instructions.
2. Within 1-3 business days, two random credits (deposits) each less than one dollar and a corresponding debit (withdrawal) will be issued to the clients bank account.
3. Client will need to monitor their bank account for these transactions as they will be needed to confirm this funding instruction. Note that these transactions may take place on different days.
4. Once the client has these amounts, submit `traditional_bank_instruction_verification` request to verify the amounts. Once verified, the client can use ACH instructions for deposit and withdrawal requests.

### Schema

| Name                 | Type                       | Description                                                                                                                                                                                                                                       |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clientInstructionId  | Number; max characters 20. | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| pendingInstructionId | number                     | Instruction id of the pending transaction.                                                                                                                                                                                                        |
| bankInstructionName  | String; max 32 characters  | Name of the banking instructions with IBKR. This should match the `bankInstructionName` that was provided in the `achInstruction` request.                                                                                                        |
| accountId            | String; max 32 characters  | Client account number at IBKR.                                                                                                                                                                                                                    |
| bankInstructionCode  | ACHUS                      | Static value and will always be ACHUS                                                                                                                                                                                                             |
| creditAmount1        | number                     | Cash amount that IBKR credited /debited to bank account. The order which the amounts are send does not matter. 3 attempts are allowed for confirming these credit amounts.                                                                        |
| creditAmount2        | number                     | Cash amount that IBKR credited /debited to bank account. The order which the amounts are send does not matter. 3 attempts are allowed for confirming these credit amounts.                                                                        |

### Example

```
POST /gw/api/v1/bank-instructions

{
"instructionType": "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION",
"instruction": {
"clientInstructionId": 7013057,
"bankInstructionCode": "USACH",
"bankInstructionName": "ACH-Tst1Random172",
"accountId": "U117717",
"pendingInstructionId": 43086786,
"creditAmount1": 0.32,
"creditAmount2": 0.46
}
}
```

## EDDA_INSTRUCTION

Create bank instructions for Electronic Direct Debit Authorization (EDDA). EDDA can be used transfer HKD and CNY between Hong Kong bank account and IBKR Brokerage account.

Electronic Direct Debit Authorization, applicable for individuals that maintain Hong Kong bank account.

The `/gw/api/v1/participating-banks` endpoint can be used to view list of participating banks which support connection with Interactive Brokers for **`eDDA`** transfers and includes bankClearingCode, BIC and bank name.

### Schema

| Name                             | Type                                     | Description                                                                                                                                                                                                                                       |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clientInstructionId              | Number; max characters 20.               | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| bankInstructionName              | String; max 100 characters               | Name of the instructions. This is defined by counterparty.                                                                                                                                                                                        |
| accountId                        | String; max 32 characters                | Client account number at IBKR.                                                                                                                                                                                                                    |
| bankBranchCode                   | String; max 3 characters                 | Branch code associated with bank.                                                                                                                                                                                                                 |
| bankAccountNumber                | String; max 32 characters                | Bank account number.                                                                                                                                                                                                                              |
| bankClearingCode                 | String; max 3 characters                 | The bankClearingCode can be obtained using `/gw/api/v1/participating-banks` endpoint.                                                                                                                                                             |
| debtorIdentificationDocumentType | hkid passport chinaId hkMacaoEntryPermit | ID document type                                                                                                                                                                                                                                  |

### Example

```
POST /gw/api/v1/bank-instructions

{
"instructionType": "EDDA_INSTRUCTION",
"instruction": {
"clientInstructionId": 7012743,
"bankInstructionName": "My EDDA Instructions",
"currency": "CNH",
"accountId": "U8072517",
"bankBranchCode": "003",
"bankAccountNumber": "132456",
"bankClearingCode": "003",
"debtorIdentificationDocumentType": "hkId"
}
```

## PREDEFINED_DESTINATION_INSTRUCTION

Service can be used to create standing bank instruction for withdrawals. Only available if all accounts associated with clientID maintain bank account at the same bank.

1. Create standing wire instructions.
2. If all clients have account at a single bank, IB will hard-code the bank on the back-end and only client's account # will be submitted to IB.

### Schema

| Name                  | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clientInstructionId   | Number; max characters 20.                                                                                                             | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123.                                                                           |
| bankInstructionName   | String; max 100 characters                                                                                                             | Name of the instructions. This is defined by counterparty.                                                                                                                                                                                                                                                                  |
| accountId             | String                                                                                                                                 | Client account number at IBKR.                                                                                                                                                                                                                                                                                              |
| bankInstructionMethod | ACH WIRE SEPA CPA                                                                                                                      | Static value and will always be ACHUS                                                                                                                                                                                                                                                                                       |
| currency              | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency for the bank instructions.                                                                                                                                                                                                                                                                                         |
| name                  | String; max 100characters                                                                                                              | Name of the financial institution.                                                                                                                                                                                                                                                                                          |
| branchCode            | String; max 32 characters                                                                                                              |                                                                                                                                                                                                                                                                                                                             |
| branchCodeType        | BSB_AUD BANK_CODE_CAD NONE                                                                                                             | Bank state branch code.                                                                                                                                                                                                                                                                                                     |
| identifier            | String; max 16 characters                                                                                                              |                                                                                                                                                                                                                                                                                                                             |
| identifierType        | IFSC BIC                                                                                                                               | **IFSC**: The Indian Financial System Code (IFSC) is an 11-character alphanumeric code that identifies a bank branch in India **BIC**: Bank Identifier Code, is a unique code that identifies a financial institution and is used for international money transfers. BICs are also known as SWIFT codes or SWIFT addresses. |
| clientAccountId       | String; max 32 characters                                                                                                              | Account number at financial institution                                                                                                                                                                                                                                                                                     |

### Example

```
POST /gw/api/v1/bank-instructions

{
"instructionType": "PREDEFINED_DESTINATION_INSTRUCTION",
"instruction": {
"clientInstructionId": 7013053,
"bankInstructionName": "Test Wire Instructions",
"bankInstructionMethod": "WIRE",
"accountId": "U123456",
"currency": "USD",
"financialInstitution": {
"name": "Test Bank",
"branchCode": "0",
"branchCodetype": "BSB_AUD",
"identifier": "SBIN001000",
"identifierType": "BIC",
"clientAccountId": "132456789"
}
}
}
```

### View Saved Bank Instructions

When initiating deposit or withdrawal, the user can save the banking information, also referred to as the `bankInstructionName.` If banking information is saved, the user can reference the bank information for future funding requests rather than re-entering the banking information. The `/gw/api/v1/bank-instructions/query` endpoint can be used to view list of saved banking instructions on file by `accountId` and `bankInstructionMethod`. The response will return the corresponding `bankInstructionName` and, `bankRoutingNumber`, `currency` last 4 digits of the `bankAccountNumber` (if applicable).

## Example

```
POST /gw/api/v1/bank-instructions/query

{
  "instructionType": "QUERY_BANK_INSTRUCTION",
    "instruction": {
    "clientInstructionId": "1012983",
    "accountId": "U46377",
    "bankInstructionMethod": "ACH"
  }
}
```

### Delete Bank Instructions

The `/gw/api/v1/bank-instructions` can be used to delete banking instructions (`bankInstructionName`) for an existing account by `bankInstructionName`, `currency`, and `bankInstructionMethod`. Users are limited to 6 active banking instructions at a single time.

## Example

```
POST /gw/api/v1/bank-instructions

{
  "instructionType": "DELETE_BANK_INSTRUCTION",
  "instruction": {
    "clientInstructionId": 7013055,
    "accountId": "U46377",
    "bankInstructionName": "Test Delete",
    "bankInstructionMethod": "WIRE",
    "currency": "USD"
  }
}
```
