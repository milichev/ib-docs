[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/position-transfers)

# Position Transfers

Transfer positions between IBKR brokerage account and external account using the `/gw/api/v1/external-asset-transfers` endpoint. Transfer methods available will vary based on country of residence and currency of assets being transferred.

## FOP

FOP (Free of Payment -US) is a method to transfer US securities, stocks, ETF's and fixed income. The delivery takes place through the Depository Trust Company (DTC).

Enter an FOP transfer, in which all of your assets are transferred from a third-party broker to your account (inbound), or from your IBKR account to a third-party broker. Account Name, Tax Identification Number and Client Type (i.e. individual, joint), must exactly match the third-party broker account in order for the transfer to take place.

**Inbound Transfer** (Transfer positions to IBKR): Transfer is initiated by delivering broker. The API can be used to create notification so IBKR is aware of the incoming transfer. The FOP receive notification at IBKR will expire after 5 business days if securities are not received. Once the notice has expired IBKR will not accept the shares.

**Outgoing Transfer** (Transfer positions out of the IBKR account): From your account to another US bank or broker that is a member of the DTC (outbound transfer).

For more information on FOP, refer to this [link](https://ibkrguides.com/adminportal/transferandpay/foptrans.htm).

### Schema

| Name                  | Type                                                                                                              | Description                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId   | Number; max 20 characters.                                                                                        | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType       | FOP                                                                                                               | Type of transaction.                                                                                                                                                                                                                             |
| direction             | IN  OUT                                                                                                           | Indicate if this is an incoming our outgoing transfer.  **IN** = Incoming to IBKR  **OUT**= Transferring out to third party Broker.                                                                                                              |
| accountId             | String                                                                                                            | IBKR Account Number of the client account that is initiating the transfer.                                                                                                                                                                       |
| contraBrokerAccountId | String                                                                                                            | Client account number at the third party broker.                                                                                                                                                                                                 |
| contraBrokerDtcCode   | Use [`/gw/api/v1/enumerations/{enumerationType}`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) for the value. | DTC Number of the third party institution.                                                                                                                                                                                                       |
| securityId            | String                                                                                                            | CUSIP/ISIN number of the security being transferred.                                                                                                                                                                                             |
| quantity              | Number                                                                                                            | Number of shares being transferred in/out                                                                                                                                                                                                        |
| asset_type            | BILL BOND CASH  FUND  OPT  STK  WAR                                                                               | Product type.                                                                                                                                                                                                                                    |
| securityIdType        | CUSIP  ISIN  CASH                                                                                                 | Used to determine securityId type that was provided. Either ISIN or CUSIP.                                                                                                                                                                       |
| conId                 | String                                                                                                            | Unique Contract ID assigned by Interactive Brokers.                                                                                                                                                                                              |
| currency              | USD                                                                                                               | Currency of the assets being transferred.                                                                                                                                                                                                        |

### Example

2 options for submitting request (securityId **OR** conId)

***Option 1: Using securityId (CUSIP or ISIN)***

```
POST /gw/api/v2/external-asset-transfers
{
  "instructionType": "FOP",
  "instruction": {
    "clientInstructionId": 7013039,
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

***Option 2: Using conId***

```
POST /gw/api/v2/external-asset-transfers

{
  "instructionType": "fop",
  "instruction": {
    "clientInstructionId": 7013038,
    "direction": "IN",
    "accountId": "U46377",
    "contraBrokerAccountId": "12345678A",
    "contraBrokerDtcCode": "534",
    "quantity": 1000,
    "positions": [
      {
        "conid": 272093,
        "quantity": 1
      },
      {
        "conid": 272092223,
        "quantity": 1
      }
    ],
  }
}
```

## DWAC

DWAC (Deposit Withdrawal at Custodian) can be used to transfer new shares or certificates held at a transfer agent. This is commonly used when an individual has company-issued shares resulting from stock options or employee share plans.

DWAC or Deposit/Withdrawal at Custodian is an electronic method for transferring securities between transfer agent and your account facilitated by the DTC (Depository Trust company).

For more information on DWAC, refer to this [link](https://ibkrguides.com/adminportal/transferandpay/dwactrans.htm).

### Schema

| Name                  | Value                                                                                                                                  | Description                                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId   | Number; max 20 characters.                                                                                                             | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType       | DWAC                                                                                                                                   | Type of transaction.                                                                                                                                                                                                                             |
| direction             | IN  OUT                                                                                                                                | Indicate if this is an incoming our outgoing transfer.  **IN** = Incoming to IBKR  **OUT**= Transferring out to third party Broker.                                                                                                              |
| accountId             | String; maximum 32 characters.                                                                                                         | IBKR Account Number of the client account that is initiating the transfer.                                                                                                                                                                       |
| contraBrokerAccountId | String; maximum 20 characters.                                                                                                         | Client account number at the third party broker.                                                                                                                                                                                                 |
| contraBrokerTaxId     | String; maximum 25 characters.                                                                                                         | Tax ID associated with Contra.                                                                                                                                                                                                                   |
| securityId            | String                                                                                                                                 | CUSIP/ISIN number of the security being transferred.                                                                                                                                                                                             |
| quantity              | Number                                                                                                                                 | Number of shares being transferred in/out                                                                                                                                                                                                        |
| assetType             | BILL  BOND  CASH  FUND  OPT  STK  WAR                                                                                                  | Product type.                                                                                                                                                                                                                                    |
| securityIdType        | CUSIP  ISIN  CASH                                                                                                                      | Used to determine securityId type that was provided. Either ISIN or CUSIP.                                                                                                                                                                       |
| conId                 | String                                                                                                                                 | Unique Contract ID assigned by Interactive Brokers.                                                                                                                                                                                              |
| currency              | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency of the assets being transferred.                                                                                                                                                                                                        |
| referenceId           | String                                                                                                                                 | Unique Contract ID assigned by Interactive Brokers.                                                                                                                                                                                              |
| accountTitle          | String; maximum 140 characters.                                                                                                        | Account title of the receiving account at IBKR.                                                                                                                                                                                                  |

### Example

```
POST /gw/api/v1/external-asset-transfers

{
  "instructionType": "DWAC",
  "instruction": {
    "clientInstructionId": 7013036,
    "direction": "IN",
    "accountId": "U1001095",
    "contraBrokerAccountId": "12345678A",
    "contraBrokerTaxId": "123456789",
    "quantity": 1000,
    "accountTitle": "Special Company Holding LLC",
    "referenceId": "refId",
    "tradingInstrument": {
      "conId": 12123,
      "currency": "USD"
    }
  }
}
```

## ACATS

ACATS is a system that automates and standardizes procedures for the transfer of assets in a customer account from one US brokerage firm or bank to another. ACATS supports USD cash, US equities, options, fixed income, US mutual funds, and non-US stocks.

The Automated Customer Account Transfer Service (ACATS) in the U.S facilitates the transfer of US stocks, warrants, options US mutual funds, US bonds and cash held at another brokerage firm to us through the National Securities Clearing Corporation's (NSCC). The API currently only supports a **FULL** transfer. Partial transfer are supported within IBKR Portal.

* **Processing Time:** US securities and USD Cash transfer between 4 and 8 days and can be traded immediately. See More Information for withdrawal restrictions. Non-US securities may take longer.
* **Fees**: IBKR will pass through any fees that are charged by your current broker. See notes in More Information.

For more information on ACATS, refer to this [link](https://ibkrguides.com/adminportal/transferandpay/acatstrans.htm).

### Schema

| Name                | Type                                                                                                              | Description                                                                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId | Number; max 20 characters.                                                                                        | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType     | EXTERNAL_POSITION_TRANSFER                                                                                        | Type of Transaction.                                                                                                                                                                                                                             |
| type                | FULL                                                                                                              | Type will always be FULL.                                                                                                                                                                                                                        |
| subType             | ACATS                                                                                                             | Method used to initiate the transfer. [Details](https://www.interactivebrokers.com/en/index.php?f=1544\&p=transfer): Overview of transfer methods.                                                                                               |
| brokerId            | Use [`/gw/api/v1/enumerations/{enumerationType}`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) for the value. | DTC Number of the sending institution.                                                                                                                                                                                                           |
| brokerName          | Use [`/gw/api/v1/enumerations/{enumerationType}`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) for the value. | Name of the sending institution.                                                                                                                                                                                                                 |
| accountAtBroker     | String                                                                                                            | Client account number at sending institution.                                                                                                                                                                                                    |
| accountId           | String                                                                                                            | IBKR Account Number of the client account that is initiating the transfer.                                                                                                                                                                       |
| signature           | String                                                                                                            | Signature should match applicants first name middle initial (if applicable) last name suffix (if applicable) \*Data is case and space sensitive.                                                                                                 |
| sourceIRAType       |                                                                                                                   | If transfer is between **two** IRA accounts, specify the IRA type.                                                                                                                                                                               |

### Example

```
POST /gw/api/v1/external-asset-transfers

{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013060,
    "type": "FULL",
    "subType": "ACATS",
    "brokerId": "0226",
    "brokerName": "Wall Street Financial Group",
    "accountAtBroker": "SOL12345",
    "sourceIRAType": "RO",
    "accountId": "U1225448",
    "signature": "John Tester"
  }
}
```

## ATON

ATON is an electronic transfer method that supports the transfer of client accounts between Canadian financial institutions. ATON supports the transfer of Canadian stocks, Canadian options, Canadian cash, US stocks, US options, US warrants and US cash.

ATON transfer lets you transfer US or Canadian stocks, options and cash held at another brokerage firm to us through Account Transfer on Notification (ATON), the Canadian equivalent of ACATS

* **Processing Time:** Most assets transfer between 3 to 8 business days, but it varies depending on your broker.
* **Fees**: Your current broker may charge a fee for the outgoing transfer. See notes in More Information.

For more information on ATON, refer to this [link](https://ibkrguides.com/adminportal/transferandpay/atontrans.htm).

### Schema

| Name                | Type                                                                                                              | Description                                                                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId | Number; max 20 characters.                                                                                        | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType     | EXTERNAL_POSITION_TRANSFER                                                                                        | Type of Transaction.                                                                                                                                                                                                                             |
| type                | FULL                                                                                                              | Type will always be FULL.                                                                                                                                                                                                                        |
| subType             | ACATS                                                                                                             | Method used to initiate the transfer. [Details](https://www.interactivebrokers.com/en/index.php?f=1544\&p=transfer): Overview of transfer methods.                                                                                               |
| brokerId            | Use [`/gw/api/v1/enumerations/{enumerationType}`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) for the value. | DTC Number of the sending institution.                                                                                                                                                                                                           |
| brokerName          | Use [`/gw/api/v1/enumerations/{enumerationType}`](../../api-reference/account-management/account-management-utilities/get-enumerations.md) for the value. | Name of the sending institution.                                                                                                                                                                                                                 |
| accountAtBroker     | String                                                                                                            | Client account number at sending institution.                                                                                                                                                                                                    |
| accountId           | String                                                                                                            | IBKR Account Number of the client account that is initiating the transfer.                                                                                                                                                                       |
| signature           | String                                                                                                            | Signature should match applicants first name middle initial (if applicable) last name suffix (if applicable) \*Data is case and space sensitive.                                                                                                 |

### Example

```
POST /gw/api/v1/external-asset-transfers

