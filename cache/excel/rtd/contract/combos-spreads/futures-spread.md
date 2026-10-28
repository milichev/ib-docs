> This page is for Excel.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Futures Spread

Complex Syntax

Buy 1 VXJ7\@CFE + Sell 1 VXK7\@CFE:

`=RTD("tws.twsrtdserverctrl",,"sym=VIX", "exch=CFE", "cur=USD", "sec=BAG", "cmb=249139906#1#BUY#CFE;252623425#1#SELL#CFE;", "Bid")`