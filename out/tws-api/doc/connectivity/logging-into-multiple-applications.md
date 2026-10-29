[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/logging-into-multiple-applications)

# Logging into multiple applications

It is not possible to login to multiple trading applications simultaneously with the same username. However, it is possible to create additional usernames for an account that can be used in different trading applications simultaneously, as long as there is not more than a single trading application logged in with a given username at a time. There are some additional cases in which it is also useful to create additional usernames:

* If TWS or IBGW is logged in with a username that is used to login to Client Portal during that session, that application will not be able to automatically reconnect to the server after the next disconnection (such as the server reset).
* A TWS or IBGW session logged into a paper trading account will not to receive market data if it is sharing data from a live user which is used to login to Client Portal.

If a different username is utilized to login to Client Portal in either of these cases, then it will not affect the TWS/IBGW session.

[How to add additional usernames in Account Management](https://www.ibkrguides.com/clientportal/uar/addingauser.htm)

* It is important to note that market data subscriptions are setup independently for each live username.
