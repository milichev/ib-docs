[home](../../../../index.md) | [excel](../../../index.md) | [source](https://www.interactivebrokers.com/docs/excel/rtd/contract/combos-spreads/stock-spread)

# Stock Spread

Complex Syntax

Buy 1 IBKR\@SMART + Sell 1 MCD\@SMART:

`=RTD("Tws.TwsRtdServerCtrl",,"sym=IBKR,MCD", "exch=SMART", "cur=USD", "sec=BAG", "cmb=43645865#1#BUY#SMART;9408#1#SELL#SMART;", "Bid")`