{
  "instructionType": "EXTERNAL_POSITION_TRANSFER",
  "instruction": {
    "clientInstructionId": 7013060,
    "type": "FULL",
    "subType": "ATON",
    "brokerId": "3265",
    "brokerName": "Wall Street Financial Group",
    "accountAtBroker": "SOL12345",
    "accountId": "U1225448",
    "signature": "John Tester"
  }
}
```

## COMPLEX_ASSET_TRANSFER

Basic FOP (Free of Payment) is a method to transfer assets from financial institutions that are generally outside the US and can be used to transfer global equities, fixed income, structured products, and options

For a basic FOP, IBKR will coordinate with the Canadian, European, Middle East/African, Asia/Pacific financial institution on settlement instructions to transfer global equities, fixed income, structured products, and options on a free-of-payment basis.

To expedite the transfer process, pass settlement instructions for transfer request to IBKR via the API. The settlement data will be included within `nonDisclosedDetail.` This service is available by request only, contact your IBKR representative if interested in using this service.

* **Inbound Transfer** (Transfer positions to IBKR): Transfer is initiated by delivering broker. The API can be used to create notification so IBKR is aware of the incoming transfer.
* **Outgoing Transfer** (Transfer positions out of the IBKR account): From your account to another bank or broker.

### Schema

| Name                | Type                                                                                                                                   | Description                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clientInstructionId | Number; max 20 characters.                                                                                                             | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| instructionType     | COMPLEX_ASSET_TRANSFER                                                                                                                 | Type of transaction.                                                                                                                                                                                                                             |
| direction           | IN  OUT                                                                                                                                | Indicate if this is an incoming our outgoing transfer.  **IN** = Incoming to IBKR  **OUT**= Transferring out to third party Broker.                                                                                                              |
| accountId           | String; maximum 32 characters.                                                                                                         | IBKR Account Number of the client account that is initiating the transfer.                                                                                                                                                                       |
| securityId          | String                                                                                                                                 | CUSIP/ISIN number of the security being transferred.                                                                                                                                                                                             |
| quantity            | Number                                                                                                                                 | Number of shares being transferred in/out                                                                                                                                                                                                        |
| assetType           | BILL BOND  CASH FUND  OPT  STK  WAR                                                                                                    | Product type.                                                                                                                                                                                                                                    |
| securityIdType      | CUSIP  ISIN  CASH                                                                                                                      | Used to determine securityId type that was provided. Either ISIN or CUSIP.                                                                                                                                                                       |
| conId               | String                                                                                                                                 | Unique Contract ID assigned by Interactive Brokers.                                                                                                                                                                                              |
| currency            | Currency code (3 digits). Available currencies can be found [here](https://www.interactivebrokers.com/en/support/fund-my-account.php). | Currency of the assets being transferred.                                                                                                                                                                                                        |
| accountType         | INDIVIDUAL  JOINT  ORG  TRUST                                                                                                          | Account Type (at Financial Institution)                                                                                                                                                                                                          |
| brokerName          | Use `/api/v1/enumerations/`complex-asset-transfer to get accepted values.                                                              | Name of Financial Institution                                                                                                                                                                                                                    |
| tradeDate           | YYYY-MM-DD                                                                                                                             | Current or future date. Trade date cannot exceed settleDate. Date should not be more than 30 days in advance.                                                                                                                                    |
| settleDate          | YYYY-MM-DD                                                                                                                             | Cannot be prior to current date.                                                                                                                                                                                                                 |
| depositoryId        | String                                                                                                                                 | ID at Depository.                                                                                                                                                                                                                                |
| psetBic             | String                                                                                                                                 | Place of Settlement                                                                                                                                                                                                                              |
| reagDeagBic         | String                                                                                                                                 | ID code of delivering agent.                                                                                                                                                                                                                     |
| buyrSellBic         | String                                                                                                                                 | ID Code of Buyer or Seller.                                                                                                                                                                                                                      |
| memberAccountId     | String                                                                                                                                 | Account ID for market.                                                                                                                                                                                                                           |
| safekeepingAccount  | String                                                                                                                                 | Safekeeping Account                                                                                                                                                                                                                              |
| brokerAccountId     | String                                                                                                                                 | Client account number at the third party broker.                                                                                                                                                                                                 |
| country             | Alpha-3 code (ISO)                                                                                                                     | Country which the contra broker is located.                                                                                                                                                                                                      |
| contractName        | String; max of 64 characters.                                                                                                          | Name of the contact at the contra broker.                                                                                                                                                                                                        |
| contactEmail        | String; max of 64 characters.                                                                                                          | Email of the contact at the contra broker. Note: We use REGEX to validate the email. Validations outlined [here](https://www.interactivebrokers.com/campus/ibkr-api/account-management-api/#required-42).                                        |
| contactPhone        | String; max of 16 characters.                                                                                                          | Phone number of the contact at the contra broker. Note: We use Google API to validate the Phone Number. Validations outlined [here](https://www.interactivebrokers.com/campus/ibkr-api/account-management-api/#dependent-on-type-43).            |

### Example without Settlement Data

2 options for submitting request (securityId **OR** conId)

***Option 1: conID based request***

```
POST /gw/api/v2/external-asset-transfers

