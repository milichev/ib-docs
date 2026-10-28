> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Market Data Update Frequency

Watchlist market data at Interactive Brokers is derived from time-based snapshot intervals which vary by product and region. This means that a given tick will only update as frequently as its interval allows. See the table for more details on product specifics.

Please keep in mind that the Web API still retains a standard pacing limit of 10 requests per second. For more frequency returns, implement the [smd websocket topic](/docs/web-api/ws/streaming-data) in place of the HTML endpoint.

| Product      | Frequency |
| ------------ | --------- |
| All Products | 500ms     |