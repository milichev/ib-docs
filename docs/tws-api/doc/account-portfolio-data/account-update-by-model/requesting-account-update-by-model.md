[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-update-by-model/requesting-account-update-by-model)

# Requesting Account Update by Model

The IBApi.EClient.reqAccountUpdatesMulti can be used in any account structure to create simultaneous account value subscriptions from one or multiple accounts and/or models. As with IBApi.EClient.reqAccountUpdates the data returned will match that displayed within the TWS Account Window.

#### EClient.reqAccountUpdatesMulti (

**reqId:** int. Identifier to label the request

**account:** String. Account values can be requested for a particular account

**modelCode:** String. Values can also be requested for a model

**ledgerAndNLV:** bool. returns light-weight request; only currency positions as opposed to account values and currency positions

)

Requests account updates for account and/or model.

IBApi.EClient.reqAccountUpdatesMulti cannot be used with Account="All" in IBroker accounts with more than 50 subaccounts.

A profile name can be accepted in place of group in the account parameter for [Financial Advisors](../positions-by-model/request-positions-by-model.md)
