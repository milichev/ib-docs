[source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/internal-transfer)

# Internal Transfer

Internally transfer cash/positions between IBKR accounts based on eligibility.

**Processing Time**: Our system does not allow internal transfers on Saturdays (any time), Sundays before 3PM EST, and on any evening between 11:45PM-12:30AM EST. Requests submitted outside of these times are processed in real-time.

### Transfer Cash Internally

The [/gw/api/v1/internal-cash-transfer](../../api-reference/account-management/account-management-banking/create-internal-cash-transfers.md) can be used to transfer cash internally between IBKR accounts based on eligibility.

* **Non-Disclosed**: Transfer cash between Non-Disclosed Master and Non-Disclosed Sub.
* **Fully-Disclosed:** Transfer cash from Fully-Disclosed master to sub account.
* **All Accounts**: Internal transfers supported between existing IBKR accounts IF both source and destination account have matching account titles, country of residence, tax ID, and are associated with the same IB Entity.

Requests submitted outside of downtime are processed in real-time and will be immediate (max of 15 seconds), if request is unable to be processed in 15 seconds, the request will move to a `PENDING` status. Optionally, include `dateTimeToOccur` to schedule transaction for set time in the future.

## Request Parameters

| Name                | Type                                                                                                                                   | Description                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sourceAccountId     | String                                                                                                                                 | Account which funds are being sent from.                                                                                                                                                                                                         |
| clientInstructionId | Number; Max characters 20.                                                                                                             | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType     | INTERNAL_CASH_TRANSFER                                                                                                                 | Type of Transaction.                                                                                                                                                                                                                             |
| amount              | number > 0                                                                                                                             | Amount of cash being transferred.                                                                                                                                                                                                                |
| targetAccountId     | String                                                                                                                                 | Account which funds are being sent to.                                                                                                                                                                                                           |
| currency            | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency of the funds being sent to IBKR.                                                                                                                                                                                                        |
| dateTimeToOccur     | 2016-04-13T23:15:00+04:00 (UTC plus 4 hours)  2016-04-13T23:15:00-04:00  (UTC minus 4 hours)                                           | Date which the transfer should take place. \*This is optional.                                                                                                                                                                                   |
| clientNote          | String; Maximum of 64 characters.                                                                                                      | Note associated with the internal cash transfer request. Note will be reflected on the client statement. This field is optional.                                                                                                                 |

```
POST /gw/api/v1/internal-cash-transfers

{
  "intructionType": "INTERNAL_CASH_TRANSFER",
  "instruction": {
    "clientInstructionId": "1012983",
    "sourceAccountId": "U46377",
    "targetAccountId": "U15667",
    "amount": 123.45,
    "currency": "GBP",
    "dateTimeToOccur": "2018-03-20T09:12:13Z"
  }
}
```

### Transfer Positions Internally

The [/gw/api/v1/internal-asset-transfers](../../api-reference/account-management/account-management-banking/create-internal-asset-transfers.md) can be used to transfer positions internally between IBKR accounts based on eligibility.

* **All Accounts**: Internal transfers supported between existing IBKR sub accounts IF both source and destination account have matching account titles, country of residence, tax ID, and are associated with the same IB Entity.
* **Non-Disclosed and Omnibus:** Internal transfer supported between sub accounts that are linked to the same master account.

#### Processing

Our system processes 200 requests every 5 minutes, this is an asynchronous process. If a bulk request of 600 transfer requests submitted. This will take 15 minutes to be processed (total of 3 batches). Users may be subject to additional fee if submitting more than 1000 internal position transfer requests daily.

## Request Parameters

| Name                | Type                                                                                                                                   | Description                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId | Number; max characters 20.                                                                                                             | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType     | INTERNAL_POSITION_TRANSFER                                                                                                             | Type of transaction                                                                                                                                                                                                                              |
| securityId          | String                                                                                                                                 | CUSIP/ISIN number of the security being transferred.                                                                                                                                                                                             |
| transferQuantity    | Number                                                                                                                                 | Number of shares being transferred in/out                                                                                                                                                                                                        |
| assetType           | STK                                                                                                                                    | Product type. Internal transfer for Non-STK products (ie. Options, Bonds) are only supported using CONID (not ISIN). We do not require asset_type to be specified when submitting internal transfer using CONID.                                 |
| securityIdType      | CUSIP ISIN CASH                                                                                                                        | Used to determine securityId type that was provided. Either ISIN or CUSIP.                                                                                                                                                                       |
| conId               | String                                                                                                                                 | Unique Contract ID assigned by Interactive Brokers.                                                                                                                                                                                              |
| currency            | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency of the assets being transferred.                                                                                                                                                                                                        |
| country             | Alpha-3 code (ISO)                                                                                                                     | Country which the contra broker is located.                                                                                                                                                                                                      |
| sourceAccountId     | String                                                                                                                                 | Account which funds are being sent from.                                                                                                                                                                                                         |
| targetAccountId     | String                                                                                                                                 | Account which funds are being sent to.                                                                                                                                                                                                           |

2 options for submitting request (securityId **OR** conId)

***Option 1: Using securityId***

```
POST /gw/api/v1/internal-asset-transfers
{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013044,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "position": 106,
    "transferQuantity": 6,
    "tradingInstrument": {
      "tradingInstrumentDescription": {
        "securityIdType": "ISIN",
        "securityId": "459200101",
        "assetType": "STK"
      },
      "currency": "USD"
    }
  }
}
```

***Option 2: Using conId***

```
POST /gw/api/v1/internal-asset-transfers

{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013043,
    "sourceAccountId": "U399192",
    "targetAccountId": "U87440",
    "position": 106,
    "transferQuantity": 6,
    "tradingInstrument": {
      "conId": 21323,
      "currency": "USD"
    }
  }
}
```
