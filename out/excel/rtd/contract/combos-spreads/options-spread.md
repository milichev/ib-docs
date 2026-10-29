[home](../../../../index.md) | [excel](../../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/contract/combos-spreads/options-spread)

# Options Spread

Complex Syntax

Buy 1 DBK May19'17 15 CALL @EUREX+ Sell 1 DBK May19'17 16 CALL @EUREX:

`=RTD("tws.twsrtdserverctrl",,"sym=DBK", "exch=EUREX", "cur=EUR", "sec=BAG", "cmb=270579950#1#BUY#EUREX;270579957#1#SELL#EUREX;", "Bid")`
