[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-summary/requesting-account-summary)

# Requesting Account Summary

Requests a specific account's summary. This method will subscribe to the account summary as presented in the TWS' Account Summary tab. Customers can specify the data received by using a specific tags value. See the Account Summary Tags section for available options.

Alternatively, many languages offer the import of AccountSummaryTags with a method to retrieve all tag values.

#### EClient.reqAccountSummary (

**reqId:** int. The unique request identifier.

**group:** String. set to "All" to return account summary data for all accounts, or set to a specific Advisor Account Group name that has already been created in TWS Global Configuration.

**tags:** String. A comma separated list with the [desired tags](#account-summary-tags)

)

**Important:** only **two** active summary subscriptions are allowed at a time!
