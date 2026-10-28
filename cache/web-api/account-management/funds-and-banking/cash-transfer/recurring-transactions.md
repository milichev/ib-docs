> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Recurring Transactions

When initiating a deposit or withdrawal request, include `recurDetail` with transaction details to configure recurring transaction.

* `instruction_name`: This is the name of the saved recurring transaction and will be displayed within Client Portal under 'Recurring Transactions' page.
* `frequency`: Schedule the transaction to recur at monthly, quarterly or annual intervals.
* `start_date`: Entered in the format `YYYY-MM-DD`, this indicates the first date that the recurring transaction should be processed.
* `end_date`: The `end_date` is optional and indicates the last date that the recurring transaction should be processed. If null, the transaction will recur indefinitely canceled.

The transaction information entered will be saved and the transaction will recur at the `frequency` and on the `start_date` which was entered. In the event the transaction falls on a US non-business day under normal circumstances, we will process the request on the business day prior to the recurring transaction date. In the even this processing leads to multiple withdrawals during the same month, the account holder will be assessed withdrawal fees.

## Example

```
POST /gw/api/v1/external-cash-transfers

{
  "instructionType": "DEPOSIT",
  "instruction": {
    "clientInstructionId": 7013047,
    "accountId": "U46377",
    "currency": "USD",
    "amount": 100,
    "bankInstructionMethod": "WIRE",
    "sendingInstitution": "Sending Institution name",
    "recurDetail": {
      "instruction_name": "Arkansas-Test-Instr",
      "start_date": "2023-10-16",
      "frequency": "MONTHLY"
    }
  }
}
```

### Cancel Recurring Transaction

Recurring transactions that are initiated using the API can be canceled by calling `/gw/api/v1/instructions/cancel` endpoint. Within the body of the request, include the `instructionId` of the recurring transaction to be canceled. The `instructionId` is a unique value assigned by IBKR at creation of the recurring transaction.

Optionally, instructions can be managed within IBKR Portal under **Transfer & Pay > [Saved Information](https://www.ibkrguides.com/clientportal/transferandpay/savedinfo.htm).**

## Example

```
POST /gw/api/v1/instructions/cancel

{
  "intructionType": "cancel_instruction",
  "instruction": {
    "clientInstructionId": "12001810",
    "instructionId": 43085477,
    "reason": "Testing"
  }
}
```

### View Recurring Instructions

The `/gw/api/v1/bank-instructions/query` endpoint can be used to view active recurring instruction details by `accountId`. Details include type, method, amount, currency, frequency, start date, and end date.

## Example

```
POST /gw/api/v1/bank-instructions/query 

{
  "instructionType": "get_bank_instruction_details",
  "instruction": {
    "clientInstructionId": "1012983",
    "accountId": "U399192"
  }
}
```

### View Recurring Transactions

View historical transactions associated with a recurring instruction. The look back period is set by `numberOfTransactions`. Response will include the recurring instruction details and status of the individual `recurringTransactionStatus`.

## Example

```
POST /gw/api/v1/bank-instructions/query 

{
  "instructionType": "QUERY_RECURRING_EVENTS",
  "instruction": {
    "clientInstructionId": "1012983",
    "ibReferenceId": 206603050,
    "numberOfTransactions": 100
  }
}
```