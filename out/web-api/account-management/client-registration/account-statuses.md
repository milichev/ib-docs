[home](../../../index.md) | [web-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/web-api/account-management/client-registration/account-statuses)

# Account Statuses

The **status** of an account can be one of the following:

| Status | Description                                                                                                                                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A      | Abandoned; deleted application. Only pending or new applications can be abandoned. An account can be abandoned due to inactivity (after 135 days) OR if Broker OR client initiates request to abandon the application. |
| N      | Pending application and no funding details have been provided.                                                                                                                                                         |
| O      | Open; Account has been approved and opened by IBKR. This is considered an active account.                                                                                                                              |
| C      | Closed; Account that was once active OR opened accounts that were and then closed.                                                                                                                                     |
| P      | Pending application and funding instructions have been provided.                                                                                                                                                       |
| R      | Rejected; account was never approved/opened- rejected by Compliance)                                                                                                                                                   |
| E      | Reopen request is pending.                                                                                                                                                                                             |
| Q      | Bulk migration account that is not yet approved by IBKR.                                                                                                                                                               |

The `status` can change from:

|       |       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- | ----- |
| N > P | N > R | P > R | A > P | O > C | E > O |
| N > O | N > A | P > A | A > O | C > O | Q > R |
| N > P | P > O | A > N | A > R | C > E | Q > O |

### Close Account

The [accountClose](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-ref/#tag/Account-Management-Accounts/paths/~1gw~1api~1v1~1accounts/patch) can be used to **close** an opened account based on the `accountId`. Within the body of the request, include reason for account closure (closeReason).

* Accounts eligible to be closed must have current status of O or Q and must have a cleared balance. If an account is funded at the time which the closure request is submitted, the request will be rejected.
* If status Q account is closed, status will move to R (rejected)

Requests are processed between 8am EST to 11am EST. Requests received outside of these hours will be processed the following day.

## Example

```
POST /gw/api/v1/accounts/close

{
  "accountManagementRequests": {
   "accountClose": {
      "accountId": "U1233457",
      "closeReason": "time to go"
    }
  }
```

### Reopen Account

The [reopenAccount](../../api-reference/account-management/account-management-accounts/update-accounts.md) can be used to **reopen** an opened account based on the `accountId`.

* The following accounts are eligible for reopening:
  * Fully-Disclosed and Advisor subs that originate using Hybrid
  * Current status of C (Closed)

Once the reopen request has been submitted, the end user must log into the IBKR Portal to review application information and sign updated agreements and disclosures. The request will not be processed until this step is completed.

## Example

```
PATCH /gw/api/v1/accounts

{
  "accountManagementRequests": {
   "reopenAccount": {      
   "accountId": "U1233457"
    }
  }
```

### Cancel Application

The [abandonAccount](../../api-reference/account-management/account-management-accounts/update-accounts.md) can be used to delete/cancel a pending application based on the `accountId`. Once the request is processed, the account will no longer appear in IBKR's CRM as a PENDING account.

* Accounts eligible to be abandoned must have current status of P or N.

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "abandonAccount": {
            "accountId": "U12345"
        }
    }
}
```

### Reset Application

The resetAbandonedAccount can be used to reset application that was previously marked abandoned based on the `accountId`. Accounts eligible to be reset must have current status of A and be less than 6 months old. Once the account has been reset, user can proceed with registration process.

## Example

```
PATCH /gw/api/v1/accounts

{
    "accountManagementRequests": {
        "resetAbandonedAccount": {
            "accountId": "U12345"
        }
    }
}
```

## View Status by Account

The `/gw/api/v1/accounts/{accountId}/status` can be used to query the status by account. In addition to the status of the account, the response will include the following information:

| Attribute       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateOpened      | Date and time which the account was approved and opened at IBKR. If value is null- this means the account has not been opened yet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| dateStarted     | Date and time which the account was created with IBKR.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| dateClosed      | Date and time which the account was closed with IBKR.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| accountId       | IBKR account ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| status          | Status of the IBKR account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| description     | Description of the status. A= Abandoned N= New Account  O= Open  C= Closed  P= Pending R= PreClose (Which means rejected)  E = Reopen requested  Q= Migrated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| masterAccountId | IBKR account ID which is associated with the advisor/broker which accountId is linked to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| state           | State of the application; only present if status is N (New Account) OR P (Pending). **Incomplete Application** = Client Action Needed, use `/gw/api/v1/accounts/{accountId}/tasks?type=pending` to view pending registration tasks **Documents Required** = Client Action Needed, use`/gw/api/v1/accounts/{accountId}/tasks?type=pending`  to view documents required for approval. **Under Review with IBKR** = Application is PENDING on IBKR, no action needed. **Pending Approval** = Account is in the approval queue and should be opened by the following business day. **Open =** Account is opened and there are no pending tasks assigned to the account. |

## View Status for Group of Accounts

The `/gw/api/v1/accounts/status` can be used to filter custom group of accounts associated with `masterAccountId` based on the following criteria:

| Name      | Value           | Description                                                                               |
| --------- | --------------- | ----------------------------------------------------------------------------------------- |
| startDate | yyyy-mm-dd      | Required if querying list of accounts created within certain time period.                 |
| endDate   | yyyy-mm-dd      | Filter by date when account was created. If start date is provided, end date is mandatory |
| status    | A N O C P R Q E | Required if querying list of accounts that are certain status.                            |

Queries returning more than 10,000 results will trigger a timeout error, Implement pagination using '`limit`' and '`offset`' parameter to manage large result sets.

## Account Status Scenarios

The endpoint will return both a "status" and "state" that indicate where the account is in the account setup process. The below table will help you understand what these values mean and what actions need to be taken.

| **Scenarios**                                                     | **Result when Querying Account Status**                                                                          | **Client Action Needed?**                                                                                                                                                                                 |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opened Account & Ready to Trade.                                  | `"state": "Open"  "status": "O"`                                                                                 | No                                                                                                                                                                                                        |
| Opened Account with Pending Tasks                                 | `"state": "Documents Required", "status": "O"`                                                                   | Yes, use [`/api/v1/accounts/{{accountId}}/tasks?type=registration`](../../api-reference/account-management/account-management-accounts/get-accounts-tasks.md)  to view pending tasks that need to be completed **and** filter by "isComplete": "false" |
| Application is Pending Approval.                                  | `"state": "Pending Approval", "status": "P"`  **OR**   `"state": "Pending Approval", "status": "N"`              | No, continue polling for status to monitor when account changes to 'O (Open) status.                                                                                                                      |
| Pending Application that is under review with IBKR.               | `"state": "Under Review with IBKR", "status": "P"`   **OR**   `"state": "Under Review with IBKR", "status": "N"` | No, continue polling for status to monitor when account changes to 'O (Open) status.                                                                                                                      |
| Pending Application with Pending Tasks that need to be completed. | `"state": "Documents Required", "status": "P"`  **OR**   `"state": "Documents Required", "status": "N"`          | Yes, use [`/api/v1/accounts/{{accountId}}/tasks?type=pending`](../../api-reference/account-management/account-management-accounts/get-accounts-tasks.md) to view pending tasks required for approval.                                                  |
