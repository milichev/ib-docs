> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Trading Sessions in the Web API

Access to Trading functionality in the Web API entails the creation of a trading-enabled *brokerage session*.

A brokerage session is associated with an IB *username* (your credentials), which in turn has trading permissions for one or more *accounts* (the actual pools of equity).

A single username can only have one brokerage session active at a time across all IB platforms.

Permissions for trading in general, for specific asset classes, market data subscriptions (and thus access to the subscribed feeds), etc. are carried by IB usernames, not the underlying accounts. Hence references to brokerage sessions refer to a logged-in username that is in contact with IBKR's backend trading infrastructure.

Though Interactive Brokers permits a username only one brokerage session at any given time, some of the Web API's Trading functionality is accessible without a brokerage session. This allows a username's active brokerage session to continue elsewhere undisturbed.

We typically refer to these non-brokerage features as the "read-only" subset of the Trading portion of the Web API. Examples of read-only features include retrieval of portfolio data and certain instrument search tools. When trading with the Web API, sessions can therefore be thought of as two-tiered:

## Trading Session Best Practices

1. An "outer" prerequisite *read-only session* that is required to be active/valid in order to make any CP Web API request, though by itself it only permits access to non-`/iserver` endpoints.
2. The *brokerage session*, established after the read-only, that permits access to trading, consumption of market data, and all other functionality behind `/iserver` endpoints.

Certain features of the Trading Web API are only available via a brokerage session. The brokerage endpoints have `/iserver` in their path. This encompasses all market data and order submission features.

Brokerage sessions are stateful. A handful of steps are required or strongly encouraged immediately following the creation of a new brokerage session, and their effects will persist for the duration of the session.

* Brokerage sessions are created via [POST /iserver/auth/ssodh/init?publish=true\&compete=true](/docs/web-api/api-reference/trading/trading-session/initialize-session).
* Immediately following a successful `/init` request, an API client should wait for 2 seconds before proceeding with further `/iserver` requests.
* Following the 2 second pause, issue a request to [GET /iserver/accounts](/docs/web-api/api-reference/trading/trading-accounts/get-brokerage-accounts), and confirm its response is non-empty. This non-empty response signals that the brokerage session is active and ready for use.
* Optional, but strongly recommended: If you intend to use your brokerage session for order submission, you may consider suppressing the various messages that are emitted during that process. These messages typically take the form of an additional confirmation or acknowledgement by the client, without which the order will not be accepted. All such messages can be preemptively disabled via a single request to [POST /iserver/questions/suppress](/docs/web-api/api-reference/trading/trading-orders/suppress-order-replies) with the payload prescribed in [Order Reply Suppression](/docs/web-api/trading/orders/order-reply-suppression).

Brokerage sessions are terminated when unused for longer than 5 minutes. If you intend to use brokerage functionality on an ongoing basis over the course of a day, we strongly recommend you instantiate a brokerage session once and keep it alive as long as it's needed, rather than revisiting the startup workflow described above. Any request to an /iserver endpoint will achieve this keep-alive behavior, as will open market data streams via websocket. Alternatively, you can occasionally poll the [/tickle endpoint](/docs/web-api/api-reference/trading/trading-session/get-session-token).