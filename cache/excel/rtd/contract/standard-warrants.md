> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Standard Warrants

Simple Syntax

Comment: Use Symbol, LastTradeDateOrContractMonth, Right and Strike to define warrants contract.

`=RTD("tws.twsrtdserverctrl",,"MSFT@FWB//WAR/202401/C/200/EUR", "Bid")`

Complex Syntax

LocalSymbol can be used to define warrants contract.

`=RTD("tws.twsrtdserverctrl",,"loc=TT45K3","cur=EUR", "exch=FWB", "sec=WAR", "qt=Bid")`