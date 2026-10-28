> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Login Messages

If client action is required post account creation, IBKR will assign a login message to the user. Once login message is assigned, user will be prompted to complete login message upon accessing IBKR Portal.

Scenarios which IBKR will assign a login message:

* Expired tax form
* Update CRS form
* Verify Account Information
* Email Bounced

The following login messages can be completed using the API:

* ACK_AGREEMENT_UPDATE (Use [`DocumentSubmission`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/get-accounts-details))
* W8INFO (Use [`UpdateTaxForm`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/get-accounts-details))
* LLC_AGREEMENT_UPDATE (Use [`DocumentSubmission`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/get-accounts-details))

All other login messages will need to be completed within IBKR Portal (not via API).

### View Login Messages by Account

The `/gw/api/v1/accounts/{accountId}/login-messages` can be used to view login messages assigned to a specific account.

### View Login Messages for Group of Accounts

[`/gw/api/v1/accounts/login-messages`](https://ibkrcampus.com/docs/web-api/api-reference/account-management/account-management-accounts/list-accounts-login-messages) can be used to filter list of accounts with login messages assigned.

* Filter list of accounts with specific login message assigned.
* Filter list of accounts created within certain time range.

| Name        | Value                                                        | Description                                                                                                 |
| ----------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| startDate   | yyyy-mm-dd                                                   | Required if querying list of accounts created within certain time period.                                   |
| endDate     | yyyy-mm-dd                                                   | Filter by date when account was created. If start date is provided, end date is mandatory                   |
| messageType | W8INFO  MIFIR_INFO ACK_AGREEMENT_UPDATE LLC_AGREEMENT_UPDATE | W8INFO (Expired Tax Form) MIFIR_INFO (MIFIR Data Required)   Optional- used to filter by Login Message Type |

Queries returning more than 10,000 results will trigger a timeout error, Implement pagination using '`limit`' and '`offset`' parameter to manage large result sets.