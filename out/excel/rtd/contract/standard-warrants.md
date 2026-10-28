[source](https://www.interactivebrokers.com/docs/excel/rtd/contract/standard-warrants)

# Standard Warrants

Simple Syntax

Comment: Use Symbol, LastTradeDateOrContractMonth, Right and Strike to define warrants contract.

`=RTD("tws.twsrtdserverctrl",,"MSFT@FWB//WAR/202401/C/200/EUR", "Bid")`

Complex Syntax

LocalSymbol can be used to define warrants contract.

`=RTD("tws.twsrtdserverctrl",,"loc=TT45K3","cur=EUR", "exch=FWB", "sec=WAR", "qt=Bid")`
