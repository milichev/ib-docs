> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Stock Spread

Complex Syntax

Buy 1 IBKR\@SMART + Sell 1 MCD\@SMART:

`=RTD("Tws.TwsRtdServerCtrl",,"sym=IBKR,MCD", "exch=SMART", "cur=USD", "sec=BAG", "cmb=43645865#1#BUY#SMART;9408#1#SELL#SMART;", "Bid")`