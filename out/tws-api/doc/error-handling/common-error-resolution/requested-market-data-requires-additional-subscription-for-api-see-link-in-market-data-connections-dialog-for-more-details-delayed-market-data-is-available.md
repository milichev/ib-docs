[source](https://www.interactivebrokers.com/docs/tws-api/doc/error-handling/common-error-resolution/requested-market-data-requires-additional-subscription-for-api-see-link-in-market-data-connections-dialog-for-more-details-delayed-market-data-is-available)

# Requested market data requires additional subscription for API. See link in 'Market Data Connections' dialog for more details.Delayed market data is available.

Error 10089 notes that clients are requesting market data when they do not maintain a valid market data subscription. To resolve this issue, users must add a market data subscription to the specific user they are requesting market data with. Alternatively, users must [request delayed market data](../../md/delayed-data.md) prior to requesting market data.

Market data availability is different in \[TWS versus the API]. As a result, market data you can receive in Trader Workstation may not be available in the API.

Interactive Brokers lists many of our most popular market data subscriptions \[here].
