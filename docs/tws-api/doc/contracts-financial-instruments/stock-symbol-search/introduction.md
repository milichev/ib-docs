[source](https://www.interactivebrokers.com/docs/tws-api/doc/contracts-financial-instruments/stock-symbol-search/introduction)

# Introduction

The function IBApi::EClient::reqMatchingSymbols is available to search for stock contracts. The input can be either the first few letters of the ticker symbol, or for longer strings, a character sequence matching a word in the security name. For instance to search for the stock symbol 'IBKR', the input 'I' or 'IB' can be used, as well as the word 'Interactive'. Up to 16 matching results are returned.

There must be an interval of at least 1 second between successive calls to reqMatchingSymbols

Matching stock contracts are returned to IBApi::EWrapper::symbolSamples with information about types of derivative contracts which exist (warrants, options, dutch warrants, futures).
