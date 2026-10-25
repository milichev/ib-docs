[source](https://www.interactivebrokers.com/docs/tws-api/doc/event-trading/market-data)

# Market Data

Requesting market data for event contracts will follow the same request structure as for any other security type.

Noted in our [Contract Definition & Discovery](contracts.md) section, ForecastEx instruments do not support buying and selling. Therefore, "BID" and "ASK" values will not correlate to buy and sell values, but the "Highest Bid" and "Buy **Yes** Now at" prices for the Bid and Ask respectively.

Because "BID" and "ASK" do not correctly directly to Buying and Selling, historical "Trades" nor real-time "Last" prices will not be available.
