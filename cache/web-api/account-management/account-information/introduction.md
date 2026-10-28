> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Introduction

The `/api/v1/accounts/{{accountId}}/details` can be used to view account information based on the `accountId`.

The endpoint returns same data that is returned in IBKR's end of day Acct_Status including:

* Application Information (Date Started, Date Approved, Date Opened, Status, Date Funded, Applicant Type, External ID )
* Profile Information (Name, Address, Contact Information, Employment Information, Identification Document Information, Accepted Signatures)
* Fee Configuration and Effective Date
* Account Configuration (Base Currency, Permissions, Special Programs including SYEP and DRIP, MIFID Category, Market Data Subscriptions)
* Trading Capabilities (Requested, Approved, Activated, Margin Type, Options Level)
* Financial Information (Net Worth, Income, Sources of Wealth)
* Appropriateness (Investment Objectives, Knowledge & Experience)
* Risk Score
* User (Username, Last Login, Two Factor Authentication, Last Login)