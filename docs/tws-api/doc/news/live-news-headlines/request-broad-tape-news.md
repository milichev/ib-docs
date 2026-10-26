[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/live-news-headlines/request-broad-tape-news)

# Request BroadTape News

#### BroadTape News Contracts

For BroadTape News you specify the contract for the specific news source. This is uniquely identified by the symbol and exchange. The symbol of an instrument can easily be obtained via the [EClientSocket.reqContractDetails](#request-contract-details) request.

The symbol is typically the provider code, a colon, then the news provider codes appended with "\_ALL"

#### Example news contract
