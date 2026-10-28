> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Simple Syntax

Simple Syntax is built to supply all of the contract details in a single string. This can be a useful tool to compile all of the data in one cell for ease of access.

This is most suited for contracts with less detail, such as Stocks or Indices.

The ticker string is delimited with the use of a forward slash, '/'. Each attribute of a contract has a unique position in the series of forward slashes that determines what value should be sent.

Simple Syntax Structure: "SYMBOL\@EXCHANGE/PRIMEXCH/SECTYPE/EXPIRATION/RIGHT/STRIKE/CURRENCY"

Example Structure: "SPX\@SMART/CBOE/OPT/20230810/P/4480/USD"

***Notes:***

1. Not all contract attributes are required to be specified. You can leave the field to be blank to make that field un-specified. Sequentially, if you only need to specify several contract attributes at the begining part of the Ticker string, you can leave out the rest of the string entirely as well. For example, instead of specifying "SPY\@SMART//////", "SPY\@SMART" would be sufficient to define the contract properly.
2. There are several default contract attributes in the Ticker string. If you leave them un-specified, they will take the default values as following:
   * EXCHANGE **=**"SMART"
   * SECTYPE **=**"STK"
   * CURRENCY **=**"USD"

*For example, Ticker = "SPY" is the same as "SPY\@SMART//STK////USD".*