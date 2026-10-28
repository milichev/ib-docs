> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Final Steps

After confirming all of our interested strikes to retrieve our conIds, we officially have our option chain established. From there, users may be interested to send requests to the [/iserver/marketdata/snapshot endpoint](/docs/web-api/v1/endpoints/market-data/live-market-data-snapshot) in bulk by comma separating the "conids" list.

Alternatively, users that already are aware of the market data potentially through other means can look to start placing orders using the [/iserver/account/\{accountId}/orders endpoint](/docs/web-api/v1/endpoints/orders/place-order).