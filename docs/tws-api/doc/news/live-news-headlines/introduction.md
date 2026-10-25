[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/live-news-headlines/introduction)

# Introduction

**Important:** in order to obtain news feeds via the TWS API you need to acquire the relevant API-specific subscriptions via your Account Management.

News articles provided through the API may not correspond to what is available directly through the Trader Workstation. Off-platform distribution of data is at the discretion of the news source provider, not by Interactive Brokers.

When invoking IBApi.EClient.reqMktData, for a specific IBApi.Contract you will follow the same format convention as any other basic contracts. The News Source is identified by the genericTickList argument.

**Note:** The error message "invalid tick type" will be returned if the username has not added the appropriate API news subscription.

****Note**:** For Briefing Trader live head lines via the API is only offered on a case-by-case basis directly from Briefing.com offers Briefing Trader subscribers access to the subscription live head lines via the API. For more information and to submit an API entitlement application, please contact Briefing.com directly at [dbeasley@briefing.com](mailto:dbeasley@briefing.com)
