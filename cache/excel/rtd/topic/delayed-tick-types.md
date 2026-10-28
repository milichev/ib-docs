> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Delayed Tick Types

When live streaming market data is not available because of missing Market Data Subscription, delayed data will be automatically relayed back. To request delayed data via RTD, you need to specify delayed tick types for the Topic. The table below shows a full list of available delayed tick types:

\*\*\*Note:\**Delayed tick types are 15-minute delayed. Requesting for live tick types without market data subscription will result in error message "Requested market data is not subscribed. Displaying delayed market data…"*

| Tick Name              | Topic String           | Description                                                                                                                                                                                                                             |
| ---------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delayed Bid Size       | "DelayedBidSize"       | Number of contracts (or lots) offered at the bid price.                                                                                                                                                                                 |
| Delayed Bid Price      | "DelayedBid"           | Highest bid price for the contract.                                                                                                                                                                                                     |
| Delayed Ask Price      | "DelayedAsk"           | Lowest offer price for the contract.                                                                                                                                                                                                    |
| Delayed Ask Size       | "DelayedAskSize"       | Number of contracts (or lots) offered at the ask price.                                                                                                                                                                                 |
| Delayed Last Price     | "DelayedLast"          | Last price at which the contract traded.                                                                                                                                                                                                |
| Delayed Last Size      | "DelayedLastSize"      | Number of contracts or lots traded at the last price.                                                                                                                                                                                   |
| Delayed High           | "DelayedHigh"          | High price for the day.                                                                                                                                                                                                                 |
| Delayed Low            | "DelayedLow"           | Low price for the day.                                                                                                                                                                                                                  |
| Delayed Volume         | "DelayedVolume"        | Trading volume for the day for the selected contract (Volume for US Stocks are quoted in lots. The actual number of shares in volume can be calculated by multiplying 100).                                                             |
| Delayed Close Price    | "DelayedClose"         | The last available closing price for the previous day. For US Equities, we use corporate action processing to get the closing price, so the close price is adjusted to reflect forward and reverse splits and cash and stock dividends. |
| Delayed Open Price     | "DelayedOpen"          | Today's opening price. The official opening price requires a market data subscription to the native exchange of a contract.                                                                                                             |
| Delayed Last Timestamp | "DelayedLastTimestamp" | Delayed time of the last trade (in UNIX time) (TWS Build 970+ is required).                                                                                                                                                             |