[source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/introduction)

# Introduction

When submitting a funding requests using the API, a `clientInstructionId` will be set within body of the request. The `clientInstructionId` is a unique identifier associated with the request which is set by the hosting firm; this value cannot be reused. IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. The maximum value is 20 digits.

### Status of Request

IBKR returns response within 30 seconds of funding request being submitted. The response will return one of the following status'

* `PROCESSED`: Request has been processed.
* `PENDING`: Pending Processing
* `REJECTED`: IBKR unable to process the request.

The `/gw/api/v1/client-instructions/{clientInstructionId}` endpoint can be used to poll for status of previously uploaded funding request based on the `clientInstructionId` associated with the request.

### Cancel Request

Cancel transaction that is currently in a `PENDING` status, this includes active recurring transaction that are scheduled for future date. The `/gw/api/v1/instructions/cancel` can be used to cancel a transaction; within the body of the request, include the `instructionId` that is associated with request that needs to be canceled.

## Example

| Name                | Type                       | Description                                                                                                                                                                                                                                       |
| ------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| instructionId       | String                     | IB instruction ID of the request that needs to be canceled.                                                                                                                                                                                       |
| reason              | String                     | Reason for canceling the request.                                                                                                                                                                                                                 |
| clientInstructionId | Number; max characters 20. | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused.  – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |

```
POST /gw/api/v1/instructions/cancel

{
  "instructionType": "CANCEL_INSTRUCTION",
  "instruction": {
    "clientInstructionId": "12001810",
    "instructionId": 43085477,
    "reason": "Testing"
  }
}
```

### Get Transaction History

The `/gw/api/v1/instructions/query` endpoint can be used to view information about historical transactions including cash deposits, cash withdrawals, inbound and outbound position transfers and internal transfers by `accountId`. The `daysToGoBack` attribute will be used to set lookback period and can be maximum of 7 days. Optionally, include `transactionType` to filter for a specific transaction.

**Rate Limit**: 1 request per 10 minutes.

## Example

```
POST /gw/api/v1/instructions/query

{
  "instructionType": "QUERY_RECENT_INSTRUCTIONS",
  "instruction": {
    "clientInstructionId": "7009001",
    "accountId": "U139838",
    "transactionHistory": {
      "daysToGoBack": 3
    }
  }
}
```

### Available Cash for Withdrawal

The `/gw/api/v1/external-cash-transfers/query` can be used to view the available cash for withdrawal with and without margin loan based on an `accountId` **AND** `currency`. For non-disclosed clients, this endpoint will return available cash to transfer between master and sub account.

Response will return following values:

* `withdrawableAmount`: Cash Amount available for withdrawal (assuming margin loan). Only applicable for Fully-Disclosed and Advisor Clients.
* `withdrawableAmountNoBorrow`: Cash Amount available for withdrawal (without margin loan). Only applicable for Fully-Disclosed and Advisor Clients.
* `allowedTransferAmountToMaster`: Allowed Transfer Amount to Master assuming margin loan. Only applicable for Non-Disclosed Clients.
* `allowedTransferAmountToMasterNoBorrow`: Allowed Transfer Amount(no_borrow) to Master. Only applicable for Non-Disclosed Clients.
* `withdrawableBalanceWithoutOriginHold`: The amount available for withdrawal without origination hold.

## Example

```
POST /gw/api/v1/external-cash-transfers/query

{
  "instructionType": "QUERY_WITHDRAWABLE_FUNDS",
  "instruction": {
    "clientInstructionId": "7009005",
    "accountId": "U87440",
    "currency": "USD"
  }
}
```
