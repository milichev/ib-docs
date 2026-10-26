[source](https://www.interactivebrokers.com/docs/web-api/account-management/account-information/client-fees)

# Client Fees

IBKR provides ability for advisors and brokers to charge fee for their services. Advisors/brokers can configure fees on an account by account basis OR manage fees using a client fee template. Client fees can be set during client registration journey and updated/ The fee schedule will be defined within `accounts`.

* Advisor Managed: Fee schedule needs to be defined during client registration using `advisorWrapFees` OR `feesTemplateName`.
* Broker Clients: `feesTemplateName` is optional. If no fee template is set during registration, the default client fee template will automatically apply to that account.

Fee configurations are effective starting effective date. The effective date for client fees can be obtained by calling [`/api/v1/accounts/{{accountId}}/details`](../../api-reference/account-management/account-management-accounts/get-accounts-details.md)

* If the account opening date is after the effective date, the fee configurations are effective 1 day after the open date.
* If the request approval date is after the effective date, the fee configurations are effective 1 day after the request approval date.
* Fee computations will not exist until effectiveDate (based on above bullet points) & the account is funded.

## Fee Templates

The API can be used to view and manage fee templates for existing accounts.

* Client fee templates make it easy to maintain client fee schedule for multiple accounts. Fee templates can be created and updated directly within Portal > Administration & Tools > Fees & Invoicing > Fee Templates.
  * [Advisor Fees](https://ibkrguides.com/advisorportal/homemenu/feesandinvoicing.htm)
  * [Brokers](https://ibkrguides.com/brokerportal/homemenu/feesandinvoicing.htm)

### Set Fee Template for Existing Account

The `applyFeeTemplate` can be used to assign a predefined fee template to an existing account. Within the body of the request, define the `accountId` and the `templateName`. The `templateName` represents name of fee template to be applied, the data is case sensitive and must match exact name of template that exists in portal.

* For broker clients, fee changes submitted before 17:00 ET are processed on the same day and will take effect starting from midnight on the following business day.
  * If invoicing is applied to an existing accounts (post-approval), the client will need to verify/acknowledge the fee increase directly in Account Management/Client Portal.
  * If there are changes (increase or decrease) to markup schedule, the fee will be automatically processed (no client acknowledgement is needed).
* For advisor-clients, if the fee is increased or fee type is changed, the client will need to verify/acknowledge the fee increase directly in Account Management/Client Portal.
  * Fee templates acknowledged by the client prior to 5:45PM ET will be processed on the same day.
  * Fee templates acknowledged by the client after 5:45PM ET will be processed on the following business day.
  * If the fee is decreased, the fee will be automatically processed (no client acknowledgement is needed).

## Example

```
PATCH /gw/api/v1/accounts
 {
  "accountManagementRequests": {
   "applyFeeTemplate": {
      "accountId": "U10032411",
      "templateName": "FeePerTradeUnit100"
    }
  }
}
```