{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "clientInstructionId": "7013040",
    "direction": "IN",
    "accountId": "U399192",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "JP MORGAN",
      "depositoryId": "DTC0352",
      "brokerAccountId": "3456567678578",
      "country": "US",
      "contactName": "John Smith",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155"
    },
    "positions": [
      {
        "conid": 272093,
        "quantity": 1
      },
      {
        "conid": 272092223,
        "quantity": 1
      }
    ]
  }
}
```

**Option 2: securityId based request**

```
POST /gw/api/v2/external-asset-transfers

{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "clientInstructionId": "7013042",
    "direction": "IN",
    "accountId": "U399192",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "JP MORGAN",
      "depositoryId": "DTC0352",
      "brokerAccountId": "3456567678578",
      "country": "US",
      "contactName": "John Smith",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155"
    },
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
    ]
  }
}
```

### Example with Settlement Data

2 options for submitting request (securityId **OR** conId)\
***Option 1: conID based request***

```
POST /gw/api/v2/external-asset-transfers
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "clientInstructionId": "7013041",
    "direction": "IN",
    "accountId": "U399192",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "JP MORGAN",
      "depositoryId": "DTC0352",
      "brokerAccountId": "3456567678578",
      "country": "US",
      "contactName": "John Smith",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155"
    },
    "positions": [
      {
        "conid": 272093,
        "quantity": 1
      },
      {
        "conid": 272092223,
        "quantity": 1
      }
    ],
    "nonDisclosedDetail": {
      "tradeDate": "2018-03-20T09:12:13Z",
      "settleDate": "2018-03-20T09:12:13Z",
      "psetBic": "OCSDATWWXXX",
      "reagDeagBic": "TMBECH22XXX",
      "buyerSellBic": "TMBECH22XXX",
      "memberAccountId": "OCSD212100",
      "safeKeepingAccountId": "OCSD212100"
    }
  }
}
```

***Option 2: Security Id based request***

```
POST /gw/api/v2/external-asset-transfers
{
  "instructionType": "COMPLEX_ASSET_TRANSFER",
  "instruction": {
    "clientInstructionId": "7013041",
    "direction": "IN",
    "accountId": "U399192",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "JP MORGAN",
      "depositoryId": "DTC0352",
      "brokerAccountId": "3456567678578",
      "country": "US",
      "contactName": "John Smith",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155"
    },
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
    ],
    "nonDisclosedDetail": {
      "tradeDate": "2018-03-20T09:12:13Z",
      "settleDate": "2018-03-20T09:12:13Z",
      "psetBic": "OCSDATWWXXX",
      "reagDeagBic": "TMBECH22XXX",
      "buyerSellBic": "TMBECH22XXX",
      "memberAccountId": "OCSD212100",
      "safeKeepingAccountId": "OCSD212100"
    }
  }
}
```

### Example with Settlement Data if transferring between 2 IBKR Accounts

Only applicable for Non-Disclosed Clients using FOP to transfer assets between 2 different IBKR accounts.

If `brokerName= 'IB'` OR '`INTERNAL`', `accountTitle` AND `accountIdAtCurrentBroker` are required.

There are 2 options for submitting request (securityId **OR** conId)\
***Option 1: conID based request***

```
POST /gw/api/v2/external-asset-transfers

