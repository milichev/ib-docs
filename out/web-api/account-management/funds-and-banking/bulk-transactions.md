[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/bulk-transactions)

# Bulk Transactions

## Internal Cash Transfer (Bulk)

The `/v1/clients/{client-id}/internal-cash-transfers:bulk` can be used to transfer cash internally between IBKR accounts based on eligibility.

* Up to 100 transfer requests can be included within single instruction set.
* Batch processing every 30-60 seconds unless `dateTimeToOccur` is specified. Transfer will be processed for `dateTimeToOccur`. For instant transfers, use [`internal_cash_transfer`](internal-transfer.md).

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

### Example

`[POST] /v1/clients/{client-id}/internal-cash-transfers:bulk { "instructionType": "INTERNAL_CASH_TRANSFER", "instructions": [ { "clientInstructionId": 1, "sourceAccountId": "U345", "targetAccountId": "U87440", "amount": 123.45, "currency": "GBP", "dateTimeToOccur": "2018-03-20T09:12:13Z" }, { "clientInstructionId": 2, "sourceAccountId": "U345", "targetAccountId": "U87440", "amount": 123.45, "currency": "GBP", "dateTimeToOccur": "2018-03-20T09:12:13Z" }, { "clientInstructionId": 3, "sourceAccountId": "U399192", "targetAccountId": "U87440", "amount": 123.45, "currency": "GBP", "dateTimeToOccur": "2018-03-20T09:12:13Z" }, { "clientInstructionId": 4, "sourceAccountId": "U399192", "targetAccountId": "U87440", "amount": 123.45, "currency": "GBP", "dateTimeToOccur": "2018-03-20T09:12:13Z" } ] }`

## Internal Position Transfer (Bulk)

The`/v1/clients/{client-id}/internal-asset-transfers:bulk` can be used to transfer positions internally between IBKR accounts based on eligibility.

* Up to 100 transfer requests can be included within single instruction set.
* Our system processes 200 requests every 5 minutes, this is an asynchronous process. If a bulk request of 600 transfer requests submitted. This will take 15 minutes to be processed (total of 3 batches). Users may be subject to additional fee if submitting more than 1000 internal position transfer requests daily.

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

### Example

2 options for submitting request (securityId **OR** conId)

***Option 1: Using securityId (CUSIP or ISIN)***

```
POST /v1/clients/{client-id}/internal-asset-transfers:bulk

{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instructions": [
    {
      "clientInstructionId": 7013005,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
      "tradingInstrument": {
        "tradingInstrumentDescription": {
          "securityIdType": "ISIN",
          "securityId": "45229200101",
          "assetType": "STK"
        },
      }
    },
    {
      "clientInstructionId": 7013006,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
      "tradingInstrument": {
        "tradingInstrumentDescription": {
          "securityIdType": "ISIN",
          "securityId": "459200101",
          "assetType": "STK"
        },
        "currency": "USD"
      }
    },
    {
      "clientInstructionId": 7013043,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
      "tradingInstrument": {
        "tradingInstrumentDescription": {
          "securityIdType": "ISIN",
          "securityId": "45229200101",
          "assetType": "STK"
        },
      },
    }
  ]
}
```

***Option 2: Using conId***

```
POST /v1/clients/{client-id}/internal-asset-transfers:bulk

{
  "instructionType": "INTERNAL_POSITION_TRANSFER",
  "instructions": [
    {
      "clientInstructionId": 7013005,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
      "tradingInstrument": {
        "conid": 21323,
        "currency": "USD"
      }
    },
    {
      "clientInstructionId": 7013006,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
        "tradingInstrument": {
        "conid": 111222,
        "currency": "USD"
      }
    },
    {
      "clientInstructionId": 7013043,
      "sourceAccountId": "U399192",
      "targetAccountId": "U87440",
      "transferQuantity": 6,
      "tradingInstrument": {
        "conid": 21323,
        "currency": "USD"
      },
    }
  ]
}
```

## External Asset Transfers (Bulk)

The`/v1/clients/{client-id}/external-asset-transfers:bulk` can be used to submit multiple external position transfer requests.

* Up to 100 transfer requests can be included within single instruction set.

## Request Parameters

To submit multiple transfer requests within a single API call, include each transfer instruction as a separate object within the `instructions` array. Each instruction must contain a unique `clientInstructionId` to distinguish it from the others.

The example below demonstrates this pattern using a **Free of Payment (FOP)** transfer. The same structure applies across all supported transfer types: **ACATS**, **COMPLEX_ASSET_TRANSFER**, **FOP**, and **ATON**.

Refer to the [Position Transfers](position-transfers.md); section for full schema details.

### Example

Example below for FOP-

```
POST /gw/api/v2/external-asset-transfers
{
  "instructionType": "FOP",
  "instruction": {
    "clientInstructionId": 222222,
    "direction": "IN",
    "accountId": "U46377",
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "quantity": 1000,
    "positions": [
      {
        "tradingInstrumentDescription": {
          "securityIdType": "CUSIP",
          "securityId": "46090E103",
          "assetType": "STK"
        },
        "quantity": 2
      },
      {
        "tradingInstrumentDescription": {
          "securityIdType": "CUSIP",
          "securityId": "46090E101",
          "assetType": "STK"
        },
        "quantity": 2
      }
    ],      "currency": "USD"
    }
  }
{
  "instructionType": "FOP",
  "instruction": {
    "clientInstructionId": 1111111,
    "direction": "IN",
    "accountId": "U46377",
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "quantity": 1000,
    "positions": [
      {
        "tradingInstrumentDescription": {
          "securityIdType": "CUSIP",
          "securityId": "46090E103",
          "assetType": "STK"
        },
        "quantity": 2
      },
      {
        "tradingInstrumentDescription": {
          "securityIdType": "CUSIP",
          "securityId": "46090E101",
          "assetType": "STK"
        },
        "quantity": 2
      }
    ],      "currency": "USD"
    }
  }
}
```
