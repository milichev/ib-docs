[home](../../../../index.md) | [excel](../../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/contract/combos-spreads/futures-spread)

# Futures Spread

Complex Syntax

Buy 1 VXJ7\@CFE + Sell 1 VXK7\@CFE:

`=RTD("tws.twsrtdserverctrl",,"sym=VIX", "exch=CFE", "cur=USD", "sec=BAG", "cmb=249139906#1#BUY#CFE;252623425#1#SELL#CFE;", "Bid")`
