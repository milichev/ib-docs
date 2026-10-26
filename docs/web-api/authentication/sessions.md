[source](https://www.interactivebrokers.com/docs/web-api/authentication/sessions)

# Session Authentication

An authenticated brokerage session is necessary to receive market data, place orders, and generally across all /iserver endpoints. A brokerage session (or trading session) is established by a username (your credentials), which in turn has trading permissions for one or more accounts (the actual pools of equity). A single username can only have one trading (or "brokerage") session active at a time. Permissions for trading in general/ for specific asset classes, market data subscriptions (and thus access to the subscribed feeds), etc. are carried by usernames, not the underlying accounts. Hence references to brokerage sessions refer to a logged-in username that is in contact with IBKR's backend trading infrastructure.

In the case of OAuth 1.0a, the Access Token is directly tied to the user during initial registration. For OAuth 2.0, the credential value is directly related to the authenticated user session.

## Background regarding Web API sessions

1. An IB username can only have one brokerage session open at a time, i.e., it can only trade and use similarly restricted functionality on one platform (TWS, Client Portal, etc.) at any given moment. Switching to trading on a different platform entails closing the existing brokerage session and opening a new one from the new platform.
2. Web API sessions in general are two-tiered:
   * An "outer" prerequisite "read-only session" that is required to be active/valid in order to make any Web API request, though by itself it only permits access to **non-/iserver** endpoints.
   * The "brokerage session", established after the read-only, that permits access to trading, consumption of market data, and all other functionality behind **/iserver** endpoints.
3. This two-tiered arrangement reflects the way our Client Portal website permits you to log into a read-only session for account management when that username is already logged into a brokerage session elsewhere (e.g., TWS), leaving the TWS brokerage session undisturbed.
