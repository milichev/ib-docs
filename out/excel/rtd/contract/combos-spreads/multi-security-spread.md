[source](https://www.interactivebrokers.com/docs/excel/rtd/contract/combos-spreads/multi-security-spread)

# Multi-Security Spread

Complex Syntax

Buy 1 CL May'17 @COMEX+ Sell 1 BZ Jun'17 @COMEX:

`=RTD("tws.twsrtdserverctrl",,"sym=CL.BZ", "exch=COMEX", "cur=USD", "sec=BAG", "cmb=55977404#1#BUY#COMEX;55807026#1#SELL#COMEX;", "Bid")`
