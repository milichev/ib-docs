[home](../../../../index.md) | [web-api](../../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/funds-and-banking/cash-transfer/open-banking)

# Open Banking

Our Open Banking integration provides a streamlined way to manage bank connections and transfers between your bank account and your IBKR brokerage account. We partner with Plaid to handle secure bank authentication and connection management.

We offer a **hybrid integration approach** rather than a full direct API integration:

* **Bank connection management** is handled by our partner Plaid
* **Transfer execution** is facilitated through our API endpoints
* **Standing instructions** are managed within your IBKR account

## Add Open Banking Instructions

Connect users to the IBKR portal using [Single Sign On](../../single-sign-on.md) to add new Open Banking instructions to their account.

plaintext

**Use Case:** First-time setup or adding additional bank accounts

**Flow:**

1. Hosting firm will call the `/api/v1/sso-browser-sessions` and provide `credential` and `ip` of the end user.
2. IBKR returns a response URL with SID (unique token).
   * SID is only valid for 60 seconds and can only be accessed from the IP which was included in the original request.
3. Hosting firm appends `ACTION=TransferFunds&type=DEPOSIT&method=OPEN_BANKING&currency=<GBPorEUR>` to the URL
4. Hosting firm invokes the URL into the users browser, new window opens and the user lands on IBKR funding page where they can add open banking instructions

## Example

```
https://www.clientam.com/sso/resolver?ACTION=TransferFunds&type=DEPOSIT&method=OPEN_BANKING&currency=<GBPorEUR>&SID=<TokenHere>
```

## Initiate Open Banking Deposit

Initiate a deposit via Plaid when standing Open Banking instructions are already in place by calling the `/gw/api/v1/external-cash-transfers` endpoint.

**Prerequisites:**

* User must have existing standing Open Banking instructions in their IBKR account
* Bank account must be previously connected
* Hosting firm has provided the URI to IBKR API representative.

**Flow:**

* Hosting firm calls the `/gw/api/v1/external-cash-transfers` endpoint providing IBKR with deposit details.
* IBKR returns unique URL address
* Hosting firm invokes URL into users browser. User lands in Plaid interface.
* User authenticates and confirms deposit
* Funds transfer is initiated

## Request Parameters

| Name                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accountId             | String                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | IBKR account ID of the advisor/broker client account which funds are being deposited to.                                                                                                                                                         |
| instructionType       | DEPOSIT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type of transaction.                                                                                                                                                                                                                             |
| clientInstructionId   | Number; max characters 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Unique identifier associated with the request. – The **clientInstructionId** cannot be reused. – IBKR's preference is that the **clientInstructionId** is established in sequential order ie 1, 2, 3, 4 or 100, 101, 102, 103 not 777, 589, 123. |
| amount                | number > 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Amount being deposited to the clients IBKR Account.                                                                                                                                                                                              |
| bankInstructionMethod | OPEN_BANKING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | WIRE: Electronic fund transfer through the fed wire system. ACH: Includes US Automated Clearing House, Single Euro Payment Area, Canadian Electronic Funds Transfer.                                                                             |
| currency              | Currency code (3 digits). Available currencies can be found [**here**](https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.interactivebrokers.com%2Fen%2Fsupport%2Ffund-my-account.php\&data=05%7C02%7Cdam%40interactivebrokers.com%7Cf880a2adb1ab47c5b4bf08de4d51a5fe%7C7abd04ef837d48e69ba869d84f65a110%7C0%7C0%7C639033210317202011%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C\&sdata=VdOJ46KLbNX4BLWWxnwlcd7UZ9dHDgTtyRX%2FQozIm3I%3D\&reserved=0). | Currency of the funds being sent to IBKR.                                                                                                                                                                                                        |
| bankInstructionName   | String; maximum of 150characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Name of the previously created instruction (saved bank/account number. Only required for ACH initiated by IBKR.                                                                                                                                  |
| identifier            | String; maximum of 64characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Bank Account Number                                                                                                                                                                                                                              |
| serviceProvider       | PLAID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Name of the service provider.                                                                                                                                                                                                                    |
| linkDisplayName       | String; maximum of 128 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Name of the client displayed on Plaid's UI                                                                                                                                                                                                       |
| completeRedirectUri   | URI address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Return URL (pre-configured in Plaid dashboard)                                                                                                                                                                                                   |

### Example

```
{
    "instructionType": "DEPOSIT",
    "instruction": {
        "clientInstructionId": 43454545,
        "accountId": "U1234567",
        "currency": "EUR",
        "amount": 1300,
        "bankInstructionMethod": "OPEN_BANKING",
        "openBanking": {
            "serviceProvider": "PLAID",
            "plaidOptions": {
                "linkDisplayName": "Test displayname",
                "completionRedirectUri": "wonderdust://complete"
            }
        },
        "bankInstructionName": "Test Bank"
    }
}
```

## Example Response

```
{
    "status": 202,
    "instructionSetId": 882059,
    "instructionResult": {
        "depositDetails": {
            "openBanking": {
                "serviceProvider": "PLAID",
                "providerResponse": {
                    "paymentId": "payment-id-sandbox-dc9f2de9-6c6d-4c04-b09c-c7fb8314afc7",
                    "hostedlinkUrl": "https://secure.plaid.com/hl/ls16p0n6orpq489p4s37o3rr16pqq9n3p2",
                    "linkToken": "link-sandbox-61c5a1be-cd93-4c9f-82b8-ee61cdd4a8c7"
                }
            }
        },
        "ibReferenceId": 320905649,
        "clientInstructionId": 601361111111301,
        "instructionType": "DEPOSIT",
        "instructionStatus": "PENDING",
        "instructionId": 703819361
    }
}
```

## Initiate Withdrawal

When you add Open Banking instructions to your IBKR account, IBKR automatically creates a set of **standing withdrawal instructions**. This one-time setup enables seamless ongoing transfers. This means withdrawal requests can be submitted without requiring user interaction with Plaid or IBKR.

* `bankInstructionMethod` will be one of the following:
  * `LVP` (IB-UK)
  * `SEPA`

**Prerequisites:**

* Standing withdrawal instructions must be set up in IBKR account

## Example

```
POST /gw/api/v1/external-cash-transfers

{ "instructionType": "WITHDRAWAL", 
 "instruction": {    "clientInstructionId": 7013048,
    "accountId": "U46377",
    "bankInstructionName": "Test Withdrawal",
    "bankInstructionMethod": "SEPA",
    "amount": "123.45",
    "currency": "EUR",
    "dateTimeToOccur": "2023-11-20T09:12:13Z"
  }
```

**TIP**: The `/gw/api/v1/bank-instructions/query` endpoint can be used to view list of saved banking instructions on file by `accountId` and `bankInstructionMethod`. The response will return the corresponding `bankInstructionName` and, `bankRoutingNumber`, `currency` last 4 digits of the `bankAccountNumber`.
