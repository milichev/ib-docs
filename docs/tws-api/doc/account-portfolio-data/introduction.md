[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/introduction)

# Introduction

The IBApi.EClient.reqAccountSummary method creates a subscription for the account data displayed in the TWS Account Summary window. It is commonly used with multiple-account structures. Introducing broker (IBroker) accounts with more than 50 subaccounts or configured for on-demand account lookup cannot use reqAccountSummary with group="All". A profile name can be accepted in place of group. See Unification of Groups and Profiles.

The TWS offers a comprehensive overview of your account and portfolio through its Account and Portfolio windows. This information can be obtained via the TWS API through three different kind of requests/operations.
