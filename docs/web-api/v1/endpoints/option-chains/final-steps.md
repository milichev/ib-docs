[source](https://www.interactivebrokers.com/docs/web-api/v1/endpoints/option-chains/final-steps)

# Final Steps

After confirming all of our interested strikes to retrieve our conIds, we officially have our option chain established. From there, users may be interested to send requests to the [/iserver/marketdata/snapshot endpoint](../market-data/live-market-data-snapshot.md) in bulk by comma separating the "conids" list.

Alternatively, users that already are aware of the market data potentially through other means can look to start placing orders using the [/iserver/account/\{accountId}/orders endpoint](../orders/place-order.md).
