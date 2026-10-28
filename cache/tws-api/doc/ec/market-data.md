> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Market Data

Requesting market data for event contracts will follow the same request structure as for any other security type.

Noted in our [Contract Definition & Discovery](/docs/tws-api/doc/ec/contracts) section, ForecastEx instruments do not support buying and selling. Therefore, "BID" and "ASK" values will not correlate to buy and sell values, but the "Highest Bid" and "Buy **Yes** Now at" prices for the Bid and Ask respectively.

Because "BID" and "ASK" do not correctly directly to Buying and Selling, historical "Trades" nor real-time "Last" prices will not be available.