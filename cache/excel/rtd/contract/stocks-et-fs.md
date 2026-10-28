> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Stocks & ETFs

Important notes for Stocks and SMART routing

* Specifying the Exchange as opposed to using PrimaryExchange means requesting data from that exchange specifically.
* Stock symbols that contain a '.' are supported in both Simple Syntax Complex Syntax.
* For certain smart-routed stock contracts that have the same Symbol, Currency and Exchange, you would also need to specify the PrimaryExchange attribute to uniquely define the contract. This should be defined as the native exchange of a contract, and is good practice for all stocks.

Simple Syntax

`=RTD("Tws.TwsRtdServerCtrl",,"SPY@SMART/ARCA/STK///USD", "qt=Open")`

Complex Syntax

`=RTD("Tws.TwsRtdServerCtrl",,"sym=SPY", "sec=STK", "exch=SMART", "cur=USD", "prim=ARCA", "qt=Open")`