{
  "instructionType": "complex_asset_transfer",
  "instruction": {
    "clientInstructionId": 7013041,
    "direction": "IN",
    "accountId": "U399192",
    "quantity": 10,
     "accountIdAtCurrentBroker": "U123456",
    "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "INTERNAL",
      "depositoryId": "1234",
      "brokerAccountId": "as3456567678578N",
      "country": "United States",
      "contactName": "as",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155"
      "accountTitle": "My Account Title"

    },
    "positions": [
      {
        "conid": 272093,
        "quantity": 1
      },
      {
        "conid": 272092223,
        "quantity": 1
      }
    ],
    "nonDisclosedDetail": {
      "tradeDate": "2018-03-20T09:12:13Z",
      "settleDate": "2018-03-20T09:12:13Z",
      "psetBic": "OCSDATWWXXX",       
      "reagDeagBic": "TMBECH22XXX",
      "buyerSellBic": "TMBECH22XXX",
      "memberAccountId": "OCSD212100",
      "safeKeepingAccountId": "OCSD212100"
    }
  }
}
```

***Option 2: Security Id based request***

```
POST /gw/api/v2/external-asset-transfers
{
  "instructionType": "complex_asset_transfer",
  "instruction": {
    "clientInstructionId": 7013041,
    "direction": "IN",
    "accountId": "U399192",
    "quantity": 10,    
     "accountIdAtCurrentBroker": "U123456",    
      "contraBrokerInfo": {
      "accountType": "ORG",
      "brokerName": "INTERNAL",
      "depositoryId": "1234",
      "brokerAccountId": "as3456567678578N",
      "country": "United States",
      "contactName": "as",
      "contactEmail": "a@gmail.com",
      "contactPhone": "2039126155",      
       "accountTitle": "My Account Title"},
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
    ],
    "nonDisclosedDetail": {
      "tradeDate": "2018-03-20T09:12:13Z",
      "settleDate": "2018-03-20T09:12:13Z",
      "psetBic": "OCSDATWWXXX",       
      "reagDeagBic": "TMBECH22XXX",
      "buyerSellBic": "TMBECH22XXX",
      "memberAccountId": "OCSD212100",
      "safeKeepingAccountId": "OCSD212100"
    }
  }
}
```

### Common Errors

| **Error Code**                                             | **Error Message Example:**                                                                                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Upload Validity Checks**                                 |                                                                                                                                                                                                       |
| ERROR_BROKER_NAME_NOT_FOUND                                | Error: Broker name HSBCSCB not found. Please query for [/api/v1/enumerations/complex-asset-transfer}](../../api-reference/account-management/account-management-utilities/list-enumerations-complex-asset-transfer.md) retrieve a list of all accepted brokers. |
| NON_DISCLOSED_VALIDATION_FAILED_FOR_COMPLEX_ASSET_TRANSFER | Incomplete information for non-disclosed client, null/empty value detected in some of these fields for pset BIC: CIKBBEBBXX – reagDeagBic, buyrSellBic, memberAccountId, safekeepingAccount.          |
| CORRUPT_DATA_INVALID_ACCT                                  | Account UXXXXX does not exist                                                                                                                                                                         |
| ERROR_ACCOUNT_CP_NOT_RELATED                               | Account UXXXXX not related to counterparty **\<CounterPartyNameHere>**                                                                                                                                |
| UNSUPPORTED_CHARACTERS_ERROR                               | value contains illegal character(s). Character set not supported.                                                                                                                                     |
| CORRUPT_DATA_DUBPLICATE_CP                                 | counterPartyTranId 1195814 already exists for counterparty **\<CounterPartyNameHere>**                                                                                                                |
| **Processing Validity Checks**                             |                                                                                                                                                                                                       |
| **Error Code:**                                            | **Error Message Example:**                                                                                                                                                                            |
| NOT_OPEN_ACCOUNT                                           | Account UXXXXX is not open                                                                                                                                                                            |
| COMPLEX_ASSET \_TRANSFER_NOT_ALLOWED                       | isTransferAllowed is fales for acctid:UXXXXX transfer_method:FOP quantity:80 isFullTransfer:false Direction:OUT clearingBrokerID:JP MORGAN ibConId:34234                                              |

## Status of Position Transfer Request

For `fop` AND `complexAssetTransfer`, the response returned by IBKR will include `clearingState` AND `status`. The status returns the overall status of the `clearingState` reflects stage in the transfer process.

| **clearing_state**                  | **status** | **Notes**                                                                                                                                                                                                                      |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| REJECTED                            | REJECTED   | Transfer request was rejected.                                                                                                                                                                                                 |
| POSTED                              | PROCESSED  | The asset deliveries on your transfer request are now in progress. Market instructions have been placed and settlement will occur once matched with your recipient broker.                                                     |
| SETTLED                             | PROCESSED  | Your transfer request is complete.                                                                                                                                                                                             |
| PROCESSED                           | PROCESSED  | The transfer request has been processed.                                                                                                                                                                                       |
| PARTIALLYSETTLED                    | PENDING    | Some of the assets on your transfer request have settled.                                                                                                                                                                      |
| APPROVED                            | PENDING    | Your transfer request has been approved for processing.                                                                                                                                                                        |
| SETTLEMENT_INSTRUCTIONS_TRANSMITTED | PENDING    | Transfer instruction submitted to counterparty.                                                                                                                                                                                |
| FULLYENTERED                        | PENDING    | Your transfer request has been received and is being reviewed by the Transfers Department. If you have not already notified your receiving broker, please do so now.                                                           |
| BROKER_CONTACTED                    | PENDING    | We have contacted your broker/bank and are awaiting their response to confirm your transfer request. They must agree to the transfer details before we can proceed. If you have not already instructed them, please do so now. |
| ACKNOWLEDGED                        | PENDING    | IBKR has received the transfer request.                                                                                                                                                                                        |
