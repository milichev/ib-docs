[home](../../index.md) | [general](../index.md) | [source](https://www.interactivebrokers.com/docs/general/market-data-subscriptions/regulatory-snapshots)

# Regulatory Snapshots

For stocks, there are individual exchange-specific market data subscriptions necessary to receive streaming quotes. For instance, for NYSE stocks this subscription is known as "Network A", for ARCA/AMEX stocks it is called "Network B" and for NASDAQ stocks it is "Network C". Each subscription is added a la carte and has a separate market data fee.

Alternatively, there is also a "US Securities Snapshot Bundle" subscription which does not provide streaming data but which allows for real time calculated snapshots of US stock market NBBO prices. Making a request with this endpoint, the returned value is a calculation of the current market state based on data from all available exchanges.

Regulatory Snapshots are not available for ETFs, Options, Futures, or instruments other than Common U.S. Stocks.

The following table lists the cost and maximum allocation for regulatory snapshot quotes:

| Listed Network Feed    | Price per reqSnapshot request | Pro or non-Pro | Max reqSnapshot request |
| ---------------------- | ----------------------------- | -------------- | ----------------------- |
| NYSE (Network A/CTA)   | 0.01 USD                      | Pro            | 4500                    |
| NYSE (Network A/CTA)   | 0.01 USD                      | Non-Pro        | 150                     |
| AMEX (Network B/CTA)   | 0.01 USD                      | Pro            | 2300                    |
| AMEX (Network B/CTA)   | 0.01 USD                      | Non-Pro        | 150                     |
| NASDAQ (Network C/UTP) | 0.01 USD                      | Pro            | 2300                    |
| NASDAQ (Network C/UTP) | 0.01 USD                      | Non-Pro        | 150                     |
